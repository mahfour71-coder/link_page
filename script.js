const productsData = [
  { id: 1, name: "ماديلية خشبية علي شكل حصان ", price: 35, img: "https://i.postimg.cc/2S37xLtg/photo-2025-09-04-22-32-00.jpg", category: "اكسسورات", details: "حصان خشبي مصنوع يدويًا من خشب الزان، بأبعاد 20x30 سم، مثالي لتزيين المكاتب.", images: ["https://i.postimg.cc/4nMS61K7/photo.jpg", "https://images.pexels.com/photos/1648775/pexels-photo-1648775.jpeg"] },
  { id: 2, name: "استاند تليفون ", price: 70, img: "https://i.postimg.cc/rmbkKrvc/photo-2025-09-04-22-35-04.jpg", category: "اكسسورات", details: "كلمة خشبية مزخرفة، مثالية كهدية شخصية، مصنوعة من خشب الماهوجني.", images: ["https://i.postimg.cc/tCJ3fhsq/photo.jpg"] },
  { id: 3, name: "ماديلية خشبية علي علامة مرسيدس", price: 35, img: "https://i.postimg.cc/h4TDfCP5/photo-2025-09-04-22-37-25.jpg", category: "اكسسورات", details: "منتج خشبي متعدد الاستخدامات للديكور المنزلي، بأبعاد 15x15 سم.", images: ["https://i.postimg.cc/pyyS5SdM/photo-3.jpg"] },
  { id: 4, name: "لعبه x.o", price: 99, img: "https://i.postimg.cc/gj9TCqCw/photo.jpg", category: "العاب", details: "حصان خشبي صغير مصنوع يدويًا، مثالي كهدية تذكارية.", images: ["https://i.postimg.cc/900jZxJw/photo-2025-09-05-02-44-18.jpg"] },
  { id: 5, name: "كوستر", price: 30, img: "https://i.postimg.cc/1zwCpNns/photo-2025-09-04-22-39-53.jpg", category: "ادوات منزلية", details: "مكعب خشبي مزخرف بتصميم فريد، مصنوع من خشب الصنوبر.", images: ["https://i.postimg.cc/NFw0GMQn/photo-4.jpg", "https://i.postimg.cc/4nMS61K7/photo.jpg"] },
  { id: 6, name: "كوستر", price: 30, img: "https://i.postimg.cc/rsfwL0Yx/photo-2025-09-05-02-41-16.jpg", category: "ادوات منزلية", details: "مكعب خشبي مزخرف بتصميم فريد، مصنوع من خشب الصنوبر.", images: ["https://i.postimg.cc/NFw0GMQn/photo-4.jpg", "https://i.postimg.cc/4nMS61K7/photo.jpg"] },
  { id: 7, name: "كوستر", price: 30, img: "https://i.postimg.cc/pdKVL162/photo-2025-09-05-02-42-09.jpg", category: "ادوات منزلية", details: "مكعب خشبي مزخرف بتصميم فريد، مصنوع من خشب الصنوبر.", images: ["https://i.postimg.cc/NFw0GMQn/photo-4.jpg", "https://i.postimg.cc/4nMS61K7/photo.jpg"] },
  { id: 8, name: "ديكور خشبي علي شكل كف", price: 75, img: "https://i.postimg.cc/0ND2gZ3m/photo-2025-09-04-22-20-43.jpg", category: "ديكور", details: "ديكور خشبي بتصميم عقاب، مثالي لعشاق الديكورات الفريدة.", images: ["https://i.postimg.cc/QxfjwSKw/photo.jpg"] },
  { id: 9, name: "كوستر 'Everyday is More Better'", price: 55, img: "https://i.postimg.cc/bJV5mfTR/photo-2025-09-04-22-26-03.jpg", category: "ادوات منزلية", details: "لوحة خشبية تحمل عبارة ملهمة، بأبعاد 25x35 سم.", images: ["https://i.postimg.cc/mDW4C5Kz/photo-3.jpg", "https://i.postimg.cc/6471s8Pp/photo-2.jpg"] }
];

function renderProducts(products) {
  const container = document.querySelector('.products');
  const productCards = container.querySelectorAll('.product-card');
  productCards.forEach(card => card.remove());

  products.forEach(product => {
    container.insertAdjacentHTML('beforeend', `
      <div class="product-card" data-name="${product.name}" data-price="${product.price}" data-category="${product.category}">
        <a href="product-details.html?id=${product.id}">
          <img src="${product.img}" alt="${product.name} مصنوع يدويًا" loading="lazy">
          <h3>${product.name}</h3>
        </a>
        <p>سعر: ${product.price} جنيه</p>
        <div class="quantity-control" data-id="${product.id}">
          <button class="qty-btn minus" data-id="${product.id}">-</button>
          <span class="product-quantity" data-id="${product.id}">1</span>
          <button class="qty-btn plus" data-id="${product.id}">+</button>
        </div>
        <div class="buttons">
          <a href="#" class="btn add-to-cart" data-name="${product.name}" data-price="${product.price}" data-id="${product.id}"><i class="fas fa-cart-plus"></i> أضف إلى السلة</a>
          <a href="#" class="btn order-now">اطلب الآن</a>
        </div>
      </div>
    `);
  });

  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      const isPlus = e.target.classList.contains('plus');
      const quantityElement = document.querySelector(`.product-quantity[data-id="${id}"]`);
      let quantity = parseInt(quantityElement.textContent);
      if (isPlus) {
        quantity++;
      } else {
        quantity = Math.max(1, quantity - 1);
      }
      quantityElement.textContent = quantity;
    });
  });

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = btn.dataset.name;
      const price = Number(btn.dataset.price);
      const id = btn.dataset.id;
      const quantity = parseInt(document.querySelector(`.product-quantity[data-id="${id}"]`).textContent);
      addToCart(e, name, price, quantity);
    });
  });

  document.querySelectorAll('.order-now').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = e.target.closest('.product-card').dataset.name;
      const price = e.target.closest('.product-card').dataset.price;
      const id = e.target.closest('.product-card').querySelector('.add-to-cart').dataset.id;
      const quantity = parseInt(document.querySelector(`.product-quantity[data-id="${id}"]`).textContent);
      Swal.fire({
        title: 'بيانات الطلب',
        html: `
          <input id="swal-full-name" class="swal2-input" placeholder="الاسم الثلاثي" required>
          <input id="swal-address" class="swal2-input" placeholder="العنوان بالتفصيل" required>
          <input id="swal-location-link" class="swal2-input" placeholder="رابط الموقع (اختياري)">
          <input id="swal-phone-number" class="swal2-input" placeholder="رقم الهاتف" pattern="\\d{11}" required>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'إرسال الطلب',
        cancelButtonText: 'إلغاء',
        preConfirm: () => {
          const fullName = document.getElementById('swal-full-name').value.trim();
          const address = document.getElementById('swal-address').value.trim();
          const phoneNumber = document.getElementById('swal-phone-number').value.trim();
          const locationLink = document.getElementById('swal-location-link').value.trim();
          if (!fullName || !address || !phoneNumber || !/^\d{11}$/.test(phoneNumber)) {
            Swal.showValidationMessage('يرجى ملء كل الحقول الإلزامية ورقم الهاتف يجب أن يكون 11 رقمًا.');
            return;
          }
          return { fullName, address, phoneNumber, locationLink };
        }
      }).then(result => {
        if (result.isConfirmed) {
          const { fullName, address, phoneNumber, locationLink } = result.value;
          let message = `طلب منتج:\nالمنتج: ${name}\nالسعر: ${price} جنيه\nالكمية: ${quantity}\nالاسم: ${fullName}\nالعنوان: ${address}\nرقم الهاتف: ${phoneNumber}\n`;
          if (locationLink) message += `رابط الموقع: ${locationLink}\n`;
          const url = `https://wa.me/201033662370?text=${encodeURIComponent(message)}`;
          window.open(url, '_blank');
          let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
          const orderNumber = orders.length + 1;
          orders.push({ orderNumber, message });
          localStorage.setItem('mahfourOrders', JSON.stringify(orders));
          Swal.fire({
            icon: 'success',
            title: `تم إرسال الطلب رقم ${orderNumber} عبر واتساب`,
            showConfirmButton: false,
            timer: 2000
          });
        }
      });
    });
  });
}

function filterAndSortProducts() {
  const sortValue = document.getElementById('sort-products').value;
  const filterValue = document.getElementById('filter-category').value;
  const searchTerm = document.getElementById('search-products').value.trim();

  let filtered = [...productsData];
  if (searchTerm) {
    filtered = filtered.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  if (filterValue !== 'all') {
    filtered = filtered.filter(product => product.category === filterValue);
  }
  if (sortValue === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

function addToCart(e, name, price, quantity) {
  e.preventDefault();
  const existingItem = cartData.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + quantity;
  } else {
    cartData.push({ name, price, quantity });
  }
  renderCart();
  Swal.fire({
    icon: 'success',
    title: `✅ تم إضافة ${quantity} من ${name} للسلة`,
    showConfirmButton: false,
    timer: 1500
  });
}

const cartBtn = document.getElementById('cart-btn');
const cart = document.getElementById('cart');
const closeCart = document.getElementById('close-cart');
const cartItems = document.querySelector('.cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const orderCartBtn = document.getElementById('order-cart');
const clearCartBtn = document.getElementById('clear-cart');

let cartData = JSON.parse(localStorage.getItem('mahfourCart')) || [];

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cartData.forEach((item, index) => {
    const itemTotal = item.price * (item.quantity || 1);
    total += itemTotal;
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="item-name" data-name="${item.name}">${item.name}</span>
      <span class="item-price">${item.price} جنيه</span>
      <button class="qty-btn minus" data-index="${index}">-</button>
      <span class="item-quantity">x${item.quantity || 1}</span>
      <button class="qty-btn plus" data-index="${index}">+</button>
      <span class="item-total">= ${itemTotal} جنيه</span>
      <button class="remove" data-index="${index}">❌</button>
    `;
    cartItems.appendChild(li);
  });
  cartCount.textContent = cartData.reduce((sum, item) => sum + (item.quantity || 1), 0);
  cartTotal.textContent = total;
  localStorage.setItem('mahfourCart', JSON.stringify(cartData));

  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      const isPlus = e.target.classList.contains('plus');
      if (isPlus) {
        cartData[index].quantity = (cartData[index].quantity || 1) + 1;
      } else {
        cartData[index].quantity = (cartData[index].quantity || 1) - 1;
        if (cartData[index].quantity < 1) cartData[index].quantity = 1;
      }
      renderCart();
    });
  });

  document.querySelectorAll('.item-name').forEach(nameSpan => {
    nameSpan.addEventListener('click', () => {
      const productName = nameSpan.dataset.name;
      const product = productsData.find(p => p.name === productName);
      if (product) {
        window.location.href = `product-details.html?id=${product.id}`;
      }
    });
  });
}

cartItems.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const index = e.target.dataset.index;
    cartData.splice(index, 1);
    renderCart();
  }
});

clearCartBtn.addEventListener('click', () => {
  Swal.fire({
    icon: 'warning',
    title: 'هل أنت متأكد؟',
    text: 'سيتم مسح كل المنتجات من السلة!',
    showCancelButton: true,
    confirmButtonText: 'نعم، امسح',
    cancelButtonText: 'إلغاء'
  }).then(result => {
    if (result.isConfirmed) {
      cartData = [];
      renderCart();
      Swal.fire({
        icon: 'success',
        title: 'تم مسح السلة',
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
});

cartBtn.addEventListener('click', () => cart.classList.add('open'));
closeCart.addEventListener('click', () => cart.classList.remove('open'));

function sanitizeInput(input) {
  return input.replace(/[<>&]/g, '');
}

orderCartBtn.addEventListener('click', () => {
  if (cartData.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'السلة فارغة!',
      showConfirmButton: false,
      timer: 1500
    });
    return;
  }

  const fullName = sanitizeInput(document.getElementById('full-name').value.trim());
  const address = sanitizeInput(document.getElementById('address').value.trim());
  const phoneNumber = sanitizeInput(document.getElementById('phone-number').value.trim());
  const locationLink = sanitizeInput(document.getElementById('location-link').value.trim());
  if (!fullName || !address || !phoneNumber || !/^\d{11}$/.test(phoneNumber)) {
    Swal.fire({
      icon: 'error',
      title: 'يرجى ملء كل الحقول الإلزامية ورقم الهاتف يجب أن يكون 11 رقمًا.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }

  let message = `بيانات العميل:\nالاسم: ${fullName}\nالعنوان: ${address}\nرقم الهاتف: ${phoneNumber}\n`;
  if (locationLink) message += `رابط الموقع: ${locationLink}\n`;
  message += `\nالمنتجات المطلوبة:\n`;
  cartData.forEach(item => {
    message += `- ${item.name} - ${item.price} جنيه x${item.quantity || 1}\n`;
  });
  const total = cartData.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  message += `\nالإجمالي: ${total} جنيه`;

  Swal.fire({
    icon: 'info',
    title: 'تأكيد البيانات',
    html: `<pre>${message}</pre>`,
    showCancelButton: true,
    confirmButtonText: 'إرسال عبر واتساب',
    cancelButtonText: 'إلغاء'
  }).then(result => {
    if (result.isConfirmed) {
      const orderNumber = (JSON.parse(localStorage.getItem('mahfourOrders')) || []).length + 1;
      const url = `https://wa.me/201033662370?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
      orders.push({ orderNumber, message });
      localStorage.setItem('mahfourOrders', JSON.stringify(orders));
      cartData = [];
      renderCart();
      Swal.fire({
        icon: 'success',
        title: `تم إرسال الطلب رقم ${orderNumber} عبر واتساب`,
        showConfirmButton: false,
        timer: 2000
      });
    }
  });
});

renderProducts(productsData);
renderCart();
document.getElementById('search-products').addEventListener('input', filterAndSortProducts);
document.getElementById('sort-products').addEventListener('change', filterAndSortProducts);
document.getElementById('filter-category').addEventListener('change', filterAndSortProducts);
document.getElementById('reset-filters').addEventListener('click', () => {
  document.getElementById('search-products').value = '';
  document.getElementById('sort-products').value = 'default';
  document.getElementById('filter-category').value = 'all';
  renderProducts(productsData);
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));
const product = productsData.find(p => p.id === productId);

if (product) {
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-description').textContent = product.details;
  document.getElementById('product-price').textContent = `سعر: ${product.price} جنيه`;

  const mainImg = document.getElementById('main-img');
  const thumbnails = document.querySelector('.thumbnails');
  let currentImageIndex = 0;

  // لينكات صور عشوائية من picsum.photos كمثال
  const placeholderImages = [
    `https://picsum.photos/600/400?random=${product.id}-1`,
    `https://picsum.photos/600/400?random=${product.id}-2`,
    `https://picsum.photos/600/400?random=${product.id}-3`
  ];

  // استخدام الصور الإضافية لو موجودة، ولو لأ، الصورة الرئيسية + الصور العشوائية
  const imagesToUse = product.images.length > 0 ? product.images : [product.img, ...placeholderImages.slice(0, 2)];

  // عرض الصورة الرئيسية الأولى
  mainImg.src = imagesToUse[0];
  mainImg.alt = product.name;

  // عرض الصور المصغرة
  imagesToUse.forEach((img, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = img;
    imgElement.alt = `${product.name} - صورة ${index + 1}`;
    imgElement.classList.toggle('active', index === 0);
    imgElement.addEventListener('click', () => {
      currentImageIndex = index;
      mainImg.src = img;
      thumbnails.querySelectorAll('img').forEach(thumb => thumb.classList.remove('active'));
      imgElement.classList.add('active');
    });
    thumbnails.appendChild(imgElement);
  });

  // أزرار التنقل
  document.querySelector('.gallery-nav.prev').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + imagesToUse.length) % imagesToUse.length;
    mainImg.src = imagesToUse[currentImageIndex];
    thumbnails.querySelectorAll('img').forEach(thumb => thumb.classList.remove('active'));
    thumbnails.children[currentImageIndex].classList.add('active');
  });

  document.querySelector('.gallery-nav.next').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % imagesToUse.length;
    mainImg.src = imagesToUse[currentImageIndex];
    thumbnails.querySelectorAll('img').forEach(thumb => thumb.classList.remove('active'));
    thumbnails.children[currentImageIndex].classList.add('active');
  });

  document.getElementById('add-to-cart-btn').dataset.name = product.name;
  document.getElementById('add-to-cart-btn').dataset.price = product.price;
  document.getElementById('add-to-cart-btn').dataset.id = product.id;

  document.querySelectorAll('#quantity-control .qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const quantityElement = document.getElementById('product-quantity');
      let quantity = parseInt(quantityElement.textContent);
      const isPlus = e.target.classList.contains('plus');
      if (isPlus) {
        quantity++;
      } else {
        quantity = Math.max(1, quantity - 1);
      }
      quantityElement.textContent = quantity;
    });
  });

  document.getElementById('add-to-cart-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const name = e.target.dataset.name;
    const price = Number(e.target.dataset.price);
    const quantity = parseInt(document.getElementById('product-quantity').textContent);
    addToCart(e, name, price, quantity);
  });

  document.getElementById('order-now-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const quantity = parseInt(document.getElementById('product-quantity').textContent);
    Swal.fire({
      title: 'بيانات الطلب',
      html: `
        <input id="swal-full-name" class="swal2-input" placeholder="الاسم الثلاثي" required>
        <input id="swal-address" class="swal2-input" placeholder="العنوان بالتفصيل" required>
        <input id="swal-location-link" class="swal2-input" placeholder="رابط الموقع (اختياري)">
        <input id="swal-phone-number" class="swal2-input" placeholder="رقم الهاتف" pattern="\\d{11}" required>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'إرسال الطلب',
      cancelButtonText: 'إلغاء',
      preConfirm: () => {
        const fullName = document.getElementById('swal-full-name').value.trim();
        const address = document.getElementById('swal-address').value.trim();
        const phoneNumber = document.getElementById('swal-phone-number').value.trim();
        const locationLink = document.getElementById('swal-location-link').value.trim();
        if (!fullName || !address || !phoneNumber || !/^\d{11}$/.test(phoneNumber)) {
          Swal.showValidationMessage('يرجى ملء كل الحقول الإلزامية ورقم الهاتف يجب أن يكون 11 رقمًا.');
          return;
        }
        return { fullName, address, phoneNumber, locationLink };
      }
    }).then(result => {
      if (result.isConfirmed) {
        const { fullName, address, phoneNumber, locationLink } = result.value;
        let message = `طلب منتج:\nالمنتج: ${product.name}\nالسعر: ${product.price} جنيه\nالكمية: ${quantity}\nالاسم: ${fullName}\nالعنوان: ${address}\nرقم الهاتف: ${phoneNumber}\n`;
        if (locationLink) message += `رابط الموقع: ${locationLink}\n`;
        const url = `https://wa.me/201033662370?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
        const orderNumber = orders.length + 1;
        orders.push({ orderNumber, message });
        localStorage.setItem('mahfourOrders', JSON.stringify(orders));
        Swal.fire({
          icon: 'success',
          title: `تم إرسال الطلب رقم ${orderNumber} عبر واتساب`,
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
  });

  // نظام التقييم
  let ratings = JSON.parse(localStorage.getItem('mahfourRatings')) || {};
  if (!ratings[product.id]) {
    ratings[product.id] = [];
  }
  const stars = document.querySelectorAll('#rating-stars .fa-star');
  let currentRating = 0;

  function updateAverageRating() {
    const productRatings = ratings[product.id] || [];
    const average = productRatings.length > 0 ? productRatings.reduce((sum, r) => sum + r, 0) / productRatings.length : 0;
    document.getElementById('average-rating').textContent = `متوسط التقييم: ${average.toFixed(1)} نجوم (${productRatings.length} تقييمات)`;
  }

  stars.forEach(star => {
    star.addEventListener('mouseover', (e) => {
      const rating = parseInt(e.target.dataset.rating);
      highlightStars(rating);
    });
    star.addEventListener('mouseout', () => {
      highlightStars(currentRating);
    });
    star.addEventListener('click', (e) => {
      currentRating = parseInt(e.target.dataset.rating);
      ratings[product.id].push(currentRating);
      localStorage.setItem('mahfourRatings', JSON.stringify(ratings));
      updateAverageRating();
      Swal.fire({
        icon: 'success',
        title: 'شكرًا لتقييمك!',
        showConfirmButton: false,
        timer: 1500
      });
    });
  });

  function highlightStars(rating) {
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });
  }

  updateAverageRating();

} else {
  document.querySelector('.product-details').innerHTML = '<p>المنتج غير موجود</p>';
}