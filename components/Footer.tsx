import { ArrowUp, Instagram, MapPin, Facebook, Mail, Send } from "lucide-react";

export interface FooterCopy {
  contactsLabel: string;
  contactsTitle: string;
  phone: string;
  email: string;
  address: string;
  social: { label: string; href: string }[];
  scrollLabel: string;
  scrollTitle: string;
  scrollBody: string;
  scrollCta: string;
  footerNote: string;
}

export function Footer({ copy }: { copy: FooterCopy }) {
  const socialLinks = [
    { label: copy.social[0].label, href: copy.social[0].href, icon: Instagram },
    { label: copy.social[1].label, href: copy.social[1].href, icon: MapPin },
    { label: copy.social[2].label, href: copy.social[2].href, icon: Send },
    { label: copy.social[3].label, href: copy.social[3].href, icon: Facebook },
  ];

  return (
    <footer id="contacts" className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-accent">{copy.contactsLabel}</p>
            <h3 className="font-display text-3xl text-white">{copy.contactsTitle}</h3>
            <div className="flex flex-col gap-3 text-gray-300">
              {/* <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span>{copy.phone}</span>
              </div> */}
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span>{copy.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span>{copy.address}</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-white">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-surface/60 p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-accent">{copy.scrollLabel}</p>
              <h4 className="font-display text-2xl text-white">{copy.scrollTitle}</h4>
            </div>
            <p className="text-gray-300">{copy.scrollBody}</p>
            <a
              href="#hero"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-black font-semibold shadow-soft transition hover:-translate-y-1"
            >
              <ArrowUp size={18} /> {copy.scrollCta}
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Brew Brava. Crafted in Nha Trang.</span>
          <span className="text-gray-500">{copy.footerNote}</span>
        </div>
      </div>
    </footer>
  );
}
