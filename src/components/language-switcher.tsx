'use client';

import { usePathname, useRouter } from '@/i18n/navigation';

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const otherLocale = locale === 'en' ? 'fr' : 'en';

  const switchLocale = () => {
    router.replace(pathname, { locale: otherLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
      aria-label={`Switch to ${otherLocale}`}
    >
      <span className="font-mono text-[11px] font-medium uppercase tracking-wider">{otherLocale}</span>
    </button>
  );
}
