import Link from "next/link";
import { ArrowRight, ExternalLink, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { siteConfig } from "@/config/site";
import { categories } from "@/data/products";
import { LogoStacked } from "@/components/ui/Logo";
import { mailtoUrl, telUrl } from "@/lib/inquiry";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "OEM Services", href: "/oem-services" },
  { label: "Quality Assurance", href: "/quality" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Why Choose Us", href: "/why-us" },
];

const resourceLinks = [
  { label: "Our CEO", href: "/our-ceo" },
  { label: "Request a Quote", href: "/contact#quote" },
  { label: "Buyer FAQs", href: "/products#faq" },
  { label: "Contact Us", href: "/contact" },
];

function FooterHeading({ children }: { children: string }) {
  return (
    <h2 className="font-sans text-xs font-bold uppercase tracking-[0.14em] !text-gold-600">
      {children}
      <span className="mt-2 block h-0.5 w-6 bg-gold-500" aria-hidden />
    </h2>
  );
}

export function Footer() {
  const { contact, ceo, links } = siteConfig;
  const socials = [
    { href: links.instagram, label: "Instagram", Icon: Instagram },
    { href: links.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: links.facebook, label: "Facebook", Icon: Facebook },
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-line bg-white text-navy-900">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.5fr] lg:gap-8">
        <div className="text-center sm:col-span-2 lg:col-span-1 lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <LogoStacked />
          </div>
          <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-navy-800 lg:mx-0">{siteConfig.description}</p>
          {socials.length > 0 && (
            <ul className="mt-5 flex justify-center gap-3 lg:justify-start">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-gold-500 text-navy-900 transition-colors hover:bg-gold-500 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    <span className="sr-only">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Products" className="lg:border-l lg:border-gold-200 lg:pl-8">
          <FooterHeading>Products</FooterHeading>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/products?category=${c.slug}`} className="text-navy-800 hover:text-brand-600">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/products" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700">
            View All <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </nav>

        <nav aria-label="Company" className="lg:border-l lg:border-gold-200 lg:pl-8">
          <FooterHeading>Company</FooterHeading>
          <ul className="mt-4 space-y-2 text-sm">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-navy-800 hover:text-brand-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Resources" className="lg:border-l lg:border-gold-200 lg:pl-8">
          <FooterHeading>Resources</FooterHeading>
          <ul className="mt-4 space-y-2 text-sm">
            {resourceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-navy-800 hover:text-brand-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sm:col-span-2 lg:col-span-1 lg:border-l lg:border-gold-200 lg:pl-8">
          <FooterHeading>Contact Us</FooterHeading>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={telUrl()} className="flex items-center gap-3 hover:text-brand-600">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-900 text-white">
                  <Phone className="h-4 w-4" aria-hidden />
                </span>
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={mailtoUrl()} className="flex items-center gap-3 break-all hover:text-brand-600">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-900 text-white">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                {contact.email}
              </a>
            </li>
            {links.alibaba && (
              <li>
                <a href={links.alibaba} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-semibold underline underline-offset-2 hover:text-brand-600">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-900 text-white">
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </span>
                  {siteConfig.name.charAt(0) + siteConfig.name.slice(1).toLowerCase()} on Alibaba
                </a>
              </li>
            )}
            {contact.locations.map((loc) => (
              <li key={loc.label} className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-900 text-white">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <div className="leading-relaxed">
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-600">{loc.label}</p>
                  <address className="not-italic">{loc.lines.join(" ")}</address>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-900 text-white">
              <UserRound className="h-4 w-4" aria-hidden />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-bold uppercase tracking-wider text-gold-600">CEO</p>
              <p className="font-semibold">{ceo.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-site flex flex-col items-center justify-between gap-1 py-4 text-xs text-navy-800 sm:flex-row">
          <p>© {new Date().getFullYear()} Muhseeq. All rights reserved.</p>
          <p>{contact.city}</p>
        </div>
      </div>
    </footer>
  );
}
