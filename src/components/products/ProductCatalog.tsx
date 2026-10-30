"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PackageSearch, Search, X } from "lucide-react";
import { categories, products } from "@/data/products";
import { ProductCard } from "./ProductCard";

type SortKey = "default" | "name-asc" | "name-desc";

export function ProductCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const [query, setQuery] = useState(params.get("q") ?? "");
  const [category, setCategory] = useState(params.get("category") ?? "all");
  const [sort, setSort] = useState<SortKey>((params.get("sort") as SortKey) ?? "default");

  // Keep state in sync when the URL changes (e.g. header search, footer links)
  useEffect(() => {
    const q = params.get("q") ?? "";
    setQuery((prev) => (prev.trim() === q ? prev : q));
    setCategory(params.get("category") ?? "all");
    setSort((params.get("sort") as SortKey) ?? "default");
  }, [params]);

  // Reflect filters in the URL so results are shareable
  useEffect(() => {
    const next = new URLSearchParams();
    if (query.trim()) next.set("q", query.trim());
    if (category !== "all") next.set("category", category);
    if (sort !== "default") next.set("sort", sort);
    const qs = next.toString();
    const current = params.toString();
    if (qs === current) return;
    const t = setTimeout(() => router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false }), 250);
    return () => clearTimeout(t);
  }, [query, category, sort, pathname, router, params]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (!q) return true;
      const cat = categories.find((c) => c.slug === p.category)?.name ?? "";
      return [p.name, p.shortDescription, cat].join(" ").toLowerCase().includes(q);
    });
    if (sort === "name-asc") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "name-desc") list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [query, category, sort]);

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const p of products) map[p.category] = (map[p.category] ?? 0) + 1;
    return map;
  }, []);

  const reset = () => {
    setQuery("");
    setCategory("all");
    setSort("default");
  };
  const activeCategory = categories.find((c) => c.slug === category);

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[15rem_minmax(0,1fr)]">
      {/* Filters */}
      <aside aria-label="Product filters" className="min-w-0 lg:sticky lg:top-24 lg:self-start">
        <div className="relative">
          <label htmlFor="catalog-search" className="sr-only">
            Search products by name
          </label>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden />
          <input
            id="catalog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            className="h-11 w-full rounded-md border border-line bg-white pl-9 pr-3 text-[0.95rem] placeholder:text-muted/70 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
        </div>

        <fieldset className="mt-6 min-w-0">
          <legend className="text-xs font-bold uppercase tracking-[0.14em] text-navy-800">Categories</legend>
          <div className="-mx-1 mt-3 flex gap-2 overflow-x-auto pb-2 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
            {[{ slug: "all", name: "All products" }, ...categories].map((c) => {
              const active = category === c.slug;
              const count = c.slug === "all" ? products.length : counts[c.slug] ?? 0;
              return (
                <label
                  key={c.slug}
                  className={`relative flex shrink-0 cursor-pointer items-center justify-between gap-3 rounded-full border px-3.5 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-500 lg:rounded-md lg:border-transparent ${
                    active
                      ? "border-brand-600 bg-brand-600 font-semibold text-white lg:bg-brand-50 lg:text-brand-700"
                      : "border-line bg-white text-navy-800 hover:bg-brand-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={c.slug}
                    checked={active}
                    onChange={() => setCategory(c.slug)}
                    className="sr-only"
                  />
                  <span className="whitespace-nowrap">{c.name}</span>
                  <span className={`text-xs ${active ? "opacity-90" : "text-muted"}`}>{count}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </aside>

      {/* Results */}
      <div>
        <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted" aria-live="polite">
            Showing <strong className="text-navy-900">{results.length}</strong>{" "}
            {results.length === 1 ? "product" : "products"}
            {activeCategory && (
              <>
                {" "}in <strong className="text-navy-900">{activeCategory.name}</strong>
              </>
            )}
            {query.trim() && (
              <>
                {" "}for “<strong className="text-navy-900">{query.trim()}</strong>”
              </>
            )}
          </p>
          <div className="flex items-center gap-2">
            <label htmlFor="catalog-sort" className="text-sm text-muted">
              Sort by
            </label>
            <select
              id="catalog-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="h-10 rounded-md border border-line bg-white px-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            >
              <option value="default">Featured</option>
              <option value="name-asc">Name: A – Z</option>
              <option value="name-desc">Name: Z – A</option>
            </select>
          </div>
        </div>

        {results.length > 0 ? (
          <ul className="mt-6 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 xl:grid-cols-3">
            {results.map((p, i) => (
              <li key={p.id} className="flex">
                <div className="w-full">
                  <ProductCard product={p} priority={i < 3} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 flex flex-col items-center rounded-xl border border-dashed border-line bg-brand-50/60 px-6 py-14 text-center">
            <PackageSearch className="h-10 w-10 text-brand-600" aria-hidden />
            <h3 className="mt-4 text-xl font-semibold">No products match your search</h3>
            <p className="mt-2 max-w-md text-sm text-muted">
              Try another keyword or category. We also manufacture custom items that aren’t listed — send us your requirements and we’ll advise.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={reset}
                className="inline-flex h-10 items-center gap-1.5 rounded-md border border-line bg-white px-4 text-sm font-semibold text-navy-900 hover:border-brand-600"
              >
                <X className="h-4 w-4" aria-hidden /> Clear filters
              </button>
              <Link href="/contact#quote" className="inline-flex h-10 items-center rounded-md bg-brand-600 px-4 text-sm font-semibold text-white hover:bg-brand-700">
                Send a custom inquiry
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
