"use client";

import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { useState } from "react";

const graphs = [
  "Widget.png",
  "Widget-1.png",
  "Widget-2.png",
  "Widget-3.png",
  "Widget-4.png",
  "Widget-5.png",
  "Widget-6.png",
  "Widget-7.png",
  "Widget-8.png",
];

export function GraphMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-transparent py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="graph-marquee-track flex w-max gap-5"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {[...graphs, ...graphs].map((graph, index) => (
          <Image
            key={`${graph}-${index}`}
            src={assetPath(`/images/baiond/graphs/${graph}`)}
            alt=""
            width={458}
            height={146}
            loading="eager"
            className="h-[146px] w-[458px] shrink-0 rounded-xl bg-card object-cover shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition duration-300 hover:scale-105 hover:ring-2 hover:ring-foreground/40 hover:shadow-[0_20px_48px_rgba(0,0,0,0.5)]"
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-background to-transparent sm:w-60" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-background to-transparent sm:w-60" />
    </div>
  );
}
