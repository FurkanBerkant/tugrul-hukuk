import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { siteConfig } from "../config/site";
import JsonLd from "../components/JsonLd";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tuğrul Hukuk & Danışmanlık | Samsun Avukat",
    template: "%s | Tuğrul Hukuk"
  },
  description: "Samsun'da boşanma, ceza, miras ve ticaret hukuku alanlarında uzman avukat kadrosuyla profesyonel hukuk hizmeti. Av. Muhammet Fatih Tuğrul.",
  keywords: ["Samsun Avukat", "Samsun Hukuk Bürosu", "Boşanma Avukatı Samsun", "Ceza Avukatı Samsun", "Tuğrul Hukuk", "Samsun Avukatları", "Miras Avukatı Samsun"],
  authors: [{ name: "Av. Muhammet Fatih Tuğrul" }],
  creator: "Tuğrul Hukuk ve Danışmanlık",
  metadataBase: new URL(siteConfig.websiteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: process.env.NEXT_PUBLIC_OG_URL,
    title: process.env.NEXT_PUBLIC_OG_TITLE,
    description: process.env.NEXT_PUBLIC_OG_DESCRIPTION,
    siteName: process.env.NEXT_PUBLIC_OG_SITE_NAME,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  },
  robots: {
    index: true,
    follow: true,
  }
};

import FloatingJusticeScale from "../components/FloatingJusticeScale";
import Preloader from "../components/Preloader";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-offwhite text-primary selection:bg-accent selection:text-white`}
      >
        <Preloader />
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        <JsonLd />
        {children}
        <FloatingJusticeScale />
      </body>
    </html>
  );
}
