import PageIntro from "@/components/PageIntro";
import RoomCard from "@/components/RoomCard";
import BookButton from "@/components/BookButton";
import { rooms } from "@/lib/data";
import { routeMeta } from "@/lib/seo";

export const metadata = routeMeta(
  "/rooms",
  "Rooms & Dorms",
  "Browse dorm beds and private rooms at Marni BKK Hostel in Phra Nakhon, Bangkok — from mixed and female dorms to air-conditioned twin and double rooms."
);

export default function RoomsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Accommodations"
        title="Rooms & dorms for every kind of traveler"
        description="From budget dorm beds to private air-conditioned rooms — all with free Wi-Fi and access to our shared spaces."
      />

      <section className="py-20 md:py-28">
        <div className="container-hostel">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, i) => (
              <RoomCard key={room.slug} room={room} priority={i === 0} />
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-ink px-8 py-12 text-center text-paper">
            <h2 className="text-2xl md:text-4xl">Not sure which room fits your trip?</h2>
            <p className="max-w-md text-paper/70">
              Check live rates and availability for every room type on our secure booking
              engine.
            </p>
            <BookButton label="Check availability" />
          </div>
        </div>
      </section>
    </>
  );
}
