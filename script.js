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
    
    // التحكم في كتاب القصص
    const prevBtn = document.querySelector('.prev-page');
    const nextBtn = document.querySelector('.next-page');
    const storyBook = document.querySelector('.story-book');
    let currentPage = 0;
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            currentPage = Math.max(0, currentPage - 1);
            updateStoryBook();
        });
        
        nextBtn.addEventListener('click', function() {
            currentPage = Math.min(2, currentPage + 1);
            updateStoryBook();
        });
    }
    
    function updateStoryBook() {
        // تغيير محتوى الصفحات بناءً على currentPage
        const pages = document.querySelectorAll('.page');
        
        // هذه دالة تجريبية - يمكنك توسيعها لإضافة المزيد من الصفحات
        if (currentPage === 0) {
            pages[0].querySelector('.story-title .lang-ar').textContent = 'أمينة والحياكة';
            pages[0].querySelector('.story-title .lang-en').textContent = 'Amina and Weaving';
            pages[0].querySelector('.story-text .lang-ar').textContent = 'تعلمت أمينة (٦٢ سنة) الحياكة من جدتها. كل قطعة تحكي قصة من قريتها في عسير.';
            pages[0].querySelector('.story-text .lang-en').textContent = 'Amina (62 years old) learned weaving from her grandmother. Each piece tells a story from her village in Asir.';
            
            pages[1].querySelector('.story-title .lang-ar').textContent = 'محمد والفخار';
            pages[1].querySelector('.story-title .lang-en').textContent = 'Mohammed and Pottery';
            pages[1].querySelector('.story-text .lang-ar').textContent = 'أمضى محمد ٤٠ سنة في صناعة الفخار. يقول: "الطين مثل الإنسان، يحتاج للصبر والرعاية".';
            pages[1].querySelector('.story-text .lang-en').textContent = 'Mohammed spent 40 years making pottery. He says: "Clay is like a human, it needs patience and care."';
        } else if (currentPage === 1) {
            pages[0].querySelector('.story-title .lang-ar').textContent = 'فاطمة والتطريز';
            pages[0].querySelector('.story-title .lang-en').textContent = 'Fatima and Embroidery';
            pages[0].querySelector('.story-text .lang-ar').textContent = 'تطريز فاطمة مستوحى من طبيعة جبال الحجاز. تستخدم خيوطًا مصنوعة يدويًا من ألوان طبيعية.';
            pages[0].querySelector('.story-text .lang-en').textContent = "Fatima's embroidery is inspired by the nature of the Hijaz mountains. She uses handcrafted threads from natural colors.";
            
            pages[1].querySelector('.story-title .lang-ar').textContent = 'خالد والنحاس';
            pages[1].querySelector('.story-title .lang-en').textContent = 'Khalid and Copper';
            pages[1].querySelector('.story-text .lang-ar').textContent = 'يصنع خالد تحفًا نحاسية باستخدام تقنيات قديمة. كل قطعة تأخذ ٣ أيام من العمل الدقيق.';
            pages[1].querySelector('.story-text .lang-en').textContent = 'Khalid makes copper artifacts using ancient techniques. Each piece takes 3 days of meticulous work.';
        } else {
            pages[0].querySelector('.story-title .lang-ar').textContent = 'علي والخشب';
            pages[0].querySelector('.story-title .lang-en').textContent = 'Ali and Wood';
            pages[0].querySelector('.story-text .lang-ar').textContent = 'ينحت علي الخشب بمنهجية صوفية. يقول: "الخشب كائن حي، أنا فقط أساعده ليظهر جماله".';
            pages[0].querySelector('.story-text .lang-en').textContent = 'Ali carves wood with a Sufi methodology. He says: "Wood is a living being, I just help it reveal its beauty."';
            
            pages[1].querySelector('.story-title .lang-ar').textContent = 'نورة والنسيج';
            pages[1].querySelector('.story-title .lang-en').textContent = 'Noura and Weaving';
            pages[1].querySelector('.story-text .lang-ar').textContent = 'نورة تحافظ على تقنية نسج نادرة كانت على وشك الانقراض. تعلمتها من والدتها التي تعلمتها من والدتها.';
            pages[1].querySelector('.story-text .lang-en').textContent = 'Noura preserves a rare weaving technique that was on the verge of extinction. She learned it from her mother, who learned it from her mother.';
        }
        
        // تأثير تقليب الصفحة
        storyBook.style.transform = `rotateY(${currentPage * 5}deg)`;
        
        // تحديث حالة الأزرار
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === 2;
    }
    
    // نافذة التواصل
    const contactBtn = document.querySelector('.contact-btn');
    const contactModal = document.querySelector('.contact-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (contactBtn && contactModal) {
        contactBtn.addEventListener('click', function() {
            contactModal.classList.add('active');
        });
        
        closeModal.addEventListener('click', function() {
            contactModal.classList.remove('active');
        });
        
        contactModal.addEventListener('click', function(e) {
            if (e.target === contactModal) {
                contactModal.classList.remove('active');
            }
        });
    }
    
    // نموذج التواصل
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // هنا يمكنك إضافة كود إرسال النموذج
            alert(body.classList.contains('english') ? 
                  'Thank you! Your message has been sent.' : 
                  'شكرًا لك! تم إرسال رسالتك.');
            
            contactModal.classList.remove('active');
            contactForm.reset();
        });
    }
    
    // تأثيرات إضافية عند التمرير
    const navItems = document.querySelectorAll('.nav-item');
    
    window.addEventListener('scroll', function() {
        const fromTop = window.scrollY + 100;
        
        navItems.forEach(item => {
            const section = document.querySelector(item.getAttribute('href'));
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
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
            
            if (body.classList.contains('english')) {
                alert(`Added "${productCard.querySelector('.product-title .lang-en').textContent}" to cart!`);
            } else {
                alert(`تمت إضافة "${productTitle}" إلى السلة!`);
            }
            
            // تأثير اهتزاز
            productCard.style.animation = 'none';
            setTimeout(() => {
                productCard.style.animation = 'float 6s ease-in-out infinite';
            }, 10);
        });
    });
    
    // تهيئة أولية
    updateStoryBook();
});