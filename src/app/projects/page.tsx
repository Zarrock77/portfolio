import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/section";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Jean-Jacques Delegue",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Section title="Projects">
      <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
        A selection of projects I&apos;ve worked on. More to come as I continue
        to build and learn.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {project.frontmatter.title}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.frontmatter.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent-light"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
