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
  email: null as string | null,
  emailLink: null as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/mano-blonde-50657",
  bookingLabel: "Boka på Bokadirekt",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Amanda",
  rating: 4.9,
  reviewCount: 501,
  foundedYear: null as number | null,
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
      description: "Professionell balayage med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "ombre",
      name: "Ombre",
      description: "Professionell ombre med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "blondering",
      name: "Blondering",
      description: "Professionell blondering med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "klippning",
      name: "Klippning",
      description: "Professionell klippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "f-rgkonsultation",
      name: "Färgkonsultation",
      description: "Professionell färgkonsultation med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
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
  seoKeywords: [
    "balayage Uppsala",
    "blondering Uppsala",
    "frisör Slottsgatan",
    "ombre Uppsala",
  ],
  brandColors: {
    primary: "#1a1a2e",
    secondary: "#c9a227",
    accent: "#f5f0e8",
    dark: "#0f0f1a",
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
