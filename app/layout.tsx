import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cabañas Parada 8 | Alquileres en Barra del Chuy, Uruguay",
  description:
    "Cabañas Parada 8 en Barra del Chuy, Uruguay. Alquileres por día/semana, ideal para familias y parejas. Consultá disponibilidad y precios por WhatsApp.",
  openGraph: {
    title: "Cabañas Parada 8 | Barra del Chuy, Uruguay",
    description:
      "Alquiler de cabañas en Barra del Chuy. Fotos, ubicación y contacto directo por WhatsApp.",
    url: "/",
    siteName: "Cabañas Parada 8",
    locale: "es_UY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
