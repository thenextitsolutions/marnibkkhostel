import { site } from "@/lib/data";

export default function MapEmbed({ className = "" }: { className?: string }) {
  const query = encodeURIComponent(site.mapsQuery);
  const { lat, lng } = site.address;

  return (
    <iframe
      title={`${site.name} on Google Maps`}
      src={`https://maps.google.com/maps?q=${query}&ll=${lat},${lng}&z=17&output=embed`}
      className={`h-full min-h-[320px] w-full border-0 ${className}`}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      allowFullScreen
    />
  );
}
