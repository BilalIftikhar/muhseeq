import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Globe,
  Headset,
  MessagesSquare,
  PackageSearch,
  Settings,
  Shirt,
  ShieldCheck,
  SlidersHorizontal,
  Send,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { featuredProducts } from "@/data/products";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { CategoryGrid } from "@/components/products/CategoryGrid";
import { ProductCard } from "@/components/products/ProductCard";

const benefits = [
  { icon: Award, title: "Premium Quality", text: "Top-grade materials and finishing, checked before, during and after production." },
  { icon: SlidersHorizontal, title: "Flexible MOQ", text: "Flexible quantities to support your brand — MOQ is quoted per product and fabric." },
  { icon: Globe, title: "Global Shipping", text: "Export packing and shipment coordination for reliable worldwide delivery." },
  { icon: Headset, title: "Dedicated Support", text: "Direct communication with our team at every step, from inquiry to dispatch." },
];

const steps = [
  { icon: PackageSearch, title: "Browse Products", text: "Explore our categories and shortlist the garments that fit your range." },
  { icon: Send, title: "Request a Quote", text: "Send quantities, fabric and branding needs by WhatsApp, email or the quote form." },
  { icon: MessagesSquare, title: "Discuss Your Requirements", text: "We review feasibility, confirm specs and share a suitable MOQ and quotation." },
];

export default function HomePage() {
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
          <>
            <ButtonLink href="/products" variant="white" size="lg">
              Explore Our Products <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/contact#quote" variant="outline-light" size="lg">
              Request a Quote
            </ButtonLink>
          </>
        }
        stats={[
          { icon: <Shirt className="h-8 w-8" strokeWidth={1.4} />, value: "7+", label: "Apparel categories" },
          { icon: <Settings className="h-8 w-8" strokeWidth={1.4} />, value: "OEM / ODM", label: "Private label & custom" },
          { icon: <ShieldCheck className="h-8 w-8" strokeWidth={1.4} />, value: "100%", label: "Quality assurance" },
          { icon: <Globe className="h-8 w-8" strokeWidth={1.4} />, value: "Global", label: "Export solutions" },
        ]}
      />

      {/* Categories */}
      <section aria-labelledby="collections-heading" className="py-16 sm:py-20">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Explore our collection"
              title={<span id="collections-heading">Premium Apparel for Every Need</span>}
              intro="A wide range of custom apparel, manufactured with quality materials, modern designs and complete customization to match your brand’s requirements."
            />
            <ButtonLink href="/products" variant="outline" className="shrink-0">
              View all products <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </div>
          <div className="mt-10">
            <CategoryGrid />
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section aria-labelledby="featured-heading" className="bg-waves py-16 sm:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Featured products"
            title={<span id="featured-heading">Best-Selling</span>}
            accent="Wholesale Lines"
            intro="Fully customizable in fabric, GSM, colour, sizing and branding. Request a quote on any product."
          />
          <ul className="mt-10 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.slice(0, 4).map((p) => (
              <li key={p.id}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we are */}
      <section aria-labelledby="who-heading" className="py-16 sm:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="border-l-4 border-brand-600 pl-6 sm:pl-8">
            <SectionHeading
              eyebrow="Who we are"
              title={<span id="who-heading">A Faisalabad-Based</span>}
              accent="Manufacturing Partner"
              breakAccent
            />
            <div className="mt-6 space-y-4 leading-relaxed text-navy-800">
              <p>
                Established in {siteConfig.established}, the company was founded with the objective of providing international
                brands, importers, wholesalers and private-label businesses with reliable and flexible apparel manufacturing
                solutions.
              </p>
              <p>
                Our manufacturing operations are supported by experienced production professionals, quality-control procedures and
                access to Faisalabad’s strong textile supply chain.
              </p>
            </div>
            <Link href="/about" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-navy-900">
              More about {siteConfig.name} <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lift">
              <Image
                src="/images/about/factory-floor.webp"
                alt="Fabric and finished garments stacked on the MUHSEEQ production floor"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-center gap-3 text-sm text-navy-800">
              <span className="h-px w-8 bg-brand-600" aria-hidden /> Inside our manufacturing process
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Wholesale benefits */}
      <section aria-labelledby="benefits-heading" className="border-y border-line bg-brand-50/60 py-16 sm:py-20">
        <div className="container-site">
          <SectionHeading
            align="center"
            eyebrow="Why buyers choose us"
            title={<span id="benefits-heading">Built for</span>}
            accent="Wholesale Buyers"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-xl border border-line bg-white p-6 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3-step process */}
      <section aria-labelledby="steps-heading" className="py-16 sm:py-20">
        <div className="container-site">
          <SectionHeading
            align="center"
            eyebrow="How to order"
            title={<span id="steps-heading">Three Simple Steps</span>}
            accent="to Get Started"
          />
          <ol className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
            <span className="absolute left-[16.5%] right-[16.5%] top-8 hidden h-px bg-line md:block" aria-hidden />
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative flex flex-col items-center text-center">
                <span className="relative grid h-16 w-16 place-items-center rounded-full bg-navy-900 text-white ring-8 ring-white">
                  <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden />
                  <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-gold-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/contact#quote" size="lg">
              Start Your Inquiry <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Manufacturing teaser */}
      <section aria-labelledby="mfg-heading" className="overflow-hidden border-t border-line bg-white">
        <div className="grid items-center lg:grid-cols-2">
          <div className="relative aspect-[2/1] lg:aspect-auto lg:h-full lg:min-h-[22rem]">
            <Image
              src="/images/manufacturing/collage.webp"
              alt="Fabric rolls, cutting and stitching teams at work"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-left"
            />
          </div>
          <div className="container-site py-12 lg:max-w-xl lg:px-12 lg:py-16">
            <SectionHeading
              eyebrow="Our manufacturing process"
              title={<span id="mfg-heading">From Fabric to Finished Product</span>}
              intro="Our manufacturing process is managed through defined production stages, including fabric selection, pattern development, sampling, cutting, printing, embroidery, stitching, quality inspection, labeling and packaging."
            />
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/manufacturing" variant="primary">
                See the 9 stages <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/oem-services" variant="outline">
                OEM & private label
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
