/**
 * Page copy taken from the supplied MUHSEEQ section references.
 * Edit text here without touching page layouts.
 */

export const coreValues = [
  { title: "Quality", text: "We focus on fabric quality, accurate measurements, workmanship, finishing and product presentation.", image: "/images/values/value-1.webp", alt: "Navy fabric folds" },
  { title: "Reliability", text: "We aim to meet agreed product requirements, production schedules and buyer expectations.", image: "/images/values/value-2.webp", alt: "Tailor's measuring tape" },
  { title: "Transparency", text: "We communicate honestly regarding specifications, pricing, timelines and production status.", image: "/images/values/value-3.webp", alt: "Hand sketching a garment specification" },
  { title: "Customization", text: "We support buyer-specific designs, materials, labels, colours, sizing and packaging requirements.", image: "/images/values/value-4.webp", alt: "Fabric swatch card" },
  { title: "Partnership", text: "We focus on developing long-term relationships with brands and buyers instead of only individual orders.", image: "/images/values/value-5.webp", alt: "Business handshake" },
  { title: "Continuous Improvement", text: "We continue improving our manufacturing systems, team capabilities and quality standards as the company grows.", image: "/images/values/value-6.webp", alt: "Folded cream and blue fabrics" },
];

export const capabilities = [
  { title: "Product Development & Sampling", text: "Pattern development, sample development and buyer approval before bulk production begins.", icon: "shirt" },
  { title: "Fabric & Materials", text: "Buyer-specified fabric, GSM and colours sourced through Faisalabad's textile supply chain.", icon: "layers" },
  { title: "Cutting & Stitching", text: "Cutting inspection, inline stitching inspection and measurement checks throughout production.", icon: "scissors" },
  { title: "Printing & Embroidery", text: "Printing and embroidery applied to approved artwork and colour references.", icon: "palette" },
  { title: "Labels & Packaging", text: "Custom labels, care labels, hangtags, barcode labelling and private packaging.", icon: "package" },
  { title: "Inspection & Export", text: "Final inspection, packing, quantity verification and shipment coordination.", icon: "truck" },
] as const;

export const productionStages = [
  { title: "Knitting", subtitle: "Building the fabric foundation", text: "Our knitting stage focuses on developing fabric structures according to the required composition, weight and performance. We work with a range of knitted fabrics including single jersey, interlock, pique, fleece and rib, ensuring the fabric meets the specifications for your product's fit, feel and durability before moving to the next stage.", image: "/images/manufacturing/01-knitting.webp", alt: "Circular knitting machine with yarn cones" },
  { title: "Fabric Selection", subtitle: "Choosing the right base", text: "We carefully select fabrics based on your product requirements, including composition, weight, texture and performance. Each fabric is evaluated for quality, consistency and suitability for the intended design and use, ensuring the right foundation for a durable and comfortable finished garment.", image: "/images/manufacturing/02-fabric-selection.webp", alt: "Fabric rolls and swatches on a table" },
  { title: "Cutting", subtitle: "Precision from the first cut", text: "Once the fabric is ready, each layer is carefully spread, aligned and marked against the approved patterns. Our cutting process follows the agreed size specifications and marker layouts, helping keep garment panels consistent and ready for stitching.", image: "/images/manufacturing/03-cutting.webp", alt: "Fabric cutting machine on a long cutting table" },
  { title: "Printing", subtitle: "Bringing designs to life", text: "Approved artwork is translated onto garments using the printing method selected for the design. Before bulk production, colour, placement and print quality are checked against the agreed sample to help keep every piece consistent with your brand requirements.", image: "/images/manufacturing/04-printing.webp", alt: "Screen printing on garments" },
  { title: "Stitching", subtitle: "Bringing the garment together", text: "Cut panels move to the stitching stage where skilled operators assemble the garment using industrial machines. Each piece is stitched according to the approved construction, stitch density and quality standards. Inline checks are carried out throughout the process to ensure accurate stitching, clean finishes and consistent sizing.", image: "/images/manufacturing/05-stitching.webp", alt: "Rows of industrial sewing machines" },
  { title: "Pressing", subtitle: "Finished & clean look", text: "After stitching, garments are trimmed, pressed and steamed to achieve their final shape and finish. Each piece is checked for loose threads, open seams and overall appearance to ensure it meets the required quality standards before final inspection.", image: "/images/manufacturing/06-pressing.webp", alt: "Garment pressing stations" },
  { title: "Quality Check", subtitle: "Checked before it's shipped", text: "A dedicated quality team checks finished garments against your approved specification — measurements, construction, print and embroidery, shade and overall finish. Pieces are assessed to an AQL sampling standard, and anything outside tolerance is pulled for correction.", image: "/images/manufacturing/07-quality-check.webp", alt: "Garments laid out for quality inspection" },
  { title: "Labeling and Packaging", subtitle: "Ready for the market", text: "Approved garments are labeled with care instructions, size information and your brand tags. Each piece is then folded and packed as per your requirements, using custom or standard packaging to ensure protection during storage and shipping.", image: "/images/manufacturing/08-labeling-packaging.webp", alt: "Folded garments in poly bags with tags" },
  { title: "Inspection & Export", subtitle: "Ready for worldwide delivery", text: "Approved orders are counted, packed and prepared for dispatch according to buyer specifications. Final carton checks and shipment documentation help ensure each order is ready for delivery to its destination.", image: "/images/manufacturing/09-inspection-export.webp", alt: "Packed cartons ready for export" },
];

export const oemServices = [
  "Product development", "Fabric sourcing", "Pattern development", "Sample development",
  "Custom sizing", "Custom colours", "Printing", "Embroidery",
  "Custom labels", "Care labels", "Size labels", "Hangtags",
  "Custom trims", "Private packaging", "Barcode labelling", "Bulk production",
  "Quality inspection", "Export packing", "Shipment coordination",
];

export const oemProcess = [
  { title: "Inquiry", text: "Your requirements are received, including design, fabric, quantity and delivery timeline." },
  { title: "Review", text: "Our team studies the details and confirms feasibility, fabric options and possible solutions." },
  { title: "Confirm Specs", text: "Fabric, GSM, colours, sizing and customization are finalized." },
  { title: "Costing", text: "Quotation is prepared with all details including prices and timelines." },
  { title: "Sample", text: "A sample is developed for your approval before bulk production." },
  { title: "Approval", text: "Once you approve the sample, we move forward with bulk production." },
  { title: "Bulk Production", text: "Production begins with strict quality control at every stage." },
  { title: "In-Process QC", text: "Quality checks are conducted during production to ensure consistency and accuracy." },
  { title: "Final Inspection", text: "Finished goods are thoroughly inspected before packing." },
  { title: "Pack & Ship", text: "Products are packed with care and shipped to your destination on time." },
];

export const qualityPhases = [
  {
    eyebrow: "Before production",
    title: "Agreeing the",
    accent: "Standard",
    text: "Quality is decided before the first stitch. We confirm your written specification, inspect incoming fabric and trims, and verify colour and GSM against your approved standards — then lock everything in a pre-production meeting so the line starts from an agreed reference, not an assumption.",
    checks: ["Buyer specification review", "Fabric and trim inspection", "Colour and GSM verification", "Sample approval", "Pre-production meeting"],
    image: "/images/quality/before-production.webp",
    alt: "Fabric swatches and yarn cones with a MUHSEEQ hang tag",
  },
  {
    eyebrow: "During production",
    title: "Checks at the",
    accent: "Machine",
    text: "As the order runs, checks happen at the machine. Cutting is verified against the marker, stitching and measurements are monitored inline, and printing, embroidery and finishing are inspected as they are applied — so issues are corrected in-process, not discovered at the end.",
    checks: ["Cutting inspection", "Printing and embroidery inspection", "Inline stitching inspection", "Measurement checks", "Finishing inspection"],
    image: "/images/quality/during-production.webp",
    alt: "Operator stitching garments at an industrial sewing machine",
  },
  {
    eyebrow: "Before it ships",
    title: "The",
    accent: "Final Word",
    text: "Nothing leaves without a final look. Finished garments are inspected for overall appearance, workmanship and shade, and every carton's quantity and assortment is verified against your order before the shipment is sealed.",
    checks: ["Final appearance inspection", "Packing and quantity verification"],
    image: "/images/quality/final-inspection.webp",
    alt: "Hands stacking folded T-shirts",
  },
];

export const sustainabilityPractices = [
  { title: "Fabric Waste Reduction", image: "/images/sustainability/fabric-waste.webp", icon: "recycle" },
  { title: "Responsible Material Utilization", image: "/images/sustainability/cotton.webp", icon: "leaf" },
  { title: "Energy Saving Practices", image: "/images/sustainability/energy.webp", icon: "zap" },
  { title: "Safe and Organized Working Conditions", image: "/images/sustainability/working-conditions.webp", icon: "users" },
  { title: "Worker Training and Skill Development", image: "/images/sustainability/training.webp", icon: "graduation" },
  { title: "Recycled or Certified Materials on Request", image: "/images/sustainability/recycled.webp", icon: "sprout" },
] as const;

export const whyUsPillars = [
  { title: "In-House Manufacturing", text: "Complete control over production and quality." },
  { title: "OEM & Private Label", text: "Customized solutions for your brand." },
  { title: "Buyer-Specific Fabric & Sizing", text: "Designed to match your market needs." },
  { title: "Long-Term Partnership", text: "Reliable service and growth together." },
];

export const tenReasons = [
  "Apparel manufacturing based in Faisalabad, Pakistan",
  "Private-label and OEM services",
  "Access to a strong textile and apparel supply chain",
  "Printing, embroidery, labels and custom packaging",
  "Professional and responsive communication",
  "Customized garment manufacturing",
  "Flexible product-development support",
  "Buyer-specific fabric, GSM, sizing and colour options",
  "Quality monitoring throughout production",
  "Long-term partnership approach",
];

export const faqs = [
  { q: "What is your minimum order quantity (MOQ)?", a: "MOQ depends on the product, fabric and customization involved. Please contact us with your product and quantity requirements to receive a suitable MOQ and quotation." },
  { q: "Can you manufacture custom or private-label apparel?", a: "Yes. We offer full private-label and OEM manufacturing — from product development, fabric sourcing and sampling to printing, labelling, packaging and export coordination." },
  { q: "What products do you manufacture?", a: "Our range covers formal wear, street wear, T-shirts and polos, denim wear, hoodies and sweatshirts, sportswear and kids wear." },
  { q: "What fabrics and GSM ranges do you work with?", a: "We work with buyer-specified fabric, GSM and colours sourced through Faisalabad's textile supply chain, including knitted fabrics such as single jersey, interlock, pique, fleece, rib and French terry. Share your target fabric and GSM with your inquiry." },
  { q: "Do you provide samples before bulk production?", a: "Yes. A sample is developed for your approval before bulk production begins." },
  { q: "What sizes do you offer?", a: "Our standard size range is XS – 5XL, and custom sizing is available to match your size chart." },
  { q: "How do I get a quotation or start an order?", a: "Send your product details, fabric requirements and quantities through the quotation form, WhatsApp or email. Our team will review them and come back with a suitable MOQ and quotation." },
  { q: "Do you export internationally?", a: "Yes. We handle export packing and shipment coordination for buyers worldwide." },
];
