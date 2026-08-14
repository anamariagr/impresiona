from flask import Flask, request, jsonify, send_from_directory, abort
from flask_cors import CORS
import os
import json
import base64
from pathlib import Path

app = Flask(__name__, static_folder='')
CORS(app)

DATA_FILE = 'server_products.json'
UPLOAD_FOLDER = 'uploads'
Path(UPLOAD_FOLDER).mkdir(exist_ok=True)

def load_store():
    if not os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'w', encoding='utf-8') as f:
            json.dump([], f)
        return []
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        try:
            return json.load(f)
        except Exception:
            return []

def save_store(products):
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(products, f, ensure_ascii=False, indent=2)

@app.route('/api/products', methods=['GET'])
def get_products():
    products = load_store()
    return jsonify(products)

@app.route('/api/products', methods=['POST'])
def create_product():
    data = request.get_json(force=True)
    if not data or 'id' not in data or 'name' not in data:
        return jsonify({'error': 'invalid payload'}), 400
    products = load_store()
    # if exists, replace
    existing = next((p for p in products if p['id'] == data['id']), None)
    # handle image (data URL)
    image = data.get('image')
    if image and image.startswith('data:'):
        try:
            header, b64 = image.split(',', 1)
            ext = 'jpg'
            if 'png' in header:
                ext = 'png'
            filename = f"{data['id']}.{ext}"
            path = os.path.join(UPLOAD_FOLDER, filename)
            with open(path, 'wb') as imgf:
                imgf.write(base64.b64decode(b64))
            data['image'] = f"/{UPLOAD_FOLDER}/{filename}"
        except Exception as e:
            print('image save failed', e)
            data['image'] = None
    # remove any big non-serializable fields
    if existing:
        products = [p if p['id'] != data['id'] else data for p in products]
    else:
        products.insert(0, data)
    save_store(products)
    return jsonify(data), 201

@app.route('/api/products/<pid>', methods=['DELETE'])
def delete_product(pid):
    products = load_store()
    new = [p for p in products if p.get('id') != pid]
    if len(new) == len(products):
        return jsonify({'error': 'not found'}), 404
    save_store(new)
    # try remove image file
    for ext in ('jpg','png'):
        path = os.path.join(UPLOAD_FOLDER, f"{pid}.{ext}")
        if os.path.exists(path):
            try:
                os.remove(path)
            except Exception:
                pass
    return jsonify({'ok': True})

@app.route('/uploads/<path:filename>')
def uploads(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
