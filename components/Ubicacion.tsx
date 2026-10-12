"use client";

import { useRef } from "react";
import { MapPin, Navigation, Palmtree, ShoppingBag, Waves, Home } from "lucide-react";
import Words from "./motion/Words";
import { gsap, useGSAP, MOTION_OK } from "@/lib/motion";
import { MAPS_URL } from "@/lib/contact";

const MAX_M = 300;

const nearby = [
  { icon: Waves, name: "Playa", meters: 50, description: "A media cuadra caminando" },
  { icon: ShoppingBag, name: "Centro", meters: 200, description: "Restaurantes y supermercados" },
  { icon: Palmtree, name: "Parque acuático", meters: 300, description: "A tres cuadras" },
];

export default function Ubicacion() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const marks = gsap.utils.toArray<HTMLElement>(".dist-mark");
        marks.forEach((m) => m.classList.remove("on"));
        gsap.fromTo(
          ".dist-fill",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".dist-track",
              start: "top 85%",
              end: "top 35%",
              scrub: 0.6,
              onUpdate: (self) =>
                marks.forEach((m) =>
                  m.classList.toggle("on", self.progress * MAX_M >= Number(m.dataset.m) - 1),
                ),
            },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="ubicacion" ref={root} className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <span data-fade className="block text-sm font-semibold text-bordo">
            Ubicación
          </span>
          <h2
            data-words
            className="font-display mt-4 text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.92] font-extrabold tracking-tight"
          >
            <Words text="Todo a pocos pasos" />
          </h2>
          <p data-fade className="mt-5 text-lg text-muted-foreground">
            En Barra del Chuy, a media cuadra de la playa y cerca de todo lo que
            necesitás.
          </p>
        </div>

        {/* Distancias a escala: 0 a 300 metros */}
        <div className="dist-track relative mb-16 rounded-3xl bg-white px-6 pt-10 pb-8 md:px-12">
          <div className="relative mx-2 h-1.5 rounded-full bg-muted md:mx-8">
            <div className="dist-fill absolute inset-0 origin-left rounded-full bg-bordo" />
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
              <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap text-bordo md:text-sm">
                Cabañas
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bordo text-white shadow-lg">
                <Home className="h-5 w-5" />
              </span>
            </div>
            {nearby.map((p) => (
              <div
                key={p.name}
                data-m={p.meters}
                className="dist-mark on group absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${(p.meters / MAX_M) * 100}%` }}
              >
                <span className="flex h-10 w-10 scale-75 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-300 group-[.on]:scale-100 group-[.on]:bg-bordo group-[.on]:text-white">
                  <p.icon className="h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
          <div className="relative mx-2 mt-10 h-12 md:mx-8">
            {nearby.map((p) => (
              <span
                key={p.name}
                className="absolute -translate-x-1/2 text-center text-xs md:text-sm"
                style={{ left: `${(p.meters / MAX_M) * 100}%` }}
              >
                <span className="font-display block text-lg font-bold md:text-2xl">{p.meters} m</span>
                <span className="block whitespace-nowrap text-muted-foreground">{p.name}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div data-fade className="overflow-hidden rounded-3xl bg-white">
            <iframe
              title="Mapa de Cabañas Parada 8"
              src="https://www.google.com/maps?q=Parada+8,+Barra+del+Chuy,+Uruguay&output=embed"
              loading="lazy"
              className="h-[380px] w-full lg:h-full lg:min-h-[480px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <div data-fade className="rounded-3xl bg-white p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bordo text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold">Dirección</h3>
                  <p className="mt-1 text-muted-foreground">Parada 8, Barra del Chuy</p>
                  <p className="text-muted-foreground">Rocha, Uruguay</p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 font-semibold text-bordo hover:underline"
                  >
                    <Navigation className="h-4 w-4" />
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div data-stagger className="space-y-3">
              {nearby.map((p) => (
                <div key={p.name} className="flex items-center gap-4 rounded-2xl bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-bordo">
                    <p.icon className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-semibold">{p.name}</h4>
                      <span className="font-display text-lg font-bold text-bordo">{p.meters} m</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div data-fade className="rounded-3xl bg-muted p-7">
              <h3 className="font-display text-2xl font-bold">Cómo llegar</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Desde Montevideo, tomá la Ruta 9 hacia el este. Pasando La
                Coronilla, seguí hasta Barra del Chuy. Las cabañas están en la
                Parada 8, a media cuadra de la playa. El viaje dura
                aproximadamente 3 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
