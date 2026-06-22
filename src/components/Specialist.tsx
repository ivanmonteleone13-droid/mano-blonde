export default function Specialist() {
  return (
    <section id="specialist" className="border-y border-[var(--secondary)]/40 bg-[var(--background)] py-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-light text-[var(--foreground)]">
            Blond är vår passion
          </h2>
          <p className="mt-6 text-[var(--foreground)]/65 leading-relaxed">
            Från kall askblond till varm honungston — vi behärskar hela spektrumet.
            Varje blondning börjar med en konsultation för att hitta din perfekta nyans.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["#F5E6C8", "#E8D5A3", "#D4B896", "#C9A86C", "#B8956B", "#A67B5B"].map((c) => (
            <div key={c} className="aspect-square rounded-lg shadow-inner" style={{ backgroundColor: c }} aria-hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
