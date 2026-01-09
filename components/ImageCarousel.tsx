"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type CarouselImage = { src: string; alt?: string };

export function ImageCarousel({
  images,
  className = "",
  slideClassName = "aspect-[16/9]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  images: CarouselImage[];
  className?: string;
  slideClassName?: string;
  sizes?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((idx: number) => emblaApi?.scrollTo(idx), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  if (!images?.length) return null;

  return (
    <div className={`relative ${className}`}>
      <div ref={emblaRef} className="overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-soft">
        <div className="flex">
          {images.map((img, idx) => (
            <div key={idx} className={`relative min-w-0 flex-[0_0_100%] ${slideClassName}`}>
              <Image
                src={img.src}
                alt={img.alt ?? "Brew Brava"}
                fill
                className="object-cover"
                priority={idx === 0}
                sizes={sizes}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/35 via-transparent to-black/60" />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute z-10 left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-white backdrop-blur hover:bg-black/60"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute z-10 right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-white backdrop-blur hover:bg-black/60"
            aria-label="Next slide"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {images.map((_, idx) => (
                <button
                key={idx}
                type="button"
                onClick={() => scrollTo(idx)}
                className={`h-2 w-2 rounded-full transition ${
                    idx === selectedIndex ? "bg-accent" : "bg-white/25 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
            </div>

        </>
      )}
    </div>
  );
}
