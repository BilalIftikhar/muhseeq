import { absoluteUrl, siteConfig } from "@/config/site";

/** Values collected by the quotation form (all strings, trimmed before use) */
export interface InquiryDetails {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  productName?: string;
  productSlug?: string;
  quantity?: string;
  requirements?: string;
}

const clean = (value?: string) => (value ?? "").trim();

/** Absolute product URL, or empty string when no product is selected */
export function productUrl(slug?: string): string {
  return slug ? absoluteUrl(`/products/${slug}`) : "";
}

/** Builds the readable quotation message used by WhatsApp and email */
export function buildInquiryMessage(details: InquiryDetails = {}): string {
  const product = clean(details.productName);
  const lines: string[] = [];

  lines.push(
    product
      ? `Hello, I am interested in receiving a quotation for ${product}.`
      : `Hello ${siteConfig.name} team, I would like to discuss a custom apparel order.`,
  );
  lines.push("");

  const fields: Array<[string, string]> = [
    ["Name", clean(details.fullName)],
    ["Company", clean(details.companyName)],
    ["Email", clean(details.email)],
    ["Phone / WhatsApp", clean(details.phone)],
    ["Required Quantity", clean(details.quantity)],
    ["Requirements", clean(details.requirements)],
  ];
  for (const [label, value] of fields) {
    if (value) lines.push(`${label}: ${value}`);
  }

  if (fields.some(([, v]) => v)) lines.push("");
  lines.push(
    product
      ? "Please share your quotation and product information."
      : "Please share the details needed to prepare a quotation.",
  );

  const url = productUrl(details.productSlug);
  if (url) {
    lines.push("");
    lines.push(`Product URL: ${url}`);
  }

  lines.push("");
  lines.push("Thank you.");
  return lines.join("\n");
}

export function buildInquirySubject(details: InquiryDetails = {}): string {
  const product = clean(details.productName);
  const qty = clean(details.quantity);
  const company = clean(details.companyName);
  let subject = product ? `Quotation Request: ${product}` : "Custom Apparel Inquiry";
  if (qty) subject += ` (Qty: ${qty})`;
  if (company) subject += ` — ${company}`;
  return subject;
}

/** https://wa.me/ click-to-chat link with an encoded, prefilled message */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** mailto: link with encoded subject and body */
export function mailtoUrl(subject?: string, body?: string): string {
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${siteConfig.contact.email}${params.length ? `?${params.join("&")}` : ""}`;
}

export function telUrl(): string {
  return `tel:${siteConfig.contact.phoneHref}`;
}

/** Convenience: WhatsApp link for a single product with no form data */
export function productWhatsappUrl(name: string, slug: string): string {
  return whatsappUrl(buildInquiryMessage({ productName: name, productSlug: slug }));
}

export function productMailtoUrl(name: string, slug: string): string {
  const details = { productName: name, productSlug: slug };
  return mailtoUrl(buildInquirySubject(details), buildInquiryMessage(details));
}

/** Simple, permissive email check for client-side validation */
export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}
