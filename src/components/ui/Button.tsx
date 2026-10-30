import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "white" | "outline" | "outline-light" | "gold" | "whatsapp" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm",
  white: "bg-white text-navy-900 hover:bg-brand-50 shadow-sm",
  outline: "border border-navy-900/20 text-navy-900 hover:border-brand-600 hover:text-brand-700 bg-white",
  "outline-light": "border border-white/40 text-white hover:bg-white/10",
  gold: "bg-white text-navy-900 ring-2 ring-gold-500 hover:bg-gold-200/40",
  whatsapp: "bg-[#1f8f4e] text-white hover:bg-[#187a41] shadow-sm",
  ghost: "text-brand-700 hover:text-navy-900",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-[0.95rem] gap-2",
  lg: "h-12 px-6 text-base gap-2",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", extra = "") {
  return `inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-200 disabled:opacity-60 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${extra}`;
}

interface ButtonLinkProps extends Omit<ComponentProps<"a">, "href"> {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  /** Opens external links (wa.me) in a new tab */
  external?: boolean;
}

export function ButtonLink({ href, variant = "primary", size = "md", className = "", children, external, ...rest }: ButtonLinkProps) {
  const cls = buttonClasses(variant, size, className);
  const isSpecial = /^(https?:|mailto:|tel:)/.test(href);
  if (isSpecial) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
