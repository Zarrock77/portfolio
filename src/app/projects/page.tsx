import type { Metadata } from "next";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Jean-Jacques Delegue",
};

export default function ProjectsPage() {
  return (
    <Section title="Projects">
      <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
        A selection of projects I&apos;ve worked on. More to come as I continue
        to build and learn.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
