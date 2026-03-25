import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: `/${locale}/legal`,
      languages: { fr: '/fr/legal', en: '/en/legal' },
    },
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      url: `${baseUrl}/${locale}/legal`,
      siteName: 'Jean-Jacques Delegue',
      type: 'website',
    },
  };
}

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal');

  const sections = [
    { title: t('editorTitle'), content: t('editorContent') },
    { title: t('hostingTitle'), content: t('hostingContent') },
    { title: t('ipTitle'), content: t('ipContent') },
    { title: t('responsibilityTitle'), content: t('responsibilityContent') },
    { title: t('contactTitle'), content: t('contactContent') },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/" className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground">
        {t('backHome')}
      </Link>

      <h1 className="mt-8 text-4xl font-bold tracking-tight">{t('title')}</h1>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-mono text-[11px] tracking-wider text-muted-foreground/80 uppercase">{section.title}</h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
