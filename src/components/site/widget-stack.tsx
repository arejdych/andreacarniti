"use client";

import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { useEffect, useState } from "react";

const widgets = ["Widget.png", "Widget-1.png", "Widget-2.png"];

export function WidgetStack() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setOffset((current) => (current + 1) % widgets.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  const changingWidgets = widgets.map(
    (_, index) => widgets[(index + offset) % widgets.length]
  );

  return (
    <div className="relative mx-auto aspect-[499/331] w-full max-w-[499px] overflow-hidden rounded-xl">
      {changingWidgets.map((widget, index) => (
        <Image
          key={widget}
          src={assetPath(`/images/baiond/widgets/${widget}`)}
          alt=""
          width={499}
          height={291}
          className="widget-stack-item absolute left-0 w-full rounded-lg shadow-[0_12px_28px_rgba(0,0,0,0.45)] transition-[top,opacity,scale] duration-700 ease-in-out"
          style={{
            top: `${index * 20}px`,
            zIndex: index + 1,
            scale: index === 0 ? "0.85" : index === 1 ? "0.9" : "1",
            opacity: index === 0 ? 0.8 : index === 1 ? 0.9 : 1,
            transformOrigin: "top center",
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
