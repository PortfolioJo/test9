// بيانات المنتجات
const products = [
    {
        id: 1,
        name: "سيروم فيتامين سي النقي",
        nameEn: "Pure Vitamin C Serum",
        description: "يضيء البشرة ويقلل من علامات الشيخوخة مع مضادات الأكسدة القوية",
        descriptionEn: "Brightens skin and reduces signs of aging with powerful antioxidants",
        price: 25.99,
        originalPrice: 32.99,
        category: "serum",
        image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "sale",
        features: [
            { icon: "fas fa-clock", text: "نتائج في 4 أسابيع", textEn: "Results in 4 weeks" },
            { icon: "fas fa-leaf", text: "98% طبيعي", textEn: "98% Natural" },
            { icon: "fas fa-tint", text: "للجميع أنواع البشرة", textEn: "For All Skin Types" }
        ]
    },
    {
        id: 2,
        name: "مرطب النهار بالهيالورونيك",
        nameEn: "Hyaluronic Day Moisturizer",
        description: "يرطب بعمق مع حماية SPF 30، مثالي للاستخدام اليومي",
        descriptionEn: "Deep hydration with SPF 30 protection, perfect for daily use",
        price: 19.99,
        category: "moisturizer",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "popular",
        features: [
            { icon: "fas fa-sun", text: "حماية من الشمس", textEn: "Sun Protection" },
            { icon: "fas fa-tint", text: "ترطيب 72 ساعة", textEn: "72h Hydration" }
        ]
    },
    {
        id: 3,
        name: "قناع الليل بالتريتينول",
        nameEn: "Retinol Overnight Mask",
        description: "تجديد خلوي أثناء النوم، يحسن نسيج البشرة ويقلل التجاعيد",
        descriptionEn: "Cellular renewal during sleep, improves skin texture and reduces wrinkles",
        price: 32.99,
        category: "mask",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "new",
        features: [
            { icon: "fas fa-moon", text: "علاج ليلي", textEn: "Overnight Treatment" },
            { icon: "fas fa-seedling", text: "نباتي", textEn: "Vegan" }
        ]
    },
    {
        id: 4,
        name: "منظف الشاي الأخضر",
        nameEn: "Green Tea Cleanser",
        description: "ينظف بعمق ويهدئ البشرة، مثالي للبشرة الدهنية والمختلطة",
        descriptionEn: "Deep cleanses and soothes skin, perfect for oily and combination skin",
        price: 15.99,
        originalPrice: 18.99,
        category: "cleanser",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "sale",
        features: [
            { icon: "fas fa-leaf", text: "شاي أخضر عضوي", textEn: "Organic Green Tea" },
            { icon: "fas fa-wind", text: "خالٍ من الزيوت", textEn: "Oil-Free" }
        ]
    },
    {
        id: 5,
        name: "تونر مهدئ باللافندر",
        nameEn: "Lavender Calming Toner",
        description: "يوازن درجة حموضة البشرة ويهدئ الاحمرار والتهيج",
        descriptionEn: "Balances skin pH and soothes redness and irritation",
        price: 18.50,
        category: "serum",
        image: "https://images.unsplash.com/photo-1594035910387-f1d6b8ec1ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        features: [
            { icon: "fas fa-spa", text: "مهدئ طبيعي", textEn: "Natural Calming" },
            { icon: "fas fa-allergies", text: "للبشرة الحساسة", textEn: "For Sensitive Skin" }
        ]
    },
    {
        id: 6,
        name: "كريم العين بالكافيين",
        nameEn: "Caffeine Eye Cream",
        description: "يقلل الهالات السوداء وانتفاخات العين، ينشط المنطقة الحساسة",
        descriptionEn: "Reduces dark circles and puffiness, energizes the sensitive area",
        price: 22.99,
        category: "moisturizer",
        image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "popular",
        features: [
            { icon: "fas fa-coffee", text: "كافيين نقي", textEn: "Pure Caffeine" },
            { icon: "fas fa-temperature-low", text: "تأثير تبريد", textEn: "Cooling Effect" }
        ]
    },
    {
        id: 7,
        name: "مصل النياسيناميد",
        nameEn: "Niacinamide Serum",
        description: "يقلل من إفراز الزيوت وينظم المسام، يحسن نسيج البشرة",
        descriptionEn: "Reduces oil production and regulates pores, improves skin texture",
        price: 28.50,
        category: "serum",
        image: "https://images.unsplash.com/photo-1631217868264-e5b90bb967fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        features: [
            { icon: "fas fa-oil-can", text: "ينظم الإفرازات الدهنية", textEn: "Regulates Oil Production" },
            { icon: "fas fa-expand", text: "يضيق المسام", textEn: "Minimizes Pores" }
        ]
    },
    {
        id: 8,
        name: "قناع الطين النقي",
        nameEn: "Pure Clay Mask",
        description: "يمتص الشوائب والزيوت الزائدة، ينظف المسام بعمق",
        descriptionEn: "Absorbs impurities and excess oils, deeply cleanses pores",
        price: 17.99,
        originalPrice: 21.99,
        category: "mask",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "sale",
        features: [
            { icon: "fas fa-mountain", text: "طين بنتونيت", textEn: "Bentonite Clay" },
            { icon: "fas fa-filter", text: "تنقية عميقة", textEn: "Deep Purification" }
        ]
    }
];

// سلة التسوق
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentLanguage = 'ar';

document.addEventListener('DOMContentLoaded', function() {
    // تهيئة الموقع
    initializeSite();
    
    // تحميل المنتجات
    loadProducts();
    
    // تهيئة السلة
    updateCart();
    
    // تهيئة اختبار البشرة
    initializeSkinTest();
    
    // تهيئة شريط التمرير
    initializeSlider();
    
    // تهيئة الأسئلة الشائعة
    initializeFAQ();
    
    // تهيئة نماذج الطلب والاستشارة
    initializeForms();
});

// تهيئة الموقع
function initializeSite() {
    // تبديل اللغة
    const langToggle = document.getElementById('langToggle');
    langToggle.addEventListener('click', toggleLanguage);
    
    // التنقل السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });
    
    // زر التسوق الآن
    const shopNowBtn = document.getElementById('shopNowBtn');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', () => {
            document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // زر فحص البشرة
    const skinTestBtn = document.getElementById('skinTestBtn');
    if (skinTestBtn) {
        skinTestBtn.addEventListener('click', () => {
            document.querySelector('#skin-test').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // تأثيرات التمرير
    window.addEventListener('scroll', handleScrollEffects);
}

// تبديل اللغة
function toggleLanguage() {
    const body = document.body;
    currentLanguage = body.classList.contains('english') ? 'ar' : 'en';
    
    if (body.classList.contains('english')) {
        // التبديل إلى العربية
        body.classList.remove('english');
        document.body.dir = 'rtl';
        document.querySelectorAll('.lang-ar').forEach(el => el.style.display = 'inline');
        document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
    } else {
        // التبديل إلى الإنجليزية
        body.classList.add('english');
        document.body.dir = 'ltr';
        document.querySelectorAll('.lang-ar').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'inline');
    }
    
    // تحديث المنتجات والسلة
    loadProducts();
    updateCartDisplay();
}

// تحميل المنتجات
function loadProducts(filter = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // تهيئة أزرار الفلترة
    initializeFilterButtons();
}

// إنشاء بطاقة منتج
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = product.id;
    
    const badge = product.badge ? 
        `<div class="product-badge ${product.badge}">
            ${product.badge === 'sale' ? (currentLanguage === 'ar' ? 'تخفيض' : 'Sale') : 
              product.badge === 'new' ? (currentLanguage === 'ar' ? 'جديد' : 'New') : 
              (currentLanguage === 'ar' ? 'الأكثر مبيعاً' : 'Popular')}
        </div>` : '';
    
    const originalPrice = product.originalPrice ? 
        `<span class="original-price">${product.originalPrice.toFixed(2)} د.أ</span>` : '';
    
    const features = product.features ? product.features.map(feature => `
        <div class="feature">
            <i class="${feature.icon}"></i>
            <span class="lang-ar">${feature.text}</span>
            <span class="lang-en" style="display:none">${feature.textEn}</span>
        </div>
    `).join('') : '';
    
    card.innerHTML = `
        ${badge}
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <span class="product-category lang-ar">${getCategoryName(product.category, 'ar')}</span>
            <span class="product-category lang-en" style="display:none">${getCategoryName(product.category, 'en')}</span>
            <h3 class="product-title">
                <span class="lang-ar">${product.name}</span>
                <span class="lang-en" style="display:none">${product.nameEn}</span>
            </h3>
            <p class="product-description">
                <span class="lang-ar">${product.description}</span>
                <span class="lang-en" style="display:none">${product.descriptionEn}</span>
            </p>
            ${features ? `<div class="product-features">${features}</div>` : ''}
            <div class="product-price">
                <div>
                    ${originalPrice}
                    <span class="price">${product.price.toFixed(2)} د.أ</span>
                </div>
            </div>
            <div class="product-actions">
                <button class="add-to-cart-btn" data-id="${product.id}">
                    <i class="fas fa-shopping-bag"></i>
                    <span class="lang-ar">أضف إلى السلة</span>
                    <span class="lang-en" style="display:none">Add to Cart</span>
                </button>
                <button class="quick-view-btn">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        </div>
    `;
    
    // إضافة حدث النقر على زر إضافة إلى السلة
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => addToCart(product.id));
    
    return card;
}

// الحصول على اسم الفئة
function getCategoryName(category, lang) {
    const categories = {
        serum: { ar: 'السيروم', en: 'Serum' },
        moisturizer: { ar: 'المرطب', en: 'Moisturizer' },
        cleanser: { ar: 'المنظف', en: 'Cleanser' },
        mask: { ar: 'القناع', en: 'Mask' }
    };
    return categories[category] ? categories[category][lang] : category;
}

// تهيئة أزرار الفلترة
function initializeFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // إزالة النشط من جميع الأزرار
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            // إضافة النشط للزر المضغوط
            this.classList.add('active');
            // تصفية المنتجات
            const filter = this.dataset.filter;
            loadProducts(filter);
        });
    });
}

// إضافة إلى السلة
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // حفظ السلة في localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // تحديث السلة
    updateCart();
    
    // تأثير اهتزاز للسلة
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.classList.add('pulse');
    setTimeout(() => cartBtn.classList.remove('pulse'), 600);
    
    // رسالة تأكيد
    showMessage(
        currentLanguage === 'ar' 
            ? `تمت إضافة ${product.name} إلى السلة` 
            : `${product.nameEn} added to cart`
    );
}

// تحديث السلة
function updateCart() {
    // تحديث العداد
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // تحديث عرض السلة إذا كانت مفتوحة
    if (document.querySelector('.cart-modal').style.display === 'flex') {
        updateCartDisplay();
    }
}

// تحديث عرض السلة
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const subtotalAmount = document.getElementById('subtotalAmount');
    const totalAmount = document.getElementById('totalAmount');
    
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p class="lang-ar">سلة التسوق فارغة</p>
                <p class="lang-en" style="display:none">Your cart is empty</p>
            </div>
        `;
        subtotalAmount.textContent = '0.00 د.أ';
        totalAmount.textContent = '3.00 د.أ';
        return;
    }
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h4 class="cart-item-name">
                    <span class="lang-ar">${item.name}</span>
                    <span class="lang-en" style="display:none">${item.nameEn}</span>
                </h4>
                <p class="cart-item-price">${item.price.toFixed(2)} د.أ</p>
                <div class="cart-item-controls">
                    <button class="quantity-btn minus-btn" data-id="${item.id}">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn plus-btn" data-id="${item.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="remove-item-btn" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // إضافة أحداث التحكم بالكمية
    document.querySelectorAll('.minus-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            updateQuantity(this.dataset.id, -1);
        });
    });
    
    document.querySelectorAll('.plus-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            updateQuantity(this.dataset.id, 1);
        });
    });
    
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            removeFromCart(this.dataset.id);
        });
    });
    
    const deliveryFee = 3.00;
    const total = subtotal + deliveryFee;
    
    subtotalAmount.textContent = `${subtotal.toFixed(2)} د.أ`;
    totalAmount.textContent = `${total.toFixed(2)} د.أ`;
}

// تحديث الكمية
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === parseInt(productId));
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== parseInt(productId));
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// إزالة من السلة
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== parseInt(productId));
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    
    // رسالة تأكيد
    showMessage(
        currentLanguage === 'ar' 
            ? 'تمت إزالة المنتج من السلة' 
            : 'Product removed from cart'
    );
}

// تهيئة اختبار البشرة
function initializeSkinTest() {
    let currentStep = 1;
    const testData = {
        skinType: '',
        sensitivity: '',
        concerns: []
    };
    
    // أزرار التحكم
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');
    const restartBtn = document.getElementById('restartTest');
    
    if (prevBtn) prevBtn.addEventListener('click', () => changeStep(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeStep(1));
    if (finishBtn) finishBtn.addEventListener('click', finishTest);
    if (restartBtn) restartBtn.addEventListener('click', restartTest);
    
    // أحداث خيارات الاختبار
    document.querySelectorAll('.test-option').forEach(option => {
        option.addEventListener('click', function() {
            const value = this.dataset.value;
            const stepId = this.closest('.test-step').id;
            
            switch(stepId) {
                case 'step1':
                    testData.skinType = value;
                    break;
                case 'step2':
                    testData.sensitivity = value;
                    break;
                case 'step3':
                    if (testData.concerns.includes(value)) {
                        testData.concerns = testData.concerns.filter(c => c !== value);
                        this.classList.remove('selected');
                    } else {
                        testData.concerns.push(value);
                        this.classList.add('selected');
                    }
                    return; // لا نغير الخطوة هنا
            }
            
            // الانتقال للخطوة التالية بعد 500ms
            setTimeout(() => changeStep(1), 500);
        });
    });
    
    function changeStep(direction) {
        const newStep = currentStep + direction;
        
        if (newStep < 1 || newStep > 3) return;
        
        // إخفاء الخطوة الحالية
        document.getElementById(`step${currentStep}`).classList.remove('active');
        
        // تحديث حالة الأزرار
        prevBtn.disabled = newStep === 1;
        nextBtn.style.display = newStep === 3 ? 'none' : 'flex';
        finishBtn.style.display = newStep === 3 ? 'flex' : 'none';
        
        currentStep = newStep;
        
        // إظهار الخطوة الجديدة
        document.getElementById(`step${currentStep}`).classList.add('active');
    }
    
    function finishTest() {
        // إخفاء جميع الخطوات
        document.querySelectorAll('.test-step').forEach(step => step.classList.remove('active'));
        
        // إظهار النتيجة
        const resultCard = document.getElementById('resultCard');
        const recommendedProducts = document.getElementById('recommendedProducts');
        
        // تحديد نوع البشرة بناءً على النتائج
        let skinType = testData.skinType;
        if (testData.sensitivity === 'sensitive') {
            skinType = 'sensitive';
        }
        
        const skinTypes = {
            oily: {
                ar: 'بشرة دهنية',
                en: 'Oily Skin',
                description: {
                    ar: 'بشرتك تنتج زيوتاً أكثر من المعتاد. تحتاج إلى منتجات خفيفة وخالية من الزيوت.',
                    en: 'Your skin produces more oil than usual. Needs lightweight, oil-free products.'
                }
            },
            dry: {
                ar: 'بشرة جافة',
                en: 'Dry Skin',
                description: {
                    ar: 'بشرتك تحتاج إلى ترطيب إضافي. استخدمي منتجات غنية بالمرطبات.',
                    en: 'Your skin needs extra hydration. Use products rich in moisturizers.'
                }
            },
            combination: {
                ar: 'بشرة مختلطة',
                en: 'Combination Skin',
                description: {
                    ar: 'لديك مناطق دهنية ومناطق جافة. تحتاجين إلى منتجات متوازنة.',
                    en: 'You have both oily and dry areas. Need balanced products.'
                }
            },
            normal: {
                ar: 'بشرة عادية',
                en: 'Normal Skin',
                description: {
                    ar: 'بشرتك متوازنة! استمري باستخدام منتجات الحفاظ على الصحة.',
                    en: 'Your skin is balanced! Continue using maintenance products.'
                }
            },
            sensitive: {
                ar: 'بشرة حساسة',
                en: 'Sensitive Skin',
                description: {
                    ar: 'بشرتك تتهيج بسهولة. استخدمي منتجات لطيفة وخالية من العطور.',
                    en: 'Your skin irritates easily. Use gentle, fragrance-free products.'
                }
            }
        };
        
        const result = skinTypes[skinType] || skinTypes.normal;
        
        resultCard.innerHTML = `
            <h3 class="result-type">${currentLanguage === 'ar' ? result.ar : result.en}</h3>
            <p class="result-description">
                ${currentLanguage === 'ar' ? result.description.ar : result.description.en}
            </p>
            <div class="result-routine">
                <h4 class="lang-ar">روتين مقترح:</h4>
                <h4 class="lang-en" style="display:none">Suggested Routine:</h4>
                <p class="lang-ar">• منظف لطيف • تونر موازن • مصل مناسب • مرطب خفيف</p>
                <p class="lang-en" style="display:none">• Gentle Cleanser • Balancing Toner • Suitable Serum • Light Moisturizer</p>
            </div>
        `;
        
        // اقتراح المنتجات المناسبة
        let recommended = [];
        switch(skinType) {
            case 'oily':
                recommended = products.filter(p => p.id === 4 || p.id === 7);
                break;
            case 'dry':
                recommended = products.filter(p => p.id === 2 || p.id === 5);
                break;
            case 'combination':
                recommended = products.filter(p => p.id === 1 || p.id === 4);
                break;
            case 'sensitive':
                recommended = products.filter(p => p.id === 5 || p.id === 2);
                break;
            default:
                recommended = products.filter(p => p.id === 1 || p.id === 3);
        }
        
        recommendedProducts.innerHTML = recommended.map(product => `
            <div class="recommended-product" onclick="addToCart(${product.id})">
                <img src="${product.image}" alt="${product.name}">
                <div class="recommended-product-info">
                    <h4>${currentLanguage === 'ar' ? product.name : product.nameEn}</h4>
                    <p>${product.price.toFixed(2)} د.أ</p>
                </div>
            </div>
        `).join('');
        
        document.getElementById('testResult').style.display = 'block';
    }
    
    function restartTest() {
        currentStep = 1;
        testData.skinType = '';
        testData.sensitivity = '';
        testData.concerns = [];
        
        // إعادة تعيين الخيارات
        document.querySelectorAll('.test-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // إعادة إظهار الخطوة الأولى
        document.getElementById('testResult').style.display = 'none';
        document.getElementById('step1').classList.add('active');
        
        // إعادة تعيين الأزرار
        prevBtn.disabled = true;
        nextBtn.style.display = 'flex';
        finishBtn.style.display = 'none';
    }
}

// تهيئة شريط التمرير
function initializeSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    function showSlide(n) {
        // إخفاء جميع الشرائح
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // حساب المؤشر الجديد
        currentSlide = (n + slides.length) % slides.length;
        
        // إظهار الشريحة الجديدة
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // أحداث أزرار التمرير
    document.querySelector('.prev-slide')?.addEventListener('click', () => showSlide(currentSlide - 1));
    document.querySelector('.next-slide')?.addEventListener('click', () => showSlide(currentSlide + 1));
    
    // أحداث النقاط
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // التمرير التلقائي
    setInterval(() => showSlide(currentSlide + 1), 5000);
}

// تهيئة الأسئلة الشائعة
function initializeFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // إغلاق جميع الإجابات
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
                ans.previousElementSibling.classList.remove('active');
            });
            
            // فتح/إغلاق الإجابة الحالية
            if (!isActive) {
                answer.classList.add('active');
                this.classList.add('active');
            }
        });
    });
}

// تهيئة النماذج
function initializeForms() {
    // فتح/إغلاق السلة
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    const continueShopping = document.getElementById('continueShopping');
    
    cartBtn.addEventListener('click', () => openModal(cartModal));
    closeCart.addEventListener('click', () => closeModal(cartModal));
    continueShopping.addEventListener('click', () => closeModal(cartModal));
    
    // فتح/إغلاق الطلب
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const closeCheckout = document.getElementById('closeCheckout');
    
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showMessage(
                currentLanguage === 'ar' 
                    ? 'السلة فارغة، أضف منتجات أولاً' 
                    : 'Cart is empty, add products first'
            );
            return;
        }
        closeModal(cartModal);
        openModal(checkoutModal);
        updateOrderSummary();
    });
    
    closeCheckout.addEventListener('click', () => closeModal(checkoutModal));
    
    // فتح/إغلاق الاستشارة
    const consultationBtn = document.getElementById('consultationBtn');
    const consultationModal = document.getElementById('consultationModal');
    const closeConsultation = document.getElementById('closeConsultation');
    
    consultationBtn.addEventListener('click', () => openModal(consultationModal));
    closeConsultation.addEventListener('click', () => closeModal(consultationModal));
    
    // نموذج الطلب
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', submitOrder);
    }
    
    // نموذج الاستشارة
    const consultationForm = document.getElementById('consultationForm');
    if (consultationForm) {
        consultationForm.addEventListener('submit', submitConsultation);
    }
    
    // نموذج النشرة الإخبارية
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', subscribeNewsletter);
    }
}

// تحديث ملخص الطلب
function updateOrderSummary() {
    const orderItems = document.getElementById('orderItems');
    const orderTotalAmount = document.getElementById('orderTotalAmount');
    
    if (!orderItems) return;
    
    orderItems.innerHTML = '';
    let total = 3.00; // رسوم التوصيل
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <span>${currentLanguage === 'ar' ? item.name : item.nameEn} × ${item.quantity}</span>
            <span>${itemTotal.toFixed(2)} د.أ</span>
        `;
        orderItems.appendChild(orderItem);
    });
    
    // إضافة رسوم التوصيل
    const deliveryItem = document.createElement('div');
    deliveryItem.className = 'order-item';
    deliveryItem.innerHTML = `
        <span class="lang-ar">رسوم التوصيل</span>
        <span class="lang-en" style="display:none">Delivery Fee</span>
        <span>3.00 د.أ</span>
    `;
    orderItems.appendChild(deliveryItem);
    
    orderTotalAmount.textContent = `${total.toFixed(2)} د.أ`;
}

// إرسال الطلب
function submitOrder(e) {
    e.preventDefault();
    
    // جمع بيانات العميل
    const name = currentLanguage === 'ar' 
        ? document.getElementById('customerName').value
        : document.getElementById('customerNameEn').value;
    
    const phone = currentLanguage === 'ar'
        ? document.getElementById('customerPhone').value
        : document.getElementById('customerPhoneEn').value;
    
    const email = currentLanguage === 'ar'
        ? document.getElementById('customerEmail').value
        : document.getElementById('customerEmailEn').value;
    
    const city = document.getElementById('deliveryCity').value;
    const address = currentLanguage === 'ar'
        ? document.getElementById('deliveryAddress').value
        : document.getElementById('deliveryAddressEn').value;
    
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    const notes = currentLanguage === 'ar'
        ? document.getElementById('orderNotes').value
        : document.getElementById('orderNotesEn').value;
    
    // إنشاء نص الطلب
    let orderText = currentLanguage === 'ar' 
        ? `🛒 طلب جديد من موقع جمال طبيعي\n\n`
        : `🛒 New Order from Natural Beauty Website\n\n`;
    
    orderText += currentLanguage === 'ar' 
        ? `👤 العميل: ${name}\n📞 الهاتف: ${phone}\n📧 البريد: ${email}\n\n`
        : `👤 Customer: ${name}\n📞 Phone: ${phone}\n📧 Email: ${email}\n\n`;
    
    orderText += currentLanguage === 'ar'
        ? `📍 العنوان: ${getCityName(city, 'ar')} - ${address}\n💳 طريقة الدفع: ${getPaymentMethod(paymentMethod, 'ar')}\n`
        : `📍 Address: ${getCityName(city, 'en')} - ${address}\n💳 Payment: ${getPaymentMethod(paymentMethod, 'en')}\n`;
    
    if (notes) {
        orderText += currentLanguage === 'ar'
            ? `📝 الملاحظات: ${notes}\n\n`
            : `📝 Notes: ${notes}\n\n`;
    }
    
    orderText += currentLanguage === 'ar' ? `🛍️ المنتجات:\n` : `🛍️ Products:\n`;
    
    let total = 3.00;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        orderText += `${index + 1}. ${currentLanguage === 'ar' ? item.name : item.nameEn} - ${item.quantity} × ${item.price.toFixed(2)} د.أ = ${itemTotal.toFixed(2)} د.أ\n`;
    });
    
    orderText += currentLanguage === 'ar'
        ? `🚚 رسوم التوصيل: 3.00 د.أ\n💰 الإجمالي: ${total.toFixed(2)} د.أ`
        : `🚚 Delivery: 3.00 JOD\n💰 Total: ${total.toFixed(2)} JOD`;
    
    // إعداد رابط الواتساب
    const whatsappNumber = '962785094075';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderText)}`;
    
    // إعداد رابط البريد الإلكتروني
    const emailSubject = currentLanguage === 'ar' 
        ? 'طلب جديد من موقع جمال طبيعي' 
        : 'New Order from Natural Beauty';
    
    const emailBody = orderText.replace(/\n/g, '%0D%0A');
    const emailUrl = `mailto:info@naturalbeauty.jo?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;
    
    // إرسال الطلب
    window.open(whatsappUrl, '_blank');
    
    // إرسال نسخة بالبريد الإلكتروني
    setTimeout(() => {
        window.open(emailUrl, '_blank');
    }, 1000);
    
    // إظهار رسالة نجاح
    showMessage(
        currentLanguage === 'ar'
            ? 'تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً.'
            : 'Your order has been sent successfully! We will contact you soon.'
    );
    
    // إغلاق النافذة وتفريغ السلة
    setTimeout(() => {
        closeModal(document.getElementById('checkoutModal'));
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }, 2000);
}

// إرسال الاستشارة
function submitConsultation(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const consultationText = currentLanguage === 'ar'
        ? `📋 طلب استشارة بشرة\n\n👤 الاسم: ${formData.get('name')}\n📞 الهاتف: ${formData.get('phone')}\n🤔 التحدي: ${formData.get('challenge')}\n💼 المنتجات الحالية: ${formData.get('currentProducts') || 'لم يحدد'}`
        : `📋 Skin Consultation Request\n\n👤 Name: ${formData.get('name')}\n📞 Phone: ${formData.get('phone')}\n🤔 Challenge: ${formData.get('challenge')}\n💼 Current Products: ${formData.get('currentProducts') || 'Not specified'}`;
    
    const whatsappNumber = '962785094075';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(consultationText)}`;
    
    window.open(whatsappUrl, '_blank');
    
    showMessage(
        currentLanguage === 'ar'
            ? 'تم إرسال طلب الاستشارة بنجاح!'
            : 'Consultation request sent successfully!'
    );
    
    setTimeout(() => {
        closeModal(document.getElementById('consultationModal'));
        e.target.reset();
    }, 1500);
}

// الاشتراك في النشرة الإخبارية
function subscribeNewsletter(e) {
    e.preventDefault();
    
    showMessage(
        currentLanguage === 'ar'
            ? 'شكراً للاشتراك! ستصل إليك أحدث النصائح والعروض.'
            : 'Thank you for subscribing! You will receive the latest tips and offers.'
    );
    
    e.target.reset();
}

// وظائف مساعدة
function openModal(modal) {
    document.body.classList.add('modal-open');
    modal.style.display = 'flex';
}

function closeModal(modal) {
    document.body.classList.remove('modal-open');
    modal.style.display = 'none';
}

function getCityName(cityCode, lang) {
    const cities = {
        amman: { ar: 'عمان', en: 'Amman' },
        zarqa: { ar: 'الزرقاء', en: 'Zarqa' },
        irbid: { ar: 'إربد', en: 'Irbid' },
        aqaba: { ar: 'العقبة', en: 'Aqaba' },
        madaba: { ar: 'مادبا', en: 'Madaba' },
        other: { ar: 'مدينة أخرى', en: 'Other City' }
    };
    return cities[cityCode] ? cities[cityCode][lang] : cityCode;
}

function getPaymentMethod(method, lang) {
    const methods = {
        cash: { ar: 'الدفع عند الاستلام', en: 'Cash on Delivery' },
        bank: { ar: 'تحويل بنكي', en: 'Bank Transfer' }
    };
    return methods[method] ? methods[method][lang] : method;
}

function showMessage(text) {
    // إنشاء عنصر الرسالة
    const message = document.createElement('div');
    message.className = 'notification-message';
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-green);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: var(--shadow-hard);
        z-index: 4000;
        animation: slideInRight 0.3s ease;
    `;
    
    body.english && (message.style.right = 'auto');
    body.english && (message.style.left = '20px');
    body.english && (message.style.animation = 'slideInLeft 0.3s ease');
    
    message.textContent = text;
    document.body.appendChild(message);
    
    // إزالة الرسالة بعد 3 ثوانٍ
    setTimeout(() => {
        message.style.animation = body.english ? 'slideOutLeft 0.3s ease' : 'slideOutRight 0.3s ease';
        setTimeout(() => message.remove(), 300);
    }, 3000);
}

// تأثيرات التمرير
function handleScrollEffects() {
    const scrollPosition = window.scrollY;
    
    // تأثير الشفافية للقائمة الجانبية
    const sideNav = document.querySelector('.side-nav');
    if (sideNav) {
        if (scrollPosition > 100) {
            sideNav.style.opacity = '0.7';
            sideNav.style.transform = 'translateY(-50%) scale(0.95)';
        } else {
            sideNav.style.opacity = '1';
            sideNav.style.transform = 'translateY(-50%) scale(1)';
        }
    }
    
    // إضافة تأثيرات للعناصر عند ظهورها
    document.querySelectorAll('.product-card, .testimonial-content, .faq-item').forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// التنقل السلس
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// تهيئة التأثيرات البصرية
document.querySelectorAll('.product-card, .testimonial-content, .faq-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// إضافة أنماط CSS للرسائل المتحركة
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes slideInLeft {
        from { transform: translateX(-100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutLeft {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(-100%); opacity: 0; }
    }
    
    .empty-cart {
        text-align: center;
        padding: 40px 20px;
        color: var(--color-light-brown);
    }
    
    .empty-cart i {
        font-size: 3rem;
        margin-bottom: 20px;
        color: var(--color-beige);
    }
    
    .selected {
        border-color: var(--color-green) !important;
        background: var(--color-mint) !important;
    }
`;
document.head.appendChild(style);