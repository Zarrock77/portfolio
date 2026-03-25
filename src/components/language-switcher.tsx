'use client';

import { usePathname, useRouter } from '@/i18n/navigation';

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (target: string) => {
    if (target !== locale) {
      router.replace(pathname, { locale: target });
    }
  };

  return (
    <div className="flex h-7 items-center rounded-md border border-border bg-muted/50 p-0.5 font-mono text-[11px] font-medium uppercase tracking-wider">
      {(['fr', 'en'] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => switchTo(lang)}
          aria-label={`Switch to ${lang}`}
          className={`rounded px-2 py-1 transition-colors duration-150 ${
            locale === lang
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
