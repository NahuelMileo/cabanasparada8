import {
  Bed,
  Car,
  Dog,
  Flame,
  Gamepad2,
  Snowflake,
  Tv,
  Utensils,
  Wifi,
} from "lucide-react";
import { useMemo } from "react";
import { Card, CardContent } from "./ui/card";

export default function Page() {
  const ComodidadIcon: Record<
    string,
    { icon: React.ComponentType<{ className?: string }>; label: string }
  > = {
    sommier: { icon: Bed, label: "Sommier" },
    aire: { icon: Snowflake, label: "Aire acondicionado" },
    cocina: { icon: Utensils, label: "Cocina" },
    microondas: { icon: Utensils, label: "Microondas" },
    tv: { icon: Tv, label: "Smart TV" },
    wifi: { icon: Wifi, label: "Wifi" },
    juegos: { icon: Gamepad2, label: "Juegos para niños afuera" },
    estacionamiento: { icon: Car, label: "Estacionamiento" },
    parrillero: { icon: Flame, label: "Parrillero" },
    mascotas: { icon: Dog, label: "Se aceptan mascotas" },
  };
  const generalAmenities = useMemo(
    () => [
      ComodidadIcon.sommier,
      ComodidadIcon.aire,
      ComodidadIcon.cocina,
      { icon: Utensils, label: "Microondas" },
      ComodidadIcon.tv,
      ComodidadIcon.wifi,
      ComodidadIcon.juegos,
    ],
    [],
  );

  const serviciosIncluidos = useMemo(
    () => [
      ComodidadIcon.estacionamiento,
      ComodidadIcon.parrillero,
      { icon: Tv, label: "Cable + Netflix" },
    ],
    [],
  );

  return (
    <section className="w-full py-16">
      <div className="container mx-auto space-y-10 px-4">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Comodidades generales
            </h3>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {generalAmenities.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg border bg-white p-3"
                >
                  <item.icon className="h-5 w-5 text-teal-700" />
                  <span className="text-sm">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Servicios incluidos
            </h3>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {serviciosIncluidos.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg border bg-white p-3"
                >
                  <item.icon className="h-5 w-5 text-teal-700" />
                  <span className="text-sm">{item.label}</span>
                </li>
              ))}
              <li className="flex items-center gap-3 rounded-lg border bg-white p-3">
                <Dog className="h-5 w-5 text-teal-700" />
                <span className="text-sm">Política: se aceptan mascotas</span>
              </li>
            </ul>
          </div>
        </div>
        <Card className="border-teal-200 bg-teal-50">
          <CardContent className="flex flex-wrap items-center gap-4 p-4 sm:p-6">
            <Dog className="h-6 w-6 text-teal-800" />
            <div className="text-sm sm:text-base">
              Amantes de las mascotas: son bienvenidas. Avísanos al momento de
              reservar para coordinar mejor tu estadía.
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
