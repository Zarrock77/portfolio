import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getAllProjects().find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.frontmatter.title} | Jean-Jacques Delegue`,
    description: project.frontmatter.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getAllProjects().find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  const { frontmatter } = project;

  // Dynamic import of the MDX file
  const MDXContent = (await import(`@/content/projects/${slug}.mdx`)).default;

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        &larr; Back to projects
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          {frontmatter.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {frontmatter.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent-light"
            >
              {tag}
            </span>
          ))}
        </div>
        {(frontmatter.github || frontmatter.live) && (
          <div className="mt-6 flex gap-4">
            {frontmatter.github && (
              <a
                href={frontmatter.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub &rarr;
              </a>
            )}
            {frontmatter.live && (
              <a
                href={frontmatter.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Live &rarr;
              </a>
            )}
          </div>
        )}
      </header>

      <article className="prose-custom">
        <MDXContent />
      </article>
    </div>
  );
}
