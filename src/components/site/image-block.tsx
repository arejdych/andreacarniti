import { cn } from "@/lib/utils";

/**
 * Abstract grayscale placeholder used in place of real project photography.
 * Swap these out for actual screenshots/mockups when available —
 * keep the same aspect ratio and rounded corners for visual consistency.
 */
export function ImageBlock({
  tone = "01",
  className,
  label,
}: {
  tone?: "01" | "02" | "03" | string;
  className?: string;
  label?: string;
}) {
  const patterns: Record<string, string> = {
    "01": "bg-[linear-gradient(135deg,theme(colors.neutral.700)_25%,theme(colors.neutral.900)_25%,theme(colors.neutral.900)_50%,theme(colors.neutral.700)_50%,theme(colors.neutral.700)_75%,theme(colors.neutral.900)_75%,theme(colors.neutral.900))] bg-[length:24px_24px] bg-neutral-950",
    "02": "bg-[radial-gradient(theme(colors.neutral.600)_1.5px,transparent_1.5px)] bg-[length:16px_16px] bg-neutral-950",
    "03": "bg-[linear-gradient(90deg,theme(colors.neutral.700)_1px,transparent_1px)] bg-[length:20px_100%] bg-neutral-950",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-xl border border-border",
        patterns[tone] ?? patterns["01"],
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      {label && (
        <span className="relative rounded-md border border-border bg-background/80 px-2 py-1 font-mono text-[11px] tracking-wide text-foreground backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}
