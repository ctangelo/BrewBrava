'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useI18n } from '@/components/i18n-provider';
import { LanguageSwitcher } from '@/components/language-switcher';
import type { Locale } from '@/lib/i18n';

interface HeaderProps {
  locale: Locale;
}

const navItems = [
  { href: '#beers', key: 'beers' },
  { href: '#brewing', key: 'brewing' },
  { href: '#team', key: 'team' },
  { href: '#partners', key: 'partners' },
  { href: '#contact', key: 'contact' }
] as const;

export function Header({ locale }: HeaderProps) {
  const { content } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const basePath = locale === 'vn' ? '' : `/${locale}`;

  const navLabels: Record<(typeof navItems)[number]['key'], string> = {
    beers: content.footer.navigation.beers[locale],
    brewing: content.brewing.title[locale],
    team: content.team.title[locale],
    partners: content.b2b.title[locale],
    contact: content.contact.title[locale]
  };

  const onContactClick = () => {
    const contactButton = document.querySelector<HTMLButtonElement>('[data-contact-trigger="modal"]');
    contactButton?.click();
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={`${basePath || '/'}`} className="flex items-center gap-2" aria-label="Brew Brava home">
          <div className="h-10 w-10 rounded-full bg-brand text-white grid place-items-center font-display text-xl">BB</div>
          <span className="font-display text-xl">{content.siteSettings.brand}</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`${basePath}${item.href}`}
              className="text-sm font-semibold uppercase tracking-wide text-night hover:text-brand"
            >
              {navLabels[item.key]}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            className="button-secondary"
            data-analytics="cta_contact"
            data-contact-trigger="modal"
            onClick={onContactClick}
          >
            <EnvelopeIcon className="h-4 w-4" aria-hidden />
            {content.hero.ctas.contact[locale]}
          </button>
          <LanguageSwitcher locale={locale} />
        </div>
        <button
          type="button"
          className="inline-flex rounded-full p-2 text-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden" role="dialog" aria-modal="true">
          <nav className="grid gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`${basePath}${item.href}`}
                className="rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-wide text-night hover:bg-sand"
                onClick={() => setMobileOpen(false)}
              >
                {navLabels[item.key]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between border-t border-slate-200 px-4 py-4">
            <button
              type="button"
              className="button-secondary w-full justify-center"
              data-analytics="cta_contact"
              data-contact-trigger="modal"
              onClick={onContactClick}
            >
              <EnvelopeIcon className="h-4 w-4" aria-hidden />
              {content.hero.ctas.contact[locale]}
            </button>
          </div>
          <div className="border-t border-slate-200 px-4 py-4">
            <LanguageSwitcher locale={locale} fullWidth />
          </div>
        </div>
      )}
    </header>
  );
}
