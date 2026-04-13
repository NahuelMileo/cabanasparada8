"use client";

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
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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
    <motion.section
      id="servicios"
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
            Comodidades
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Todo lo que necesitás
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Equipadas con todo lo necesario para que disfrutes de unas
            vacaciones cómodas y sin preocupaciones.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={staggerContainer}
          className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {amenities.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-sm"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Highlights */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto mt-12 max-w-2xl rounded-2xl bg-muted/50 p-8"
        >
          <h3 className="mb-6 text-center font-serif text-xl font-semibold text-foreground">
            También incluido
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pet Friendly Banner */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-primary/20 bg-primary/5"
        >
          <div className="flex items-center gap-6 p-6 sm:p-8">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Dog className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-foreground">
                Mascotas bienvenidas
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Amamos a las mascotas tanto como vos. Avisanos al momento de
                reservar para coordinar mejor tu estadía.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
