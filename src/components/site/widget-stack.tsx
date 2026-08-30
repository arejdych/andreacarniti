"use client";

import { assetPath } from "@/lib/asset-path";
import { useEffect, useState } from "react";

const widgets = ["Widget.png", "Widget-1.png", "Widget-2.png"];
const widgetSrcs = widgets.map((w) => assetPath(`/images/baiond/widgets/${w}`));

export function WidgetStack() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Preload all images immediately
    widgetSrcs.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    const interval = window.setInterval(() => {
      setOffset((current) => (current + 1) % widgets.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  const order = widgets.map(
    (_, index) => (index + offset) % widgets.length
  );

  return (
    <div className="relative mx-auto aspect-[499/331] w-full max-w-[499px] overflow-hidden rounded-xl">
      {widgets.map((widget, i) => {
        const position = order.indexOf(i);
        return (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={widget}
            src={widgetSrcs[i]}
            alt=""
            width={499}
            height={291}
            className="widget-stack-item absolute left-0 w-full rounded-lg shadow-[0_12px_28px_rgba(0,0,0,0.45)] transition-[top,opacity,scale] duration-700 ease-in-out"
            style={{
              top: `${position * 20}px`,
              zIndex: position + 1,
              scale: position === 0 ? "0.85" : position === 1 ? "0.9" : "1",
              opacity: position === 0 ? 0.8 : position === 1 ? 0.9 : 1,
              transformOrigin: "top center",
            }}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}
