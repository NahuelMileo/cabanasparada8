"use client";
import { Badge } from "./ui/badge";
import Image from "next/image";
import foto from "../public/hero.jpg";
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

export default function Page() {
  return (
    <motion.section
      id="sobre"
      className="w-full py-14"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2">
        <motion.div
          variants={slideInLeft}
          className="relative overflow-hidden rounded-xl"
        >
          <Image
            src={foto}
            alt="Atención familiar en Cabañas Parada 8"
            width={1100}
            height={800}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div variants={slideInRight} className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Sobre nosotros
          </h2>
          <p className="text-muted-foreground">
            Desde hace 20 años recibimos a parejas, familias y grupos en un
            ambiente cálido y familiar. Nuestra atención cercana y personalizada
            hace que te sientas como en casa desde el primer día.
          </p>
          <p className="text-muted-foreground">
            Ubicadas en una zona privilegiada: a media cuadra de la playa, a dos
            cuadras del centro (restaurantes y supermercados) y a tres cuadras
            del parque acuático.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge
              variant="secondary"
              className="bg-teal-50 text-teal-800 hover:bg-teal-100"
            >
              20 años de trayectoria
            </Badge>
            <Badge
              variant="secondary"
              className="bg-cyan-50 text-cyan-800 hover:bg-cyan-100"
            >
              Atención familiar
            </Badge>
            <Badge
              variant="secondary"
              className="bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
            >
              Ubicación privilegiada
            </Badge>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
