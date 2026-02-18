import { siteConfig } from "../config/site";

export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": siteConfig.firmName,
        "image": "https://tugrulhukuk.com/hero-bg.jpg",
        "url": siteConfig.websiteUrl,
        "telephone": siteConfig.whatsappNumber,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.address.line1,
            "addressLocality": siteConfig.address.district,
            "addressRegion": siteConfig.address.city,
            "postalCode": siteConfig.address.postalCode,
            "addressCountry": siteConfig.address.countryCode
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.2867,
            "longitude": 36.33
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "14:00"
            }
        ],
        "priceRange": "$$"
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
