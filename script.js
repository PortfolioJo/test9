// ملف JavaScript المعرفي لـ Cognitive Folio
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== شاشة التحميل المعرفية ==========
    const loader = document.querySelector('.cognitive-loader');
    
    setTimeout(() => {
        loader.classList.add('fade-out');
        
        setTimeout(() => {
            loader.style.display = 'none';
            initializeCognitiveExperience();
        }, 500);
    }, 2000);
    
    // ========== تهيئة التجربة المعرفية ==========
    function initializeCognitiveExperience() {
        console.log('%c🧠 Cognitive Folio — تجربة معرفية غامضة 🧠', 'background: linear-gradient(45deg, #0F0F0F, #1A1A1A, #FF5C5C); color: #F0F0F0; padding: 12px; border-radius: 6px; font-size: 14px; font-weight: bold;');
        console.log('%c⚠️  Warning: This experience challenges conventional design thinking', 'color: #FF8C00; font-size: 11px; padding: 8px; background: #1A1A1A; border-radius: 4px;');
        console.log('%c📞 Contact: aseeljalal45@gmail.com | WhatsApp: +962785094075', 'color: #FF5C5C; font-size: 11px; margin-top: 5px;');
        console.log('%c🌐 Live Projects: test1, test4, test7', 'color: #5C5CFF; font-size: 12px; padding: 8px; background: #1A1A1A; border-radius: 4px;');
        
        createFloatingElements();
        initializeNavigation();
        initializeProjects();
        initializePuzzle();
        initializeVoiceInteraction();
        initializeMouseTracker();
        initializeScrollEffects();
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
                navLinks.classList.toggle('active');
                
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
    
    // ========== تهيئة المشاريع المعرفية ==========
    function initializeProjects() {
        // تحسين iframes
        const iframes = document.querySelectorAll('.cognitive-frame iframe');
        iframes.forEach(iframe => {
            iframe.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            
            iframe.style.opacity = '0';
            iframe.style.transition = 'opacity 0.5s ease';
        });
        
        // تأثيرات الظهور عند التمرير
        const projectCards = document.querySelectorAll('.cognitive-project');
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        projectCards.forEach(card => {
            observer.observe(card);
        });
    }
    
    // ========== الألغاز المعرفية ==========
    function initializePuzzle() {
        const puzzlePieces = document.querySelectorAll('.cognitive-piece');
        const puzzleMessage = document.getElementById('puzzleMessage');
        let selectedPieces = [];
        
        if (!puzzlePieces.length) return;
        
        puzzlePieces.forEach(piece => {
            piece.addEventListener('click', function() {
                const pieceId = this.getAttribute('data-piece');
                
                if (selectedPieces.includes(pieceId)) {
                    // إزالة إذا كانت مختارة بالفعل
                    selectedPieces = selectedPieces.filter(id => id !== pieceId);
                    this.classList.remove('active');
                    this.style.borderColor = 'rgba(255, 140, 0, 0.3)';
                    this.style.backgroundColor = 'var(--cognitive-light)';
                    this.style.color = 'var(--text-cognitive-primary)';
                } else {
                    // إضافة إذا لم تكن مختارة
                    selectedPieces.push(pieceId);
                    this.classList.add('active');
                    this.style.borderColor = 'var(--cognitive-accent-orange)';
                    this.style.backgroundColor = 'rgba(255, 140, 0, 0.2)';
                    this.style.color = 'var(--cognitive-accent-orange)';
                }
                
                // عرض رسالة معرفية بناء على التحديد
                if (selectedPieces.length === 0) {
                    puzzleMessage.textContent = '';
                    puzzleMessage.style.color = 'var(--text-cognitive-secondary)';
                } else if (selectedPieces.length === 1) {
                    puzzleMessage.textContent = 'Piece selected. The pattern begins.';
                } else if (selectedPieces.length === 2) {
                    puzzleMessage.textContent = 'Two fragments connected. Meaning emerges.';
                } else if (selectedPieces.length === 3) {
                    puzzleMessage.textContent = 'Pattern taking shape. Understanding dawns.';
                } else if (selectedPieces.length === 4) {
                    puzzleMessage.textContent = 'Almost complete. The truth approaches.';
                } else if (selectedPieces.length === 5) {
                    puzzleMessage.textContent = 'Cognitive pattern complete. The maze accepts you.';
                    puzzleMessage.style.color = 'var(--cognitive-accent-orange)';
                    
                    // تأثير خاص عند اكتمال اللغز
                    puzzleMessage.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        puzzleMessage.style.transform = 'scale(1)';
                    }, 300);
                    
                    // تأثير صوتي بسيط
                    playCognitiveSound('complete');
                }
                
                // تأثير صوتي
                playCognitiveSound('click');
            });
        });
    }
    
    // ========== التفاعل الصوتي المعرفي ==========
    function initializeVoiceInteraction() {
        const voiceIndicator = document.getElementById('voiceIndicator');
        const voiceToggle = document.getElementById('voiceToggle');
        let isListening = false;
        let recognition;
        
        if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
            if (voiceIndicator) voiceIndicator.style.display = 'none';
            if (voiceToggle) voiceToggle.style.display = 'none';
            return;
        }
        
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.continuous = false;
        recognition.interimResults = false;
        
        recognition.onstart = function() {
            isListening = true;
            if (voiceIndicator) {
                voiceIndicator.classList.add('listening');
                voiceIndicator.innerHTML = '<i class="fas fa-circle"></i>';
            }
            showCognitiveNotification('Listening... Speak your command.', 'voice');
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
            showCognitiveNotification('Voice recognition failed. Try again.', 'error');
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
                    recognition.start();
                } catch (e) {
                    console.log("Speech recognition error:", e);
                    showCognitiveNotification('Cannot access microphone. Check permissions.', 'error');
                }
            } else {
                recognition.stop();
            }
        }
        
        function processVoiceCommand(transcript) {
            console.log('Voice command:', transcript);
            
            if (transcript.includes('enter') || transcript.includes('unknown') || transcript.includes('door')) {
                document.getElementById('enterUnknown').click();
            } else if (transcript.includes('scroll') || transcript.includes('down')) {
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            } else if (transcript.includes('up')) {
                window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
            } else if (transcript.includes('home') || transcript.includes('top')) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (transcript.includes('projects') || transcript.includes('work')) {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (transcript.includes('contact') || transcript.includes('connect')) {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // ردود معرفية عشوائية
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
            const interactiveElements = document.querySelectorAll('.cognitive-piece, .cognitive-chip, .cognitive-project');
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
                } else {
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
    
    // ========== تفاصيل المشروع المعرفي ==========
    const projectDetails = {
        project1: {
            title: "Photographer's Paradox",
            status: "Active Paradox",
            type: "Photography Portfolio",
            date: "January 2025",
            client: "Professional Photographer",
            description: "A photography portfolio designed to confuse conventional expectations, yet achieved a 300% increase in conversion rates. The design intentionally breaks traditional rules to create a memorable experience.",
            features: [
                "Interactive gallery with unconventional navigation",
                "Dynamic filtering by emotional categories",
                "Detailed view with cognitive associations",
                "Fully responsive across all devices",
                "High-speed loading with optimized assets",
                "Intuitive yet unconventional user interface"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "Cognitive Design", "Paradox Theory"],
            link: "https://portfoliojo.github.io/test1/"
        },
        project2: {
            title: "Personal Maze",
            status: "Live Contradiction",
            type: "Personal Portfolio",
            date: "December 2024",
            client: "Creative Professional",
            description: "A personal portfolio designed as a cognitive maze that should lose visitors, yet increased engagement by 240%. The navigation challenges users to explore rather than follow.",
            features: [
                "Non-linear navigation system",
                "Interactive career timeline",
                "Client testimonials with emotional mapping",
                "Mini-blog with thought fragments",
                "Direct communication channels",
                "Three-dimensional design elements"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Swiper.js", "Maze Design"],
            link: "https://portfoliojo.github.io/test7/"
        },
        project3: {
            title: "Developer's Silence",
            status: "Silent Interface",
            type: "Developer Portfolio",
            date: "November 2024",
            client: "Web Developer",
            description: "A developer portfolio that removes conventional elements to speak through absence. By reducing visual noise, the design communicates technical skills more effectively.",
            features: [
                "Minimalist project showcase",
                "Interactive technical skills display",
                "Experience history with depth",
                "Certifications and courses",
                "Fast communication form",
                "Search engine optimized structure"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Font Awesome", "Silent Design"],
            link: "https://portfoliojo.github.io/test4/"
        }
    };
    
    window.showProjectDetails = function(projectId) {
        const project = projectDetails[projectId];
        const modalBody = document.getElementById('modalBody');
        
        if (!project || !modalBody) return;
        
        const detailsHTML = `
            <div class="project-details">
                <h3>${project.title}</h3>
                
                <div class="project-meta">
                    <div class="meta-item">
                        <i class="fas fa-circle"></i>
                        <span>Status: ${project.status}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-tag"></i>
                        <span>Type: ${project.type}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>Date: ${project.date}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-user"></i>
                        <span>Client: ${project.client}</span>
                    </div>
                </div>
                
                <div class="project-description">
                    <p>${project.description}</p>
                </div>
                
                <div class="project-features">
                    <h4>Cognitive Features</h4>
                    <ul>
                        ${project.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                
                <a href="${project.link}" target="_blank" class="cognitive-project-btn">
                    <i class="fas fa-external-link-alt"></i>
                    Experience Live Paradox
                </a>
            </div>
        `;
        
        modalBody.innerHTML = detailsHTML;
        document.getElementById('projectModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        playCognitiveSound('modal');
    };
    
    window.closeProjectModal = function() {
        document.getElementById('projectModal').style.display = 'none';
        document.body.style.overflow = 'auto';
        playCognitiveSound('close');
    };
    
    // إغلاق النافذة عند النقر خارج المحتوى
    document.getElementById('projectModal')?.addEventListener('click', function(e) {
        if (e.target === this) {
            closeProjectModal();
        }
    });
    
    // ========== الدخول إلى المجهول ==========
    const enterUnknownBtn = document.getElementById('enterUnknown');
    if (enterUnknownBtn) {
        enterUnknownBtn.addEventListener('click', function() {
            openUnknownModal();
        });
    }
    
    function openUnknownModal() {
        const unknownModal = document.getElementById('unknownModal');
        if (unknownModal) {
            unknownModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            playCognitiveSound('unknown');
            
            // تأثيرات بصرية إضافية
            document.body.style.backgroundColor = '#080808';
            document.documentElement.style.cursor = 'wait';
            
            // إعادة الحالة بعد الإغلاق
            setTimeout(() => {
                document.documentElement.style.cursor = '';
            }, 100);
        }
    }
    
    window.closeUnknownModal = function() {
        const unknownModal = document.getElementById('unknownModal');
        if (unknownModal) {
            unknownModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            document.body.style.backgroundColor = '';
            playCognitiveSound('return');
        }
    };
    
    // إغلاق نافذة المجهول عند النقر خارج المحتوى
    document.getElementById('unknownModal')?.addEventListener('click', function(e) {
        if (e.target === this) {
            closeUnknownModal();
        }
    });
    
    // ========== نافذة العرض الكامل ==========
    window.openFullscreen = function(url, title) {
        const fullscreenModal = document.getElementById('fullscreenModal');
        const fullscreenFrame = document.getElementById('fullscreenFrame');
        const fullscreenTitle = document.getElementById('fullscreenTitle');
        
        if (!fullscreenModal || !fullscreenFrame) return;
        
        fullscreenFrame.src = url;
        fullscreenTitle.textContent = title || 'Cognitive Experience';
        fullscreenModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        playCognitiveSound('expand');
    };
    
    window.closeFullscreen = function() {
        const fullscreenModal = document.getElementById('fullscreenModal');
        const fullscreenFrame = document.getElementById('fullscreenFrame');
        
        if (fullscreenModal && fullscreenFrame) {
            fullscreenModal.classList.remove('active');
            fullscreenFrame.src = '';
            document.body.style.overflow = 'auto';
            playCognitiveSound('close');
        }
    };
    
    // إغلاق نافذة العرض الكامل عند النقر خارجها
    document.getElementById('fullscreenModal')?.addEventListener('click', function(e) {
        if (e.target === this) {
            closeFullscreen();
        }
    });
    
    // إغلاق النوافذ بمفتاح ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const fullscreenModal = document.getElementById('fullscreenModal');
            if (fullscreenModal && fullscreenModal.classList.contains('active')) {
                closeFullscreen();
            }
            
            const projectModal = document.getElementById('projectModal');
            if (projectModal && projectModal.style.display === 'flex') {
                closeProjectModal();
            }
            
            const unknownModal = document.getElementById('unknownModal');
            if (unknownModal && unknownModal.classList.contains('active')) {
                closeUnknownModal();
            }
        }
    });
    
    // ========== نموذج الاتصال المعرفي ==========
    const cognitiveForm = document.getElementById('cognitiveForm');
    
    if (cognitiveForm) {
        cognitiveForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع بيانات النموذج
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // هنا يمكنك إضافة كود لإرسال البيانات إلى الخادم
            // مثال: استخدام Fetch API
            
            // عرض رسالة نجاح معرفية
            showCognitiveNotification('Thought transmission successful. We will connect within 24 cognitive hours.', 'success');
            
            // إعادة تعيين النموذج
            this.reset();
        });
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
            
            if (type === 'click') {
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
            } else if (type === 'complete') {
                // نغمة إكمال
                for (let i = 0; i < 3; i++) {
                    setTimeout(() => {
                        const oscillator = audioContext.createOscillator();
                        const gainNode = audioContext.createGain();
                        
                        oscillator.connect(gainNode);
                        gainNode.connect(audioContext.destination);
                        
                        oscillator.frequency.setValueAtTime(523.25 + i * 100, audioContext.currentTime);
                        oscillator.frequency.exponentialRampToValueAtTime(261.63 + i * 50, audioContext.currentTime + 0.3);
                        
                        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
                        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
                        
                        oscillator.start();
                        oscillator.stop(audioContext.currentTime + 0.3);
                    }, i * 100);
                }
            } else if (type === 'unknown') {
                // صوت دخول المجهول
                for (let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        const oscillator = audioContext.createOscillator();
                        const gainNode = audioContext.createGain();
                        
                        oscillator.connect(gainNode);
                        gainNode.connect(audioContext.destination);
                        
                        oscillator.frequency.setValueAtTime(200 + i * 50, audioContext.currentTime);
                        oscillator.frequency.exponentialRampToValueAtTime(50 + i * 20, audioContext.currentTime + 0.5);
                        
                        gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
                        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
                        
                        oscillator.start();
                        oscillator.stop(audioContext.currentTime + 0.5);
                    }, i * 150);
                }
            } else if (type === 'expand') {
                // صوت التكبير
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2);
                
                gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                
                oscillator.start();
                oscillator.stop(audioContext.currentTime + 0.2);
            }
        } catch (e) {
            console.log("Audio not supported or error:", e);
        }
    }
    
    // ========== تفعيل شرائح الفلترة ==========
    const filterChips = document.querySelectorAll('.cognitive-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            // تبديل الحالة النشطة
            this.classList.toggle('active');
            
            // تأثير صوتي
            playCognitiveSound('click');
            
            // تأثير بصري
            if (this.classList.contains('active')) {
                this.style.animation = 'cognitive-shake 0.5s ease';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
            }
        });
    });
    
    // ========== تحميل الصور (إذا كانت موجودة) ==========
    function loadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // تهيئة تحميل الصور
    window.addEventListener('load', function() {
        setTimeout(initializeProjects, 1000);
        loadImages();
    });
});