import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import Nearby from "@/components/Nearby";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import BookButton from "@/components/BookButton";
import { rooms, features, site } from "@/lib/data";
import { routeMeta } from "@/lib/seo";

export const metadata = routeMeta(
  "/",
  site.name,
  site.description,
  { absolute: true }
);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Rooms preview */}
      <section className="py-20 md:py-28">
        <div className="container-hostel">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Accommodations</p>
              <h2 className="mt-4 max-w-xl text-3xl leading-tight md:text-5xl">
                The perfect blend of comfort and budget, under one roof
              </h2>
            </div>
            <Link href="/rooms" className="text-sm font-bold text-brick underline decoration-2 underline-offset-4 hover:text-[#ff255c]">
              View all rooms
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, i) => (
              <RoomCard key={room.slug} room={room} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <Nearby />

      <Gallery />

      {/* Stay with us */}
      <section className="py-20 md:py-28">
        <div className="container-hostel grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="/images/stay-with-us.jpg"
              alt="Marni BKK Hostel entrance sign"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Our hostel</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
              Stay with us, feel at home
            </h2>
            <p className="mt-4 text-ink/75">
              Welcome to Marni BKK Hostel — your home away from home in the heart of Bangkok.
              We offer a cozy, clean, and friendly atmosphere for travelers from around the
              world. Whether you&apos;re a solo backpacker or a group of friends, our hostel
              provides the perfect base to explore the vibrant city of Bangkok.
            </p>
            <p className="mt-4 text-ink/75">
              24/7 front desk support, free Wi-Fi throughout the hostel, daily housekeeping,
              luggage storage, and tour assistance to help you explore Bangkok like a local.
              Air-conditioned dorms and private rooms, shared kitchen, common lounge area,
              laundry service, and secure lockers for your belongings.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-sm font-semibold">
              <li className="rounded-full bg-marigold px-3 py-1 text-ink">Excellent Services</li>
              <li className="rounded-full bg-teal-tint px-3 py-1 text-teal-dark">Transparent Pricing</li>
              <li className="rounded-full bg-ink px-3 py-1 text-white">Full Facilities</li>
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full border-2 border-ink px-6 py-3 text-sm font-bold hover:bg-ink hover:text-paper"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-teal-tint py-20 md:py-28">
        <div className="container-hostel">
          <p className="eyebrow">Features</p>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight md:text-5xl">
            Experience unparalleled hospitality
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[16/10]">
                  <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      {/* Booking CTA */}
      <section className="py-20 md:py-28">
        <div className="container-hostel relative flex flex-col items-start gap-6 overflow-hidden rounded-[2rem] bg-ink px-8 py-14 text-paper md:flex-row md:items-center md:justify-between md:px-14">
          <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-teal/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-brick/40 blur-3xl" />
          <div className="relative">
            <h2 className="max-w-md text-3xl leading-tight md:text-5xl">Book your stay</h2>
            <p className="mt-3 max-w-md text-paper/70">
              Book your stay with us and enjoy a comfortable, budget-friendly experience in
              the heart of Bangkok.
            </p>
          </div>
          <BookButton label="Check availability" className="relative" />
        </div>
      </section>
    </>
  );
}
