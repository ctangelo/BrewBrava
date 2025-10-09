'use client';

import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';
import { locales, defaultLocale, localeLabels, type Locale } from '@/lib/i18n';

interface LanguageSwitcherProps {
  locale: Locale;
  fullWidth?: boolean;
}

export function LanguageSwitcher({ locale, fullWidth }: LanguageSwitcherProps) {
  return (
    <Menu as="div" className={`relative ${fullWidth ? 'w-full' : ''}`}>
      <Menu.Button className={`button-secondary ${fullWidth ? 'w-full justify-between' : ''}`} aria-label="Change language">
        <span className="flex items-center gap-2">
          <span role="img" aria-hidden>
            {localeLabels[locale].flag}
          </span>
          <span>{localeLabels[locale].iso}</span>
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-xl bg-white p-2 shadow-lg focus:outline-none">
          {locales.map((lng) => {
            const label = localeLabels[lng];
            const href = lng === defaultLocale ? '/' : `/${lng}`;
            return (
              <Menu.Item key={lng}>
                {({ active }) => (
                  <Link
                    href={href}
                    className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm ${
                      active ? 'bg-sand text-brand-dark' : 'text-night'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span role="img" aria-hidden>
                        {label.flag}
                      </span>
                      <span className="font-semibold">{label.iso}</span>
                    </span>
                    <span className="text-xs text-slate-500">{label.native}</span>
                  </Link>
                )}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
