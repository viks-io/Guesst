import type { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-3xl border border-white/5 bg-surface p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.5)] ${className}`}
      {...props}
    />
  );
}
