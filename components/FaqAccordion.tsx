"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.q}>
            <button
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-lg font-medium">{faq.q}</span>
              <Plus
                className={`h-5 w-5 shrink-0 text-teal transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            {isOpen && <p className="max-w-2xl pb-6 text-ink/70">{faq.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
