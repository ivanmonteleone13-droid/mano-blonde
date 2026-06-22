"use client";
import { useState } from "react";
import { business } from "@/lib/business";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <p className="text-lg font-semibold text-emerald-900">Tack för ditt meddelande!</p>
        <p className="mt-2 text-sm text-[#1a1a2e]/70">Vi återkommer så snart vi kan. Du kan också ringa {business.phone}.</p>
      </div>
    );
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="space-y-5 rounded-2xl border border-[#1a1a2e]/10 bg-white p-6 shadow-sm sm:p-8">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-[#1a1a2e]">Namn</label>
        <input id="name" name="name" required className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-[#1a1a2e] focus:ring-2" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#1a1a2e]">E-post</label>
        <input id="email" name="email" type="email" required className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-[#1a1a2e] focus:ring-2" />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[#1a1a2e]">Telefon</label>
        <input id="phone" name="phone" type="tel" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-[#1a1a2e] focus:ring-2" />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-[#1a1a2e]">Meddelande</label>
        <textarea id="message" name="message" rows={4} required className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-[#1a1a2e] focus:ring-2" />
      </div>
      <button type="submit" className="w-full rounded-full bg-[#1a1a2e] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#0f0f1a] sm:w-auto">
        Skicka meddelande
      </button>
    </form>
  );
}
