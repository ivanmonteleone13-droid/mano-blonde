"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business } from "@/lib/business";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/galleri", label: "Galleri" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const label = "bookingLabel" in business ? business.bookingLabel : "Boka tid";
  return (
    <header className="sticky top-0 z-50 border-b border-[#1a1a2e]/10 bg-[#f5f0e8]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a2e] text-lg text-white shadow-md transition group-hover:bg-[#0f0f1a]" aria-hidden>✂️</span>
          <div>
            <p className="text-lg font-bold tracking-tight text-[#1a1a2e]">{business.name}</p>
            <p className="hidden text-xs text-[#1a1a2e]/70 sm:block">{business.tagline}</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Huvudmeny">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${active ? `bg-[#1a1a2e] text-white` : `text-[#1a1a2e] hover:bg-slate-200`}`}>
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={business.phoneLink} className="text-sm font-semibold text-[#1a1a2e] hover:underline">{business.phone}</a>
          <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-[#c9a227] px-5 py-2.5 text-sm font-semibold text-[#0f0f1a] shadow-sm transition hover:bg-[#b8921f]">{label}</a>
        </div>
        <button type="button" className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-[#1a1a2e] md:hidden"
          aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <span className="sr-only">Öppna meny</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> :
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="border-t border-[#1a1a2e]/10 bg-[#f5f0e8] px-4 py-4 md:hidden" aria-label="Mobilmeny">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-[#1a1a2e] hover:bg-slate-200">{link.label}</Link>
            ))}
            <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer"
              className="mt-2 rounded-full bg-[#c9a227] px-4 py-3 text-center font-semibold text-[#0f0f1a]">{label}</a>
          </div>
        </nav>
      )}
    </header>
  );
}
