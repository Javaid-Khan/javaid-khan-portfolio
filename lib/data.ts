import {
  Bot,
  Braces,
  Code2,
  Cpu,
  Database,
  Figma,
  FileCode2,
  Github,
  Globe2,
  Layers3,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  PenTool,
  Rocket,
  Settings2,
  TerminalSquare,
  Wrench
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      { name: "HTML", level: 86 },
      { name: "CSS", level: 82 },
      { name: "JavaScript", level: 76 },
      { name: "React", level: 68 },
      { name: "Next.js", level: 62 }
    ]
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "Git", level: 72 },
      { name: "GitHub", level: 70 },
      { name: "Docker", level: 48 },
      { name: "VS Code", level: 84 }
    ]
  },
  {
    title: "Additional Knowledge",
    icon: Cpu,
    items: [
      { name: "Basic Python", level: 56 },
      { name: "Agentic AI Fundamentals", level: 54 },
      { name: "System Thinking", level: 78 }
    ]
  }
];

export const services = [
  {
    title: "Frontend Web Development",
    description:
      "Clean React and Next.js interfaces designed for clarity, speed, and maintainable growth.",
    icon: Layers3
  },
  {
    title: "Responsive Website Development",
    description:
      "Mobile-first layouts that feel polished across phones, tablets, laptops, and wide screens.",
    icon: MonitorSmartphone
  },
  {
    title: "Landing Page Design",
    description:
      "Focused pages for products, profiles, and services with strong visual hierarchy and CTAs.",
    icon: Rocket
  },
  {
    title: "Figma to Code",
    description:
      "Careful implementation of UI designs into reusable, accessible, production-minded components.",
    icon: Figma
  }
];

export const projects = [
  {
    title: "React Web App",
    status: "Planning",
    description: "A practical interface-focused project to strengthen component thinking.",
    icon: LayoutDashboard
  },
  {
    title: "Portfolio Website",
    status: "In Progress",
    description: "A personal developer presence built with modern frontend fundamentals.",
    icon: Globe2
  },
  {
    title: "AI-powered Tool",
    status: "Future Idea",
    description: "An agentic AI utility concept for solving a real workflow problem.",
    icon: Bot
  }
];

export const highlights = [
  { label: "Engineering Degree", value: "Electronics" },
  // { label: "Graduate Year", value: "2003" },
  { label: "Focus", value: "Full-stack Web" },
  { label: "Mindset", value: "Clean Code" }
];

export const journey = [
  { icon: Cpu, text: "Electronics Engineering graduate from Sir Syed University, Karachi." },
  { icon: Braces, text: "Transitioning into modern full-stack development through focused self-learning." },
  { icon: FileCode2, text: "Learning by building with YouTube, online platforms, docs, and practical exercises." },
  { icon: Settings2, text: "Motivated by real-world problem solving, adaptability, and long-term impact." }
];

export const contactLinks = [
  { label: "Email", value: "engr.javaidkhan@gmail.com", href: "mailto:engr.javaidkhan@gmail.com", icon: PenTool },
  { label: "Phone", value: "+92 332-3392089", href: "tel:+923323392089", icon: TerminalSquare },
  { label: "GitHub", value: "github.com/dashboard", href: "https://github.com/dashboard", icon: Github }
];

export const techStack = ["TypeScript", "Next.js", "Tailwind CSS", "Zustand", "React Hook Form", "Zod"];
