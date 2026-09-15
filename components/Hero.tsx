"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MapPin, Wifi, Clock } from "lucide-react";
import { heroSlides } from "@/lib/data";
import BookButton from "./BookButton";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [index]);

  const slide = heroSlides[index];

  return (
    <section className="relative h-[90vh] min-h-[620px] w-full overflow-hidden bg-ink">
      {heroSlides.map((s, i) => (
        <Image
          key={s.image}
          src={s.image}
          alt={s.headline}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "hero-zoom opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-teal/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-52 w-52 rounded-full bg-marigold/20 blur-3xl" />

      <div className="container-hostel relative flex h-full flex-col items-start justify-end pb-16 pt-28 md:pb-20">
        <div key={slide.eyebrow} className="hero-copy max-w-3xl">
          <p className="eyebrow shadow-[0_8px_24px_rgba(214,255,61,0.35)]">{slide.eyebrow}</p>
          <h1 className="mt-5 text-4xl leading-[1.05] text-white sm:text-5xl md:text-7xl">
            {slide.headline}
          </h1>
          <p className="mt-5 max-w-lg text-base text-white/80 md:text-lg">
            A lively, budget-friendly stay in Phra Nakhon — 500 m from Khaosan Road and a
            short hop to the Grand Palace.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <BookButton label="Book a room now" />
          <BookButton label="See rooms" href="/rooms" variant="ghost" />
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          <li className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md md:text-sm">
            <MapPin className="h-3.5 w-3.5 text-marigold" />
            500 m to Khaosan Road
          </li>
          <li className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md md:text-sm">
            <Wifi className="h-3.5 w-3.5 text-marigold" />
            Free Wi-Fi
          </li>
          <li className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md md:text-sm">
            <Clock className="h-3.5 w-3.5 text-marigold" />
            24/7 front desk
          </li>
        </ul>

        <div className="mt-10 flex w-full max-w-xl items-end gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.eyebrow}
              aria-label={s.eyebrow}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`group flex flex-1 flex-col gap-2 text-left ${
                i === index ? "opacity-100" : "opacity-55 hover:opacity-90"
              }`}
            >
              <span className="hidden text-[11px] font-semibold uppercase tracking-wider text-white sm:block">
                {s.eyebrow}
              </span>
              <span className="relative h-1 w-full overflow-hidden rounded-full bg-white/25">
                {i === index && <span key={index} className="hero-progress absolute inset-y-0 left-0 bg-marigold" />}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Link
        href="#location"
        className="absolute bottom-5 right-6 hidden text-xs font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-white md:block"
      >
        Scroll
      </Link>
    </section>
  );
}
