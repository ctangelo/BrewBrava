'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPinIcon, UserGroupIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useI18n } from '@/components/i18n-provider';
import type { Locale } from '@/lib/i18n';

interface HeroSectionProps {
  locale: Locale;
  onContact: () => void;
}

export function HeroSection({ locale, onContact }: HeroSectionProps) {
  const { content } = useI18n();
  const hero = content.hero;
  const basePath = locale === 'vn' ? '' : `/${locale}`;
  const visitHref = basePath ? `${basePath}#map` : '#map';
  const partnerHref = basePath ? `${basePath}#b2b-form` : '#b2b-form';

  return (
    <section id="hero" className="relative overflow-hidden bg-night text-white">
      <div className="absolute inset-0">
        <Image
          src={content.siteSettings.meta.ogImage}
          alt={hero.alt[locale]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-night/60" aria-hidden></div>
      </div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-4 py-24 md:flex-row md:items-center">
        <div className="max-w-2xl space-y-6">
          <motion.span
            className="badge bg-white/20 text-white"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {content.siteSettings.brand}
          </motion.span>
          <motion.h1
            className="font-display text-4xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {hero.headline[locale]}
          </motion.h1>
          <motion.p
            className="text-lg text-slate-200 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {hero.tagline[locale]}
          </motion.p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={visitHref}
              className="button-primary"
              data-analytics="cta_visit_brewery"
            >
              <MapPinIcon className="h-4 w-4" aria-hidden />
              {hero.ctas.visit[locale]}
            </Link>
            <button
              type="button"
              onClick={onContact}
              className="button-secondary"
              data-analytics="cta_contact"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden />
              {hero.ctas.contact[locale]}
            </button>
            <Link
              href={partnerHref}
              className="button-secondary"
              data-analytics="cta_become_partner"
            >
              <UserGroupIcon className="h-4 w-4" aria-hidden />
              {hero.ctas.partner[locale]}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
