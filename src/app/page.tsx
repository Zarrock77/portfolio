import Link from "next/link";
import Section from "@/components/section";
import SkillBadge from "@/components/skill-badge";
import ProjectCard from "@/components/project-card";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85dvh] items-center justify-center overflow-hidden">
        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Glow orb */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] rounded-full sm:h-[700px] sm:w-[700px]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            opacity: 0.08,
            animation: "hero-glow-pulse 6s ease-in-out infinite",
          }}
        />

        {/* Decorative lines */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="10%"
            y1="20%"
            x2="35%"
            y2="80%"
            stroke="var(--accent)"
            strokeWidth="1"
            strokeDasharray="200"
            style={{ animation: "hero-line-draw 3s ease-out 0.5s both" }}
          />
          <line
            x1="90%"
            y1="15%"
            x2="65%"
            y2="85%"
            stroke="var(--accent)"
            strokeWidth="1"
            strokeDasharray="200"
            style={{ animation: "hero-line-draw 3s ease-out 0.8s both" }}
          />
          <line
            x1="50%"
            y1="5%"
            x2="50%"
            y2="95%"
            stroke="var(--accent)"
            strokeWidth="0.5"
            strokeDasharray="200"
            style={{ animation: "hero-line-draw 3s ease-out 1.1s both" }}
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="hero-fade-up hero-delay-1 mb-8 flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent-light animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-accent-light uppercase">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="hero-fade-up hero-delay-2 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              <span className="block">Jean-Jacques</span>
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--accent-light), var(--accent), var(--accent-light))",
                }}
              >
                Delegue
              </span>
            </h1>

            {/* Role */}
            <p className="hero-fade-up hero-delay-3 mt-6 font-mono text-sm tracking-wide text-muted-foreground sm:text-base">
              Fullstack Developer &middot; Epitech Paris &middot; Brussels
            </p>

            {/* Description */}
            <p className="hero-fade-up hero-delay-4 mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Crafting modern web experiences from frontend to backend.
              <br className="hidden sm:block" />
              4th year student turning ideas into clean, performant code.
            </p>

            {/* Links */}
            <div className="hero-fade-up hero-delay-5 mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/Zarrock77"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2.5 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:text-foreground hover:shadow-[0_0_20px_-5px_var(--accent)]"
              >
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2.5 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:text-foreground hover:shadow-[0_0_20px_-5px_var(--accent)]"
              >
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:jean-jacques@example.com"
                className="group relative flex items-center gap-2.5 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:text-foreground hover:shadow-[0_0_20px_-5px_var(--accent)]"
              >
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to top, var(--background), transparent)",
          }}
        />
      </section>

      {/* About */}
      <Section title="About Me" id="about">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a fullstack developer and 4th year student at Epitech
              Paris, currently completing my international year at Epitech
              Brussels.
            </p>
            <p>
              From low-level C projects to modern web apps with React and
              Next.js, I enjoy exploring the full spectrum of development and
              building clean, efficient applications.
            </p>
          </div>
          <div className="space-y-6">
            {skillCategories.map((category) => (
              <div key={category.name}>
                <h3 className="mb-2 text-sm font-medium tracking-wide text-foreground uppercase">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section title="Featured Projects" id="projects">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-block rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
          >
            View All Projects &rarr;
          </Link>
        </div>
      </Section>

      {/* Contact */}
      <Section title="Get in Touch" id="contact">
        <p className="mb-8 max-w-xl text-muted-foreground leading-relaxed">
          Interested in working together or just want to say hello? Feel free to
          reach out.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Zarrock77"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:border-accent/50"
          >
            <svg
              className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-foreground">GitHub</p>
              <p className="text-xs text-muted-foreground">@Zarrock77</p>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:border-accent/50"
          >
            <svg
              className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-foreground">LinkedIn</p>
              <p className="text-xs text-muted-foreground">Connect with me</p>
            </div>
          </a>
          <a
            href="mailto:jean-jacques@example.com"
            className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:border-accent/50"
          >
            <svg
              className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <p className="text-xs text-muted-foreground">jean-jacques@example.com</p>
            </div>
          </a>
        </div>
      </Section>
    </>
  );
}
