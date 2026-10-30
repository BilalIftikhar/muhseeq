import Link from "next/link";
import { siteConfig } from "@/config/site";
import { LOGO_PATH, LOGO_VIEWBOX } from "./logo-mark";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={LOGO_VIEWBOX} className={className} aria-hidden="true" focusable="false">
      <path fill="currentColor" fillRule="evenodd" d={LOGO_PATH} />
    </svg>
  );
}

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

/** Horizontal lockup used in the header */
export function Logo({ variant = "light", className = "" }: LogoProps) {
  const light = variant === "light";
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label={`${siteConfig.name} — home`}
    >
      <LogoMark className={`h-10 w-auto ${light ? "text-white" : "text-brand-700"}`} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-sans text-[1.15rem] font-bold tracking-[0.14em] ${light ? "text-white" : "text-navy-900"}`}
        >
          {siteConfig.name}
        </span>
        <span
          className={`mt-1 text-[0.52rem] font-semibold uppercase tracking-[0.2em] ${light ? "text-white/75" : "text-muted"}`}
        >
          {siteConfig.descriptor}
        </span>
      </span>
    </Link>
  );
}

/** Stacked lockup used in the footer */
export function LogoStacked({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex flex-col items-center ${className}`} aria-label={`${siteConfig.name} — home`}>
      <LogoMark className="h-16 w-auto text-brand-700" />
      <span className="mt-2 text-sm font-semibold tracking-[0.2em] text-navy-900">{siteConfig.name}</span>
    </Link>
  );
}
