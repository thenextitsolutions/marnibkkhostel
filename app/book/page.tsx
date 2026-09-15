import { ArrowUpRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import { bookingChannels, site } from "@/lib/data";
import { routeMeta } from "@/lib/seo";

export const metadata = routeMeta(
  "/book",
  "Book your stay",
  "Reserve Marni BKK Hostel direct, or compare Booking.com, Agoda, Hostelworld, Expedia, Hotels.com, Google Hotels, and Trivago."
);

export default function BookPage() {
  const featured = bookingChannels.find((c) => c.featured);
  const others = bookingChannels.filter((c) => !c.featured);

  return (
    <>
      <PageIntro
        eyebrow="Reserve"
        title="Book Marni BKK your way"
        description="Start with our official booking engine, or hop to the site you already trust. Same hostel — pick the checkout you like."
      />

      <section className="py-16 md:py-24">
        <div className="container-hostel space-y-6">
          {featured && (
            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-ink p-8 text-paper transition-transform hover:-translate-y-0.5 md:flex-row md:items-center md:justify-between md:p-10"
            >
              <div className="pointer-events-none absolute -right-8 -top-10 h-44 w-44 rounded-full bg-teal/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 left-20 h-40 w-40 rounded-full bg-marigold/30 blur-3xl" />
              <div className="relative max-w-xl">
                <span className="eyebrow">Recommended</span>
                <h2 className="mt-4 text-3xl text-white md:text-4xl">{featured.name}</h2>
                <p className="mt-2 text-paper/75">{featured.blurb}</p>
                <p className="mt-3 text-sm text-paper/55">
                  Check-in {site.checkIn} · Check-out {site.checkOut}
                </p>
              </div>
              <span className="relative mt-6 inline-flex items-center gap-2 self-start rounded-full bg-marigold px-6 py-3 text-sm font-bold text-ink md:mt-0">
                Check live rates
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </a>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((channel) => (
              <a
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-3xl border border-ink/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold text-white"
                  style={{ backgroundColor: channel.accent }}
                >
                  {channel.mark}
                </span>
                <h3 className="mt-4 text-lg font-bold">{channel.name}</h3>
                <p className="mt-1.5 flex-1 text-sm text-ink/65">{channel.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-teal-dark">
                  Continue
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>

          <div className="grid gap-4 rounded-3xl border border-ink/10 bg-white p-6 md:grid-cols-3 md:p-8">
            <div className="flex gap-3">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <div>
                <h3 className="font-bold">Compare if you like</h3>
                <p className="mt-1 text-sm text-ink/65">
                  Rates move by date and platform. A 20-second check can save a few baht.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <div>
                <h3 className="font-bold">Direct is simplest</h3>
                <p className="mt-1 text-sm text-ink/65">
                  Booking with us skips extra accounts. Questions go straight to reception.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <div>
                <h3 className="font-bold">Prefer to call?</h3>
                <p className="mt-1 text-sm text-ink/65">
                  <a className="font-semibold text-ink underline underline-offset-2" href={`tel:${site.phoneHref}`}>
                    {site.phone}
                  </a>{" "}
                  or{" "}
                  <a className="font-semibold text-ink underline underline-offset-2" href={`mailto:${site.email}`}>
                    email us
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
