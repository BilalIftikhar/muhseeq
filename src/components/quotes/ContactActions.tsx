import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { buildInquiryMessage, buildInquirySubject, mailtoUrl, telUrl, whatsappUrl } from "@/lib/inquiry";

interface ContactActionsProps {
  productName?: string;
  productSlug?: string;
  layout?: "stack" | "row";
}

/** Direct WhatsApp / email / phone actions, prefilled with the product when given */
export function ContactActions({ productName, productSlug, layout = "stack" }: ContactActionsProps) {
  const details = { productName, productSlug };
  const message = buildInquiryMessage(details);
  const items = [
    {
      href: whatsappUrl(message),
      label: "WhatsApp",
      sub: siteConfig.contact.whatsappDisplay,
      icon: <WhatsAppIcon className="h-5 w-5" />,
      tone: "bg-[#1f8f4e] text-white",
      external: true,
    },
    {
      href: mailtoUrl(buildInquirySubject(details), message),
      label: "Email",
      sub: siteConfig.contact.email,
      icon: <Mail className="h-5 w-5" aria-hidden />,
      tone: "bg-navy-900 text-white",
      external: false,
    },
    {
      href: telUrl(),
      label: "Call",
      sub: siteConfig.contact.phoneDisplay,
      icon: <Phone className="h-5 w-5" aria-hidden />,
      tone: "bg-brand-600 text-white",
      external: false,
    },
  ];
  return (
    <ul className={layout === "row" ? "grid gap-3 sm:grid-cols-3" : "grid gap-3"}>
      {items.map((it) => (
        <li key={it.label}>
          <a
            href={it.href}
            {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex items-center gap-3 rounded-lg border border-line bg-white p-3 transition-colors hover:border-brand-500"
          >
            <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${it.tone}`}>{it.icon}</span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-navy-900 group-hover:text-brand-700">
                {it.label === "Call" ? "Call us" : `${it.label} us`}
              </span>
              <span className="block truncate text-xs text-muted">{it.sub}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
