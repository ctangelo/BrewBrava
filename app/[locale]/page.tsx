import { LandingPage } from '@/components/landing-page';
import { isLocale, type Locale } from '@/lib/i18n';

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) {
    return null;
  }

  return <LandingPage locale={params.locale as Locale} />;
}
