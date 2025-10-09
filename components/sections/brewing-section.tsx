import Image from 'next/image';
import { useI18n } from '@/components/i18n-provider';
import type { Locale } from '@/lib/i18n';

interface BrewingSectionProps {
  locale: Locale;
}

export function BrewingSection({ locale }: BrewingSectionProps) {
  const { content } = useI18n();
  const brewing = content.brewing;

  return (
    <section id="brewing" className="section-spacer bg-foam">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title">{brewing.title[locale]}</h2>
            <p className="section-subtitle">{brewing.text[locale]}</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brewing.gallery.map((item) => (
            <figure key={item.slug} className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.alt[locale]}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 90vw"
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
