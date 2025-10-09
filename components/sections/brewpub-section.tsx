import Image from 'next/image';
import { useI18n } from '@/components/i18n-provider';
import type { Locale } from '@/lib/i18n';

interface BrewpubSectionProps {
  locale: Locale;
}

export function BrewpubSection({ locale }: BrewpubSectionProps) {
  const { content } = useI18n();
  const brewpub = content.brewpub;

  return (
    <section id="brewpub" className="section-spacer bg-sand/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center">
        <div className="md:w-1/2">
          <h2 className="section-title">{brewpub.title[locale]}</h2>
          <p className="section-subtitle">{brewpub.text[locale]}</p>
          <ul className="mt-6 space-y-3 text-sm text-night">
            {brewpub.highlights.map((highlight) => (
              <li key={highlight.slug} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand" aria-hidden></span>
                {highlight.text[locale]}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2">
          <div className="relative h-80 rounded-3xl shadow-xl">
            <Image src={brewpub.image} alt={brewpub.alt[locale]} fill className="rounded-3xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
