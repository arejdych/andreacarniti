"use client";

import Image from "next/image";
import { useState } from "react";
import { assetPath } from "@/lib/asset-path";

const integrations = [
  { name: "Apple Health", src: assetPath("/images/cheerin/integrations/apple-health.svg") },
  { name: "Apple Fitness", src: assetPath("/images/cheerin/integrations/apple-fitness.png") },
  { name: "Strava", src: assetPath("/images/cheerin/integrations/strava.svg") },
  { name: "Fitbit", src: assetPath("/images/cheerin/integrations/fitbit.svg") },
  { name: "Garmin Connect", src: assetPath("/images/cheerin/integrations/garmin.svg") },
  { name: "Google Fit", src: assetPath("/images/cheerin/integrations/google-fit.svg") },
  { name: "Headspace", src: assetPath("/images/cheerin/integrations/headspace.svg") },
  { name: "Health Connect", src: assetPath("/images/cheerin/integrations/health-connect.svg") },
  { name: "Under Armour", src: assetPath("/images/cheerin/integrations/under-armour.avif") },
  { name: "Runna", src: assetPath("/images/cheerin/integrations/runna.webp") },
];

export function IntegrationMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="integration-marquee-track flex w-max"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {[0, 1, 2].map((group) => (
          <div
            key={group}
            className="integration-marquee-group flex shrink-0 gap-[100px] pr-[100px]"
            aria-hidden={group !== 0}
          >
            {integrations.map((integration) => (
              <Image
                key={`${group}-${integration.name}`}
                src={integration.src}
                alt={group === 0 ? integration.name : ""}
                width={64}
                height={64}
                priority
                className="size-16 shrink-0 rounded-2xl object-contain"
              />
            ))}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fff4f3] to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fff4f3] to-transparent sm:w-40" />
      <p className="mt-[72px] text-center text-3xl font-medium tracking-tight sm:text-4xl">
        Sync with 30+ apps
      </p>
      <p className="mt-4 text-center text-lg leading-relaxed text-muted-foreground">
        Aggregate data from all apps &amp; wearables
        <br />
        Share your progress across disciplines
      </p>
    </div>
  );
}
