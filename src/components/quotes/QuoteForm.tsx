"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { Info, Mail } from "lucide-react";
import { products } from "@/data/products";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import {
  buildInquiryMessage,
  buildInquirySubject,
  isValidEmail,
  mailtoUrl,
  whatsappUrl,
  type InquiryDetails,
} from "@/lib/inquiry";

type FieldName = "fullName" | "companyName" | "email" | "phone" | "product" | "quantity" | "requirements";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;
type Channel = "whatsapp" | "email";

const GENERAL = "general";

interface QuoteFormProps {
  /** Product slug to preselect (from a product page) */
  defaultProduct?: string;
  heading?: string;
  description?: string;
  className?: string;
}

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.fullName.trim()) e.fullName = "Please enter your full name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!isValidEmail(v.email)) e.email = "Please enter a valid email address, e.g. name@company.com.";
  if (v.phone.trim() && !/^[+\d][\d\s()-]{5,}$/.test(v.phone.trim()))
    e.phone = "Please enter a valid phone number including country code.";
  if (!v.quantity.trim()) e.quantity = "Please enter the quantity you need (an estimate is fine).";
  if (v.product === GENERAL && !v.requirements.trim())
    e.requirements = "Please describe the product(s) you need.";
  return e;
}

export function QuoteForm({ defaultProduct, heading = "Request a Quotation", description, className = "" }: QuoteFormProps) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Values>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    product: defaultProduct && products.some((p) => p.slug === defaultProduct) ? defaultProduct : GENERAL,
    quantity: "",
    requirements: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ channel: Channel; url: string } | null>(null);

  const id = (name: FieldName) => `${uid}-${name}`;
  const set = (name: FieldName) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const toDetails = (): InquiryDetails => {
    const product = products.find((p) => p.slug === values.product);
    return {
      fullName: values.fullName,
      companyName: values.companyName,
      email: values.email,
      phone: values.phone,
      quantity: values.quantity,
      requirements: values.requirements,
      productName: product?.name,
      productSlug: product?.slug,
    };
  };

  const send = (channel: Channel) => (e?: FormEvent) => {
    e?.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as FieldName[])[0];
    if (firstInvalid) {
      setStatus(null);
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(id(firstInvalid))}`)?.focus();
      return;
    }
    const details = toDetails();
    const message = buildInquiryMessage(details);
    if (channel === "whatsapp") {
      const url = whatsappUrl(message);
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus({ channel, url });
    } else {
      const url = mailtoUrl(buildInquirySubject(details), message);
      window.location.href = url;
      setStatus({ channel, url });
    }
  };

  const field =
    "mt-1.5 block w-full rounded-md border bg-white px-3.5 text-[0.95rem] text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 transition-colors";
  const ok = "border-line focus:border-brand-500 focus:ring-brand-500/20";
  const bad = "border-red-500 focus:border-red-600 focus:ring-red-500/20";
  const cls = (name: FieldName, extra = "h-11") => `${field} ${errors[name] ? bad : ok} ${extra}`;
  const describedBy = (name: FieldName) => (errors[name] ? `${id(name)}-error` : undefined);
  const ErrorText = ({ name }: { name: FieldName }) =>
    errors[name] ? (
      <p id={`${id(name)}-error`} className="mt-1.5 text-sm font-medium text-red-600">
        {errors[name]}
      </p>
    ) : null;
  const Label = ({ name, children, optional }: { name: FieldName; children: string; optional?: boolean }) => (
    <label htmlFor={id(name)} className="text-sm font-semibold text-navy-900">
      {children}
      {optional ? <span className="ml-1 font-normal text-muted">(optional)</span> : <span className="ml-0.5 text-red-600" aria-hidden>*</span>}
    </label>
  );

  return (
    <div className={`rounded-2xl border border-line bg-white p-5 shadow-card sm:p-8 ${className}`}>
      <h2 className="text-2xl font-bold sm:text-[1.75rem]">{heading}</h2>
      {description && <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{description}</p>}

      <form ref={formRef} noValidate onSubmit={send("whatsapp")} className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <Label name="fullName">Full name</Label>
          <input id={id("fullName")} name="fullName" autoComplete="name" value={values.fullName} onChange={set("fullName")} aria-invalid={!!errors.fullName} aria-describedby={describedBy("fullName")} aria-required className={cls("fullName")} />
          <ErrorText name="fullName" />
        </div>
        <div>
          <Label name="companyName" optional>Company name</Label>
          <input id={id("companyName")} name="companyName" autoComplete="organization" value={values.companyName} onChange={set("companyName")} className={cls("companyName")} />
        </div>
        <div>
          <Label name="email">Email address</Label>
          <input id={id("email")} name="email" type="email" inputMode="email" autoComplete="email" value={values.email} onChange={set("email")} aria-invalid={!!errors.email} aria-describedby={describedBy("email")} aria-required className={cls("email")} />
          <ErrorText name="email" />
        </div>
        <div>
          <Label name="phone" optional>Phone / WhatsApp</Label>
          <input id={id("phone")} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+1 555 000 0000" value={values.phone} onChange={set("phone")} aria-invalid={!!errors.phone} aria-describedby={describedBy("phone")} className={cls("phone")} />
          <ErrorText name="phone" />
        </div>
        <div>
          <Label name="product">Product</Label>
          <select id={id("product")} name="product" value={values.product} onChange={set("product")} className={cls("product")}>
            <option value={GENERAL}>General / multiple products</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label name="quantity">Required quantity</Label>
          <input id={id("quantity")} name="quantity" placeholder="e.g. 500 pcs per colour" value={values.quantity} onChange={set("quantity")} aria-invalid={!!errors.quantity} aria-describedby={describedBy("quantity")} aria-required className={cls("quantity")} />
          <ErrorText name="quantity" />
        </div>
        <div className="sm:col-span-2">
          <Label name="requirements" optional={values.product !== GENERAL}>Additional requirements</Label>
          <textarea
            id={id("requirements")}
            name="requirements"
            rows={4}
            placeholder="Fabric, GSM, colours, sizes, printing / embroidery, labels, packaging, target delivery date…"
            value={values.requirements}
            onChange={set("requirements")}
            aria-invalid={!!errors.requirements}
            aria-describedby={describedBy("requirements")}
            className={cls("requirements", "py-3 leading-relaxed")}
          />
          <ErrorText name="requirements" />
        </div>

        <div className="sm:col-span-2">
          <p className="flex gap-2.5 rounded-lg bg-brand-50 p-3.5 text-sm leading-relaxed text-navy-800">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
            <span>
              Choose how to send your inquiry. We’ll open WhatsApp or your email app with your details prefilled —
              <strong> review the message and press send there</strong>. Nothing is submitted from this website.
            </span>
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#1f8f4e] px-5 font-semibold text-white shadow-sm transition-colors hover:bg-[#187a41]">
              <WhatsAppIcon className="h-5 w-5" /> Send via WhatsApp
            </button>
            <button type="button" onClick={send("email")} className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-navy-900 px-5 font-semibold text-white shadow-sm transition-colors hover:bg-navy-800">
              <Mail className="h-5 w-5" aria-hidden /> Send via Email
            </button>
          </div>
          <div aria-live="polite" className="text-sm">
            {status && (
              <p className="mt-4 rounded-lg border border-line p-3.5 text-navy-800">
                {status.channel === "whatsapp"
                  ? "WhatsApp should now be open with your prefilled message. Send it there to complete your inquiry. "
                  : "Your email app should now be open with a prefilled message. Send it from there to complete your inquiry. "}
                Nothing happened?{" "}
                <a
                  href={status.url}
                  className="font-semibold text-brand-700 underline underline-offset-2"
                  {...(status.channel === "whatsapp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  Open it manually
                </a>
                .
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
