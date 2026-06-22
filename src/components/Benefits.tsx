import { business } from "@/lib/business";

export default function Benefits() {
  const icons = ["💇", "✂️", "⭐", "📍"];
  return (
    <section className="bg-[#f5f0e8] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] sm:text-4xl">Varför välja {business.name}?</h2>
          <p className="mt-4 text-lg text-[#1a1a2e]/70">Professionell hårvård i centrala Uppsala med fokus på kvalitet och kundnöjdhet.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {business.usps.map((usp, index) => (
            <article key={usp.title} className="rounded-2xl border border-[#1a1a2e]/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a1a2e]/10 text-2xl" aria-hidden>{icons[index]}</div>
              <h3 className="text-lg font-semibold text-[#1a1a2e]">{usp.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1a1a2e]/70">{usp.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
