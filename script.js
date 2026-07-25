/* =====================================================
   SASADI UPESHIKA — LILY GARDEN PORTFOLIO
   Interactive JavaScript
   ===================================================== */

(function () {
    'use strict';

    // ==========================================
    // 1. ANIMATED LILY CANVAS BACKGROUND
    // ==========================================
    const canvas = document.getElementById('lily-canvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    let lilies = [];
    let petals = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    // Lily Flower Class
    class Lily {
        constructor(x, y, scale) {
            this.x = x;
            this.y = y;
            this.scale = scale;
            this.angle = Math.random() * Math.PI * 2;
            this.pulseSpeed = 0.005 + Math.random() * 0.005;
            this.pulsePhase = Math.random() * Math.PI * 2;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);

            const pulse = 1 + Math.sin(this.pulsePhase) * 0.03;
            ctx.scale(this.scale * pulse, this.scale * pulse);

            // Lily Petals
            const petalCount = 6;
            for (let i = 0; i < petalCount; i++) {
                ctx.rotate((Math.PI * 2) / petalCount);

                const grad = ctx.createLinearGradient(0, 0, 0, -60);
                grad.addColorStop(0, '#fbcfe8');
                grad.addColorStop(0.5, '#f472b6');
                grad.addColorStop(1, '#ffffff');

                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.quadraticCurveTo(-18, -35, 0, -65);
                ctx.quadraticCurveTo(18, -35, 0, 0);
                ctx.fillStyle = grad;
                ctx.shadowColor = 'rgba(236, 72, 153, 0.12)';
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            // Center Stamens
            for (let j = 0; j < 6; j++) {
                ctx.rotate((Math.PI * 2) / 6);
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(0, -20);
                ctx.strokeStyle = '#f59e0b';
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(0, -22, 3, 0, Math.PI * 2);
                ctx.fillStyle = '#d97706';
                ctx.fill();
            }

            // Inner core glow
            ctx.beginPath();
            ctx.arc(0, 0, 8, 0, Math.PI * 2);
            const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 8);
            coreGrad.addColorStop(0, '#fef08a');
            coreGrad.addColorStop(1, '#fde047');
            ctx.fillStyle = coreGrad;
            ctx.fill();

            ctx.restore();
        }

        update() {
            this.angle += 0.0008;
            this.pulsePhase += this.pulseSpeed;
        }
    }

    // Floating Petal Class
    class Petal {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : -20;
            this.size = 8 + Math.random() * 14;
            this.speedY = 0.4 + Math.random() * 0.8;
            this.speedX = Math.sin(Math.random() * Math.PI) * 0.3;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.02;
            this.opacity = 0.15 + Math.random() * 0.35;
            this.hue = Math.random() > 0.5 ? 330 : 280; // pink or purple
        }

        update() {
            this.y += this.speedY;
            this.x += Math.sin(this.y * 0.008) * 0.6 + this.speedX;
            this.rotation += this.rotSpeed;

            if (this.y > height + 20) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.globalAlpha = this.opacity;

            const grad = ctx.createLinearGradient(0, 0, this.size, this.size);
            if (this.hue === 330) {
                grad.addColorStop(0, '#fbcfe8');
                grad.addColorStop(1, '#f472b6');
            } else {
                grad.addColorStop(0, '#e9d5ff');
                grad.addColorStop(1, '#c084fc');
            }

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(this.size, 0, this.size, this.size);
            ctx.quadraticCurveTo(0, this.size, 0, 0);
            ctx.fillStyle = grad;
            ctx.fill();

            ctx.restore();
        }
    }

    // Initialize Garden
    function initGarden() {
        lilies = [
            new Lily(80, 120, 0.65),
            new Lily(width - 100, 160, 0.75),
            new Lily(120, height - 150, 0.8),
            new Lily(width - 120, height - 200, 0.7),
            new Lily(width * 0.5, 80, 0.5),
        ];

        petals = [];
        const petalCount = Math.min(30, Math.floor(width / 50));
        for (let i = 0; i < petalCount; i++) {
            petals.push(new Petal());
        }
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Soft ambient glow circles
        ctx.fillStyle = 'rgba(253, 242, 248, 0.4)';
        ctx.beginPath();
        ctx.arc(width * 0.15, height * 0.25, 280, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(243, 232, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(width * 0.85, height * 0.7, 220, 0, Math.PI * 2);
        ctx.fill();

        // Draw Lilies
        lilies.forEach(lily => {
            lily.update();
            lily.draw();
        });

        // Draw Floating Petals
        petals.forEach(petal => {
            petal.update();
            petal.draw();
        });

        requestAnimationFrame(animate);
    }

    initGarden();
    animate();

    window.addEventListener('resize', () => {
        initGarden();
    });


    // ==========================================
    // 2. NAVIGATION
    // ==========================================
    const nav = document.getElementById('main-nav');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    const sections = document.querySelectorAll('section[id]');

    // Scroll-based nav styling
    function updateNav() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    // Active link tracking
    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    }

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });


    // ==========================================
    // 3. SCROLL PROGRESS BAR
    // ==========================================
    const scrollProgress = document.getElementById('scroll-progress');

    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollProgress.style.width = progress + '%';
    }


    // ==========================================
    // 4. BACK TO TOP BUTTON
    // ==========================================
    const backToTop = document.getElementById('back-to-top');

    function updateBackToTop() {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // ==========================================
    // 5. SCROLL INDICATOR FADE
    // ==========================================
    const scrollIndicator = document.getElementById('scroll-indicator');

    function updateScrollIndicator() {
        if (scrollIndicator) {
            scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '0.6';
        }
    }


    // ==========================================
    // 6. SCROLL REVEAL ANIMATIONS
    // ==========================================
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(el => scrollObserver.observe(el));


    // ==========================================
    // 7. COUNTER ANIMATION
    // ==========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;

        const statsSection = document.querySelector('.hero-stats');
        if (!statsSection) return;

        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            countersAnimated = true;

            statNumbers.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'), 10);
                let current = 0;
                const duration = 1500;
                const increment = target / (duration / 16);

                function updateCounter() {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + '+';
                    }
                }
                requestAnimationFrame(updateCounter);
            });
        }
    }


    // ==========================================
    // 8. TILT EFFECT ON DEGREE CARDS (Desktop)
    // ==========================================
    const degreeCards = document.querySelectorAll('.degree-card');

    degreeCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * -4;
            const rotateY = (x - centerX) / centerX * 4;

            card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });


    // ==========================================
    // 9. CONSOLIDATED SCROLL HANDLER
    // ==========================================
    let ticking = false;

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateNav();
                updateActiveLink();
                updateScrollProgress();
                updateBackToTop();
                updateScrollIndicator();
                animateCounters();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial calls
    updateNav();
    updateActiveLink();
    updateScrollProgress();
    animateCounters();

})();
