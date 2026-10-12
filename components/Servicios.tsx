import Image from "next/image";
import { Bed, Car, Dog, Flame, Gamepad2, Snowflake, Tv, Utensils, Wifi, Check } from "lucide-react";
import patio from "../public/patio/1.webp";
import Words from "./motion/Words";

const amenities = [
  { icon: Bed, label: "Sommier de calidad" },
  { icon: Snowflake, label: "Aire acondicionado" },
  { icon: Utensils, label: "Cocina equipada" },
  { icon: Tv, label: "Smart TV" },
  { icon: Wifi, label: "Wifi gratuito" },
  { icon: Gamepad2, label: "Área de juegos" },
  { icon: Car, label: "Estacionamiento" },
  { icon: Flame, label: "Parrillero" },
];

const highlights = [
  "Ropa de cama y toallas incluidas",
  "Cable + Netflix disponible",
  "Limpieza antes del ingreso",
  "Check-in flexible",
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 lg:mb-20">
          <div className="max-w-2xl">
            <span data-fade className="block text-sm font-semibold text-bordo">
              Comodidades
            </span>
            <h2
              data-words
              className="font-display mt-4 text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.92] font-extrabold tracking-tight"
            >
              <Words text="Todo lo que necesitás" />
            </h2>
          </div>
          <p data-fade className="max-w-sm text-lg text-muted-foreground">
            Equipadas para que disfrutes unas vacaciones cómodas y sin
            preocupaciones.
          </p>
        </div>

        <div data-stagger className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {amenities.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-colors duration-300 hover:bg-bordo hover:text-white md:p-6"
            >
              <item.icon className="h-7 w-7 text-bordo transition-colors duration-300 group-hover:text-white" />
              <span className="font-semibold">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* Área de juegos con foto real del patio */}
          <div className="relative overflow-hidden rounded-3xl bg-noche text-white">
            <div data-clip className="absolute inset-0">
              <Image
                src={patio}
                alt="Patio con hamacas, sube y baja y juegos de madera de colores"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-noche/90 via-noche/30 to-transparent" />
            <div className="relative flex min-h-[22rem] flex-col justify-end p-7 md:p-10">
              <h3 className="font-display text-4xl font-extrabold md:text-5xl">Para los más chicos</h3>
              <p className="mt-2 max-w-md text-white/85">
                Patio con hamacas, sube y baja, tobogán y pérgolas con bancos.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl bg-white p-7 md:p-9">
              <h3 className="font-display text-2xl font-bold">También incluido</h3>
              <ul data-stagger className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-noche text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-5 rounded-3xl bg-white p-7 md:p-9">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted text-bordo">
                <Dog className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold">Mascotas bienvenidas</h3>
                <p className="mt-1 text-muted-foreground">
                  Avisanos al reservar para coordinar mejor tu estadía.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
