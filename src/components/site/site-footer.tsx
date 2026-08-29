"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/site/container";

const socials = [{ href: "https://linkedin.com", label: "LinkedIn" }];

export function SiteFooter() {
  const pathname = usePathname();
  const isBaiond = pathname?.startsWith(
    "/work/baiond-iot-sustainability-platform"
  );
  const isCheerin = pathname?.startsWith("/work/cheerin-app");

  return (
    <footer
      className={`border-t border-border bg-background ${
        isBaiond ? "baiond-navigation" : ""
      } ${isCheerin ? "cheerin-navigation" : ""}`}
    >
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold">Andrea Carniti</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
          <Link href="mailto:and.carniti@gmail.com" className="hover:text-foreground">
            and.carniti@gmail.com
          </Link>
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Andrea Carniti. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
