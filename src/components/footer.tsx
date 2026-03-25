'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 text-sm sm:grid-cols-4">
        <div>
          <p className="font-mono text-sm font-medium text-foreground">JJD</p>
          <p className="mt-2 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Jean-Jacques Delegue.
            <br />
            {t('rights')}
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-wider text-muted-foreground/50 uppercase">{t('navigation')}</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <a href="#projects" className="transition-colors hover:text-foreground">
                {nav('projects')}
              </a>
            </li>
            <li>
              <a href="#about" className="transition-colors hover:text-foreground">
                {nav('about')}
              </a>
            </li>
            <li>
              <a href="#skills" className="transition-colors hover:text-foreground">
                {nav('skills')}
              </a>
            </li>
            <li>
              <a href="#experience" className="transition-colors hover:text-foreground">
                {nav('experience')}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-wider text-muted-foreground/50 uppercase">{t('contact')}</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <a
                href="https://github.com/Zarrock77"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jean-jacques-delegue/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:jean-jacques.delegue@epitech.eu" className="transition-colors hover:text-foreground">
                Email
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-wider text-muted-foreground/50 uppercase">{t('legal')}</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-foreground">
                {t('privacyPolicy')}
              </Link>
            </li>
            <li>
              <Link href="/legal" className="transition-colors hover:text-foreground">
                {t('legalNotice')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
