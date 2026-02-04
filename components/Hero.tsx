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
    <section id="hero" className="relative isolate overflow-hidden text-white">
      
      {/* VIDEO BACKGROUND */}
      {/* <div className="relative w-full overflow-hidden h-[58vh] sm:h-[60vh] md:aspect-video md:h-auto md:max-h-[70vh] md:min-h-[420px]"> */}
      <div className="
          relative w-full overflow-hidden
          h-[95vh]
          sm:h-[65vh]
          md:aspect-video md:h-auto md:max-h-[70vh] md:min-h-[420px]
        ">
        
        <video
          className="absolute inset-0 h-full w-full object-cover object-[60%_35%] scale-[1.08] md:scale-100 md:object-center"

          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero.jpg"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

        {/* затемнение */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        {/* ✅ ВОТ ТУТ ТЕКСТ ПОВЕРХ ВИДЕО */}
        <div className="absolute inset-0 z-10">
          <div className="mx-auto flex h-full max-w-6xl flex-col justify-end gap-6 px-4 pb-8 pt-24 sm:pb-10 md:gap-10 md:px-6 md:pb-16 md:pt-28">
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
        </div>
      </div>
    </section>
  );
}

