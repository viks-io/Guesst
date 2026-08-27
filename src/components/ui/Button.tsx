import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_8px_30px_-6px_rgba(108,92,231,0.45)] hover:bg-brand-dim disabled:bg-surface-raised disabled:text-text-secondary disabled:shadow-none",
  secondary:
    "bg-surface-raised text-text-primary hover:bg-[#242d4d] disabled:opacity-40",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary disabled:opacity-40",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`h-14 w-full rounded-2xl px-6 font-display text-base font-semibold tracking-tight transition-all duration-150 active:scale-95 disabled:cursor-not-allowed disabled:active:scale-100 ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    />
  );
}
