import { business } from "@/lib/business";

export default function Hero() {
  const heroImage = "heroImage" in business ? business.heroImage : null;

  return (
    <section id="hem" className="relative overflow-hidden border-b border-[var(--secondary)]/30 bg-[var(--background)] py-32">
      {heroImage && (
        <>
          <img
            src={heroImage}
            alt={`${business.name} — salong på ${business.address.street}, ${business.address.city}`}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[var(--dark)]/65" aria-hidden />
        </>
      )}
      <div className="relative mx-auto max-w-4xl px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--secondary)]">Blondspecialist</p>
        <h1 className="mt-8 font-[family-name:var(--font-heading)] text-5xl font-light text-white sm:text-7xl">
          Blondspecialist
        </h1>
        <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-light text-[var(--secondary)]">i Uppsala</h2>
        <div className="mt-10 h-px w-16 bg-[var(--secondary)]" />
        <p className="mt-10 max-w-lg text-lg font-light leading-relaxed text-white/85">{business.description}</p>
        <div className="mt-12 flex items-center gap-8">
          <span className="text-4xl" aria-hidden>
            ✨
          </span>
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-[0.3em] text-[var(--secondary)] underline-offset-8 hover:underline"
          >
            Boka konsultation →
          </a>
        </div>
      </div>
    </section>
  );
}
