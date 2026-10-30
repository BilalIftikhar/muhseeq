/**
 * ─────────────────────────────────────────────────────────────
 *  PRODUCT CATALOG — the single source of truth for categories,
 *  product cards, product pages, search, filters and related items.
 *
 *  To add a product: copy an entry, give it a unique id + slug,
 *  drop its image in /public/images/products and set the paths.
 *  Optional fields (minimumOrderQuantity, priceDisplay) are only
 *  shown when you fill them in — leave them out if unknown.
 * ─────────────────────────────────────────────────────────────
 */

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  image: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category["slug"];
  /** One–two lines for cards */
  shortDescription: string;
  /** Full description for the product page */
  description: string;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  specifications: ProductSpec[];
  customization: string[];
  /** Only set when a confirmed MOQ exists */
  minimumOrderQuantity?: string;
  /** Only set when a confirmed price exists */
  priceDisplay?: string;
  featured: boolean;
}

export const categories: Category[] = [
  {
    slug: "formal-wear",
    name: "Formal Wear",
    tagline: "Tailored for professionals. A timeless look.",
    image: "/images/products/formal-wear.webp",
  },
  {
    slug: "street-wear",
    name: "Street Wear",
    tagline: "Bold styles. Made for modern culture.",
    image: "/images/products/street-wear.webp",
  },
  {
    slug: "t-shirts-polos",
    name: "T-Shirts & Polos",
    tagline: "Everyday essentials for every brand.",
    image: "/images/products/polo-shirts.webp",
  },
  {
    slug: "denim-wear",
    name: "Denim Wear",
    tagline: "Durable. Versatile. Built to perform.",
    image: "/images/products/denim-wear.webp",
  },
  {
    slug: "hoodies-sweatshirts",
    name: "Hoodies & Sweatshirts",
    tagline: "Comfort meets style. Perfect for every season.",
    image: "/images/products/hoodies-sweatshirts.webp",
  },
  {
    slug: "sportswear",
    name: "Sportswear",
    tagline: "Designed for performance. Made to move.",
    image: "/images/products/sportswear.webp",
  },
  {
    slug: "kids-wear",
    name: "Kids Wear",
    tagline: "Soft fabrics. Bright styles. Made for their tomorrow.",
    image: "/images/products/kids-wear.webp",
  },
];

/** Shared values taken from the supplied Collections / OEM reference material */
const SIZE_RANGE: ProductSpec = { label: "Size range", value: "XS – 5XL, custom sizing available" };
const COLOUR: ProductSpec = { label: "Colours", value: "Custom colours with Pantone matching" };
const MOQ_NOTE: ProductSpec = {
  label: "MOQ",
  value: "Depends on product, fabric and customization — shared with your quotation",
};
const SAMPLING: ProductSpec = { label: "Sampling", value: "Sample developed for approval before bulk production" };

const DECORATION = ["Embroidery", "Screen & digital print", "Puff print", "Woven labels"];
const BRANDING = ["Custom care & size labels", "Hang tags", "Barcode labelling", "Private packaging"];

export const products: Product[] = [
  {
    id: "p-001",
    slug: "custom-pullover-hoodies",
    name: "Custom Pullover Hoodies",
    category: "hoodies-sweatshirts",
    shortDescription: "Private-label hoodies made to your fabric, GSM, colour and branding.",
    description:
      "Pullover hoodies manufactured to your specification — choose the fabric, GSM, colourway and fit, then add printing, embroidery, labels and packaging under your own brand. Every order follows our managed production line from sampling through final inspection.",
    image: "/images/products/hoodies-sweatshirts.webp",
    imageAlt: "Stack of grey, navy and black pullover hoodies",
    gallery: [
      { src: "/images/about/hoodie.webp", alt: "White hoodie hood and drawcords close-up" },
      { src: "/images/pages/hangers.webp", alt: "Hoodies in beige, blue, white and black on a clothing rail" },
    ],
    specifications: [
      { label: "Fabric", value: "Buyer-specified — fleece, French terry and more" },
      SIZE_RANGE,
      COLOUR,
      SAMPLING,
      MOQ_NOTE,
    ],
    customization: [...DECORATION, ...BRANDING],
    featured: true,
  },
  {
    id: "p-002",
    slug: "custom-polo-shirts",
    name: "Custom Polo Shirts",
    category: "t-shirts-polos",
    shortDescription: "Classic polos for uniforms, retail and corporate programmes.",
    description:
      "Polo shirts produced in your chosen knit, weight and colours, with logo embroidery or print in the position you specify. Suitable for retail collections, corporate wear and team uniforms.",
    image: "/images/products/polo-shirts.webp",
    imageAlt: "Folded navy, white, grey and black polo shirts",
    gallery: [],
    specifications: [
      { label: "Fabric", value: "Buyer-specified — pique and other knits" },
      SIZE_RANGE,
      COLOUR,
      { label: "Logo position", value: "Front / back, sleeve / chest, pocket" },
      SAMPLING,
      MOQ_NOTE,
    ],
    customization: [...DECORATION, ...BRANDING],
    featured: true,
  },
  {
    id: "p-003",
    slug: "custom-t-shirts",
    name: "Custom T-Shirts",
    category: "t-shirts-polos",
    shortDescription: "Everyday tees in your fabric, GSM and colourways — blank or branded.",
    description:
      "Crew-neck T-shirts manufactured to approved specifications for measurements, construction, print and shade. Choose from knitted fabrics such as single jersey and interlock, then finish with printing, embroidery, labels and private packaging.",
    image: "/images/quality/final-inspection.webp",
    imageAlt: "Stack of folded white, grey, blue and black T-shirts",
    gallery: [{ src: "/images/pages/oem-hero.webp", alt: "T-shirts in navy, grey and white on wooden hangers" }],
    specifications: [
      { label: "Fabric", value: "Buyer-specified — single jersey, interlock and more" },
      SIZE_RANGE,
      COLOUR,
      SAMPLING,
      MOQ_NOTE,
    ],
    customization: [...DECORATION, ...BRANDING],
    featured: true,
  },
  {
    id: "p-004",
    slug: "streetwear-collection",
    name: "Streetwear Hoodies & Joggers",
    category: "street-wear",
    shortDescription: "Bold streetwear pieces built around your designs and artwork.",
    description:
      "Streetwear hoodies, joggers and coordinated pieces developed from your tech pack or artwork. We apply printing and embroidery to approved artwork and colour references, and finish with your labels and packaging.",
    image: "/images/products/street-wear.webp",
    imageAlt: "Beige hoodie with black cap and black joggers",
    gallery: [],
    specifications: [
      { label: "Fabric", value: "Buyer-specified — fleece, French terry, jersey" },
      SIZE_RANGE,
      COLOUR,
      { label: "Decoration", value: "Thick print, embroidery, heat transfer, puff print, silk screen and more" },
      MOQ_NOTE,
    ],
    customization: [...DECORATION, "Rhinestones", "Reflective print", ...BRANDING],
    featured: true,
  },
  {
    id: "p-005",
    slug: "custom-denim-jeans",
    name: "Custom Denim Jeans",
    category: "denim-wear",
    shortDescription: "Durable denim made to your wash, fit and branding details.",
    description:
      "Denim jeans manufactured to your fit, fabric and finishing requirements, with custom leather or woven patches, labels and packaging for your brand.",
    image: "/images/products/denim-wear.webp",
    imageAlt: "Stack of folded blue denim jeans with a leather patch",
    gallery: [],
    specifications: [
      { label: "Fabric", value: "Buyer-specified denim" },
      SIZE_RANGE,
      { label: "Branding", value: "Patches, woven labels, hang tags" },
      SAMPLING,
      MOQ_NOTE,
    ],
    customization: ["Custom patches", ...BRANDING],
    featured: false,
  },
  {
    id: "p-006",
    slug: "formal-blazers-shirts",
    name: "Formal Blazers & Shirts",
    category: "formal-wear",
    shortDescription: "Tailored formal wear for professional and corporate collections.",
    description:
      "Formal blazers and shirts produced to your measurements, fabric and finishing standards — suitable for corporate programmes and professional collections.",
    image: "/images/products/formal-wear.webp",
    imageAlt: "Navy blazer over a white shirt with pocket square",
    gallery: [],
    specifications: [
      { label: "Fabric", value: "Buyer-specified" },
      { label: "Sizing", value: "Custom sizing to your size chart" },
      SAMPLING,
      MOQ_NOTE,
    ],
    customization: ["Custom labels", "Custom trims", "Private packaging"],
    featured: false,
  },
  {
    id: "p-007",
    slug: "sportswear-sets",
    name: "Sportswear T-Shirts & Shorts",
    category: "sportswear",
    shortDescription: "Performance tees and shorts designed for training and teams.",
    description:
      "Sportswear tops and shorts developed for movement and performance, made to your fabric, colours and size range with team or brand decoration applied to approved artwork.",
    image: "/images/products/sportswear.webp",
    imageAlt: "Navy sports T-shirt with navy and grey shorts",
    gallery: [],
    specifications: [
      { label: "Fabric", value: "Buyer-specified performance fabric" },
      SIZE_RANGE,
      COLOUR,
      MOQ_NOTE,
    ],
    customization: [...DECORATION, "Reflective print", ...BRANDING],
    featured: false,
  },
  {
    id: "p-008",
    slug: "kids-wear-sets",
    name: "Kids Wear Sets",
    category: "kids-wear",
    shortDescription: "Soft, bright children's sets made to your designs and sizing.",
    description:
      "Children's sweatshirts, tops and bottoms in soft fabrics, made to your designs, prints, size chart and packaging requirements.",
    image: "/images/products/kids-wear.webp",
    imageAlt: "Beige kids sweatshirt set and blue floral kids outfit",
    gallery: [],
    specifications: [
      { label: "Fabric", value: "Buyer-specified soft knits" },
      { label: "Sizing", value: "Kids sizing to your size chart" },
      COLOUR,
      MOQ_NOTE,
    ],
    customization: [...DECORATION, ...BRANDING],
    featured: false,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const same = products.filter((p) => p.slug !== product.slug && p.category === product.category);
  const others = products.filter((p) => p.slug !== product.slug && p.category !== product.category);
  return [...same, ...others].slice(0, limit);
}

export const featuredProducts = products.filter((p) => p.featured);
