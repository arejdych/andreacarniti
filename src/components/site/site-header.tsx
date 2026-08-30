"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
  const isComgy = pathname?.startsWith("/work/comgy-energy-platform");

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
        "fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4",
        isBaiond && "baiond-navigation",
        isCheerin && "cheerin-navigation",
        isComgy && "comgy-navigation"
      )}
    >
      <nav
        className={cn(
          "flex w-full max-w-[800px] items-center justify-between rounded-full border px-6 py-3 backdrop-blur-xl transition-all duration-300",
          isCheerin || isComgy
            ? "border-black/10 bg-white/60"
            : "border-white/[0.12] bg-white/[0.02]"
        )}
      >
        <Link
          href="/"
          className={cn(
            "font-sans text-[17px] font-semibold tracking-tight",
            isCheerin ? "text-foreground" : "text-foreground"
          )}
          onClick={() => setOpen(false)}
        >
          Andrea Carniti
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex h-[36px] items-center justify-center rounded-full px-4 text-[15px] transition-colors duration-150 ease-out",
                  isCheerin || isComgy
                    ? active
                      ? "text-foreground hover:bg-black/5"
                      : "text-muted-foreground hover:bg-black/5 hover:text-foreground"
                    : active
                      ? "text-foreground hover:bg-white/[0.08]"
                      : "text-muted-foreground hover:bg-white/[0.08] hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="absolute top-full left-4 right-4 mt-2 flex justify-center md:hidden">
          <div className="w-full max-w-[800px] rounded-2xl border border-white/[0.12] bg-background/95 backdrop-blur-xl p-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
