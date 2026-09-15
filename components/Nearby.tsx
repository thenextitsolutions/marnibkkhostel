import { Footprints, Landmark, TrainFront, Plane, Utensils, MapPin } from "lucide-react";
import { nearby, site } from "@/lib/data";
import { safeJsonLd } from "@/lib/seo";
import MapEmbed from "./MapEmbed";

const icons: Record<string, React.ElementType> = {
  footprints: Footprints,
  landmark: Landmark,
  "train-front": TrainFront,
  plane: Plane,
  utensils: Utensils,
};

const accents = [
  "bg-marigold text-ink",
  "bg-teal text-white",
  "bg-ink text-marigold",
  "bg-brick text-white",
  "bg-teal-tint text-teal-dark",
];

function mapsSearch(name: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, Bangkok`)}`;
}

export default function Nearby() {
  const places = nearby.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      group: group.title,
      kind: group.kind,
    }))
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": `${site.url}/#hostel`,
        name: site.name,
        url: site.url,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "354/6-7 Soi Worapong, Wisutkasat Road, Ban Phan Thom",
          addressLocality: "Bangkok",
          addressRegion: "Phra Nakhon",
          postalCode: "10200",
          addressCountry: "TH",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.address.lat,
          longitude: site.address.lng,
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.line)}`,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Phra Nakhon",
          containedInPlace: { "@type": "City", name: "Bangkok", addressCountry: "TH" },
        },
      },
      {
        "@type": "ItemList",
        name: "Places near Marni BKK Hostel in Phra Nakhon, Bangkok",
        description:
          "Walking distances from Marni BKK Hostel to Khaosan Road, the Grand Palace, transit, airports, and nearby restaurants.",
        numberOfItems: places.length,
        itemListElement: places.map((place, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": place.kind,
            name: place.name,
            description: `${place.distance} from Marni BKK Hostel, ${place.group.toLowerCase()} in Phra Nakhon, Bangkok.`,
          },
        })),
      },
    ],
  };

  return (
    <section
      id="location"
      aria-labelledby="nearby-heading"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-marigold/40 blur-3xl" />

      <div className="container-hostel relative">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow">Phra Nakhon · Bangkok</p>
            <h2 id="nearby-heading" className="mt-4 max-w-2xl text-3xl leading-tight md:text-5xl">
              Guests love walking the neighborhood
            </h2>
            <p className="mt-4 max-w-2xl text-base text-ink/70 md:text-lg">
              Marni BKK Hostel sits in Ban Phan Thom, Phra Nakhon — old Bangkok, a short stroll
              from{" "}
              <a
                href={mapsSearch("Khaosan Road")}
                className="font-semibold text-ink underline decoration-teal/50 underline-offset-2 hover:decoration-teal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Khaosan Road
              </a>{" "}
              and an easy trip to the{" "}
              <a
                href={mapsSearch("Grand Palace Bangkok")}
                className="font-semibold text-ink underline decoration-teal/50 underline-offset-2 hover:decoration-teal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grand Palace
              </a>
              , Sanam Luang, and the Chao Phraya river. Use the distances below to plan walks,
              BTS/MRT hops, and airport transfers.
            </p>
            <address className="mt-5 not-italic text-sm text-ink/60">
              <MapPin className="mr-1.5 inline h-4 w-4 text-teal" />
              {site.address.line}
            </address>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-3xl bg-marigold p-5">
              <p className="text-3xl font-display font-extrabold md:text-4xl">500 m</p>
              <p className="mt-1 text-sm font-semibold">to Khaosan Road</p>
            </div>
            <div className="rounded-3xl bg-ink p-5 text-white">
              <p className="text-3xl font-display font-extrabold md:text-4xl">2.4 km</p>
              <p className="mt-1 text-sm font-semibold text-white/80">to the Grand Palace</p>
            </div>
            <div className="rounded-3xl bg-teal p-5 text-white">
              <p className="text-3xl font-display font-extrabold md:text-4xl">17 km</p>
              <p className="mt-1 text-sm font-semibold text-white/80">to Don Mueang</p>
            </div>
            <div className="rounded-3xl bg-teal-tint p-5">
              <p className="text-3xl font-display font-extrabold md:text-4xl">33 km</p>
              <p className="mt-1 text-sm font-semibold">to Suvarnabhumi</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {nearby.map((group, i) => {
            const Icon = icons[group.icon] ?? Footprints;
            return (
              <article
                key={group.title}
                className={`rounded-3xl border border-ink/10 bg-white p-6 shadow-sm ${
                  i === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl ${accents[i % accents.length]}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="text-lg font-bold">{group.title}</h3>
                </div>
                <ul className="mt-5 space-y-1">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={mapsSearch(item.name.replace(" · ", " "))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-baseline justify-between gap-3 rounded-xl px-2 py-2 text-sm transition-colors hover:bg-paperDim"
                      >
                        <span className="text-ink/80">{item.name}</span>
                        <span className="shrink-0 rounded-full bg-teal-tint px-2.5 py-0.5 text-xs font-bold text-teal-dark">
                          {item.distance}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-ink/10">
          <MapEmbed className="min-h-[360px] md:min-h-[420px]" />
        </div>
      </div>
    </section>
  );
}
