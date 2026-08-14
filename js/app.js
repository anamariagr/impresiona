const WHATSAPP_NUMBER = "573170999213";

const COLOR_MAP = {
  "blanco": "#ffffff",
  "negro": "#1a1a1a",
  "azul navy": "#0d3768",
  "azul": "#1857a4",
  "azul rey": "#1857a4",
  "gris": "#9aa5b1",
  "gris jaspe": "#b7bec7",
  "rojo": "#c0392b",
  "vino tinto": "#6d1f2b",
  "verde": "#2e7d4f",
  "verde militar": "#4b5d3a",
  "amarillo": "#f4c873",
  "dorado": "#e8a33d",
  "beige": "#e8dcc8",
  "morado": "#5b2a86",
  "rosado": "#e88fb0",
  "naranja": "#e8743d",
  "café": "#6b4423",
};

function colorToHex(name) {
  return COLOR_MAP[name.trim().toLowerCase()] || "#cccccc";
}

const MONTHS = [
  { key: "enero", label: "Enero", icon: "calendar_month", eventos: "Bienvenida de año, primicias, calendario 2026" },
  { key: "febrero", label: "Febrero", icon: "favorite", eventos: "Amor y Amistad, día del amor, campañas de invitación" },
  { key: "marzo-abril", label: "Marzo - Abril", icon: "eco", eventos: "Semana Santa, pascua, retiros espirituales" },
  { key: "mayo", label: "Mayo", icon: "local_florist", eventos: "Día de la Madre, celebraciones familiares" },
  { key: "junio", label: "Junio", icon: "badge", eventos: "Día del Padre, congresos y eventos deportivos" },
  { key: "julio", label: "Julio", icon: "camping", eventos: "Campamentos, escuela bíblica de vacaciones" },
  { key: "agosto", label: "Agosto", icon: "celebration", eventos: "Congresos, encuentros de oración" },
  { key: "septiembre", label: "Septiembre", icon: "family_restroom", eventos: "Día de la Familia, retiros familiares" },
  { key: "octubre", label: "Octubre", icon: "celebration", eventos: "Halloween, evangelismo y actividades creativas" },
  { key: "noviembre", label: "Noviembre", icon: "festival", eventos: "Acción de gracias, aniversarios y ceremonias" },
  { key: "diciembre", label: "Diciembre", icon: "holiday_village", eventos: "Navidad, fin de año, cantatas y cenas" },
  { key: "baby-shower", label: "Baby Shower", icon: "child_care", eventos: "Bienvenida al bebé, regalos personalizados" },
  { key: "aniversarios", label: "Aniversarios", icon: "favorite", eventos: "Celebraciones de pareja e hitos personales" },
  { key: "despedida-matrimonial", label: "Despedida Matrimonial", icon: "celebration", eventos: "Despedidas y preparativos de boda" },
  { key: "cumpleaños", label: "Cumpleaños", icon: "cake", eventos: "Fiestas de cumpleaños y eventos especiales" },
];

const OCCASIONS = [
  { key: "cumpleanos", label: "Cumpleaños", icon: "cake", desc: "Detalles para celebrar la vida de tus seres queridos." },
  { key: "baby-shower", label: "Baby Shower", icon: "child_care", desc: "Recuerdos tiernos para la llegada de una nueva bendición." },
  { key: "matrimonio", label: "Celebración Matrimonial", icon: "diamond", desc: "Detalles elegantes para bodas y compromisos." },
  { key: "aniversario", label: "Aniversarios", icon: "favorite", desc: "Recuerdos especiales para aniversarios de pareja y ministerio." },
];

const CATEGORIES = [
  { key: "cumpleanos", label: "Cumpleaños", icon: "cake", description: "Sorpresas personalizadas para celebrar cada año." },
  { key: "empresas", label: "Empresas", icon: "domain", description: "Regalos corporativos, merchandising y eventos empresariales." },
  { key: "iglesias", label: "Iglesias", icon: "account_balance", description: "Productos para cultos, congresos y celebraciones religiosas." },
  { key: "colegios", label: "Colegios", icon: "school", description: "Artículos para regreso a clases, fiestas escolares y graduaciones." },
  { key: "bodas", label: "Bodas", icon: "diamond", description: "Recuerdos elegantes para el día más especial." },
  { key: "bebes", label: "Bebés", icon: "child_care", description: "Ideas dulces para baby showers y nacimientos." },
  { key: "graduaciones", label: "Graduaciones", icon: "school", description: "Detalles para celebrar logros académicos." },
  { key: "navidad", label: "Navidad", icon: "holiday_village", description: "Regalos festivos y productos para la temporada navideña." },
  { key: "amor-amistad", label: "Amor y Amistad", icon: "favorite", description: "Detalles románticos y para amistades cercanas." },
  { key: "dia-madre", label: "Día de la Madre", icon: "local_florist", description: "Regalos emotivos para mamá." },
  { key: "dia-padre", label: "Día del Padre", icon: "male", description: "Ideas para sorprender al papá de la casa." },
  { key: "halloween", label: "Halloween", icon: "celebration", description: "Artículos divertidos y temáticos para la noche de brujas." },
  { key: "regreso-clases", label: "Regreso a clases", icon: "menu_book", description: "Productos prácticos para el nuevo año escolar." },
  { key: "deportes", label: "Eventos deportivos", icon: "sports_soccer", description: "Recuerdos para competencias y torneos." },
];

const CLIENT_TYPES = [
  { key: "personas", label: "Personas" },
  { key: "empresas", label: "Empresas" },
  { key: "iglesias", label: "Iglesias" },
  { key: "instituciones", label: "Instituciones Educativas" },
  { key: "emprendedores", label: "Emprendedores" },
];

const BEST_SELLERS = [
  { title: "Mugs personalizados", icon: "coffee", desc: "Perfectos para regalos de equipo, congresos y fechas especiales." },
  { title: "Vasos con logo", icon: "local_drink", desc: "Súper demandados para empresas, colegios e iglesias." },
  { title: "Busos con diseño", icon: "checkroom", desc: "Una opción cálida y memorable para eventos de grupo." },
];

const GIFT_IDEAS = [
  { title: "Set de esferos premium", icon: "edit", desc: "Un detalle elegante para invitados y colaboradores." },
  { title: "Calendario de pastoría", icon: "event", desc: "Regalo útil para iglesias y comunidades religiosas." },
  { title: "Termo para maestros", icon: "thermostat", desc: "Excelente para colegios y equipos educativos." },
];

const PRODUCT_TYPES = [
  { key: "camisas", label: "Camisas", icon: "checkroom", image: "./img/camiseta-ano-bendicion-enero.jpg" },
  { key: "busos", label: "Busos / Sudaderas", icon: "checkroom", image: "./img/camiseta-ano-bendicion-enero.jpg" },
  { key: "vasos", label: "Vasos", icon: "local_drink", image: "./img/vaso-primicias-enero.png" },
  { key: "calendarios", label: "Calendarios", icon: "event", image: "./img/calendario-bendicion.png" },
  { key: "mugs", label: "Mugs / Tazas", icon: "coffee", image: "./img/vaso-primicias-enero.png" },
  { key: "esferos", label: "Esferos / Botilitos", icon: "edit", image: "./img/esferos.png"},
  { key: "trofeos", label: "Trofeos / Placas", icon: "emoji_events" },
  { key: "gorras", label: "Gorras", icon: "military_tech" },
  { key: "llaveros", label: "Llaveros", icon: "key" },
  { key: "agendas", label: "Agendas / Cuadernos", icon: "menu_book" },
  { key: "termos", label: "Termos / Botilitos", icon: "thermostat", image: "./img/termo.png"},
  { key: "manillas", label: "Manillas", icon: "watch" },
  { key: "bolsos", label: "Bolsos / Totebags", icon: "shopping_bag" },
  { key: "pendones", label: "Pendones / Banners", icon: "campaign" },
  { key: "stickers", label: "Stickers", icon: "sticky_note_2" },
  { key: "otros", label: "Otros recuerdos", icon: "category" },
];

const SEED_PRODUCTS = [
  {
    id: "p1",
    name: "Vaso corporativo",
    type: "vasos",
    month: "noviembre",
    clientType: "empresas",
    price: "$12.000",
    desc: "Vasos personalizados para eventos empresariales y campañas.",
    image: "./img/vaso-primicias-enero.png",
    custom: true,
  },
  {
    id: "p2",
    name: "Buso aniversario",
    type: "busos",
    month: "julio",
    clientType: "iglesias",
    price: "$45.000",
    desc: "Busos con diseño congregacional para aniversarios y retiros.",
    image: "./img/camiseta-ano-bendicion-enero.jpg",
    custom: true,
  },
  {
    id: "p3",
    name: "Taza de regalo",
    type: "mugs",
    month: "diciembre",
    clientType: "personas",
    price: "$18.000",
    desc: "Mugs personalizados para Navidad y regalos de fin de año.",
    image: "./img/vaso-primicias-enero.png",
    custom: true,
  },
  {
    id: "p4",
    name: "Termo para maestros",
    type: "termos",
    month: "marzo-abril",
    clientType: "instituciones",
    price: "$22.000",
    desc: "Termos con logo para colegios y eventos de regreso a clases.",
    image: "./img/termo.png",
    custom: true,
  },
  {
    id: "p5",
    name: "Esfero con nombre",
    type: "esferos",
    month: "junio",
    clientType: "personas",
    price: "$3.500",
    desc: "Esferos personalizados ideales para congresos y celebraciones.",
    image: "./img/esferos.png",
    custom: true,
  },
  {
    id: "p6",
    name: "Calendario de bendición",
    type: "calendarios",
    month: "enero",
    clientType: "iglesias",
    price: "$25.000",
    desc: "Calendarios con diseños religiosos para el nuevo año.",
    image: "./img/calendario-bendicion.png",
    custom: true,
  },
];

const STORAGE_KEY = "detodo_productos";

function loadProducts() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_PRODUCTS));
    return [...SEED_PRODUCTS];
  }
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [...SEED_PRODUCTS];
  } catch {
    return [...SEED_PRODUCTS];
  }
}

function saveProducts(products) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    return true;
  } catch (err) {
    alert("La foto es muy pesada y no se pudo guardar el producto (almacenamiento del navegador lleno). Usa una foto más liviana o elimina productos viejos con foto, y vuelve a intentarlo.");
    return false;
  }
}

let products = loadProducts();
let activeMonth = "todos";
let uploadedImageData = null;

function typeInfo(key) {
  return PRODUCT_TYPES.find((t) => t.key === key) || PRODUCT_TYPES[PRODUCT_TYPES.length - 1];
}
function monthInfo(key) {
  return MONTHS.find((m) => m.key === key);
}
function renderIcon(name, additionalClass = "") {
  if (!name) return "";
  const iconClass = `material-symbols-outlined ${additionalClass}`.trim();
  return `<span class="${iconClass}">${name}</span>`;
}

function buildWhatsappLink(productName) {
  const base = "Hola, quiero cotizar";
  const text = productName ? `${base} el producto "${productName}" de deTodo.` : `${base} recuerdos personalizados de deTodo.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function buildProductShareUrl(product) {
  if (!product || !product.id) return "";
  const baseUrl = window.location.href.split("?")[0];
  const params = new URLSearchParams({ product: product.id });
  return `${baseUrl}?${params.toString()}`;
}

function buildFacebookShareLink(product) {
  const productUrl = buildProductShareUrl(product);
  if (!productUrl) return "";
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
}

function initHeaderLinks() {
  const link = buildWhatsappLink();
  document.getElementById("btnWhatsappHeader").href = link;
  document.getElementById("btnWhatsappContact").href = link;
  document.getElementById("floatingWhatsapp").href = link;
  const formatted = "+" + WHATSAPP_NUMBER.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");
  document.getElementById("whatsappNumberLabel").textContent = formatted;
}

function renderCalendar() {
  const grid = document.getElementById("calendarGrid");
  grid.innerHTML = MONTHS.map((m) => `
    <button class="calendar-card ${activeMonth === m.key ? "active" : ""}" data-month="${m.key}">
      <div class="cal-month">${renderIcon(m.icon, "cal-icon")} ${m.label}</div>
    </button>
  `).join("");
  grid.querySelectorAll(".calendar-card").forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.dataset.month;
      activeMonth = activeMonth === key ? "todos" : key;
      document.getElementById("filterMonth").value = activeMonth;
      renderCalendar();
      renderCatalog();
      document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
    });
  });
}



function populateSelects() {
  const filterMonth = document.getElementById("filterMonth");
  const filterType = document.getElementById("filterType");
  const filterClient = document.getElementById("filterClient");
  const pMonth = document.getElementById("pMonth");
  const pType = document.getElementById("pType");
  const pIcon = document.getElementById("pIcon");
  const pClientType = document.getElementById("pClientType");
  const qMonth = document.getElementById("qMonth");
  const qProductsGrid = document.getElementById("qProductsGrid");

  MONTHS.forEach((m) => {
    filterMonth.insertAdjacentHTML("beforeend", `<option value="${m.key}">${renderIcon(m.icon)} ${m.label}</option>`);
    pMonth.insertAdjacentHTML("beforeend", `<option value="${m.key}">${renderIcon(m.icon)} ${m.label}</option>`);
    qMonth.insertAdjacentHTML("beforeend", `<option value="${m.key}">${renderIcon(m.icon)} ${m.label}</option>`);
  });
  PRODUCT_TYPES.forEach((t) => {
    filterType.insertAdjacentHTML("beforeend", `<option value="${t.key}">${t.label}</option>`);
    pType.insertAdjacentHTML("beforeend", `<option value="${t.key}">${t.label}</option>`);
    pIcon.insertAdjacentHTML("beforeend", `<option value="${t.icon}">${t.label}</option>`);
    qProductsGrid.insertAdjacentHTML("beforeend", `
      <label class="checkbox-option">
        <input type="checkbox" name="qProduct" value="${t.label}"> ${renderIcon(t.icon)} ${t.label}
      </label>
    `);
  });
  CLIENT_TYPES.forEach((c) => {
    filterClient.insertAdjacentHTML("beforeend", `<option value="${c.key}">${c.label}</option>`);
    pClientType.insertAdjacentHTML("beforeend", `<option value="${c.key}">${c.label}</option>`);
  });
}

function placeholderHeight(p) {
  const tiers = [110, 150, 190, 230];
  let hash = 0;
  for (const ch of p.id + p.name) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return tiers[hash % tiers.length];
}

function productCardHTML(p) {
  const t = typeInfo(p.type);
  const imageSrc = p.image || t.image;
  const media = imageSrc
    ? `<img src="${imageSrc}" alt="${p.name}">`
    : `<span style="display:block; height:${placeholderHeight(p)}px;">${renderIcon(t.icon)}</span>`;
  const colorsAttr = p.colors && p.colors.length ? ` data-zoom-colors='${JSON.stringify(p.colors)}'` : "";
  return `
    <div class="product-card"${imageSrc ? ` data-zoom-image="${imageSrc}"` : ""}${colorsAttr}>
      ${p.custom ? '<span class="badge-custom">Nuevo</span>' : ""}
      <div class="product-media">${media}</div>
      <div class="product-body">
        <span class="product-tag">${renderIcon(t.icon)} ${t.label}</span>
        <span class="product-name">${p.name}</span>
        ${p.desc ? `<span class="product-desc">${p.desc}</span>` : ""}
        ${p.specialDay ? `<span class="product-special">Día especial: ${p.specialDay}</span>` : ""}
        <div class="product-footer">
          <span class="product-price">${p.price || ""}</span>
          <div class="product-actions">
            <a class="btn btn-whatsapp btn-sm" title="Cotizar" href="${buildWhatsappLink(p.name)}" target="_blank" rel="noopener">Cotizar</a>
            <button class="icon-btn" title="Compartir producto" data-share="${p.id}">${renderIcon("share")}</button>
            ${p.custom ? `<button class="icon-btn danger" title="Eliminar" data-delete="${p.id}">${renderIcon("delete")}</button>` : ""}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCatalog() {
  const monthFilter = document.getElementById("filterMonth").value;
  const typeFilter = document.getElementById("filterType").value;
  const clientFilter = document.getElementById("filterClient").value;
  const search = document.getElementById("filterSearch").value.trim().toLowerCase();

  const filtered = products.filter((p) => {
    if (monthFilter !== "todos" && p.month !== monthFilter) return false;
    if (typeFilter !== "todos" && p.type !== typeFilter) return false;
    if (clientFilter !== "todos" && p.clientType !== clientFilter) return false;
    if (search) {
      const clientLabel = CLIENT_TYPES.find((c) => c.key === p.clientType)?.label || "";
      const hay = `${p.name} ${p.desc || ""} ${typeInfo(p.type).label} ${clientLabel} ${p.month}`.toLowerCase();
      if (!hay.includes(search)) return false;
    }
    return true;
  });

  const container = document.getElementById("catalogContainer");
  const empty = document.getElementById("catalogEmpty");

  if (!filtered.length) {
    container.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");

  const monthsToShow = monthFilter !== "todos" ? [monthFilter] : MONTHS.map((m) => m.key);

  container.innerHTML = monthsToShow
    .map((mk) => {
      const items = filtered.filter((p) => p.month === mk);
      if (!items.length) return "";
      const m = monthInfo(mk);
      return `
        <div class="month-group">
          <div class="month-group-header">
            <h3>${renderIcon(m.icon)} ${m.label}</h3>
          </div>
          <div class="product-grid">${items.map(productCardHTML).join("")}</div>
        </div>
      `;
    })
    .join("");

  container.querySelectorAll(".product-media img").forEach((img) => {
    img.addEventListener("error", () => {
      img.closest(".product-media").innerHTML = "";
    }, { once: true });
  });

  container.querySelectorAll("[data-delete]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.delete;
      if (confirm("¿Eliminar este producto del catálogo?")) {
        products = products.filter((p) => p.id !== id);
        saveProducts(products);
        renderCatalog();
      }
    });
  });

  container.querySelectorAll("[data-share]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.share;
      const product = products.find((p) => p.id === id);
      if (!product) return;
      const shareUrl = buildProductShareUrl(product);
      const facebookUrl = buildFacebookShareLink(product);

      if (navigator.share) {
        navigator.share({
          title: product.name,
          text: `Mira este producto: ${product.name}`,
          url: shareUrl,
        }).catch(() => {});
        return;
      }

      window.open(facebookUrl, "_blank", "noopener,noreferrer");
    });
  });
}

function openSharedProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("product");
  if (!id) return;
  const sharedProduct = products.find((p) => p.id === id);
  if (!sharedProduct) return;

  document.getElementById("filterSearch").value = sharedProduct.name;
  renderCatalog();
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
}

/* ---------- Modal / Upload ---------- */
const modalOverlay = document.getElementById("modalOverlay");
const productForm = document.getElementById("productForm");

function openModal() {
  modalOverlay.classList.add("open");
}
function closeModal() {
  modalOverlay.classList.remove("open");
  productForm.reset();
  uploadedImageData = null;
  document.getElementById("imagePreview").classList.add("hidden");
  document.getElementById("imageDropText").classList.remove("hidden");
}

function handleImageFile(file) {
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const MAX_DIM = 900;
      let { width, height } = img;
      if (width > MAX_DIM || height > MAX_DIM) {
        if (width > height) {
          height = Math.round(height * (MAX_DIM / width));
          width = MAX_DIM;
        } else {
          width = Math.round(width * (MAX_DIM / height));
          height = MAX_DIM;
        }
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(img, 0, 0, width, height);
      uploadedImageData = canvas.toDataURL("image/jpeg", 0.82);

      const preview = document.getElementById("imagePreview");
      preview.src = uploadedImageData;
      preview.classList.remove("hidden");
      document.getElementById("imageDropText").classList.add("hidden");
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function initModalEvents() {
  document.getElementById("btnOpenAdmin").addEventListener("click", openModal);
  document.getElementById("btnEmptyAdd").addEventListener("click", openModal);
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalCancel").addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  const imageDrop = document.getElementById("imageDrop");
  const imageInput = document.getElementById("pImage");
  imageDrop.addEventListener("click", () => imageInput.click());
  imageInput.addEventListener("change", (e) => handleImageFile(e.target.files[0]));
  imageDrop.addEventListener("dragover", (e) => {
    e.preventDefault();
    imageDrop.classList.add("dragover");
  });
  imageDrop.addEventListener("dragleave", () => imageDrop.classList.remove("dragover"));
  imageDrop.addEventListener("drop", (e) => {
    e.preventDefault();
    imageDrop.classList.remove("dragover");
    handleImageFile(e.dataTransfer.files[0]);
  });

  productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("pName").value.trim();
    const type = document.getElementById("pType").value || (PRODUCT_TYPES[0] && PRODUCT_TYPES[0].key);
    const month = document.getElementById("pMonth").value || (MONTHS[0] && MONTHS[0].key);
    const colors = document.getElementById("pColors").value
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean);

    if (!name) {
      alert("Por favor ingresa el nombre del producto.");
      return;
    }
    if (!type || !month) {
      alert("Selecciona el tipo de producto y el mes/evento.");
      return;
    }

    const newProduct = {
      id: "p" + Date.now(),
      name,
      type,
      month,
      specialDay: document.getElementById("pSpecialDay")?.value.trim() || undefined,
      price: document.getElementById("pPrice").value.trim(),
      desc: document.getElementById("pDesc").value.trim(),
      image: uploadedImageData,
      colors: colors.length ? colors : undefined,
      custom: true,
    };

    const previousProducts = products.slice();
    products = [newProduct, ...products];
    const saved = saveProducts(products);
    if (!saved) {
      products = previousProducts;
      return;
    }

    // Confirmación visible
    try {
      alert("Producto guardado en el catálogo.");
    } catch (err) {}

    closeModal();
    renderCatalog();
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  });
}

function initFilters() {
  document.getElementById("filterMonth").addEventListener("change", (e) => {
    activeMonth = e.target.value;
    renderCalendar();
    renderCatalog();
  });
  document.getElementById("filterType").addEventListener("change", renderCatalog);
  document.getElementById("filterClient").addEventListener("change", renderCatalog);
  document.getElementById("filterSearch").addEventListener("input", renderCatalog);
  document.getElementById("btnClearFilters").addEventListener("click", () => {
    document.getElementById("filterMonth").value = "todos";
    document.getElementById("filterType").value = "todos";
    document.getElementById("filterClient").value = "todos";
    document.getElementById("filterSearch").value = "";
    activeMonth = "todos";
    renderCalendar();
    renderCatalog();
  });
}

function initQuoteForm() {
  const form = document.getElementById("quoteForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("qName").value.trim();
    const phone = document.getElementById("qPhone").value.trim();
    const church = document.getElementById("qChurch").value.trim();
    const monthKey = document.getElementById("qMonth").value;
    const orderType = document.querySelector('input[name="qOrderType"]:checked').value;
    const qty = document.getElementById("qQty").value.trim();
    const date = document.getElementById("qDate").value;
    const message = document.getElementById("qMessage").value.trim();
    const selectedProducts = Array.from(document.querySelectorAll('input[name="qProduct"]:checked')).map((c) => c.value);

    if (!name || !phone) {
      alert("Por favor completa tu nombre y teléfono para poder contactarte.");
      return;
    }

    const lines = [
      `Hola, soy ${name}, quiero solicitar una cotización ${orderType.toLowerCase()} en deTodo.`,
      `Teléfono: ${phone}`,
    ];
    if (church) lines.push(`Iglesia / Ciudad: ${church}`);
    if (monthKey) lines.push(`Evento / Mes: ${monthInfo(monthKey).label} (${monthInfo(monthKey).eventos})`);
    if (selectedProducts.length) lines.push(`Productos de interés: ${selectedProducts.join(", ")}`);
    if (qty) lines.push(`Cantidad aproximada: ${qty}`);
    if (date) lines.push(`Fecha del evento: ${date}`);
    if (message) lines.push(`Detalles: ${message}`);

    const fullMessage = lines.join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`, "_blank");
  });
}

function initImageZoom() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const popup = document.getElementById("imageZoomPopup");
  const popupImg = document.getElementById("imageZoomImg");
  const popupColors = document.getElementById("imageZoomColors");
  const container = document.getElementById("catalogContainer");

  function positionPopup(e) {
    const offset = 22;
    const rect = popup.getBoundingClientRect();
    let x = e.clientX + offset;
    let y = e.clientY + offset;
    if (x + rect.width > window.innerWidth - 12) x = e.clientX - rect.width - offset;
    if (y + rect.height > window.innerHeight - 12) y = e.clientY - rect.height - offset;
    popup.style.left = `${Math.max(12, x)}px`;
    popup.style.top = `${Math.max(12, y)}px`;
  }

  container.addEventListener("mouseover", (e) => {
    const card = e.target.closest(".product-card[data-zoom-image]");
    if (!card) return;
    popupImg.src = card.dataset.zoomImage;

    if (card.dataset.zoomColors) {
      const colors = JSON.parse(card.dataset.zoomColors);
      popupColors.innerHTML =
        `<span class="zoom-colors-label">Colores disponibles</span>` +
        `<div class="zoom-colors-list">` +
        colors.map((c) => `
          <span class="zoom-color-item">
            <span class="zoom-color-dot" style="background:${colorToHex(c)}"></span>
            <span class="zoom-color-name">${c}</span>
          </span>
        `).join("") +
        `</div>`;
      popupColors.classList.remove("hidden");
    } else {
      popupColors.innerHTML = "";
      popupColors.classList.add("hidden");
    }

    popup.classList.add("visible");
    positionPopup(e);
  });

  container.addEventListener("mousemove", (e) => {
    if (!popup.classList.contains("visible")) return;
    positionPopup(e);
  });

  container.addEventListener("mouseout", (e) => {
    const card = e.target.closest(".product-card[data-zoom-image]");
    if (!card || card.contains(e.relatedTarget)) return;
    popup.classList.remove("visible");
  });
}

function initNav() {
  document.getElementById("navToggle").addEventListener("click", () => {
    document.getElementById("mainNav").classList.toggle("open");
  });
  document.querySelectorAll(".main-nav a").forEach((a) =>
    a.addEventListener("click", () => document.getElementById("mainNav").classList.remove("open"))
  );
}

/* Render helpers for missing sections */
function renderCategories() {
  const grid = document.getElementById("categoryGrid");
  if (!grid) return;
  grid.innerHTML = CATEGORIES
    .map((c) => `
      <button class="category-card" data-key="${c.key}">
        <div class="cat-icon">${renderIcon(c.icon)}</div>
        <div class="cat-body">
          <strong>${c.label}</strong>
          <span class="cat-desc">${c.description}</span>
        </div>
      </button>
    `)
    .join("");

  grid.querySelectorAll(".category-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      // Use the category label as a simple search filter
      document.getElementById("filterSearch").value = key;
      activeMonth = "todos";
      document.getElementById("filterMonth").value = "todos";
      renderCatalog();
      document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderSpotlightCards() {
  const grid = document.getElementById("bestSellersGrid");
  if (!grid) return;
  grid.innerHTML = BEST_SELLERS
    .map((b) => `
      <div class="spotlight-card">
        <div class="spot-icon">${renderIcon(b.icon)}</div>
        <div class="spot-body">
          <strong>${b.title}</strong>
          <span class="spot-desc">${b.desc}</span>
        </div>
      </div>
    `)
    .join("");
}

function renderGiftIdeas() {
  const grid = document.getElementById("giftIdeasGrid");
  if (!grid) return;
  grid.innerHTML = GIFT_IDEAS
    .map((g) => `
      <div class="gift-card">
        <div class="gift-icon">${renderIcon(g.icon)}</div>
        <div class="gift-body">
          <strong>${g.title}</strong>
          <span class="gift-desc">${g.desc}</span>
        </div>
      </div>
    `)
    .join("");
}

function initHeroSearch() {
  const btn = document.getElementById("btnHeroSearch");
  const input = document.getElementById("heroSearch");
  if (!btn || !input) return;
  btn.addEventListener("click", () => {
    const q = input.value.trim();
    document.getElementById("filterSearch").value = q;
    renderCatalog();
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btn.click();
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
populateSelects();
initHeaderLinks();
renderCalendar();
renderCategories();
renderSpotlightCards();
renderGiftIdeas();
renderCatalog();
openSharedProduct();
initModalEvents();
initFilters();
initQuoteForm();
initHeroSearch();
initImageZoom();
initNav();
