import type { Metadata, Viewport } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrefetchRoutes from "@/components/PrefetchRoutes";
import { site } from "@/lib/data";
import { indexFollow, safeJsonLd } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = false;

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: `${site.name} - Budget Stay near Khaosan Road, Phra Nakhon, Bangkok`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: "Wah Digital Solutions", url: "https://wahdigitalsolutions.com/" }],
  creator: "Wah Digital Solutions",
  publisher: site.name,
  category: "travel",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: `${site.name} - Budget Stay near Khaosan Road, Phra Nakhon, Bangkok`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} in Phra Nakhon, Bangkok`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - Budget Stay near Khaosan Road, Phra Nakhon, Bangkok`,
    description: site.description,
    images: ["/images/og-cover.jpg"],
  },
  alternates: { canonical: site.url },
  robots: indexFollow,
};

export const viewport: Viewport = {
  themeColor: "#00C2A8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    starRating: { "@type": "Rating", ratingValue: site.stars },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line,
      addressLocality: "Bangkok",
      addressRegion: "Phra Nakhon",
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    image: [
      `${site.url}/images/og-cover.jpg`,
      `${site.url}/images/hero-exterior.png`,
    ],
    logo: `${site.url}/icon`,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Phra Nakhon",
      containedInPlace: { "@type": "City", name: "Bangkok", addressCountry: "TH" },
    },
    checkinTime: site.checkIn,
    checkoutTime: site.checkOut,
    sameAs: [site.social.facebook, site.social.twitter, site.social.youtube],
  };

  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />
        <PrefetchRoutes />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
