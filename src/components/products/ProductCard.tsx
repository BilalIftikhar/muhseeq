import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import { getCategory } from "@/data/products";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const category = getCategory(product.category);
  const href = `/products/${product.slug}`;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-card transition-shadow duration-300 hover:shadow-lift">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#eef0f3]">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, (min-width: 480px) 45vw, 92vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {category && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-navy-800 shadow-sm">
            {category.name}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold leading-snug">
          <Link href={href} className="after:absolute after:inset-0 after:content-[''] focus:outline-none">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{product.shortDescription}</p>
        <div className="relative z-10 mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
          <Link
            href={`${href}#quote`}
            className="inline-flex h-9 items-center gap-1.5 rounded-md bg-brand-600 px-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Request Quote
          </Link>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700" aria-hidden>
            Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
