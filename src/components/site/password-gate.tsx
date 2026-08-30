"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { RotatingTagline } from "@/components/site/rotating-tagline";
import { cn } from "@/lib/utils";

const CORRECT_PASSWORD = "nicetomeetyou!";
const STORAGE_KEY = "portfolio-auth";

export function PasswordGate({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (mounted && !authenticated && inputRef.current) {
      inputRef.current.focus();
    }
  }, [mounted, authenticated]);

  function handleSubmit() {
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setFadeOut(true);
      setTimeout(() => setAuthenticated(true), 400);
    } else {
      setError(true);
      setTimeout(() => setError(false), 600);
      setPassword("");
    }
  }

  // During SSR or before hydration, render nothing to avoid flash
  if (!mounted) return null;

  if (authenticated) return <>{children}</>;

  const canSubmit = password.length >= 5;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col bg-background transition-opacity duration-400",
        fadeOut ? "opacity-0" : "opacity-100"
      )}
    >
      {/* Name in top-left corner */}
      <div className="absolute left-6 top-5 z-10 md:left-8">
        <span className="font-sans text-[17px] font-semibold tracking-tight text-foreground">
          Andrea Carniti
        </span>
      </div>

      {/* Hero content — full screen */}
      <div className="glow-bg relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6">
        <div className="flex w-full max-w-3xl flex-col items-center text-center">
          {/* Rotating tagline */}
          <h1 className="blur-in w-full text-balance text-[57.6px] font-bold leading-[1.05] tracking-tight [animation-delay:0ms] [animation-duration:3000ms] sm:text-[86.4px]">
            <RotatingTagline />
          </h1>

          {/* Description */}
          <p className="blur-in mt-6 max-w-xl text-lg text-muted-foreground [animation-delay:2600ms]">
            I&apos;m Andrea Carniti, a product designer specializing in complex
            applications. I love building scalable design systems and designing
            with both business goals and user needs in mind.
          </p>

          {/* Password input + Enter button */}
          <div className="blur-in mt-10 flex w-full max-w-sm flex-col items-center gap-4 [animation-delay:3000ms]">
            <div
              className={cn("relative w-full", error && "password-shake")}
            >
              <input
                ref={inputRef}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && canSubmit) handleSubmit();
                }}
                placeholder="Enter password"
                className={cn(
                  "h-14 w-full rounded-full border bg-transparent px-5 pr-12 text-lg transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30",
                  error
                    ? "border-destructive ring-3 ring-destructive/20"
                    : "border-input"
                )}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>

            <button
              type="button"
              disabled={!canSubmit}
              onClick={handleSubmit}
              className={cn(
                "inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-full text-base font-medium transition-all",
                canSubmit
                  ? "bg-primary text-primary-foreground hover:bg-primary/80 active:translate-y-px"
                  : "cursor-not-allowed bg-primary/30 text-primary-foreground/40"
              )}
            >
              Enter
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
