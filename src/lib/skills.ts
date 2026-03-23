import fs from 'fs';
import path from 'path';

interface SkillFile {
  order: number;
  name: string;
  skills: string[];
  en: { description: string };
  fr: { description: string };
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

const skillsDir = path.join(process.cwd(), 'src/content/skills');

export function getAllSkills(locale: 'en' | 'fr' = 'fr'): SkillCategory[] {
  const files = fs.readdirSync(skillsDir).filter((f) => f.endsWith('.json'));

  const categories = files.map((file) => {
    const raw = fs.readFileSync(path.join(skillsDir, file), 'utf-8');
    const data: SkillFile = JSON.parse(raw);
    const localized = locale === 'fr' ? data.fr : data.en;

    return {
      order: data.order,
      name: data.name,
      description: localized.description,
      skills: data.skills,
    };
  });

  return categories.sort((a, b) => a.order - b.order).map(({ order: _, ...rest }) => rest);
}
