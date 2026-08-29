"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/site/container";
import { cn } from "@/lib/utils";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isBaiond = pathname?.startsWith(
    "/work/baiond-iot-sustainability-platform"
  );
  const isCheerin = pathname?.startsWith("/work/cheerin-app");

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border backdrop-blur-md supports-[backdrop-filter]:bg-background/60",
        isCheerin
          ? isScrolled
            ? "bg-[#fff4f3]/75 supports-[backdrop-filter]:bg-[#fff4f3]/65"
            : "bg-[#fff4f3] supports-[backdrop-filter]:bg-[#fff4f3]"
          : "bg-background/70",
        isBaiond && "baiond-navigation",
        isCheerin && "cheerin-navigation"
      )}
    >
      <Container className="flex h-[77px] items-center justify-between">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 font-sans text-[17px] font-semibold tracking-tight",
            isCheerin && "text-foreground"
          )}
          onClick={() => setOpen(false)}
        >
          Andrea Carniti
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex h-[39px] items-center justify-center rounded-full px-[14px] text-[16px] transition-colors duration-150 ease-out hover:bg-white/[0.08] hover:text-foreground",
                  isCheerin
                    ? active
                      ? "text-foreground hover:bg-[#fce3e4]"
                      : "text-muted-foreground hover:bg-[#fce3e4]"
                    : active
                      ? "text-foreground"
                      : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
