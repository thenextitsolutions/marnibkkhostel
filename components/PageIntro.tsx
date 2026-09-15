export default function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/5 bg-teal-tint py-16 md:py-24">
      <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-marigold/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-teal/30 blur-3xl" />
      <div className="container-hostel relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] md:text-6xl">{title}</h1>
        {description && <p className="mt-4 max-w-xl text-lg text-ink/70">{description}</p>}
      </div>
    </section>
  );
}
