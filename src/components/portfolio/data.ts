export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const EXPERIENCE = [
  {
    role: "Full Stack Web Development Intern",
    org: "Thiranex",
    detail:
      "Built and shipped production-facing web features across the React front end and API layer.",
  },
  {
    role: "Prompt Engineering Intern",
    org: "Future Interns",
    detail:
      "Built AI copy generators, UGC ad script tools, and SEO content cluster engines.",
  },
  {
    role: "Android Development Tasks",
    org: "CodeAlpha / CodSoft",
    detail:
      "Delivered Kotlin + Jetpack Compose task apps covering UI state, navigation, and local storage.",
  },
];

export const SKILL_GROUPS = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "Layout" as const,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "Bootstrap",
    ],
  },
  {
    id: "backend",
    label: "Backend & Databases",
    icon: "Database" as const,
    items: ["Python (FastAPI)", "Node.js", "MongoDB", "MySQL"],
  },
  {
    id: "mobile",
    label: "Mobile & IoT",
    icon: "Cpu" as const,
    items: ["Kotlin", "Java", "Jetpack Compose", "ESP32", "Arduino IDE"],
  },
  {
    id: "tools",
    label: "Tools & Cloud",
    icon: "Wrench" as const,
    items: ["Git", "GitHub", "Vercel", "Netlify", "Render", "Postman"],
  },
];

export const PROJECT_FILTERS = [
  "All",
  "Full Stack",
  "AI & Tools",
  "Mobile & IoT",
] as const;

export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

export const PROJECTS: {
  title: string;
  category: Exclude<ProjectFilter, "All">;
  description: string;
  tech: string[];
  demo: string;
  github: string;
}[] = [
  {
    title: "LogicGuard",
    category: "Full Stack",
    description:
      "Web application evaluating propositional logic constraints using FastAPI and React, built for an Anna University Discrete Mathematics course project.",
    tech: ["React", "FastAPI", "Tailwind CSS", "Python"],
    demo: "https://github.com/Ismail786-786",
    github: "https://github.com/Ismail786-786",
  },
  {
    title: "NeonSnap Studio",
    category: "Full Stack",
    description:
      "Web-based AR photo booth application featuring live face tracking, custom overlays, background segmentation, and dynamic QR code generation.",
    tech: ["JavaScript", "Web AR", "Tailwind CSS"],
    demo: "https://github.com/Ismail786-786",
    github: "https://github.com/Ismail786-786",
  },
  {
    title: "AI Content Suite",
    category: "AI & Tools",
    description:
      "Multi-tier AI prompt framework and web tool generating local business website copies, UGC video ad scripts, and SEO content clusters.",
    tech: ["React", "Next.js", "Prompt Engineering", "Tailwind CSS"],
    demo: "https://github.com/Ismail786-786",
    github: "https://github.com/Ismail786-786",
  },
  {
    title: "Mobile & IoT Works",
    category: "Mobile & IoT",
    description:
      "Android applications built with Jetpack Compose (Fitness Tracker & Flashcard App) alongside ESP32 embedded systems telemetry dashboards.",
    tech: ["Kotlin", "Jetpack Compose", "ESP32", "Arduino IDE", "Blynk"],
    demo: "https://github.com/Ismail786-786",
    github: "https://github.com/Ismail786-786",
  },
];

export const POSTS = [
  {
    title: "My Experience as a Prompt Engineering Intern at Future Interns",
    date: "Feb 2026",
    readTime: "6 min read",
    tag: "Internship log",
    excerpt:
      "What building copy generators, ad script tools, and SEO clusters taught me about structuring context and evaluating model output.",
  },
  {
    title: "Building LogicGuard: Connecting React to FastAPI",
    date: "Jan 2026",
    readTime: "8 min read",
    tag: "Engineering",
    excerpt:
      "Designing the request contract, validating propositional logic input, and keeping a typed front end honest against a Python solver.",
  },
  {
    title: "From ESP32 Sketches to Shipped Web Apps",
    date: "Dec 2025",
    readTime: "5 min read",
    tag: "IoT",
    excerpt:
      "How embedded prototyping changed the way I think about latency, state, and failure modes in full-stack interfaces.",
  },
];

export const CONTACT = {
  email: "mohammedismailh2008@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohammed-ismail-bb05a5385/",
  github: "https://github.com/Ismail786-786",
};
