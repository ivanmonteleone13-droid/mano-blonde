import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Om oss",
  description: `Lär känna ${business.name} – professionell frisörsalong i Uppsala.`,
};

export default function AboutPage() {
  const label = "bookingLabel" in business ? business.bookingLabel : "Boka tid";
  return (
    <>
      <section className="bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Om {business.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100/90">{business.tagline}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a2e]">Välkommen till oss</h2>
            <p className="mt-6 leading-relaxed text-[#1a1a2e]/80">{business.description}</p>
            <p className="mt-4 leading-relaxed text-[#1a1a2e]/80">
              Hos {business.name} på {business.address.street} i Uppsala erbjuder vi professionell hårvård med fokus på kvalitet, stil och personlig service.
            </p>
          </div>
          <div className="rounded-3xl bg-[#f5f0e8] p-8">
            <h2 className="text-2xl font-bold text-[#1a1a2e]">I siffror</h2>
            <dl className="mt-6 space-y-6">
              <div><dt className="text-sm font-medium text-[#1a1a2e]/60">Betyg</dt><dd className="text-3xl font-bold text-[#1a1a2e]">{business.rating} / 5</dd></div>
              <div><dt className="text-sm font-medium text-[#1a1a2e]/60">Omdömen</dt><dd className="text-3xl font-bold text-[#1a1a2e]">{business.reviewCount}+</dd></div>
              <div><dt className="text-sm font-medium text-[#1a1a2e]/60">Läge</dt><dd className="text-xl font-semibold text-[#0f0f1a]">{business.address.street}, Uppsala</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f0e8] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1a1a2e]">Så arbetar vi</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "Konsultation", text: "Vi lyssnar på dina önskemål och ger professionell rådgivning." },
              { title: "Behandling", text: "Skickliga stylister utför arbetet med omsorg och precision." },
              { title: "Resultat", text: "Du lämnar salongen nöjd med en look som passar dig." },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1a1a2e]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1a1a2e]/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-[#1a1a2e]">Vill du veta mer?</h2>
          <p className="mt-4 text-[#1a1a2e]/70">Boka en tid eller kontakta oss – vi hjälper dig gärna.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/kontakt" className="rounded-full bg-[#1a1a2e] px-8 py-4 font-semibold text-white transition hover:bg-[#0f0f1a]">Kontakta oss</Link>
            <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer"
              className="rounded-full border border-[#1a1a2e] px-8 py-4 font-semibold text-[#1a1a2e] transition hover:bg-slate-100">{label}</a>
          </div>
        </div>
      </section>
    </>
  );
}
