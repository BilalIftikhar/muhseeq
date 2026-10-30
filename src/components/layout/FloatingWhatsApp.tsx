import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { buildInquiryMessage, whatsappUrl } from "@/lib/inquiry";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl(buildInquiryMessage())}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1f8f4e] text-white shadow-lift transition-transform hover:scale-105 hover:bg-[#187a41]"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="sr-only">Chat with us on WhatsApp</span>
    </a>
  );
}
