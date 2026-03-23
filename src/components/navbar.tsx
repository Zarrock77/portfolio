'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/theme/theme-toggle';
import LanguageSwitcher from '@/components/language-switcher';
import { useTranslations, useLocale } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#projects', label: t('projects') },
    { href: '#about', label: t('about') },
    { href: '#skills', label: t('skills') },
    { href: '#experience', label: t('experience') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'border-b border-border py-3' : 'border-b border-transparent py-4'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
        <a href="#" className="font-mono text-sm font-medium tracking-tight text-foreground">
          JJD
        </a>

        <div className="flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
