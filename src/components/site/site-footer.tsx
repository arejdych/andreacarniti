import Link from "next/link";
import { Container } from "@/components/site/container";

const socials = [{ href: "https://linkedin.com", label: "LinkedIn" }];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold">A. REY</p>
          <p className="mt-1 text-sm text-muted-foreground">
            UX designer crafting clear, usable products.
          </p>
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
          <Link href="mailto:hello@anetarey.com" className="hover:text-foreground">
            hello@anetarey.com
          </Link>
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Andrea Carniti. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
