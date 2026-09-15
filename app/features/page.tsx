import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import { features } from "@/lib/data";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Comfort beds with privacy curtains and a welcoming common lounge — see what makes staying at Marni BKK Hostel different.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Features"
        title="Experience unparalleled hospitality"
        description="Small details that make a shared space feel like your own."
      />

      <section className="py-20 md:py-28">
        <div className="container-hostel space-y-16">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`grid gap-10 md:grid-cols-2 md:items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
                <Image src={feature.image} alt={feature.title} fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl leading-tight md:text-4xl">{feature.title}</h2>
                <p className="mt-4 max-w-md text-ink/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
