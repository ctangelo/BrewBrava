'use client';

import { createContext, useContext, useMemo } from 'react';
import type { Locale } from '@/lib/i18n';
import type { CmsContent, LocalizedString } from '@/types/cms';

interface I18nContextValue {
  locale: Locale;
  t: (value: LocalizedString) => string;
  content: CmsContent;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({
  locale,
  content,
  children
}: {
  locale: Locale;
  content: CmsContent;
  children: React.ReactNode;
}) {
  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      content,
      t: (value: LocalizedString) => value[locale]
    }),
    [locale, content]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return ctx;
}
