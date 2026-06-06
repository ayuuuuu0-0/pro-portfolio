export const SOCIAL_LINKS = {
  github: "https://github.com/ayuuuuu0-0",
  linkedin: "https://www.linkedin.com/in/ayush-ranjan019/",
  twitter: "https://x.com/Ayuuuu_25",
  discord: "https://discord.com/users/753159553649999914",
} as const;

export const RESUME_URL =
  "https://drive.google.com/file/d/1QwagGnnmk91a73VUc_yp1dcnJIE7sIgX/view?usp=sharing";

export const EMAIL = "ranaayush0725@gmail.com";

export const SKILLS = {
  primary: [
    "Go",
    "JavaScript",
    "TypeScript",
    "Python",
    "NodeJS",
    "ReactJS",
    "NextJS",
    "Flutter",
    "Java",
    "C++",
  ],
  infrastructure: ["Kafka", "Kubernetes", "Docker", "AWS", "Redis"],
  databases: ["PostgreSQL", "MongoDB"],
} as const;

export const EXPERIENCE = [
  {
    active: true,
    period: "Aug 2025 — Present · Gurugram, Haryana",
    role: "SDE Intern",
    company: "Omniful",
    url: "https://www.omniful.ai",
    description:
      "Built cross-service volumetric weight calculation across OMS, WMS, and shipping with data-consistency contracts. Developed multi-tenant white-label tracking with per-tenant branding and runtime hub address resolution. Optimized bulk customer APIs (~80% faster) and owned Kafka consumer group integrations in an event-sourcing architecture with reliable at-least-once processing.",
    tags: ["Go", "Kafka", "Kubernetes", "Event Sourcing", "Multi-tenancy"],
  },
  {
    active: false,
    period: "May 2024 — Oct 2024 · Remote",
    role: "SDE Intern",
    company: "Miracuves Solutions",
    url: "https://www.miracuves.com",
    description:
      "Cut app load time by 40% via lazy loading, widget isolation, and overdraw elimination. Built live chat with WebSocket and HTTP polling fallback, handling reconnect logic and real-time state sync.",
    tags: ["Flutter", "WebSocket", "Performance"],
  },
  {
    active: false,
    period: "March 2024 — April 2024 · Remote",
    role: "React Developer Intern",
    company: "PeriData",
    url: "https://peridata.tech/",
    description:
      "Contributed to the company's web platform. Worked on real-world React projects, deepening production coding practices and team collaboration.",
    tags: ["React", "JavaScript"],
  },
  {
    active: false,
    period: "June 2023 — Aug 2023 · Remote",
    role: "SDE Intern",
    company: "NowAcquire",
    url: "https://www.nowacquire.com",
    description:
      "Built a Flutter stock trading app with real-time price feeds, JWT auth, KYC validation, and MongoDB aggregation pipelines for portfolio queries.",
    tags: ["Flutter", "MongoDB", "JWT"],
  },
] as const;

export type ProjectBadge = "featured" | "backend" | "fullstack" | "flutter" | "hackathon";

export const PROJECTS = [
  {
    name: "Event Arcade",
    badge: "featured" as ProjectBadge,
    badgeLabel: "Featured",
    description:
      "Real-time arcade engine on a single-writer goroutine pattern. Match engines push events via channels to one append-only log, eliminating lock contention. Deterministic seeded RNG for auditable outcomes. SHA-256 chained block store for tamper detection, Redis sorted sets for sub-100ms leaderboard updates.",
    stack: ["Go", "WebSocket", "Redis", "Goroutines", "SHA-256"],
    links: {
      github: "https://github.com/ayuuuuu0-0/event_arcade",
      live: "https://eventarcade.vercel.app",
    },
  },
  {
    name: "Load Balancer",
    badge: "backend" as ProjectBadge,
    badgeLabel: "Backend",
    description:
      "Custom HTTP load balancer written in Go. Supports round-robin and least-connections strategies with configurable health checks and automatic backend failover.",
    stack: ["Go", "HTTP", "Networking"],
    links: { github: "https://github.com/ayuuuuu0-0/loadbalancer_go" },
  },
  {
    name: "Qcache",
    badge: "backend" as ProjectBadge,
    badgeLabel: "Backend",
    description:
      "In-memory caching layer built in Go with TTL support, LRU eviction, and a simple HTTP API. Built to understand how caching systems handle key expiry and memory pressure.",
    stack: ["Go", "LRU", "HTTP API", "TTL"],
    links: { github: "https://github.com/ayuuuuu0-0/qcache" },
  },
  {
    name: "Focus",
    badge: "fullstack" as ProjectBadge,
    badgeLabel: "Full-Stack",
    description:
      "Productivity app for clean task management. Plan your day, manage priorities, and track what matters with a minimal, distraction-free UI.",
    stack: ["React", "NextJS", "Tailwind"],
    links: {
      github: "https://github.com/ayuuuuu0-0/focus",
      live: "https://focus-right.vercel.app",
    },
  },
  {
    name: "Jobify",
    badge: "fullstack" as ProjectBadge,
    badgeLabel: "Full-Stack",
    description:
      "React-based job seeking web app with TanStack Query, user authentication, profiles, and job posting/accepting flow.",
    stack: ["React", "TanStack Query", "Auth"],
    links: { github: "https://github.com/ayuuuuu0-0/jobify" },
  },
  {
    name: "NewsMania",
    badge: "fullstack" as ProjectBadge,
    badgeLabel: "Full-Stack",
    description:
      "News aggregator that fetches and categorizes headlines from multiple sources. Includes search, category filters, and a clean reading interface.",
    stack: ["React", "News API", "JavaScript"],
    links: { github: "https://github.com/ayuuuuu0-0/news-app" },
  },
  {
    name: "SheSecure",
    badge: "hackathon" as ProjectBadge,
    badgeLabel: "Hackathon",
    description:
      "Safety app with real-time location sharing, SOS alerts, and contact notification via SMS. Built during a hackathon.",
    stack: ["React Native", "GPS", "SMS API"],
    links: { github: "https://github.com/ayuuuuu0-0/SheSecure" },
  },
  {
    name: "College Cart",
    badge: "flutter" as ProjectBadge,
    badgeLabel: "Flutter",
    description:
      "Flutter marketplace for college students to buy and sell goods. User auth, profiles, and multimedia post creation.",
    stack: ["Flutter", "Firebase", "Auth"],
    links: {
      github: "https://github.com/ayuuuuu0-0/Uniconnect",
      live: "https://college-cart.vercel.app/",
    },
  },
  {
    name: "NowAcquire App",
    badge: "flutter" as ProjectBadge,
    badgeLabel: "Flutter",
    description:
      "Flutter stock trading app built during my 2023 internship. Real-time price feeds, JWT auth, KYC validation flow, and MongoDB aggregation pipelines for portfolio queries.",
    stack: ["Flutter", "MongoDB", "JWT", "WebSocket"],
    links: { github: "https://github.com/ayuuuuu0-0/now-acquire" },
  },
] as const;
