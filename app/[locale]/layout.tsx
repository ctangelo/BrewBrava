import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { I18nProvider } from '@/components/i18n-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getCmsContent } from '@/lib/get-cms';
import { defaultLocale, isLocale, locales, type Locale } from '@/lib/i18n';

export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  if (!isLocale(locale)) {
    return {};
  }
  const cms = await getCmsContent();
  return {
    title: cms.siteSettings.meta.title[locale],
    description: cms.siteSettings.meta.description[locale],
    openGraph: {
      title: cms.siteSettings.meta.title[locale],
      description: cms.siteSettings.meta.description[locale],
      images: [cms.siteSettings.meta.ogImage],
      locale: locale === 'vn' ? 'vi_VN' : locale === 'ru' ? 'ru_RU' : 'en_US',
      siteName: cms.siteSettings.brand,
      type: cms.seo.og.type,
      url: `https://brewbrava.example.com/${locale === defaultLocale ? '' : `${locale}/`}`
    },
    alternates: {
      canonical: locale === defaultLocale ? 'https://brewbrava.example.com/' : `https://brewbrava.example.com/${locale}`,
      languages: {
        'en': 'https://brewbrava.example.com/en',
        'ru': 'https://brewbrava.example.com/ru',
        'vi': 'https://brewbrava.example.com/',
        'x-default': 'https://brewbrava.example.com/'
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: cms.siteSettings.meta.title[locale],
      description: cms.siteSettings.meta.description[locale]
    }
  } satisfies Metadata;
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const cms = await getCmsContent();

  return (
    <I18nProvider locale={locale as Locale} content={cms}>
      <div className="flex min-h-screen flex-col">
        <Header locale={locale as Locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} />
      </div>
    </I18nProvider>
  );
}
