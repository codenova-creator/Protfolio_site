# Portfolio Website Code for Liyanapathiranage Sasadi Upeshika

Below is the complete, self-contained single-file HTML (including CSS styling and dynamic JavaScript interactive elements) designed with an elegant, modern **Lily Garden** aesthetic. 

You can save this code as `index.html` and open it directly in any web browser!

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sasadi Upeshika | Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            --primary: #7c3aed;
            --primary-light: #ddd6fe;
            --accent-pink: #f472b6;
            --accent-rose: #f43f5e;
            --accent-soft: #fbcfe8;
            --bg-cream: #fdfbf7;
            --bg-card: rgba(255, 255, 255, 0.85);
            --text-main: #1f2937;
            --text-muted: #6b7280;
            --border: #f3e8ff;
            --shadow-soft: 0 10px 30px -5px rgba(124, 58, 237, 0.08);
            --shadow-hover: 0 20px 40px -10px rgba(124, 58, 237, 0.15);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: var(--bg-cream);
            color: var(--text-main);
            overflow-x: hidden;
            line-height: 1.6;
            position: relative;
        }

        /* Animated Lily Garden Canvas Background */
        #lily-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1;
            pointer-events: none;
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 1100px;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.6);
            border-radius: 50px;
            padding: 12px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }

        .logo {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            font-size: 1.3rem;
            color: var(--primary);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .nav-links {
            display: flex;
            gap: 24px;
            list-style: none;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-main);
            font-weight: 500;
            font-size: 0.95rem;
            transition: all 0.3s ease;
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            padding: 140px 20px 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
        }

        .hero-content {
            max-width: 850px;
            z-index: 1;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #fce7f3 0%, #e9d5ff 100%);
            color: #86198f;
            padding: 8px 20px;
            border-radius: 30px;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 24px;
            border: 1px solid rgba(255,255,255,0.8);
            box-shadow: 0 2px 10px rgba(192, 38, 211, 0.1);
        }

        .hero h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3.5rem;
            line-height: 1.2;
            color: #1e1b4b;
            margin-bottom: 16px;
            font-weight: 700;
        }

        .hero h1 span {
            background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero p {
            font-size: 1.2rem;
            color: var(--text-muted);
            margin-bottom: 32px;
            max-width: 650px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-buttons {
            display: flex;
            gap: 16px;
            justify-content: center;
            align-items: center;
        }

        .btn {
            padding: 14px 32px;
            border-radius: 30px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--primary) 0%, #a855f7 100%);
            color: white;
            box-shadow: 0 10px 25px -5px rgba(124, 58, 237, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px -5px rgba(124, 58, 237, 0.5);
        }

        .btn-secondary {
            background: white;
            color: var(--text-main);
            border: 1px solid var(--border);
            box-shadow: var(--shadow-soft);
        }

        .btn-secondary:hover {
            transform: translateY(-3px);
            border-color: var(--primary-light);
            color: var(--primary);
        }

        /* Sections Header */
        .section-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-header h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.4rem;
            color: #1e1b4b;
            margin-bottom: 10px;
        }

        .section-header p {
            color: var(--text-muted);
            font-size: 1.05rem;
        }

        /* Container */
        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 80px 20px;
        }

        /* Highlights Grid (BSc & HND) */
        .degree-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
            margin-bottom: 60px;
        }

        .degree-card {
            background: var(--bg-card);
            backdrop-filter: blur(10px);
            border-radius: 24px;
            padding: 32px;
            border: 1px solid rgba(255,255,255,0.8);
            box-shadow: var(--shadow-soft);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .degree-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, #a855f7, #ec4899);
        }

        .degree-card:hover {
            transform: translateY(-6px);
            box-shadow: var(--shadow-hover);
        }

        .degree-icon {
            width: 60px;
            height: 60px;
            border-radius: 18px;
            background: #f3e8ff;
            color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-bottom: 20px;
        }

        .degree-card h3 {
            font-size: 1.4rem;
            color: #1e1b4b;
            margin-bottom: 8px;
        }

        .degree-card p {
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        /* Diplomas Grid */
        .diploma-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }

        .diploma-card {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.9);
            border-radius: 18px;
            padding: 22px;
            display: flex;
            align-items: center;
            gap: 16px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.02);
            transition: all 0.3s ease;
        }

        .diploma-card:hover {
            background: white;
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(168, 85, 247, 0.1);
            border-color: var(--primary-light);
        }

        .diploma-icon {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            background: #fce7f3;
            color: #db2777;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            flex-shrink: 0;
        }

        .diploma-info h4 {
            font-size: 1rem;
            font-weight: 600;
            color: #374151;
            line-height: 1.3;
        }

        .diploma-info span {
            font-size: 0.8rem;
            color: #9ca3af;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 600;
        }

        /* Lily Feature Section */
        .lily-feature {
            background: linear-gradient(135deg, rgba(253, 242, 248, 0.9) 0%, rgba(243, 232, 255, 0.9) 100%);
            border-radius: 30px;
            padding: 50px;
            margin: 60px 0;
            display: flex;
            align-items: center;
            gap: 40px;
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: var(--shadow-soft);
        }

        .lily-feature-text {
            flex: 1;
        }

        .lily-feature-text h3 {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            color: #701a75;
            margin-bottom: 15px;
        }

        .lily-feature-text p {
            color: #4c1d95;
            font-size: 1.05rem;
            line-height: 1.7;
        }

        /* Contact Section */
        .contact-card {
            background: linear-gradient(135deg, #1e1b4b 0%, #311042 100%);
            border-radius: 30px;
            padding: 60px 40px;
            color: white;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(30, 27, 75, 0.2);
        }

        .contact-card h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            margin-bottom: 15px;
        }

        .contact-card p {
            color: #c084fc;
            margin-bottom: 40px;
            font-size: 1.1rem;
        }

        .contact-details {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }

        .contact-item {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(10px);
            padding: 20px 30px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 15px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            text-decoration: none;
            color: white;
            transition: all 0.3s ease;
        }

        .contact-item:hover {
            background: rgba(255, 255, 255, 0.18);
            transform: translateY(-4px);
        }

        .contact-item i {
            font-size: 1.4rem;
            color: #f472b6;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 30px;
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.4rem; }
            .nav-links { display: none; }
            .lily-feature { flex-direction: column; text-align: center; padding: 30px; }
            .contact-details { flex-direction: column; }
        }
    </style>
</head>
<body>

    <!-- Animated Lily Canvas -->
    <canvas id="lily-canvas"></canvas>

    <!-- Navigation -->
    <nav>
        <a href="#" class="logo">
            <i class="fa-solid font-awesome-logo-full"></i>
            <span>Sasadi.</span>
        </a>
        <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#diplomas">Diplomas</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="about">
        <div class="hero-content">
            <div class="badge">
                <i class="fa-solid fa-seedling"></i> Welcome to My Portfolio
            </div>
            <h1>Liyanapathiranage<br><span>Sasadi Upeshika</span></h1>
            <p>A multifaceted professional bridging Information Technology, Behavioral Sciences, Business Management, and Legal Studies.</p>
            <div class="cta-buttons">
                <a href="#contact" class="btn btn-primary"><i class="fa-solid fa-paper-plane"></i> Get in Touch</a>
                <a href="#education" class="btn btn-secondary"><i class="fa-solid fa-graduation-cap"></i> Qualifications</a>
            </div>
        </div>
    </section>

    <!-- Main Content Container -->
    <div class="container">

        <!-- Degree Highlights -->
        <section id="education">
            <div class="section-header">
                <h2>Higher Education</h2>
                <p>Core academic qualifications in Information Technology</p>
            </div>
            <div class="degree-grid">
                <div class="degree-card">
                    <div class="degree-icon">
                        <i class="fa-solid fa-laptop-code"></i>
                    </div>
                    <h3>BSc Hons in Information Technology</h3>
                    <p>Comprehensive specialization in technology, software development, systems analysis, and modern tech solutions.</p>
                </div>
                <div class="degree-card">
                    <div class="degree-icon">
                        <i class="fa-solid fa-network-wired"></i>
                    </div>
                    <h3>HND in Information Technology</h3>
                    <p>Higher National Diploma focusing on core IT infrastructure, computer science fundamentals, and practical software engineering.</p>
                </div>
            </div>
        </section>

        <!-- Decorative Lily Interlude -->
        <div class="lily-feature">
            <div class="lily-feature-text">
                <h3><i class="fa-solid fa-spa"></i> Blooming Wisdom & Knowledge</h3>
                <p>Much like a serene lily garden blooming with elegance and grace, continuous learning and personal development allow us to flourish across diverse fields—from technical sciences to human care and leadership.</p>
            </div>
        </div>

        <!-- Diplomas Section -->
        <section id="diplomas">
            <div class="section-header">
                <h2>Diplomas & Certifications</h2>
                <p>Extensive multidisciplinary expertise across varied domains</p>
            </div>
            
            <div class="diploma-grid">
                <div class="diploma-card">
                    <div class="diploma-icon"><i class="fa-solid fa-brain"></i></div>
                    <div class="diploma-info">
                        <span>Diploma</span>
                        <h4>Psychology and Counseling</h4>
                    </div>
                </div>

                <div class="diploma-card">
                    <div class="diploma-icon"><i class="fa-solid fa-users-gear"></i></div>
                    <div class="diploma-info">
                        <span>Diploma</span>
                        <h4>HRM & Administration Law</h4>
                    </div>
                </div>

                <div class="diploma-card">
                    <div class="diploma-icon"><i class="fa-solid fa-language"></i></div>
                    <div class="diploma-info">
                        <span>Diploma</span>
                        <h4>English Language</h4>
                    </div>
                </div>

                <div class="diploma-card">
                    <div class="diploma-icon"><i class="fa-solid fa-magnifying-glass-chart"></i></div>
                    <div class="diploma-info">
                        <span>Diploma</span>
                        <h4>Sociology & Research Methodology</h4>
                    </div>
                </div>

                <div class="diploma-card">
                    <div class="diploma-icon"><i class="fa-solid fa-shield-halved"></i></div>
                    <div class="diploma-info">
                        <span>Diploma</span>
                        <h4>Cyber Security & Ethical Hacking</h4>
                    </div>
                </div>

                <div class="diploma-card">
                    <div class="diploma-icon"><i class="fa-solid fa-chalkboard-user"></i></div>
                    <div class="diploma-info">
                        <span>Diploma</span>
                        <h4>Japanese Teaching as a Foreign Language</h4>
                    </div>
                </div>

                <div class="diploma-card">
                    <div class="diploma-icon"><i class="fa-solid fa-chart-line"></i></div>
                    <div class="diploma-info">
                        <span>Diploma</span>
                        <h4>Marketing Management</h4>
                    </div>
                </div>

                <div class="diploma-card">
                    <div class="diploma-icon"><i class="fa-solid fa-briefcase"></i></div>
                    <div class="diploma-info">
                        <span>Diploma</span>
                        <h4>Business Management</h4>
                    </div>
                </div>

                <div class="diploma-card">
                    <div class="diploma-icon"><i class="fa-solid fa-scale-balanced"></i></div>
                    <div class="diploma-info">
                        <span>Diploma</span>
                        <h4>Law & Administration Studies</h4>
                    </div>
                </div>

                <div class="diploma-card">
                    <div class="diploma-icon"><i class="fa-solid fa-handcuffs"></i></div>
                    <div class="diploma-info">
                        <span>Diploma</span>
                        <h4>Criminology</h4>
                    </div>
                </div>

                <div class="diploma-card">
                    <div class="diploma-icon"><i class="fa-solid fa-house-chimney-crack"></i></div>
                    <div class="diploma-info">
                        <span>Diploma</span>
                        <h4>Disaster Management</h4>
                    </div>
                </div>

                <div class="diploma-card">
                    <div class="diploma-icon"><i class="fa-solid fa-child"></i></div>
                    <div class="diploma-info">
                        <span>Diploma</span>
                        <h4>Child Counseling</h4>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" style="margin-top: 80px;">
            <div class="contact-card">
                <h2>Let's Connect</h2>
                <p>Feel free to reach out for collaborations, inquiries, or professional networking.</p>
                
                <div class="contact-details">
                    <a href="mailto:sasadiupeshika@iclud.com" class="contact-item">
                        <i class="fa-solid fa-envelope"></i>
                        <div style="text-align: left;">
                            <div style="font-size: 0.8rem; color: #a7f3d0;">Email</div>
                            <div>sasadiupeshika@iclud.com</div>
                        </div>
                    </a>

                    <a href="tel:+94767911486" class="contact-item">
                        <i class="fa-solid fa-phone"></i>
                        <div style="text-align: left;">
                            <div style="font-size: 0.8rem; color: #a7f3d0;">Mobile</div>
                            <div>+94 76 791 1486</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>

    </div>

    <!-- Footer -->
    <footer>
        <p>&copy; 2026 Liyanapathiranage Sasadi Upeshika. All rights reserved.</p>
    </footer>

    <!-- Interactive Canvas JavaScript (Lily Garden Background) -->
    <script>
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

        // Canvas Lily Flowers Draw Function
        class Lily {
            constructor(x, y, scale) {
                this.x = x;
                this.y = y;
                this.scale = scale;
                this.angle = Math.random() * Math.PI * 2;
                this.pulseSpeed = 0.005 + Math.random() * 0.005;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);
                ctx.scale(this.scale, this.scale);

                // Lily Petals
                const petalCount = 6;
                for (let i = 0; i < petalCount; i++) {
                    ctx.rotate((Math.PI * 2) / petalCount);
                    
                    // Gradient for soft lily petals
                    let grad = ctx.createLinearGradient(0, 0, 0, -60);
                    grad.addColorStop(0, '#fbcfe8');
                    grad.addColorStop(0.5, '#f472b6');
                    grad.addColorStop(1, '#ffffff');

                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.quadraticCurveTo(-18, -35, 0, -65);
                    ctx.quadraticCurveTo(18, -35, 0, 0);
                    ctx.fillStyle = grad;
                    ctx.shadowColor = 'rgba(236, 72, 153, 0.15)';
                    ctx.shadowBlur = 10;
                    ctx.fill();
                }

                // Center Stamen
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
                ctx.fillStyle = '#fef08a';
                ctx.fill();

                ctx.restore();
            }

            update() {
                this.angle += 0.001;
            }
        }

        // Floating Petals
        class Petal {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = -20;
                this.size = 8 + Math.random() * 12;
                this.speedY = 0.5 + Math.random() * 1;
                this.speedX = Math.sin(Math.random() * Math.PI) * 0.5;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotSpeed = (Math.random() - 0.5) * 0.02;
                this.opacity = 0.3 + Math.random() * 0.5;
            }

            update() {
                this.y += this.speedY;
                this.x += Math.sin(this.y * 0.01) * 0.5 + this.speedX;
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

                let grad = ctx.createLinearGradient(0, 0, this.size, this.size);
                grad.addColorStop(0, '#fbcfe8');
                grad.addColorStop(1, '#f472b6');

                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.quadraticCurveTo(this.size, 0, this.size, this.size);
                ctx.quadraticCurveTo(0, this.size, 0, 0);
                ctx.fillStyle = grad;
                ctx.fill();

                ctx.restore();
            }
        }

        // Generate static lily flowers in decorative positions
        function initGarden() {
            lilies = [
                new Lily(80, 120, 0.7),
                new Lily(width - 100, 180, 0.8),
                new Lily(120, height - 150, 0.9),
                new Lily(width - 120, height - 200, 0.75)
            ];

            petals = [];
            for (let i = 0; i < 25; i++) {
                petals.push(new Petal());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            // Subtle background glow circles
            ctx.fillStyle = 'rgba(253, 242, 248, 0.5)';
            ctx.beginPath();
            ctx.arc(width * 0.2, height * 0.3, 300, 0, Math.PI * 2);
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

        // Re-initialize garden layout on screen resize
        window.addEventListener('resize', () => {
            initGarden();
        });
    </script>
</body>
</html>
```
