import Image from "next/image";
import { Check } from "lucide-react";
import type { Room } from "@/lib/data";
import BookButton from "./BookButton";

export default function RoomCard({ room, priority = false }: { room: Room; priority?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold leading-snug">{room.name}</h3>
        <ul className="mt-3 space-y-1.5">
          {room.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2 text-sm text-ink/70">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.5} />
              {detail}
            </li>
          ))}
        </ul>
        <BookButton label="Book now" variant="outline" className="mt-5 w-full justify-center" />
      </div>
    </article>
  );
}
