import type { Locale } from '@/lib/i18n';

export interface LocalizedString {
  en: string;
  ru: string;
  vi: string;
}

export interface CmsAddress {
  line1: LocalizedString;
  line2: LocalizedString;
}

export interface SiteSettings {
  brand: string;
  address: CmsAddress;
  phone: string;
  email: string;
  hours: LocalizedString;
  coordinates: {
    lat: number;
    lng: number;
  };
  mapsLink: string;
  social: {
    facebook: string;
    instagram: string;
    telegram: string;
    zalo: string;
  };
  meta: {
    title: LocalizedString;
    description: LocalizedString;
    ogImage: string;
  };
}

export interface HeroContent {
  headline: LocalizedString;
  tagline: LocalizedString;
  ctas: {
    visit: LocalizedString;
    contact: LocalizedString;
    partner: LocalizedString;
  };
  backgroundVideo: string | null;
  alt: LocalizedString;
}

export interface BrewingGalleryItem {
  slug: string;
  alt: LocalizedString;
  caption: LocalizedString;
  image: string;
}

export interface BrewingContent {
  title: LocalizedString;
  text: LocalizedString;
  gallery: BrewingGalleryItem[];
}

export interface BeerItem {
  slug: string;
  style: string;
  abv: number;
  ibu?: number;
  available: boolean;
  image_main: string;
  gallery: string[];
  name: LocalizedString;
  desc_short: LocalizedString;
  desc_long: LocalizedString;
}

export interface SectionIntro {
  title: LocalizedString;
  subtitle: LocalizedString;
  cta?: LocalizedString;
  footer?: LocalizedString;
}

export interface TeamGalleryItem {
  image: string;
  alt: LocalizedString;
  caption: LocalizedString;
}

export interface TeamContent {
  title: LocalizedString;
  text: LocalizedString;
  gallery: TeamGalleryItem[];
}

export interface BrewpubHighlight {
  slug: string;
  text: LocalizedString;
}

export interface BrewpubContent {
  title: LocalizedString;
  text: LocalizedString;
  highlights: BrewpubHighlight[];
  image: string;
  alt: LocalizedString;
}

export interface LicenseItem {
  title: LocalizedString;
  issue_date: string;
  image: string;
}

export interface LicensesContent {
  title: LocalizedString;
  text: LocalizedString;
  items: LicenseItem[];
}

export interface PartnerItem {
  name: string;
  type: string;
  city: string;
  logo: string;
  link: string;
}

export interface AvailabilityContent {
  title: LocalizedString;
  text: LocalizedString;
  partners: PartnerItem[];
  fallback: LocalizedString;
}

export interface B2BPoint {
  slug: string;
  text: LocalizedString;
}

export interface B2BFormText {
  name: LocalizedString;
  phone: LocalizedString;
  email: LocalizedString;
  format: LocalizedString;
  volume: LocalizedString;
  comment: LocalizedString;
  consent: LocalizedString;
  submit: LocalizedString;
  success: LocalizedString;
  error: LocalizedString;
  validation: {
    required: LocalizedString;
    email: LocalizedString;
  };
}

export interface B2BContent {
  title: LocalizedString;
  intro: LocalizedString;
  points: B2BPoint[];
  form: B2BFormText;
  image: string;
  alt: LocalizedString;
}

export interface ContactContent {
  title: LocalizedString;
  text: LocalizedString;
  ctaDirections: LocalizedString;
  modalTitle: LocalizedString;
  modalText: LocalizedString;
}

export interface FooterContent {
  mission: LocalizedString;
  navigation: Record<'beers' | 'brewpub' | 'partners' | 'contact', LocalizedString>;
  privacy: LocalizedString;
  terms: LocalizedString;
  copyright: LocalizedString;
}

export interface CmsContent {
  siteSettings: SiteSettings;
  hero: HeroContent;
  brewing: BrewingContent;
  beers: BeerItem[];
  beersIntro: SectionIntro;
  team: TeamContent;
  brewpub: BrewpubContent;
  licenses: LicensesContent;
  availability: AvailabilityContent;
  b2b: B2BContent;
  contact: ContactContent;
  footer: FooterContent;
  seo: {
    og: {
      type: string;
      image: string;
    };
  };
}

export type LocalizedField<T> = T extends LocalizedString ? string : never;

export const getLocalizedString = (value: LocalizedString, locale: Locale) => value[locale];
