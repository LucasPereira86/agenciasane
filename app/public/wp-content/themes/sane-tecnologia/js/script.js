/* ================================
   AGÊNCIA SANEADS - WORDPRESS THEME
   JavaScript Interactivity
   ================================ */

document.addEventListener('DOMContentLoaded', function () {
    // ===== DOM Elements =====
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactForm = document.getElementById('contactForm');
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // ===== Check for successful form submission =====
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('enviado') === '1') {
        showSuccessMessage();
        // Remove the parameter from URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 9999;">
                <div style="background: white; padding: 40px; border-radius: 20px; text-align: center; max-width: 400px; margin: 20px;">
                    <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #10b981 0%, #34d399 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" style="width: 40px; height: 40px;">
                            <path d="M20 6L9 17l-5-5"/>
                        </svg>
                    </div>
                    <h3 style="color: #1e293b; font-size: 24px; margin-bottom: 10px;">Mensagem Enviada!</h3>
                    <p style="color: #64748b; margin-bottom: 20px;">Recebemos sua solicitação e entraremos em contato em breve.</p>
                    <button onclick="this.closest('div').parentElement.remove()" style="background: linear-gradient(135deg, #f97316 0%, #fb923c 100%); color: white; border: none; padding: 12px 30px; border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer;">Fechar</button>
                </div>
            </div>
        `;
        document.body.appendChild(successDiv);
    }

    // ===== Header Scroll Effect =====
    let lastScrollY = window.scrollY;

    function handleScroll() {
        const currentScrollY = window.scrollY;

        // Add scrolled class for background
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    // ===== Mobile Menu Toggle =====
    function toggleMenu() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') &&
            !nav.contains(e.target) &&
            !hamburger.contains(e.target)) {
            toggleMenu();
        }
    });

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Scroll Animations (Intersection Observer) =====
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Handle staggered delays for child elements
                const delayedChildren = entry.target.querySelectorAll('.delay-1, .delay-2, .delay-3, .delay-4');
                delayedChildren.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, (index + 1) * 150);
                });
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // ===== Form Validation (visual feedback only) =====
    if (contactForm) {
        const formInputs = contactForm.querySelectorAll('input, select');

        // Real-time validation feedback
        formInputs.forEach(input => {
            input.addEventListener('blur', function () {
                validateField(this);
            });

            input.addEventListener('input', function () {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });

        function validateField(field) {
            const parent = field.parentElement;
            let isValid = true;

            // Remove previous error state
            parent.classList.remove('error');

            // Check required fields
            if (field.required && !field.value.trim()) {
                isValid = false;
            }

            // Email validation
            if (field.type === 'email' && field.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    isValid = false;
                }
            }

            // Phone validation (Brazilian format)
            if (field.type === 'tel' && field.value) {
                const phoneRegex = /^[\d\s()+-]{10,}$/;
                if (!phoneRegex.test(field.value)) {
                    isValid = false;
                }
            }

            if (!isValid) {
                parent.classList.add('error');
            }

            return isValid;
        }

        // Form submission validation
        contactForm.addEventListener('submit', function (e) {
            let isFormValid = true;

            // Validate all fields
            formInputs.forEach(input => {
                if (!validateField(input)) {
                    isFormValid = false;
                }
            });

            if (!isFormValid) {
                e.preventDefault();
                // Show first error
                const firstError = contactForm.querySelector('.form-group.error');
                if (firstError) {
                    firstError.querySelector('input, select').focus();
                }
            } else {
                e.preventDefault(); // Prevent default submission

                // Show loading state
                const submitBtn = contactForm.querySelector('.btn-submit');
                const originalBtnContent = submitBtn.innerHTML;

                submitBtn.innerHTML = `
                    <svg class="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;">
                        <circle cx="12" cy="12" r="10" stroke-opacity="0.3"/>
                        <path d="M12 2a10 10 0 0 1 10 10"/>
                    </svg>
                    <span>Enviando...</span>
                `;
                submitBtn.disabled = true;

                // Prepare FormData
                const formData = new FormData(contactForm);

                // Submit via Fetch
                fetch("https://formsubmit.co/ajax/sane.ads.sites@gmail.com", {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        }
                        throw new Error('Falha no envio');
                    })
                    .then(data => {
                        // Success
                        showSuccessMessage();
                        contactForm.reset();
                        submitBtn.innerHTML = originalBtnContent;
                        submitBtn.disabled = false;
                    })
                    .catch(error => {
                        // Error
                        console.error('Erro:', error);
                        alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou entre em contato pelo telefone.");
                        submitBtn.innerHTML = originalBtnContent;
                        submitBtn.disabled = false;
                    });
            }
        });
    }

    // ===== Phone Input Mask (Brazilian Format) =====
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length <= 11) {
                if (value.length <= 2) {
                    value = value.replace(/^(\d{0,2})/, '($1');
                } else if (value.length <= 7) {
                    value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
                } else {
                    value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
                }
            }

            e.target.value = value;
        });
    }

    // ===== Animated Counter (for metrics/stats) =====
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);

        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }

        updateCounter();
    }

    // Observe and animate counters when visible
    const counters = document.querySelectorAll('[data-counter]');
    if (counters.length) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.counter);
                    animateCounter(entry.target, target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    // ===== Parallax Effect for Hero Shapes =====
    const shapes = document.querySelectorAll('.shape');
    if (shapes.length && window.innerWidth > 768) {
        let ticking = false;

        window.addEventListener('mousemove', (e) => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
                    const moveY = (e.clientY - window.innerHeight / 2) * 0.02;

                    shapes.forEach((shape, index) => {
                        const factor = (index + 1) * 0.5;
                        shape.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
                    });

                    ticking = false;
                });

                ticking = true;
            }
        });
    }

    // ===== Active Navigation Link Highlighting =====
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink, { passive: true });

    // ===== Add Error Styles =====
    const style = document.createElement('style');
    style.textContent = `
        .form-group.error input,
        .form-group.error select {
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1) !important;
        }
        
        .form-group.error label {
            color: #ef4444 !important;
        }
        
        .nav-link.active {
            color: #ffffff !important;
        }
        
        .nav-link.active::after {
            width: 100%;
        }
        
        .btn-submit:disabled {
            opacity: 0.8;
            cursor: not-allowed;
        }
        
        .spinner {
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    console.log('🚀 Agência SaneADS - WordPress Theme Loaded');
});
