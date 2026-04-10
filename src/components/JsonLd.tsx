import { SITE_NAME, SITE_URL, PHONE, EMAIL } from "@/lib/constants";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: SITE_NAME,
    description:
      "Service de dépannage et remorquage automobile 24h/24 à Le Chesnay, Versailles et alentours",
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Rue de la République",
      addressLocality: "Le Chesnay",
      postalCode: "78150",
      addressRegion: "Yvelines",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8231,
      longitude: 2.1278,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 48.8231,
        longitude: 2.1278,
      },
      geoRadius: "50000",
    },
    priceRange: "€€",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
