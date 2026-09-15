import Link from "next/link";
import BookButton from "@/components/BookButton";

export const metadata = {
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function NotFound() {
  return (
    <section className="container-hostel flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl leading-tight md:text-6xl">This page wandered off</h1>
      <p className="mt-4 max-w-md text-ink/70">
        The page you&apos;re looking for doesn&apos;t exist. Head back home, or go ahead and
        book your stay.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border-2 border-ink px-6 py-3 text-sm font-bold hover:bg-ink hover:text-paper"
        >
          Back to home
        </Link>
        <BookButton label="Book now" />
      </div>
    </section>
  );
}
