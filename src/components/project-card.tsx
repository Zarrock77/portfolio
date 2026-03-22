import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent-light"
          >
            {tag}
          </span>
        ))}
      </div>
      {(project.github || project.live) && (
        <div className="flex gap-4 pt-2 text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              GitHub &rarr;
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              Live &rarr;
            </a>
          )}
        </div>
      )}
    </div>
  );
}
