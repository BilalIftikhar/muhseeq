import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

/** Numbered collection tiles — mirrors the "Premium Apparel for Every Need" reference grid */
export function CategoryGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
      {categories.map((c, i) => (
        <li key={c.slug} className={i < 4 ? "lg:col-span-3" : "lg:col-span-4"}>
          <Link
            href={`/products?category=${c.slug}`}
            className="group relative flex h-full min-h-[15rem] overflow-hidden rounded-xl bg-gradient-to-br from-[#f4f5f7] to-[#e6e8ec] shadow-card transition-shadow hover:shadow-lift"
          >
            <div className="relative z-10 flex w-[48%] flex-col p-5 sm:p-6">
              <span className="font-serif text-2xl font-bold text-navy-900">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-2 block h-0.5 w-6 bg-gold-500" aria-hidden />
              <h3 className="mt-4 text-xl font-bold leading-tight">{c.name}</h3>
              <p className="mt-2 text-[0.82rem] leading-snug text-muted">{c.tagline}</p>
              <span className="mt-auto grid h-9 w-9 place-items-center rounded-full border border-gold-500 text-navy-900 transition-colors group-hover:bg-gold-500 group-hover:text-white">
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </div>
            <div className="absolute inset-y-0 right-0 w-[58%]">
              <Image
                src={c.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 55vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#f1f2f5] to-transparent" aria-hidden />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
