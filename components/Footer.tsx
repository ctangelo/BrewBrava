import { ArrowUp, Instagram, MapPin, Phone, Mail } from "lucide-react";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Google Maps", href: "https://maps.google.com", icon: MapPin },
];

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-accent">Контакты</p>
            <h3 className="font-display text-3xl text-white">Всегда на связи</h3>
            <div className="flex flex-col gap-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span>+84 (000) 000-00-00</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span>hello@brewbrava.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span>Нячанг, Вьетнам</span>
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
              <p className="text-sm uppercase tracking-[0.25em] text-accent">Наверх</p>
              <h4 className="font-display text-2xl text-white">Плавный скролл</h4>
            </div>
            <p className="text-gray-300">
              Хотите ещё раз взглянуть на сорта? Вернитесь к началу страницы и выберите разделы, которые важны для вас.
            </p>
            <a
              href="#hero"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-black font-semibold shadow-soft transition hover:-translate-y-1"
            >
              <ArrowUp size={18} /> Наверх
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Brew Brava. Crafted in Nha Trang.</span>
          <span className="text-gray-500">Крафтовое пиво с уважением к ремеслу.</span>
        </div>
      </div>
    </footer>
  );
}
