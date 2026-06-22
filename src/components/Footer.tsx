import Link from "next/link";
import { business, getFullAddress } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#0f0f1a] text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold">{business.name}</p>
          <p className="mt-2 text-sm text-slate-300/80">{business.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300/70">{business.description}</p>
        </div>
        <div>
          <p className="font-semibold">Snabblänkar</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300/80">
            <li><Link href="/om-oss" className="hover:text-white">Om oss</Link></li>
            <li><Link href="/tjanster" className="hover:text-white">Tjänster</Link></li>
            <li><Link href="/galleri" className="hover:text-white">Galleri</Link></li>
            <li><Link href="/kontakt" className="hover:text-white">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Kontakt</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-slate-300/80">
            <p>{getFullAddress()}</p>
            <p><a href={business.phoneLink} className="hover:text-white">{business.phone}</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-slate-700/50 px-4 py-6 text-center text-xs text-slate-400/60">
        <p>© {new Date().getFullYear()} {business.name}. Demo-webbplats skapad med offentligt tillgänglig information.</p>
      </div>
    </footer>
  );
}
