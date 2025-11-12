const whatsappNumber = "+201033662370";
// Password to allow forced clearing of all orders (change here if needed)
const CLEAR_ORDERS_PASSWORD = "123";
const ADMIN_PASSWORD = "22/7/2009";
const PRODUCTS_PASSWORD = "MOHAND2009MOHAND1907MO09UA07";
// Brand info used in exports
const BRAND_NAME = 'MAHFOOR CNC';
const BRAND_LOGO_URL = 'https://i.postimg.cc/4NSrnTbt/photo-2025-09-26-07-00-26.jpg';

// Define productsData with version control
const productsDataDefault = [
  { 
    id: 1, 
    code: "101",
    name: " علب مناديل خشبية", 
    price: 165, 
    discount: 0, 
    img: "https://i.postimg.cc/W4nRLDKp/photo.jpg", 
    category: "ادوات منزلية", 
    details: "علب مناديل خشبية", 
    images: [
      "https://i.postimg.cc/ydgThtFH/photo.jpg",
      "https://i.postimg.cc/pXGY7Pqb/photo.jpg",
      "https://i.postimg.cc/WbW6KsSK/photo-2.jpg",
      "https://i.postimg.cc/wj1cYnbr/photo.jpg",
      "https://i.postimg.cc/jdgQ9RZr/photo-2.jpg",
      "https://i.postimg.cc/SNT75mDb/photo-4.jpg",
      "https://i.postimg.cc/bNCHMq3h/photo-5.jpg",
      "https://i.postimg.cc/90FRcqJm/photo.jpg",
      "https://i.postimg.cc/Zn79nKMb/photo.jpg",
      "https://i.postimg.cc/tJS1JCMp/photo-2.jpg",
      "https://i.postimg.cc/FzWfzsBh/photo-3.jpg",
      "https://i.postimg.cc/WzWDzbH2/photo-4.jpg",
      "https://i.postimg.cc/nrRsrcP7/photo.jpg",
      "https://i.postimg.cc/mkXck25k/photo-2.jpg",
      "https://i.postimg.cc/wMftMTG7/photo-3.jpg",
      "https://i.postimg.cc/qqbtqM5t/photo-4.jpg",
      "https://i.postimg.cc/66Y4YY5m/photo.jpg",
      "https://i.postimg.cc/fy23yTr7/photo-2.jpg",
      "https://i.postimg.cc/SRTXRNv7/photo-3.jpg",
      "https://i.postimg.cc/j2gW2dF4/photo-4.jpg",
      "https://i.postimg.cc/gcNLNNkt/photo-5.jpg",
      "https://i.postimg.cc/sfwGwwDk/photo.jpg",
      "https://i.postimg.cc/xjtNttT7/photo-2.jpg",
      "https://i.postimg.cc/3rn0nnJz/photo-3.jpg",
      "https://i.postimg.cc/bY3S33wX/photo.jpg",
      "https://i.postimg.cc/h4pQpptW/photo.jpg",
      "https://i.postimg.cc/W4nRLDKp/photo.jpg"
    ],
    dimensions: "20 × 30 سم",
    video: null,
    available: true
  },
  { 
    id: 2, 
    code: "202",
    name: " حامل موبايل", 
    price: 65, 
    discount: 0, 
    img: "https://i.postimg.cc/d1PvR7XP/photo-4.jpg", 
    category: "اكسسورات", 
    details: " حامل موبايل وتابلت  ", 
    images: [
      "https://i.postimg.cc/QM6xpxD9/photo.jpg",
      "https://i.postimg.cc/N0rBr8db/photo.jpg", 
      "https://i.postimg.cc/fb0D0783/photo-2.jpg",
      "https://i.postimg.cc/1zNsN0vc/photo-3.jpg",
      "https://i.postimg.cc/SsFqLXPr/photo.jpg",
      "https://i.postimg.cc/CKfSfCcs/photo-2.jpg",
      "https://i.postimg.cc/8CrNrdZ4/photo-3.jpg",
      "https://i.postimg.cc/yd4BhJGT/photo-4.jpg",
      "https://i.postimg.cc/j50K6W1c/photo-5.jpg",
      "https://i.postimg.cc/xCDYGkZg/photo-6.jpg",
      "https://i.postimg.cc/W3GV5NLc/photo.jpg",
      "https://i.postimg.cc/JnVm3yF9/photo-2.jpg",
      "https://i.postimg.cc/bJc80G57/photo-3.jpg",
      "https://i.postimg.cc/d1PvR7XP/photo-4.jpg",
      "https://i.postimg.cc/nzbZKs5t/photo-5.jpg",
      "https://i.postimg.cc/Y967drKw/photo-6.jpg",
      "https://i.postimg.cc/ydmKL14W/photo.jpg",
      "https://i.postimg.cc/50d15HGN/photo-2.jpg",
      "https://i.postimg.cc/FRyvTr5v/photo-3.jpg",
      "https://i.postimg.cc/50BJs4d4/photo-4.jpg",
      "https://i.postimg.cc/7634KH8Z/photo-5.jpg",
      "https://i.postimg.cc/26QY0kR5/photo-6.jpg",
      "https://i.postimg.cc/rm1TfVX5/photo.jpg",
      "https://i.postimg.cc/W3GV5NLc/photo.jpg"
    ],
    dimensions: "15 × 10 سم",
    video: null,
    available: true
  },
  { 
    id: 3, 
    code: "301",
    name: "مقلمة", 
    price: 55, 
    discount: 0, 
    img: "https://i.postimg.cc/NFV7zcwj/photo.jpg", 
    category: "ادوات مكتبية", 
    details: "  مقلمة اطفال ", 
    images: [
      "https://i.postimg.cc/FRLjkc4h/photo.jpg",
      "https://i.postimg.cc/KcJZgYZt/photo.jpg",
      "https://i.postimg.cc/QxCjgrtF/photo.jpg",
      "https://i.postimg.cc/15Xy0Ztf/photo-3.jpg",
      "https://i.postimg.cc/NFV7zcwj/photo.jpg"
    ],
    dimensions: "15 × 15 سم",
    video: null,
    available: true
  },
  { 
    id: 4, 
    code: "XO004",
    name: "لعبه x.o", 
    price: 99, 
    discount: 0, 
    img: "https://i.postimg.cc/gj9TCqCw/photo.jpg", 
    category: "العاب", 
    details: "حصان خشبي صغير مصنوع يدويًا، مثالي كهدية تذكارية.", 
    images: ["https://i.postimg.cc/900jZxJw/photo-2025-09-05-02-44-18.jpg"],
    dimensions: "يختلف حسب الطلب",
    video: "https://files.catbox.moe/hlznb6.mp4",
    available: true
  },
  { 
    id: 5, 
    code: "CS005",
    name: "كوستر", 
    price: 30, 
    discount: 0, 
    img: "https://i.postimg.cc/1zwCpNns/photo-2025-09-04-22-39-53.jpg", 
    category: "ادوات منزلية", 
    details: "مكعب خشبي مزخرف بتصميم فريد، مصنوع من خشب الصنوبر.", 
    images: [
      "https://i.postimg.cc/1zwCpNns/photo-2025-09-04-22-39-53.jpg",
      "https://i.postimg.cc/NFw0GMQn/photo-4.jpg", 
      "https://i.postimg.cc/4nMS61K7/photo.jpg"
    ],
    dimensions: "يختلف حسب الطلب",
    video: null,
    available: true
  },
  { 
    id: 6, 
    code: "CS006",
    name: "كوستر", 
    price: 30, 
    discount: 0, 
    img: "https://i.postimg.cc/rsfwL0Yx/photo-2025-09-05-02-41-16.jpg", 
    category: "ادوات منزلية", 
    details: "مكعب خشبي مزخرف بتصميم فريد، مصنوع من خشب الصنوبر.", 
    images: [
      "https://i.postimg.cc/rsfwL0Yx/photo-2025-09-05-02-41-16.jpg",
      "https://i.postimg.cc/NFw0GMQn/photo-4.jpg", 
      "https://i.postimg.cc/4nMS61K7/photo.jpg"
    ],
    dimensions: "يختلف حسب الطلب",
    video: null,
    available: true
  },
  { 
    id: 7, 
    code: "CS007",
    name: "كوستر", 
    price: 30, 
    discount: 0, 
    img: "https://i.postimg.cc/pdKVL162/photo-2025-09-05-02-42-09.jpg", 
    category: "ادوات منزلية", 
    details: "مكعب خشبي مزخرف بتصميم فريد، مصنوع من خشب الصنوبر.", 
    images: [
      "https://i.postimg.cc/pdKVL162/photo-2025-09-05-02-42-09.jpg",
      "https://i.postimg.cc/NFw0GMQn/photo-4.jpg", 
      "https://i.postimg.cc/4nMS61K7/photo.jpg"
    ],
    dimensions: "يختلف حسب الطلب",
    video: null,
    available: true
  },
  { 
    id: 8, 
    code: "DC008",
    name: "ديكور خشبي علي شكل كف", 
    price: 75, 
    discount: 0, 
    img: "https://i.postimg.cc/0ND2gZ3m/photo-2025-09-04-22-20-43.jpg", 
    category: "ديكور", 
    details: "ديكور خشبي بتصميم عقاب، مثالي لعشاق الديكورات الفريدة.", 
    images: ["https://i.postimg.cc/QxfjwSKw/photo.jpg"],
    dimensions: "يختلف حسب الطلب",
    video: null,
    available: true
  },
  { 
    id: 9, 
    code: "DC009",
    name: "ديكور خشبي علي شكل كف", 
    price: 75, 
    discount: 0, 
    img: "https://i.postimg.cc/GmGkyMfN/photo-2025-09-07-05-29-55.jpg", 
    category: "ديكور", 
    details: "ديكور خشبي بتصميم عقاب، مثالي لعشاق الديكورات الفريدة.", 
    images: ["https://i.postimg.cc/QxfjwSKw/photo.jpg"],
    dimensions: "يختلف حسب الطلب",
    video: null,
    available: true
  },
  { 
    id: 10, 
    code: "CS010",
    name: "كوستر 'Everyday is More Better'", 
    price: 55, 
    discount: 0, 
    img: "https://i.postimg.cc/bJV5mfTR/photo-2025-09-04-22-26-03.jpg", 
    category: "ادوات منزلية", 
    details: "لوحة خشبية تحمل عبارة ملهمة، بأبعاد 25x35 سم.", 
    images: [
      "https://i.postimg.cc/bJV5mfTR/photo-2025-09-04-22-26-03.jpg",
      "https://postimg.cc/gallery/WFMk9kS", 
      "https://i.postimg.cc//photo-2.jpg"
    ],
    dimensions: "25 × 35 سم",
    video: null,
    available: false
  },
   { 
    id: 11, 
    code: "DC009",
    name: "ديكور خشبي علي شكل كف", 
    price: 75, 
    discount: 0, 
    img: "https://i.postimg.cc/GmGkyMfN/photo-2025-09-07-05-29-55.jpg", 
    category: "ديكور", 
    details: "ديكور خشبي بتصميم عقاب، مثالي لعشاق الديكورات الفريدة.", 
    images: ["https://i.postimg.cc/QxfjwSKw/photo.jpg"],
    dimensions: "يختلف حسب الطلب",
    video: null,
    available: true
  },
];
let activeShareDropdown = null;
let shareDocumentListenerAdded = false;
// Build flattened rows for orders export
function buildOrderRows() {
  const orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
  const rows = [];
  orders.forEach(order => {
    // extract products from details
    const lines = order.details.split('\n');
    let currentCode = null;
    let currentName = null;
    lines.forEach(line => {
      const stripped = line.trim();
      if (stripped.startsWith('*الاسم:*') || stripped.startsWith('*name:*')) return; // skip
      if (stripped.includes('كود المنتج:')) {
        currentCode = stripped.split(':')[1].trim();
      } else {
        const qtyMatch = stripped.match(/^-?\s*(\d+) × ([\d.]+) جنيه = ([\d.]+) جنيه/);
        if (qtyMatch && currentCode) {
          const qty = parseInt(qtyMatch[1]);
          const unitPrice = parseFloat(qtyMatch[2]);
          const total = parseFloat(qtyMatch[3]);
          // find product name by code
          const prod = productsData.find(p => p.code === currentCode) || { name: currentCode };
          rows.push({ orderId: order.id, date: order.date, productCode: currentCode, productName: prod.name, quantity: qty, unitPrice: unitPrice, total: total, status: order.status });
          currentCode = null;
        }
      }
    });
    // if no product lines parsed, put whole details as a single row
    if (!rows.some(r => r.orderId === order.id)) {
      rows.push({ orderId: order.id, date: order.date, productCode: '', productName: order.details.replace(/\n/g, ' '), quantity: '', unitPrice: '', total: '' , status: order.status});
    }
  });
  return rows;
}

function exportOrdersToXLSX() {
  const rows = buildOrderRows();
  if (!rows.length) {
    Swal.fire({ icon: 'info', title: 'لا توجد بيانات للتصدير' });
    return;
  }
  // build worksheet data
  // include brand header: first row = brand name + date, remove second row with logo URL to avoid hyperlink
  const todayStr = new Date().toLocaleDateString('ar-EG');
  const headerRow1 = [ `${BRAND_NAME} - سجل الطلبات`, `تاريخ: ${todayStr}` ];
  // شيلنا headerRow2 خالص عشان مايبقاش فيه لينك
  const ws_data = [ headerRow1, [], ['م.','كودالطلب','التاريخ','كود المنتج','اسم المنتج','الكمية','سعر الوحدة','الإجمالي'] ];
  rows.forEach((r, idx) => ws_data.push([idx + 1, String(r.orderId), r.date, r.productCode, r.productName, r.quantity, r.unitPrice, r.total]));
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(ws_data);
  // Ensure Order ID column (B) is exported as text to avoid Excel numeric formatting
  for (let i = 1; i < ws_data.length; i++) {
    const cell_address = XLSX.utils.encode_cell({ c: 1, r: i }); // column B
    if (ws[cell_address]) {
      ws[cell_address].t = 's';
      ws[cell_address].v = String(ws[cell_address].v);
    }
  }
  // Set column widths: serial, orderId (wider), date, code, name, qty, unitPrice, total
  ws['!cols'] = [
    { wch: 4 },
    { wch: 40 },
    { wch: 20 },
    { wch: 12 },
    { wch: 30 },
    { wch: 8 },
    { wch: 12 },
    { wch: 12 }
  ];
  // Merge headerRow1 cells across all data columns for a centered title look
  ws['!merges'] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: 7 } }
    // شيلنا merge للصف الثاني لأنه مش موجود دلوقتي
  ];
  XLSX.utils.book_append_sheet(wb, ws, 'Orders');
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `mahfour_orders_${new Date().toISOString().slice(0,10)}.xlsx`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function exportOrdersToPDF() {
  const rows = buildOrderRows();
  if (!rows.length) {
    Swal.fire({ icon: 'info', title: 'لا توجد بيانات للتصدير' });
    return;
  }
  // Build an HTML table for better Arabic/RTL rendering (with serial numbers, without status)
  const table = document.createElement('table');
  table.style.width = '100%';
  table.style.borderCollapse = 'collapse';
  table.dir = 'rtl';
  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');
  // columns: serial, order code, date, product code, product name, qty, unit price, total
  ['م.', 'كود الطلب', 'التاريخ', 'كود المنتج', 'اسم المنتج', 'الكمية', 'سعر الوحدة', 'الإجمالي'].forEach((h, idx) => {
    const th = document.createElement('th');
    th.textContent = h;
    th.style.border = '1px solid #ccc';
    th.style.padding = '6px';
    th.style.background = '#f2f2f2';
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);
  const tbody = document.createElement('tbody');
  rows.forEach((r, i) => {
    const tr = document.createElement('tr');
    // values: serial, order code, date, code, name, qty, unitPrice, total
    const values = [ i + 1, r.orderId, r.date, r.productCode, r.productName, r.quantity, r.unitPrice, r.total];
    values.forEach((v) => {
      const td = document.createElement('td');
      td.textContent = v;
      td.style.border = '1px solid #ddd';
      td.style.padding = '6px';
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  const container = document.createElement('div');
  container.style.direction = 'rtl';
  container.style.fontFamily = 'Amiri, Arial, sans-serif';
  // Header with brand name and logo on left (brand name at page edge, logo next to it), title and date on right
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  header.style.width = '100%';
  header.style.maxWidth = '720px';
  header.style.margin = '0 auto';
  header.style.paddingBottom = '8px';
  header.style.marginBottom = '8px';
  header.style.borderBottom = '1px solid rgba(0,0,0,0.08)';
  const logoContainer = document.createElement('div');
  logoContainer.style.display = 'flex';
  logoContainer.style.alignItems = 'center';
  const logoImg = document.createElement('img');
  logoImg.src = BRAND_LOGO_URL;
  logoImg.alt = BRAND_NAME;
  logoImg.style.width = '56px';
  logoImg.style.height = '56px';
  logoImg.style.objectFit = 'cover';
  logoImg.style.borderRadius = '6px';
  logoImg.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
  const brandNameEl = document.createElement('div');
  brandNameEl.style.marginRight = '12px'; // Changed from marginLeft to marginRight for RTL
  brandNameEl.style.fontSize = '18px';
  brandNameEl.style.fontWeight = '700';
  brandNameEl.style.color = '#163B2F';
  brandNameEl.textContent = BRAND_NAME;
  logoContainer.appendChild(brandNameEl); // Brand name first (appears leftmost in RTL)
  logoContainer.appendChild(logoImg); // Logo next to brand name
  const titleEl = document.createElement('div');
  titleEl.style.textAlign = 'right';
  titleEl.style.lineHeight = '1.2';
  const todayStr = new Date().toLocaleDateString('ar-EG');
  titleEl.innerHTML = `
    <div style="font-size:24px; font-weight:800; color:#163B2F;">سجل الطلبات</div>
    <div style="font-size:14px; color:#444;">تاريخ الطباعة: ${todayStr}</div>
  `;
  header.appendChild(titleEl); // Title and date on right
  header.appendChild(logoContainer); // Brand name and logo on left
  container.appendChild(header);
  const countEl = document.createElement('div');
  countEl.style.textAlign = 'center';
  countEl.style.margin = '6px 0 10px 0';
  countEl.style.fontSize = '13px';
  countEl.textContent = `عدد الطلبات: ${rows.length}`;
  container.appendChild(countEl);
  container.appendChild(table);
  try {
    const totalSales = rows.reduce((sum, r) => sum + (Number(r.total) || 0), 0);
    const salesEl = document.createElement('div');
    salesEl.style.textAlign = 'center';
    salesEl.style.margin = '8px 0 12px 0';
    salesEl.style.fontSize = '14px';
    salesEl.style.fontWeight = '700';
    salesEl.textContent = `إجمالي المبيعات: ${totalSales.toFixed(2)} جنيه`;
    container.appendChild(salesEl);
  } catch (e) {
    console.warn('Failed to compute total sales for PDF', e);
  }
  const opt = {
    margin: 10,
    filename: `mahfour_orders_${new Date().toISOString().slice(0,10)}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(container).save();
}
// Version control for products data لازم اعدله للتحديث
const DATA_VERSION = "1.4";
let productsData;
let cartData = JSON.parse(localStorage.getItem('mahfoor_cart')) || []; // Use the new cart's localStorage key
let favoritesData = JSON.parse(localStorage.getItem('mahfourFavorites')) || [];

// Initialize products data
function initializeProducts() {
  const storedVersion = localStorage.getItem('mahfourDataVersion');
  if (storedVersion !== DATA_VERSION) {
    productsData = productsDataDefault;
    localStorage.setItem('mahfourProducts', JSON.stringify(productsData));
    localStorage.setItem('mahfourDataVersion', DATA_VERSION);
  } else {
    productsData = JSON.parse(localStorage.getItem('mahfourProducts')) || productsDataDefault;
  }
}

// Verify admin password
function verifyPassword() {
  const passwordInput = document.getElementById('password-input');
  if (!passwordInput) return;
  const enteredPassword = passwordInput.value.trim();
  if (!enteredPassword) {
    Swal.fire({
      icon: 'error',
      title: 'كلمة مرور مطلوبة',
      text: 'يرجى إدخال كلمة المرور.',
      showConfirmButton: false,
      timer: 2000
    });
    return false;
  }
  if (enteredPassword === ADMIN_PASSWORD) {
    document.getElementById('password-modal').style.display = 'none';
    document.getElementById('admin-content').style.display = 'block';
    renderOrders();
    updateStats();
    renderAdminProducts();
    return true;
  } else {
    Swal.fire({
      icon: 'error',
      title: 'كلمة مرور غير صحيحة',
      text: 'يرجى إدخال كلمة المرور الصحيحة.',
      showConfirmButton: false,
      timer: 2000
    });
    passwordInput.value = '';
    return false;
  }
}

// products management removed — related functions intentionally omitted

function getProductEffectivePrice(product) {
  if (!product) return 0;
  const basePrice = Number(product.price) || 0;
  if (product.discount && Number(product.discount) > 0) {
    return Number((basePrice * (1 - Number(product.discount) / 100)).toFixed(2));
  }
  return basePrice;
}

// Render products
function renderProducts(products = productsData) {
  const productsSection = document.querySelector('.products');
  if (!productsSection) return;
  productsSection.innerHTML = '';
  products.forEach(product => {
    const effectivePrice = getProductEffectivePrice(product);
    const hasDiscount = product.discount > 0;
    const discountedPrice = hasDiscount ? effectivePrice.toFixed(2) : effectivePrice.toString();
    const priceDisplay = hasDiscount
      ? `<span class="original-price">${product.price} جنيه</span><span class="discounted-price">${discountedPrice} جنيه</span>`
      : `<span>${discountedPrice} جنيه</span>`;
    const isInFavorites = favoritesData.some(fav => fav.id === product.id);
    const card = document.createElement('div');
    card.className = `product-card ${product.available ? '' : 'unavailable'}`;
    card.innerHTML = `
      <div class="image-wrapper">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
        ${!product.available ? '<span class="unavailable-badge">غير متوفر</span>' : ''}
      </div>
      <h3>${product.name}</h3>
      <p>${priceDisplay}</p>
      <div class="buttons">
        <button class="btn add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${discountedPrice}">
          <i class="fas fa-cart-plus"></i> أضف إلى السلة
        </button>
        <button class="btn order-now" data-id="${product.id}" data-name="${product.name}" data-price="${discountedPrice}">
          <i class="fas fa-bolt"></i> اطلب الآن
        </button>
        <button class="btn add-to-favorites ${isInFavorites ? 'active' : ''}" data-id="${product.id}">
          <i class="fas fa-heart"></i> ${isInFavorites ? 'إزالة من المفضلة' : 'أضف إلى المفضلة'}
        </button>
        <div class="quantity-control" data-id="${product.id}">
          <button class="qty-btn minus" data-id="${product.id}">-</button>
          <span class="quantity product-quantity" data-id="${product.id}">1</span>
          <button class="qty-btn plus" data-id="${product.id}">+</button>
        </div>
      </div>
    `;
    productsSection.appendChild(card);
  });
  // Update product count
  const productCount = document.getElementById('product-count');
  if (productCount) {
    productCount.textContent = products.length;
  }
}

function refreshProductsView(products) {
  if (products) {
    renderProducts(products);
    return;
  }
  if (typeof window._applyProductFilters === 'function') {
    window._applyProductFilters();
  } else {
    renderProducts(productsData);
  }
}

// Add to favorites
function addToFavorites(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product || !product.available) {
    Swal.fire({
      icon: 'warning',
      title: 'المنتج غير متوفر',
      text: 'لا يمكن إضافة منتج غير متوفر إلى المفضلة.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }
  const isInFavorites = favoritesData.some(fav => fav.id === productId);
  if (isInFavorites) {
    favoritesData = favoritesData.filter(fav => fav.id !== productId);
    Swal.fire({
      icon: 'info',
      title: 'تم الإزالة',
      text: `${product.name} تم إزالته من المفضلة!`,
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    favoritesData.push({
      id: product.id,
      name: product.name,
      code: product.code,
      img: product.img,
      price: product.discount > 0 ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price
    });
    Swal.fire({
      icon: 'success',
      title: 'تم الإضافة',
      text: `${product.name} تم إضافته إلى المفضلة!`,
      showConfirmButton: false,
      timer: 1500
    });
  }
  localStorage.setItem('mahfourFavorites', JSON.stringify(favoritesData)); // This was already correct
  updateFavoritesCount();
  refreshProductsView();
  if (window.location.pathname.includes('product-details.html')) {
    setupProductDetails();
  }
}

// Update favorites count
function updateFavoritesCount() {
  const favoritesCount = document.getElementById('favorites-count');
  if (favoritesCount) {
    favoritesCount.textContent = favoritesData.length;
  }
}

// Clear favorites
function clearFavorites() {
  Swal.fire({
    title: 'هل أنت متأكد؟',
    text: 'سيتم مسح جميع العناصر من المفضلة!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'نعم، امسح المفضلة',
    cancelButtonText: 'إلغاء'
  }).then((result) => {
    if (result.isConfirmed) {
      favoritesData = [];
      localStorage.setItem('mahfourFavorites', JSON.stringify(favoritesData));
      refreshProductsView();
      if (window.location.pathname.includes('product-details.html')) {
        setupProductDetails();
      }
      Swal.fire({
        icon: 'success',
        title: 'تم مسح المفضلة',
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
}

// Add to cart
function addToCart(productId, quantity = 1) {
  const product = productsData.find(p => p.id === productId);
  if (!product || !product.available) {
    Swal.fire({
      icon: 'warning',
      title: 'المنتج غير متوفر',
      text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  } 
  const discountedPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price;
  const existingItem = cartData.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty += quantity;
  } else {
    cartData.push({
      id: productId,
      name: product.name,
      code: product.code,
      price: discountedPrice,
      qty: quantity, // Use 'qty' to match the new cart
      image: product.img // Use 'image' to match the new cart
    });
  }
  localStorage.setItem('mahfoor_cart', JSON.stringify(cartData)); // Save to the new cart's key
  updateCartCount(); // Only update the counter, no need to render the old sidebar
  Swal.fire({
    icon: 'success',
    title: 'تمت الإضافة',
    text: `${product.name} تمت إضافته إلى السلة!`,
    showConfirmButton: false,
    timer: 1500
  });
}

// Update cart counter in the header
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (!cartCount) return;

  let count = 0;
  cartData.forEach(item => {
    count += item.qty;
  });
  cartCount.textContent = count;
}

// Display customer's points balance in the cart when they type their phone number
function getPointsForPhone(phone) {
  const balances = JSON.parse(localStorage.getItem('mahfourPoints')) || {};
  if (!phone) return null;
  const val = balances[phone];
  if (!val && val !== 0) return null;
  if (typeof val === 'object') return val.points || 0;
  return Number(val) || 0;
}

function showCustomerPoints(phone) {
  const el = document.querySelectorAll('#customer-points');
  const pts = getPointsForPhone(phone);
  el.forEach(node => {
    if (!phone) {
      node.textContent = 'رصيد النقاط: -';
    } else if (pts === null) {
      node.textContent = `رصيد النقاط: 0 نقطة`;
    } else {
      const approx = (Math.floor(pts/100)*3).toFixed(2);
      node.textContent = `رصيد النقاط: ${pts} نقطة — قيمة تقريبية: ${approx} جنيه`;
    }
  });
}

// Order now via WhatsApp (for single product)
function orderNowViaWhatsApp(productId, quantity) {
  const product = productsData.find(p => p.id === productId);
  if (!product || !product.available) {
    Swal.fire({
      icon: 'warning',
      title: 'المنتج غير متوفر',
      text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }
  const fullName = document.getElementById('order-now-full-name').value.trim();
  const address = document.getElementById('order-now-address').value.trim();
  const locationLink = document.getElementById('order-now-location-link').value.trim();
  const phoneNumber = document.getElementById('order-now-phone-number').value.trim();
  if (!fullName || !address || !phoneNumber) {
    Swal.fire({
      icon: 'error',
      title: 'بيانات غير مكتملة',
      text: 'يرجى ملء جميع الحقول المطلوبة.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }
  if (!/^\d{11}$/.test(phoneNumber)) {
    Swal.fire({
      icon: 'error',
      title: 'رقم هاتف غير صحيح',
      text: 'يرجى إدخال رقم هاتف مكون من 11 رقمًا.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }
  const discountedPrice = product.discount > 0 ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price;
  const itemTotal = discountedPrice * quantity;
  let message = `*طلب جديد من متجر MAHFOOR CNC*\n\n`;
  message += `*الاسم:* ${fullName}\n`;
  message += `*العنوان:* ${address}\n`;
  if (locationLink) message += `* لوكيشن استلام الاوردر:* ${locationLink}\n`;
  message += `*رقم الهاتف:* ${phoneNumber}\n\n`;
  message += `*المنتج:* ${product.name}\n`;
  message += `كود المنتج: ${product.code}\n`;
  message += `- ${quantity} × ${discountedPrice} جنيه = ${itemTotal.toFixed(2)} جنيه\n`;
  message += `\n*الإجمالي:* ${itemTotal.toFixed(2)} جنيه`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  const order = {
    id: Date.now(),
    date: new Date().toLocaleString('ar-EG'),
    ts: Date.now(),
    details: message,
    status: 'قيد الانتظار'
  };
  let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
  orders.push(order);
  localStorage.setItem('mahfourOrders', JSON.stringify(orders));
  // update admin stats immediately
  try { updateStats(); } catch (e) { console.warn('updateStats failed', e); }
  // Pending points for single-product order (include customer name)
  try {
    const points = Math.round(itemTotal);
    const phone = phoneNumber;
    const customerName = fullName || '';
    if (points > 0) {
      const pending = JSON.parse(localStorage.getItem('mahfourPendingPoints')) || [];
      pending.push({ orderId: order.id, phone, name: customerName, points, amount: itemTotal.toFixed(2), date: order.date });
      localStorage.setItem('mahfourPendingPoints', JSON.stringify(pending));
    }
  } catch (e) {
    console.warn('Failed to save pending points', e);
  }
  document.getElementById('order-now-modal').style.display = 'none';
  document.getElementById('order-now-full-name').value = '';
  document.getElementById('order-now-address').value = '';
  document.getElementById('order-now-location-link').value = '';
  document.getElementById('order-now-phone-number').value = '';
  document.getElementById('order-product-name').textContent = '';
  window.open(whatsappUrl, '_blank');
  Swal.fire({
    icon: 'success',
    title: 'تم إرسال الطلب',
    text: 'سيتم توجيهك إلى واتساب لتأكيد الطلب.',
    showConfirmButton: false,
    timer: 2000
  });
}

// Render orders
function renderOrders(ordersToRender) {
  const allOrders = ordersToRender || JSON.parse(localStorage.getItem('mahfourOrders')) || [];
  const ordersList = document.getElementById('orders-list');
  if (!ordersList) return;
  ordersList.innerHTML = '';

  if (!allOrders || allOrders.length === 0) {
    ordersList.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:20px;">لا توجد طلبات حاليًا.</td></tr>';
    return;
  }

  // Helper to extract data from order details
  const extractData = (details) => {
    const nameMatch = details.match(/\*الاسم:\* (.+)/);
    const totalMatch = details.match(/\*الإجمالي:\* ([\d.]+) جنيه/);
    const productsMatch = details.match(/\*المنتجات:\*([\s\S]*?)\n\n\*الإجمالي:/) || details.match(/\*المنتج:\*([\s\S]*?)\n\n\*الإجمالي:/);

    return {
      customerName: nameMatch ? nameMatch[1].trim() : 'غير محدد',
      total: totalMatch ? parseFloat(totalMatch[1]).toFixed(2) : '0.00',
      products: productsMatch ? productsMatch[1].trim().replace(/\n/g, '<br>') : 'تفاصيل غير متوفرة'
    };
  };

  allOrders.forEach(order => {
    const { customerName, total, products } = extractData(order.details);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${order.id}</td>
      <td>${customerName}</td>
      <td><div style="font-size:13px; max-height: 80px; overflow-y:auto;">${products}</div></td>
      <td>${total} ج.م</td>
      <td>
        <span class="availability-badge" style="background: ${order.status === 'قيد الانتظار' ? '#f39c12' : '#27ae60'};">
          ${order.status}
        </span>
      </td>
      <td>
        <button class="btn print-invoice-btn" data-order-id="${order.id}" style="background-color: #3498db; margin-top: 5px;"><i class="fas fa-print"></i> طباعة الفاتورة</button>
      </td>
    `;
    ordersList.appendChild(tr);
  });

  // Add event listeners for the print invoice buttons dynamically
  document.querySelectorAll('.print-invoice-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const orderId = parseInt(e.currentTarget.dataset.orderId);
      const allOrders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
      const orderToPrint = allOrders.find(order => order.id === orderId);
      console.log('Print Invoice button clicked for order ID:', orderId);
      console.log('Order to print:', orderToPrint);
      if (orderToPrint) {
        localStorage.setItem('invoiceOrderData', JSON.stringify(orderToPrint));
        window.open('invoice.html', '_blank');
      } else {
        Swal.fire({ icon: 'error', title: 'خطأ', text: 'لم يتم العثور على بيانات الطلب.' });
      }
    });
  });
}

// Clear orders
function clearOrders() {
  Swal.fire({
    title: 'هل أنت متأكد؟',
    text: 'سيتم حذف جميع الطلبات!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'نعم، احذف الكل',
    cancelButtonText: 'إلغاء'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.setItem('mahfourOrders', JSON.stringify([]));
      renderOrders();
  updateStats();
  try { renderAdminProducts(); } catch (e) { /* ignore if admin page not open */ }
      Swal.fire({
        icon: 'success',
        title: 'تم حذف الطلبات',
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
}

// Force-clear orders without asking a second confirmation (used after password check)
function forceClearOrders() {
  localStorage.setItem('mahfourOrders', JSON.stringify([]));
  renderOrders();
  updateStats();
  try { renderAdminProducts(); } catch (e) { /* ignore if admin page not open */ }
  Swal.fire({
    icon: 'success',
    title: 'تم حذف الطلبات',
    showConfirmButton: false,
    timer: 1500
  });
}

// Prompt for password before clearing all orders
function promptClearOrders() {
  Swal.fire({
    title: 'أدخل كلمة المرور لمسح جميع الطلبات',
    input: 'password',
    inputPlaceholder: 'كلمة المرور',
    showCancelButton: true,
    confirmButtonText: 'تأكيد',
    cancelButtonText: 'إلغاء',
    preConfirm: (value) => {
      if (!value) {
        Swal.showValidationMessage('الرجاء إدخال كلمة المرور');
      } else if (value !== CLEAR_ORDERS_PASSWORD) {
        Swal.showValidationMessage('كلمة المرور غير صحيحة');
      }
      return value;
    }
  }).then((result) => {
    if (result.isConfirmed && result.value === CLEAR_ORDERS_PASSWORD) {
      // directly clear without extra confirm
      forceClearOrders();
    }
  });
}

// Search and filter products
function setupFilters() {
  const searchInput = document.getElementById('search-products');
  const sortSelect = document.getElementById('sort-products');
  const filterCategory = document.getElementById('filter-category');
  const resetFilters = document.getElementById('reset-filters');
  const priceMinInput = document.getElementById('filter-price-min');
  const priceMaxInput = document.getElementById('filter-price-max');
  const availabilityCheckbox = document.getElementById('filter-availability');
  if (!searchInput || !sortSelect || !filterCategory || !resetFilters) return;

  const priceValues = productsData
    .map(getProductEffectivePrice)
    .filter(value => !Number.isNaN(value) && Number.isFinite(value));
  if (priceValues.length) {
    const minPrice = Math.floor(Math.min(...priceValues));
    const maxPrice = Math.ceil(Math.max(...priceValues));
    if (priceMinInput && !priceMinInput.placeholder) priceMinInput.placeholder = minPrice.toString();
    if (priceMaxInput && !priceMaxInput.placeholder) priceMaxInput.placeholder = maxPrice.toString();
    if (priceMinInput) priceMinInput.min = 0;
    if (priceMaxInput) priceMaxInput.min = 0;
  }

  function applyFilters() {
    let filteredProducts = [...productsData];
    // Search
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.details.toLowerCase().includes(searchTerm) ||
        product.code.toLowerCase().includes(searchTerm)
      );
    }
    // Filter by category
    const category = filterCategory.value;
    if (category !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    // Filter by price range
    let minPrice = priceMinInput ? parseFloat(priceMinInput.value) : NaN;
    let maxPrice = priceMaxInput ? parseFloat(priceMaxInput.value) : NaN;
    if (!Number.isNaN(minPrice) && minPrice < 0) {
      minPrice = 0;
      if (priceMinInput) priceMinInput.value = '0';
    }
    if (!Number.isNaN(maxPrice) && maxPrice < 0) {
      maxPrice = 0;
      if (priceMaxInput) priceMaxInput.value = '0';
    }
    if (!Number.isNaN(minPrice) && !Number.isNaN(maxPrice) && minPrice > maxPrice) {
      const temp = minPrice;
      minPrice = maxPrice;
      maxPrice = temp;
      if (priceMinInput && priceMaxInput) {
        priceMinInput.value = minPrice.toString();
        priceMaxInput.value = maxPrice.toString();
      }
    }
    if (!Number.isNaN(minPrice)) {
      filteredProducts = filteredProducts.filter(product => getProductEffectivePrice(product) >= minPrice);
    }
    if (!Number.isNaN(maxPrice)) {
      filteredProducts = filteredProducts.filter(product => getProductEffectivePrice(product) <= maxPrice);
    }
    // Filter by availability
    if (availabilityCheckbox && availabilityCheckbox.checked) {
      filteredProducts = filteredProducts.filter(product => product.available);
    }
    // Sort
    const sortValue = sortSelect.value;
    if (sortValue === 'price-asc') {
      filteredProducts.sort((a, b) => {
        const priceA = getProductEffectivePrice(a);
        const priceB = getProductEffectivePrice(b);
        return priceA - priceB;
      });
    } else if (sortValue === 'price-desc') {
      filteredProducts.sort((a, b) => {
        const priceA = getProductEffectivePrice(a);
        const priceB = getProductEffectivePrice(b);
        return priceB - priceA;
      });
    }
    renderProducts(filteredProducts);
  }
  searchInput.addEventListener('input', applyFilters);
  sortSelect.addEventListener('change', applyFilters);
  filterCategory.addEventListener('change', applyFilters);
  if (priceMinInput) {
    priceMinInput.addEventListener('input', applyFilters);
  }
  if (priceMaxInput) {
    priceMaxInput.addEventListener('input', applyFilters);
  }
  if (availabilityCheckbox) {
    availabilityCheckbox.addEventListener('change', applyFilters);
  }
  resetFilters.addEventListener('click', () => {
    searchInput.value = '';
    sortSelect.value = 'default';
    filterCategory.value = 'all';
    if (priceMinInput) priceMinInput.value = '';
    if (priceMaxInput) priceMaxInput.value = '';
    if (availabilityCheckbox) availabilityCheckbox.checked = false;
    applyFilters();
  });
  window._applyProductFilters = applyFilters;
  applyFilters();
}

// Ensure orders toggle button opens the orders panel when clicked (simple behavior per request)
document.addEventListener('DOMContentLoaded', () => {
  try {
    const toggleOrdersBtn = document.getElementById('toggle-orders-btn');
    const ordersWrap = document.getElementById('orders-wrap');
    if (toggleOrdersBtn && ordersWrap) {
      toggleOrdersBtn.addEventListener('click', (e) => {
        // Toggle the orders panel open/close
        const isCollapsed = ordersWrap.classList.contains('collapsed');
        if (isCollapsed) {
          ordersWrap.classList.remove('collapsed');
          ordersWrap.style.maxHeight = ordersWrap.scrollHeight + 'px';
          toggleOrdersBtn.innerHTML = '<i class="fas fa-chevron-up"></i> إخفاء السجل'; // Render orders when opening
        } else {
          ordersWrap.classList.add('collapsed');
          ordersWrap.style.maxHeight = '0px';
          toggleOrdersBtn.innerHTML = '<i class="fas fa-chevron-down"></i> عرض/إخفاء السجل';
        }
        // ensure orders are rendered when opening
        try { if (isCollapsed) renderOrders(); } catch (err) { console.warn('renderOrders failed', err); }
      });
    }
  } catch (e) {
    console.warn('Failed to attach orders toggle handler', e);
  }
});

// Setup product details page
function setupProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  const product = productsData.find(p => p.id === productId);
  if (!product) {
    document.querySelector('.product-details-container').innerHTML = '<p>المنتج غير موجود.</p>';
    return;
  }
  const discountedPrice = product.discount > 0 ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price;
  const priceDisplay = product.discount > 0
    ? `<span class="original-price">${product.price} جنيه</span><span class="discounted-price">${discountedPrice} جنيه</span>`
    : `<span>${product.price} جنيه</span>`;
  const isInFavorites = favoritesData.some(fav => fav.id === product.id);

  // --- إضافة حاوية لنافذة التكبير ---
  const gallery = document.querySelector('.product-gallery');
  const zoomResult = document.createElement('div');
  zoomResult.id = 'zoom-result';
  zoomResult.className = 'img-zoom-result';
  if (gallery) gallery.appendChild(zoomResult);

  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-description').textContent = product.details;
  document.getElementById('product-price').innerHTML = priceDisplay;
  document.getElementById('product-discount').textContent = product.discount > 0 ? `خصم ${product.discount}%` : '';
  document.getElementById('product-dimensions').textContent = product.dimensions || 'غير محدد';
  document.getElementById('product-category').textContent = product.category;
  const mainImage = document.getElementById('main-image');
  mainImage.src = product.img;
  mainImage.alt = product.name;
  const thumbnailContainer = document.querySelector('.thumbnail-container');
  thumbnailContainer.innerHTML = '';
  product.images.forEach((img, index) => {
    const thumb = document.createElement('img');
    thumb.src = img;
    thumb.alt = `${product.name} - صورة ${index + 1}`;
    thumb.className = 'thumbnail';
    if (img === product.img) thumb.classList.add('active');
    thumbnailContainer.appendChild(thumb);
  });
  const videoContainer = document.querySelector('.video-container');
  if (product.video) {
    videoContainer.innerHTML = `
      <video class="product-video" controls>
        <source src="${product.video}" type="video/mp4">
        المتصفح لا يدعم تشغيل الفيديو.
      </video>
    `;
  }
  const addToFavoritesBtn = document.querySelector('.add-to-favorites');
  if (addToFavoritesBtn) {
    addToFavoritesBtn.className = `btn add-to-favorites ${isInFavorites ? 'active' : ''}`;
    addToFavoritesBtn.innerHTML = `<i class="fas fa-heart"></i> ${isInFavorites ? 'إزالة من المفضلة' : 'أضف إلى المفضلة'}`;
    addToFavoritesBtn.dataset.id = product.id;
  }
  let quantity = 1;
  const quantitySpan = document.getElementById('product-quantity');
  quantitySpan.textContent = quantity;
  document.querySelector('.quantity-control .plus').addEventListener('click', () => {
    if (!product.available) {
      Swal.fire({
        icon: 'warning',
        title: 'المنتج غير متوفر',
        text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }
    quantity++;
    quantitySpan.textContent = quantity;
  });
  document.querySelector('.quantity-control .minus').addEventListener('click', () => {
    if (!product.available) {
      Swal.fire({
        icon: 'warning',
        title: 'المنتج غير متوفر',
        text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }
    if (quantity > 1) {
      quantity--;
      quantitySpan.textContent = quantity;
    }
  });
  document.querySelector('.add-to-cart').addEventListener('click', () => {
    if (!product.available) {
      Swal.fire({
        icon: 'warning',
        title: 'المنتج غير متوفر',
        text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }
    addToCart(product.id, quantity);
    quantity = 1;
    quantitySpan.textContent = quantity;
  });
  document.querySelector('.order-now').addEventListener('click', () => {
    if (!product.available) {
      Swal.fire({
        icon: 'warning',
        title: 'المنتج غير متوفر',
        text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }
    document.getElementById('order-now-modal').style.display = 'flex';
    const orderProductName = document.getElementById('order-product-name');
    if (orderProductName) {
      orderProductName.textContent = `${product.name} (${product.code})`;
    }
    const submitOrderNowBtn = document.getElementById('submit-order-now');
    const closeOrderNowBtn = document.getElementById('close-order-now');
    submitOrderNowBtn.onclick = () => {
      orderNowViaWhatsApp(product.id, quantity);
      quantity = 1;
      quantitySpan.textContent = quantity;
    };
    closeOrderNowBtn.onclick = () => {
      document.getElementById('order-now-modal').style.display = 'none';
      document.getElementById('order-now-full-name').value = '';
      document.getElementById('order-now-address').value = '';
      document.getElementById('order-now-location-link').value = '';
      document.getElementById('order-now-phone-number').value = '';
      if (orderProductName) {
        orderProductName.textContent = '';
      }
      quantity = 1;
      quantitySpan.textContent = quantity;
    };
    document.getElementById('order-now-phone-number').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        orderNowViaWhatsApp(product.id, quantity);
        quantity = 1;
        quantitySpan.textContent = quantity;
      }
    });
  });
  setupImageGallery(product.images);
  setupRatingSystem(product.id);
  setupShareMenu(product);

  // --- تفعيل خاصية التكبير ---
  enableImageZoom('main-image', 'zoom-result');
}

function closeShareDropdown(dropdown) {
  if (!dropdown) return;
  const menu = dropdown.querySelector('.share-menu');
  const toggle = dropdown.querySelector('.share-toggle');
  if (menu) {
    menu.hidden = true;
    menu.setAttribute('aria-hidden', 'true');
  }
  if (toggle) {
    toggle.setAttribute('aria-expanded', 'false');
  }
  dropdown.classList.remove('open');
  if (activeShareDropdown === dropdown) {
    activeShareDropdown = null;
  }
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.warn('Clipboard API failed, falling back to execCommand', err);
    }
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.top = '-9999px';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch (err) {
    console.warn('document.execCommand copy failed', err);
  }
  document.body.removeChild(textarea);
  return copied;
}

function setupShareMenu(product) {
  const shareDropdown = document.querySelector('.share-dropdown');
  if (!shareDropdown) return;
  const shareToggle = shareDropdown.querySelector('.share-toggle');
  const shareMenu = shareDropdown.querySelector('.share-menu');
  const shareButtons = shareDropdown.querySelectorAll('.share-menu-item');
  if (!shareToggle || !shareMenu || !shareButtons.length) return;

  shareDropdown.classList.remove('open');
  shareMenu.hidden = true;
  shareMenu.setAttribute('aria-hidden', 'true');
  shareToggle.setAttribute('aria-expanded', 'false');

  const shareText = `شاهد هذا المنتج من MAHFOOR CNC: ${product.name}`;
  let shareUrl = window.location.href;
  try {
    const url = new URL(window.location.href);
    url.searchParams.set('id', product.id);
    url.hash = '';
    shareUrl = url.toString();
  } catch (err) {
    shareUrl = `${window.location.pathname}?id=${product.id}`;
  }
  const sharePayload = `${shareText}\n${shareUrl}`;

  shareToggle.onclick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (activeShareDropdown && activeShareDropdown !== shareDropdown) {
      closeShareDropdown(activeShareDropdown);
    }
    const isOpen = shareDropdown.classList.toggle('open');
    shareMenu.hidden = !isOpen;
    shareMenu.setAttribute('aria-hidden', (!isOpen).toString());
    shareToggle.setAttribute('aria-expanded', isOpen.toString());
    if (isOpen) {
      activeShareDropdown = shareDropdown;
    } else if (activeShareDropdown === shareDropdown) {
      activeShareDropdown = null;
    }
  };

  shareButtons.forEach((btn) => {
    btn.onclick = null;
    btn.onclick = async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const channel = btn.dataset.channel;
      try {
        if (channel === 'native') {
          if (navigator.share) {
            try {
              await navigator.share({ title: product.name, text: shareText, url: shareUrl });
            } catch (shareError) {
              if (!shareError || shareError.name !== 'AbortError') {
                throw shareError;
              }
              return;
            }
          } else {
            Swal.fire({
              icon: 'info',
              title: 'المتصفح لا يدعم المشاركة السريعة',
              text: 'اختر طريقة مشاركة أخرى من القائمة.'
            });
            return;
          }
        } else if (channel === 'whatsapp') {
          window.open(`https://wa.me/?text=${encodeURIComponent(sharePayload)}`, '_blank', 'noopener');
        } else if (channel === 'facebook') {
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank', 'noopener');
        } else if (channel === 'instagram') {
          const copied = await copyTextToClipboard(sharePayload);
          window.open('https://www.instagram.com/', '_blank', 'noopener');
          Swal.fire({
            icon: copied ? 'success' : 'info',
            title: 'شارك على إنستغرام',
            text: copied ? 'تم نسخ وصف المنتج والرابط. الصقه في قصتك أو رسائلك على إنستغرام.' : 'انسخ الرابط يدويًا ثم الصقه في إنستغرام.'
          });
        } else if (channel === 'copy') {
          const copied = await copyTextToClipboard(shareUrl);
          Swal.fire({
            icon: copied ? 'success' : 'error',
            title: copied ? 'تم نسخ الرابط' : 'تعذر النسخ',
            text: copied ? 'يمكنك مشاركة الرابط الآن على أي منصة.' : 'حدث خطأ أثناء نسخ الرابط، حاول مرة أخرى.'
          });
        }
      } catch (error) {
        console.warn('Share action failed', error);
        Swal.fire({
          icon: 'error',
          title: 'تعذر مشاركة المنتج',
          text: 'حدث خطأ غير متوقع، حاول مرة أخرى.'
        });
      } finally {
        closeShareDropdown(shareDropdown);
      }
    };
  });

  if (!shareDocumentListenerAdded) {
    document.addEventListener('click', (event) => {
      if (activeShareDropdown && !activeShareDropdown.contains(event.target)) {
        closeShareDropdown(activeShareDropdown);
      }
    });
    shareDocumentListenerAdded = true;
  }
}

// Setup image gallery
function setupImageGallery(images) {
  const mainImage = document.getElementById('main-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const closeModal = document.querySelector('.close-modal');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentImageIndex = 0;
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      currentImageIndex = index;
      mainImage.src = images[currentImageIndex];
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
  mainImage.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = mainImage.src;
    currentImageIndex = images.indexOf(mainImage.src);
  });
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentImageIndex];
  });
  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex];
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Setup rating system
function setupRatingSystem(productId) {
  let starsContainer = document.getElementById('rating-stars');
  const averageRatingEl = document.getElementById('average-rating');
  const commentField = document.getElementById('rating-comment');
  const submitButtonEl = document.getElementById('submit-rating');
  const reviewsList = document.getElementById('reviews-list');
  const ratingHint = document.getElementById('rating-hint');

  if (!starsContainer || !averageRatingEl || !commentField || !submitButtonEl || !reviewsList) {
    return;
  }

  // Recreate stars container to clear previous listeners
  const freshStarsContainer = starsContainer.cloneNode(true);
  starsContainer.parentNode.replaceChild(freshStarsContainer, starsContainer);
  starsContainer = freshStarsContainer;
  const stars = starsContainer.querySelectorAll('.fa-star');

  // Recreate submit button to clear previous listeners
  let submitButton = document.getElementById('submit-rating');
  const submitClone = submitButton.cloneNode(true);
  submitButton.parentNode.replaceChild(submitClone, submitButton);
  submitButton = document.getElementById('submit-rating');

  // Ensure textarea reference (it remains the same element)
  const commentTextarea = document.getElementById('rating-comment');

  let userId = localStorage.getItem('mahfourUserId');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('mahfourUserId', userId);
  }

  // Load reviews (with migration from legacy storage if needed)
  let reviews;
  try {
    reviews = JSON.parse(localStorage.getItem(`mahfourReviews_${productId}`) || '[]');
  } catch (e) {
    reviews = [];
  }
  if (!Array.isArray(reviews)) reviews = [];

  if (!reviews.length) {
    try {
      const legacyRaw = localStorage.getItem(`user_ratings_${productId}`);
      if (legacyRaw) {
        const legacy = JSON.parse(legacyRaw);
        if (legacy && typeof legacy === 'object') {
          reviews = Object.entries(legacy)
            .filter(([, rating]) => typeof rating === 'number' && rating >= 1 && rating <= 5)
            .map(([legacyUserId, rating]) => ({
              userId: legacyUserId,
              rating,
              comment: '',
              timestamp: Date.now()
            }));
          if (reviews.length) {
            localStorage.setItem(`mahfourReviews_${productId}`, JSON.stringify(reviews));
          }
        }
        localStorage.removeItem(`user_ratings_${productId}`);
      }
    } catch (legacyError) {
      console.warn('Failed to migrate legacy ratings', legacyError);
    }
  }

  const escapeHtml = (unsafe = '') => unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const getUserLabel = (reviewUserId) => {
    if (reviewUserId === userId) return 'أنت';
    if (!reviewUserId) return 'مستخدم';
    return `مستخدم ‎${reviewUserId.slice(-4).toUpperCase()}`;
  };

  const formatDateTime = (timestamp) => {
    if (!timestamp) return '';
    try {
      return new Date(timestamp).toLocaleString('ar-EG', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });
    } catch (e) {
      return '';
    }
  };

  const getReviewStats = () => {
    if (!reviews.length) {
      return { average: 0, count: 0 };
    }
    const valid = reviews.filter(r => typeof r.rating === 'number' && r.rating >= 1 && r.rating <= 5);
    if (!valid.length) return { average: 0, count: 0 };
    const sum = valid.reduce((acc, curr) => acc + curr.rating, 0);
    return { average: sum / valid.length, count: valid.length };
  };

  const updateAverageRatingDisplay = () => {
    const { average, count } = getReviewStats();
    const averageText = count ? average.toFixed(1) : '0';
    const countText = count === 0 ? '0 تقييمات' : `${count} تقييم${count === 1 ? '' : 'ات'}`;
    averageRatingEl.textContent = `متوسط التقييم: ${averageText} من 5 (${countText})`;
  };

  let selectedRating = 0;
  let existingIndex = reviews.findIndex(review => review.userId === userId);
  if (existingIndex !== -1) {
    const existing = reviews[existingIndex];
    selectedRating = Number(existing.rating) || 0;
    commentTextarea.value = existing.comment || '';
  } else {
    commentTextarea.value = '';
  }

  const renderStarSelection = (hoverValue = null) => {
    const ratingToRender = typeof hoverValue === 'number' ? hoverValue : selectedRating;
  stars.forEach(star => {
      const starValue = Number(star.dataset.rating);
      const isSelected = ratingToRender > 0 && starValue <= ratingToRender;
      const isHovered = typeof hoverValue === 'number' && starValue <= hoverValue;
      star.classList.toggle('selected', isSelected);
      star.classList.toggle('hovered', isHovered);
      star.classList.toggle('active', isSelected || isHovered);
    });
  };

  const persistReviews = () => {
    localStorage.setItem(`mahfourReviews_${productId}`, JSON.stringify(reviews));
  };

  const renderReviews = () => {
    reviewsList.innerHTML = '';
    if (!reviews.length) {
      reviewsList.innerHTML = '<div class="review-empty">لم يتم تسجيل أي تقييم بعد.</div>';
      return;
    }
    const sorted = [...reviews].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    sorted.forEach(review => {
      const reviewCard = document.createElement('div');
      reviewCard.className = 'review-card';
      if (review.userId === userId) {
        reviewCard.classList.add('review-self');
      }
      const filledStars = '<i class="fas fa-star"></i>'.repeat(Math.max(0, Math.min(5, review.rating)));
      const emptyStars = '<i class="far fa-star"></i>'.repeat(Math.max(0, 5 - review.rating));
      const safeComment = escapeHtml(review.comment || 'بدون تعليق');
      reviewCard.innerHTML = `
        <div class="review-header">
          <div class="reviewer-info">
            <span class="reviewer-name">${escapeHtml(getUserLabel(review.userId))}</span>
            <span class="review-date">${escapeHtml(formatDateTime(review.timestamp))}</span>
          </div>
          <div class="review-rating" aria-label="تقييم ${review.rating} من 5">
            ${filledStars}${emptyStars}
          </div>
        </div>
        <p class="review-comment">${safeComment}</p>
      `;
      reviewsList.appendChild(reviewCard);
    });
  };

  const updateHint = (message) => {
    if (ratingHint) {
      ratingHint.textContent = message;
    }
  };

  stars.forEach(star => {
    const starValue = Number(star.dataset.rating);
    star.setAttribute('role', 'button');
    star.setAttribute('tabindex', '0');
    star.addEventListener('mouseenter', () => renderStarSelection(starValue));
    star.addEventListener('mouseleave', () => renderStarSelection());
    star.addEventListener('click', () => {
      selectedRating = starValue;
      renderStarSelection();
      updateHint(`اخترت ${selectedRating} نجوم. اكتب تعليقك ثم اضغط إرسال التقييم.`);
    });
    star.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        star.click();
      }
    });
  });

  submitButton.addEventListener('click', () => {
    if (!selectedRating) {
        Swal.fire({
        icon: 'info',
        title: 'اختر التقييم',
        text: 'يرجى اختيار عدد النجوم قبل إرسال تقييمك.',
        timer: 2200,
        showConfirmButton: false
        });
        return;
      }
    const comment = (commentTextarea.value || '').trim();
    if (comment.length < 5) {
        Swal.fire({
        icon: 'info',
        title: 'أضف تعليقك',
        text: 'يرجى كتابة تعليق قصير عن تجربتك (5 أحرف على الأقل).',
        timer: 2400,
        showConfirmButton: false
      });
      return;
    }
    const newReview = {
      userId,
      rating: selectedRating,
      comment,
      timestamp: Date.now()
    };
    existingIndex = reviews.findIndex(review => review.userId === userId);
    if (existingIndex !== -1) {
      reviews[existingIndex] = newReview;
      } else {
      reviews.push(newReview);
      existingIndex = reviews.length - 1;
    }
    persistReviews();
    renderStarSelection();
    updateAverageRatingDisplay();
    renderReviews();
    updateHint('تم حفظ تقييمك، يمكنك تعديله في أي وقت.');
        Swal.fire({
          icon: 'success',
      title: 'شكرًا لتقييمك!',
      text: 'تم تسجيل رأيك بنجاح.',
      timer: 1800,
      showConfirmButton: false
    });
  });

  if (selectedRating) {
    updateHint(`يمكنك تعديل تقييمك (${selectedRating} نجوم) وتحديث تعليقك في أي وقت.`);
  } else {
    updateHint('اختر عدد النجوم ثم اكتب تعليقك.');
  }

  renderStarSelection();
  updateAverageRatingDisplay();
  renderReviews();
}

// Render products management
function renderProductsManagement(products = productsData) {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;
  productsGrid.innerHTML = '';
  products.forEach(product => {
    const discountedPrice = product.discount > 0 ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price;
    const priceDisplay = product.discount > 0
      ? `<span class="original-price">${product.price} جنيه</span><br><span class="price">${discountedPrice} جنيه (خصم ${product.discount}%)</span>`
      : `<span class="price">${product.price} جنيه</span>`;
    const card = document.createElement('div');
    card.className = `product-management-card ${product.available ? 'available' : 'unavailable'}`;
    card.innerHTML = `
      <div class="card-image">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
      </div>
      <div class="card-content">
        <h4>${product.name} (${product.code})</h4>
        <p class="category">${product.category}</p>
        <p>${priceDisplay}</p>
        <p class="availability">
          <span class="availability-badge" style="background: ${product.available ? '#4CAF50' : '#f44336'}">
            ${product.available ? 'متوفر' : 'غير متوفر'}
          </span>
        </p>
      </div>
      <div class="card-actions">
        <button class="btn edit-product" data-id="${product.id}">تعديل</button>
        <button class="btn delete-product" data-id="${product.id}">حذف</button>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

// Save product
function saveProduct() {
  const id = document.getElementById('edit-product-id').value || Date.now();
  const code = document.getElementById('product-code-input').value.trim();
  const name = document.getElementById('product-name-input').value.trim();
  const price = parseFloat(document.getElementById('product-price-input').value);
  const discount = parseFloat(document.getElementById('product-discount-input').value) || 0;
  const img = document.getElementById('product-img-input').value.trim();
  const category = document.getElementById('product-category-input').value.trim();
  const details = document.getElementById('product-details-input').value.trim();
  const dimensions = document.getElementById('product-dimensions-input').value.trim();
  const images = document.getElementById('product-images-input').value.split(',').map(img => img.trim()).filter(img => img);
  const video = document.getElementById('product-video-input').value.trim();
  const available = document.getElementById('product-available-input').value === 'true';
  if (!name || !price || !img || !category || !details || !code) {
    Swal.fire({
      icon: 'error',
      title: 'بيانات غير مكتملة',
      text: 'يرجى ملء جميع الحقول المطلوبة بما في ذلك كود المنتج.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }
  const product = {
    id: parseInt(id),
    code,
    name,
    price,
    discount,
    img,
    category,
    details,
    images: images.length ? images : [img],
    dimensions: dimensions || 'غير محدد',
    video: video || null,
    available,
    rating: productsData.find(p => p.id === parseInt(id))?.rating || { total: 0, count: 0 }
  };
  const existingIndex = productsData.findIndex(p => p.id === product.id);
  if (existingIndex !== -1) {
    productsData[existingIndex] = product;
  } else {
    productsData.push(product);
  }
  localStorage.setItem('mahfourProducts', JSON.stringify(productsData));
  refreshProductsView();
  renderProductsManagement();
  document.getElementById('add-product-form').style.display = 'none';
  clearProductForm();
  Swal.fire({
    icon: 'success',
    title: 'تم حفظ المنتج',
    showConfirmButton: false,
    timer: 1500
  });
}

// Clear product form
function clearProductForm() {
  document.getElementById('edit-product-id').value = '';
  document.getElementById('product-code-input').value = '';
  document.getElementById('product-name-input').value = '';
  document.getElementById('product-price-input').value = '';
  document.getElementById('product-discount-input').value = '';
  document.getElementById('product-img-input').value = '';
  document.getElementById('product-category-input').value = '';
  document.getElementById('product-details-input').value = '';
  document.getElementById('product-dimensions-input').value = '';
  document.getElementById('product-images-input').value = '';
  document.getElementById('product-video-input').value = '';
  document.getElementById('product-available-input').value = 'true';
}

// Delete product
function deleteProduct(productId) {
  Swal.fire({
    title: 'هل أنت متأكد؟',
    text: 'سيتم حذف المنتج نهائيًا!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'نعم، احذف',
    cancelButtonText: 'إلغاء'
  }).then((result) => {
    if (result.isConfirmed) {
      productsData = productsData.filter(p => p.id !== productId);
      favoritesData = favoritesData.filter(fav => fav.id !== productId);
      localStorage.setItem('mahfourProducts', JSON.stringify(productsData));
      localStorage.setItem('mahfourFavorites', JSON.stringify(favoritesData));
      refreshProductsView();
      renderProductsManagement();
      renderFavorites();
      Swal.fire({
        icon: 'success',
        title: 'تم حذف المنتج',
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
}

// Edit product
function editProduct(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;
  document.getElementById('edit-product-id').value = product.id;
  document.getElementById('product-code-input').value = product.code;
  document.getElementById('product-name-input').value = product.name;
  document.getElementById('product-price-input').value = product.price;
  document.getElementById('product-discount-input').value = product.discount;
  document.getElementById('product-img-input').value = product.img;
  document.getElementById('product-category-input').value = product.category;
  document.getElementById('product-details-input').value = product.details;
  document.getElementById('product-dimensions-input').value = product.dimensions;
  document.getElementById('product-images-input').value = product.images.join(', ');
  document.getElementById('product-video-input').value = product.video || '';
  document.getElementById('product-available-input').value = product.available.toString();
  document.getElementById('add-product-form').style.display = 'block';
}

// Search and filter products in management section
function setupManagementFilters() {
  const searchInput = document.getElementById('search-management-products');
  const sortSelect = document.getElementById('sort-management-products');
  const filterCategory = document.getElementById('filter-management-category');
  const resetFilters = document.getElementById('reset-management-filters');
  if (!searchInput || !sortSelect || !filterCategory || !resetFilters) return;
  function applyManagementFilters() {
    let filteredProducts = [...productsData];
    // Search
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.details.toLowerCase().includes(searchTerm) ||
        product.code.toLowerCase().includes(searchTerm)
      );
    }
    // Filter by category
    const category = filterCategory.value;
    if (category !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    // Sort
    const sortValue = sortSelect.value;
    if (sortValue === 'price-asc') {
      filteredProducts.sort((a, b) => {
        const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
        const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
        return priceA - priceB;
      });
    } else if (sortValue === 'price-desc') {
      filteredProducts.sort((a, b) => {
        const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
        const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
        return priceB - priceA;
      });
    }
    renderProductsManagement(filteredProducts);
  }
  searchInput.addEventListener('input', applyManagementFilters);
  sortSelect.addEventListener('change', applyManagementFilters);
  filterCategory.addEventListener('change', applyManagementFilters);
  resetFilters.addEventListener('click', () => {
    searchInput.value = '';
    sortSelect.value = 'default';
    filterCategory.value = 'all';
    renderProductsManagement(productsData);
  });
}

// Export statistics report
function exportStatsReport() {
  const period = document.getElementById('stats-period')?.value || 'all';
  const periodNames = {
    'all': 'الكل',
    'today': 'اليوم',
    'week': 'هذا الأسبوع',
    'month': 'هذا الشهر',
    'year': 'هذه السنة'
  };
  
  const allOrders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
  const orders = filterOrdersByPeriod(allOrders, period);
  
  let totalSales = 0;
  const productCounts = {};
  orders.forEach(order => {
    const totalMatch = order.details.match(/\*الإجمالي:\* ([\d.]+) جنيه/);
    if (totalMatch) {
      totalSales += parseFloat(totalMatch[1]);
    }
    const lines = order.details.split('\n');
    let currentCode = null;
    lines.forEach(line => {
      const stripped = line.trim();
      if (stripped.includes('كود المنتج:')) {
        currentCode = stripped.split(':')[1].trim();
      } else if (/^-?\s*(\d+) ×/.test(stripped)) {
        const qtyMatch = stripped.match(/^-?\s*(\d+) × ([\d.]+) جنيه = ([\d.]+) جنيه/);
        if (qtyMatch && currentCode) {
          const qty = parseInt(qtyMatch[1]);
          productCounts[currentCode] = (productCounts[currentCode] || 0) + qty;
          currentCode = null;
        }
      }
    });
  });
  
  const avgOrderValue = orders.length > 0 ? (totalSales / orders.length).toFixed(2) : 0;
  
  let topProductName = 'لا يوجد';
  if (Object.keys(productCounts).length > 0) {
    const topCode = Object.keys(productCounts).reduce((a, b) => productCounts[a] > productCounts[b] ? a : b);
    const topProduct = productsData.find(p => p.code === topCode);
    if (topProduct) {
      topProductName = topProduct.name;
    }
  }
  
  // Sort products by count
  const sortedProducts = Object.keys(productCounts)
    .map(code => {
      const prod = productsData.find(p => p.code === code);
      return {
        code,
        name: prod ? prod.name : code,
        count: productCounts[code]
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
  
  const topProductsList = sortedProducts.length > 0
    ? sortedProducts.map((item, i) => `${i + 1}. ${item.name}: ${item.count} قطعة`).join('\n')
    : 'لا توجد منتجات';
  
  const report = `
تقرير الإحصائيات - ${periodNames[period]}
تاريخ التصدير: ${new Date().toLocaleDateString('ar-EG')}
========================================

إجمالي الطلبات: ${orders.length}
إجمالي المبيعات: ${totalSales.toFixed(2)} جنيه
متوسط قيمة الطلب: ${avgOrderValue} جنيه
المنتج الأكثر طلبًا: ${topProductName}

أعلى 5 منتجات مبيعًا:
${topProductsList}

========================================
تم التصدير من لوحة تحكم MAHFOOR CNC
  `.trim();
  
  // Create and download file
  const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `إحصائيات_${periodNames[period]}_${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  Swal.fire({
    icon: 'success',
    title: 'تم التصدير بنجاح',
    text: 'تم حفظ تقرير الإحصائيات',
    timer: 2000,
    showConfirmButton: false
  });
}

// Filter orders by period
function filterOrdersByPeriod(orders, period) {
  if (period === 'all') return orders;
  
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  return orders.filter(order => {
    if (!order.date && !order.ts) return false;
    
    let orderDate;
    if (order.ts) {
      orderDate = new Date(order.ts);
    } else {
      try {
        // Try to parse Arabic date format
        const dateStr = order.date.toString();
        const normalized = dateStr.replace(/،/g, ',').replace(/[٠-٩]/g, d => String.fromCharCode(d.charCodeAt(0) - 0x0660 + 48));
        const m = normalized.match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})(?:[,\s]+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
        if (m) {
          const day = parseInt(m[1], 10);
          const month = parseInt(m[2], 10) - 1;
          let year = parseInt(m[3], 10);
          if (year < 100) year += 2000;
          orderDate = new Date(year, month, day);
        } else {
          orderDate = new Date(normalized);
        }
      } catch (e) {
        return false;
      }
    }
    
    if (isNaN(orderDate.getTime())) return false;
    
    switch (period) {
      case 'today':
        return orderDate >= today;
      case 'week':
        const weekAgo = new Date(today);
        weekAgo.setDate(weekAgo.getDate() - 7);
        return orderDate >= weekAgo;
      case 'month':
        return orderDate.getMonth() === now.getMonth() && orderDate.getFullYear() === now.getFullYear();
      case 'year':
        return orderDate.getFullYear() === now.getFullYear();
      default:
        return true;
    }
  });
}

// Update stats
function updateStats(period = 'all') {
  const allOrders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
  const orders = filterOrdersByPeriod(allOrders, period);
  
  document.getElementById('total-orders').textContent = orders.length;
  let totalSales = 0;
  const productCounts = {};
  const productRevenue = {}; // Track revenue per product
  const orderDates = []; // Track order dates for trend analysis
  
  // Color palette for charts
  const chartColors = [
    'rgba(102, 126, 234, 0.8)',   // Purple-blue
    'rgba(245, 87, 108, 0.8)',   // Pink-red
    'rgba(79, 172, 254, 0.8)',   // Blue
    'rgba(67, 233, 123, 0.8)',   // Green
    'rgba(250, 112, 154, 0.8)',  // Pink
    'rgba(48, 207, 208, 0.8)',   // Cyan
    'rgba(255, 193, 7, 0.8)',    // Yellow
    'rgba(156, 39, 176, 0.8)'    // Purple
  ];
  
  const gradientColors = [
    ['rgba(102, 126, 234, 0.6)', 'rgba(118, 75, 162, 0.6)'],
    ['rgba(245, 87, 108, 0.6)', 'rgba(240, 147, 251, 0.6)'],
    ['rgba(79, 172, 254, 0.6)', 'rgba(0, 242, 254, 0.6)'],
    ['rgba(67, 233, 123, 0.6)', 'rgba(56, 249, 215, 0.6)'],
    ['rgba(250, 112, 154, 0.6)', 'rgba(254, 225, 64, 0.6)']
  ];
  
  orders.forEach(order => {
    const totalMatch = order.details.match(/\*الإجمالي:\* ([\d.]+) جنيه/);
    if (totalMatch) {
      const orderTotal = parseFloat(totalMatch[1]);
      totalSales += orderTotal;
      // Track order date
      if (order.date) {
        orderDates.push({ date: order.date, total: orderTotal });
      }
    }
    const lines = order.details.split('\n');
    let currentCode = null;
    lines.forEach(line => {
      const stripped = line.trim();
      if (stripped.includes('كود المنتج:')) {
        currentCode = stripped.split(':')[1].trim();
      } else if (/^-?\s*(\d+) ×/.test(stripped)) {
        const qtyMatch = stripped.match(/^-?\s*(\d+) × ([\d.]+) جنيه = ([\d.]+) جنيه/);
        if (qtyMatch && currentCode) {
          const qty = parseInt(qtyMatch[1]);
          const revenue = parseFloat(qtyMatch[3]);
          productCounts[currentCode] = (productCounts[currentCode] || 0) + qty;
          productRevenue[currentCode] = (productRevenue[currentCode] || 0) + revenue;
          currentCode = null;
        }
      }
    });
  });
  
  document.getElementById('total-sales').textContent = totalSales.toFixed(2) + ' جنيه';
  
  // Calculate average order value
  const avgOrderValue = orders.length > 0 ? (totalSales / orders.length).toFixed(2) : 0;
  const avgOrderEl = document.getElementById('avg-order-value');
  if (avgOrderEl) {
    avgOrderEl.textContent = avgOrderValue + ' جنيه';
  }
  
  let topProductName = 'لا يوجد';
  if (Object.keys(productCounts).length > 0) {
    const topCode = Object.keys(productCounts).reduce((a, b) => productCounts[a] > productCounts[b] ? a : b);
    const topProduct = productsData.find(p => p.code === topCode);
    if (topProduct) {
      topProductName = topProduct.name;
    }
  }
  document.getElementById('top-product').textContent = topProductName;

  // Populate top 5 products detailed list
  const topProductsDetailedEl = document.getElementById('top-products-detailed');
  if (topProductsDetailedEl) {
    const arr = Object.keys(productCounts).map(code => {
      const prod = productsData.find(p => p.code === code);
      return { 
        code, 
        count: productCounts[code], 
        name: prod ? prod.name : code,
        revenue: productRevenue[code] || 0,
        price: prod ? (prod.discount > 0 ? prod.price * (1 - prod.discount / 100) : prod.price) : 0
      };
    });
    arr.sort((a, b) => b.count - a.count);
    topProductsDetailedEl.innerHTML = '';
    if (arr.length === 0) {
      topProductsDetailedEl.innerHTML = '<p style="text-align: center; color: var(--admin-text-light); padding: 20px;">لا توجد منتجات مبيعة بعد</p>';
    } else {
      arr.slice(0, 10).forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'top-product-item';
        itemEl.innerHTML = `
          <div class="top-product-rank">${index + 1}</div>
          <div class="top-product-info">
            <div class="top-product-name">${item.name}</div>
            <div class="top-product-stats">
              <div class="top-product-stat">
                <i class="fas fa-box"></i>
                <span>الكمية: <strong>${item.count}</strong> قطعة</span>
              </div>
              <div class="top-product-stat">
                <i class="fas fa-coins"></i>
                <span>الإيراد: <strong>${item.revenue.toFixed(2)}</strong> جنيه</span>
              </div>
            </div>
          </div>
        `;
        topProductsDetailedEl.appendChild(itemEl);
      });
    }
  }
  
  // Populate top 5 products list (legacy support)
  const topProductsListEl = document.getElementById('top-products-list');
  if (topProductsListEl) {
    const arr = Object.keys(productCounts).map(code => {
      const prod = productsData.find(p => p.code === code);
      return { code, count: productCounts[code], name: prod ? prod.name : code };
    });
    arr.sort((a, b) => b.count - a.count);
    topProductsListEl.innerHTML = '';
    if (arr.length === 0) {
      topProductsListEl.innerHTML = '<li>لا يوجد</li>';
    } else {
      arr.slice(0, 5).forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} — ${item.count} قطعة`;
        topProductsListEl.appendChild(li);
      });
    }
  }
  
  // Chart 1: Top Products Bar Chart (Colorful)
  try {
    const chartEl = document.getElementById('top-products-chart');
    if (chartEl && typeof Chart !== 'undefined') {
      const labels = Object.keys(productCounts).map(code => {
        const prod = productsData.find(p => p.code === code);
        return prod ? prod.name : code;
      });
      const data = Object.keys(productCounts).map(code => productCounts[code]);
      const combined = labels.map((label, i) => ({ label, value: data[i] }));
      combined.sort((a, b) => b.value - a.value);
      const topCombined = combined.slice(0, 5);
      const chartLabels = topCombined.map(c => c.label);
      const chartData = topCombined.map(c => c.value);
      
      if (!window._mahfourTopProductsChart) {
        const ctx = chartEl.getContext('2d');
        window._mahfourTopProductsChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: chartLabels,
            datasets: [{
              label: 'الكمية المباعة',
              data: chartData,
              backgroundColor: chartColors.slice(0, chartData.length),
              borderColor: chartColors.slice(0, chartData.length).map(c => c.replace('0.8', '1')),
              borderWidth: 2,
              borderRadius: 8,
              barThickness: 35
            }]
          },
          options: {
            indexAxis: 'y',
            plugins: { 
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                padding: 12,
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 13 }
              }
            },
            scales: {
              x: { 
                beginAtZero: true,
                ticks: { color: '#666', font: { size: 12 } },
                grid: { color: 'rgba(0,0,0,0.05)' }
              },
              y: { 
                ticks: { color: '#333', font: { size: 12, weight: 600 } },
                grid: { display: false }
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 1000, easing: 'easeOutQuart' }
          }
        });
      } else {
        const chart = window._mahfourTopProductsChart;
        chart.data.labels = chartLabels;
        chart.data.datasets[0].data = chartData;
        chart.data.datasets[0].backgroundColor = chartColors.slice(0, chartData.length);
        chart.data.datasets[0].borderColor = chartColors.slice(0, chartData.length).map(c => c.replace('0.8', '1'));
        chart.update('active');
      }
    }
  } catch (e) {
    console.warn('Top products chart failed', e);
  }
  
  // Chart 2: Revenue Distribution Pie Chart
  try {
    const revenueChartEl = document.getElementById('revenue-chart');
    if (revenueChartEl && typeof Chart !== 'undefined') {
      const revenueArr = Object.keys(productRevenue).map(code => {
        const prod = productsData.find(p => p.code === code);
        return { 
          code, 
          revenue: productRevenue[code], 
          name: prod ? prod.name : code 
        };
      });
      revenueArr.sort((a, b) => b.revenue - a.revenue);
      const topRevenue = revenueArr.slice(0, 5);
      const revenueLabels = topRevenue.map(r => r.name);
      const revenueData = topRevenue.map(r => r.revenue);
      
      if (!window._mahfourRevenueChart) {
        const ctx = revenueChartEl.getContext('2d');
        window._mahfourRevenueChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: revenueLabels,
            datasets: [{
              data: revenueData,
              backgroundColor: chartColors.slice(0, revenueData.length),
              borderColor: '#ffffff',
              borderWidth: 3,
              hoverOffset: 10
            }]
          },
          options: {
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  padding: 15,
                  font: { size: 12, weight: '500' },
                  usePointStyle: true
                }
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    const label = context.label || '';
                    const value = context.parsed || 0;
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = ((value / total) * 100).toFixed(1);
                    return `${label}: ${value.toFixed(2)} جنيه (${percentage}%)`;
                  }
                }
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            animation: { animateRotate: true, animateScale: true, duration: 1000 }
          }
        });
      } else {
        const chart = window._mahfourRevenueChart;
        chart.data.labels = revenueLabels;
        chart.data.datasets[0].data = revenueData;
        chart.data.datasets[0].backgroundColor = chartColors.slice(0, revenueData.length);
        chart.update('active');
      }
    }
  } catch (e) {
    console.warn('Revenue chart failed', e);
  }
  
  // Chart 3: Sales Trend (Last 7 Days)
  try {
    const trendChartEl = document.getElementById('sales-trend-chart');
    if (trendChartEl && typeof Chart !== 'undefined') {
      const now = new Date();
      const last7Days = [];
      for (let i = 6; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        last7Days.push({
          date: date.toLocaleDateString('ar-EG', { day: '2-digit', month: '2-digit' }),
          total: 0
        });
      }
      
      orderDates.forEach(order => {
        try {
          const orderDate = new Date(order.date);
          const daysAgo = Math.floor((now - orderDate) / (1000 * 60 * 60 * 24));
          if (daysAgo >= 0 && daysAgo <= 6) {
            last7Days[6 - daysAgo].total += order.total;
          }
        } catch (e) {
          // Skip invalid dates
        }
      });
      
      const trendLabels = last7Days.map(d => d.date);
      const trendData = last7Days.map(d => d.total);
      
      if (!window._mahfourTrendChart) {
        const ctx = trendChartEl.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(102, 126, 234, 0.3)');
        gradient.addColorStop(1, 'rgba(102, 126, 234, 0.05)');
        
        window._mahfourTrendChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: trendLabels,
            datasets: [{
              label: 'المبيعات (جنيه)',
              data: trendData,
              borderColor: 'rgba(102, 126, 234, 1)',
              backgroundColor: gradient,
              borderWidth: 3,
              fill: true,
              tension: 0.4,
              pointRadius: 6,
              pointHoverRadius: 8,
              pointBackgroundColor: '#ffffff',
              pointBorderColor: 'rgba(102, 126, 234, 1)',
              pointBorderWidth: 2
            }]
          },
          options: {
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                padding: 12,
                callbacks: {
                  label: function(context) {
                    return `المبيعات: ${context.parsed.y.toFixed(2)} جنيه`;
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: { 
                  color: '#666',
                  callback: function(value) {
                    return value.toFixed(0) + ' ج';
                  }
                },
                grid: { color: 'rgba(0,0,0,0.05)' }
              },
              x: {
                ticks: { color: '#666' },
                grid: { display: false }
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 1000, easing: 'easeOutQuart' }
          }
        });
      } else {
        const chart = window._mahfourTrendChart;
        chart.data.labels = trendLabels;
        chart.data.datasets[0].data = trendData;
        chart.update('active');
      }
    }
  } catch (e) {
    console.warn('Trend chart failed', e);
  }
  
  // Chart 4: Monthly Sales
  try {
    const monthlyChartEl = document.getElementById('monthly-sales-chart');
    if (monthlyChartEl && typeof Chart !== 'undefined') {
      const now = new Date();
      const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 
                     'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
      const monthlyData = new Array(12).fill(0);
      
      orderDates.forEach(order => {
        try {
          const orderDate = new Date(order.date);
          if (orderDate.getFullYear() === now.getFullYear()) {
            monthlyData[orderDate.getMonth()] += order.total;
          }
        } catch (e) {
          // Skip invalid dates
        }
      });
      
      if (!window._mahfourMonthlyChart) {
        const ctx = monthlyChartEl.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(245, 87, 108, 0.4)');
        gradient.addColorStop(1, 'rgba(245, 87, 108, 0.05)');
        
        window._mahfourMonthlyChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: months,
            datasets: [{
              label: 'المبيعات الشهرية',
              data: monthlyData,
              backgroundColor: gradient,
              borderColor: 'rgba(245, 87, 108, 1)',
              borderWidth: 2,
              borderRadius: 8,
              borderSkipped: false
            }]
          },
          options: {
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                padding: 12,
                callbacks: {
                  label: function(context) {
                    return `المبيعات: ${context.parsed.y.toFixed(2)} جنيه`;
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: { 
                  color: '#666',
                  callback: function(value) {
                    return value.toFixed(0) + ' ج';
                  }
                },
                grid: { color: 'rgba(0,0,0,0.05)' }
              },
              x: {
                ticks: { color: '#666', maxRotation: 45, minRotation: 45 },
                grid: { display: false }
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 1000, easing: 'easeOutQuart' }
          }
        });
      } else {
        const chart = window._mahfourMonthlyChart;
        chart.data.datasets[0].data = monthlyData;
        chart.update('active');
      }
    }
  } catch (e) {
    console.warn('Monthly chart failed', e);
  }
}

// Compute sales stats per product: returns map by product code with { totalQty, totalRevenue, monthlyQty, monthlyRevenue }
function computeProductSalesStats() {
  const orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
  const stats = {};
  const now = new Date();
  // helper: try to parse order date robustly (supports numeric timestamp `ts` or common date strings)
  function parseOrderDate(order) {
    if (!order) return null;
    if (order.ts) return new Date(order.ts);
    const s = (order.date || '').toString();
    if (!s) return null;
    // normalize Arabic comma and Arabic-Indic digits
    const normalized = s.replace(/،/g, ',').replace(/[٠-٩]/g, d => String.fromCharCode(d.charCodeAt(0) - 0x0660 + 48));
    // try to extract dd/mm/yyyy and optional time
    const m = normalized.match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})(?:[,\s]+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
    if (m) {
      const day = parseInt(m[1], 10);
      const month = parseInt(m[2], 10) - 1;
      let year = parseInt(m[3], 10);
      if (year < 100) year += 2000;
      const hour = m[4] ? parseInt(m[4], 10) : 0;
      const minute = m[5] ? parseInt(m[5], 10) : 0;
      const second = m[6] ? parseInt(m[6], 10) : 0;
      return new Date(year, month, day, hour, minute, second);
    }
    // last-resort: try Date.parse
    const parsed = Date.parse(normalized);
    return isNaN(parsed) ? null : new Date(parsed);
  }
  orders.forEach(order => {
    const lines = order.details.split('\n');
    let currentCode = null;
    lines.forEach(line => {
      const stripped = line.trim();
      if (stripped.includes('كود المنتج:')) {
        currentCode = stripped.split(':')[1].trim();
      } else {
        const qtyMatch = stripped.match(/^-?\s*(\d+) × ([\d.]+) جنيه = ([\d.]+) جنيه/);
        if (qtyMatch && currentCode) {
          const qty = parseInt(qtyMatch[1]);
          const price = parseFloat(qtyMatch[2]);
          const revenue = parseFloat(qtyMatch[3]);
          if (!stats[currentCode]) stats[currentCode] = { totalQty:0, totalRevenue:0, monthlyQty:0, monthlyRevenue:0 };
          stats[currentCode].totalQty += qty;
          stats[currentCode].totalRevenue += revenue;
          // check if order is within the same month (use robust parser)
          const orderDate = parseOrderDate(order);
          if (orderDate && orderDate.getFullYear() === now.getFullYear() && orderDate.getMonth() === now.getMonth()) {
            stats[currentCode].monthlyQty += qty;
            stats[currentCode].monthlyRevenue += revenue;
          }
          currentCode = null;
        }
      }
    });
  });
  return stats;
}

// Render admin products grid with stats
function renderAdminProducts() {
  const grid = document.getElementById('admin-products-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const stats = computeProductSalesStats();
  console.log('Rendering admin products with stats:', stats); // للتعقب

  productsData.forEach(prod => {
    const code = prod.code;
    const s = stats[code] || { totalQty: 0, totalRevenue: 0, monthlyQty: 0, monthlyRevenue: 0 };
    const card = document.createElement('div');
    card.className = 'admin-product-card';
    const price = prod.discount > 0 ? (prod.price * (1 - prod.discount / 100)).toFixed(2) : prod.price;
    const availabilityClass = prod.available ? 'available' : 'unavailable';
    const availabilityText = prod.available ? 'متوفر' : 'غير متوفر';

    card.innerHTML = `
      <div class="image-wrapper" style="height: 200px; overflow: hidden;"><img src="${prod.img}" alt="${prod.name}" style="width: 100%; height: 100%; object-fit: cover;"></div>
      <div class="admin-product-info">
        <h4 style="padding: 15px 15px 0; margin: 0; color: var(--admin-primary);">${prod.name} <small style="color:#999; font-weight:600;">(${prod.code})</small></h4>
        <div class="admin-product-meta" style="padding: 5px 15px 15px; color: var(--admin-text-light); font-size: 0.9em;">
          <span class="availability-badge ${availabilityClass}" style="background: ${prod.available ? '#27ae60' : '#e74c3c'}; color: white; padding: 2px 8px; border-radius: 6px; font-size: 0.8em;">${availabilityText}</span>
          - <strong>${price} جنيه</strong>
        </div>
      </div>
      <div class="admin-product-stats">
        <div class="admin-stat"><strong>خلال هذا الشهر:</strong> ${s.monthlyQty || 0} قطعة — ${s.monthlyRevenue ? s.monthlyRevenue.toFixed(2) : '0'} ج</div>
        <div class="admin-stat"><strong>إجمالي المبيعات:</strong> ${s.totalQty || 0} قطعة — ${s.totalRevenue ? s.totalRevenue.toFixed(2) : '0'} ج</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Points admin helpers
function renderPendingPointsList() {
  const container = document.getElementById('pending-points-list');
  if (!container) return;
  const pending = JSON.parse(localStorage.getItem('mahfourPendingPoints')) || [];
  container.innerHTML = '';
  if (pending.length === 0) {
    container.innerHTML = '<p style="color:#666;">لا توجد نقاط قيد الانتظار.</p>';
    return;
  }
  pending.forEach(p => {
    const div = document.createElement('div');
    div.className = 'pending-point-item';
    const displayName = p.name ? ` - ${p.name}` : '';
    div.innerHTML = `
      <input type="checkbox" data-order="${p.orderId}" />
      <div class="meta">
        <div class="phone">رقم العميل: ${p.phone}${displayName}</div>
        <div class="info">الطلب: ${p.orderId} — القيمة: ${p.amount} ج — نقاط: ${p.points} — التاريخ: ${p.date}</div>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderPointsBalances() {
  const container = document.getElementById('points-balances');
  if (!container) return;
  const balances = JSON.parse(localStorage.getItem('mahfourPoints')) || {};
  container.innerHTML = '';
  const keys = Object.keys(balances);
  if (keys.length === 0) {
    container.innerHTML = '<p style="color:#666;">لا توجد أرصدة نقاط محفوظة.</p>';
    return;
  }
  keys.forEach(phone => {
    const div = document.createElement('div');
    div.className = 'points-balance';
    const pts = balances[phone];
    // If we have names in balances stored as object { phone: { name, points } } support both formats
    let displayName = '';
    let actualPts = pts;
    if (typeof pts === 'object' && pts !== null) {
      displayName = pts.name ? ` - ${pts.name}` : '';
      actualPts = pts.points || 0;
    }
    const approxValue = (Math.floor(actualPts/100)*3).toFixed(2);
    div.innerHTML = `<strong>${phone}${displayName}</strong> — ${actualPts} نقطة — قيمة تقريبية: ${approxValue} جنيه`;
    container.appendChild(div);
  });
}

function confirmSelectedPoints() {
  const container = document.getElementById('pending-points-list');
  if (!container) return;
  const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');
  if (checkboxes.length === 0) {
    Swal.fire({ icon: 'info', title: 'لم يختر أي نقاط', text: 'اختر العناصر التي تريد تأكيدها أولًا.' });
    return;
  }
  const pending = JSON.parse(localStorage.getItem('mahfourPendingPoints')) || [];
  const balances = JSON.parse(localStorage.getItem('mahfourPoints')) || {};
  const toConfirm = [];
  checkboxes.forEach(cb => {
    const orderId = parseInt(cb.dataset.order);
    const idx = pending.findIndex(p => p.orderId === orderId);
    if (idx !== -1) {
      toConfirm.push(pending[idx]);
    }
  });
  if (toConfirm.length === 0) {
    Swal.fire({ icon: 'info', title: 'لا يوجد عناصر صالحة للتأكيد' });
    return;
  }
  // Ask admin for password before applying points
  Swal.fire({
    title: 'أدخل كلمة المرور لتأكيد النقاط',
    input: 'password',
    inputPlaceholder: 'كلمة المرور',
    showCancelButton: true,
    preConfirm: (val) => {
      if (!val) Swal.showValidationMessage('الرجاء إدخال كلمة المرور');
      return val;
    }
  }).then(res => {
    if (!res.isConfirmed) return;
    if (res.value !== ADMIN_PASSWORD) {
      Swal.fire({ icon: 'error', title: 'كلمة المرور غير صحيحة' });
      return;
    }
    // apply points (preserve name)
    toConfirm.forEach(item => {
      const existing = balances[item.phone];
      if (existing && typeof existing === 'object') {
        // object shape
        existing.points = (existing.points || 0) + item.points;
        if (item.name) existing.name = item.name;
        balances[item.phone] = existing;
      } else if (existing && typeof existing === 'number') {
        // legacy number -> convert to object
        balances[item.phone] = { name: item.name || '', points: existing + item.points };
      } else {
        balances[item.phone] = { name: item.name || '', points: item.points };
      }
      // remove from pending
      const idx = pending.findIndex(p => p.orderId === item.orderId);
      if (idx !== -1) pending.splice(idx, 1);
    });
    localStorage.setItem('mahfourPoints', JSON.stringify(balances));
    localStorage.setItem('mahfourPendingPoints', JSON.stringify(pending));
    renderPendingPointsList();
    renderPointsBalances();
    // refresh customer points display in cart and order modals if open
    const phoneEl = document.getElementById('phone-number');
    const orderNowPhoneEl = document.getElementById('order-now-phone-number');
    if (phoneEl && phoneEl.value) showCustomerPoints(phoneEl.value.trim());
    if (orderNowPhoneEl && orderNowPhoneEl.value) showCustomerPoints(orderNowPhoneEl.value.trim());
    Swal.fire({ icon: 'success', title: 'تم إضافة النقاط' });
  });
}

function openPointsAdminPanel() {
  const panel = document.getElementById('points-admin-panel');
  if (!panel) return;
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  // refresh lists when opened
  if (panel.style.display === 'block') {
    renderPendingPointsList();
    renderPointsBalances();
  }
}

// --- وظيفة زر العودة للأعلى ---
function setupBackToTopButton() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (!backToTopBtn) return;

  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// --- وظيفة إخفاء الهيدر عند التمرير ---
function setupHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  let lastScrollTop = 0;
  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      // Scroll Down
      header.classList.add('header-hidden');
    } else {
      // Scroll Up
      header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }, false);
}

// --- وظيفة ضبط ارتفاع الـ sidebar حتى لا يخفي المحتوى ---
function setupFiltersSidebar() {
  const filtersSidebar = document.querySelector('.filters');
  if (!filtersSidebar) return;

  function updateSidebarHeight() {
    const productsContainer = document.querySelector('.products-container');
    const footer = document.querySelector('footer');
    if (!productsContainer || !footer) return;

    const containerRect = productsContainer.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const headerHeight = 80; // top offset
    const bottomPadding = 20;

    // حساب المسافة من أعلى الـ container إلى الـ footer
    const distanceToFooter = footerRect.top - containerRect.top;
    
    // إذا كان الـ footer مرئي، حدد الارتفاع بناءً على المسافة المتبقية
    if (footerRect.top < viewportHeight) {
      const availableHeight = distanceToFooter - headerHeight - bottomPadding;
      if (availableHeight > 0) {
        filtersSidebar.style.maxHeight = `${availableHeight}px`;
      }
    } else {
      // إذا كان الـ footer غير مرئي، استخدم الارتفاع الكامل للشاشة
      filtersSidebar.style.maxHeight = `calc(100vh - ${headerHeight + bottomPadding}px)`;
    }
  }

  // تحديث الارتفاع عند التمرير وتغيير حجم النافذة
  window.addEventListener('scroll', updateSidebarHeight);
  window.addEventListener('resize', updateSidebarHeight);
  
  // تحديث أولي
  setTimeout(updateSidebarHeight, 100);
  setTimeout(updateSidebarHeight, 500);
}

// Initialize
function initialize() {
  initializeProducts();
  cartData = JSON.parse(localStorage.getItem('mahfoor_cart')) || []; // Ensure cart is loaded from new key
  refreshProductsView();
  updateCartCount();
  updateFavoritesCount();
  setupFilters();
  setupBackToTopButton(); // تفعيل زر العودة للأعلى
  setupHeaderScroll(); // تفعيل إخفاء الهيدر
  setupFiltersSidebar(); // تفعيل ضبط ارتفاع الـ sidebar
  const cartBtn = document.getElementById('cart-btn');
  const favoritesBtn = document.getElementById('favorites-btn');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'cart_indix.html';
    });
  }
  const phoneInput = document.getElementById('phone-number');
  const orderNowPhone = document.getElementById('order-now-phone-number');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => showCustomerPoints(e.target.value.trim()));
    phoneInput.addEventListener('blur', (e) => showCustomerPoints(e.target.value.trim()));
    // show initial if value exists
    if (phoneInput.value) showCustomerPoints(phoneInput.value.trim());
  }
  if (orderNowPhone) {
    orderNowPhone.addEventListener('input', (e) => showCustomerPoints(e.target.value.trim()));
    orderNowPhone.addEventListener('blur', (e) => showCustomerPoints(e.target.value.trim()));
  }
  if (favoritesBtn) {
    favoritesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'favorites.html'; // توجيه المستخدم لصفحة المفضلة الجديدة
    });
  }
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
  // Product page specific
  if (window.location.pathname.includes('product-details.html')) {
    setupProductDetails();
  }
  // Admin page specific
  if (window.location.pathname.includes('admin.html')) {
  const verifyPasswordBtn = document.getElementById('verify-password');
    const saveProductBtn = document.getElementById('save-product');
    const cancelEditBtn = document.getElementById('cancel-edit');
    const clearOrdersBtn = document.getElementById('clear-orders');
    const searchOrders = document.getElementById('search-orders');
    if (verifyPasswordBtn) {
      verifyPasswordBtn.addEventListener('click', verifyPassword);
      document.getElementById('password-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verifyPassword();
      });
    }
    // Return to home button in password modal
    const returnToHomeBtn = document.getElementById('return-to-home');
    if (returnToHomeBtn) {
      returnToHomeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // close modal and navigate back to home
        document.getElementById('password-modal').style.display = 'none';
        window.location.href = 'index.html';
      });
    }
    // manage products UI removed from HTML; no action required here
    const clearAllOrdersBtn = document.getElementById('clear-all-orders-btn');
    if (clearAllOrdersBtn) {
      clearAllOrdersBtn.addEventListener('click', (e) => {
        e.preventDefault();
        promptClearOrders();
      });
    }
      const exportXlsxBtn = document.getElementById('export-xlsx-btn');
      const exportPdfBtn = document.getElementById('export-pdf-btn');
      if (exportXlsxBtn) exportXlsxBtn.addEventListener('click', exportOrdersToXLSX);
      if (exportPdfBtn) exportPdfBtn.addEventListener('click', exportOrdersToPDF);

      // --- إضافة جديدة لزر الفاتورة ---
      const createInvoiceBtn = document.getElementById('create-invoice-btn');
      if (createInvoiceBtn) {
        createInvoiceBtn.addEventListener('click', () => {
          window.open('invoice.html', '_blank');
        });
      }
      
      // --- ميزات الإحصائيات ---
      const statsPeriodSelect = document.getElementById('stats-period');
      const refreshStatsBtn = document.getElementById('refresh-stats-btn');
      const exportStatsBtn = document.getElementById('export-stats-btn');
      
      if (statsPeriodSelect) {
        statsPeriodSelect.addEventListener('change', (e) => {
          const period = e.target.value;
          updateStats(period);
        });
      }
      
      if (refreshStatsBtn) {
        refreshStatsBtn.addEventListener('click', () => {
          const period = statsPeriodSelect ? statsPeriodSelect.value : 'all';
          const icon = refreshStatsBtn.querySelector('i');
          icon.style.animation = 'spin 0.6s linear';
          setTimeout(() => {
            updateStats(period);
            icon.style.animation = '';
          }, 300);
        });
      }
      
      if (exportStatsBtn) {
        exportStatsBtn.addEventListener('click', exportStatsReport);
      }
      
      // إضافة تفاعل عند النقر على بطاقات الإحصائيات
      function setupStatCardsInteraction() {
        document.querySelectorAll('.stat-card').forEach(card => {
          // Check if already has listener
          if (card.dataset.hasListener === 'true') return;
          card.dataset.hasListener = 'true';
          
          card.addEventListener('click', function() {
            const title = this.querySelector('.stat-title').textContent;
            const value = this.querySelector('.stat-value').textContent;
            Swal.fire({
              title: title,
              html: `<div style="font-size: 2em; color: #13352f; font-weight: bold; margin: 20px 0;">${value}</div>`,
              icon: 'info',
              confirmButtonText: 'حسناً'
            });
          });
        });
      }
      
      // Setup initially after page loads
      setTimeout(setupStatCardsInteraction, 1000);
    // Render admin products list
    renderAdminProducts();
    // Toggle products panel
    const toggleAdminProductsBtn = document.getElementById('toggle-admin-products');
    const adminProductsWrap = document.getElementById('admin-products-wrap');
    if (toggleAdminProductsBtn && adminProductsWrap) {
      toggleAdminProductsBtn.addEventListener('click', () => {
        const isOpen = adminProductsWrap.classList.toggle('open');
        if (isOpen) {
          adminProductsWrap.classList.remove('collapsed');
          adminProductsWrap.style.maxHeight = adminProductsWrap.scrollHeight + 'px';
          toggleAdminProductsBtn.innerHTML = '<i class="fas fa-chevron-up"></i> إخفاء المنتجات';
          // ensure grid is rendered
          renderAdminProducts();
        } else {
          adminProductsWrap.classList.add('collapsed');
          adminProductsWrap.style.maxHeight = '0';
          toggleAdminProductsBtn.innerHTML = '<i class="fas fa-chevron-down"></i> عرض/إخفاء المنتجات';
        }
      });
    }
  // Points admin wiring
  const openPointsAdminBtn = document.getElementById('open-points-admin');
  const confirmSelectedPointsBtn = document.getElementById('confirm-selected-points');
  const refreshPointsListBtn = document.getElementById('refresh-points-list');
  if (openPointsAdminBtn) openPointsAdminBtn.addEventListener('click', openPointsAdminPanel);
  if (confirmSelectedPointsBtn) confirmSelectedPointsBtn.addEventListener('click', confirmSelectedPoints);
  if (refreshPointsListBtn) refreshPointsListBtn.addEventListener('click', () => { renderPendingPointsList(); renderPointsBalances(); });
    // products management modal removed; skip wiring verifyProductsPassword
    if (addProductBtn) {
      addProductBtn.addEventListener('click', () => {
        document.getElementById('add-product-form').style.display = 'block';
        clearProductForm();
      });
    }
    if (saveProductBtn) {
      saveProductBtn.addEventListener('click', saveProduct);
    }
    if (cancelEditBtn) {
      cancelEditBtn.addEventListener('click', () => {
        document.getElementById('add-product-form').style.display = 'none';
        clearProductForm();
      });
    }
    if (clearOrdersBtn) {
      clearOrdersBtn.addEventListener('click', clearOrders);
    }
    const toggleOrdersBtn = document.getElementById('toggle-orders-btn');
    const ordersWrap = document.getElementById('orders-wrap');
    if (toggleOrdersBtn && ordersWrap) {
      toggleOrdersBtn.addEventListener('click', () => {
        if (ordersWrap.classList.contains('collapsed')) {
          ordersWrap.classList.remove('collapsed');
          ordersWrap.style.maxHeight = ordersWrap.scrollHeight + 'px';
          toggleOrdersBtn.innerHTML = '<i class="fas fa-chevron-up"></i> إخفاء السجل'; // Render orders when opening
          renderOrders();
        } else {
          ordersWrap.classList.add('collapsed');
          ordersWrap.style.maxHeight = '0';
          toggleOrdersBtn.innerHTML = '<i class="fas fa-chevron-down"></i> عرض/إخفاء السجل';
        }
      });
    }
    if (searchOrders) {
      searchOrders.addEventListener('input', () => {
        const searchTerm = searchOrders.value.trim().toLowerCase();
        const orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
        const filteredOrders = orders.filter(order =>
          order.id.toString().includes(searchTerm) ||
          order.details.toLowerCase().includes(searchTerm) || order.status.toLowerCase().includes(searchTerm)
        );
        renderOrders(filteredOrders);
      });
    }
  }
  // Event delegation for product cards, cart, and favorites
  document.addEventListener('click', (e) => {
    const addToCartBtn = e.target.closest('.add-to-cart');
    const orderNowBtn = e.target.closest('.order-now');
    const addToFavoritesBtn = e.target.closest('.add-to-favorites');
    const imageWrapper = e.target.closest('.image-wrapper');
    const minusBtn = e.target.closest('.minus');
    const plusBtn = e.target.closest('.plus');
    const removeBtn = e.target.closest('.remove');
    const itemName = e.target.closest('.item-name');
    const deleteOrderBtn = e.target.closest('.delete-order');
    const editProductBtn = e.target.closest('.edit-product');
    const deleteProductBtn = e.target.closest('.delete-product');
    
    // REMOVED: const printInvoiceBtn = e.target.closest('.print-invoice-btn');
    if (addToCartBtn) {
      const productId = parseInt(addToCartBtn.dataset.id);
      const product = productsData.find(p => p.id === productId);
      if (!product.available) {
        Swal.fire({
          icon: 'warning',
          title: 'المنتج غير متوفر',
          text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
          showConfirmButton: false,
          timer: 2000
        });
        return;
      }
      const quantityControl = addToCartBtn.parentElement.querySelector('.quantity-control');
      const quantitySpan = quantityControl.querySelector('.product-quantity');
      const quantity = parseInt(quantitySpan.textContent);
      addToCart(productId, quantity);
      quantitySpan.textContent = '1'; // إعادة تعيين العداد إلى 1 بعد الإضافة
      return; // تمت إضافة هذا السطر لمنع تنفيذ الكود التالي بالخطأ
    }
    if (orderNowBtn) {
      const productId = parseInt(orderNowBtn.dataset.id);
      const product = productsData.find(p => p.id === productId);
      if (!product.available) {
        Swal.fire({
          icon: 'warning',
          title: 'المنتج غير متوفر',
          text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
          showConfirmButton: false,
          timer: 2000
        });
        return;
      }
      const quantityControl = orderNowBtn.parentElement.querySelector('.quantity-control');
      const quantitySpan = quantityControl.querySelector('.product-quantity');
      const quantity = parseInt(quantitySpan.textContent);
      document.getElementById('order-now-modal').style.display = 'flex';
      const orderProductName = document.getElementById('order-product-name');
      if (orderProductName) {
        orderProductName.textContent = `${product.name} (${product.code})`;
      }
      const submitOrderNowBtn = document.getElementById('submit-order-now');
      const closeOrderNowBtn = document.getElementById('close-order-now');
      submitOrderNowBtn.onclick = () => {
        orderNowViaWhatsApp(productId, quantity);
        quantitySpan.textContent = '1';
      };
      closeOrderNowBtn.onclick = () => {
        document.getElementById('order-now-modal').style.display = 'none';
        document.getElementById('order-now-full-name').value = '';
        document.getElementById('order-now-address').value = '';
        document.getElementById('order-now-location-link').value = '';
        document.getElementById('order-now-phone-number').value = '';
        if (orderProductName) {
          orderProductName.textContent = '';
        }
        quantitySpan.textContent = '1';
      };
    }
    if (addToFavoritesBtn) {
      const productId = parseInt(addToFavoritesBtn.dataset.id);
      addToFavorites(productId);
    }
    if (imageWrapper) {
      const productCard = imageWrapper.closest('.product-card');
      if (productCard) {
        const productId = parseInt(productCard.querySelector('.add-to-cart').dataset.id);
        window.location.href = `product-details.html?id=${productId}`;
      }
    }
    if (plusBtn) {
      const productId = parseInt(plusBtn.dataset.id);
      const product = productsData.find(p => p.id === productId);
      if (!product.available) {
        Swal.fire({
          icon: 'warning',
          title: 'المنتج غير متوفر',
          text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
          showConfirmButton: false,
          timer: 2000
        });
        return;
      }
      const parent = plusBtn.closest('.quantity-control') || plusBtn.closest('li');
      const quantitySpan = parent.querySelector('.product-quantity');
      let quantity = parseInt(quantitySpan.textContent);
      quantity++;
      quantitySpan.textContent = quantity;
    }
    if (minusBtn) {
      const productId = parseInt(minusBtn.dataset.id);
      const product = productsData.find(p => p.id === productId);
      if (!product.available) {
        // No need for alert here as it's handled by other buttons
        return;
      }
      const parent = minusBtn.closest('.quantity-control') || minusBtn.closest('li');
      const quantitySpan = parent.querySelector('.product-quantity');
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 1) {
        quantity--;
        quantitySpan.textContent = quantity;
      }
    }
    if (removeBtn) {
    }
    if (itemName) {
      const productId = parseInt(itemName.dataset.id);
      window.location.href = `product-details.html?id=${productId}`;
    }
    if (editProductBtn) {
      const productId = parseInt(editProductBtn.dataset.id);
      editProduct(productId);
    }
    if (deleteProductBtn) {
      const productId = parseInt(deleteProductBtn.dataset.id);
      deleteProduct(productId);
    }
  });
}

// Run initialization
document.addEventListener('DOMContentLoaded', initialize);

// Sync points across tabs: when mahfourPoints changes, refresh display
window.addEventListener('storage', (e) => {
  if (e.key === 'mahfourPoints' || e.key === 'mahfourPendingPoints') {
    const phoneInput = document.getElementById('phone-number');
    const orderNowPhone = document.getElementById('order-now-phone-number');
    if (phoneInput && phoneInput.value) showCustomerPoints(phoneInput.value.trim());
    if (orderNowPhone && orderNowPhone.value) showCustomerPoints(orderNowPhone.value.trim());
  }
  if (e.key === 'mahfoor_cart') {
    cartData = JSON.parse(e.newValue) || [];
    updateCartCount();
  }
});