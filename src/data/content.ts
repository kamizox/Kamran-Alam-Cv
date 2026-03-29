export const profile = {
  name: "Alex Rivera",
  role: "Frontend Developer / Creative Designer",
  tagline: "I craft interfaces that feel like instruments — precise, responsive, and a little electric.",
  email: "hello@alexrivera.dev",
  location: "Remote · Earth",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    discord: "https://discord.com",
  },
  intro: `I'm a developer who treats the browser like a canvas and the terminal like home.
I obsess over motion, typography, and the tiny details that make software feel alive.
When I'm not shipping pixels, I'm sketching systems, breaking CSS, or chasing the perfect easing curve.`,
}

export const heroTypingLines = [
  "> initializing portfolio…",
  "> loading creativity modules…",
  "> status: ready to build something unforgettable.",
]

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind / CSS", level: 94 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "REST / GraphQL", level: 78 },
      { name: "PostgreSQL", level: 72 },
      { name: "Auth & APIs", level: 80 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    skills: [
      { name: "Git / CI", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Vite / Webpack", level: 88 },
      { name: "Testing", level: 75 },
    ],
  },
]

export type ProjectFilter = "all" | "web" | "design" | "experiment"

export const projects: {
  id: string
  title: string
  description: string
  image: string
  stack: string[]
  live: string
  github: string
  category: Exclude<ProjectFilter, "all">
}[] = [
  {
    id: "1",
    title: "Nebula Dashboard",
    description:
      "Real-time analytics workspace with glass panels, neon charts, and keyboard-first navigation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    stack: ["React", "D3", "WebSockets"],
    live: "https://example.com",
    github: "https://github.com",
    category: "web",
  },
  {
    id: "2",
    title: "Synth UI Kit",
    description:
      "Design system and component library built for dark-first products and motion-heavy interfaces.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    stack: ["Storybook", "Figma", "React"],
    live: "https://example.com",
    github: "https://github.com",
    category: "design",
  },
  {
    id: "3",
    title: "Echo Chat",
    description:
      "Minimal collaborative editor with CRDT sync, presence cursors, and terminal aesthetic.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    stack: ["Next.js", "Yjs", "PartyKit"],
    live: "https://example.com",
    github: "https://github.com",
    category: "web",
  },
  {
    id: "4",
    title: "Glitch Poster Gen",
    description:
      "Generative art tool that exports SVG posters with seeded randomness and export presets.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a2bd57f75?w=800&q=80",
    stack: ["Canvas", "TypeScript", "Vite"],
    live: "https://example.com",
    github: "https://github.com",
    category: "experiment",
  },
]

export const experience = [
  {
    period: "2024 — Present",
    title: "Senior Frontend Engineer",
    company: "Lumen Labs",
    detail:
      "Leading design-system evolution, performance budgets, and mentoring on React + animation patterns.",
  },
  {
    period: "2021 — 2024",
    title: "Product Engineer",
    company: "Northwind Digital",
    detail:
      "Shipped customer-facing dashboards, integrated APIs, and established accessibility baselines across teams.",
  },
  {
    period: "2019 — 2021",
    title: "UI Developer",
    company: "Studio Meridian",
    detail:
      "Built marketing sites and interactive campaigns with a focus on motion and responsive typography.",
  },
]

export const education = [
  {
    period: "2015 — 2019",
    title: "B.Sc. Computer Science",
    place: "Tech Institute",
    detail: "Focus on HCI, graphics, and software architecture.",
  },
]

export const cvSummary = `Product-minded frontend engineer with a design background. I bridge Figma and production code, ship accessible interfaces, and care deeply about motion, performance, and developer experience.`
