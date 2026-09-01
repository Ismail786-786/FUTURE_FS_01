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
      "A web application that evaluates propositional logic constraints, pairing a React interface with a FastAPI solver. Built as an Anna University Discrete Mathematics course project.",
    tech: ["React", "FastAPI", "Python", "TypeScript"],
    demo: "https://github.com/mohammedismailh",
    github: "https://github.com/mohammedismailh",
  },
  {
    title: "NeonSnap Studio",
    category: "Full Stack",
    description:
      "A web-based AR photo booth with live face tracking, custom overlays, and QR code generation for instant photo hand-off.",
    tech: ["React", "WebRTC", "Face Tracking", "QR"],
    demo: "https://github.com/mohammedismailh",
    github: "https://github.com/mohammedismailh",
  },
  {
    title: "AI Content Suite",
    category: "AI & Tools",
    description:
      "Future Interns build: an AI website copy generator, a UGC ad script generator, and an SEO content cluster engine driven by structured prompt pipelines.",
    tech: ["Prompt Engineering", "Python", "LLM APIs", "SEO"],
    demo: "https://github.com/mohammedismailh",
    github: "https://github.com/mohammedismailh",
  },
  {
    title: "Fitness Tracker & Flashcard Apps",
    category: "Mobile & IoT",
    description:
      "Jetpack Compose Android applications built during internship tasks — activity logging with progress stats, plus a spaced-repetition flashcard deck.",
    tech: ["Kotlin", "Jetpack Compose", "Android", "Room"],
    demo: "https://github.com/mohammedismailh",
    github: "https://github.com/mohammedismailh",
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
  email: "mohammedismailh.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohammed-ismail-h",
  github: "https://github.com/mohammedismailh",
};
