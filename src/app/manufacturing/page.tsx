import type { Metadata } from "next";
import Image from "next/image";
import { Boxes, Factory, Layers, Package, Palette, Scissors, Settings, ShieldCheck, Shirt, Truck } from "lucide-react";
import { capabilities, productionStages } from "@/data/content";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Manufacturing — From Product Development to Final Packing",
  description:
    "A managed 9-stage apparel production line in Faisalabad: knitting, fabric selection, cutting, printing, stitching, pressing, quality check, labelling and export.",
  alternates: { canonical: "/manufacturing" },
};

const capIcons = { shirt: Shirt, layers: Layers, scissors: Scissors, palette: Palette, package: Package, truck: Truck } as const;

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        title="From Product Development"
        accent="to Final Packing"
        intro="Our manufacturing process is managed through defined production stages, including requirement review, fabric preparation, sampling, cutting, stitching, customization, finishing, inspection and packing."
        image="/images/pages/manufacturing-hero.webp"
        imageAlt="Folded navy garments with a MUHSEEQ label beside a technical sketch and measuring tape"
        stats={[
          { icon: <Settings className="h-8 w-8 text-gold-500" strokeWidth={1.4} />, value: "9", label: "Production stages" },
          { icon: <ShieldCheck className="h-8 w-8 text-gold-500" strokeWidth={1.4} />, value: "In-House", label: "Quality control" },
          { icon: <Factory className="h-8 w-8 text-gold-500" strokeWidth={1.4} />, value: "Faisalabad", label: "Manufacturing base" },
          { icon: <Boxes className="h-8 w-8 text-gold-500" strokeWidth={1.4} />, value: "Export", label: "Packing & shipment" },
        ]}
      />

      {/* Fabric to finished */}
      <section aria-labelledby="f2f-heading" className="border-b border-line">
        <div className="grid items-center lg:grid-cols-2">
          <div className="relative aspect-[2/1] lg:aspect-auto lg:h-full lg:min-h-[20rem]">
            <Image src="/images/manufacturing/collage.webp" alt="Fabric rolls, fabric cutting and stitching teams" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-left" />
          </div>
          <div className="container-site py-12 lg:max-w-xl lg:px-12">
            <SectionHeading
              eyebrow="Our manufacturing process"
              title={<span id="f2f-heading">From Fabric to Finished Product</span>}
              intro="Our manufacturing process is managed through defined production stages, including fabric selection, pattern development, sampling, cutting, printing, embroidery, stitching, quality inspection, labeling and packaging, ensuring reliable production and timely delivery for our global clients."
            />
          </div>
        </div>
      </section>

      {/* Managed line */}
      <section aria-labelledby="line-heading" className="relative isolate overflow-hidden bg-navy-900 pb-40 pt-16 sm:pt-20">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 md:block" aria-hidden>
          <Image src="/images/pages/oem-hero.webp" alt="" fill sizes="50vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/50 to-transparent" />
        </div>
        <div className="container-site">
          <SectionHeading
            tone="light"
            eyebrow="Managed manufacturing capabilities"
            title={<span id="line-heading">One Managed Line,</span>}
            accent="From Tech Pack to Shipment"
            breakAccent
            intro="From concept to final delivery, MUHSEEQ provides a complete and reliable manufacturing solution with strict quality control and professional project management."
          />
        </div>
      </section>
      <section aria-label="Capabilities" className="bg-waves pb-16">
        <div className="container-site relative z-10 -mt-28">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => {
              const Icon = capIcons[c.icon];
              return (
                <li key={c.title} className="flex gap-4 rounded-xl border border-line bg-white p-6 shadow-card">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-brand-600">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-0.5 text-lg font-bold leading-snug">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-800">{c.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 9 stages */}
      <section aria-labelledby="journey-heading" className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="The MUHSEEQ production journey"
            title={<span id="journey-heading">Every Detail Matters.</span>}
            accent="Every Stage Counts."
            breakAccent
            intro="At MUHSEEQ, we manage the complete manufacturing process with a clear focus on quality, consistency and timely delivery. From material selection to final packaging, each stage is planned and monitored carefully to ensure your designs are produced to the highest standards. Our integrated production process in Faisalabad allows us to maintain control, reduce lead times and deliver reliable results for our global clients."
          />
          <ol className="mt-14 space-y-16 sm:space-y-20">
            {productionStages.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <li key={s.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div className={`relative aspect-[2/1] overflow-hidden rounded-xl shadow-card ${flip ? "lg:order-2" : ""}`}>
                    <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                  </div>
                  <div className={flip ? "lg:order-1" : ""}>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
                      Stage {String(i + 1).padStart(2, "0")} of {String(productionStages.length).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-4xl font-bold sm:text-5xl">{s.title}</h3>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">{s.subtitle}</p>
                    <p className="mt-4 max-w-lg leading-relaxed text-navy-800">{s.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Faisalabad strip */}
      <section aria-label="Faisalabad supply chain" className="overflow-hidden border-t border-line py-10">
        <div className="container-site grid items-center gap-6 md:grid-cols-[1fr_2fr_1fr]">
          <div className="relative mx-auto aspect-[47/38] w-full max-w-xs">
            <Image src="/images/manufacturing/faisalabad-sketch.webp" alt="Sketch of Faisalabad’s clock tower and bazaar" fill sizes="320px" className="object-contain" />
          </div>
          <div className="text-center">
            <Eyebrow align="center">Faisalabad, Pakistan</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed text-navy-800">
              Our manufacturing operations are backed by skilled production professionals, robust quality control procedures and
              direct access to Faisalabad’s leading textile supply chain, allowing us to maintain high standards and reliable
              delivery for global markets.
            </p>
          </div>
          <div className="relative mx-auto aspect-[47/31] w-full max-w-xs">
            <Image src="/images/manufacturing/world-map.webp" alt="World map showing export routes" fill sizes="320px" className="object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}
