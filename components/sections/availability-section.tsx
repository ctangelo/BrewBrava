import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/components/i18n-provider';
import type { Locale } from '@/lib/i18n';

interface AvailabilitySectionProps {
  locale: Locale;
}

export function AvailabilitySection({ locale }: AvailabilitySectionProps) {
  const { content } = useI18n();
  const availability = content.availability;

  return (
    <section id="availability" className="section-spacer bg-foam">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 max-w-3xl">
          <h2 className="section-title">{availability.title[locale]}</h2>
          <p className="section-subtitle">{availability.text[locale]}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {availability.partners.map((partner) => (
            <Link key={partner.name} href={partner.link} target="_blank" rel="noreferrer" className="card p-6 text-center">
              <div className="relative mx-auto h-24 w-36">
                <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
              </div>
              <p className="mt-4 text-sm font-semibold text-night">{partner.name}</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {partner.type} — {partner.city}
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-slate-600">{availability.fallback[locale]}</p>
      </div>
    </section>
  );
}
