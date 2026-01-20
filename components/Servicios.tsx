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
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] },
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.0, ease: [0.6, -0.05, 0.01, 0.99] },
};

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
  const generalAmenities = () => [
    ComodidadIcon.sommier,
    ComodidadIcon.aire,
    ComodidadIcon.cocina,
    { icon: Utensils, label: "Microondas" },
    ComodidadIcon.tv,
    ComodidadIcon.wifi,
    ComodidadIcon.juegos,
  ];

  const serviciosIncluidos = () => [
    ComodidadIcon.estacionamiento,
    ComodidadIcon.parrillero,
    { icon: Tv, label: "Cable + Netflix" },
  ];

  return (
    <motion.section
      className="w-full py-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="container mx-auto space-y-10 px-4">
        <motion.div
          variants={staggerContainer}
          className="grid gap-10 md:grid-cols-2"
        >
          <motion.div variants={slideInLeft} className="space-y-4">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Comodidades generales
            </h3>
            <motion.ul
              variants={staggerContainer}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {generalAmenities.map((item, index) => (
                <motion.li
                  key={item.label}
                  variants={{
                    initial: { opacity: 0, x: -20 },
                    animate: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.2 },
                    },
                  }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-3 rounded-lg border bg-white p-3"
                >
                  <item.icon className="h-5 w-5 text-teal-700" />
                  <span className="text-sm">{item.label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div variants={slideInRight} className="space-y-4">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Servicios incluidos
            </h3>
            <motion.ul
              variants={staggerContainer}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {serviciosIncluidos.map((item, index) => (
                <motion.li
                  key={item.label}
                  variants={{
                    initial: { opacity: 0, x: 20 },
                    animate: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.2 },
                    },
                  }}
                  whileHover={{ scale: 1.02, x: -4 }}
                  className="flex items-center gap-3 rounded-lg border bg-white p-3"
                >
                  <item.icon className="h-5 w-5 text-teal-700" />
                  <span className="text-sm">{item.label}</span>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  initial: { opacity: 0, x: 20 },
                  animate: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 3 * 0.2 },
                  },
                }}
                whileHover={{ scale: 1.02, x: -4 }}
                className="flex items-center gap-3 rounded-lg border bg-white p-3"
              >
                <Dog className="h-5 w-5 text-teal-700" />
                <span className="text-sm">Política: se aceptan mascotas</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
        <motion.div variants={scaleIn}>
          <Card className="border-teal-200 bg-teal-50">
            <CardContent className="flex flex-wrap items-center gap-4 p-4 sm:p-6">
              <Dog className="h-6 w-6 text-teal-800" />
              <div className="text-sm sm:text-base">
                Amantes de las mascotas: son bienvenidas. Avísanos al momento de
                reservar para coordinar mejor tu estadía.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
