import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl, buildInquiryMessage } from "@/lib/inquiry";

/** "Custom Apparel Manufacturing for Global Brands" band shown above the footer */
export function CtaBanner() {
  return (
    <section aria-labelledby="cta-heading" className="relative isolate overflow-hidden bg-navy-950">
      <div className="absolute inset-y-0 right-0 -z-10 w-full opacity-50 [mask-image:linear-gradient(to_right,transparent,black_35%)] lg:w-[62%] lg:opacity-100" aria-hidden>
        <Image src="/images/brand/cta-bg.webp" alt="" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-right" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 from-30% via-navy-950/40 to-transparent" aria-hidden />
      <div className="container-site py-14 sm:py-16">
        <h2 id="cta-heading" className="max-w-2xl text-3xl font-semibold leading-tight !text-white sm:text-[2.6rem]">
          Custom Apparel Manufacturing for Global Brands
        </h2>
        <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.2em] text-gold-200">
          <span>Global quality</span>
          <span aria-hidden className="text-gold-500">|</span>
          <span>Reliable partner</span>
          <span aria-hidden className="text-gold-500">|</span>
          <span>Your vision, our expertise</span>
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
          <ButtonLink href="/contact#quote" variant="gold" size="lg">
            Request a Quote <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
          <span className="hidden h-10 w-px bg-white/30 sm:block" aria-hidden />
          <a
            href={whatsappUrl(buildInquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-semibold text-white hover:text-brand-300"
          >
            <WhatsAppIcon className="h-7 w-7" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
