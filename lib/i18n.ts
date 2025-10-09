export const locales = ['en', 'ru', 'vn'] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, { label: string; native: string; iso: string; flag: string }> = {
  en: { label: 'English', native: 'English', iso: 'EN', flag: '🇺🇸' },
  ru: { label: 'Russian', native: 'Русский', iso: 'RU', flag: '🇷🇺' },
  vn: { label: 'Vietnamese', native: 'Tiếng Việt', iso: 'VI', flag: '🇻🇳' }
};

export const defaultLocale: Locale = 'vn';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
