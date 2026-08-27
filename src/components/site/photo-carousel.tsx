"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Slide = {
  src: string;
  alt: string;
  caption?: string;
};

const AUTO_ADVANCE_MS = 3000;

export function PhotoCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  const active = slides[index];

  return (
    <div className="w-full">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            className={cn(
              "rounded-xl object-cover transition-opacity duration-700 ease-in-out",
              i === index ? "opacity-100" : "opacity-0"
            )}
            priority={i === 0}
          />
        ))}
      </div>
      {active.caption && (
        <p className="mt-2 font-mono text-xs text-muted-foreground">
          {active.caption}
        </p>
      )}
    </div>
  );
}
