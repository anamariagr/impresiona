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
  { key: "enero", label: "Enero", icon: "calendar_month", eventos: "" },
  { key: "febrero", label: "Febrero", icon: "favorite", eventos: "" },
  { key: "marzo-abril", label: "Marzo - Abril", icon: "eco", eventos: "" },
  { key: "mayo", label: "Mayo", icon: "local_florist", eventos: "" },
  { key: "junio", label: "Junio", icon: "badge", eventos: "" },
  { key: "julio", label: "Julio", icon: "camping", eventos: "" },
  { key: "agosto", label: "Agosto", icon: "celebration", eventos: "" },
  { key: "septiembre", label: "Septiembre", icon: "family_restroom", eventos: "" },
  { key: "octubre", label: "Octubre", icon: "celebration", eventos: "" },
  { key: "noviembre", label: "Noviembre", icon: "festival", eventos: "" },
  { key: "diciembre", label: "Diciembre", icon: "holiday_village", eventos: "" },
  { key: "baby-shower", label: "Baby Shower", icon: "child_care", eventos: "" },
  { key: "aniversarios", label: "Aniversarios", icon: "favorite", eventos: "" },
  { key: "despedida-matrimonial", label: "Despedida Matrimonial", icon: "", eventos: "" },
  { key: "cumpleaños", label: "Cumpleaños", icon: "cake", eventos: "" },
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
  //{ key: "busos", label: "Busos / Sudaderas", icon: "checkroom", image: "./img/camiseta-ano-bendicion-enero.jpg" },
  { key: "vasos", label: "Vasos", icon: "local_drink", image: "./img/vaso-primicias-enero.png" },
 // { key: "calendarios", label: "Calendarios", icon: "event", image: "./img/calendario-bendicion.png" },
 // { key: "esferos", label: "Esferos / Botilitos", icon: "edit", image: "./img/esferos.png"},
  //{ key: "trofeos", label: "Trofeos / Placas", icon: "emoji_events" },
 { key: "bolsos", label: "Bolsos / Totebags", icon: "shopping_bag" },
  { key: "llaveros", label: "Llaveros", icon: "key" },
  { key: "monederos", label: "Monederos", icon: "wallet" },
  { key: "agendas", label: "Agendas / Cuadernos", icon: "menu_book" },
  //{ key: "termos", label: "Termos / Botilitos", icon: "thermostat", image: "./img/termologo.png"},
  { key: "manillas", label: "Manillas", icon: "watch" },
  { key: "pendones", label: "Pendones / Banners", icon: "campaign" },
  { key: "stickers", label: "Stickers", icon: "sticky_note_2" },
  { key: "gorras", label: "Gorras", icon: "military_tech" },
  { key: "otros", label: "Otros recuerdos", icon: "category" },
];

const SEED_PRODUCTS = [
 
  {
    id: "p1",
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
    id: "p2",
    name: "Taza ghibli de regalo",
    type: "mugs",
    month: "diciembre",
    clientType: "personas",
    price: "$18.000",
    desc: "Mugs personalizados para Navidad y regalos de fin de año.",
    image: "./img/vasogibli2.png",
    custom: true,
  },
  {
    id: "p3",
    name: "Taza ghibli de regalo",
    type: "mugs",
    month: "diciembre",
    clientType: "personas",
    price: "$18.000",
    desc: "Mugs personalizados para Navidad y regalos de fin de año.",
    image: "./img/vasogibli2.png",
    custom: true,
  },
  {
    id: "p4",
    name: "Termo Futttura 2026",
    type: "termos",
    month: "septiembre",
    clientType: "personas",
    price: "$24.000",
    desc: "Termos para fans Futtura.",
    image: "./img/termologo.png",
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
    name: "Camisa Futttura 2026",
    type: "camisas",
    month: "septiembre",
    clientType: "personas",
    price: "$69.000",
    desc: "Camisa personalizada para Fans FUTTTURA 2026.",
    image: "./img/futttura-2026.jpg",
    custom: true,
  },
  {
    id: "p7",
    name: "Calendario de bendición",
    type: "calendarios",
    month: "enero",
    clientType: "iglesias",
    price: "$12.000",
    desc: "Calendario personalizado para acompañar el año de tu iglesia.",
    image: "./img/calendario-bendicion.png",
    custom: true,
  },
  {
    id: "p8",
    name: "Camisa corporativa",
    type: "camisas",
    month: "noviembre",
    clientType: "empresas",
    price: "$50.000",
    desc: "Camisa personalizada para uniformes y campañas empresariales.",
    image: "./img/camisa-3.png",
    custom: true,
  },
  
  {
    id: "p8b",
    name: "Camisa para equipo",
    type: "camisas",
    month: "noviembre",
    clientType: "empresas",
    price: "$50.000",
    desc: "Camisa personalizada para eventos, equipos y campañas corporativas.",
    image: "./img/camisa-2.png",
    custom: true,
  },
  
  {
    id: "p8a",
    name: "Camisa de ministerio",
    type: "camisas",
    month: "septiembre",
    clientType: "iglesias",
    price: "$50.000",
    desc: "Camisa para equipos de ministerio con diseño sobrio y personalizado.",
    image: "./img/camisa-1.png",
    custom: true,
  },
  {
    id: "p8d",
    name: "Camisa personalizada clásica",
    type: "camisas",
    month: "julio",
    clientType: "personas",
    price: "$50.000",
    desc: "Camisa clásica con diseño personalizado para eventos y regalos especiales.",
    image: "./img/camisa.png",
    custom: true,
  },
  {
    id: "p9",
    name: "Gorra bordada",
    type: "gorras",
    month: "julio",
    clientType: "personas",
    price: "$18.000",
    desc: "Gorra personalizada con bordado de logo o nombre.",
    image: "./img/gorra.png",
    custom: true,
  },
  
  {
    id: "p10",
    name: "Libreta personalizada",
    type: "agendas",
    month: "septiembre",
    clientType: "instituciones",
    price: "$18.000",
    desc: "Libreta ideal para regreso a clases y eventos institucionales.",
    image: "./img/libreta.jpg",
    custom: true,
  },
  {
    id: "p11",
    name: "Camiseta Morat",
    type: "camisas",
    month: "octubre",
    clientType: "personas",
    price: "$55.000",
    desc: "Camiseta para fans de Morat.",
    image: "./img/morat.jpg",
    custom: true,
  },
  {
    id: "p12",
    name: "Termo con logo",
    type: "termos",
    month: "junio",
    clientType: "empresas",
    price: "$33.000",
    desc: "Termo personalizado con logo para regalos corporativos.",
    image: "./img/termologo.png",
    custom: true,
  },
  {
    id: "p13",
    name: "Camiseta Trapkolombia",
    type: "camisas",
    month: "agosto",
    clientType: "personas",
    price: "$55.000",
    desc: "Camiseta para fans de Trapkolombia.",
    image: "./img/trapkolombia.jpg",
    custom: true,
  },
 {
    id: "p18",
    name: "Vaso gatuno",
    type: "vasos",
    month: "cumpleaños",
    clientType: "personas",
    price: "$20.000",
    desc: "Vaso de prueba agregado desde el panel.",
    image: "./img/vasogato.png",
    custom: true,
  },
  {
    id: "p15",
    name: "Vaso Gibli",
    type: "vasos",
    month: "cumpleaños",
    clientType: "personas",
    price: "20.000",
    desc: "Vaso Gibli, ideal para regalar en cualquier ocasión.",
    image: "./img/vasogibli.png",
    custom: true,
  },
  {
    id: "p16",
    name: "Vaso Gibli edición 2",
    type: "vasos",
    month: "cumpleaños",
    clientType: "personas",
    price: "$20.000",
    desc: "Segunda edición del vaso Gibli.",
    image: "./img/vasogibli2.png",
    custom: true,
  },
  {
    id: "p17",
    name: "Vaso Per",
    type: "vasos",
    month: "cumpleaños",
    clientType: "personas",
    price: "$20.000",
    desc: "Vaso personalizado edición Per.",
    image: "./img/vasoper.png",
    custom: true,
  },
  
   
  {
    id: "p18",
    name: "Vaso personalizado",
    type: "vasos",
    month: "cumpleaños",
    clientType: "personas",
    price: "$20.000",
    desc: "Vaso personalizado para cumpleaños y celebraciones.",
    image: "./img/vaso.png",
    custom: true,
  },
  {
    id: "p19",
    name: "Tote bag personalizada",
    type: "bolsos",
    month: "julio",
    clientType: "personas",
    price: "$20.000",
    desc: "Tote bag personalizada para regalos, promociones y eventos.",
    image: "./img/tote.perso.jpg",
    custom: true,
  },
 
  {
    id: "p20",
    name: "Totebag Chill",
    type: "bolsos",
    month: "julio",
    clientType: "personas",
    price: "$25.000",
    desc: "Totebag moderna con diseño atractivo para regalos y merchandising.",
    image: "./img/totebag-chill.jpg",
    custom: true,
  },
  {
    id: "p21",
    name: "Totebag Chuki",
    type: "bolsos",
    month: "julio",
    clientType: "personas",
    price: "$25.000",
    desc: "Totebag con estilo juvenil y diseño exclusivo para eventos.",
    image: "./img/totebag-chuki.jpg",
    custom: true,
  },
  {
    id: "p22",
    name: "Totebag DePreda",
    type: "bolsos",
    month: "julio",
    clientType: "personas",
    price: "$25.000",
    desc: "Totebag para colecciones especiales y regalos personalizados.",
    image: "./img/totebag-depreda.jpg",
    custom: true,
  },
  {
    id: "p23",
    name: "Totebag Dracula",
    type: "bolsos",
    month: "julio",
    clientType: "personas",
    price: "$25.000",
    desc: "Totebag con estilo temático para eventos y colecciones únicas.",
    image: "./img/totebag-dracula.jpg",
    custom: true,
  },
  {
    id: "p24",
    name: "Totebag Gremlin",
    type: "bolsos",
    month: "julio",
    clientType: "personas",
    price: "$25.000",
    desc: "Totebag divertida y llamativa para regalos y promociones creativas.",
    image: "./img/totebag-gremlin.jpg",
    custom: true,
  },
  {
    id: "p25",
    name: "Totebag Perro",
    type: "bolsos",
    month: "julio",
    clientType: "personas",
    price: "$25.000",
    desc: "Totebag con diseño original para detalles personalizados y regalos.",
    image: "./img/tote-perro.jpg",
    custom: true,
  },
  {
    id: "p26",
    name: "Monedero personalizado",
    type: "monederos",
    month: "julio",
    clientType: "personas",
    price: "$7.500",
    desc: "Monedero con diseño personalizado para detalle y regalo.",
    image: "./img/moderero-vang.jpg",
    custom: true,
  },
  {
    id: "p27",
    name: "Llavero personalizado",
    type: "llaveros",
    month: "julio",
    clientType: "personas",
    price: "$5.000",
    desc: "Llavero con nombre o logo para recuerdos y promociones.",
    image: "./img/llavero1.jpg",
    custom: true,
  },
  {
    id: "p28",
    name: "Llavero de cuero",
    type: "llaveros",
    month: "julio",
    clientType: "personas",
    price: "$6.000",
    desc: "Llavero premium para regalos y recuerdos personalizados.",
    image: "./img/llavero-2.jpg",
    custom: true,
  },
  {
    id: "p29",
    name: "Llavero mini",
    type: "llaveros",
    month: "julio",
    clientType: "personas",
    price: "$5.500",
    desc: "Llavero compacto con diseño moderno y personalizado.",
    image: "./img/llavero-3.jpg",
    custom: true,
  },
  {
    id: "p30",
    name: "Llavero premium",
    type: "llaveros",
    month: "julio",
    clientType: "personas",
    price: "$7.000",
    desc: "Llavero elegante con acabado premium para promociones y detalles.",
    image: "./img/llavero-4.jpg",
    custom: true,
  },
  
];

const STORAGE_KEY = "detodo_productos";

// Determine API base: if frontend is not on port 5000, assume API at port 5000 on same host.
const API_BASE = (window.location.port && window.location.port !== '5000')
  ? `${window.location.protocol}//${window.location.hostname}:5000`
  : '';

async function apiGetProducts() {
  try {
    const res = await fetch(`${API_BASE}/api/products`);
    if (!res.ok) throw new Error('no api');
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    return null;
  }
}

async function apiCreateProduct(product) {
  try {
    const res = await fetch(`${API_BASE}/api/products`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    if (!res.ok) throw new Error('create failed');
    return await res.json();
  } catch (err) {
    return null;
  }
}

async function apiDeleteProduct(id) {
  try {
    const res = await fetch(`${API_BASE}/api/products/${id}`, { method: 'DELETE' });
    return res.ok;
  } catch (err) {
    return false;
  }
}

let products = [];

function loadProducts() {
  // Catalog is managed from code only; ignore localStorage and server
  products = [...SEED_PRODUCTS];
  return products;
}

function saveProducts(products) {
  // Keep local copy and attempt server sync in background
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(products)); } catch(e){}
  return true;
}

products = loadProducts();
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

function buildWhatsappLink(productOrName) {
  const base = "Hola, quiero cotizar";

  if (productOrName && typeof productOrName === "object") {
    const productUrl = buildProductShareUrl(productOrName);
    const text = productUrl
      ? `${base} el producto "${productOrName.name}" de deTodo. ${productUrl}`
      : `${base} el producto "${productOrName.name}" de deTodo.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }

  const productName = typeof productOrName === "string" ? productOrName : "";
  const text = productName ? `${base} el producto "${productName}" de deTodo.` : `${base} recuerdos personalizados de deTodo.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function updateShareMeta(product) {
  const safeProduct = product || null;
  const fallbackImage = new URL("img/logochill.png", window.location.href).href;
  const productUrl = safeProduct ? buildProductShareUrl(safeProduct) : window.location.href.split("?")[0];
  const productTitle = safeProduct ? `${safeProduct.name} | Chill` : "deTodo | Recuerdos y para ti personalizados";
  const productDescription = safeProduct
    ? safeProduct.desc || "Producto personalizado de deTodo."
    : "Camisetas, vasos, esferos, trofeos, busos y recuerdos personalizados para cada evento del año de tu iglesia.";
  const productImage = safeProduct && safeProduct.image ? new URL(safeProduct.image, window.location.href).href : fallbackImage;

  const titleTag = document.querySelector("title");
  if (titleTag) titleTag.textContent = productTitle;

  const metaMap = {
    "og:title": productTitle,
    "og:description": productDescription,
    "og:image": productImage,
    "og:url": productUrl,
    "twitter:title": productTitle,
    "twitter:description": productDescription,
    "twitter:image": productImage,
  };

  Object.entries(metaMap).forEach(([property, value]) => {
    let meta = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      if (property.startsWith("og:")) meta.setAttribute("property", property);
      else meta.setAttribute("name", property);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", value);
  });
}

function buildProductShareUrl(product) {
  if (!product || !product.id) return "";
  const baseUrl = window.location.href.split("?")[0];
  const params = new URLSearchParams({ product: product.id });
  return `${baseUrl}?${params.toString()}#product-${product.id}`;
}

function buildFacebookShareLink(product) {
  const productUrl = buildProductShareUrl(product);
  if (!productUrl) return "";
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
}

function buildWhatsappShareLink(product) {
  const productUrl = buildProductShareUrl(product);
  if (!productUrl) return "";
  const text = `Mira este producto: ${product.name} ${productUrl}`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
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
  if (!grid) return;
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

  if (filterMonth) {
    filterMonth.innerHTML = '<option value="todos">Todos los productos</option>';
    MONTHS.forEach((m) => {
      filterMonth.insertAdjacentHTML("beforeend", `<option value="${m.key}">${m.label}</option>`);
    });
  }

  if (filterType) {
    filterType.innerHTML = '<option value="todos">Todos los tipos</option>';
    PRODUCT_TYPES.forEach((t) => {
      filterType.insertAdjacentHTML("beforeend", `<option value="${t.key}">${t.label}</option>`);
    });
  }

  MONTHS.forEach((m) => {
    const opt = `<option value="${m.key}">${renderIcon(m.icon)} ${m.label}</option>`;
    if (pMonth) pMonth.insertAdjacentHTML("beforeend", opt);
    if (qMonth) qMonth.insertAdjacentHTML("beforeend", opt);
  });
  PRODUCT_TYPES.forEach((t) => {
    if (pType) pType.insertAdjacentHTML("beforeend", `<option value="${t.key}">${t.label}</option>`);
    if (pIcon) pIcon.insertAdjacentHTML("beforeend", `<option value="${t.icon}">${t.label}</option>`);
    if (qProductsGrid) qProductsGrid.insertAdjacentHTML("beforeend", `
      <label class="checkbox-option">
        <input type="checkbox" name="qProduct" value="${t.label}"> ${renderIcon(t.icon)} ${t.label}
      </label>
    `);
  });
  CLIENT_TYPES.forEach((c) => {
    if (filterClient) filterClient.insertAdjacentHTML("beforeend", `<option value="${c.key}">${c.label}</option>`);
    if (pClientType) pClientType.insertAdjacentHTML("beforeend", `<option value="${c.key}">${c.label}</option>`);
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
    <div class="product-card" id="product-${p.id}" data-product-id="${p.id}"${imageSrc ? ` data-zoom-image="${imageSrc}"` : ""}${colorsAttr}>
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
            <a class="btn btn-whatsapp btn-sm" title="Cotizar" href="${buildWhatsappLink(p)}" target="_blank" rel="noopener">Cotizar</a>
            <button class="icon-btn" title="Compartir producto" data-share="${p.id}">${renderIcon("share")}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCatalog() {
  const typeFilter = document.getElementById("filterType")?.value || "todos";

  const filtered = products.filter((p) => {
    if (typeFilter !== "todos" && p.type !== typeFilter) return false;
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

  const categoriesToShow = typeFilter !== "todos"
    ? [typeFilter]
    : PRODUCT_TYPES.map((t) => t.key).filter((key) => filtered.some((p) => p.type === key));

  container.innerHTML = categoriesToShow
    .map((key) => {
      const items = filtered.filter((p) => p.type === key);
      if (!items.length) return "";
      const info = typeInfo(key);
      return `
        <div class="month-group">
          <div class="month-group-header">
            <h3>${renderIcon(info.icon)} ${info.label}</h3>
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

  container.querySelectorAll("[data-share]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const id = btn.dataset.share;
      const product = products.find((p) => p.id === id);
      if (!product) return;

      const shareUrl = buildProductShareUrl(product);
      const facebookUrl = buildFacebookShareLink(product);
      const whatsappUrl = buildWhatsappShareLink(product);

      if (navigator.share) {
        navigator.share({
          title: product.name,
          text: `Mira este producto: ${product.name}`,
          url: shareUrl,
        }).catch(() => {});
        return;
      }

      const chooser = window.open("", "_blank", "width=360,height=220");
      if (!chooser) {
        window.open(facebookUrl, "_blank", "noopener,noreferrer");
        return;
      }

      chooser.document.write(`
        <html>
          <head>
            <title>Compartir producto</title>
            <style>
              body { font-family: Arial, sans-serif; display: grid; place-items: center; background: #f4f9ff; margin: 0; }
              .box { width: 300px; background: white; border-radius: 16px; box-shadow: 0 10px 28px rgba(0,0,0,.12); padding: 18px; text-align: center; }
              a { display: block; margin: 12px 0; padding: 10px 14px; border-radius: 10px; text-decoration: none; font-weight: 700; }
              .fb { background: #1877f2; color: white; }
              .wa { background: #25d366; color: white; }
            </style>
          </head>
          <body>
            <div class="box">
              <h3 style="margin-top:0;">Compartir</h3>
              <a class="fb" href="${facebookUrl}" target="_blank" rel="noopener">Facebook</a>
              <a class="wa" href="${whatsappUrl}" target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </body>
        </html>
      `);
      chooser.document.close();
    });
  });
}

function openSharedProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("product");
  if (!id) {
    updateShareMeta();
    return;
  }

  let sharedProduct = products.find((p) => p.id === id);

  if (!sharedProduct) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const storedProducts = JSON.parse(raw);
        sharedProduct = Array.isArray(storedProducts) ? storedProducts.find((p) => p.id === id) : null;
      }
    } catch (err) {
      console.warn("No se pudieron cargar los productos guardados para compartir.", err);
    }
  }

  if (!sharedProduct) {
    updateShareMeta();
    return;
  }

  updateShareMeta(sharedProduct);

  const filterType = document.getElementById("filterType");
  if (filterType) filterType.value = "todos";
  activeMonth = "todos";
  renderCalendar();
  renderCatalog();

  setTimeout(() => {
    const productCard = document.querySelector(`[data-product-id="${sharedProduct.id}"]`);
    if (productCard) {
      productCard.scrollIntoView({ behavior: "smooth", block: "center" });
      productCard.style.outline = "3px solid rgba(41,196,234,.8)";
      productCard.style.outlineOffset = "4px";
      setTimeout(() => {
        productCard.style.outline = "";
        productCard.style.outlineOffset = "";
      }, 2200);
    }
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  }, 120);
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
  const btnOpenAdmin = document.getElementById("btnOpenAdmin");
  const btnEmptyAdd = document.getElementById("btnEmptyAdd");
  if (btnOpenAdmin) btnOpenAdmin.addEventListener("click", openModal);
  if (btnEmptyAdd) btnEmptyAdd.addEventListener("click", openModal);
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
    // Optimistic UI: add locally, then try to create on server
    const previousProducts = products.slice();
    products = [newProduct, ...products];
    saveProducts(products);

    apiCreateProduct(newProduct).then((created) => {
      if (created) {
        // replace local item with server one (image path adjusted)
        products = products.map((p) => (p.id === created.id ? created : p));
        saveProducts(products);
      }
    }).catch(() => {
      // keep local copy if server failed
    });

    try { alert("Producto guardado en el catálogo."); } catch (e) {}
    closeModal();
    renderCatalog();
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  });
}

function initFilters() {
  const filterType = document.getElementById("filterType");
  const btnClearFilters = document.getElementById("btnClearFilters");

  if (filterType) {
    filterType.addEventListener("change", renderCatalog);
  }

  if (btnClearFilters) {
    btnClearFilters.addEventListener("click", () => {
      if (filterType) filterType.value = "todos";
      activeMonth = "todos";
      renderCalendar();
      renderCatalog();
    });
  }
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
