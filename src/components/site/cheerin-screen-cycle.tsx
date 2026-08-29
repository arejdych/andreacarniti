"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Screen = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const defaultScreens: Screen[] = [
  {
    src: "/images/cheerin/map.png",
    alt: "Cheerin activity map",
    width: 2711,
    height: 5646,
  },
  {
    src: "/images/cheerin/contact.png",
    alt: "Cheerin friend discovery profile",
    width: 904,
    height: 1882,
  },
];

export function CheerinScreenCycle({
  screens = defaultScreens,
}: {
  screens?: Screen[];
}) {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveScreen((screen) => (screen + 1) % screens.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [screens.length]);

  return (
    <div className="relative flex h-[677px] w-full items-center justify-center">
      {screens.map((screen, index) => (
        <Image
          key={screen.src}
          src={screen.src}
          alt={screen.alt}
          width={screen.width}
          height={screen.height}
          className={`absolute h-full w-auto object-contain transition-opacity duration-[1200ms] ${
            activeScreen === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
