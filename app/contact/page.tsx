import { Phone, Mail, MapPin } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { site } from "@/lib/data";
import { routeMeta } from "@/lib/seo";

export const metadata = routeMeta(
  "/contact",
  "Contact",
  "Get in touch with Marni BKK Hostel in Phra Nakhon, Bangkok — call, email, or send a message and we'll get back to you shortly."
);

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Get in touch"
        title="Contact us"
        description="Questions before you book? Reach out and we'll get back to you shortly."
      />

      <section className="py-20 md:py-28">
        <div className="container-hostel grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-teal" />
                <a href={`tel:${site.phoneHref}`} className="text-ink/80 hover:text-ink">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-teal" />
                <a href={`mailto:${site.email}`} className="text-ink/80 hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-teal" />
                <span className="text-ink/80">{site.address.line}</span>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-3xl border border-ink/10">
              <MapEmbed className="min-h-[280px]" />
            </div>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold">Send us a message</h2>
            <p className="mt-1 text-sm text-ink/60">
              For bookings, use the{" "}
              <a href="/book" className="font-semibold text-teal-dark underline underline-offset-2">
                Book page
              </a>{" "}
              — pick our site or Booking.com, Agoda, Hostelworld, and more.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
