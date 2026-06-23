export const business = {
  name: "MANO BLONDE",
  tagline: "Handcrafted balayage boutique",
  description:
    "Mano Blonde grundades av Amanda med fokus på tid, genuin omsorg och naturliga blondresultat — balayage och handgjord färg på Övre Slottsgatan 9 i Uppsala.",
  category: "Hair Salon",
  address: {
    street: "Övre Slottsgatan 9",
    postalCode: "753 12",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "070-325 19 00",
  phoneLink: "tel:+46703251900",
  email: "amanda@manoblonde.se" as string | null,
  emailLink: "mailto:amanda@manoblonde.se" as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/mano-blonde-59799",
  bookingLabel: "Boka på Bokadirekt",
  websiteUrl: "https://www.manoblonde.se/" as string | null,
  logoImage: "/images/logo.jpg" as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-2.jpg",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Amanda",
  rating: 4.9,
  reviewCount: 501,
  foundedYear: 2010,
  coordinates: { lat: 59.8579, lng: 17.628 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  trustBadges: [
    { label: "4.9 på Bokadirekt", icon: "star" },
    { label: "501+ omdömen", icon: "reviews" },
    { label: "Uppsala centrum", icon: "location" },
    { label: "✨ Blonde Studio", icon: "student" },
  ],
  usps: [
    {
      title: "Blondspecialist",
      description: "Balayage, ombre och blondering med naturligt, handgjort resultat.",
    },
    {
      title: "Centralt läge",
      description: "Beläget på Övre Slottsgatan 9 i Uppsala.",
    },
    {
      title: "Höga betyg",
      description: "501+ nöjda kunder enligt offentliga omdömen.",
    },
    {
      title: "Enkel bokning",
      description: "Boka tid online eller ring för snabb service.",
    },
  ],
  services: [
    {
      id: "balayage",
      name: "Balayage",
      icon: "✂️",
      description: "Professionell balayage med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: 2800,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "ombre",
      name: "Ombre",
      icon: "💇",
      description: "Professionell ombre med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "blondering",
      name: "Blondering",
      icon: "⭐",
      description: "Professionell blondering med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "klippning",
      name: "Klippning",
      icon: "🎯",
      description: "Professionell klippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "f-rgkonsultation",
      name: "Färgkonsultation",
      icon: "✨",
      description: "Professionell färgkonsultation med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: 2000,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Salongen", image: "/images/gallery-1.jpg" },
    { id: 2, label: "Balayage", image: "/images/gallery-2.jpg" },
    { id: 3, label: "Blondering", image: "/images/gallery-3.jpg" },
    { id: 4, label: "Resultat", image: "/images/gallery-4.jpg" },
    { id: 5, label: "Styling", image: "/images/gallery-5.jpg" },
    { id: 6, label: "Atmosfär", image: "/images/gallery-6.jpg" },
  ],
  testimonials: [
    {
      text: "Bästa!!❤️",
      author: "Rebecca S.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/mano-blonde-59799",
      rating: 5,
      date: "2026-06-18",
    },
    {
      text: "Väldigt nöjd! Andra gången jag var till Amanda och kommer absolut fortsätta gå hos henne 🥰 så mysigt i hennes egna, nya salong också!",
      author: "Hanna V.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/mano-blonde-59799",
      rating: 5,
      date: "2026-06-17",
    },
    {
      text: "Så fin lokal och trevlig personal. Elton är inkännande och duktig, gjorde som jag ville. Toppen rekommenderas.",
      author: "Ingela J.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/mano-blonde-59799",
      rating: 5,
      date: "2026-06-16",
    },
    {
      text: "Mycket nöjd!",
      author: "Jakob J.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/mano-blonde-59799",
      rating: 5,
      date: "2026-06-15",
    },
  ],
  about: {
    headline: "Om MANO BLONDE",
    paragraphs: [
      "Mano Blonde grundades av Amanda med en enkel, men stark övertygelse: varje kund förtjänar tid, genuin omsorg och ett resultat som känns helt naturligt.",
      "I salongen ligger fokus på kvalitet, skickligt hantverk och helheten runt dig som kund. Här får du en lugn stund där ditt hår, din stil och din känsla står i centrum — välkommen till Övre Slottsgatan 9.",
    ],
  },
  faq: [
    {
      question: "Var ligger MANO BLONDE?",
      answer: "Vi finns på Övre Slottsgatan 9, 753 12 Uppsala.",
    },
    {
      question: "Hur bokar jag tid hos MANO BLONDE?",
      answer: "Boka via Bokadirekt eller ring 070-325 19 00.",
    },
    {
      question: "Vad säger kunder om MANO BLONDE?",
      answer: "Vi har 4.9 i snittbetyg baserat på 501+ recensioner.",
    },
    {
      question: "Vilka öppettider har ni?",
      answer: "Ring gärna innan besök.",
    },
    {
      question: "Kan jag avboka min tid?",
      answer: "Ja, via Bokadirekt kan du hantera din bokning.",
    },
    {
      question: "Erbjuder ni presentkort?",
      answer: "Kontakta oss för information om presentkort.",
    },
    {
      question: "Finns parkering nära?",
      answer: "Gatuparkering finns i närheten av Övre Slottsgatan 9.",
    },
  ],
  seoKeywords: [
    "balayage Uppsala",
    "blondering Uppsala",
    "frisör Slottsgatan",
    "ombre Uppsala",
    "MANO BLONDE",
    "Uppsala blonde_studio",
  ],
  brandColors: {
    primary: "#B8860B",
    secondary: "#F5DEB3",
    accent: "#FFFAF0",
    dark: "#8B6914",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function formatPrice(amount: number | null) {
  if (amount === null) return "Pris på förfrågan";
  return `från ${amount} kr`;
}
