import Link from "next/link";
import { business, getFullAddress } from "@/lib/business";

export default function CtaBanner() {
  const label = "bookingLabel" in business ? business.bookingLabel : "Boka tid";
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#c9a227] to-[#e0c060] p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0f0f1a] sm:text-4xl">Redo för en ny look?</h2>
              <p className="mt-4 text-lg text-[#0f0f1a]/80">Besök oss på {getFullAddress()} eller boka tid online.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#0f0f1a] px-8 py-4 font-semibold text-white transition hover:bg-black">{label}</a>
              <Link href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#0f0f1a] bg-transparent px-8 py-4 font-semibold text-[#0f0f1a] transition hover:bg-[#0f0f1a]/10">
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
