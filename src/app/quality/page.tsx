import type { Metadata } from "next";
import Image from "next/image";
import { Check, ClipboardCheck, PackageCheck, Search, Settings } from "lucide-react";
import { qualityPhases } from "@/data/content";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Quality Assurance — Quality Controlled at Every Important Stage",
  description:
    "Pre-production, in-process and final inspection: how MUHSEEQ checks measurements, workmanship, colour and packing against your approved specification.",
  alternates: { canonical: "/quality" },
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality assurance"
        title="Quality Controlled at"
        accent="Every Important Stage"
        intro="At Muhseeq, quality control begins before production and continues throughout fabric selection, cutting, printing, embroidery, stitching, finishing and packing. Our team monitors measurements, workmanship, colour, and final presentation according to approved buyer specifications."
        image="/images/pages/quality-hero.webp"
        imageAlt="Quality inspector in hairnet and gloves checking a navy garment"
        imagePosition="70% center"
        stats={[
          { icon: <Search className="h-8 w-8 text-gold-500" strokeWidth={1.4} />, value: "12", label: "Control checkpoints" },
          { icon: <ClipboardCheck className="h-8 w-8 text-gold-500" strokeWidth={1.4} />, value: "Pre-Production", label: "Spec & sample review" },
          { icon: <Settings className="h-8 w-8 text-gold-500" strokeWidth={1.4} />, value: "In-Process", label: "Inline inspection" },
          { icon: <PackageCheck className="h-8 w-8 text-gold-500" strokeWidth={1.4} />, value: "Final", label: "Packing verification" },
        ]}
      />

      <section aria-labelledby="how-heading" className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we control quality"
            title={<span id="how-heading">Checked Before, During</span>}
            accent="and After Production"
            breakAccent
            intro="Quality is not a single inspection at the end — it is built in at every stage. Each phase below carries its own checkpoints, so problems are caught early and what ships matches what you approved."
          />
          <ol className="mt-14 space-y-16 sm:space-y-20">
            {qualityPhases.map((p, i) => {
              const flip = i % 2 === 1;
              return (
                <li key={p.eyebrow} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div className={`relative aspect-[16/10] overflow-hidden rounded-xl shadow-card ${flip ? "lg:order-2" : ""}`}>
                    <Image src={p.image} alt={p.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                    <span className="absolute left-4 top-4 rounded-lg bg-navy-900/85 px-3 py-1 font-serif text-4xl font-bold text-white backdrop-blur-sm sm:text-5xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className={flip ? "lg:order-1" : ""}>
                    <Eyebrow>{p.eyebrow}</Eyebrow>
                    <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                      {p.title} <span className="text-brand-600">{p.accent}</span>
                    </h3>
                    <p className="mt-4 leading-relaxed text-navy-800">{p.text}</p>
                    <ul className="mt-6 space-y-3">
                      {p.checks.map((c) => (
                        <li key={c} className="flex items-center gap-3 text-navy-900">
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-700 text-white">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                          </span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
}
