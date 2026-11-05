import { useEffect, useRef, useState } from "react";
import {
  FiArrowUpRight,
  FiArrowDown,
  FiSun,
  FiMoon,
  FiGithub,
  FiLinkedin,
  FiArrowRight,
  FiPlus,
  FiMinus,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Contact from "./Component/Contact";
import DashboardPreview from "./Component/DashboardPreview";

const resume = "/Adigun-Moyinoluwa-CV.pdf";
const skills = [
  "React.js",
  "Vue.js",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "TanStack Query",
  "REST APIs",
  "Git & GitHub",
];
const projects = [
  {
    id: "01",
    name: "Virtuo for Schools",
    color: "school",
    category: "DE-VIRTUOSPHERE / SCHOOL MANAGEMENT",
    title: "School management dashboard.",
    description:
      "At De-Virtuosphere, I worked on the frontend of the school management system dashboard, helping bring student records, payments, attendance, and administrative workflows into clear, responsive interfaces.",
    role: "Frontend Developer · Team contribution",
    company: "De-Virtuosphere",
    stack: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    live: "https://www.devirtuosphere.com/solutions/schools",
    linkLabel: "Explore product",
    image: "schools",
    caption: "View school management product",
  },
  {
    id: "02",
    name: "Virtuo Facility",
    color: "facility",
    category: "DE-VIRTUOSPHERE / FACILITY MANAGEMENT",
    title: "Facility management dashboard.",
    description:
      "I contributed to the facility management system dashboard at De-Virtuosphere. The product helps teams manage properties and assets, follow work orders, and keep maintenance organised.",
    role: "Frontend Developer · Team contribution",
    company: "De-Virtuosphere",
    stack: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    live: "https://www.devirtuosphere.com/solutions/facility",
    linkLabel: "Explore product",
    image: "facility",
    caption: "View facility management product",
  },
  {
    id: "03",
    name: "Glowora",
    screenshot: { light: "/images/buyly.jpg", dark: "/images/buyly.jpg" },
    screenshotAlt:
      "Glowora skincare storefront, a pink collection banner, and product photography",
    color: "berry",
    category: "E-COMMERCE / REACT",
    title: "An online marketplace built with React.",
    description:
      "An online marketplace I built from the ground up. A responsive storefront, a cart that updates instantly, and an admin dashboard to keep the catalogue in order.",
    stack: ["React.js", "Context API", "Tailwind CSS", "JSON Server"],
    live: "https://buyly.vercel.app/",
    repo: "https://github.com/DevMoyin17/Buyly",
  },
  {
    id: "04",
    name: "ChainStats",
    screenshot: {
      light: "/images/chainstats-light.jpg",
      dark: "/images/chainstats-dark.jpg",
    },
    color: "sage",
    category: "CRYPTOCURRENCY / VUE",
    title: "Live cryptocurrency data in Vue.",
    description:
      "A mobile-first cryptocurrency tracker powered by CoinGecko. Search coins, compare currencies, and explore live market data in a clean, responsive interface.",
    stack: ["Vue.js", "Composition API", "Tailwind CSS", "CoinGecko API"],
    live: "https://chainstats.vercel.app/",
    repo: "https://github.com/DevMoyin17/Crypto_tracker",
  },
];
const experience = [
  {
    company: "De-Virtuosphere",
    date: "FEB 2026 – PRESENT",
    role: "Frontend Developer · Remote",
    text: "Building school management interfaces and facility management dashboards. My work covers student records, payments, attendance, and administrative workflows. Working with React, Next.js, and Tailwind CSS, with reusable components, REST APIs, and role-based access.",
  },
  {
    company: "FloattHR",
    date: "NOV 2025 – FEB 2026",
    role: "Frontend Developer · Softweb-digital",
    text: "Built admin dashboards, consultant and client management, and granular permissions. Used React Query for live data, caching, and optimistic updates, collaborating with backend developers on API integration.",
  },
];

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("moyin-theme");
      if (saved === "dark" || saved === "light") return saved;
    } catch {
      /* Storage may be disabled. */
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const [flipped, setFlipped] = useState(false);
  const [openExperience, setOpenExperience] = useState(0);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("moyin-theme", theme);
    } catch {
      /* Theme still works without storage. */
    }
  }, [theme]);

  useEffect(() => {
    if (!menuOpen) return;
    navRef.current?.querySelector("a")?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 700) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".project, .section-heading, .about-grid, .contact-grid, .company-strip, .stamp-grid",
    );
    if (!("IntersectionObserver" in window)) return;
    elements.forEach((element) => element.classList.add("reveal"));
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    elements.forEach((element) => revealObserver.observe(element));
    const navigationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-12% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => navigationObserver.observe(section));
    return () => {
      revealObserver.disconnect();
      navigationObserver.disconnect();
      elements.forEach((element) => element.classList.remove("reveal"));
    };
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header" ref={headerRef}>
        <div className="scroll-progress" aria-hidden="true" />
        <div className="shell header-inner">
          <a className="wordmark" href="#home">
            <span className="brand-dot" />
            Moyinoluwa<span className="wordmark-last"> Adigun</span>
          </a>
          <nav
            id="main-navigation"
            ref={navRef}
            className={menuOpen ? "main-navigation is-open" : "main-navigation"}
            aria-label="Main navigation"
            onClick={(event) => {
              if (event.target.closest("a")) setMenuOpen(false);
            }}
          >
            <a
              href="#work"
              aria-current={activeSection === "work" ? "location" : undefined}
            >
              Work
            </a>
            <a
              href="#about"
              aria-current={activeSection === "about" ? "location" : undefined}
            >
              About
            </a>
            <a
              href="#contact"
              aria-current={
                activeSection === "contact" ? "location" : undefined
              }
            >
              Contact
            </a>
            <a
              className="mobile-resume-link"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              Résumé <FiArrowUpRight />
            </a>
          </nav>
          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <FiSun /> : <FiMoon />}
            </button>
            <a
              className="pill resume-button"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              Résumé <FiArrowUpRight />
            </a>
            <button
              className="mobile-menu-toggle"
              ref={menuButtonRef}
              type="button"
              aria-controls="main-navigation"
              aria-expanded={menuOpen}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <section className="shell hero" id="home">
          <div className="hero-topline">
            <p>
              Frontend developer in Lagos <span>(WAT, open to remote)</span>
            </p>
            <span className="availability">
              <span /> OPEN TO OPPORTUNITIES
            </span>
          </div>
          <div className="hero-heading">
            <h1>
              I turn ideas into
              <br />
              <span>web experiences.</span>
            </h1>
            <div className="round-stamp" aria-hidden="true">
              <span>BUILT WITH CARE</span>
              <b>✳</b>
              <span>LAGOS, NIGERIA</span>
            </div>
          </div>
          <p className="hero-description">
            I’m Moyinoluwa, a frontend developer based in Lagos. I bring designs
            to life with responsive layouts, smooth interactions, and code
            that’s easy to build on.
          </p>
          <div className="hero-actions">
            <a className="pill" href="#work">
              Explore my work <FiArrowDown />
            </a>
            <a
              className="text-link"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              Résumé <FiArrowUpRight />
            </a>
          </div>
          <div className="collage">
            <div className="portrait-wrap">
              <button
                className={`portrait-card ${flipped ? "is-flipped" : ""}`}
                onClick={() => setFlipped(!flipped)}
                aria-label={
                  flipped
                    ? "Show portrait"
                    : "Flip portrait to read a note about me"
                }
                aria-pressed={flipped}
              >
                <span
                  className="portrait-face portrait-front"
                  aria-hidden={flipped}
                >
                  <img
                    src="/images/moyinoluwa.jpg"
                    alt="Moyinoluwa Adigun in a charcoal blazer"
                    width="1233"
                    height="1275"
                    fetchPriority="high"
                  />
                  <span className="photo-caption">
                    Moyinoluwa Adigun · Frontend Developer
                  </span>
                  <span className="photo-index">01 / MOYINOLUWA</span>
                </span>
                <span
                  className="portrait-face portrait-back"
                  aria-hidden={!flipped}
                >
                  <span className="postcard-title">A note from me.</span>
                  <span className="handwritten">
                    I build dashboards and web applications.
                  </span>
                  <span>
                    I work with React, Vue, and Next.js. Currently a frontend
                    developer at De-Virtuosphere, working on school and facility
                    management software.
                  </span>
                  <span className="postcard-signature">Moyinoluwa ♡</span>
                  <span className="postcard-address">
                    FROM LAGOS, WITH CARE.
                  </span>
                </span>
              </button>
              <span className="lagos-sticker" aria-hidden="true">
                <span>✳</span>Lagos<small>NIGERIA</small>
              </span>
              <span className="flower-sticker" aria-hidden="true">
                ✿
              </span>
              <span className="flip-hint">click to flip ↶</span>
            </div>
            <div className="stamp-grid">
              <div className="paper-stamp stamp-berry">
                <span className="stamp-value">
                  2+<small>years</small>
                </span>
                <p>
                  building for
                  <br />
                  the web
                </p>
                <span className="stamp-number">01 ↗</span>
              </div>
              <div className="paper-stamp stamp-yellow">
                <span className="stamp-value">
                  React
                  <br />
                  <i>& Vue</i>
                </span>
                <p>
                  my everyday
                  <br />
                  building blocks
                </p>
                <span className="stamp-number">02 ↗</span>
              </div>
              <div className="paper-stamp stamp-sage">
                <span className="stamp-symbol">↔</span>
                <p>
                  Responsive layouts.
                  <br />
                  Desktop and mobile.
                </p>
                <span className="stamp-number">03 ↗</span>
              </div>
              <a href="#contact" className="paper-stamp stamp-blue">
                <span className="stamp-value">
                  Let’s
                  <br />
                  <i>build.</i>
                </span>
                <p>
                  Full-time, contract
                  <br />
                  and remote roles.
                </p>
                <span className="stamp-number">SAY HELLO ↗</span>
              </a>
            </div>
          </div>
          <div className="company-strip">
            <p className="eyebrow">WHERE I’VE CONTRIBUTED</p>
            <div>
              <span>
                De-Virtuosphere<span className="company-mark">✳</span>
              </span>
              <span className="company-floatt">
                floatt<span>HR</span>
                <span className="company-mark">↗</span>
              </span>
            </div>
          </div>
        </section>
        <section className="shell work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PROJECTS</p>
              <h2>
                Selected work<span className="accent">.</span>
              </h2>
            </div>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article
                className={`project project-${project.color}`}
                key={project.id}
              >
                <div className="folder-tab">
                  <span>{project.id}</span> {project.name}
                  <FiArrowUpRight />
                </div>
                <div className="project-body">
                  <div className="project-copy">
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-meta">
                      <span>My role</span>
                      <p>{project.role || "Frontend development"}</p>
                      {project.company && (
                        <>
                          <span>Company</span>
                          <p>{project.company}</p>
                        </>
                      )}
                      <span>{project.detailLabel || "Built with"}</span>
                      <p>{project.stack.join(" · ")}</p>
                    </div>
                    <div className="project-links">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        {project.linkLabel || "Visit website"}{" "}
                        <FiArrowUpRight />
                      </a>
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noreferrer">
                          <FiGithub /> Source code
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="project-visual">
                    <div className="visual-top">
                      <span>{project.name}</span>
                      <span>
                        {project.image
                          ? "PRODUCT DASHBOARD ↗"
                          : project.screenshot
                            ? "WEBSITE PREVIEW ↗"
                            : "ILLUSTRATIVE PREVIEW ↗"}
                      </span>
                    </div>
                    {project.image ? (
                      <DashboardPreview kind={project.image} theme={theme} />
                    ) : (
                      <a
                        className="project-screenshot"
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${project.name}`}
                      >
                        <img
                          src={project.screenshot[theme]}
                          alt={
                            project.screenshotAlt ||
                            "ChainStats cryptocurrency market dashboard showing Bitcoin, Ethereum and BNB prices and seven-day charts"
                          }
                          width="1800"
                          height={project.name === "Glowora" ? 975 : 903}
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="visual-caption"
                      aria-label={`Explore ${project.name}`}
                    >
                      {project.caption ||
                        (project.name === "Glowora"
                          ? "View Glowora"
                          : "View ChainStats")}
                      <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a
            className="text-link all-projects"
            href="https://github.com/DevMoyin17"
            target="_blank"
            rel="noreferrer"
          >
            More on GitHub <FiArrowUpRight />
          </a>
        </section>
        <section className="shell about-section" id="about">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ABOUT</p>
              <h2>
                A little about me<span className="accent">.</span>
              </h2>
            </div>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <h3>
                Frontend development,
                <br />
                <em>based in Lagos.</em>
              </h3>
              <p>
                I’m a frontend developer with over two years of experience. I’ve
                worked on school and facility management dashboards, HR
                administration, and e-commerce websites.
              </p>
              <p>
                I work with backend developers on API integration,
                authentication, and role-based access. I use React, Vue, and
                Next.js to build reusable components and responsive layouts.
              </p>
              <a
                className="text-link"
                href={resume}
                target="_blank"
                rel="noreferrer"
              >
                View my CV <FiArrowUpRight />
              </a>
              <div className="toolkit">
                <p className="eyebrow">TECHNOLOGIES</p>
                <div>
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="experience">
              <p className="eyebrow">EXPERIENCE</p>
              {experience.map((item, index) => (
                <div className="experience-item" key={item.company}>
                  <button
                    aria-expanded={openExperience === index}
                    aria-controls={`experience-${index}`}
                    onClick={() =>
                      setOpenExperience(openExperience === index ? null : index)
                    }
                  >
                    <span>
                      <span className="experience-date">{item.date}</span>
                      <strong>{item.company}</strong>
                      <span className="experience-role">{item.role}</span>
                    </span>
                    {openExperience === index ? <FiMinus /> : <FiPlus />}
                  </button>
                  <div
                    id={`experience-${index}`}
                    hidden={openExperience !== index}
                  >
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="shell footer">
        <a className="wordmark" href="#home">
          <span className="brand-dot" />
          Moyinoluwa Adigun
        </a>
        <p>Lagos, Nigeria. © {new Date().getFullYear()}</p>
        <div>
          <a
            href="https://github.com/DevMoyin17"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adigun-moyinoluwa-4236872a2"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a href="#home" aria-label="Back to top">
            <FiArrowRight className="back-top" />
          </a>
        </div>
      </footer>
    </>
  );
}
export default App;
