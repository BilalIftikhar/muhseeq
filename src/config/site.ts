/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — edit company & contact details here.
 *  Every page, button and inquiry link reads from this file.
 * ─────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  /** Brand name shown in the logo, titles and messages */
  name: "MUHSEEQ",
  /** Short descriptor under the logo */
  descriptor: "Apparel Manufacturing",
  /** Full company name used in metadata */
  legalName: "Muhseeq Apparel Manufacturing",

  /**
   * ⚠️ REPLACE with your live domain before deploying.
   * Used for canonical URLs, Open Graph tags, the sitemap and
   * the product link included in WhatsApp / email inquiries.
   */
  url: "https://www.example.com",

  description:
    "Custom apparel manufacturing and export for international brands, importers, wholesalers and private-label businesses from Faisalabad, Pakistan.",

  /** Year the company was established (from the About section) */
  established: 2022,

  contact: {
    /** Phone number as displayed on the site */
    phoneDisplay: "+92 304 6887872",
    /** Phone number for tel: links (international format, no spaces) */
    phoneHref: "+923046887872",
    /** WhatsApp number — international format, digits only, no + or spaces */
    whatsapp: "923046887872",
    whatsappDisplay: "+92 304 6887872",
    /** Business email used for mailto: inquiries */
    email: "touseeq.muhseeq@gmail.com",
    /** Head office address, one line per entry */
    address: ["7-A, Ripple Line, Peoples Colony,", "Near Baba Sweet, Faisalabad, Pakistan."],
    /**
     * All company locations — shown on the contact page and in the footer.
     * Add, remove or reorder entries here.
     */
    locations: [
      {
        label: "Head Office",
        lines: ["7-A, Ripple Line, Peoples Colony,", "Near Baba Sweet, Faisalabad, Pakistan."],
      },
      {
        label: "Manufacturing Unit",
        lines: ["Millat Industrial Estate, Near Hina Sana Textile,", "Millat Town, Faisalabad, Pakistan."],
      },
      {
        label: "Warehouse",
        lines: ["Street 3, B Block,", "Sir Syed Town, Faisalabad, Pakistan."],
      },
    ],
    city: "Faisalabad, Pakistan",
    /** Shown on the contact page */
    responseTime: "Typical response within 24–48 hours (Mon–Sat)",
  },

  ceo: {
    name: "Touseeq Haider Tarar",
    title: "Founder & CEO",
  },

  /**
   * External profiles. Leave a value as an empty string to hide it.
   * ⚠️ Add the real URLs — none were supplied in the reference files.
   */
  links: {
    alibaba: "https://muhseeq.m.trustpass.alibaba.com",
    instagram: "",
    linkedin: "",
    facebook: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Collections", href: "/products" },
  { label: "Quality", href: "/quality" },
  { label: "OEM Services", href: "/oem-services" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Why us", href: "/why-us" },
  { label: "Our CEO", href: "/our-ceo" },
  { label: "Contact", href: "/contact" },
] as const;

/** Absolute URL helper for canonical links and inquiry messages */
export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
