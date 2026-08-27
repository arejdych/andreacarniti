"use client";

/**
 * Cover illustration matching Linear's homepage hero background exactly:
 * a soft grey linear gradient from top (near-black) fading toward a
 * lighter grey, combined with a radial mask that keeps the edges dark.
 */
export function CoverIllustration({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-neutral-950 ${className}`}
      style={{
        background:
          "radial-gradient(52.53% 57.5% at 50% 0%, rgba(8,9,10,0) 0%, rgba(8,9,10,0.5) 100%), linear-gradient(0deg, #08090a 10%, #4b4f54 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          border: "1px solid transparent",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.224), rgba(255,255,255,0.0256)) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </div>
  );
}
