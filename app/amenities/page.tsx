import {
  Clock,
  Wifi,
  Sparkles,
  Briefcase,
  Map as MapIcon,
  Snowflake,
  CookingPot,
  Sofa,
  Shirt,
  Lock,
} from "lucide-react";
import PageIntro from "@/components/PageIntro";
import { amenities } from "@/lib/data";
import { routeMeta } from "@/lib/seo";

export const metadata = routeMeta(
  "/amenities",
  "Amenities",
  "Free Wi-Fi, 24/7 front desk, daily housekeeping, shared kitchen, laundry and more at Marni BKK Hostel in Phra Nakhon, Bangkok."
);

const icons: Record<string, React.ElementType> = {
  clock: Clock,
  wifi: Wifi,
  sparkles: Sparkles,
  briefcase: Briefcase,
  map: MapIcon,
  snowflake: Snowflake,
  "cooking-pot": CookingPot,
  sofa: Sofa,
  shirt: Shirt,
  lock: Lock,
};

export default function AmenitiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Facilities"
        title="Step into a world of comfort and charm"
        description="Everything you need for an easy, comfortable stay in the middle of old Bangkok."
      />

      <section className="py-20 md:py-28">
        <div className="container-hostel grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item) => {
            const Icon = icons[item.icon] ?? Sparkles;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-ink/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-teal/50 hover:bg-teal-tint hover:shadow-lift"
              >
                <Icon className="h-6 w-6 text-teal" strokeWidth={1.75} />
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-ink/65">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
