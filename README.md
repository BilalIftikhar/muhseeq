# MUHSEEQ — B2B Apparel Catalog & Quotation Website

A frontend-only Next.js + TypeScript website for MUHSEEQ Apparel Manufacturing (Faisalabad, Pakistan).
Buyers browse products, view details and send quotation requests through **WhatsApp, email or phone** —
no backend, database, accounts, cart or payments.

## Tech stack

- Next.js 15 (App Router) · React 19 · TypeScript (strict)
- Tailwind CSS v4 · Lucide React icons
- Self-hosted fonts via Fontsource (Source Serif 4 + Figtree) — no Google Fonts request
- `next/image` for optimized, responsive images (AVIF/WebP)

## Getting started

Requires **Node.js 18.18+** (Node 20 or 22 recommended).

```bash
npm install        # install dependencies
npm run dev        # development server → http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run lint       # ESLint
npm run typecheck  # TypeScript check
```

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, collection grid, featured products, company intro, wholesale benefits, 3-step process |
| `/products` | Catalog with search, category filter, sort, empty state + buyer FAQ |
| `/products/[slug]` | Gallery, specs, customization, quote form, WhatsApp/email/call, related products |
| `/about` | Who we are, mission & vision, core values |
| `/manufacturing` | Capabilities + the 9 production stages |
| `/quality` | Before / during / after production checks |
| `/oem-services` | OEM/ODM infographic, 19 services, customization, 10-step process |
| `/sustainability` | Practices we are building |
| `/why-us` | Four pillars + ten reasons |
| `/our-ceo` | CEO's message |
| `/contact` | Contact cards, inquiry instructions, quotation form |

Unknown product slugs return a proper 404 page. `sitemap.xml` and `robots.txt` are generated automatically.

## ✏️ Configure contact details — `src/config/site.ts`

All contact details live in one file. Every button, link and inquiry message reads from it.

```ts
url: "https://www.example.com",          // ⚠️ set your live domain before deploying
contact: {
  phoneDisplay: "+92 304 6887872",
  phoneHref: "+923046887872",            // used for tel: links
  whatsapp: "923046887872",              // digits only, international format
  email: "touseeq.muhseeq@gmail.com",
  address: [...],
},
links: { alibaba: "", instagram: "", linkedin: "", facebook: "" },  // empty = hidden
```

> **Important:** `url` is used for canonical tags, Open Graph, the sitemap and the product link
> included in WhatsApp/email messages. Replace `https://www.example.com` with the real domain.
> The Alibaba link and social icons stay hidden until you add their URLs.

## 🛍️ Edit products — `src/data/products.ts`

`categories` and `products` are the single source of truth for cards, product pages, search,
filters and related products. To add a product, copy an entry and change:

```ts
{
  id: "p-009",                       // unique
  slug: "custom-varsity-jackets",    // becomes /products/custom-varsity-jackets
  name: "Custom Varsity Jackets",
  category: "street-wear",           // must match a category slug
  shortDescription: "…",             // shown on cards
  description: "…",                  // shown on the product page
  image: "/images/products/varsity.webp",
  imageAlt: "Navy varsity jacket with cream sleeves",
  gallery: [{ src: "/images/…", alt: "…" }],   // optional extra images
  specifications: [{ label: "Fabric", value: "…" }],
  customization: ["Embroidery", "Woven labels"],
  minimumOrderQuantity: "300 pcs",   // optional — only shown when set
  priceDisplay: "From $X / pc",      // optional — only shown when set
  featured: true,                    // shows on the home page
}
```

MOQ and price are intentionally left out of the supplied data (the references say MOQ depends on
product/fabric), so product pages show "On request" / "Quoted to your specification" until you add them.

Other page copy (values, production stages, OEM services, FAQs, etc.) is in `src/data/content.ts`.

## 🖼️ Replace images — `public/images/`

All images were extracted from the supplied section designs and saved as WebP:

```
public/images/
├── brand/          logo-mark.svg (vector logo), cta-bg.webp
├── products/       one image per category
├── pages/          page hero images, CEO photo, OEM infographics
├── about/  values/  manufacturing/  quality/  sustainability/
```

To replace one, overwrite the file with the same name (keep a similar aspect ratio), or add a new
file and update the path in `products.ts` / `content.ts`. Product images display at 4:5 on cards and
1:1 on the product page. Use WebP or JPG, ideally ≤ 1600 px wide.

The favicon is `src/app/icon.svg`.

## How the quotation flow works (no backend)

`src/lib/inquiry.ts` builds the messages and links:

- **WhatsApp** → `https://wa.me/<number>?text=<encoded message>` opened in a new tab, with product
  name, product URL, buyer name, company, email, phone, quantity and requirements.
- **Email** → `mailto:` with an encoded subject (`Quotation Request: <Product> (Qty: …) — <Company>`) and body.
- **Phone** → `tel:` link.

The form validates required fields and email format, then opens the visitor's WhatsApp or email app.
Nothing is sent to a server, and the site never claims a quote was "submitted" — it tells the visitor to
press send in their app, with a manual fallback link.

## Deployment

This is a standard Next.js app with every page statically pre-rendered.

- **Vercel / Netlify:** import the repo — no settings or environment variables required.
- **Any Node host (cPanel Node app, VPS):** `npm install && npm run build && npm start` (set `PORT` if needed).
- **Pure static hosting** (no Node server): add `output: "export"` and `images: { unoptimized: true }`
  to `next.config.ts`, run `npm run build`, and upload the `out/` folder.

Before going live: set `siteConfig.url`, add the Alibaba/social links if available, and review the
placeholder product descriptions.
