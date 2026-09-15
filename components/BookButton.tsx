import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  label?: string;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  href?: string;
};

export default function BookButton({
  label = "Book now",
  variant = "solid",
  className = "",
  href = "/book",
}: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide transition-all duration-200";
  const styles =
    variant === "solid"
      ? "bg-brick text-white shadow-pop hover:-translate-y-0.5 hover:bg-[#ff255c]"
      : variant === "ghost"
        ? "border-2 border-white/80 text-white hover:bg-white hover:text-ink"
        : "border-2 border-ink text-ink hover:bg-ink hover:text-paper";

  const classes = `${base} ${styles} ${className}`;
  const external = href.startsWith("http");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {label}
        <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
      <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
    </Link>
  );
}

