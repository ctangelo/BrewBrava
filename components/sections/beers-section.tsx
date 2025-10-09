'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '@/components/i18n-provider';
import type { Locale } from '@/lib/i18n';

interface BeersSectionProps {
  locale: Locale;
  onWhereToTry: () => void;
}

export function BeersSection({ locale, onWhereToTry }: BeersSectionProps) {
  const { content } = useI18n();
  const { beers, beersIntro } = content;

  return (
    <section id="beers" className="section-spacer">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title">{beersIntro.title[locale]}</h2>
            <p className="section-subtitle">{beersIntro.subtitle[locale]}</p>
          </div>
          {beersIntro.cta ? (
            <button type="button" className="button-secondary" onClick={onWhereToTry} data-analytics="beer_card_click">
              {beersIntro.cta[locale]}
            </button>
          ) : null}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {beers.map((beer, index) => (
            <motion.article
              key={beer.slug}
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="relative h-72">
                <Image
                  src={beer.image_main}
                  alt={beer.name[locale]}
                  fill
                  sizes="(min-width: 1280px) 40vw, (min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="card-inner space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-display">{beer.name[locale]}</h3>
                  <span className="badge">{beer.style}</span>
                </div>
                <p className="text-sm text-slate-600">{beer.desc_short[locale]}</p>
                <dl className="flex gap-6 text-xs uppercase tracking-wide text-slate-500">
                  <div>
                    <dt>ABV</dt>
                    <dd className="text-lg font-semibold text-night">{beer.abv}%</dd>
                  </div>
                  {beer.ibu ? (
                    <div>
                      <dt>IBU</dt>
                      <dd className="text-lg font-semibold text-night">{beer.ibu}</dd>
                    </div>
                  ) : null}
                </dl>
                {beersIntro.cta ? (
                  <button
                    type="button"
                    className="button-secondary"
                    onClick={onWhereToTry}
                    data-analytics="beer_card_click"
                  >
                    {beersIntro.cta[locale]}
                  </button>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
        {beersIntro.footer ? (
          <p className="mt-12 max-w-3xl text-base text-slate-600">{beersIntro.footer[locale]}</p>
        ) : null}
      </div>
    </section>
  );
}
