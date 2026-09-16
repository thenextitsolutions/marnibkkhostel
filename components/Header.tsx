"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  BedDouble,
  CalendarCheck,
  Sparkles,
  Star,
  HelpCircle,
  Info,
  Mail,
} from "lucide-react";
import { site } from "@/lib/data";
import BookButton from "./BookButton";

const nav = [
  { label: "Home", href: "/" },
  {
    label: "Stay",
    href: "/rooms",
    children: [
      {
        label: "Rooms & dorms",
        href: "/rooms",
        hint: "Private rooms and shared beds",
        icon: BedDouble,
      },
      {
        label: "Book a stay",
        href: "/book",
        hint: "Direct or Booking, Agoda & more",
        icon: CalendarCheck,
      },
    ],
  },
  {
    label: "Facilities",
    href: "/amenities",
    children: [
      { label: "Amenities", href: "/amenities", hint: "Wi-Fi, kitchen, lockers", icon: Sparkles },
      { label: "Features", href: "/features", hint: "Beds and common areas", icon: Star },
      { label: "FAQ", href: "/faq", hint: "Check-in, Wi-Fi, policies", icon: HelpCircle },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our story", href: "/about", hint: "The hostel in Phra Nakhon", icon: Info },
      { label: "Contact", href: "/contact", hint: "Call, email, or write us", icon: Mail },
    ],
  },
];

function isActive(pathname: string, href: string, children?: { href: string }[]) {
  if (href === "/") return pathname === "/";
  if (pathname === href || pathname.startsWith(`${href}/`)) return true;
  return Boolean(children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`)));
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/90 text-ink shadow-[0_8px_30px_rgba(12,20,18,0.04)] backdrop-blur-xl">
      <div className="container-hostel flex h-20 items-center justify-between gap-4 md:h-24">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/logo-mark.jpeg"
            alt="Marni BKK Hostel"
            width={80}
            height={80}
            className="h-[3.25rem] w-[3.25rem] shrink-0 rounded-full object-cover ring-2 ring-teal/80 ring-offset-2 ring-offset-white"
          />
          <span className="whitespace-nowrap font-body text-2xl font-bold tracking-normal text-ink md:text-3xl">
            Marni <span className="text-teal">BKK</span> Hostel
          </span>
        </Link>

        <nav className="hidden items-center rounded-full bg-[#F4F7F6] p-1 lg:flex">
          {nav.map((item) => {
            const active = isActive(pathname, item.href, item.children);
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  prefetch
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    active
                      ? "bg-white text-ink shadow-sm"
                      : "text-ink/60 hover:bg-white/80 hover:text-ink"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-20 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-2xl border border-ink/10 bg-white p-2 shadow-lift">
                      {item.children.map((child) => {
                        const Icon = child.icon;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            prefetch
                            className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-teal-tint"
                          >
                            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-marigold/80 text-ink">
                              <Icon className="h-4 w-4" strokeWidth={2} />
                            </span>
                            <span>
                              <span className="block text-sm font-bold text-ink">{child.label}</span>
                              <span className="block text-xs text-ink/55">{child.hint}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="hidden items-center gap-2 text-sm font-semibold text-ink/70 transition-colors hover:text-teal-dark xl:flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-tint text-teal-dark">
              <Phone className="h-3.5 w-3.5" />
            </span>
            {site.phone}
          </a>
          <BookButton label="Book now" className="px-5 py-2.5" />
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F7F6] text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-white lg:hidden">
          <div className="container-hostel flex flex-col gap-2 py-5">
            {nav.map((item) => (
              <div key={item.label} className="rounded-2xl bg-[#F4F7F6] p-3">
                <Link
                  href={item.href}
                  prefetch
                  className="block text-sm font-bold text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-2 grid gap-1">
                    {item.children.map((child) => {
                      const Icon = child.icon;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          prefetch
                          className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5"
                          onClick={() => setOpen(false)}
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-marigold/80">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold">{child.label}</span>
                            <span className="block text-xs text-ink/55">{child.hint}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-2">
              <BookButton label="Book now" className="w-full justify-center" />
            </div>
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-1 flex items-center justify-center gap-2 text-sm font-semibold text-ink/70"
            >
              <Phone className="h-4 w-4 text-teal" />
              {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
