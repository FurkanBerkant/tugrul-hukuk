import { siteConfig } from "../config/site";

export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": siteConfig.firmName,
        "description": siteConfig.description,
        "image": `${siteConfig.websiteUrl}/hero-bg.jpg`,
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
            "latitude": parseFloat(siteConfig.address.latitude),
            "longitude": parseFloat(siteConfig.address.longitude)
        },
        "openingHoursSpecification": siteConfig.workingHours
            .filter(h => h.opens && h.closes)
            .map(h => ({
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": h.label.includes("Cuma")
                    ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
                    : h.label,
                "opens": h.opens,
                "closes": h.closes
            })),
        "priceRange": "$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
