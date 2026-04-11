import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPhone from "@/components/FloatingPhone";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Dépannage & Remorquage 24h/24 Le Chesnay, Versailles`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Service de dépannage et remorquage automobile 24h/24 et 7j/7 à Chesnay. Intervention rapide, agréé assurances, devis gratuit.",
  keywords: [
    "dépannage auto paris",
    "remorquage paris",
    "dépanneuse paris",
    "assistance automobile île-de-france",
    "remorquage 24h/24",
    "dépannage voiture paris",
    "évacuation véhicule paris",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18074344411"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18074344411');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingPhone />
      </body>
    </html>
  );
}
