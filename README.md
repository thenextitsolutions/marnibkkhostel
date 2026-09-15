# Marni BKK Hostel — Next.js website

A modern, fast, SEO-friendly rebuild of marnibkkhostel.com using Next.js 14
(App Router) and Tailwind CSS. Content is pulled from the existing WordPress
site; booking stays on the existing third-party engine (no in-house booking
system was built).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's inside

```
app/
  layout.tsx        Root layout, fonts, global <Hotel> JSON-LD
  page.tsx           Home
  rooms/page.tsx      Rooms & dorms
  amenities/page.tsx  Amenities
  features/page.tsx   Features
  about/page.tsx      About
  contact/page.tsx    Contact (form + map)
  faq/page.tsx        FAQ (with FAQPage JSON-LD)
  sitemap.ts          Auto-generated sitemap.xml
  robots.ts           Auto-generated robots.txt
components/           Header, Footer, Hero, RoomCard, Nearby, Reviews,
                       Gallery, FaqAccordion, ContactForm, BookButton, etc.
lib/data.ts            Single source of truth for all site content
                       (rooms, amenities, nearby places, reviews, contact info)
```

## Before you launch

1. **Replace placeholder photos.** Every image currently points to a
   royalty-free Unsplash placeholder so the site is usable immediately.
   Add the hostel's real photos to `/public/images/` and swap the `image`
   fields in `lib/data.ts` and any inline `<Image src="...">` calls.
2. **Add a real Open Graph image** at `/public/images/og-cover.jpg`
   (1200×630).
3. **Fill in real review platform ratings** in the `ratings` array in
   `lib/data.ts` (Agoda / Facebook / Expedia).
4. **Confirm social links** (`site.social` in `lib/data.ts`) — placeholders
   are set to generic URLs.
5. **Wire up the contact form** to a real email provider. `app/contact/actions.ts`
   has a commented example using [Resend](https://resend.com); add
   `RESEND_API_KEY` to `.env.local` (see `.env.example`) once configured.
6. **Double-check the booking link** in `lib/data.ts` (`site.bookingUrl`).
   Every "Book now" button across the site reads from this single value.

## SEO

- Per-page `metadata` (title, description, Open Graph, Twitter Card)
- `LodgingBusiness` JSON-LD in the root layout
- `FAQPage` JSON-LD on `/faq`
- Auto-generated `sitemap.xml` and `robots.txt`
- Semantic heading structure, descriptive `alt` text, `next/image` for
  optimized/responsive images, `next/font` for zero-layout-shift fonts

## Deploying

The project is ready for [Vercel](https://vercel.com): push to a Git repo,
import it in Vercel, and deploy — no extra configuration required.
