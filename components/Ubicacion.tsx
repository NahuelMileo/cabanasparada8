import { MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

export default function Page() {
  const WHATSAPP_NUMBER = "59898976924";
  const WHATSAPP_TEXT =
    "Hola, me gustaría consultar disponibilidad y precios de Cabañas Parada 8. ¿Me podrás informar? Gracias.";

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

  return (
    <section id="ubicacion" className="bg-muted/30 w-full py-16">
      <div className="container mx-auto space-y-8 px-4">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ubicación y alrededores
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Estamos a media cuadra de la playa, a dos cuadras del centro con
            restaurantes y supermercados, y a tres cuadras del parque acuático.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="order-2 space-y-4 md:order-1">
            <h3 className="text-lg font-semibold">Cómo llegar</h3>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-teal-700" />
                Parada 8, Barra del Chuy, Uruguay
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-teal-700" />
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:underline">
                  +598 98976924
                </a>
              </li>
            </ul>
            <div>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escribir por WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div className="order-1 overflow-hidden rounded-xl border md:order-2">
            <div className="relative h-[320px] w-full sm:h-[420px]">
              <iframe
                title="Mapa - Cabañas Parada 8"
                src="https://www.google.com/maps?q=Parada+8,+Barra+del+Chuy,+Uruguay&output=embed"
                loading="lazy"
                className="h-full w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
