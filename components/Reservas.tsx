import { MapPin, Wifi, Dog, Flame } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function Page() {
  const WHATSAPP_NUMBER = "59898976924";
  const WHATSAPP_TEXT =
    "Hola, me gustaría consultar disponibilidad y precios de Cabañas Parada 8. ¿Me podrás informar? Gracias.";
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_TEXT,
  )}`;

  return (
    <section id="reservas" className="w-full py-16">
      <div className="container mx-auto grid items-start gap-8 px-4 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Reservas
          </h2>
          <p className="text-muted-foreground">
            Los precios varían según temporada. Consultá disponibilidad y
            tarifas por WhatsApp o teléfono. Para confirmar la reserva se
            requiere una seña.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
              Métodos de pago: efectivo y transferencia.
            </li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:+${WHATSAPP_NUMBER}`}>Llamar</a>
            </Button>
          </div>
        </div>
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle>Información rápida</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Parada 8, Barra del Chuy
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="h-4 w-4" />
              Wifi incluido
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4" />
              Parrillero y estacionamiento
            </div>
            <div className="flex items-center gap-2">
              <Dog className="h-4 w-4" />
              Se aceptan mascotas
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
