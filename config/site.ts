export const siteConfig = {
  firmName: process.env.NEXT_PUBLIC_FIRM_NAME || "Tuğrul Hukuk ve Danışmanlık",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Samsun'da boşanma, ceza, miras ve ticaret hukuku alanlarında uzman avukat kadrosuyla profesyonel hukuk hizmeti.",
  address: {
    line1: process.env.NEXT_PUBLIC_ADDRESS_LINE1 || "Kılıçdede Mah. Saadet Cad. No:136 Firuze Apt. Kat:3 Daire:3",
    postalCode: process.env.NEXT_PUBLIC_ADDRESS_POSTAL || "",
    district: process.env.NEXT_PUBLIC_ADDRESS_DISTRICT || "İlkadım",
    city: process.env.NEXT_PUBLIC_ADDRESS_CITY || "Samsun",
    countryCode: "TR",
    latitude: process.env.NEXT_PUBLIC_LATITUDE || "41.2867",
    longitude: process.env.NEXT_PUBLIC_LONGITUDE || "36.33",
  },
  phones: [process.env.NEXT_PUBLIC_PHONE || "0540 819 65 55"],
  email: process.env.NEXT_PUBLIC_EMAIL || "av.muhammetfatihtugrul@gmail.com",
  workingHours: [
    { label: "Pazartesi - Cuma", value: "08:00 - 17:00", opens: "08:00", closes: "17:00" },
    { label: "Cumartesi", value: "09:00 - 14:00", opens: "09:00", closes: "14:00" },
    { label: "Pazar", value: "Kapalı", opens: null, closes: null },
  ],
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP || "+905408196555",
  websiteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://tugrulhukuk.av.tr",
};

