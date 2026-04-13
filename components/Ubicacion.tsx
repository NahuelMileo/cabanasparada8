"use client";

import { MapPin, Navigation, Palmtree, ShoppingBag, Waves } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const nearbyPlaces = [
  {
    icon: Waves,
    name: "Playa",
    distance: "50 metros",
    description: "A media cuadra caminando",
  },
  {
    icon: ShoppingBag,
    name: "Centro comercial",
    distance: "200 metros",
    description: "Restaurantes y supermercados",
  },
  {
    icon: Palmtree,
    name: "Parque acuático",
    distance: "300 metros",
    description: "A tres cuadras",
  },
];

export default function Ubicacion() {
  return (
    <motion.section
      id="ubicacion"
      className="w-full py-20 lg:py-28"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto mb-12 max-w-2xl text-center lg:mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Ubicación
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Ubicación privilegiada
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            En el corazón de Barra del Chuy, a pasos de la playa y cerca de todo
            lo que necesitás.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Map */}
          <motion.div
            variants={fadeInUp}
            className="order-2 overflow-hidden rounded-2xl border border-border lg:order-1"
          >
            <div className="relative h-[400px] w-full lg:h-full lg:min-h-[500px]">
              <iframe
                title="Mapa - Cabañas Parada 8"
                src="https://www.google.com/maps?q=Parada+8,+Barra+del+Chuy,+Uruguay&output=embed"
                loading="lazy"
                className="h-full w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            variants={staggerContainer}
            className="order-1 space-y-8 lg:order-2"
          >
            {/* Address Card */}
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Dirección
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Parada 8, Barra del Chuy
                  </p>
                  <p className="text-muted-foreground">Rocha, Uruguay</p>
                  <a
                    href="https://www.google.com/maps?q=Parada+8,+Barra+del+Chuy,+Uruguay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Navigation className="h-4 w-4" />
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Nearby Places */}
            <motion.div variants={fadeInUp}>
              <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">
                Qué hay cerca
              </h3>
              <div className="space-y-4">
                {nearbyPlaces.map((place) => (
                  <div
                    key={place.name}
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/20"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <place.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-foreground">
                          {place.name}
                        </h4>
                        <span className="text-sm font-medium text-primary">
                          {place.distance}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {place.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl bg-muted/50 p-6"
            >
              <h3 className="mb-3 font-serif text-lg font-semibold text-foreground">
                Cómo llegar
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Desde Montevideo, tomá la Ruta 9 hacia el este. Pasando La
                Coronilla, continuá hasta Barra del Chuy. Las cabañas están
                ubicadas en la Parada 8, a media cuadra de la playa. El viaje
                dura aproximadamente 3 horas.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
