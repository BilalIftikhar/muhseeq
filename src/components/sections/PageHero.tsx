import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/SectionHeading";

export interface HeroStat {
  icon?: ReactNode;
  value: string;
  label: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  accent?: ReactNode;
  intro: ReactNode;
  image: string;
  imageAlt: string;
  /** Dark navy (default) or light ivory/white treatment */
  tone?: "dark" | "light";
  stats?: HeroStat[];
  actions?: ReactNode;
  breadcrumb?: ReactNode;
  /** CSS object-position for the image */
  imagePosition?: string;
}

export function PageHero({
  eyebrow,
  title,
  accent,
  intro,
  image,
  imageAlt,
  tone = "dark",
  stats,
  actions,
  breadcrumb,
  imagePosition = "center",
}: PageHeroProps) {
  const dark = tone === "dark";
  return (
    <section className={`relative isolate overflow-hidden ${dark ? "bg-navy-950" : "bg-white"}`}>
      <div className="absolute inset-y-0 right-0 -z-10 w-full md:w-[62%]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 768px) 62vw, 100vw"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <div
        className={`absolute inset-0 -z-10 ${
          dark
            ? "bg-gradient-to-r from-navy-950 from-30% via-navy-950/85 to-navy-950/10 max-md:bg-navy-950/80"
            : "bg-gradient-to-r from-white from-35% via-white/85 to-white/0 max-md:bg-white/85"
        }`}
        aria-hidden
      />
      <div className="container-site py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          {breadcrumb}
          {eyebrow && <Eyebrow tone={dark ? "light" : "dark"}>{eyebrow}</Eyebrow>}
          <h1
            className={`mt-4 text-[2.35rem] font-bold leading-[1.06] sm:text-5xl lg:text-[3.6rem] ${dark ? "!text-white" : ""}`}
          >
            {title}
            {accent && (
              <>
                <br />
                <span className={dark ? "text-brand-300" : "text-brand-600"}>{accent}</span>
              </>
            )}
          </h1>
          <span className={`mt-6 block h-0.5 w-16 ${dark ? "bg-brand-300/70" : "bg-brand-600"}`} aria-hidden />
          <p className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${dark ? "text-white/85" : "text-navy-800"}`}>{intro}</p>
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>

        {stats && stats.length > 0 && (
          <dl
            className={`mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border lg:grid-cols-4 ${
              dark ? "border-white/20 bg-white/15 backdrop-blur-sm" : "border-line bg-line"
            }`}
          >
            {stats.map((s) => (
              <div key={s.label} className={`flex items-center gap-3.5 p-4 sm:p-5 ${dark ? "bg-navy-950/70" : "bg-white/90"}`}>
                {s.icon && <span className={dark ? "text-brand-300" : "text-navy-800"}>{s.icon}</span>}
                <div>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className={`font-serif text-xl font-bold leading-none sm:text-2xl ${dark ? "text-white" : "text-navy-900"}`}>
                    {s.value}
                  </dd>
                  <dd className={`mt-1.5 text-[0.68rem] font-medium uppercase tracking-[0.12em] ${dark ? "text-white/70" : "text-muted"}`}>
                    {s.label}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
