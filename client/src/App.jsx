import { useEffect, useRef, useState } from "react";
import Icon from "./components/Icon.jsx";
import {
  profile,
  stats,
  services,
  skillGroups,
  projects,
  education,
  languages,
} from "./data/portfolio.js";

/* Scroll-reveal wrapper using IntersectionObserver */
function Reveal({ children, className = "", as: Tag = "div", style }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}

const NAV = [
  ["About", "about"],
  ["Services", "services"],
  ["Skills", "skills"],
  ["Work", "work"],
  ["Contact", "contact"],
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">K</span>
          <span>{profile.name}</span>
        </a>
        <ul className="nav-links" onClick={() => setOpen(false)}>
          {NAV.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="badge">
            <span className="dot" /> Available for freelance projects
          </span>
          <h1>
            Hi, I'm {profile.name.split(" ")[0]}.
            <br />
            I build <span className="gradient-text">scalable web</span> &amp;
            SaaS products.
          </h1>
          <p className="hero-sub">{profile.summary}</p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              View my work <Icon name="arrow" size={18} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Hire me
            </a>
          </div>
          <div className="hero-socials">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                className="icon-btn"
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <Reveal className="hero-card">
          <div className="hero-card-bar">
            <span className="tdot r" />
            <span className="tdot y" />
            <span className="tdot g" />
            <span className="hero-card-file">developer.ts</span>
          </div>
          <div className="code">
            <div className="code-line">
              <span className="k">const</span> <span className="f">kabir</span> = {"{"}
            </div>
            <div className="code-line">  role: <span className="s">"Full Stack Team Lead"</span>,</div>
            <div className="code-line">  experience: <span className="n">8</span>,</div>
            <div className="code-line">  stack: [<span className="s">"Node.js"</span>, <span className="s">"React"</span>, <span className="s">"Next.js"</span>],</div>
            <div className="code-line">  backend: [<span className="s">"NestJS"</span>, <span className="s">"Express"</span>, <span className="s">"GraphQL"</span>],</div>
            <div className="code-line">  cloud: [<span className="s">"AWS"</span>, <span className="s">"Docker"</span>, <span className="s">"CI/CD"</span>],</div>
            <div className="code-line">  ai: [<span className="s">"OpenAI"</span>, <span className="s">"Claude"</span>, <span className="s">"Gemini"</span>],</div>
            <div className="code-line">  <span className="f">delivers</span>() {"{"} <span className="k">return</span> <span className="s">"impact"</span>; {"}"}</div>
            <div className="code-line">{"}"};</div>
          </div>
        </Reveal>
      </div>

      <div className="container" style={{ marginTop: 60 }}>
        <div className="stats">
          {stats.map((s) => (
            <Reveal key={s.label} className="stat">
              <div className="stat-value gradient-text">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">About</span>
          <h2 className="section-title">
            A freelance partner for your<br />
            <span className="gradient-text">most ambitious builds</span>
          </h2>
        </Reveal>
        <div className="grid grid-2" style={{ marginTop: 30, alignItems: "start" }}>
          <Reveal>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
              {profile.summary} I specialize in modernizing legacy systems,
              architecting high-performance microservices, and shipping
              AI-driven features that automate real workflows.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", marginTop: 18 }}>
              Whether you need a solo expert to own a product end-to-end or a
              technical lead to steer a team, I bring the architecture,
              execution, and reliability to get it done.
            </p>
          </Reveal>
          <Reveal className="card">
            <div className="contact-line">
              <span className="svc-icon"><Icon name="pin" /></span>
              <div>
                <div className="ci-label">Based in</div>
                <div className="ci-value">{profile.location}</div>
              </div>
            </div>
            <div className="contact-line">
              <span className="svc-icon"><Icon name="layers" /></span>
              <div>
                <div className="ci-label">Education</div>
                <div className="ci-value">{education.degree} · {education.year}</div>
              </div>
            </div>
            <div className="contact-line">
              <span className="svc-icon"><Icon name="mail" /></span>
              <div>
                <div className="ci-label">Languages</div>
                <div className="ci-value">{languages.join(", ")}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section section-sm">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Services</span>
          <h2 className="section-title">What I can do for you</h2>
          <p className="section-subtitle">
            End-to-end product engineering — from architecture and APIs to
            polished interfaces and production deployment.
          </p>
        </Reveal>
        <div className="grid grid-4" style={{ marginTop: 40 }}>
          {services.map((s, i) => (
            <Reveal key={s.title} className="card" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="svc-icon"><Icon name={s.icon} size={24} /></span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Tech Stack</span>
          <h2 className="section-title">Tools I work with</h2>
        </Reveal>
        <div style={{ marginTop: 40 }}>
          {skillGroups.map((g) => (
            <Reveal key={g.category} className="skill-group">
              <h4>{g.category}</h4>
              <div className="chips">
                {g.skills.map((sk) => (
                  <span key={sk} className="chip">{sk}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Selected Work</span>
          <h2 className="section-title">Projects &amp; case studies</h2>
          <p className="section-subtitle">
            A selection of platforms I've architected and delivered for global
            clients across legal, fintech, marketplace, and VR domains.
          </p>
        </Reveal>
        <div className="grid grid-3" style={{ marginTop: 40 }}>
          {projects.map((p, i) => (
            <Reveal key={p.name} className="card project-card" style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
              <div className="project-top">
                <h3>{p.name}</h3>
                {p.highlight && <span className="star" title="Featured"><Icon name="sparkles" size={18} /></span>}
              </div>
              <div className="project-role">{p.role}</div>
              <p>{p.summary}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              {p.link && (
                <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer">
                  Visit site <Icon name="external" size={16} />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's build something great</h2>
        </Reveal>
        <div className="contact-wrap" style={{ marginTop: 36 }}>
          <Reveal className="contact-info">
            <p>
              Have a project in mind or need a technical lead? Email me and I'll
              get back to you within 24 hours.
            </p>
            <div className="contact-line">
              <span className="svc-icon"><Icon name="mail" /></span>
              <div>
                <div className="ci-label">Email</div>
                <a className="ci-value" href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </div>
            <div className="contact-line">
              <span className="svc-icon"><Icon name="pin" /></span>
              <div>
                <div className="ci-label">Location</div>
                <div className="ci-value">{profile.location}</div>
              </div>
            </div>
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email me <Icon name="arrow" size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Node.js.</p>
        <div className="hero-socials">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.url} className="icon-btn" aria-label={s.label} target="_blank" rel="noreferrer">
              <Icon name={s.icon} size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
