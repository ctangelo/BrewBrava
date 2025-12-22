import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  tone?: "dark" | "surface" | "muted";
}

export function Section({ id, title, subtitle, children, tone = "surface" }: SectionProps) {
  const background =
    tone === "dark" ? "bg-background" : tone === "muted" ? "bg-[#111118]" : "bg-surface";

  return (
    <section id={id} className={`${background} border-t border-white/10`}>
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mb-8 flex flex-col gap-2">
          {subtitle && <p className="text-sm uppercase tracking-[0.25em] text-accent">{subtitle}</p>}
          {title && <h2 className="font-display text-3xl md:text-4xl">{title}</h2>}
        </div>
        {children}
      </div>
    </section>
  );
}
