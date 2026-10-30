import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-waves py-24 sm:py-32">
      <div className="container-site max-w-2xl text-center">
        <p className="font-serif text-7xl font-bold text-brand-600">404</p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">We couldn’t find that page</h1>
        <p className="mt-4 text-lg text-muted">
          The product or page you’re looking for may have moved. Browse our collection or get in touch and we’ll help.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/products" size="lg">
            Browse products <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline" size="lg">
            Contact us
          </ButtonLink>
        </div>
        <p className="mt-8 text-sm">
          <Link href="/" className="font-semibold text-brand-700 underline underline-offset-2">Back to home</Link>
        </p>
      </div>
    </section>
  );
}
