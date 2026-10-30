import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Eye, Globe, Settings, ShieldCheck, Shirt, Target } from "lucide-react";
import { siteConfig } from "@/config/site";
import { coreValues } from "@/data/content";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us — A Faisalabad-Based Apparel Manufacturing Partner",
  description:
    "MUHSEEQ provides international brands, importers, wholesalers and private-label businesses with reliable, flexible apparel manufacturing from Faisalabad, Pakistan.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Your vision / Our manufacturing"
        title="Quality Apparel"
        accent="For Global Brands"
        intro="From product development and sampling to bulk production, quality control and worldwide delivery."
        image="/images/pages/about-hero.webp"
        imageAlt="Navy fabric being stitched under an industrial sewing machine foot"
        imagePosition="60% center"
        actions={
          <ButtonLink href="/manufacturing" variant="white" size="lg">
            Explore Our Capabilities <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        }
        stats={[
          { icon: <Shirt className="h-8 w-8" strokeWidth={1.4} />, value: "7+", label: "Apparel categories" },
          { icon: <Settings className="h-8 w-8" strokeWidth={1.4} />, value: "OEM / ODM", label: "Private label & custom" },
          { icon: <ShieldCheck className="h-8 w-8" strokeWidth={1.4} />, value: "100%", label: "Quality assurance" },
          { icon: <Globe className="h-8 w-8" strokeWidth={1.4} />, value: "Global", label: "Export solutions" },
        ]}
      />

      {/* Who we are */}
      <section aria-labelledby="who-heading" className="py-16 sm:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="border-l-4 border-brand-600 pl-6 sm:pl-8">
            <SectionHeading eyebrow="Who we are" title={<span id="who-heading">A Faisalabad-Based</span>} accent="Manufacturing Partner" breakAccent />
            <div className="mt-6 space-y-4 leading-relaxed text-navy-800">
              <p>
                Established in {siteConfig.established}, the company was founded with the objective of providing international
                brands, importers, wholesalers and private-label businesses with reliable and flexible apparel manufacturing
                solutions.
              </p>
              <p>
                Our manufacturing operations are supported by experienced production professionals, quality-control procedures and
                access to Faisalabad’s strong textile supply chain. From product development and sampling to bulk production,
                finishing, packing and shipment coordination, we aim to provide buyers with a professionally managed and
                dependable service.
              </p>
            </div>
          </div>
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lift">
              <Image src="/images/about/factory-floor.webp" alt="Fabric and finished garments stacked on the production floor" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-4 flex items-center gap-3 text-sm text-navy-800">
              <span className="h-px w-8 bg-brand-600" aria-hidden /> Inside our manufacturing process
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Mission & Vision */}
      <section aria-labelledby="purpose-heading" className="relative isolate overflow-hidden border-t border-line py-16 sm:py-24">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[34%] md:block" aria-hidden>
          <Image src="/images/about/hoodie.webp" alt="" fill sizes="34vw" className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent" />
        </div>
        <div className="container-site">
          <Eyebrow>Our purpose</Eyebrow>
          <h2 id="purpose-heading" className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Our Mission & <span className="text-brand-600">Vision</span>
          </h2>
          <div className="mt-12 grid max-w-4xl gap-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-line">
            <div className="md:pr-10">
              <div className="flex items-center gap-4">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-100 text-navy-900">
                  <Target className="h-8 w-8" strokeWidth={1.4} aria-hidden />
                </span>
                <h3 className="text-2xl font-bold sm:text-3xl">Our Mission</h3>
              </div>
              <p className="mt-5 leading-relaxed text-navy-800 md:pl-20">
                To manufacture high-quality customized apparel for international buyers through professional production
                management, transparent communication, reliable quality control and continuous improvement.
              </p>
            </div>
            <div className="md:pl-10">
              <div className="flex items-center gap-4">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-100 text-navy-900">
                  <Eye className="h-8 w-8" strokeWidth={1.4} aria-hidden />
                </span>
                <h3 className="text-2xl font-bold sm:text-3xl">Our Vision</h3>
              </div>
              <p className="mt-5 leading-relaxed text-navy-800 md:pl-20">
                To become a trusted global apparel manufacturing and export partner recognized for quality, customization,
                reliability and long-term business partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section aria-labelledby="values-heading" className="bg-waves py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            align="center"
            title={<span id="values-heading">Our Core</span>}
            accent="Values"
            intro={`The foundation of ${siteConfig.name}, guiding our people, processes and partnerships.`}
          />
          <ol className="mt-14 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:divide-x xl:divide-brand-600/20">
            {coreValues.map((v, i) => (
              <li key={v.title} className="flex flex-col items-center px-5 text-center">
                <span className="font-semibold text-navy-900">{String(i + 1).padStart(2, "0")}</span>
                <div className="relative mt-4 h-32 w-32 overflow-hidden rounded-full shadow-card ring-4 ring-white">
                  <Image src={v.image} alt={v.alt} fill sizes="128px" className="object-cover" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800">{v.text}</p>
                <span className="mt-4 block h-0.5 w-8 bg-brand-600/60" aria-hidden />
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
