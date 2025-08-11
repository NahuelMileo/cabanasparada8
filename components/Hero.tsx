import { MapPin, ChevronRight, Wifi, Car, Flame } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";
import foto from "../assets/hero.png";

const WHATSAPP_NUMBER = "59898976924";
const WHATSAPP_TEXT =
  "Hola, me gustaría consultar disponibilidad y precios de Cabañas Parada 8. ¿Me podrás informar? Gracias.";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT,
)}`;

export default function Page() {
  return (
    <section className="relative">
      <div className="relative min-h-[70vh] w-full overflow-hidden">
        <Image
          src={foto}
          alt="Cabañas Parada 8 frente a la costa"
          fill
          className="object-cover"
          priority
        />
        {/* Softer, beachy overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-white/10 to-transparent" /> */}
        {/* Ambient glow */}
        {/* <div className="pointer-events-none absolute top-10 -right-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl md:top-20 md:-right-10" /> */}

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
                <MapPin className="h-4 w-4" />
                <span>Parada 8 • Barra del Chuy, Uruguay</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Cabañas Parada 8
              </h1>

              <p className="mt-3 text-base text-white/90 sm:text-lg">
                Descanso a pasos del mar, con atención familiar y todo lo que
                necesitás para relajarte.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-teal-50/90 text-teal-900 hover:bg-teal-100"
                >
                  20 años
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-cyan-50/90 text-cyan-900 hover:bg-cyan-100"
                >
                  A 1/2 cuadra de la playa
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-emerald-50/90 text-emerald-900 hover:bg-emerald-100"
                >
                  Mascotas bienvenidas
                </Badge>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar por WhatsApp
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white/90 text-gray-900 hover:bg-white"
                >
                  <a href="#cabanas">Ver cabañas</a>
                </Button>
              </div>

              {/* Quick trust row */}
              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/90">
                <div className="inline-flex items-center gap-2">
                  <Wifi className="h-4 w-4" />
                  Wifi
                </div>
                <div className="inline-flex items-center gap-2">
                  <Flame className="h-4 w-4" />
                  Parrillero
                </div>
                <div className="inline-flex items-center gap-2">
                  <Car className="h-4 w-4" />
                  Estacionamiento
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
