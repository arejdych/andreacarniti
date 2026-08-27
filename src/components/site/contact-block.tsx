import Link from "next/link";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import { CopyEmailButton } from "@/app/contact/copy-email-button";

const EMAIL = "hello@anetarey.com";

const details = [
  { icon: MapPin, label: "Warsaw, Poland · works with EU & US teams" },
  { icon: Clock, label: "Usually replies within 1–2 business days" },
];

/**
 * Shared contact block used on both the homepage and the /contact page —
 * heading, prominent mailto link, copy-to-clipboard action, and quick facts.
 */
export function ContactBlock({
  animate = true,
  startDelay = 0,
}: {
  animate?: boolean;
  startDelay?: number;
}) {
  const anim = animate ? "blur-in" : "";
  const delayStyle = (ms: number) => ({
    animationDelay: `${startDelay + ms}ms`,
  });

  return (
    <div className="flex flex-col items-center text-center">
      <h2
        className={`${anim} max-w-xl text-balance text-2xl font-medium tracking-tight sm:text-3xl`}
        style={delayStyle(0)}
      >
        Have a project in mind? Let&apos;s talk.
      </h2>

      <Link
        href={`mailto:${EMAIL}`}
        className={`${anim} group mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card/40 px-6 py-3 text-xl font-medium tracking-tight transition-colors hover:bg-white/[0.06] sm:text-2xl`}
        style={delayStyle(180)}
      >
        {EMAIL}
        <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>

      <div className={`${anim} mt-4`} style={delayStyle(300)}>
        <CopyEmailButton email={EMAIL} />
      </div>

      <ul
        className={`${anim} mt-8 flex flex-col items-center gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-6`}
        style={delayStyle(420)}
      >
        {details.map((d) => (
          <li key={d.label} className="flex items-center gap-2">
            <d.icon className="size-4 shrink-0" />
            {d.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
