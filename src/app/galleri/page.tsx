import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Galleri",
  description: `Inspireras av vårt arbete hos ${business.name} i Uppsala.`,
};

const galleryItems = [
  { title: "Herrklippning", gradient: "from-slate-200 to-slate-400", emoji: "✂️" },
  { title: "Färg & slingor", gradient: "from-amber-100 to-amber-300", emoji: "🎨" },
  { title: "Skäggtrim", gradient: "from-stone-200 to-stone-400", emoji: "🧔" },
  { title: "Styling", gradient: "from-rose-100 to-rose-300", emoji: "💇" },
  { title: "Fade", gradient: "from-sky-100 to-sky-300", emoji: "⭐" },
  { title: "Balayage", gradient: "from-violet-100 to-violet-300", emoji: "✨" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Galleri</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100/90">
            Platshållarbilder i demo-webbplatsen. Besök salongen på {business.address.street} för att se vårt arbete.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <figure key={item.title} className={`group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient}`}>
                <div className="flex h-full flex-col items-center justify-center p-6 text-center transition group-hover:scale-105">
                  <span className="text-6xl" aria-hidden>{item.emoji}</span>
                  <figcaption className="mt-4 text-lg font-semibold text-[#1a1a2e]/80">{item.title}</figcaption>
                </div>
              </figure>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-[#1a1a2e]/60">Bilder i detta galleri är illustrativa platshållare.</p>
        </div>
      </section>
    </>
  );
}
