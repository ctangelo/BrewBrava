'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { BrewingSection } from '@/components/sections/brewing-section';
import { BeersSection } from '@/components/sections/beers-section';
import { TeamSection } from '@/components/sections/team-section';
import { BrewpubSection } from '@/components/sections/brewpub-section';
import { LicensesSection } from '@/components/sections/licenses-section';
import { AvailabilitySection } from '@/components/sections/availability-section';
import { B2BSection } from '@/components/sections/b2b-section';
import { ContactSection } from '@/components/sections/contact-section';
import { ContactModal } from '@/components/contact-modal';
import { StructuredData } from '@/components/structured-data';
import type { Locale } from '@/lib/i18n';

interface LandingPageProps {
  locale: Locale;
}

export function LandingPage({ locale }: LandingPageProps) {
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToPartners = () => {
    document.querySelector('#availability')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection locale={locale} onContact={() => setContactOpen(true)} />
      <BrewingSection locale={locale} />
      <BeersSection locale={locale} onWhereToTry={scrollToPartners} />
      <TeamSection locale={locale} />
      <BrewpubSection locale={locale} />
      <LicensesSection locale={locale} />
      <AvailabilitySection locale={locale} />
      <B2BSection locale={locale} />
      <ContactSection locale={locale} onContact={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} locale={locale} />
      <StructuredData locale={locale} />
    </>
  );
}
