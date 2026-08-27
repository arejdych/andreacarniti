"use client";

import { useEffect, useState } from "react";

const phrases = [
  "I research",
  "I define direction",
  "I design",
  "I vibe code",
  "I build",
  "I measure",
];
const ROW_EM = 1.15;
const INTERVAL_MS = 1800;
const TRANSITION_MS = 550;

// Rows above/below the center are tinted with this gradient (grey fading
// toward white as they approach the center) and slightly blurred, like an
// iOS picker wheel — the incoming word gradually sharpens as it reaches
// the middle, and the outgoing word blurs back out as it leaves.
const GRADIENT_ABOVE = "linear-gradient(to bottom, #4a4d52 0%, #f7f8f8 100%)";
const GRADIENT_BELOW = "linear-gradient(to bottom, #f7f8f8 0%, #4a4d52 100%)";

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

/**
 * iOS-style picker wheel: the current word sits sharp in the center, with
 * the previous and next words visible (blurred, gradient-tinted) above
 * and below. On each tick, everything slides down by one row — the word
 * above becomes the new sharp center, and a fresh word slides in from
 * above to take its place.
 */
export function RotatingTagline({ className = "" }: { className?: string }) {
  const [centerIndex, setCenterIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [transitionsEnabled, setTransitionsEnabled] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setTransitionsEnabled(true);
      setAnimating(true);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!animating) return;
    const t = setTimeout(() => {
      // Snap back to the resting position without a transition, one row
      // "later" in the sequence, so the slide appears to loop forever.
      setTransitionsEnabled(false);
      setAnimating(false);
      setCenterIndex((c) => c + 1);
    }, TRANSITION_MS);
    return () => clearTimeout(t);
  }, [animating]);

  // Track holds 4 rows: above (-1), center (0), below (1), and a reserve
  // row (2) sitting just out of view below the container. On each tick,
  // the whole track slides upward by one row: the current "below" phrase
  // becomes the new center, the old center exits off the top, and the
  // reserve phrase slides up into the visible "below" position — so the
  // carousel always advances forward through the list, from the bottom.
  const rows = [-1, 0, 1, 2].map((pos) => ({
    pos,
    text: phrases[mod(centerIndex + pos, phrases.length)],
  }));

  const translateY = animating ? -ROW_EM : 0;

  return (
    <div
      className={`relative mx-auto w-full overflow-hidden ${className}`}
      style={{ height: `${ROW_EM * 3}em` }}
    >
      <div
        style={{
          transform: `translateY(${translateY}em)`,
          transition: transitionsEnabled
            ? `transform ${TRANSITION_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`
            : "none",
        }}
      >
        {rows.map(({ pos, text }) => {
          const isCenter = pos === 0;
          const isAbove = pos < 0;
          return (
            <div
              key={pos}
              className="flex items-center justify-center text-center"
              style={{
                height: `${ROW_EM}em`,
                ...(isCenter
                  ? {}
                  : {
                      backgroundImage: isAbove ? GRADIENT_ABOVE : GRADIENT_BELOW,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      filter: "blur(3.5px)",
                      opacity: 0.7,
                      backdropFilter: "blur(6px)",
                      WebkitBackdropFilter: "blur(6px)",
                      textShadow: "0 0 18px rgba(255,255,255,0.25)",
                    }),
              }}
            >
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
