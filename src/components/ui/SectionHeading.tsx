import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  /** Text rendered in the brand accent colour after the title */
  accent?: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  className?: string;
  /** Put the accent on a new line */
  breakAccent?: boolean;
}

export function Eyebrow({ children, tone = "dark", align = "left" }: { children: ReactNode; tone?: "dark" | "light" | "gold"; align?: "left" | "center" }) {
  const color = tone === "light" ? "text-brand-300" : tone === "gold" ? "text-gold-600" : "text-brand-600";
  const line = tone === "light" ? "bg-brand-300/60" : tone === "gold" ? "bg-gold-500/60" : "bg-brand-600/50";
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] ${color} ${align === "center" ? "justify-center" : ""}`}>
      {align === "center" && <span className={`h-px w-10 ${line}`} aria-hidden />}
      <span>{children}</span>
      <span className={`h-px w-14 ${line}`} aria-hidden />
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  intro,
  align = "left",
  tone = "dark",
  as = "h2",
  className = "",
  breakAccent,
}: SectionHeadingProps) {
  const Tag = as;
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && <Eyebrow tone={tone === "light" ? "light" : "dark"} align={align}>{eyebrow}</Eyebrow>}
      <Tag
        className={`${eyebrow ? "mt-4" : ""} text-[2rem] font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${tone === "light" ? "!text-white" : ""}`}
      >
        {title}
        {accent && (
          <>
            {breakAccent ? <br /> : " "}
            <span className={tone === "light" ? "text-brand-300" : "text-brand-600"}>{accent}</span>
          </>
        )}
      </Tag>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${tone === "light" ? "text-white/80" : "text-muted"}`}>{intro}</p>
      )}
    </div>
  );
}
