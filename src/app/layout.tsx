import type { Metadata, Viewport } from "next";
import "@fontsource-variable/source-serif-4";
import "@fontsource-variable/figtree";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Custom Apparel Manufacturer & Exporter — Faisalabad, Pakistan`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.legalName,
  keywords: [
    "apparel manufacturer Pakistan",
    "private label clothing manufacturer",
    "OEM apparel Faisalabad",
    "custom hoodies manufacturer",
    "wholesale T-shirts",
    "garment exporter",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Quality Apparel for Global Brands`,
    description: siteConfig.description,
    url: "/",
    images: [{ url: "/images/pages/about-hero.webp", width: 1190, height: 820, alt: "Garment being stitched on an industrial sewing machine" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#061428",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/brand/logo-mark.svg`,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phoneHref,
  foundingDate: String(siteConfig.established),
  address: {
    "@type": "PostalAddress",
    streetAddress: "7-A, Ripple Line, Peoples Colony, Near Baba Sweet",
    addressLocality: "Faisalabad",
    addressCountry: "PK",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main">{children}</main>
        <CtaBanner />
        <Footer />
        <FloatingWhatsApp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
