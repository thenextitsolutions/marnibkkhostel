"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="container-hostel">
        <p className="eyebrow">Around the hostel</p>
        <h2 className="mt-4 max-w-xl text-3xl leading-tight md:text-5xl">A look inside Marni</h2>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {galleryImages.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setActive(src)}
              className={`relative overflow-hidden rounded-2xl bg-paperDim ${
                i % 5 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt="Marni BKK Hostel"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-6"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 text-paper"
            onClick={() => setActive(null)}
          >
            <X className="h-7 w-7" />
          </button>
          <div className="relative h-[80vh] w-full max-w-3xl">
            <Image src={active} alt="Marni BKK Hostel" fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
