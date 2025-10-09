'use client';

import Image from 'next/image';
import { useState, useTransition } from 'react';
import { submitB2BLead } from '@/app/actions';
import { useI18n } from '@/components/i18n-provider';
import type { Locale } from '@/lib/i18n';

interface B2BSectionProps {
  locale: Locale;
}

const businessTypes = ['bar', 'cafe', 'hotel', 'retail', 'other'] as const;
const businessLabels = {
  bar: { en: 'Bar', ru: 'Бар', vn: 'Quán bar' },
  cafe: { en: 'Cafe', ru: 'Кафе', vn: 'Quán cafe' },
  hotel: { en: 'Hotel', ru: 'Отель', vn: 'Khách sạn' },
  retail: { en: 'Retail shop', ru: 'Магазин', vn: 'Cửa hàng' },
  other: { en: 'Other', ru: 'Другое', vn: 'Khác' }
} as const;

export function B2BSection({ locale }: B2BSectionProps) {
  const { content } = useI18n();
  const b2b = content.b2b;
  const [errorFields, setErrorFields] = useState<string[]>([]);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    setErrorFields([]);
    setSuccess(null);
    formData.append('locale', locale);

    startTransition(async () => {
      const result = await submitB2BLead(formData);
      if (!result.success) {
        setErrorFields(result.errors);
        return;
      }
      setSuccess(b2b.form.success[locale]);
      (document.getElementById('b2b-form') as HTMLFormElement)?.reset();
    });
  };

  const errorSet = new Set(errorFields);
  const errorMessageFor = (field: string) => {
    if (!errorFields.length) return null;
    if (field === 'email' && errorSet.has('email')) {
      return b2b.form.validation.email[locale];
    }
    if (errorSet.has(field) || errorFields.some((err) => err.includes(field))) {
      return b2b.form.validation.required[locale];
    }
    if (errorSet.has('consent_required')) {
      return b2b.form.validation.required[locale];
    }
    return null;
  };

  return (
    <section id="partners" className="section-spacer bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row">
        <div className="lg:w-1/2">
          <h2 className="section-title">{b2b.title[locale]}</h2>
          <p className="section-subtitle">{b2b.intro[locale]}</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            {b2b.points.map((point) => (
              <li key={point.slug} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand" aria-hidden></span>
                {point.text[locale]}
              </li>
            ))}
          </ul>
          <div className="relative mt-8 h-72 rounded-3xl">
            <Image src={b2b.image} alt={b2b.alt[locale]} fill className="rounded-3xl object-cover" />
          </div>
        </div>
        <div className="lg:w-1/2">
          <form
            id="b2b-form"
            className="card p-6 md:p-8"
            action={handleSubmit}
            data-analytics="lead_b2b_submit"
          >
            <fieldset className="space-y-4" disabled={isPending}>
              <div>
                <label className="block text-sm font-semibold text-night" htmlFor="name">
                  {b2b.form.name[locale]}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-night focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                  required
                />
                {errorMessageFor('name') && <p className="mt-1 text-xs text-red-600">{errorMessageFor('name')}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-night" htmlFor="phone">
                  {b2b.form.phone[locale]}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-night focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                  required
                />
                {errorMessageFor('phone') && <p className="mt-1 text-xs text-red-600">{errorMessageFor('phone')}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-night" htmlFor="email">
                  {b2b.form.email[locale]}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-night focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                  required
                />
                {errorMessageFor('email') && <p className="mt-1 text-xs text-red-600">{errorMessageFor('email')}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-night" htmlFor="format">
                  {b2b.form.format[locale]}
                </label>
                <select
                  id="format"
                  name="format"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-night focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                  required
                >
                  <option value="">—</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {businessLabels[type][locale]}
                    </option>
                  ))}
                </select>
                {errorMessageFor('format') && <p className="mt-1 text-xs text-red-600">{errorMessageFor('format')}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-night" htmlFor="volume">
                  {b2b.form.volume[locale]}
                </label>
                <input
                  id="volume"
                  name="volume"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-night focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                  required
                />
                {errorMessageFor('volume') && <p className="mt-1 text-xs text-red-600">{errorMessageFor('volume')}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-night" htmlFor="comment">
                  {b2b.form.comment[locale]}
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-night focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                />
              </div>
              <label className="flex items-start gap-3 text-sm text-slate-600">
                <input type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-slate-300" required />
                {b2b.form.consent[locale]}
              </label>
              {errorFields.includes('consent_required') && (
                <p className="-mt-2 text-xs text-red-600">{b2b.form.validation.required[locale]}</p>
              )}
              <button type="submit" className="button-primary w-full justify-center" disabled={isPending}>
                {isPending ? `${b2b.form.submit[locale]}…` : b2b.form.submit[locale]}
              </button>
              {success && <p className="text-sm text-green-700">{success}</p>}
              {errorFields.length > 0 && !success && (
                <p className="text-sm text-red-600">{b2b.form.error[locale]}</p>
              )}
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}
