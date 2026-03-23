import fs from 'fs';
import path from 'path';

interface ExperienceLocale {
  dates: string[];
  location: string;
  role: string;
  tasks: string[];
}

interface ExperienceFile {
  order: number;
  company: string;
  en: ExperienceLocale;
  fr: ExperienceLocale;
}

export interface Experience {
  company: string;
  dates: string[];
  location: string;
  role: string;
  tasks: string[];
}

const experiencesDir = path.join(process.cwd(), 'src/content/experiences');

export function getAllExperiences(locale: 'en' | 'fr' = 'fr'): Experience[] {
  const files = fs.readdirSync(experiencesDir).filter((f) => f.endsWith('.json'));

  const experiences = files.map((file) => {
    const raw = fs.readFileSync(path.join(experiencesDir, file), 'utf-8');
    const data: ExperienceFile = JSON.parse(raw);
    const localized = locale === 'fr' ? data.fr : data.en;

    return {
      order: data.order,
      company: data.company,
      ...localized,
    };
  });

  return experiences.sort((a, b) => a.order - b.order).map(({ order: _, ...rest }) => rest);
}
