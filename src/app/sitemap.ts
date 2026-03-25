import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const legalPages = ['legal', 'privacy'];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const homeEntries = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1.0,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}`])),
    },
  }));

  const legalEntries = legalPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}/${page}`])),
      },
    }))
  );

  return [...homeEntries, ...legalEntries];
}
