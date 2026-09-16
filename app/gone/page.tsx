import Link from "next/link";
import { Home, Mail } from "lucide-react";

export const metadata = {
  title: { absolute: "This URL no longer exists" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function GonePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-marigold/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-teal/25 blur-3xl" />

      <div className="container-hostel relative flex min-h-[70vh] flex-col items-start justify-center py-20 md:py-28">
        <p className="eyebrow">410 · Gone</p>
        <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] md:text-6xl">This URL no longer exists</h1>
        <p className="mt-5 max-w-lg text-lg text-ink/70">
          This link is from an old page and is no longer live. Head back to the homepage, or
          contact us if you need help finding a room.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-teal-dark"
          >
            <Home className="h-4 w-4" strokeWidth={2.5} />
            Back to homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink transition-all hover:bg-ink hover:text-white"
          >
            <Mail className="h-4 w-4" strokeWidth={2.5} />
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
