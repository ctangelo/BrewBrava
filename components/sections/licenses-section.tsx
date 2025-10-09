'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useI18n } from '@/components/i18n-provider';
import type { Locale } from '@/lib/i18n';

interface LicensesSectionProps {
  locale: Locale;
}

export function LicensesSection({ locale }: LicensesSectionProps) {
  const { content } = useI18n();
  const licenses = content.licenses;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeLabels: Record<Locale, string> = {
    en: 'Close',
    ru: 'Закрыть',
    vn: 'Đóng'
  };

  return (
    <section id="licenses" className="section-spacer bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 max-w-3xl">
          <h2 className="section-title">{licenses.title[locale]}</h2>
          <p className="section-subtitle">{licenses.text[locale]}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {licenses.items.map((item, index) => (
            <button
              key={item.image}
              type="button"
              className="card overflow-hidden text-left"
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative h-56">
                <Image src={item.image} alt={item.title[locale]} fill className="object-cover" />
              </div>
              <div className="card-inner">
                <p className="text-sm font-semibold text-night">{item.title[locale]}</p>
                <p className="text-xs text-slate-500">{new Date(item.issue_date).toLocaleDateString(locale)}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {activeIndex !== null ? (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={licenses.items[activeIndex].title[locale]}>
          <div className="modal-panel max-w-3xl">
            <button
              type="button"
              className="ml-auto block px-4 py-2 text-sm font-semibold text-brand"
              onClick={() => setActiveIndex(null)}
            >
              {closeLabels[locale]}
            </button>
            <div className="relative h-[60vh] min-h-[320px]">
              <Image
                src={licenses.items[activeIndex].image}
                alt={licenses.items[activeIndex].title[locale]}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
