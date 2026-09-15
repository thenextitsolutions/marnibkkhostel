import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import Reviews from "@/components/Reviews";
import { site, ratings } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Marni BKK Hostel is a 2-star hostel in Phra Nakhon, Bangkok, opened in 2023 with 60 rooms, steps from Khaosan Road and the Grand Palace.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our story"
        title="About Marni BKK Hostel"
        description="Beautifully designed rooms and simple, honest hospitality in the heart of old Bangkok."
      />

      <section className="py-20 md:py-28">
        <div className="container-hostel grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-ink/75">
              Welcome to <strong>Marni BKK Hostel</strong>, a charming {site.stars}-star hostel
              nestled in the vibrant heart of Bangkok, Thailand. Opened in {site.founded}, this
              contemporary hostel offers a fresh and inviting atmosphere for travelers seeking
              comfort and convenience, with a total of {site.roomCount} well-appointed rooms.
            </p>
            <p className="mt-4 text-ink/75">
              Guests can enjoy a seamless check-in experience starting from{" "}
              <strong>{site.checkIn}</strong>, allowing you to settle in and unwind after your
              journey. We also offer a flexible check-out time until{" "}
              <strong>{site.checkOut}</strong>, giving you the freedom to explore the city at
              your own pace before departing.
            </p>
            <blockquote className="mt-6 border-l-2 border-marigold pl-5 text-ink/80">
              At Marni BKK Hostel, we offer clean and cozy rooms in the heart of Bangkok. Our
              friendly staff works hard to make sure you feel safe and comfortable. Book online
              or call us for easy reservations and a comfortable stay in Bangkok.
            </blockquote>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="/images/gallery-17.jpg"
              alt="Marni BKK Hostel exterior on Wisutkasat Road"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="container-hostel mt-16 grid gap-6 border-y border-ink/10 py-10 sm:grid-cols-3">
          {ratings.map((r) => (
            <div key={r.platform} className="text-center">
              <div className="font-display text-3xl">{r.value}</div>
              <div className="mt-1 text-sm text-ink/60">Rating on {r.platform}</div>
            </div>
          ))}
        </div>
      </section>

      <Reviews />
    </>
  );
}
