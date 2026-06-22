export const business = {
  name: "MANO BLONDE",
  tagline: "Handcrafted balayage boutique",
  description: "Balayage-focused boutique salon founded by Amanda with a natural, handcrafted color approach.",
  category: "Hair Salon",
  address: {
    street: "Övre Slottsgatan 9",
    postalCode: "753 12",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "070-000 00 00",
  phoneLink: "tel:+46700000000",
  email: "amanda@manoblonde.se" as string | null,
  emailLink: "mailto:amanda@manoblonde.se" as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/mano-blonde-50657",
  bookingLabel: "Boka på Bokadirekt",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Amanda",
  rating: 4.9,
  reviewCount: 501,
  foundedYear: 2010,
  coordinates: { lat: 59.8588, lng: 17.6386 },
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
      title: "Erfarna stylister",
      description: "Professionell klippning och styling hos MANO BLONDE.",
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
      priceFrom: null,
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
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Styling", before: "from-[#8B6914] to-[#B8860B]", after: "from-[#F5DEB3]/40 to-[#B8860B]" },
    { id: 2, label: "Behandling", before: "from-[#B8860B] to-[#8B6914]", after: "from-[#F5DEB3]/30 to-[#8B6914]" },
    { id: 3, label: "Resultat", before: "from-[#8B6914] to-[#B8860B]/80", after: "from-[#F5DEB3] to-[#B8860B]/50" },
    { id: 4, label: "Salong", before: "from-[#B8860B]/90 to-[#8B6914]", after: "from-[#F5DEB3]/50 to-[#F5DEB3]" },
    { id: 5, label: "Detalj", before: "from-[#8B6914] to-[#F5DEB3]/20", after: "from-[#B8860B] to-[#F5DEB3]/35" },
    { id: 6, label: "Atmosfär", before: "from-[#B8860B] to-[#F5DEB3]/25", after: "from-[#F5DEB3]/60 to-[#8B6914]" },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos MANO BLONDE. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar MANO BLONDE varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  about: {
    headline: "Om MANO BLONDE",
    paragraphs: [
      "Balayage-focused boutique salon founded by Amanda with a natural, handcrafted color approach.",
    ],
  },
  faq: [
    {
      question: "Var ligger MANO BLONDE?",
      answer: "Vi finns på Övre Slottsgatan 9, 753 12 Uppsala.",
    },
    {
      question: "Hur bokar jag tid hos MANO BLONDE?",
      answer: "Boka via Bokadirekt eller ring 070-000 00 00.",
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
