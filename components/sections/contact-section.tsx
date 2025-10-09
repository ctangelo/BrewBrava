'use client';

import Link from 'next/link';
import { useI18n } from '@/components/i18n-provider';
import type { Locale } from '@/lib/i18n';

interface ContactSectionProps {
  locale: Locale;
  onContact: () => void;
}

export function ContactSection({ locale, onContact }: ContactSectionProps) {
  const { content } = useI18n();
  const { contact, siteSettings } = content;

  const socials = [
    { key: 'zalo', label: 'Zalo', icon: '💬', href: siteSettings.social.zalo },
    { key: 'facebook', label: 'Facebook', icon: '📘', href: siteSettings.social.facebook },
    { key: 'telegram', label: 'Telegram', icon: '✈️', href: siteSettings.social.telegram },
    { key: 'instagram', label: 'Instagram', icon: '📸', href: siteSettings.social.instagram }
  ];

  return (
    <section id="contact" className="section-spacer bg-night text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[2fr,3fr]">
          <div className="space-y-6">
            <h2 className="section-title text-white">{contact.title[locale]}</h2>
            <p className="section-subtitle text-slate-200">{contact.text[locale]}</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary border-white/30 text-white hover:bg-white/10"
                >
                  <span aria-hidden>{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
            <button type="button" className="button-primary" onClick={onContact}>
              {contact.modalTitle[locale]}
            </button>
            <div className="space-y-2 text-sm text-slate-200">
              <p>
                <a href={`tel:${siteSettings.phone}`} className="hover:text-brand-light">
                  {siteSettings.phone}
                </a>
              </p>
              <p>{siteSettings.address.line1[locale]}</p>
              <p>{siteSettings.address.line2[locale]}</p>
              <p>{siteSettings.hours[locale]}</p>
              <a href={siteSettings.mapsLink} className="button-secondary mt-4 inline-flex" target="_blank" rel="noreferrer">
                {contact.ctaDirections[locale]}
              </a>
            </div>
          </div>
          <div id="map" className="overflow-hidden rounded-3xl border border-white/10 shadow-lg">
            <iframe
              title="Brew Brava map"
              src={`https://www.google.com/maps/embed/v1/place?key=${
                process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? 'AIzaSyD-sample'
              }&zoom=15&q=${encodeURIComponent(siteSettings.address.line1.en)}`}
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
