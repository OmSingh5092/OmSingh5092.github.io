import { useEffect } from "react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const actions = [
  { label: "View Resume", href: "/ResumeOmSingh.pdf", primary: true },
  { label: "Email Me", href: "mailto:omsingh6903@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/om-singh-5092/" },
  { label: "GitHub", href: "https://github.com/OmSingh5092" },
];

const metrics = [
  { value: "100+", label: "global datacenters touched by migration automation" },
  { value: "40+", label: "regions enabled for AArch64 container support" },
  { value: "80%", label: "reduction in selected infrastructure and incident costs" },
  { value: "50+", label: "on-call engineers supported by internal tooling" },
];

const focusKeywords = [
  "Distributed Systems",
  "Backend Engineering",
  "Cloud Infrastructure",
  "Reliability & Scale",
  "Kubernetes",
  "Containers",
  "Java",
  "Go",
];

const experiences = [
  {
    role: "Software Engineer II (IC3)",
    company: "Microsoft Azure",
    dates: "Feb 2026 - Present",
    location: "Bengaluru",
    intro: "Building scalable, reliable hybrid cloud infrastructure in the Azure Edge organization, spanning Azure Local and Azure Nexus.",
    highlights: [
      "Architected a simulated storage appliance solution that cut infrastructure resource cost by 80%, dramatically accelerating development and test loops for hybrid cloud workloads.",
      "Leading security-enhancement initiatives that improved the robustness, maintainability, and hardening posture of the Azure Local storage platform.",
      "Focused on high-availability, on-prem cloud capabilities that let enterprise workloads run reliably at the edge.",
    ],
  },
  {
    role: "Senior Member of Technical Staff (IC3)",
    company: "Oracle Cloud Infrastructure",
    dates: "Sep 2025 - Feb 2026",
    location: "Bengaluru",
    intro: "Built and optimized OCI Container Instances, a serverless compute platform delivering reliable, highly scalable container workloads.",
    highlights: [
      "Tuned distributed workload-placement algorithms in Java, reducing container instance creation latency by 30% and boosting throughput under bursty traffic.",
      "Architected a centralized audit-logging service for privileged kernel actions across 500+ bare-metal hosts in 100+ availability domains, enabling traceability and compliance.",
    ],
  },
  {
    role: "Member of Technical Staff",
    company: "Oracle Cloud Infrastructure",
    dates: "Jul 2022 - Sep 2025",
    location: "Bengaluru",
    intro: "Delivered control-plane services, Kubernetes-compatible platform features, and bare-metal capacity enablement.",
    highlights: [
      "Automated large-scale customer workload migrations across 100+ global datacenters with 10-minute p99 downtime per workload.",
      "Delivered container metrics collection for OCI Monitoring, Kubernetes HPA support, custom autoscalers, and termination grace periods.",
      "Led ARM hypervisor enablement for auto-scaling and bin-packing AArch64 bare-metal capacity across 40+ regions.",
      "Designed anomaly-resolution workflows that reduced incidents for targeted resource-state issues by 80%.",
      "Onboarded next-gen x86 bare-metal instances across the Java control plane and API gateway, validating a 33% per-core performance uplift.",
      "Built Terraform and OCI API automation for auto-scaling instance pools and multi-architecture clusters, reducing cost per CPU by 40%.",
      "Built an internal React dashboard for real-time service state visibility, improving response times for 50+ on-call engineers.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Oracle Cloud Infrastructure",
    dates: "May 2021 - Jul 2021",
    location: "Remote",
    intro: "Worked on OCI Service Mesh, Oracle's cloud-native service mesh offering.",
    highlights: [
      "Developed a Bookinfo-style microservices demo used by 100+ developers onboarding to OCI Service Mesh.",
      "Built Cloud Console UI with internal React toolchains, serving 1000+ customers managing service mesh resources.",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "Golang", "JavaScript"],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["Oracle Cloud Infrastructure", "Azure Edge", "Kubernetes", "Containers", "Terraform", "KVM/QEMU"],
  },
  {
    title: "Application Platforms",
    items: ["Dropwizard", "gRPC", "REST", "React", "Node.js"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Oracle Autonomous DB", "MongoDB", "Berkeley DB"],
  },
];

function Header() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#home">
          Om Singh
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function SectionHeading({ title, children }) {
  return (
    <div className="section-heading">
      <div>
        <h2>{title}</h2>
        <span className="section-subtitle">{children}</span>
      </div>
    </div>
  );
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="inline-icon" aria-hidden="true">
      <rect x="2" y="2" width="9" height="9" fill="#f15025" />
      <rect x="13" y="2" width="9" height="9" fill="#7cbb00" />
      <rect x="2" y="13" width="9" height="9" fill="#00a1f1" />
      <rect x="13" y="13" width="9" height="9" fill="#ffb900" />
    </svg>
  );
}

function OracleIcon() {
  return <img src="/oracle-icon.ico" alt="Oracle" className="company-icon" />;
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="inline-icon" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#0a66c2" />
      <path d="M7.5 10.75h2.5v8H7.5v-8zm1.25-3.75a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM14.75 12c1.1 0 1.85.72 2.15 1.36v-1.17h2.5v6.43h-2.5v-3.6c0-.96-.34-1.61-1.2-1.61-.65 0-1.04.44-1.21.87-.06.14-.07.33-.07.52v3.82h-2.5s.03-6.2 0-6.84h2.5v.97c.33-.51.92-1.24 2.25-1.24z" fill="#fff" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="inline-icon" aria-hidden="true">
      <path
        fill="#181717"
        d="M12 2a10 10 0 00-3.16 19.48c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.89 1.52 2.32 1.08 2.88.83.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02A9.54 9.54 0 0112 6.8c.85.004 1.71.11 2.51.32 1.9-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.69.92.69 1.86v2.76c0 .26.18.58.69.48A10 10 0 0012 2z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="inline-icon" aria-hidden="true">
      <path fill="#2563eb" d="M3 6.75A2.75 2.75 0 015.75 4h12.5A2.75 2.75 0 0121 6.75v10.5A2.75 2.75 0 0118.25 20H5.75A2.75 2.75 0 013 17.25V6.75z" />
      <path
        fill="#fff"
        d="M19.5 7.72l-7.5 5.02-7.5-5.02V6.75L12 11.77l7.5-5.02v.97z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="inline-icon" aria-hidden="true">
      <path fill="#10b981" d="M6.62 10.79a15.053 15.053 0 006.58 6.58l1.94-1.94a1.25 1.25 0 011.36-.28c1.5.6 3.15.93 4.9.93a1.25 1.25 0 011.25 1.25v2.19A1.25 1.25 0 0120.25 21C9.59 21 2 13.41 2 2.75A1.25 1.25 0 013.25 1.5h2.19A1.25 1.25 0 016.69 2.75c0 1.75.32 3.4.92 4.9a1.25 1.25 0 01-.29 1.36L6.62 10.79z" />
    </svg>
  );
}

function CompanyIcon({ company }) {
  if (company.includes("Microsoft")) return <MicrosoftIcon />;
  if (company.includes("Oracle")) return <OracleIcon />;
  return <span className="company-abbr">{company.split(" ").map((part) => part[0]).join("")}</span>;
}

function Hero() {
  return (
    <section className="section hero animated-section" id="home">
      <div>
        <div className="hero-intro-top">
          <div className="hero-photo-wrap">
            <img src="/ProfilePhoto.jpg" alt="Om Singh" className="hero-photo" />
          </div>
          <div>
            <span className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Software Engineer II @ Microsoft Azure &middot; Ex-Oracle Cloud
            </span>
            <h1>Om Singh</h1>
            <p className="hero-subtitle">I build reliable, highly scalable compute and cloud-infrastructure platforms.</p>
          </div>
        </div>
        <p className="lead">
          Backend and cloud-infrastructure engineer focused on distributed systems, reliability, and scale. At
          <strong> Microsoft Azure</strong> I work in the Azure Edge organization on hybrid cloud infrastructure across
          <strong> Azure Local</strong> and <strong>Azure Nexus</strong>; previously at <strong>Oracle Cloud</strong> I
          built the Container Instances serverless compute platform. My work spans distributed control planes, container
          and Kubernetes-compatible platforms, bare-metal capacity, security hardening, observability, and developer
          tooling.
        </p>
        <div className="keyword-strip" aria-label="Focus areas">
          {focusKeywords.map((keyword) => (
            <span className="keyword-chip" key={keyword}>
              {keyword}
            </span>
          ))}
        </div>
        <div className="actions">
          {actions.map((action) => (
            <a className={action.primary ? "button primary" : "button"} href={action.href} key={action.href}>
              {action.label}
            </a>
          ))}
        </div>
      </div>

      <aside className="profile-card animated-card" aria-label="Profile highlights">
        <span className="profile-card-tag">Currently building</span>
        <h3 className="profile-card-title">Reliable, scalable compute platforms</h3>
        <p>
          Hybrid cloud infrastructure at Azure Edge today; serverless container compute at OCI before that. Motivated by
          scalability, reliability, and security in cloud-native environments.
        </p>
        <div className="brand-grid">
          <div className="brand-pill">
            <MicrosoftIcon />
            <span>Microsoft Azure</span>
          </div>
          <div className="brand-pill">
            <OracleIcon />
            <span>Oracle Cloud Infrastructure</span>
          </div>
        </div>
        <div className="metric-grid">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}

function Experience() {
  return (
    <section className="section animated-section" id="experience">
      <SectionHeading title="Experience">
        Building reliable, highly scalable compute and cloud-infrastructure platforms - today at Microsoft Azure Edge,
        previously across Oracle Cloud Container Instances, control-plane services, migrations, and bare-metal
        enablement.
      </SectionHeading>

      <div className="experience-list timeline">
        {experiences.map((experience, index) => (
          <article
            className="experience-card animated-card reveal-up"
            style={{ "--i": index }}
            key={`${experience.company}-${experience.role}`}
          >
            <div className="experience-meta">
              <div className="company-icon-wrap">
                <CompanyIcon company={experience.company} />
              </div>
              <div>
                <h3 className="experience-role">{experience.role}</h3>
                <p className="meta company">{experience.company}</p>
                <p className="meta dates">{[experience.dates, experience.location].filter(Boolean).join(" - ")}</p>
              </div>
            </div>
            <div>
              <p>{experience.intro}</p>
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section animated-section" id="skills">
      <SectionHeading title="Skills">
        Backend systems and cloud infrastructure at the core - distributed systems, containers, and Kubernetes - with
        enough frontend depth to ship the internal tools operators rely on.
      </SectionHeading>

      <div className="card-grid">
        {skillGroups.map((group, index) => (
          <article className="card animated-card reveal-up" style={{ "--i": index }} key={group.title}>
            <h3>{group.title}</h3>
            <div className="tags">
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section animated-section" id="education">
      <SectionHeading title="Education & Recognition">
        The academic foundation is still here, just no longer the whole story.
      </SectionHeading>

      <div className="split">
        <article className="card animated-card reveal-left">
          <h3>Bachelor of Technology</h3>
          <p className="meta">Motilal Nehru National Institute of Technology (NIT Allahabad) - Electronics and Communication Engineering - CGPA 9.25</p>
          <ul>
            <li>Android Development Lead at Coding Club, mentoring juniors and running technical events.</li>
            <li>Core member of the Music Committee, organizing cultural events and mentoring performers.</li>
          </ul>
        </article>
        <article className="card animated-card reveal-right">
          <h3>Accomplishments</h3>
          <ul>
            <li>
              Published research with the Indian Academy of Sciences on dielectric resonator antenna optimization using
              machine learning.
            </li>
            <li>Earned Oracle Cloud Infrastructure Gen-AI Professional and AI Foundations Associate certifications.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section animated-section" id="contact">
      <SectionHeading title="Contact">
        I am easiest to reach over email or LinkedIn. My GitHub still carries the older college projects too, useful
        snapshots from where the engineering trail started.
      </SectionHeading>
      <div className="contact-grid">
        <a className="contact-card animated-card reveal-up" style={{ "--i": 0 }} href="mailto:omsingh6903@gmail.com">
          <EmailIcon />
          <span>omsingh6903@gmail.com</span>
        </a>
        <a className="contact-card animated-card reveal-up" style={{ "--i": 1 }} href="tel:+916388639626">
          <PhoneIcon />
          <span>+91 6388639626</span>
        </a>
        <a className="contact-card animated-card reveal-up" style={{ "--i": 2 }} href="https://www.linkedin.com/in/om-singh-5092/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
        <a className="contact-card animated-card reveal-up" style={{ "--i": 3 }} href="https://github.com/OmSingh5092" target="_blank" rel="noreferrer">
          <GitHubIcon />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".animated-section, .animated-card, .experience-card");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      nodes.forEach((node) => node.classList.add("visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer>
        <span>(c) 2026 Om Singh. Built with React.</span>
      </footer>
    </>
  );
}
