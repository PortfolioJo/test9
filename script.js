document.addEventListener('DOMContentLoaded', function() {
    // تبديل اللغة
    const langToggle = document.getElementById('langToggle');
    const body = document.body;
    
    langToggle.addEventListener('click', function() {
        if (body.classList.contains('english')) {
            // التبديل إلى العربية
            body.classList.remove('english');
            document.querySelectorAll('.lang-ar').forEach(el => el.style.display = 'inline');
            document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
            document.body.dir = 'rtl';
        } else {
            // التبديل إلى الإنجليزية
            body.classList.add('english');
            document.querySelectorAll('.lang-ar').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'inline');
            document.body.dir = 'ltr';
        }
    });
    
    // التنقل السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
        });
    });
    
    // كشف العناصر عند التمرير
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر
    document.querySelectorAll('.product-card, .testimonial-note').forEach(el => {
        observer.observe(el);
    });
    
    // تأثير التمرير للخلفية
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        // إظهار/إخفاء زر التواصل بناءً على الموضع
        const floatingContact = document.querySelector('.floating-contact');
        if (scrolled > 500) {
            floatingContact.style.opacity = '1';
            floatingContact.style.transform = 'translateY(0)';
        } else {
            floatingContact.style.opacity = '0';
            floatingContact.style.transform = 'translateY(20px)';
        }
    });
    
    // نافذة الاستشارة
    const contactBtn = document.querySelector('.contact-btn');
    const consultationModal = document.querySelector('.consultation-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (contactBtn && consultationModal) {
        contactBtn.addEventListener('click', function() {
            consultationModal.classList.add('active');
        });
        
        closeModal.addEventListener('click', function() {
            consultationModal.classList.remove('active');
        });
        
        consultationModal.addEventListener('click', function(e) {
            if (e.target === consultationModal) {
                consultationModal.classList.remove('active');
            }
        });
    }
    
    // نموذج الاستشارة
    const consultationForm = document.querySelector('.consultation-form');
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع البيانات من النموذج
            const skinType = document.querySelector('input[name="skinType"]:checked');
            const concerns = Array.from(document.querySelectorAll('input[name="concerns"]:checked'))
                                .map(cb => cb.value);
            const email = document.getElementById('email').value;
            
            if (!skinType) {
                alert(body.classList.contains('english') ? 
                      'Please select your skin type' : 
                      'الرجاء اختيار نوع بشرتك');
                return;
            }
            
            if (concerns.length === 0) {
                alert(body.classList.contains('english') ? 
                      'Please select at least one skin concern' : 
                      'الرجاء اختيار مخاوف بشرتك على الأقل');
                return;
            }
            
            // محاكاة إرسال الاستشارة
            setTimeout(() => {
                const skinTypeNames = {
                    'dry': body.classList.contains('english') ? 'Dry' : 'الجافة',
                    'oily': body.classList.contains('english') ? 'Oily' : 'الدهنية',
                    'combination': body.classList.contains('english') ? 'Combination' : 'المختلطة',
                    'normal': body.classList.contains('english') ? 'Normal' : 'العادية',
                    'sensitive': body.classList.contains('english') ? 'Sensitive' : 'الحساسة'
                };
                
                const concernNames = {
                    'acne': body.classList.contains('english') ? 'Acne' : 'حب الشباب',
                    'darkSpots': body.classList.contains('english') ? 'Dark Spots' : 'البقع الداكنة',
                    'wrinkles': body.classList.contains('english') ? 'Wrinkles' : 'التجاعيد',
                    'dryness': body.classList.contains('english') ? 'Dryness' : 'الجفاف',
                    'redness': body.classList.contains('english') ? 'Redness' : 'الاحمرار'
                };
                
                const recommendations = {
                    'dry': body.classList.contains('english') ? 
                           'We recommend our Hyaluronic Day Moisturizer and overnight hydration mask.' : 
                           'نوصي بمرطب الهيالورونيك اليومي وقناع الترطيب الليلي.',
                    'oily': body.classList.contains('english') ? 
                           'We recommend our oil-free serum and mattifying moisturizer.' : 
                           'نوصي بمصل خالٍ من الزيوت ومرطب مطفئ للبريق.',
                    'combination': body.classList.contains('english') ? 
                                 'We recommend our balancing toner and lightweight moisturizer.' : 
                                 'نوصي بتونر الموازنة ومرطب خفيف الوزن.',
                    'normal': body.classList.contains('english') ? 
                             'We recommend our Vitamin C serum for maintenance and glow.' : 
                             'نوصي بمصل فيتامين سي للعناية والإشراق.',
                    'sensitive': body.classList.contains('english') ? 
                               'We recommend our fragrance-free, calming serum and moisturizer.' : 
                               'نوصي بمصل مهدئ خالٍ من العطور ومرطب لطيف.'
                };
                
                const message = body.classList.contains('english') ?
                    `Thank you! Based on your ${skinTypeNames[skinType.value]} skin type and concerns (${concerns.map(c => concernNames[c]).join(', ')}), ${recommendations[skinType.value]} We've sent the full routine to ${email}.` :
                    `شكراً لك! بناءً على بشرتك ${skinTypeNames[skinType.value]} ومخاوفك (${concerns.map(c => concernNames[c]).join('، ')}). ${recommendations[skinType.value]} لقد أرسلنا الروتين الكامل إلى ${email}.`;
                
                alert(message);
                
                consultationModal.classList.remove('active');
                consultationForm.reset();
            }, 1000);
        });
    }
    
    // نموذج النشرة البريدية
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                alert(body.classList.contains('english') ? 
                      'Thank you for subscribing! You will receive our skincare tips soon.' : 
                      'شكراً للاشتراك! ستصلك نصائحنا للعناية بالبشرة قريباً.');
                emailInput.value = '';
            }
        });
    }
    
    // تأثيرات إضافية عند التمرير
    const navItems = document.querySelectorAll('.nav-item');
    
    window.addEventListener('scroll', function() {
        const fromTop = window.scrollY + 100;
        
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href && href.startsWith('#')) {
                const section = document.querySelector(href);
                if (section) {
                    if (
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                }
            }
        });
    });
    
    // زر CTA في الهيرو
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const productsSection = document.querySelector('#products');
            window.scrollTo({
                top: productsSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    }
    
    // تأثيرات إضافية للمنتجات
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const productCard = this.closest('.product-card');
            const productTitle = productCard.querySelector('.product-title .lang-ar').textContent;
            
            // تأثير اهتزاز
            productCard.style.animation = 'none';
            productCard.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                productCard.style.animation = 'float 6s ease-in-out infinite';
                productCard.style.transform = 'scale(1)';
                
                if (body.classList.contains('english')) {
                    alert(`Added "${productCard.querySelector('.product-title .lang-en').textContent}" to cart!`);
                } else {
                    alert(`تمت إضافة "${productTitle}" إلى السلة!`);
                }
            }, 300);
        });
    });
    
    // تحميل الصور بسلاسة
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // تأثيرات الدخول للمكونات والخطوات
    const ingredientCards = document.querySelectorAll('.ingredient-card');
    const steps = document.querySelectorAll('.step');
    
    const ingredientObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });
    
    ingredientCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        ingredientObserver.observe(card);
    });
    
    steps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        ingredientObserver.observe(step);
    });
    
    // تأثيرات النقر على الروابط
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('click', function(e) {
            // تأثير ردة فعل بسيط
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // تهيئة العناصر المرئية
    window.dispatchEvent(new Event('scroll'));
});