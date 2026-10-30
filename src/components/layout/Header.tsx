"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import { mainNav, siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { telUrl, whatsappUrl } from "@/lib/inquiry";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function SearchForm({ onDone, autoFocus }: { onDone?: () => void; autoFocus?: boolean }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    router.push(query ? `/products?q=${encodeURIComponent(query)}` : "/products");
    onDone?.();
  };
  return (
    <form role="search" onSubmit={submit} className="flex w-full items-center gap-2">
      <label htmlFor="site-search" className="sr-only">
        Search products
      </label>
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden />
        <input
          id="site-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoFocus={autoFocus}
          placeholder="Search hoodies, polos, denim…"
          className="h-11 w-full rounded-md border border-line bg-white pl-9 pr-3 text-[0.95rem] text-ink placeholder:text-muted/70 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        />
      </div>
      <button type="submit" className="h-11 rounded-md bg-brand-600 px-4 text-sm font-semibold text-white hover:bg-brand-700">
        Search
      </button>
    </form>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close overlays on navigation
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Lock scroll + Escape to close the mobile drawer
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-900"
      >
        Skip to content
      </a>
      <div className="container-site flex h-[68px] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded px-2.5 py-2 text-[0.88rem] transition-colors ${
                      active ? "font-semibold text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {active && <span className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded bg-white" aria-hidden />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-expanded={searchOpen}
            aria-controls="header-search"
            className="grid h-10 w-10 place-items-center rounded-md text-white/85 hover:bg-white/10 hover:text-white"
          >
            {searchOpen ? <X className="h-5 w-5" aria-hidden /> : <Search className="h-5 w-5" aria-hidden />}
            <span className="sr-only">{searchOpen ? "Close search" : "Search products"}</span>
          </button>
          <Link
            href="/contact#quote"
            className="hidden h-10 items-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-navy-900 shadow-sm transition-colors hover:bg-brand-50 sm:inline-flex"
          >
            Request a Quote <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-md text-white hover:bg-white/10 xl:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>

      {searchOpen && (
        <div id="header-search" className="border-t border-white/10 bg-navy-900">
          <div className="container-site py-3">
            <SearchForm autoFocus onDone={() => setSearchOpen(false)} />
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[70] overflow-hidden xl:hidden ${menuOpen ? "" : "pointer-events-none invisible"}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-navy-950/60 transition-opacity duration-200 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[68px] items-center justify-between border-b border-line px-5">
            <Logo variant="dark" />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className="grid h-10 w-10 place-items-center rounded-md text-navy-900 hover:bg-brand-50"
            >
              <X className="h-6 w-6" aria-hidden />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
            <ul>
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      tabIndex={menuOpen ? 0 : -1}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between rounded-md px-3 py-3 text-[1.02rem] ${
                        active ? "bg-brand-50 font-semibold text-brand-700" : "text-navy-900 hover:bg-brand-50"
                      }`}
                    >
                      {item.label}
                      <ArrowRight className="h-4 w-4 opacity-40" aria-hidden />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="space-y-2.5 border-t border-line p-5">
            <Link
              href="/contact#quote"
              tabIndex={menuOpen ? 0 : -1}
              className="flex h-11 items-center justify-center gap-2 rounded-md bg-brand-600 font-semibold text-white"
            >
              Request a Quote <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={menuOpen ? 0 : -1}
                className="flex h-11 items-center justify-center gap-2 rounded-md border border-line text-sm font-semibold text-navy-900"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#1f8f4e]" /> WhatsApp
              </a>
              <a
                href={telUrl()}
                tabIndex={menuOpen ? 0 : -1}
                className="flex h-11 items-center justify-center rounded-md border border-line text-sm font-semibold text-navy-900"
              >
                Call us
              </a>
            </div>
            <p className="pt-1 text-center text-xs text-muted">{siteConfig.contact.city}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
