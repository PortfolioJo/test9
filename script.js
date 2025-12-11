// ===========================================
// بورتفوليو صانع محتوى محترف 2025
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    // تهيئة جميع المكونات
    initNavigation();
    initThemeSwitcher();
    initLanguageSwitcher();
    initCurrentYear();
    initScrollAnimations();
    initVideoModal();
    initContactForm();
    initScrollProgress();
    initSmoothScrolling();
    initPageAnimations();
    initTypewriter();
    initCounters();
    initModeSwitcher();
    initAnimatedBackground();
    
    // تعيين اللغة الافتراضية إلى العربية
    setTimeout(() => {
        const currentLang = document.documentElement.getAttribute('lang') || 'ar';
        if (currentLang === 'ar') {
            setLanguage('ar');
            updateLangText('ar');
        }
    }, 100);
});

// ===========================================
// الترجمات الكاملة للعربية والإنجليزية
// ===========================================

const translations = {
    en: {
        // الموقع
        'site.title': 'Karim | Professional Content Creator',
        
        // شريط التنقل
        'nav.logo': 'Karim',
        'nav.creator': 'Content Creator',
        'nav.home': 'Home',
        'nav.videos': 'My Videos',
        'nav.services': 'Services',
        'nav.process': 'Why Choose Me',
        'nav.contact': 'Collaborate',
        'lang.ar': 'AR',
        'lang.en': 'EN',
        
        // مبدل الوضع
        'mode.reels': 'Reels',
        'mode.stories': 'Stories',
        
        // قسم البطل
        'hero.subtitle': 'Short-form, trending visuals, brand-ready content',
        'hero.videos': 'Videos',
        'hero.clients': 'Clients',
        'hero.views': 'Views',
        'hero.viewVideos': 'View My Videos',
        'hero.collaborate': 'Collaborate',
        'hero.explore': 'Explore',
        
        // قسم الفيديوهات
        'videos.title': 'My Featured Videos',
        'videos.subtitle': 'Best performing content that went viral',
        'videos.trend': 'Trend',
        'videos.branding': 'Branding',
        'videos.lifestyle': 'Lifestyle',
        'videos.ads': 'Ad',
        'videos.educational': 'Educational',
        'videos.challenge': 'Challenge',
        'videos.video1.title': '24-Hour Challenge',
        'videos.video1.description': 'Video that went viral in 48 hours',
        'videos.video2.title': 'Product Review',
        'videos.video2.description': 'Collaboration with global brand',
        'videos.video3.title': 'Morning Routine',
        'videos.video3.description': 'Daily content with high engagement',
        'videos.video4.title': 'Ad Campaign',
        'videos.video4.description': 'Campaign for a startup',
        'videos.video5.title': 'Content Tips',
        'videos.video5.description': 'Educational video shared with followers',
        'videos.video6.title': 'Short Videos Series',
        'videos.video6.description': 'Daily short videos series',
        'videos.result1': '+120K views in 48 hours',
        'videos.result2': '+40% increase in sales',
        'videos.result3': '+15K new followers',
        'videos.result4': '8.5% CTR above average',
        'videos.result5': '+5K shares',
        'videos.result6': 'Viral on 3 platforms',
        
        // قسم الريلز
        'reels.title': 'Short Reels',
        'reels.subtitle': 'Watch my best animated reels',
        'reels.reel1': "Today's Trend",
        'reels.reel2': 'Fast Editing',
        'reels.reel3': 'Special Effects',
        'reels.reel4': 'Engaging Audio',
        
        // قسم الخدمات
        'services.title': 'My Creator Services',
        'services.subtitle': 'Complete content solutions for your brand',
        'services.service1.title': 'Short-form Content Creation',
        'services.service1.description': 'Reels, TikTok, impactful short videos',
        'services.service1.feature1': 'Professional filming',
        'services.service1.feature2': 'Fast editing',
        'services.service1.feature3': 'Modern effects',
        'services.service1.feature4': 'Curated music',
        'services.service2.title': 'Product Shots for Reels',
        'services.service2.description': 'Product photography for social media',
        'services.service2.feature1': 'Professional lighting',
        'services.service2.feature2': 'Creative angles',
        'services.service2.feature3': 'Cinematic movement',
        'services.service2.feature4': 'Fast delivery',
        'services.service3.title': 'Brand Collaborations',
        'services.service3.description': 'Partnerships with suitable brands',
        'services.service3.feature1': 'Content strategy',
        'services.service3.feature2': 'Professional negotiation',
        'services.service3.feature3': 'Smooth execution',
        'services.service3.feature4': 'Performance reports',
        'services.service4.title': 'Editing & Trend Adaptation',
        'services.service4.description': 'Professional editing & adapting global trends',
        'services.service4.feature1': 'Fast editing',
        'services.service4.feature2': 'Trend tracking',
        'services.service4.feature3': 'Special effects',
        'services.service4.feature4': 'Instant delivery',
        'services.service5.title': 'UGC Videos',
        'services.service5.description': 'Authentic user content promoting your product',
        'services.service5.feature1': 'Natural content',
        'services.service5.feature2': 'Real influence',
        'services.service5.feature3': 'Cost effective',
        'services.service5.feature4': 'Tangible results',
        'services.service6.title': 'Script & Filming',
        'services.service6.description': 'Professional script writing & high-quality filming',
        'services.service6.feature1': 'Creative script',
        'services.service6.feature2': 'Complete planning',
        'services.service6.feature3': 'Professional filming',
        'services.service6.feature4': 'Review & adjustments',
        'services.popular': 'Most Popular',
        
        // قسم الجدول الزمني
        'timeline.title': 'Why Choose Me?',
        'timeline.subtitle': 'Key features that make me the optimal choice',
        'timeline.item1.title': 'Consistent Aesthetic',
        'timeline.item1.description': 'Maintaining unified visual identity in all content',
        'timeline.item2.title': 'Trend Prediction',
        'timeline.item2.description': 'Predicting trends before they go viral',
        'timeline.item3.title': 'Fast Editing',
        'timeline.item3.description': 'Content delivery in the fastest time possible',
        'timeline.item4.title': 'High Engagement',
        'timeline.item4.description': 'Content achieving highest interaction rates',
        'timeline.item5.title': 'Storytelling Style',
        'timeline.item5.description': 'Turning products into impactful stories',
        'timeline.item6.title': 'Professional Gear',
        'timeline.item6.description': 'High-quality cameras and lighting',
        
        // قسم العلامات التجارية
        'brands.title': 'Worked With',
        'brands.subtitle': 'Brands that trusted me with their content',
        
        // قسم آراء العملاء
        'testimonials.title': 'Client Testimonials',
        'testimonials.subtitle': 'What they say about working with me',
        'testimonials.testimonial1': '"The content Karim made for our launch video went viral in 24 hours! The engagement was crazy and sales increased by 60%."',
        'testimonials.testimonial2': '"Fastest content creator I have ever seen! Video ready within hours and quality is amazing. Followers keep asking for more."',
        'testimonials.position1': 'Marketing Manager, Fashion Brand',
        'testimonials.position2': 'Cafe Owner',
        
        // قسم الدعوة للعمل
        'cta.title': 'Ready for Your Viral Moment?',
        'cta.subtitle': "Let's create unforgettable content together",
        'cta.button': 'Start Your Project Now',
        
        // قسم الاتصال
        'contact.formTitle': 'Start Your Project',
        'contact.formSubtitle': 'Tell me about your idea and I will get back to you within 24 hours',
        'contact.form.name': 'Full Name',
        'contact.form.email': 'Email Address',
        'contact.form.select': 'Select Project Type',
        'contact.form.reels': 'Short Reels',
        'contact.form.branding': 'Brand Collaboration',
        'contact.form.ugc': 'UGC Videos',
        'contact.form.editing': 'Content Editing',
        'contact.form.other': 'Other Project',
        'contact.form.message': 'Project Details',
        'contact.form.submit': 'Send Collaboration Request',
        
        // الفوتر
        'footer.logo': 'Karim',
        'footer.tagline': 'Professional Content Creator',
        'footer.home': 'Home',
        'footer.videos': 'My Videos',
        'footer.services': 'Services',
        'footer.process': 'Why Choose Me',
        'footer.contact': 'Collaborate',
        'footer.name': 'Karim',
        'footer.rights': 'All rights reserved',
        
        // نافذة الفيديو
        'modal.video': 'Video Preview'
    },
    ar: {
        // الموقع
        'site.title': 'كريم | صانع محتوى محترف',
        
        // شريط التنقل
        'nav.logo': 'كريم',
        'nav.creator': 'صانع محتوى',
        'nav.home': 'الرئيسية',
        'nav.videos': 'فيديوهاتي',
        'nav.services': 'خدماتي',
        'nav.process': 'لماذا تختارني',
        'nav.contact': 'تعاون معي',
        'lang.ar': 'عربي',
        'lang.en': 'EN',
        
        // مبدل الوضع
        'mode.reels': 'ريلز',
        'mode.stories': 'ستوريز',
        
        // قسم البطل
        'hero.subtitle': 'محتوى قصير، مرئيات عصرية، جاهز للعلامات التجارية',
        'hero.videos': 'فيديو',
        'hero.clients': 'عميل',
        'hero.views': 'مشاهدة',
        'hero.viewVideos': 'شاهد الفيديوهات',
        'hero.collaborate': 'تعاون معي',
        'hero.explore': 'استكشف',
        
        // قسم الفيديوهات
        'videos.title': 'فيديوهاتي البارزة',
        'videos.subtitle': 'أفضل المحتوى الذي حقق انتشاراً واسعاً',
        'videos.trend': 'تريند',
        'videos.branding': 'براندينج',
        'videos.lifestyle': 'أسلوب حياة',
        'videos.ads': 'إعلان',
        'videos.educational': 'تعليمي',
        'videos.challenge': 'تحدي',
        'videos.video1.title': 'تحدي 24 ساعة',
        'videos.video1.description': 'فيديو حقق انتشاراً واسعاً خلال 48 ساعة',
        'videos.video2.title': 'مراجعة منتج',
        'videos.video2.description': 'تعاون مع علامة تجارية عالمية',
        'videos.video3.title': 'روتين الصباح',
        'videos.video3.description': 'محتوى يومي حقق تفاعلاً كبيراً',
        'videos.video4.title': 'كامبين إعلاني',
        'videos.video4.description': 'حملة إعلانية لشركة ناشئة',
        'videos.video5.title': 'نصائح للمحتوى',
        'videos.video5.description': 'فيديو تعليمي شاركته مع المتابعين',
        'videos.video6.title': 'فيديوهات قصيرة',
        'videos.video6.description': 'سلسلة فيديوهات قصيرة يومية',
        'videos.result1': '+120K مشاهدة خلال 48 ساعة',
        'videos.result2': '+40% زيادة في المبيعات',
        'videos.result3': '+15K متابع جديد',
        'videos.result4': 'CTR 8.5% أعلى من المتوسط',
        'videos.result5': '+5K مشاركة',
        'videos.result6': 'ڤايرال على 3 منصات',
        
        // قسم الريلز
        'reels.title': 'ريلز قصيرة',
        'reels.subtitle': 'شاهد أفضل الريلز المتحركة',
        'reels.reel1': 'تريند اليوم',
        'reels.reel2': 'مونتاج سريع',
        'reels.reel3': 'تأثيرات خاصة',
        'reels.reel4': 'صوتيات جذابة',
        
        // قسم الخدمات
        'services.title': 'خدماتي كصانع محتوى',
        'services.subtitle': 'حلول محتوى متكاملة لعلامتك',
        'services.service1.title': 'صناعة المحتوى القصير',
        'services.service1.description': 'ريلز، تيك توك، فيديوهات قصيرة مؤثرة',
        'services.service1.feature1': 'تصوير احترافي',
        'services.service1.feature2': 'مونتاج سريع',
        'services.service1.feature3': 'تأثيرات حديثة',
        'services.service1.feature4': 'موسيقى مختارة',
        'services.service2.title': 'صور منتجات للريلز',
        'services.service2.description': 'تصوير منتجات بطريقة جذابة لوسائل التواصل',
        'services.service2.feature1': 'إضاءة احترافية',
        'services.service2.feature2': 'زوايا إبداعية',
        'services.service2.feature3': 'حركة سينمائية',
        'services.service2.feature4': 'تسليم سريع',
        'services.service3.title': 'تعاون مع العلامات',
        'services.service3.description': 'شراكات مع العلامات التجارية المناسبة',
        'services.service3.feature1': 'استراتيجية محتوى',
        'services.service3.feature2': 'تفاوض احترافي',
        'services.service3.feature3': 'تنفيذ سلس',
        'services.service3.feature4': 'تقارير أداء',
        'services.service4.title': 'مونتاج وتكييف التريند',
        'services.service4.description': 'مونتاج محترف وتكييف التريندات العالمية',
        'services.service4.feature1': 'مونتاج سريع',
        'services.service4.feature2': 'تتبع التريندات',
        'services.service4.feature3': 'تأثيرات خاصة',
        'services.service4.feature4': 'تسليم فوري',
        'services.service5.title': 'فيديوهات UGC',
        'services.service5.description': 'محتوى من مستخدم حقيقي يروّج لمنتجك',
        'services.service5.feature1': 'محتوى طبيعي',
        'services.service5.feature2': 'تأثير حقيقي',
        'services.service5.feature3': 'تكلفة فعالة',
        'services.service5.feature4': 'نتائج ملموسة',
        'services.service6.title': 'سيناريو وتصوير',
        'services.service6.description': 'كتابة سيناريو احترافي وتصوير عالي الجودة',
        'services.service6.feature1': 'سيناريو مبدع',
        'services.service6.feature2': 'تخطيط كامل',
        'services.service6.feature3': 'تصوير احترافي',
        'services.service6.feature4': 'مراجعة وتعديل',
        'services.popular': 'الأكثر طلباً',
        
        // قسم الجدول الزمني
        'timeline.title': 'لماذا تختارني؟',
        'timeline.subtitle': 'أبرز المميزات التي تجعلني الخيار الأمثل',
        'timeline.item1.title': 'جمالية ثابتة',
        'timeline.item1.description': 'حفاظ على هوية بصرية موحدة في كل المحتوى',
        'timeline.item2.title': 'تنبؤ بالتريندات',
        'timeline.item2.description': 'توقع التريندات قبل انتشارها الواسع',
        'timeline.item3.title': 'مونتاج سريع',
        'timeline.item3.description': 'تسليم المحتوى في أسرع وقت ممكن',
        'timeline.item4.title': 'تفاعل عالي',
        'timeline.item4.description': 'محتويات تحقق أعلى معدلات التفاعل',
        'timeline.item5.title': 'أسلوب سرد القصص',
        'timeline.item5.description': 'تحويل المنتجات إلى قصص مؤثرة',
        'timeline.item6.title': 'معدات احترافية',
        'timeline.item6.description': 'كاميرات وإضاءة عالية الجودة',
        
        // قسم العلامات التجارية
        'brands.title': 'تعاملت معهم',
        'brands.subtitle': 'علامات تجارية وثق بي في محتواهم',
        
        // قسم آراء العملاء
        'testimonials.title': 'آراء العملاء',
        'testimonials.subtitle': 'ماذا يقولون عن تعاملهم معي',
        'testimonials.testimonial1': '"المحتوى اللي سواه كريم لفيديو الإطلاق حقنا صار viral خلال 24 ساعة! التفاعل كان جنوني والمبيعات زادت 60%."',
        'testimonials.testimonial2': '"أسرع صانع محتوى شفته! الفيديو جاهز خلال ساعات والجودة تحفة. المتابعين ماخذين يطلبون المزيد."',
        'testimonials.position1': 'مديرة تسويق، علامة أزياء',
        'testimonials.position2': 'مالك مقهى ناشئ',
        
        // قسم الدعوة للعمل
        'cta.title': 'جاهز لصناعة لحظة ڤايرال؟',
        'cta.subtitle': 'لنصنع محتوى لا يُنسى معاً',
        'cta.button': 'ابدأ مشروعك الآن',
        
        // قسم الاتصال
        'contact.formTitle': 'لنبدأ مشروعك',
        'contact.formSubtitle': 'أخبرني عن فكرتك وسأعود إليك خلال 24 ساعة',
        'contact.form.name': 'الاسم الكامل',
        'contact.form.email': 'البريد الإلكتروني',
        'contact.form.select': 'اختر نوع المشروع',
        'contact.form.reels': 'ريلز قصيرة',
        'contact.form.branding': 'تعاون براندينج',
        'contact.form.ugc': 'فيديوهات UGC',
        'contact.form.editing': 'مونتاج محتوى',
        'contact.form.other': 'مشروع آخر',
        'contact.form.message': 'تفاصيل المشروع',
        'contact.form.submit': 'أرسل طلب التعاون',
        
        // الفوتر
        'footer.logo': 'كريم',
        'footer.tagline': 'صانع محتوى محترف',
        'footer.home': 'الرئيسية',
        'footer.videos': 'فيديوهاتي',
        'footer.services': 'خدماتي',
        'footer.process': 'لماذا تختارني',
        'footer.contact': 'تعاون معي',
        'footer.name': 'كريم',
        'footer.rights': 'جميع الحقوق محفوظة',
        
        // نافذة الفيديو
        'modal.video': 'عرض فيديو'
    }
};

// ===========================================
// تأثير الآلة الكاتبة
// ===========================================

function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;
    
    const phrases = [
        "I Create Content People Remember.",
        "I Make Videos That Go Viral.",
        "I Build Brands Through Stories.",
        "I Capture Moments That Matter.",
        "I Design Visuals That Convert."
    ];
    
    const phrasesAr = [
        "أصنع محتوى لا يُنسى.",
        "أصنع فيديوهات تنتشر بسرعة.",
        "أبني علامات تجارية عبر القصص.",
        "ألتقط اللحظات المهمة.",
        "أصمم مرئيات تحقق النتائج."
    ];
    
    let currentLang = document.documentElement.getAttribute('lang') || 'ar';
    let currentPhrases = currentLang === 'ar' ? phrasesAr : phrases;
    
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    function typeWriter() {
        if (isPaused) return;
        
        const currentPhrase = currentPhrases[currentPhraseIndex];
        
        if (!isDeleting && currentCharIndex <= currentPhrase.length) {
            // الكتابة
            typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex);
            currentCharIndex++;
            setTimeout(typeWriter, 50);
        } else if (isDeleting && currentCharIndex >= 0) {
            // المسح
            typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex);
            currentCharIndex--;
            setTimeout(typeWriter, 30);
        } else {
            // التبديل بين الجمل
            isDeleting = !isDeleting;
            if (!isDeleting) {
                currentPhraseIndex = (currentPhraseIndex + 1) % currentPhrases.length;
            }
            // استراحة قبل البدء بالكتابة أو المسح
            isPaused = true;
            setTimeout(() => {
                isPaused = false;
                typeWriter();
            }, isDeleting ? 1000 : 2000);
        }
    }
    
    // بدء الكتابة بعد تأخير قصير
    setTimeout(typeWriter, 1000);
    
    // تحديث الجمل عند تغيير اللغة
    document.addEventListener('languageChange', function() {
        currentLang = document.documentElement.getAttribute('lang');
        currentPhrases = currentLang === 'ar' ? phrasesAr : phrases;
        currentPhraseIndex = 0;
        currentCharIndex = 0;
        isDeleting = false;
        isPaused = false;
        typewriterElement.textContent = '';
        
        setTimeout(typeWriter, 500);
    });
}

// ===========================================
عدادات المتحركة
// ===========================================

function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const suffix = counter.textContent.includes('+') ? '+' : 
                      counter.textContent.includes('M') ? 'M+' : '';
        
        const updateCounter = () => {
            const current = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
            
            if (current < target) {
                const increment = Math.ceil((target - current) / 50);
                counter.textContent = Math.min(current + increment, target) + suffix;
                setTimeout(updateCounter, 30);
            }
        };
        
        // بدء العد عند ظهور العنصر
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}

// ===========================================
// مبدل الوضع (ريلز/ستوريز)
// ===========================================

function initModeSwitcher() {
    const modeToggle = document.getElementById('modeToggle');
    const modeText = modeToggle.querySelector('.mode-text');
    const modeIcon = modeToggle.querySelector('i');
    
    let currentMode = 'reels';
    
    modeToggle.addEventListener('click', function() {
        currentMode = currentMode === 'reels' ? 'stories' : 'reels';
        
        // تحديث النص والأيقونة
        modeText.textContent = translations[document.documentElement.getAttribute('lang') || 'ar'][`mode.${currentMode}`];
        modeIcon.className = currentMode === 'reels' ? 'fas fa-film' : 'fas fa-camera';
        
        // تأثير تحويل
        this.style.transform = 'rotate(180deg) scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg) scale(1)';
        }, 300);
        
        // تغيير لون الخلفية المتحركة
        changeBackgroundMode(currentMode);
    });
    
    function changeBackgroundMode(mode) {
        const animatedBg = document.querySelector('.animated-bg');
        if (!animatedBg) return;
        
        if (mode === 'reels') {
            animatedBg.style.background = 'linear-gradient(-45deg, #0A0A0A, #1A1A2E, #16213E, #0F3460)';
        } else {
            animatedBg.style.background = 'linear-gradient(-45deg, #1A1A1A, #2D2424, #3A2C2C, #4A3535)';
        }
    }
}

// ===========================================
// خلفية متحركة متغيرة
// ===========================================

function initAnimatedBackground() {
    const colors = [
        ['#0A0A0A', '#1A1A2E', '#16213E', '#0F3460'], // أزرق داكن
        ['#1A1A1A', '#2D2424', '#3A2C2C', '#4A3535'], // بني داكن
        ['#0A0A0A', '#1E1E2E', '#2D2D44', '#3B3B5D'], // بنفسجي داكن
        ['#1A1A1A', '#24242D', '#2C2C3A', '#35354A']  // رمادي داكن
    ];
    
    let currentColorIndex = 0;
    const animatedBg = document.querySelector('.animated-bg');
    
    if (!animatedBg) return;
    
    function changeBackgroundColor() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        const [color1, color2, color3, color4] = colors[currentColorIndex];
        
        animatedBg.style.background = `linear-gradient(-45deg, ${color1}, ${color2}, ${color3}, ${color4})`;
    }
    
    // تغيير اللون كل 20 ثانية
    setInterval(changeBackgroundColor, 20000);
}

// ===========================================
// نافذة الفيديو
// ===========================================

function initVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalClose = document.getElementById('modalClose');
    const playBtns = document.querySelectorAll('.play-btn, .reel-preview');
    
    // بيانات الفيديوهات
    const videos = {
        1: {
            title: 'تحدي 24 ساعة',
            views: '250K',
            likes: '15K',
            comments: '2.5K',
            description: 'فيديو حقق انتشاراً واسعاً خلال 48 ساعة'
        },
        2: {
            title: 'مراجعة منتج',
            views: '180K',
            likes: '12K',
            comments: '1.8K',
            description: 'فيديو تعاون مع علامة تجارية عالمية'
        },
        3: {
            title: 'روتين الصباح',
            views: '320K',
            likes: '25K',
            comments: '3.2K',
            description: 'محتوى يومي حقق تفاعلاً كبيراً'
        }
    };
    
    // فتح النافذة عند النقر على فيديو
    playBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const videoId = (index % 3) + 1;
            openVideoModal(videoId);
        });
    });
    
    // إغلاق النافذة
    modalClose.addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    
    // إغلاق بمفتاح Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function openVideoModal(videoId) {
        const video = videos[videoId];
        if (!video) return;
        
        // تحديث محتوى النافذة
        document.getElementById('videoTitle').textContent = video.title;
        document.getElementById('videoViews').textContent = video.views;
        document.getElementById('videoLikes').textContent = video.likes;
        document.getElementById('videoComments').textContent = video.comments;
        document.getElementById('videoDescription').textContent = video.description;
        
        // إظهار النافذة
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        const modal = document.getElementById('videoModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===========================================
// بقية الدوال (نفس script.js السابق مع تعديلات بسيطة)
// ===========================================

function initNavigation() {
    const nav = document.getElementById('nav');
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // تبديل قائمة الجوال
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        
        // تحويل الهامبرغر إلى X
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // إغلاق قائمة الجوال عند النقر على رابط
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                // إعادة تعيين تحويل الهامبرغر
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // تأثير التمرير على الهيدر
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY > 50;
        nav.classList.toggle('scrolled', scrolled);
        
        // تحديث رابط التنقل النشط بناءً على موضع التمرير
        updateActiveNavLink(sections, navLinks);
    });

    function updateActiveNavLink(sections, links) {
        let current = '';
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            const section = link.getAttribute('data-section');
            if (section === current || (current === '' && section === 'hero')) {
                link.classList.add('active');
            }
        });
    }
}

function initThemeSwitcher() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    const savedTheme = localStorage.getItem('creator-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('creator-theme', newTheme);
        updateThemeIcon(newTheme);
        
        this.style.transform = 'rotate(180deg) scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg) scale(1)';
        }, 300);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
}

function initLanguageSwitcher() {
    const langToggle = document.getElementById('languageToggle');
    const langText = langToggle.querySelector('.lang-text');
    
    const savedLang = localStorage.getItem('creator-lang') || 'ar';
    setLanguage(savedLang);
    updateLangText(savedLang);
    
    langToggle.addEventListener('click', function() {
        const currentLang = document.documentElement.getAttribute('lang') || 'ar';
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        
        this.style.transform = 'rotate(180deg) scale(1.1)';
        setTimeout(() => {
            setLanguage(newLang);
            updateLangText(newLang);
            localStorage.setItem('creator-lang', newLang);
            this.style.transform = 'rotate(0deg) scale(1)';
        }, 300);
    });
    
    function setLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        updateTexts(lang);
        updatePageTitle(lang);
        
        // إطلاق حدث لتحديث الآلة الكاتبة
        document.dispatchEvent(new CustomEvent('languageChange'));
        
        document.body.style.opacity = '0.8';
        setTimeout(() => {
            document.body.style.opacity = '1';
            document.body.style.transition = 'opacity 0.3s ease';
        }, 100);
    }
    
    function updateLangText(lang) {
        langText.textContent = translations[lang]['lang.ar'];
    }
    
    function updatePageTitle(lang) {
        document.title = translations[lang]['site.title'];
    }
}

function updateTexts(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

function initCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

function initContactForm() {
    const contactForm = document.getElementById('collabForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.querySelector('span').textContent;
            const originalIcon = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                const currentLang = document.documentElement.getAttribute('lang') || 'ar';
                const successMsg = currentLang === 'ar' 
                    ? 'تم إرسال طلب التعاون بنجاح! سأتواصل معك خلال 24 ساعة.' 
                    : 'Collaboration request sent successfully! I will contact you within 24 hours.';
                showNotification(successMsg, 'success');
                
                this.reset();
                submitBtn.innerHTML = originalIcon;
                submitBtn.querySelector('span').textContent = originalText;
                submitBtn.disabled = false;
                resetFormLabels();
            }, 1500);
        });
    }
    
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea, select');
        const label = group.querySelector('label');
        
        if (input && label) {
            if (input.value) {
                label.style.top = '-1.5rem';
                label.style.fontSize = '0.85rem';
                label.style.color = 'var(--primary-color)';
                label.style.fontWeight = '700';
            }
            
            input.addEventListener('focus', function() {
                label.style.top = '-1.5rem';
                label.style.fontSize = '0.85rem';
                label.style.color = 'var(--primary-color)';
                label.style.fontWeight = '700';
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    label.style.top = '1rem';
                    label.style.fontSize = '1rem';
                    label.style.color = 'var(--text-tertiary)';
                    label.style.fontWeight = '500';
                }
            });
            
            if (input.tagName === 'SELECT') {
                input.addEventListener('change', function() {
                    if (this.value) {
                        label.style.top = '-1.5rem';
                        label.style.fontSize = '0.85rem';
                        label.style.color = 'var(--primary-color)';
                        label.style.fontWeight = '700';
                    } else {
                        label.style.top = '1rem';
                        label.style.fontSize = '1rem';
                        label.style.color = 'var(--text-tertiary)';
                        label.style.fontWeight = '500';
                    }
                });
            }
        }
    });
    
    function resetFormLabels() {
        const labels = document.querySelectorAll('.form-group label');
        labels.forEach(label => {
            label.style.top = '1rem';
            label.style.fontSize = '1rem';
            label.style.color = 'var(--text-tertiary)';
            label.style.fontWeight = '500';
        });
    }
}

function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        width: 0%;
        height: 3px;
        background: var(--gradient-1);
        z-index: 9998;
        transition: width 0.1s ease;
        pointer-events: none;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.creator-nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initPageAnimations() {
    const animatedElements = [
        '.hero-title',
        '.hero-subtitle',
        '.hero-stats',
        '.hero-actions',
        '.video-card',
        '.reel-item',
        '.service-card',
        '.timeline-item',
        '.brand-logo',
        '.testimonial-bubble',
        '.big-cta',
        '.form-group'
    ];
    
    animatedElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
            element.classList.add('scroll-animate');
        });
    });
    
    initScrollAnimations();
}

function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: 'var(--bg-card)',
        border: '2px solid var(--border-color)',
        borderRadius: 'var(--element-radius)',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        zIndex: '9999',
        animation: 'slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: 'var(--shadow-lg)',
        maxWidth: '350px',
        fontWeight: '600'
    });
    
    if (type === 'success') {
        notification.style.borderLeft = '4px solid var(--primary-color)';
        notification.querySelector('i').style.color = 'var(--primary-color)';
    } else if (type === 'error') {
        notification.style.borderLeft = '4px solid #ff4d4d';
        notification.querySelector('i').style.color = '#ff4d4d';
    } else {
        notification.style.borderLeft = '4px solid var(--accent-color)';
        notification.querySelector('i').style.color = 'var(--accent-color)';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
    
    addNotificationAnimations();
    
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        setTimeout(() => notification.remove(), 300);
    });
}

function addNotificationAnimations() {
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%) translateY(-20px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0) translateY(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0) translateY(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%) translateY(-20px);
                    opacity: 0;
                }
            }
            
            .notification {
                cursor: pointer;
                transition: transform 0.2s ease;
            }
            
            .notification:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-xl);
            }
            
            @media (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    top: 80px;
                    max-width: calc(100% - 20px);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// تأثيرات إضافية
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.neon-btn, .btn-primary, .btn-secondary, .cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform + ' scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace(' scale(1.05)', '');
        });
    });
});

window.addEventListener('load', function() {
    document.body.style.animation = 'fadeIn 1s ease-out';
});