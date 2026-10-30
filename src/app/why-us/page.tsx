import type { Metadata } from "next";
import { Check } from "lucide-react";
import { tenReasons, whyUsPillars } from "@/data/content";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Why Choose Us — Built on Quality, Driven by Your Success",
  description:
    "In-house manufacturing, OEM and private label, buyer-specific fabric and sizing, and a long-term partnership approach — ten reasons buyers work with MUHSEEQ.",
  alternates: { canonical: "/why-us" },
};

export default function WhyUsPage() {
  return (
    <>
      <section aria-labelledby="why-heading" className="bg-waves py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            as="h1"
            align="center"
            title={<span id="why-heading">Built on Quality.</span>}
            accent="Driven by Your Success."
            breakAccent
            intro="We are committed to delivering high-quality apparel manufacturing solutions that align with your brand’s goals, with reliability, flexibility and a strong focus on long-term relationships."
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyUsPillars.map((p, i) => (
              <li key={p.title} className="flex gap-4 rounded-xl border border-brand-600/20 bg-white p-5 shadow-card">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-500 font-serif text-lg font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="border-l border-line pl-4">
                  <h2 className="text-lg font-bold leading-snug">{p.title}</h2>
                  <p className="mt-1.5 text-sm text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="reasons-heading" className="py-16 sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-14">
          <div>
            <Eyebrow align="center">MUHSEEQ</Eyebrow>
            <h2 id="reasons-heading" className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl">
              Ten Reasons Buyers <span className="text-brand-500">Work With Us</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We combine manufacturing expertise with flexibility and a customer-first approach to deliver the right solutions for
              your brand.
            </p>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:border-l lg:border-line lg:pl-10">
            {tenReasons.map((r) => (
              <li key={r} className="flex items-center gap-4 border-b border-line py-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
                </span>
                <span className="text-navy-900">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
