"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "О нас" },
  { href: "#styles", label: "Сорта" },
  { href: "#cafe", label: "Кафе" },
  { href: "#locations", label: "Где найти" },
  { href: "#b2b", label: "B2B" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-lg bg-background/80 border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="#hero" className="font-display text-xl tracking-wide uppercase text-gradient">
          Brew Brava
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-200 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href="#b2b"
            className="rounded-full border border-accent/60 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10"
          >
            Стать партнёром
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
              <a
                href="#b2b"
                className="mt-2 rounded-lg bg-accent px-3 py-2 text-center text-black font-semibold"
                onClick={() => setOpen(false)}
              >
                Стать партнёром
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
