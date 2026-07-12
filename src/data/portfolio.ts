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
    name: "Quorum",
    badge: "featured" as ProjectBadge,
    badgeLabel: "Featured",
    description:
      "Multi-agent AI orchestration system built with LangGraph and Gemini. Five specialized agents — Planner, Researcher, Coder, Critic, and Synthesizer — reach quorum on complex tasks via a confidence-scored voting pipeline. Supports Redis working memory, Postgres episodic memory, Qdrant semantic search, and Kafka event streaming.",
    stack: ["Python", "LangGraph", "Gemini", "FastAPI", "Redis", "Postgres", "Kafka", "Qdrant"],
    links: {
      github: "https://github.com/ayuuuuu0-0/quorum",
      live: "https://huggingface.co/spaces/ayuuuuu0-0/quorum",
    },
  },
  {
    name: "Arbiter",
    badge: "featured" as ProjectBadge,
    badgeLabel: "Featured",
    description:
      "Production-grade multi-tenant authorization engine inspired by Google Zanzibar. Five Spring Boot 3 microservices behind a Spring Cloud Gateway handle RS256 JWT auth, RBAC + ABAC policy evaluation, relation tuple checks, and immutable audit logging. Per-tenant rate limiting via Redis, circuit breakers via Resilience4j.",
    stack: ["Java", "Spring Boot", "Spring Cloud Gateway", "PostgreSQL", "Redis", "Kafka", "JWT"],
    links: {
      github: "https://github.com/ayuuuuu0-0/arbiter",
      live: "https://arbiter-java.vercel.app",
    },
  },
  {
    name: "Monster",
    badge: "fullstack" as ProjectBadge,
    badgeLabel: "Full-Stack",
    description:
      "DSA boss-rush game where a monster roasts your code mistakes in real time. 285 problems across topics, Monaco editor, sandboxed multi-language execution (C++, Java, Python) via Piston, a shrinking timer, and a taunting monster that gets meaner as you level up. Stats tracked with SQLite.",
    stack: ["React", "Vite", "Node.js", "Express", "Piston", "Monaco Editor", "SQLite", "Tailwind"],
    links: {
      github: "https://github.com/ayuuuuu0-0/monster",
      live:   "https://dsamonster.vercel.app",
    },
  },
  {
    name: "Prepio",
    badge: "featured" as ProjectBadge,
    badgeLabel: "Featured",
    description:
      "Architected a 6-service Go microservices backend for a gamified career progression platform. Integrated PostgreSQL with automated schema migrations, implemented Redis-based caching and rate-limiting, and utilized Kafka for event-driven messaging. Built a concept-level evaluation",
    stack: ["Go", "NextJS", "Flutter", "Postgres", "Redis", "Kafka"],
    links: {
      github: "https://github.com/ayuuuuu0-0/prepio",
      live: "http://prepio-ai.vercel.app/",
    },
  },

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
