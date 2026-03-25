import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { fr: '/fr/privacy', en: '/en/privacy' },
    },
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      url: `${baseUrl}/${locale}/privacy`,
      siteName: 'Jean-Jacques Delegue',
      type: 'website',
    },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('privacy');

  const sections = [
    { title: t('introTitle'), content: t('introContent') },
    { title: t('collectionTitle'), content: t('collectionContent') },
    { title: t('purposeTitle'), content: t('purposeContent') },
    { title: t('thirdPartyTitle'), content: t('thirdPartyContent') },
    { title: t('analyticsTitle'), content: t('analyticsContent') },
    { title: t('retentionTitle'), content: t('retentionContent') },
    { title: t('rightsTitle'), content: t('rightsContent') },
    { title: t('contactTitle'), content: t('contactContent') },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/" className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground">
        {t('backHome')}
      </Link>

      <h1 className="mt-8 text-4xl font-bold tracking-tight">{t('title')}</h1>
      <p className="mt-3 font-mono text-xs text-muted-foreground/60">{t('lastUpdated')}</p>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-mono text-[11px] tracking-wider text-muted-foreground/50 uppercase">{section.title}</h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
