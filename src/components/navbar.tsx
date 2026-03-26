'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/theme/theme-toggle';
import LanguageSwitcher from '@/components/language-switcher';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const links = [
    { href: '/#projects', label: t('projects') },
    { href: '/#about', label: t('about') },
    { href: '/#skills', label: t('skills') },
    { href: '/#experience', label: t('experience') },
    { href: '/#contact', label: t('contact') },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'border-b border-border py-3' : 'border-b border-transparent py-4'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-medium tracking-tight text-foreground">
          JJD
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex gap-8">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
        </div>

        {/* Mobile right side */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span
              className={`block h-px w-5 bg-current transition-all duration-200 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-5 bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-5 bg-current transition-all duration-200 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-sm md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-6 py-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
