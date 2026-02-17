export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Tuğrul Hukuk & Danışmanlık",
        "image": "https://tugrulhukuk.com/hero-bg.jpg",
        "url": "https://tugrulhukuk.com",
        "telephone": "+905000000000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kale Mahallesi, Cumhuriyet Meydanı No: 10/4",
            "addressLocality": "İlkadım",
            "addressRegion": "Samsun",
            "postalCode": "55030",
            "addressCountry": "TR"
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
