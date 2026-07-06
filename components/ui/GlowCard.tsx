"use client";

import { useRef } from "react";
import clsx from "clsx";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
};

// Glassmorphic card whose border glow tracks the pointer, giving a tactile,
// soft-skeuomorphic feel without any per-frame React state (pure CSS vars).
export default function GlowCard({ children, className, as = "div" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref as never}
      onMouseMove={handleMouseMove}
      className={clsx(
        "group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl shadow-neu-dark transition-colors duration-300 hover:border-signal/30",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(255,43,69,0.12), transparent 70%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </Tag>
  );
}
