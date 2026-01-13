"use client";


import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Languages } from "lucide-react";
import { Language, languageOptions } from "@/lib/i18n";

const LANG_FLAGS: Record<Language, { src: string; alt: string }> = {
  ru: { src: "/flags/ru.svg", alt: "RU" },
  en: { src: "/flags/en.svg", alt: "EN" },
  vi: { src: "/flags/vi.svg", alt: "VN" },
};

interface HeaderProps {
  links: { href: string; label: string }[];
  ctaLabel: string;
  language: Language;
  languageLabel: string;
  onLanguageChange: (lang: Language) => void;
}

export function Header({ links, ctaLabel, language, languageLabel, onLanguageChange }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 text-[15px] z-40 backdrop-blur-lg bg-background/80 border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="#hero"
          className="flex items-center gap-3 font-display  font-bold tracking-wide uppercase text-white"
        >
          <Image
            src="/logo_2.png"
            alt="Brew Brava"
            width={40}
            height={40}
            priority
          />
          <span>Brew Brava</span>
        </Link>

        <nav className="hidden items-center gap-8 font-medium text-gray-200 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200">
            <Languages size={14} className="text-accent" />
            <Image
              src={LANG_FLAGS[language].src}
              alt={LANG_FLAGS[language].alt}
              width={16}
              height={16}
              className="rounded-sm"
              priority
            />

            <label className="sr-only" htmlFor="language-select-desktop">
              {languageLabel}
            </label>
            <select
              id="language-select-desktop"
              value={language}
              onChange={(event) => onLanguageChange(event.target.value as Language)}
              className="bg-transparent text-sm focus:outline-none"
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-surface text-gray-900">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <a
            href="#b2b"
            className="rounded-full border border-accent/60 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10"
          >
            {ctaLabel}
          </a>
        </nav>
        <button
          aria-label="Toggle menu"
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 pb-4 md:hidden">
          <div className="rounded-2xl border border-white/10 bg-surface/90 p-4 shadow-soft">
            <div className="flex flex-col gap-3 text-sm text-gray-100">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-2 py-2 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <Languages size={16} className="text-accent" />
                <Image
                  src={LANG_FLAGS[language].src}
                  alt={LANG_FLAGS[language].alt}
                  width={18}
                  height={18}
                  className="rounded-sm"
                  priority
                />

                <label className="sr-only" htmlFor="language-select-mobile">
                  {languageLabel}
                </label>
                <select
                  id="language-select-mobile"
                  value={language}
                  onChange={(event) => {
                    onLanguageChange(event.target.value as Language);
                    setOpen(false);
                  }}
                  className="w-full bg-transparent text-sm focus:outline-none"
                >
                  {languageOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-surface text-gray-900">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <a
                href="#b2b"
                className="mt-2 rounded-lg bg-accent px-3 py-2 text-center text-black font-semibold"
                onClick={() => setOpen(false)}
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
