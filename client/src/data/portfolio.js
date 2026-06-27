// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Update contact details, projects, and skills here.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Kabir Patel",
  title: "Full Stack Developer & Team Lead",
  tagline: "Node.js · React · Next.js · NestJS · Laravel",
  // TODO: replace placeholders with your real details before deploying.
  location: "Ahmedabad, Gujarat, India",
  email: "kabirphp099@gmail.com",
  phone: "+91 00000 00000",
  available: true,
  resumeUrl: "/Kabir-Patel-Resume.pdf", // place a PDF in client/public to enable
  socials: [
    { label: "GitHub", url: "https://github.com/kabir099php", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kabir-patel-3671303b1/", icon: "linkedin" },
    { label: "Email", url: "mailto:kabirphp099@gmail.com", icon: "mail" },
  ],
  summary:
    "Strategic Full Stack Developer and Team Lead with 7+ years of experience architecting scalable web and SaaS applications. I lead cross-functional Agile teams (up to 9 members) to deliver robust platforms for global clients — modernizing legacy systems, building high-performance microservices, and integrating AI-driven features that automate workflows and elevate user experience with Node.js, React, and cloud infrastructure.",
};

export const stats = [
  { value: "7+", label: "Years Experience" },
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
    name: "Wilson and Roe — Legal Software Modernization",
    role: "Full Stack Team Lead",
    summary:
      "Spearheaded the enterprise modernization of a legacy legal system: a high-performance React frontend and scalable Node.js backend services. Integrated the Microsoft Graph API to automate email and document workflows, and engineered an AI-powered pipeline using Claude/Gemini for legal document summarization and email classification.",
    tags: ["React", "Node.js", "Microsoft Graph API", "Claude", "Gemini", "AI Automation"],
    highlight: true,
  },
  {
    name: "Link My Life — Secure Digital Asset Manager",
    role: "Full Stack Developer",
    summary:
      "Built secure modules for encrypted password management and legacy document storage in React. Collaborated with blockchain and DevOps engineers to guarantee platform security and reliability.",
    tags: ["React", "Encryption", "Blockchain", "Security"],
    highlight: false,
  },
  {
    name: "ArtGapi — Global Art Marketplace",
    role: "Architect & Lead Developer",
    summary:
      "Architected a 12-country marketplace with Node.js and MySQL. Implemented Stripe global payments and built a live Masterclass streaming feature with interactive real-time chat.",
    tags: ["Node.js", "MySQL", "Stripe", "Live Streaming", "WebSockets"],
    highlight: true,
  },
  {
    name: "Syool Platform — v2 Architecture",
    role: "System Architect",
    summary:
      "Directed end-to-end architecture of the Syool platform: multi-tenant administration, complex role-based access control (RBAC), and real-time analytics dashboards powered by TradingView APIs. Designed a highly available Node.js backend and a modular React frontend.",
    tags: ["Node.js", "React", "RBAC", "Multi-tenant", "TradingView API", "Analytics"],
    highlight: false,
  },
  {
    name: "DreamDesign — VR Design Platform",
    role: "Lead Engineer",
    summary:
      "Engineered the web infrastructure for a Virtual Reality design platform. Built a scalable Node.js backend for heavy 3D asset processing and a dynamic React dashboard with in-browser 3D (.glb) previews and automated rendering pipelines.",
    tags: ["Node.js", "React", "3D / WebGL", "Rendering Pipelines"],
    highlight: true,
  },
  {
    name: "Event Management Platform",
    role: "Team Lead (20 members)",
    summary:
      "Led a 20-member team to build a dedicated event platform with Laravel. Developed APIs, dynamic form builders, and real-time discussion panels via WebSockets.",
    tags: ["Laravel", "WebSockets", "APIs", "Team Leadership"],
    highlight: false,
  },
  {
    name: "Trackmysite — SEO System",
    role: "Full Stack Developer",
    summary:
      "Built a comprehensive SEO tool with Angular and Laravel. Integrated third-party APIs for Google keyword tracking and automated weekly client reports with analytical graphs.",
    tags: ["Angular", "Laravel", "SEO", "Data Visualization"],
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
  year: "2017",
};

export const languages = ["English", "Hindi", "Gujarati"];
