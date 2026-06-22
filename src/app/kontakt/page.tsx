import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { business, getFullAddress, getMapsEmbedUrl, getMapsLink } from "@/lib/business";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakta ${business.name} i Uppsala. Boka tid, ring eller besök oss.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Kontakt</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100/90">Vi finns i centrala Uppsala. Hör av dig eller boka direkt online.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e]">Kontaktuppgifter</h2>
            <dl className="mt-8 space-y-6">
              <div><dt className="text-sm font-medium text-[#1a1a2e]/60">Adress</dt><dd className="mt-1 text-lg text-[#1a1a2e]">{getFullAddress()}</dd></div>
              <div><dt className="text-sm font-medium text-[#1a1a2e]/60">Telefon</dt>
                <dd><a href={business.phoneLink} className="text-lg font-semibold text-[#1a1a2e] hover:underline">{business.phone}</a></dd></div>
              <div><dt className="text-sm font-medium text-[#1a1a2e]/60">Bokning</dt>
                <dd><a href={business.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-[#1a1a2e] hover:underline">Boka via Bokadirekt →</a></dd></div>
            </dl>
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-[#1a1a2e]">Öppettider</h3>
              <p className="mt-2 text-sm text-amber-800">{business.hours.note}</p>
              <table className="mt-4 w-full text-sm">
                <tbody>
                  {business.hours.regular.map((row) => (
                    <tr key={row.day} className="border-b border-[#1a1a2e]/5">
                      <td className="py-2 font-medium text-[#1a1a2e]">{row.day}</td>
                      <td className="py-2 text-right text-[#1a1a2e]/70">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="bg-[#f5f0e8] py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-6 text-2xl font-bold text-[#1a1a2e]">Hitta hit</h2>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe title={`Karta till ${business.name}`} src={getMapsEmbedUrl()} width="100%" height="400"
              style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
          <p className="mt-4 text-center">
            <a href={getMapsLink()} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#1a1a2e] hover:underline">Öppna i Google Maps →</a>
          </p>
        </div>
      </section>
    </>
  );
}
