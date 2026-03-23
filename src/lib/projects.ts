import fs from 'fs';
import path from 'path';

interface LocalizedContent {
  description: string;
}

interface ProjectFile {
  order: number;
  title: string;
  tags: string[];
  github?: string;
  live?: string;
  en: LocalizedContent;
  fr: LocalizedContent;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

const projectsDir = path.join(process.cwd(), 'src/content/projects');

export function getAllProjects(locale: 'en' | 'fr' = 'fr'): Project[] {
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith('.json'));

  const projects = files.map((file) => {
    const raw = fs.readFileSync(path.join(projectsDir, file), 'utf-8');
    const data: ProjectFile = JSON.parse(raw);

    const localized = locale === 'fr' ? data.fr : data.en;
    return {
      order: data.order,
      title: data.title,
      description: localized.description,
      tags: data.tags,
      github: data.github,
      live: data.live,
    };
  });

  return projects.sort((a, b) => a.order - b.order).map(({ order: _, ...rest }) => rest);
}
