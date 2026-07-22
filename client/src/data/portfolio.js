// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Update contact details, projects, and skills here.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Kabir Patel",
  title: "Full Stack Developer & Team Lead",
  tagline: "Node.js · React · Next.js · NestJS · Laravel",
  location: "Ahmedabad, Gujarat, India",
  email: "kabirphp099@gmail.com",
  available: true,
  resumeUrl: "/Kabir-Patel-Resume.pdf", // place a PDF in client/public to enable
  socials: [
    { label: "GitHub", url: "https://github.com/kabir099php", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kabir-patel-3671303b1/", icon: "linkedin" },
    { label: "Email", url: "mailto:kabirphp099@gmail.com", icon: "mail" },
  ],
  summary:
    "Strategic Full Stack Developer and Team Lead with 8+ years of experience architecting scalable web and SaaS applications. I lead cross-functional Agile teams (up to 9 members) to deliver robust platforms for global clients — modernizing legacy systems, building high-performance microservices, and integrating AI-driven features that automate workflows and elevate user experience with Node.js, React, and cloud infrastructure.",
};

export const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "12", label: "Countries Served" },
  { value: "9", label: "Team Members Led" },
];

export const services = [
  {
    icon: "layers",
    title: "Full Stack Web & SaaS",
    description:
      "End-to-end architecture and delivery of scalable web platforms and multi-tenant SaaS products, from database design to polished UI.",
  },
  {
    icon: "server",
    title: "Backend & API Engineering",
    description:
      "High-performance Node.js / NestJS / Express services, RESTful & GraphQL APIs, microservices, and real-time systems with Socket.io.",
  },
  {
    icon: "sparkles",
    title: "AI Integration",
    description:
      "Embedding OpenAI, Claude, and Gemini into products — document summarization, classification, and AI-driven workflow automation.",
  },
  {
    icon: "rocket",
    title: "Cloud & DevOps",
    description:
      "Containerized deployments with Docker, CI/CD pipelines, Nginx, and PM2 across AWS, Azure, and Google Cloud.",
  },
];

export const skillGroups = [
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "Laravel", "RESTful APIs", "GraphQL"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Angular", "Redux", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Database & Caching",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Prisma", "Sequelize", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Google Cloud", "Docker", "CI/CD", "Nginx", "PM2", "Git"],
  },
  {
    category: "AI & Specialized",
    skills: ["OpenAI / ChatGPT", "Claude", "Gemini Pro", "WebSockets (Socket.io)", "Stripe", "PayPal", "Jest"],
  },
];

export const projects = [
  {
    name: "EL — Monolith to Microservices Modernization",
    role: "Solution Architect & Backend Lead",
    summary:
      "Led the architecture and backend for converting a monolith to a microservices-based system in NestJS. Migrated from MSSQL to PostgreSQL with Change Data Capture (CDC) and Kafka integration, planning a data migration of 800+ GB.",
    tags: ["NestJS", "Microservices", "PostgreSQL", "Kafka", "CDC", "MSSQL"],
    highlight: true,
  },
  {
    name: "TicketBy — Event Ticketing Platform",
    role: "Full Stack Developer",
    summary:
      "A ticket-selling website for booking multiple kinds of events, built with a modern UI and a NestJS backend tech stack.",
    tags: ["NestJS", "React", "Ticketing", "Events"],
    link: "https://app.ticketby.com.sa/en",
    highlight: true,
  },
  {
    name: "Rating — Employee Rating & Management Software",
    role: "Founding Developer & Lead",
    summary:
      "A data-analysis platform of 3 apps plus a CMS used to rate and manage employees, deployed across Subway and Costa Coffee in several countries. Included versioned APIs and extensive database management tooling. Started from scratch in Laravel + React, then migrated to NestJS and PostgreSQL.",
    tags: ["Laravel", "React", "NestJS", "PostgreSQL", "Data Analysis", "CMS"],
    link: "https://www.servefirst.co.uk/",
    highlight: true,
  },
  {
    name: "1mg — Pharma E-Commerce Platform",
    role: "Full Stack Developer",
    summary:
      "A platform for all pharma needs with algorithm- and composition-based medicine suggestions powered by Elasticsearch. Delivered app APIs plus an e-commerce website with inventory management, built with Node.js APIs and a React frontend.",
    tags: ["Node.js", "React", "Elasticsearch", "E-Commerce", "Inventory"],
    link: "https://www.1mg.com/",
    highlight: false,
  },
  {
    name: "Training Notebook",
    role: "Full Stack Developer",
    summary:
      "The Training Notebook is a minimalist mobile and web app designed specifically for personal trainers. Created as a streamlined alternative to bloated coaching software and traditional paper logs, it focuses strictly on core workflows—such as client rostering, workout program building, tracking previous sessions, and logging progress—without unnecessary complexity or feature bloat.",
    tags: ["NestJS", "E-Commerce"],
    link :"https://thetrainingnotebook.com/",
    highlight: false,
  },
  {
    name: "RedGoods — Multi-Vendor Marketplace",
    role: "Full Stack Developer",
    summary:
      "A Canada-only e-commerce platform with Laravel APIs and a React frontend, supporting a subscription model, personal lists, and the ability for a user to become a vendor rather than only a consumer.",
    tags: ["Laravel", "React", "Subscriptions", "Multi-Vendor", "E-Commerce"],
    link: "https://goodlifeconsumer.com/",
    highlight: false,
  },
  {
    name: "PLP — Private Label Portal",
    role: "Full Stack Developer",
    summary:
      "An e-commerce website with a wide product range and extensive product management, built with Node.js and React.",
    tags: ["Node.js", "React", "E-Commerce", "Product Management"],
    link: "https://private-label-portal.com/",
    highlight: false,
  },
  {
    name: "Netco — Fintech Service Portal",
    role: "Full Stack Developer",
    summary:
      "A fintech service-management portal offering all kinds of services a consumer can order, with vendor registration to offer services. Backend in Laravel and frontend in React.",
    tags: ["Laravel", "React", "Fintech", "Marketplace"],
    link: "https://netcopos.com/",
    highlight: false,
  },
  {
    name: "Clinical Wallet — E-Doctor Consultation",
    role: "Full Stack Developer",
    summary:
      "An e-doctor consultation portal where doctors register and provide services and users book them, with an integrated payment gateway. Built with Laravel APIs and a React frontend.",
    tags: ["Laravel", "React", "Payments", "Healthcare"],
    link: "https://clinicalwallet.com/",
    highlight: false,
  },
];

export const experience = [
  {
    company: "Vrinsoft Technologies",
    role: "Full Stack Team Lead",
    period: "2021 – Present",
    duration: "4+ years",
    points: [
      "Lead cross-functional Agile teams delivering enterprise web and SaaS platforms for global clients.",
      "Modernized legacy systems and architected high-performance microservices with Node.js and React.",
      "Integrated AI-driven features (Claude, Gemini, OpenAI) to automate document and email workflows.",
    ],
  },
  {
    company: "Elsner Technology Pvt Ltd",
    role: "Software Developer (PHP-Laravel / Angular)",
    period: "Dec 2018 – 2021",
    duration: "3 years",
    points: [
      "Led a 20-member team to build a dedicated event management platform using Laravel.",
      "Developed APIs, dynamic form builders, and real-time discussion panels via WebSockets.",
      "Built an SEO analytics system with Angular and Laravel integrating Google keyword tracking.",
    ],
  },
];

export const education = {
  degree: "Bachelor's Degree in Computer Engineering",
  year: "2018",
};

export const languages = ["English", "Hindi", "Gujarati"];
