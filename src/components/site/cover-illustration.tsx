"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";

export function CoverIllustration({
  className = "",
  imageSrc,
  imageAlt,
  imageFit = "cover",
  imageWidth = 1728,
  imageHeight = 1383,
  secondaryImageSrc,
  secondaryImageAlt,
  frameClassName = "",
  interactive = true,
  imageClassName = "",
  frameless = false,
}: {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "contain" | "cover";
  imageWidth?: number;
  imageHeight?: number;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
  frameClassName?: string;
  interactive?: boolean;
  imageClassName?: string;
  frameless?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function openImage() {
    if (imageSrc) setIsOpen(true);
  }

  return (
    <div
      className={`relative overflow-visible rounded-xl ${className}`}
    >
      {imageSrc && (
        <div
          className={`group absolute bottom-0 left-0 h-full w-full overflow-hidden ${
            frameless
              ? ""
              : "rounded-xl border border-border shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_24px_72px_rgba(0,0,0,0.65)]"
          } ${interactive ? "cursor-zoom-in" : ""} ${frameClassName}`}
          {...(interactive
            ? {
                role: "button",
                tabIndex: 0,
                "aria-label": "Open full-size design preview",
                onClick: openImage,
                onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openImage();
                  }
                },
              }
            : {})}
        >
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            sizes="(max-width: 768px) 100vw, 1350px"
            className={`${imageFit === "cover" ? "object-cover" : "object-contain"} object-top ${imageClassName}`}
            priority
          />
          {!frameless && (
            <>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
            </>
          )}
        </div>
      )}
      {secondaryImageSrc && (
        <Image
          src={secondaryImageSrc}
          alt={secondaryImageAlt ?? ""}
          width={402}
          height={874}
          sizes="220px"
          className="pointer-events-none absolute bottom-[-30px] right-[5%] z-10 h-[82%] w-auto rounded-xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
        />
      )}
      {interactive && isOpen && imageSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Full-size design preview"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
            aria-label="Close full-size design preview"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            width={imageWidth}
            height={imageHeight}
            className="max-h-[92vh] w-auto max-w-[96vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
