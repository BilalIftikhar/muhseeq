import Image from "next/image";
import { Plus } from "lucide-react";
import { faqs } from "@/data/content";
import { Eyebrow } from "@/components/ui/SectionHeading";

/** "Common Questions From Buyers" — native <details> accordion, no JS required */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative isolate scroll-mt-20 overflow-hidden bg-navy-950 py-16 sm:py-20">
      <div className="absolute inset-y-0 left-0 -z-10 hidden w-[40%] lg:block" aria-hidden>
        <Image src="/images/pages/hangers.webp" alt="" fill sizes="40vw" className="object-cover object-left opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy-950/40 to-navy-950" />
      </div>
      <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="lg:pt-2">
          <Eyebrow tone="gold">Frequently asked questions</Eyebrow>
          <h2 id="faq-heading" className="mt-4 text-[2rem] font-semibold leading-tight !text-white sm:text-[2.6rem]">
            Common Questions From Buyers
          </h2>
          <p className="mt-4 max-w-sm text-white/80 sm:text-lg">
            Quick answers to help you understand our custom apparel manufacturing process and services.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} className="group rounded-lg bg-white shadow-card" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg px-5 py-4 font-serif text-[1.05rem] font-semibold text-navy-900">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-navy-900 transition-colors group-open:bg-navy-900 group-open:text-white">
                  <Plus className="h-4 w-4 transition-transform group-open:rotate-45" aria-hidden />
                </span>
              </summary>
              <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
