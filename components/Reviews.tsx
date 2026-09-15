import { Star } from "lucide-react";
import { reviews } from "@/lib/data";

export default function Reviews() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-hostel">
        <p className="eyebrow">Guest stories</p>
        <h2 className="mt-4 max-w-xl text-3xl leading-tight md:text-5xl">
          What travelers say about their stay
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm"
            >
              <div className="flex gap-1 text-marigold">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed text-ink/85">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brick text-sm font-bold text-white">
                  {review.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{review.name}</span>
                  <span className="block text-sm text-ink/50">{review.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
