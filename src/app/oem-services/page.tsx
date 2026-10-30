import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { oemProcess, oemServices } from "@/data/content";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Private Label & OEM Services — OEM / ODM / Wholesale Apparel",
  description:
    "Full private-label and OEM apparel manufacturing: product development, fabric sourcing, sampling, printing, embroidery, labels, packaging and export coordination.",
  alternates: { canonical: "/oem-services" },
};


export default function OemPage() {
  return (
    <>
      <PageHero
        eyebrow="Private label & OEM"
        title="Private Label and"
        accent="OEM Services"
        intro="Full private-label and OEM manufacturing — from product development, fabric sourcing and sampling to printing, labelling, packaging and export coordination."
        image="/images/pages/oem-hero.webp"
        imageAlt="Navy, grey and white T-shirts on wooden hangers"
        stats={[
          { value: String(oemServices.length), label: "Services offered" },
          { value: String(oemProcess.length), label: "Workflow steps" },
          { value: "Custom", label: "Labels & packaging" },
          { value: "Export", label: "Shipment coordination" },
        ]}
      />

      {/* OEM / ODM / Wholesale infographic */}
      <section aria-labelledby="oem-odm-heading" className="py-14 sm:py-20">
        <div className="container-site">
          <h2 id="oem-odm-heading" className="sr-only">OEM, ODM and wholesale workflow and decoration options</h2>
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <Image
              src="/images/pages/oem-infographic.webp"
              alt="OEM/ODM/Wholesale: confirm design, fabric select, sample making, confirm details, mass production, quality check, packing and delivery, after-sale service. Garment styles, print designs, decoration techniques (thick print, embroidery, heat transfer, embossed, digital print, rhinestones, reflective, puff print, silk screen) and customization options (woven label, care label, hang tag, poly bag, packaging, custom colour)."
              width={2000}
              height={982}
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* 19 services */}
      <section aria-labelledby="services-heading" className="bg-waves py-16 sm:py-20">
        <div className="container-site">
          <SectionHeading
            align="center"
            eyebrow="Our capabilities"
            title={<span id="services-heading">Services</span>}
            accent="Offered"
            intro="End-to-end OEM and private label solutions, tailored to your brand’s unique requirements."
          />
          <ol className="mt-12 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {oemServices.map((s, i) => (
              <li key={s} className="flex items-center gap-4 rounded-xl border border-brand-600/15 bg-white px-5 py-4 shadow-card">
                <span className="font-serif text-2xl font-semibold text-brand-500">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-8 w-px bg-line" aria-hidden />
                <span className="font-serif text-[1.05rem] font-semibold leading-snug text-navy-900">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Customized service */}
      <section aria-labelledby="custom-heading" className="py-16 sm:py-20">
        <div className="container-site">
          <SectionHeading
            align="center"
            title={<span id="custom-heading">Customized</span>}
            accent="Service"
            eyebrow="Tailored solutions. Endless possibilities."
            intro="Custom logo, colour, logo position, tags, labels, packaging and fabric — every detail matched to your brand."
          />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line bg-white p-3 shadow-card">
            <Image
              src="/images/pages/customized-service.webp"
              alt="Customization options: custom logo (embroidery, print, woven label, digital print, puff print), custom colour (unlimited colours, Pantone matching, colour fastness), logo position (front/back, sleeve/chest, pocket/hood), custom tags, custom labels, custom package (poly bag, zip bag, box packaging) and custom fabric (French terry, fleece, jersey, rib)."
              width={1500}
              height={470}
              sizes="(min-width: 1280px) 1180px, 100vw"
              className="h-auto w-full min-w-[720px]"
            />
          </div>
        </div>
      </section>

      {/* 10-step process */}
      <section aria-labelledby="process-heading" className="border-t border-line bg-brand-50/50 py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            align="center"
            eyebrow="Our process"
            title={<span id="process-heading">From Concept to</span>}
            accent="Finished Apparel"
            breakAccent
            intro="Every step is carefully managed to ensure premium quality, accuracy and on-time delivery."
          />
          <ol className="relative mx-auto mt-14 max-w-2xl">
            <span className="absolute bottom-6 left-6 top-6 w-px bg-brand-600/30" aria-hidden />
            {oemProcess.map((s, i) => (
              <li key={s.title} className="relative flex gap-6 pb-9 last:pb-0">
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-600 font-semibold text-white ring-4 ring-brand-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1">
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="mt-1 leading-relaxed text-navy-800">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex justify-center">
            <ButtonLink href="/contact#quote" size="lg">
              Start with an inquiry <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
