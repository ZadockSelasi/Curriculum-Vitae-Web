import './style.css';

document.querySelector('#app').innerHTML = `
  <header id="header">
    <nav class="container">
      <div class="logo">LUIQUE<span>.</span></div>
      <ul class="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="menu-icons">
        <!-- Icons can go here -->
      </div>
    </nav>
  </header>

  <main>
    <section id="hero" class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <h4>HELLO, <span>MY NAME IS</span></h4>
            <h1 class="hero-name">
              <span>ABLEKPE</span>
              <span class="outline">ZADOCK</span>
              <span>SELASI</span>
            </h1>
            <p class="hero-title">I AM <strong>Tech Student | Founder | CEO | CFO</strong></p>
            <p class="hero-desc">
              Disciplined and highly motivated tech student with a passion for building impactful solutions through technology, design, and business leadership.
            </p>
            <div class="hero-btns">
              <a href="#" class="btn btn-primary">Download CV</a>
              <a href="#services" class="btn-text">MY SKILLS</a>
            </div>
          </div>
          <div class="hero-image-wrapper">
            <div class="hero-image-circle"></div>
            <img src="/assets/hero.png" alt="Ablekpe Zadock Selasi" class="hero-image">
            <div class="hero-stats">
              <div class="stat-card">
                <div class="stat-number">2 <span>+</span></div>
                <div class="stat-text">Years of<br>Experience</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">10 <span>+</span></div>
                <div class="stat-text">Completed<br>Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="about">
       <div class="container" style="padding: 100px 0; border-bottom: 1px solid #e5e1d8;">
         <div class="resume-grid">
           <div>
             <h2 style="font-size: 32px; margin-bottom: 30px;">ABOUT ME</h2>
             <p style="font-size: 18px; color: var(--text-muted); line-height: 1.8;">
               I am a disciplined and highly motivated tech student with a strong passion for building impactful solutions and contributing to societal development. I combine technical knowledge, design thinking, and business leadership to create value-driven projects. I am consistent, responsible, and committed to continuous growth, teamwork, and excellence in execution.
             </p>
           </div>
           <div style="display: flex; flex-direction: column; gap: 20px;">
              <div class="info-tag"><strong>LANGUAGES:</strong> English (Fluent), Local Dialect (Native)</div>
              <div class="info-tag"><strong>INTERESTS:</strong> Reading (Tech, Business, Personal Dev), Community Development</div>
           </div>
         </div>
       </div>
    </section>

    <section id="services" class="services">
      <div class="container">
        <div class="section-header">
          <h2>WHAT I DO</h2>
          <p>My Services</p>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <h4>WEB DEVELOPMENT</h4>
            <h3>Web Design & Logo</h3>
            <p>Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.</p>
            <a href="#" class="service-link">See Pricing <span>→</span></a>
            <div class="dot-pattern">
              ${Array(15).fill('<div class="dot"></div>').join('')}
            </div>
          </div>
          <div class="service-card">
            <h4>APPS DEVELOPMENT</h4>
            <h3>iOS & Android</h3>
            <p>Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.</p>
            <a href="#" class="service-link">See Pricing <span>→</span></a>
            <div class="dot-pattern">
              ${Array(15).fill('<div class="dot"></div>').join('')}
            </div>
          </div>
          <div class="service-card">
            <h4>GAME DEVELOPMENT</h4>
            <h3>Unity & Unreal Engine</h3>
            <p>Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games.</p>
            <a href="#" class="service-link">See Pricing <span>→</span></a>
            <div class="dot-pattern">
              ${Array(15).fill('<div class="dot"></div>').join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="skills">
      <div class="container">
        <div class="section-header">
          <h2>PROFESSIONAL SKILLS</h2>
          <p>My Talent</p>
        </div>
        <div class="skills-grid">
          <div class="skill-item">
            <div class="skill-info">
              <span>Frontend Development</span>
              <span>85%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 85%"></div>
            </div>
            <p>Able to build responsive and interactive web interfaces using modern technologies.</p>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span>UI/UX Design</span>
              <span>75%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 75%"></div>
            </div>
            <p>Focusing on user-centric design principles to create intuitive digital experiences.</p>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span>Technical & Business Analysis</span>
              <span>90%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 90%"></div>
            </div>
            <p>Analyzing complex systems and business requirements to provide effective solutions.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="resume">
      <div class="container">
        <div class="resume-grid">
          <div>
            <div class="resume-header">EXPERIENCE</div>
            <div class="resume-list">
              <div class="resume-item">
                <span class="date">2024 - Present</span>
                <h3>Founder / CEO</h3>
                <span class="company">EcclesiaBranx</span>
                <ul>
                  <li>Founded and lead the organization</li>
                  <li>Define vision, strategy, and growth direction</li>
                  <li>Oversee operations and team collaboration</li>
                  <li>Lead branding, client engagement, and business development</li>
                </ul>
              </div>
              <div class="resume-item">
                <span class="date">2024 - Present</span>
                <h3>Chief Financial Officer (CFO)</h3>
                <span class="company">Restart Digital Startup</span>
                <ul>
                  <li>Manage budgeting and financial planning</li>
                  <li>Track expenses and support sustainability</li>
                  <li>Provide financial insights for decision-making</li>
                  <li>Support strategic and operational planning</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div class="resume-header">EDUCATION</div>
            <div class="resume-list">
              <div class="resume-item">
                <span class="date">2024 - 2027</span>
                <h3>Computer Technology</h3>
                <span class="company">Kumasi Technical University</span>
                <p>High academic performance with a CGPA of <strong>3.9 / 4.0</strong></p>
                <ul style="margin-top: 15px;">
                   <li>Active leadership roles alongside academic studies</li>
                   <li>Specialized in Systems Analysis and Software Logic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="projects">
      <div class="container">
        <div class="section-header">
          <h2>PROJECTS</h2>
          <p>My Work</p>
        </div>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-img">Digital Branding</div>
            <div class="project-info">
              <h4>UI/UX & FRONTEND</h4>
              <h3>Web Solutions for Small Businesses</h3>
              <p>Tools: HTML, CSS, Design Tools, UI/UX Principles</p>
            </div>
          </div>
          <div class="project-card">
            <div class="project-img">Web Dev</div>
            <div class="project-info">
              <h4>COLLABORATIVE</h4>
              <h3>Ecclesia Brand Ecosystem</h3>
              <p>Tools: Javascript, React, Branding Strategies</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <h2>GET IN TOUCH</h2>
          <p>Contact Me</p>
        </div>
        <div class="contact-grid">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-icon">📍</div>
              <div class="contact-text">
                <h4>Location</h4>
                <p>Kumasi, Ghana</p>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-icon">📧</div>
              <div class="contact-text">
                <h4>Email</h4>
                <p>zadockselasi7@gmail.com</p>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-icon">📞</div>
              <div class="contact-text">
                <h4>Call Me</h4>
                <p>0532 539 051</p>
              </div>
            </div>
          </div>
          <div class="reference-box" style="background: rgba(255,255,255,0.05); padding: 40px; border-radius: 20px;">
            <h3 style="margin-bottom: 20px;">Reference</h3>
            <p style="font-style: italic; color: #ccc; margin-bottom: 20px;">"Reference available upon request"</p>
            <div style="display: flex; align-items: center; gap: 15px;">
               <div style="width: 50px; height: 50px; background: var(--primary); border-radius: 50%;"></div>
               <div>
                 <h4 style="margin: 0;">Haadi Mustapha</h4>
                 <p style="margin: 0; font-size: 14px; color: var(--primary);">CEO – Restart Digital</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p>&copy; 2026 Ablekpe Zadock Selasi. All rights reserved. Designed with Passion.</p>
    </div>
  </footer>
`;

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('#header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
