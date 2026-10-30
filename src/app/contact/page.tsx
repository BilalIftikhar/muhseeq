import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { buildInquiryMessage, mailtoUrl, telUrl, whatsappUrl } from "@/lib/inquiry";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteForm } from "@/components/quotes/QuoteForm";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Eyebrow } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us — Let’s Talk About Your Order",
  description:
    "Request a quotation from MUHSEEQ. Contact us by WhatsApp, email or phone with your product details, fabric requirements and quantities.",
  alternates: { canonical: "/contact" },
};

function ContactCard({ icon, label, children, href, external, className = "" }: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
}) {
  const body = (
    <>
      <span className="grid h-11 w-11 place-items-center rounded-full bg-navy-900 text-white">{icon}</span>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-navy-800">{label}</p>
      <span className="mt-1.5 block h-0.5 w-6 bg-brand-500" aria-hidden />
      <div className="mt-2.5 font-serif text-lg font-bold text-navy-900 sm:text-xl">{children}</div>
    </>
  );
  const cls = `block rounded-xl border border-line bg-white p-5 shadow-card ${className}`;
  return href ? (
    <a href={href} className={`${cls} transition-colors hover:border-brand-500`} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

export default function ContactPage() {
  const { contact, links } = siteConfig;
  return (
    <>
      <PageHero
        tone="light"
        breadcrumb={
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-navy-800">
              <li><Link href="/" className="hover:text-brand-700">Home</Link></li>
              <li aria-hidden><ChevronRight className="h-3.5 w-3.5" /></li>
              <li aria-current="page">Contact</li>
            </ol>
          </nav>
        }
        eyebrow="Get in touch"
        title="Let’s Talk About"
        accent="Your Order"
        intro="Share your product details, fabric requirements, quantities or any questions — our team will review and get back to you with the best solutions."
        image="/images/pages/contact-hero.webp"
        imageAlt="MUHSEEQ notebook, pen, phone and folded fabric samples on a desk"
      />

      <section aria-labelledby="channels-heading" className="py-14 sm:py-20">
        <div className="container-site grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <h2 id="channels-heading" className="sr-only">Contact channels</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <ContactCard icon={<Phone className="h-5 w-5" aria-hidden />} label="Call us" href={telUrl()}>
              {contact.phoneDisplay}
            </ContactCard>
            <ContactCard icon={<WhatsAppIcon className="h-5 w-5" />} label="WhatsApp" href={whatsappUrl(buildInquiryMessage())} external>
              {contact.whatsappDisplay}
            </ContactCard>
            <ContactCard icon={<Mail className="h-5 w-5" aria-hidden />} label="General enquiries" href={mailtoUrl()} className={links.alibaba ? "" : "sm:col-span-2"}>
              <span className="break-all">{contact.email}</span>
            </ContactCard>
            {links.alibaba && (
              <ContactCard icon={<ExternalLink className="h-5 w-5" aria-hidden />} label="Alibaba" href={links.alibaba} external>
                <span className="underline underline-offset-4">Muhseeq on Alibaba</span>
              </ContactCard>
            )}
            <div className="flex gap-4 rounded-xl border border-line bg-white p-5 shadow-card sm:col-span-2">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-900 text-white">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-800">Head office</p>
                <span className="mt-1.5 block h-0.5 w-6 bg-brand-500" aria-hidden />
                <address className="mt-2.5 not-italic text-lg leading-relaxed text-navy-900">
                  {contact.address.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-navy-900 p-7 text-white shadow-lift sm:p-9">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-600/20 blur-2xl" aria-hidden />
            <Eyebrow tone="light">Fastest way to start</Eyebrow>
            <h3 className="mt-4 text-3xl font-semibold !text-white">Send a Detailed Inquiry</h3>
            <p className="mt-3 text-white/80">
              Share your specifications through our inquiry form and receive a suitable MOQ and quotation.
            </p>
            <div className="mt-7 grid gap-3">
              <a href="#quote" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-brand-500 font-semibold text-white transition-colors hover:bg-brand-600">
                Request a Quote <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={whatsappUrl(buildInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/40 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-white/75">
              <Clock className="h-4 w-4 text-brand-300" aria-hidden /> {contact.responseTime}
            </p>
          </div>
        </div>
      </section>

      <section id="quote" aria-label="Quotation form" className="scroll-mt-20 border-t border-line bg-waves py-14 sm:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <div>
            <Eyebrow>Quotation & inquiries</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">How to send a business inquiry</h2>
            <ol className="mt-6 space-y-4 text-navy-800">
              {[
                "Select the product, or choose “General / multiple products”.",
                "Add your quantity — an estimate per style or colour is fine.",
                "Describe fabric, GSM, sizes, colours, branding and delivery timing.",
                "Choose WhatsApp or Email — your message opens prefilled, ready for you to send.",
              ].map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-semibold text-white">{i + 1}</span>
                  <span className="pt-0.5 leading-relaxed">{t}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted">
              Have tech packs or artwork? Attach them in WhatsApp or your email after the message opens.
            </p>
          </div>
          <QuoteForm description="All fields marked * are required." />
        </div>
      </section>
    </>
  );
}
