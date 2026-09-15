import PageIntro from "@/components/PageIntro";
import FaqAccordion from "@/components/FaqAccordion";
import BookButton from "@/components/BookButton";
import { faqs } from "@/lib/data";
import { routeMeta, safeJsonLd } from "@/lib/seo";

export const metadata = routeMeta(
  "/faq",
  "FAQ",
  "Answers to common questions about staying at Marni BKK Hostel — check-in times, booking, Wi-Fi, private rooms, and more."
);

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <PageIntro
        eyebrow="Good to know"
        title="Frequently asked questions"
        description="Can't find what you're looking for? Send us a message and we'll help directly."
      />

      <section className="py-20 md:py-28">
        <div className="container-hostel max-w-3xl">
          <FaqAccordion />

          <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl bg-ink px-8 py-10 text-paper sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold">Ready to book your stay?</h2>
              <p className="mt-1 text-sm text-paper/70">
                Check live rates and availability in a couple of taps.
              </p>
            </div>
            <BookButton label="Book now" />
          </div>
        </div>
      </section>
    </>
  );
}
