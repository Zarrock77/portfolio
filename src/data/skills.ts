export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  { name: "Languages", skills: ["C", "C++", "TypeScript", "JavaScript", "Python"] },
  { name: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { name: "Backend", skills: ["Node.js", "Express", "REST APIs"] },
  { name: "Tools & DevOps", skills: ["Git", "Docker", "Linux", "GitHub Actions"] },
];
