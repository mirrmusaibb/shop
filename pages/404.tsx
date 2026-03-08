import Link from "next/link";
import { SeoHead } from "@/components/seo/SeoHead";

export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Page Not Found | Mir Tailors"
        description="The page you are looking for does not exist. Visit Mir Tailors home page."
        path="/404/"
        includeSchema={false}
      />
      <section className="section-shell py-20 text-center">
        <h1 className="font-display text-5xl text-stone-100">404</h1>
        <p className="mt-4 text-stone-300">The page you are looking for could not be found.</p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-gold-400/70 bg-gold-400/20 px-6 py-3 text-sm font-semibold text-gold-300 transition hover:bg-gold-400/35"
        >
          Back to Home
        </Link>
      </section>
    </>
  );
}
