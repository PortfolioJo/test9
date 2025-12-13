// ملف JavaScript المعرفي متعدد اللغات
document.addEventListener('DOMContentLoaded', function() {
    // ========== إدارة اللغة ==========
    let currentLang = 'ar'; // اللغة الافتراضية
    
    // عناصر تبديل اللغة
    const langButtons = document.querySelectorAll('.lang-btn');
    const allLangElements = document.querySelectorAll('[data-lang]');
    
    // تهيئة اللغة
    function initializeLanguage() {
        // تعيين اللغة النشطة
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            }
            
            btn.addEventListener('click', function() {
                const newLang = this.getAttribute('data-lang');
                if (newLang !== currentLang) {
                    switchLanguage(newLang);
                }
            });
        });
        
        // تطبيق اللغة الافتراضية
        updateLanguageDisplay();
    }
    
    // تبديل اللغة
    function switchLanguage(newLang) {
        currentLang = newLang;
        
        // تحديث الأزرار النشطة
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            }
        });
        
        // تحديث النصوص
        updateLanguageDisplay();
        
        // تحديث اتجاه الصفحة
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;
        
        // تأثير صوتي
        playCognitiveSound('switch');
        
        // إشعار
        showCognitiveNotification(
            currentLang === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language switched to English',
            'success'
        );
    }
    
    // تحديث عرض النصوص
    function updateLanguageDisplay() {
        // إخفاء جميع عناصر اللغة
        allLangElements.forEach(el => {
            el.style.display = 'none';
        });
        
        // إظهار عناصر اللغة الحالية
        const currentLangElements = document.querySelectorAll(`[data-lang="${currentLang}"]`);
        currentLangElements.forEach(el => {
            el.style.display = '';
            
            // تحديث النصوص البديلة
            if (el.hasAttribute('data-text')) {
                el.textContent = el.getAttribute('data-text');
            }
            
            // تحديث العنوائين البديلة
            if (el.hasAttribute('data-lang-alt') && el.hasAttribute('data-text-alt')) {
                if (el.getAttribute('data-lang-alt') === currentLang) {
                    el.textContent = el.getAttribute('data-text-alt');
                }
            }
            
            // تحديث العناصر النائبة
            if (el.placeholder && el.hasAttribute('data-lang-alt') && el.hasAttribute('placeholder-alt')) {
                if (el.getAttribute('data-lang-alt') === currentLang) {
                    el.placeholder = el.getAttribute('placeholder-alt');
                }
            }
            
            // تحديث العناوين
            if (el.title && el.hasAttribute('data-lang-alt') && el.hasAttribute('title-alt')) {
                if (el.getAttribute('data-lang-alt') === currentLang) {
                    el.title = el.getAttribute('title-alt');
                }
            }
        });
        
        // تحديث عناصر select
        document.querySelectorAll('select option').forEach(option => {
            if (option.hasAttribute('data-lang') && option.hasAttribute('data-text')) {
                if (option.getAttribute('data-lang') === currentLang) {
                    option.textContent = option.getAttribute('data-text');
                }
            }
        });
    }
    
    // ========== شاشة التحميل المعرفية ==========
    const loader = document.querySelector('.cognitive-loader');
    
    setTimeout(() => {
        if (loader) {
            loader.classList.add('fade-out');
            
            setTimeout(() => {
                loader.style.display = 'none';
                initializeCognitiveExperience();
            }, 500);
        }
    }, 2000);
    
    // ========== تهيئة التجربة المعرفية ==========
    function initializeCognitiveExperience() {
        console.log('%c🧠 Cognitive Design — تجربة معرفية متعددة اللغات 🧠', 'background: linear-gradient(45deg, #0F0F0F, #1A1A1A, #FF5C5C); color: #F0F0F0; padding: 12px; border-radius: 6px; font-size: 14px; font-weight: bold;');
        console.log('%c🌐 متاح باللغتين العربية والإنجليزية', 'color: #FF8C00; font-size: 11px; padding: 8px; background: #1A1A1A; border-radius: 4px;');
        console.log('%c📞 Contact: aseeljalal45@gmail.com | WhatsApp: +962785094075', 'color: #FF5C5C; font-size: 11px; margin-top: 5px;');
        
        // تهيئة اللغة
        initializeLanguage();
        
        // إنشاء العناصر العائمة
        createFloatingElements();
        
        // تهيئة التنقل
        initializeNavigation();
        
        // تهيئة التفاعل الصوتي
        initializeVoiceInteraction();
        
        // تهيئة تتبع الماوس
        initializeMouseTracker();
        
        // تهيئة تأثيرات التمرير
        initializeScrollEffects();
        
        // تهيئة النماذج
        initializeForms();
    }
    
    // ========== إنشاء العناصر العائمة ==========
    function createFloatingElements() {
        const floatersContainer = document.getElementById('floatersContainer');
        if (!floatersContainer) return;
        
        for (let i = 0; i < 20; i++) {
            const floater = document.createElement('div');
            floater.classList.add('floating-element');
            
            // وضع عشوائي
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const size = Math.random() * 15 + 5;
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 8;
            
            floater.style.position = 'absolute';
            floater.style.width = `${size}px`;
            floater.style.height = `${size}px`;
            floater.style.left = `${left}%`;
            floater.style.top = `${top}%`;
            floater.style.background = `radial-gradient(circle, rgba(255, 92, 92, ${Math.random() * 0.3 + 0.1}), transparent 70%)`;
            floater.style.borderRadius = '50%';
            floater.style.animation = `cognitive-float ${duration}s infinite ease-in-out ${delay}s`;
            floater.style.zIndex = '-1';
            floater.style.pointerEvents = 'none';
            
            floatersContainer.appendChild(floater);
        }
    }
    
    // ========== التنقل المعرفي ==========
    function initializeNavigation() {
        const menuToggle = document.querySelector('.menu-toggle.cognitive-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                if (navLinks) {
                    navLinks.classList.toggle('active');
                }
                
                const bars = this.querySelectorAll('.cognitive-bar');
                if (this.classList.contains('active')) {
                    bars[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                    bars[1].style.opacity = '0';
                    bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
                } else {
                    bars[0].style.transform = 'none';
                    bars[1].style.opacity = '1';
                    bars[2].style.transform = 'none';
                }
            });
        }
        
        // إغلاق القائمة عند النقر على رابط
        document.querySelectorAll('.cognitive-link').forEach(link => {
            link.addEventListener('click', function() {
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
                
                if (menuToggle) {
                    const bars = menuToggle.querySelectorAll('.cognitive-bar');
                    bars[0].style.transform = 'none';
                    bars[1].style.opacity = '1';
                    bars[2].style.transform = 'none';
                }
            });
        });
        
        // إضافة فئة نشطة للروابط عند التمرير
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.cognitive-link');
            
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= (sectionTop - 200)) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
            
            // زر العودة للأعلى
            const backToTop = document.getElementById('backToTop');
            if (backToTop) {
                if (window.pageYOffset > 500) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            }
            
            // تأثيرات الظهور عند التمرير
            animateOnScroll();
        });
        
        // زر العودة للأعلى
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            backToTop.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        // تأثيرات التمرير السلس
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
    }
    
    // ========== تأثيرات الظهور عند التمرير ==========
    function animateOnScroll() {
        const cards = document.querySelectorAll('.philosophy-card, .cognitive-service-card, .cognitive-process-step');
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.85) {
                card.classList.add('visible');
            }
        });
    }
    
    // ========== التفاعل الصوتي المعرفي ==========
    function initializeVoiceInteraction() {
        const voiceIndicator = document.getElementById('voiceIndicator');
        const voiceToggle = document.getElementById('voiceToggle');
        let isListening = false;
        let recognition;
        
        // التحقق من دعم API
        if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
            if (voiceIndicator) voiceIndicator.style.display = 'none';
            if (voiceToggle) voiceToggle.style.display = 'none';
            return;
        }
        
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.lang = currentLang === 'ar' ? 'ar-SA' : 'en-US';
        recognition.continuous = false;
        recognition.interimResults = false;
        
        recognition.onstart = function() {
            isListening = true;
            if (voiceIndicator) {
                voiceIndicator.classList.add('listening');
                voiceIndicator.innerHTML = '<i class="fas fa-circle"></i>';
            }
            showCognitiveNotification(
                currentLang === 'ar' ? 'جاري الاستماع... تحدث الآن' : 'Listening... Speak now',
                'voice'
            );
        };
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript.toLowerCase();
            processVoiceCommand(transcript);
        };
        
        recognition.onend = function() {
            isListening = false;
            if (voiceIndicator) {
                voiceIndicator.classList.remove('listening');
                voiceIndicator.innerHTML = '<i class="fas fa-microphone"></i>';
            }
        };
        
        recognition.onerror = function() {
            isListening = false;
            if (voiceIndicator) {
                voiceIndicator.classList.remove('listening');
                voiceIndicator.innerHTML = '<i class="fas fa-microphone"></i>';
            }
            showCognitiveNotification(
                currentLang === 'ar' ? 'فشل التعرف على الصوت. حاول مرة أخرى.' : 'Voice recognition failed. Try again.',
                'error'
            );
        };
        
        if (voiceIndicator) {
            voiceIndicator.addEventListener('click', function() {
                toggleVoiceRecognition();
            });
        }
        
        if (voiceToggle) {
            voiceToggle.addEventListener('click', function() {
                toggleVoiceRecognition();
            });
        }
        
        function toggleVoiceRecognition() {
            if (!isListening) {
                try {
                    // تحديث لغة التعرف بناءً على اللغة الحالية
                    recognition.lang = currentLang === 'ar' ? 'ar-SA' : 'en-US';
                    recognition.start();
                } catch (e) {
                    console.log("Speech recognition error:", e);
                    showCognitiveNotification(
                        currentLang === 'ar' ? 'لا يمكن الوصول إلى الميكروفون. تحقق من الصلاحيات.' : 'Cannot access microphone. Check permissions.',
                        'error'
                    );
                }
            } else {
                recognition.stop();
            }
        }
        
        function processVoiceCommand(transcript) {
            console.log('Voice command:', transcript);
            
            if (currentLang === 'ar') {
                processArabicCommand(transcript);
            } else {
                processEnglishCommand(transcript);
            }
        }
        
        function processArabicCommand(transcript) {
            if (transcript.includes('خدمات') || transcript.includes('عرض')) {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (transcript.includes('طريقة') || transcript.includes('خطوات')) {
                const processSection = document.getElementById('process');
                if (processSection) {
                    processSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (transcript.includes('تواصل') || transcript.includes('اتصال')) {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (transcript.includes('لغة') || transcript.includes('انجليزي')) {
                switchLanguage('en');
            } else if (transcript.includes('عربي') || transcript.includes('عربية')) {
                switchLanguage('ar');
            } else if (transcript.includes('أعلى') || transcript.includes('بداية')) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (transcript.includes('أسفل') || transcript.includes('نهاية')) {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            } else {
                // ردود معرفية عشوائية بالعربية
                const responses = [
                    "تم التعرف على الصوت. جارٍ معالجة المدخل المعرفي.",
                    "كلماتك مسجلة، لكن المعنى ذاتي.",
                    "النظام يسمعك. جارٍ التفسير.",
                    "تم استقبال المدخل السمعي. جارٍ تحليل الأنماط.",
                    "موجات الصوت معالجة. لم يتم تحديد أمر واضح."
                ];
                
                showCognitiveNotification(responses[Math.floor(Math.random() * responses.length)], 'info');
            }
        }
        
        function processEnglishCommand(transcript) {
            if (transcript.includes('services') || transcript.includes('offer')) {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (transcript.includes('process') || transcript.includes('steps')) {
                const processSection = document.getElementById('process');
                if (processSection) {
                    processSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (transcript.includes('contact') || transcript.includes('connect')) {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (transcript.includes('language') || transcript.includes('english')) {
                switchLanguage('en');
            } else if (transcript.includes('arabic') || transcript.includes('arab')) {
                switchLanguage('ar');
            } else if (transcript.includes('top') || transcript.includes('beginning')) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (transcript.includes('bottom') || transcript.includes('end')) {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            } else {
                // ردود معرفية عشوائية بالإنجليزية
                const responses = [
                    "Voice recognized. Processing cognitive input.",
                    "Your words are noted, but meaning is subjective.",
                    "The system hears you. Interpretation in progress.",
                    "Auditory input received. Analyzing patterns.",
                    "Sound waves processed. No clear command identified."
                ];
                
                showCognitiveNotification(responses[Math.floor(Math.random() * responses.length)], 'info');
            }
        }
    }
    
    // ========== تتبع الماوس المعرفي ==========
    function initializeMouseTracker() {
        const mouseTracker = document.getElementById('mouseTracker');
        if (!mouseTracker) return;
        
        document.addEventListener('mousemove', (e) => {
            // تحديث موقع المؤشر
            mouseTracker.style.left = `${e.clientX - 10}px`;
            mouseTracker.style.top = `${e.clientY - 10}px`;
            
            // تأثير الجاذبية للعناصر
            const interactiveElements = document.querySelectorAll('.cognitive-service-card, .philosophy-card');
            interactiveElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
                
                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
                    
                    const moveX = Math.cos(angle) * force * 3;
                    const moveY = Math.sin(angle) * force * 3;
                    
                    element.style.transform = `translate(${moveX}px, ${moveY}px)`;
                } else if (!element.classList.contains('visible')) {
                    element.style.transform = 'translate(0, 0)';
                }
            });
        });
    }
    
    // ========== تأثيرات التمرير ==========
    function initializeScrollEffects() {
        // إخفاء مؤشر التمرير عند الوصول للأسفل
        window.addEventListener('scroll', function() {
            const scrollIndicator = document.querySelector('.cognitive-scroll');
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                if (scrollIndicator) {
                    scrollIndicator.style.opacity = '0';
                    scrollIndicator.style.transition = 'opacity 0.5s';
                }
            } else {
                if (scrollIndicator) {
                    scrollIndicator.style.opacity = '0.5';
                }
            }
        });
        
        // تأثير عشوائي للعناصر العائمة
        setInterval(() => {
            const floaters = document.querySelectorAll('.floating-element');
            floaters.forEach(floater => {
                if (Math.random() > 0.7) {
                    floater.style.animation = 'none';
                    setTimeout(() => {
                        floater.style.animation = `cognitive-float ${Math.random() * 10 + 8}s infinite ease-in-out`;
                    }, 50);
                }
            });
        }, 5000);
    }
    
    // ========== تهيئة النماذج ==========
    function initializeForms() {
        const cognitiveForm = document.getElementById('cognitiveForm');
        const newsletterForm = document.querySelector('.cognitive-newsletter');
        
        if (cognitiveForm) {
            cognitiveForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // جمع بيانات النموذج
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    service: document.getElementById('service').value,
                    message: document.getElementById('message').value,
                    language: currentLang
                };
                
                // هنا يمكنك إضافة كود لإرسال البيانات إلى الخادم
                
                // عرض رسالة نجاح
                showCognitiveNotification(
                    currentLang === 'ar' 
                        ? 'تم إرسال أفكارك بنجاح! سنتواصل معك خلال ٢٤ ساعة معرفية.' 
                        : 'Thought transmission successful! We will connect within 24 cognitive hours.',
                    'success'
                );
                
                // إعادة تعيين النموذج
                this.reset();
            });
        }
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('input[type="email"]');
                const email = emailInput.value;
                
                if (email) {
                    showCognitiveNotification(
                        currentLang === 'ar'
                            ? 'شكراً لك! ستصلك الاضطرابات المعرفية قريباً.'
                            : 'Thank you! Cognitive disturbances coming your way soon.',
                        'success'
                    );
                    this.reset();
                }
            });
        }
    }
    
    // ========== الإشعارات المعرفية ==========
    function showCognitiveNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `cognitive-notification ${type}`;
        notification.textContent = message;
        
        // أنماط الإشعار
        notification.style.position = 'fixed';
        notification.style.top = '25px';
        notification.style.right = '25px';
        notification.style.padding = '1.25rem 1.75rem';
        notification.style.borderRadius = 'var(--radius-cognitive-md)';
        notification.style.color = 'var(--text-cognitive-light)';
        notification.style.fontFamily = 'var(--font-cognitive-body)';
        notification.style.fontSize = '1.05rem';
        notification.style.zIndex = '9999';
        notification.style.boxShadow = 'var(--shadow-cognitive-elevated)';
        notification.style.transition = 'all 0.3s ease';
        notification.style.transform = 'translateY(-100px)';
        notification.style.opacity = '0';
        notification.style.maxWidth = '400px';
        notification.style.border = '1px solid';
        
        if (type === 'success') {
            notification.style.background = 'linear-gradient(45deg, var(--cognitive-dark), var(--cognitive-accent-red))';
            notification.style.borderColor = 'var(--cognitive-accent-red)';
        } else if (type === 'error') {
            notification.style.background = 'linear-gradient(45deg, #9e2a2a, #b45309)';
            notification.style.borderColor = '#b45309';
        } else if (type === 'voice') {
            notification.style.background = 'linear-gradient(45deg, var(--cognitive-dark), var(--cognitive-accent-blue))';
            notification.style.borderColor = 'var(--cognitive-accent-blue)';
        } else {
            notification.style.background = 'linear-gradient(45deg, var(--cognitive-dark), var(--cognitive-accent-orange))';
            notification.style.borderColor = 'var(--cognitive-accent-orange)';
        }
        
        document.body.appendChild(notification);
        
        // ظهور الإشعار
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        }, 100);
        
        // إخفاء الإشعار بعد 4 ثوانٍ
        setTimeout(() => {
            notification.style.transform = 'translateY(-100px)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
    
    // ========== الأصوات المعرفية ==========
    function playCognitiveSound(type) {
        // محاكاة تأثيرات صوتية بسيطة
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            if (type === 'click' || type === 'switch') {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
                
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                
                oscillator.start();
                oscillator.stop(audioContext.currentTime + 0.1);
            }
        } catch (e) {
            console.log("Audio not supported or error:", e);
        }
    }
    
    // ========== تهيئة تأثيرات أولية ==========
    window.addEventListener('load', function() {
        // تفعيل تأثيرات الظهور الأولية
        setTimeout(animateOnScroll, 100);
    });
});