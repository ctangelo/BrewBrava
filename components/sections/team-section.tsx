import Image from 'next/image';
import { useI18n } from '@/components/i18n-provider';
import type { Locale } from '@/lib/i18n';

interface TeamSectionProps {
  locale: Locale;
}

export function TeamSection({ locale }: TeamSectionProps) {
  const { content } = useI18n();
  const team = content.team;

  return (
    <section id="team" className="section-spacer bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-3xl">
          <h2 className="section-title">{team.title[locale]}</h2>
          <p className="section-subtitle">{team.text[locale]}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {team.gallery.map((item) => (
            <figure key={item.image} className="card overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.alt[locale]}
                  fill
                  sizes="(min-width: 1280px) 45vw, (min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="card-inner text-sm text-slate-600">{item.caption[locale]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
