import type { Metadata } from "next";
import { Playfair_Display, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marcus-terrarium.vercel.app"),
  title: {
    default: "Marcus Terrarium | Handgjorda Glasterrarier i Stockholm",
    template: "%s | Marcus Terrarium",
  },
  description:
    "Handgjorda glasterrarier — levande konstverk för ditt hem. Slutna ekosystem som sköter sig självt. Köp direkt via Instagram. Baserade i Stockholm sedan 2026.",
  keywords: [
    "terrarium",
    "glasterrarium",
    "handgjort terrarium",
    "köpa terrarium",
    "terrarium stockholm",
    "slutet ekosystem",
    "mini terrarium",
    "present terrarium",
    "växter i glas",
    "moss terrarium",
  ],
  authors: [{ name: "Marcus Terrarium" }],
  creator: "Marcus Terrarium",
  robots: { index: true, follow: true },
  verification: { google: "9Py7OR9NLhkARrItmUuk6jvZT65L_Rc25RvePtPcmjw" },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "Marcus Terrarium",
    title: "Marcus Terrarium | Handgjorda Glasterrarier i Stockholm",
    description:
      "Handgjorda glasterrarier — levande konstverk för ditt hem. Slutna ekosystem som sköter sig självt.",
    images: [
      {
        url: "/images/terrarium-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Marcus Terrarium — handgjorda glasterrarier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Terrarium | Handgjorda Glasterrarier",
    description: "Handgjorda glasterrarier — levande konstverk för ditt hem.",
    images: ["/images/terrarium-hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Marcus Terrarium",
  description:
    "Handgjorda glasterrarier — levande konstverk för ditt hem. Slutna ekosystem som sköter sig självt.",
  url: "https://marcus-terrarium.vercel.app",
  sameAs: [
    "https://www.instagram.com/marcus_terrarium/",
    "https://www.youtube.com/@marcusterrarium",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stockholm",
    addressCountry: "SE",
  },
  priceRange: "49 kr – 1 195 kr",
  image: "https://marcus-terrarium.vercel.app/images/terrarium-hero.jpg",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${playfair.variable} ${hanken.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
