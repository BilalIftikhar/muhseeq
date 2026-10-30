import type { Metadata } from "next";
import { Suspense } from "react";
import { Layers, Shirt, Tag, Scroll } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Products & Collections — Custom Apparel Across Every Category",
  description:
    "Browse custom hoodies, T-shirts, polos, denim, formal wear, sportswear and kids wear — manufactured to your fabric, GSM, colour, sizing and private-label requirements.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        tone="light"
        eyebrow="Product range"
        title="Custom Apparel"
        accent="Across Every Category"
        intro="From everyday basics to structured workwear, each category is manufactured to your fabric, GSM, colour, sizing, printing, embroidery and private-label requirements."
        image="/images/pages/collections-hero.webp"
        imageAlt="Close-up of soft beige knitted fabric folds"
        stats={[
          { icon: <Layers className="h-8 w-8" strokeWidth={1.4} />, value: "Various", label: "Product categories" },
          { icon: <Shirt className="h-8 w-8" strokeWidth={1.4} />, value: "XS – 5XL", label: "Size range" },
          { icon: <Scroll className="h-8 w-8" strokeWidth={1.4} />, value: "Custom", label: "Fabric & GSM" },
          { icon: <Tag className="h-8 w-8" strokeWidth={1.4} />, value: "OEM", label: "Private label" },
        ]}
      />
      <section aria-labelledby="catalog-heading" className="py-14 sm:py-16">
        <div className="container-site">
          <SectionHeading
            eyebrow="Explore our collection"
            title={<span id="catalog-heading">Premium Apparel for Every Need</span>}
            intro="Search, filter by category and request a quotation on any product — no account needed."
          />
          <div className="mt-10">
            <Suspense fallback={<p className="text-muted">Loading products…</p>}>
              <ProductCatalog />
            </Suspense>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
}
