"use client";
import { MapPin, ChevronRight, Wifi, Car, Flame } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";
import foto from "../public/patio/1.webp";
import { motion, useScroll, useTransform } from "framer-motion";

const WHATSAPP_NUMBER = "59898976924";
const WHATSAPP_TEXT =
  "Hola, me gustaría consultar disponibilidad y precios de Cabañas Parada 8. ¿Me podrás informar? Gracias.";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT,
)}`;

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Page() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 300]);

  return (
    <section className="relative">
      <div className="relative min-h-[70vh] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src={foto}
            alt="Cabañas Parada 8 frente a la costa"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="max-w-2xl text-white"
            >
              <motion.div
                variants={fadeInUp}
                className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur"
              >
                <MapPin className="h-4 w-4" />
                <span>Parada 8 • Barra del Chuy, Uruguay</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-bold tracking-tight sm:text-5xl"
              >
                Cabañas Parada 8
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-3 text-base text-white/90 sm:text-lg"
              >
                Descanso a pasos del mar, con atención familiar y todo lo que
                necesitás para relajarte.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="mt-5 flex flex-wrap gap-2"
              >
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
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
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
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="bg-white/90 text-gray-900 hover:bg-white"
                  >
                    <a href="#cabanas" className="scroll-smooth">
                      Ver cabañas
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Quick trust row */}
              <motion.div
                variants={fadeInUp}
                className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/90"
              >
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
