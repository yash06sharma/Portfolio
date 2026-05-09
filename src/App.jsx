import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaStar,
} from "react-icons/fa";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaAngular,
  FaDatabase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiLaravel,
  SiKubernetes,
  SiOpenai,
} from "react-icons/si";
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      title: "eEndorsement",
      desc: "A full-featured ecommerce platform with Stripe payment integration and admin dashboard.",
    },{
    title: "KeepMe Admin Panel",
    desc: "Developed a scalable admin dashboard for managing leads, customer interactions, analytics, and automated workflows for an AI-powered customer engagement platform.",
  },{
  title: "HR Management Platform",
  desc: "Developed real-time push notification and email notification systems for an HR management platform.",
}
  ];

  const testimonials = [
    {
      name: "Rohan Mehta",
      // role: "CEO, StartupX",
      msg: "Yash is an exceptional developer who delivers high-quality work on time.",
    },
    {
      name: "Priya Sharma",
      // role: "Product Manager",
      msg: "Fantastic experience working with Yash. The UI and performance exceeded expectations.",
    },
    {
      name: "Ankit Kumar",
      // role: "Founder, Tech365",
      msg: "Highly professional and very skilled in React and backend development.",
    },
  ];

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header className="navbar">
        <div className="logo">
          <div className="logo-box">Y</div>
          Yash Sharma
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button className="cv-btn"
           onClick={() => window.open("/Yash_Sharma_CV.pdf")}
          >Download CV
          </button>

          <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-left">
          <p className="hero-small">Hi, I'm</p>

          <h1>Yash Sharma</h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-desc">
            I build scalable, high-performance web applications with modern
            technologies. Passionate about clean code and exceptional user
            experiences.
          </p>

          <div className="hero-buttons">
            <button>View My Work</button>
            <button className="outline-btn">Contact Me</button>
          </div>

          <div className="socials">
            <a
              href="https://github.com/yash06sharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yashshrma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://mailto:06yashsharma@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="circle-glow"></div>

          <img
            src="/logo.png"
            alt="developer"
          />

          <div className="availability">
            <div className="green-dot"></div>
            Available for work
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-left">
          <p className="section-tag">ABOUT ME</p>

          <h2>Building digital solutions that make an impact.</h2>

          <p>
            I'm a Full Stack Developer with 3+ years of experience building
            scalable applications with Angular, React, Laravel, Node.js MongoDB
            and Mysql.
          </p>

          <button>Know More About Me</button>
        </div>

        <div className="about-right">
          <div className="stat-card">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="stat-card">
            <h3>10+</h3>
            <p>Happy Clients</p>
          </div>

          {/* <div className="stat-card">
<h3>5+</h3>
<p>Awards Received</p>
</div> */}
        </div>
      </section>

      {/* <section className="skills section" id="skills"> */}

      {/* <div className="skills-grid">

<div className="skill-box"><FaHtml5/> HTML5</div>
<div className="skill-box"><FaCss3Alt/> CSS3</div>
<div className="skill-box"><SiJavascript/> JavaScript</div>
<div className="skill-box"><FaReact/> React</div>
<div className="skill-box"><FaNodeJs/> Node.js</div>
<div className="skill-box"><SiExpress/> Express</div>
<div className="skill-box"><SiMongodb/> MongoDB</div>
<div className="skill-box"><SiTailwindcss/> Tailwind</div>

</div> */}
      <section className="skills section" id="skills">
        <p className="section-tag center">MY SKILLS</p>

        <h2 className="center">Technologies I work with</h2>

        <div className="skills-row">
          <div className="skill-item">
            <SiLaravel className="skill-icon" />
            <span>Laravel</span>
          </div>

          <div className="skill-item">
            <FaAngular className="skill-icon" />
            <span>Angular</span>
          </div>

          <div className="skill-item">
            <FaReact className="skill-icon react-icon" />
            <span>React</span>
          </div>

          <div className="skill-item">
            <FaNodeJs className="skill-icon" />
            <span>Node.js</span>
          </div>

          <div className="skill-item">
            <SiExpress className="skill-icon" />
            <span>Express</span>
          </div>
          <div className="skill-item">
            <FaDatabase className="skill-icon" />
            <span>SQL</span>
          </div>

          <div className="skill-item">
            <SiMongodb className="skill-icon" />
            <span>MongoDB</span>
          </div>

          {/* <div className="skill-item">
            <SiTailwindcss className="skill-icon" />
            <span>Tailwind CSS</span>
          </div> */}
          <div className="skill-item">
            <FaDocker className="skill-icon" />
            <span>Docker</span>
          </div>

          <div className="skill-item">
            <SiKubernetes className="skill-icon" />
            <span>Kubernetes</span>
          </div>

          <div className="skill-item">
            <FaAws className="skill-icon" />
            <span>AWS</span>
          </div>

          <div className="skill-item">
            <SiOpenai className="skill-icon" />
            <span>AI Tools</span>
          </div>
        </div>

        {/* </section> */}
      </section>

      <section className="projects section" id="projects">
        <p className="section-tag center">FEATURED PROJECTS</p>

        <h2 className="center">Some of my recent work</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {/* <div className="project-image"></div> */}

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="experience section" id="experience">
        <p className="section-tag center">EXPERIENCE</p>

        <h2 className="center">My professional journey</h2>

        <div className="experience-wrapper">
          {/* ITEM 1 */}
          <div className="experience-item">
            <div className="experience-line">
              <div className="experience-dot"></div>
            </div>

            <div className="experience-left">
              <span>2026 - Present</span>
              <h3>Full Stack Developer</h3>
              <p>Profilics Systems Pvt Ltd.</p>
            </div>

            <div className="experience-right">
              <p>
                Building scalable and high-performance web applications with a
                focus on responsive design, clean architecture, and seamless
                user experience. Collaborating with teams to develop efficient,
                maintainable, and production-ready solutions for real-world
                applications.
              </p>

              <div className="experience-skills">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Docker & Kubernetes</span>
                <span>AWS</span>
              </div>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="experience-item">
            <div className="experience-line">
              <div className="experience-dot"></div>
            </div>

            <div className="experience-left">
              <span>2025 - 2026</span>
              <h3>Frontend Developer</h3>
              <p>Profilics Systems Pvt Ltd.</p>
            </div>

            <div className="experience-right">
              <p>
                Developed responsive and interactive web interfaces with a focus
                on performance, usability, and seamless user experience.
                Collaborated with backend teams to integrate REST APIs, optimize
                application workflows, and deliver scalable, production-ready
                solutions across multiple devices.
              </p>

              <div className="experience-skills">
                <span>Angular</span>
                <span>Laravel</span>
                <span>Docker</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="experience-item">
            <div className="experience-line">
              <div className="experience-dot"></div>
            </div>

            <div className="experience-left">
              <span>2024 - 2025</span>
              <h3>Junior Web Developer</h3>
              <p>Profilics Systems Pvt Ltd.</p>
            </div>

            <div className="experience-right">
              <p>
                Contributed to responsive web development by working on UI
                implementation, bug fixes, and performance optimization. Gained
                hands-on experience in building clean, user-friendly interfaces
                and collaborating within modern development workflows.
              </p>

              <div className="experience-skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects section" id="testimonials">
        <p className="section-tag center">TESTIMONIALS</p>

        <h2 className="center">What clients say about me</h2>

        <div className="project-grid">
          {testimonials.map((item, index) => (
            <div className="project-card" key={index}>
              <div className="quote">
                <FaStar />
              </div>

              <p>{item.msg}</p>

              <h4>{item.name}</h4>

              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-left">
          <p className="section-tag">GET IN TOUCH</p>

          <h2>Let's work together on your next project</h2>

          <p>
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat.
          </p>

          <div className="contact-info">
            <p>06yashsharma@gmail.com</p>
            <p>+91 86026 80230</p>
            <p>Ujjain, India</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <input type="text" placeholder="Subject" />

          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        © 2026 Yash Sharma. All rights reserved.
      </footer>
    </div>
  );
}
