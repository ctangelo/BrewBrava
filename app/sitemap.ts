import type { MetadataRoute } from 'next';
import { getCmsContent } from '@/lib/get-cms';
import { locales, defaultLocale } from '@/lib/i18n';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cms = await getCmsContent();
  const baseUrl = 'https://brewbrava.example.com';

  const localeEntries = locales.map((locale) => ({
    url: locale === defaultLocale ? `${baseUrl}/` : `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        ru: `${baseUrl}/ru`,
        vi: `${baseUrl}/`
      }
    }
  }));

  const beerAnchors = cms.beers.map((beer) => ({
    url: `${baseUrl}/#${beer.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const
  }));

  return [...localeEntries, ...beerAnchors];
}
