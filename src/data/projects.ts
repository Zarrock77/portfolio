export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Portfolio",
    description:
      "My personal portfolio website built with Next.js 16, React 19, and Tailwind CSS v4.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Zarrock77/Portfolio",
  },
  {
    slug: "project-alpha",
    title: "Project Alpha",
    description:
      "A placeholder project — replace this with one of your real projects.",
    tags: ["C", "Linux"],
  },
  {
    slug: "project-beta",
    title: "Project Beta",
    description:
      "Another placeholder project — replace this with one of your real projects.",
    tags: ["Python", "Docker"],
  },
];
