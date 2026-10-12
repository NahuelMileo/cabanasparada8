import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Figtree } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/motion/MotionProvider";
import { PHONE_DISPLAY } from "@/lib/contact";

const serif = Instrument_Serif({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const description =
  "Cabañas Parada 8 en Barra del Chuy, Rocha, Uruguay: cinco alojamientos equipados a media cuadra de la playa, con atención familiar desde hace más de 20 años. Consultá disponibilidad por WhatsApp.";

export const metadata: Metadata = {
  title: "Cabañas Parada 8 | Alquileres en Barra del Chuy, Uruguay",
  description,
  openGraph: {
    title: "Cabañas Parada 8 | Barra del Chuy, Uruguay",
    description,
    url: "/",
    siteName: "Cabañas Parada 8",
    locale: "es_UY",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#1f2021",
};

// Decide antes del primer pintado si se muestra la intro (una vez por sesión, nunca con movimiento reducido)
const introScript = `(function(){var d=document.documentElement;try{var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;var s=sessionStorage.getItem('p8-intro');d.classList.add(r||s?'no-intro':'intro-on');}catch(e){d.classList.add('no-intro');}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Cabañas Parada 8",
  description,
  telephone: PHONE_DISPLAY,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Parada 8",
    addressLocality: "Barra del Chuy",
    addressRegion: "Rocha",
    addressCountry: "UY",
  },
  petsAllowed: true,
  amenityFeature: ["Wifi", "Aire acondicionado", "Parrillero", "Estacionamiento", "Área de juegos"].map(
    (name) => ({ "@type": "LocationFeatureSpecification", name, value: true }),
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-UY" className="bg-background" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${serif.variable} ${figtree.variable} font-sans`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
