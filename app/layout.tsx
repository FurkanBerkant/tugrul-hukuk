import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
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
  description: "Samsun merkezli Tuğrul Hukuk, boşanma, ceza, miras ve ticaret hukuku alanlarında uzman avukat kadrosuyla profesyonel hukuki danışmanlık hizmeti sunar.",
  keywords: ["Samsun Avukat", "Samsun Hukuk Bürosu", "Boşanma Avukatı Samsun", "Ceza Avukatı Samsun", "Tuğrul Hukuk"],
  authors: [{ name: "Av. Muhammet Fatih Tuğrul" }],
  creator: "Tuğrul Hukuk ve Danışmanlık",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tugrulhukukvedanismanlik.com",
    title: "Tuğrul Hukuk & Danışmanlık | Samsun Avukat",
    description: "Samsun merkezli uzman hukuk bürosu. Boşanma, Ceza, Miras ve Ticaret hukuku.",
    siteName: "Tuğrul Hukuk",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-offwhite text-primary`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
