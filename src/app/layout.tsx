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
    default: `${SITE_NAME} | Dépannage & Remorquage 24h/24 Paris`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Service de dépannage et remorquage automobile 24h/24 et 7j/7 à Paris et ouest parisien. Intervention rapide, agréé assurances, devis gratuit.",
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
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K3K7SPBG');`}
        </Script>
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/851647ee0a87e14f540d69b5/script.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K3K7SPBG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingPhone />
      </body>
    </html>
  );
}
