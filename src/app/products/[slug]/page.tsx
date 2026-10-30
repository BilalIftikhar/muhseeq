import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";
import { absoluteUrl, siteConfig } from "@/config/site";
import { getCategory, getProduct, getRelatedProducts, products } from "@/data/products";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductCard } from "@/components/products/ProductCard";
import { QuoteForm } from "@/components/quotes/QuoteForm";
import { ContactActions } from "@/components/quotes/ContactActions";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Params {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} — Wholesale & Private Label`,
    description: product.shortDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.shortDescription,
      url: `/products/${product.slug}`,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product, 4);
  const images = [{ src: product.image, alt: product.imageAlt }, ...product.gallery];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: images.map((i) => absoluteUrl(i.src)),
    category: category?.name,
    brand: { "@type": "Brand", name: siteConfig.name },
    manufacturer: { "@type": "Organization", name: siteConfig.legalName },
    url: absoluteUrl(`/products/${product.slug}`),
  };

  return (
    <>
      <div className="border-b border-line bg-brand-50/60">
        <nav aria-label="Breadcrumb" className="container-site py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
            <li><Link href="/" className="hover:text-brand-700">Home</Link></li>
            <li aria-hidden><ChevronRight className="h-3.5 w-3.5" /></li>
            <li><Link href="/products" className="hover:text-brand-700">Products</Link></li>
            {category && (
              <>
                <li aria-hidden><ChevronRight className="h-3.5 w-3.5" /></li>
                <li><Link href={`/products?category=${category.slug}`} className="hover:text-brand-700">{category.name}</Link></li>
              </>
            )}
            <li aria-hidden><ChevronRight className="h-3.5 w-3.5" /></li>
            <li aria-current="page" className="font-medium text-navy-900">{product.name}</li>
          </ol>
        </nav>
      </div>

      <section className="py-10 sm:py-14">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ProductGallery images={images} />

          <div>
            {category && (
              <Link
                href={`/products?category=${category.slug}`}
                className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700"
              >
                {category.name}
              </Link>
            )}
            <h1 className="mt-4 text-[2.1rem] font-bold leading-tight sm:text-[2.6rem]">{product.name}</h1>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-navy-800">{product.description}</p>

            <dl className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-line p-3.5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Pricing</dt>
                <dd className="mt-1 font-semibold text-navy-900">{product.priceDisplay ?? "Quoted to your specification"}</dd>
              </div>
              <div className="rounded-lg border border-line p-3.5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Minimum order</dt>
                <dd className="mt-1 font-semibold text-navy-900">{product.minimumOrderQuantity ?? "On request"}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#quote" className="inline-flex h-12 items-center rounded-md bg-brand-600 px-6 font-semibold text-white transition-colors hover:bg-brand-700">
                Request a Quote
              </a>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-navy-900">Or contact us directly about this product:</p>
              <ContactActions productName={product.name} productSlug={product.slug} />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="specs-heading" className="border-t border-line bg-brand-50/50 py-12 sm:py-16">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 id="specs-heading" className="text-2xl font-bold sm:text-3xl">Specifications</h2>
            <dl className="mt-5 divide-y divide-line overflow-hidden rounded-xl border border-line bg-white">
              {product.specifications.map((s) => (
                <div key={s.label} className="grid gap-1 px-5 py-3.5 sm:grid-cols-[10rem_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold text-navy-900">{s.label}</dt>
                  <dd className="text-sm text-navy-800">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Customization options</h2>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {product.customization.map((c) => (
                <li key={c} className="flex items-center gap-2.5 rounded-lg border border-line bg-white px-4 py-3 text-sm text-navy-800">
                  <Check className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">
              Need something not listed? Describe it in your inquiry — see our{" "}
              <Link href="/oem-services" className="font-semibold text-brand-700 underline underline-offset-2">OEM & private-label services</Link>.
            </p>
          </div>
        </div>
      </section>

      <section id="quote" aria-label="Quotation form" className="scroll-mt-20 py-12 sm:py-16">
        <div className="container-site max-w-4xl">
          <QuoteForm
            defaultProduct={product.slug}
            heading={`Request a quote for ${product.name}`}
            description="Share your quantity and requirements. Your details are added to a prefilled WhatsApp or email message for you to send."
          />
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="border-t border-line py-14 sm:py-16">
          <div className="container-site">
            <SectionHeading title={<span id="related-heading">Related</span>} accent="Products" />
            <ul className="mt-8 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <li key={p.id}>
                  <ProductCard product={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
