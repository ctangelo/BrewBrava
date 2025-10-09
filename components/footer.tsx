import Link from 'next/link';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useI18n } from '@/components/i18n-provider';
import type { Locale } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const { content } = useI18n();
  const year = new Date().getFullYear();
  const { footer, siteSettings } = content;
  const basePath = locale === 'vn' ? '' : `/${locale}`;
  const anchor = (hash: string) => (basePath ? `${basePath}${hash}` : hash);

  return (
    <footer id="footer" className="bg-night text-foam">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-brand text-white grid place-items-center font-display text-xl">BB</div>
            <span className="font-display text-2xl">{siteSettings.brand}</span>
          </div>
          <p className="text-sm text-slate-300">{footer.mission[locale]}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sand">{footer.navigation.beers[locale]}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={anchor('#beers')} className="hover:text-brand-light">
                {footer.navigation.beers[locale]}
              </Link>
            </li>
            <li>
              <Link href={anchor('#brewing')} className="hover:text-brand-light">
                {content.brewing.title[locale]}
              </Link>
            </li>
            <li>
              <Link href={anchor('#team')} className="hover:text-brand-light">
                {content.team.title[locale]}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sand">{footer.navigation.partners[locale]}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={anchor('#partners')} className="hover:text-brand-light">
                {content.b2b.title[locale]}
              </Link>
            </li>
            <li>
              <Link href={anchor('#b2b-form')} className="hover:text-brand-light">
                {footer.navigation.partners[locale]}
              </Link>
            </li>
            <li>
              <Link href={anchor('#contact')} className="hover:text-brand-light">
                {footer.navigation.contact[locale]}
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <LanguageSwitcher locale={locale} fullWidth />
          <div className="text-sm text-slate-300">
            <p>{siteSettings.address.line1[locale]}</p>
            <p>{siteSettings.address.line2[locale]}</p>
            <p>
              <a href={`tel:${siteSettings.phone}`} className="hover:text-brand-light">
                {siteSettings.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteSettings.email}`} className="hover:text-brand-light">
                {siteSettings.email}
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <a href={siteSettings.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <span aria-hidden role="img">
                📘
              </span>
            </a>
            <a href={siteSettings.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <span aria-hidden role="img">
                📸
              </span>
            </a>
            <a href={siteSettings.social.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
              <span aria-hidden role="img">
                ✈️
              </span>
            </a>
            <a href={siteSettings.social.zalo} target="_blank" rel="noreferrer" aria-label="Zalo">
              <span aria-hidden role="img">
                💬
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p dangerouslySetInnerHTML={{ __html: footer.copyright[locale].replace('{year}', String(year)) }} />
          <div className="flex gap-4">
            <Link href={(basePath ? `${basePath}/privacy` : '/privacy')} className="hover:text-brand-light">
              {footer.privacy[locale]}
            </Link>
            <Link href={(basePath ? `${basePath}/terms` : '/terms')} className="hover:text-brand-light">
              {footer.terms[locale]}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
