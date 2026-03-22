import fs from "fs";
import path from "path";

export interface ProjectFrontmatter {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  date: string;
}

export interface ProjectEntry {
  slug: string;
  frontmatter: ProjectFrontmatter;
}

const PROJECTS_DIR = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): ProjectEntry[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));

  const projects = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf-8");
    const frontmatter = parseFrontmatter(raw);
    return { slug, frontmatter };
  });

  return projects.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
}

export function getFeaturedProjects(): ProjectEntry[] {
  return getAllProjects().filter((p) => p.frontmatter.featured);
}

function parseFrontmatter(raw: string): ProjectFrontmatter {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    return { title: "", description: "", tags: [], date: "" };
  }

  const block = match[1];
  const data: Record<string, string | string[] | boolean> = {};

  for (const line of block.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""));
    } else if (value === "true") {
      data[key] = true;
    } else if (value === "false") {
      data[key] = false;
    } else {
      data[key] = value.replace(/^["']|["']$/g, "");
    }
  }

  return data as unknown as ProjectFrontmatter;
}
