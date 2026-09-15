import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/data";

// Small inline social glyphs — kept local rather than pulled from lucide-react,
// since brand/logo icons are deprecated there and best avoided as a dependency.
function FacebookGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <path d="M14 9h2V6h-2c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9c0-.28.22-.5.5-.5H14Z" strokeLinejoin="round" />
    </svg>
  );
}

function XGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
    </svg>
  );
}

function YoutubeGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M10.5 9.5l5 2.5-5 2.5v-5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const columns = [
  {
    title: "Stay",
    links: [
      { label: "Rooms", href: "/rooms" },
      { label: "Book", href: "/book" },
      { label: "Amenities", href: "/amenities" },
      { label: "Features", href: "/features" },
    ],
  },
  {
    title: "Hostel",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-paper">
      <div className="container-hostel grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="font-body text-lg font-semibold">
            Marni <span className="text-marigold">BKK</span> Hostel
          </div>
          <p className="mt-3 max-w-xs text-sm text-paper/70">
            {site.tagline} Enjoy modern amenities, spacious accommodations, and
            personalized service in the heart of old Bangkok.
          </p>
          <div className="mt-5 flex gap-4">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookGlyph className="h-5 w-5 text-paper/70 transition-colors hover:text-marigold" />
            </a>
            <a href={site.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
              <XGlyph className="h-5 w-5 text-paper/70 transition-colors hover:text-marigold" />
            </a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YoutubeGlyph className="h-5 w-5 text-paper/70 transition-colors hover:text-marigold" />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <div className="text-sm font-semibold uppercase tracking-wide text-paper/50">
              {col.title}
            </div>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} prefetch className="text-sm text-paper/80 hover:text-marigold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-paper/50">
            Contact
          </div>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-marigold" />
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-marigold" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-marigold" />
              <span>{site.address.line}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 py-5">
        <div className="container-hostel flex flex-col gap-2 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>
            Powered by{" "}
            <a
              href="https://wahdigitalsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-marigold transition-colors hover:text-paper"
            >
              Wah Digital Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
