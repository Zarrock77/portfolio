import { getLocale, getTranslations } from 'next-intl/server';
import { getAllProjects } from '@/lib/projects';
import { getAllSkills } from '@/lib/skills';
import { getAllExperiences } from '@/lib/experiences';
import ContactForm from '@/components/contact-form';
import ScrollReveal from '@/components/scroll-reveal';

export default async function Home() {
  const locale = (await getLocale()) as 'en' | 'fr';
  const t = await getTranslations();
  const projects = getAllProjects(locale);
  const skills = getAllSkills(locale);
  const experiences = getAllExperiences(locale);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jean-Jacques Delegue',
    url: `${baseUrl}/${locale}`,
    jobTitle: t('hero.role'),
    description: t('metadata.description'),
    sameAs: ['https://github.com/Zarrock77', 'https://www.linkedin.com/in/jean-jacques-delegue/'],
    email: 'jean-jacques.delegue@epitech.eu',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Epitech',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="flex min-h-[85dvh] items-center">
        <div className="mx-auto w-full max-w-5xl px-6">
          <p className="animate-in-view delay-1 font-mono text-sm tracking-widest text-muted-foreground uppercase">
            {t('hero.role')}
          </p>
          <h1 className="animate-in-view delay-2 mt-6 text-5xl font-bold leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl">
            Jean-Jacques
            <br />
            Delegue
          </h1>
          <div className="animate-in-view delay-3 mt-8 max-w-lg">
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">{t('hero.description')}</p>
          </div>
          <div className="animate-in-view delay-4 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-foreground"
            >
              {t('hero.explorePortfolio')}
            </a>
            <a
              href="/CV_delegue_jean-jacques.pdf"
              download
              className="border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
            >
              {t('hero.downloadCV')}
            </a>
          </div>
          <div className="animate-in-view delay-5 mt-10 h-px w-12 bg-muted-foreground/30" />
          <div className="animate-in-view mt-8 flex flex-wrap items-center gap-6" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/Zarrock77"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
              <svg
                className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jean-jacques-delegue/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
              <svg
                className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
            <a
              href="mailto:jean-jacques.delegue@epitech.eu"
              className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Email
              <svg
                className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-24">
        <ScrollReveal>
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">{t('projects.title')}</h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <a
                href={project.github || '#'}
                target={project.github ? '_blank' : undefined}
                rel={project.github ? 'noopener noreferrer' : undefined}
                className="group flex h-full flex-col justify-between border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-sm"
              >
                <div>
                  <span className="font-mono text-xs text-muted-foreground/40">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[11px] text-muted-foreground/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <span className="text-xs text-muted-foreground/80 transition-colors group-hover:text-muted-foreground">
                      {t('projects.viewOnGithub')} &rarr;
                    </span>
                  )}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto w-full max-w-5xl px-6 py-24">
        <ScrollReveal>
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">{t('about.title')}</h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-12 lg:grid-cols-[2fr_1fr]">
          <ScrollReveal delay={80}>
            <div className="max-w-2xl space-y-5 text-muted-foreground leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <div className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
              <p className="font-mono text-[11px] tracking-wider text-muted-foreground/80 uppercase">
                {t('about.education')}
              </p>
              <h3 className="mt-3 text-base font-semibold tracking-tight text-foreground">{t('about.school')}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t('about.degree')}</p>
              <p className="mt-0.5 text-sm text-muted-foreground/80">{t('about.field')}</p>
              <p className="mt-3 font-mono text-xs text-muted-foreground/80">{t('about.period')}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section id="skills" className="mx-auto w-full max-w-5xl px-6 py-24">
        <ScrollReveal>
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">{t('skills.title')}</h2>
        </ScrollReveal>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {skills.map((category, i) => (
            <ScrollReveal key={category.name} delay={i * 80}>
              <div className="grid gap-4 py-8 sm:grid-cols-[1fr_2fr] sm:gap-8">
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-foreground">{category.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground/60">{category.description}</p>
                </div>
                <div className="flex flex-wrap items-start gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto w-full max-w-5xl px-6 py-24">
        <ScrollReveal>
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            {t('experience.title')}
          </h2>
        </ScrollReveal>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {experiences.map((entry, i) => (
            <ScrollReveal key={entry.company} delay={i * 100}>
              <div className="grid gap-4 py-8 sm:grid-cols-[1fr_2fr] sm:gap-8">
                <div>
                  {entry.dates.map((date) => (
                    <p key={date} className="font-mono text-xs text-muted-foreground/80">
                      {date}
                    </p>
                  ))}
                  <p className="mt-1 text-sm text-muted-foreground/60">{entry.location}</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-foreground">{entry.role}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{entry.company}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground/80 leading-relaxed">
                    {entry.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-24">
        <ScrollReveal>
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">{t('contact.title')}</h2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground leading-relaxed">{t('contact.subtitle')}</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <ContactForm />
        </ScrollReveal>
      </section>
    </>
  );
}
