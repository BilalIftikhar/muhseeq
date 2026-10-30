import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Leaf, Recycle, Sprout, Users, Zap } from "lucide-react";
import { sustainabilityPractices } from "@/data/content";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Sustainability and Responsible Manufacturing",
  description:
    "Efficient material usage, waste reduction, safe working conditions and continuous improvement — the responsible manufacturing practices we are building.",
  alternates: { canonical: "/sustainability" },
};

const icons = { recycle: Recycle, leaf: Leaf, zap: Zap, users: Users, graduation: GraduationCap, sprout: Sprout } as const;

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        tone="light"
        eyebrow="Responsible manufacturing"
        title="Sustainability and"
        accent="Responsible Manufacturing"
        intro="At Muhseeq, we are committed to responsible manufacturing practices through efficient material usage, waste reduction, safe working conditions and continuous improvement."
        image="/images/pages/sustainability-hero.webp"
        imageAlt="Raw cotton bolls resting on folded cream and navy fabrics"
        imagePosition="right center"
      />
      <section aria-labelledby="practices-heading" className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Areas of focus"
            title={<span id="practices-heading">Practices We Are Building</span>}
            intro="We continuously improve our processes to build a more responsible and sustainable manufacturing approach."
          />
          <ul className="mt-12 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {sustainabilityPractices.map((p) => {
              const Icon = icons[p.icon];
              return (
                <li key={p.title} className="overflow-hidden rounded-xl border border-line bg-white shadow-card">
                  <div className="relative aspect-[29/27]">
                    <Image src={p.image} alt="" fill sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 30vw, 50vw" className="object-cover" />
                  </div>
                  <div className="relative px-4 pb-6 pt-10 text-center">
                    <span className="absolute left-1/2 top-0 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-700 shadow-card">
                      <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                    </span>
                    <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
                    <span className="mx-auto mt-4 block h-0.5 w-8 bg-brand-600" aria-hidden />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
