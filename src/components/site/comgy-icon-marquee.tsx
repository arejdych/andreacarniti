"use client";

import { useState } from "react";
import {
  Droplets,
  Flame,
  Thermometer,
  Wind,
  Leaf,
  Zap,
  Receipt,
  Gauge,
  Building2,
  Wrench,
  BarChart3,
  ShieldCheck,
  CloudSun,
  type LucideIcon,
} from "lucide-react";

const icons: { name: string; icon: LucideIcon; color: string; bg: string }[] = [
  { name: "Water", icon: Droplets, color: "#3B82F6", bg: "#DBEAFE" },
  { name: "Heating", icon: Flame, color: "#EF4444", bg: "#FEE2E2" },
  { name: "Temperature", icon: Thermometer, color: "#F97316", bg: "#FFEDD5" },
  { name: "Ventilation", icon: Wind, color: "#6366F1", bg: "#E0E7FF" },
  { name: "CO2", icon: Leaf, color: "#22C55E", bg: "#DCFCE7" },
  { name: "Energy", icon: Zap, color: "#EAB308", bg: "#FEF9C3" },
  { name: "Billing", icon: Receipt, color: "#8B5CF6", bg: "#EDE9FE" },
  { name: "Metering", icon: Gauge, color: "#0EA5E9", bg: "#E0F2FE" },
  { name: "Building", icon: Building2, color: "#64748B", bg: "#E2E8F0" },
  { name: "Plumbing", icon: Wrench, color: "#0891B2", bg: "#CFFAFE" },
  { name: "Analytics", icon: BarChart3, color: "#2563EB", bg: "#DBEAFE" },
  { name: "Compliance", icon: ShieldCheck, color: "#16A34A", bg: "#DCFCE7" },
  { name: "Climate", icon: CloudSun, color: "#F59E0B", bg: "#FEF3C7" },
];

export function ComgyIconMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="integration-marquee-track flex w-max"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {[0, 1, 2].map((group) => (
          <div
            key={group}
            className="integration-marquee-group flex shrink-0 gap-[100px] pr-[100px]"
            aria-hidden={group !== 0}
          >
            {icons.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${group}-${item.name}`}
                  className="flex size-16 shrink-0 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: item.bg }}
                >
                  <Icon className="size-8" style={{ color: item.color }} strokeWidth={1.5} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f7fa] to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f7fa] to-transparent sm:w-40" />
    </div>
  );
}
