import Image from "next/image";

export interface HeroContent {
  kicker: string;
  title: string;
  subtitle: string;
  badges: string[];
  primaryCta: string;
  secondaryCta: string;
}

export function Hero({ content }: { content: HeroContent }) {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-28 pb-20 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Пивоварня Brew Brava"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/65 to-black/85" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6">
        <div className="flex max-w-3xl flex-col gap-6">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">{content.kicker}</p>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">{content.title}</h1>
          <p className="max-w-2xl text-lg text-gray-200">{content.subtitle}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#styles"
              className="w-full rounded-full bg-accent px-6 py-3 text-center text-black font-semibold shadow-soft transition hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(211,139,38,0.4)] sm:w-auto"
            >
              {content.primaryCta}
            </a>
            <a
              href="#locations"
              className="w-full rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:border-accent hover:bg-white/5 sm:w-auto"
            >
              {content.secondaryCta}
            </a>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {content.badges.map((badge) => (
            <div
              key={badge}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
