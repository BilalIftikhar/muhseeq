import type { Metadata } from "next";
import Image from "next/image";
import { Gem, Leaf, Settings, Users } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Eyebrow } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: `CEO’s Message — ${siteConfig.ceo.name}`,
  description: "Our vision, our values and our commitment to a stronger, more sustainable future — a message from the Founder & CEO of MUHSEEQ.",
  alternates: { canonical: "/our-ceo" },
};

const pillars = [
  { icon: Gem, label: "Premium Quality" },
  { icon: Settings, label: "Innovative Manufacturing" },
  { icon: Users, label: "Global Partnerships" },
  { icon: Leaf, label: "Sustainable Growth" },
];

export default function CeoPage() {
  return (
    <>
      <section aria-labelledby="ceo-heading" className="bg-waves py-16 sm:py-24">
        <div className="container-site text-center">
          <Eyebrow align="center">{siteConfig.name}</Eyebrow>
          <h1 id="ceo-heading" className="mt-4 text-5xl font-bold sm:text-6xl lg:text-7xl">
            CEO’s <span className="text-brand-500">Message</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-navy-800">
            Our vision, our values and our commitment to a stronger, more sustainable future.
          </p>
        </div>
      </section>

      <section aria-labelledby="leadership-heading" className="py-16 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-md">
            <span className="absolute -left-4 -top-4 h-3/4 w-1/2 rounded-tl-3xl bg-brand-700 sm:-left-6 sm:-top-6" aria-hidden />
            <div className="relative aspect-[905/980] overflow-hidden rounded-3xl border-4 border-white shadow-lift">
              <Image
                src="/images/pages/ceo.webp"
                alt={`${siteConfig.ceo.name}, ${siteConfig.ceo.title} of ${siteConfig.name}`}
                fill
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <h2 id="leadership-heading" className="text-4xl font-bold sm:text-5xl">
              Our <span className="text-brand-600">Leadership</span>
            </h2>
            <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-navy-800">
              <p>
                At Muhseeq, we believe apparel is more than just fabric and stitching — it is a reflection of individuality,
                confidence and a modern lifestyle. Our focus has always been on delivering high-quality, trend-driven and
                purpose-built apparel that meets the evolving needs of global brands and businesses.
              </p>
              <p>
                I am grateful to our clients, partners and dedicated team members who have been part of this journey. Together, we
                continue to innovate, improve and create long-term value, with a strong commitment to quality, sustainability and
                building lasting relationships worldwide.
              </p>
            </div>
            <div className="mt-7 flex items-center gap-5">
              <span className="h-px w-14 bg-brand-600" aria-hidden />
              <div>
                <p className="font-semibold text-navy-900">{siteConfig.ceo.name}</p>
                <p className="text-sm text-navy-800">{siteConfig.ceo.title}</p>
              </div>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-4 border-t border-line pt-8 sm:grid-cols-4">
              {pillars.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-100 text-navy-800">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="text-sm leading-snug text-navy-900">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
