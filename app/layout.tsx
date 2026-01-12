import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
