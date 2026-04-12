"use client";

import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import foto from "../public/patio/1.webp";
import { motion, useScroll, useTransform } from "framer-motion";

const WHATSAPP_NUMBER = "59898976924";
const WHATSAPP_TEXT =
  "Hola, me gustaría consultar disponibilidad y precios de Cabañas Parada 8. ¿Me podrás informar? Gracias.";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={foto}
          alt="Cabañas Parada 8 frente a la costa"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="mx-auto max-w-3xl text-center text-white"
          >
            {/* Location Badge */}
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm"
            >
              <MapPin className="h-4 w-4" />
              <span className="font-medium">Barra del Chuy, Uruguay</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Tu descanso junto al mar
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg"
            >
              A media cuadra de la playa, con atención familiar y todo lo que
              necesitás para disfrutar tus vacaciones.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm"
            >
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl font-semibold">20+</span>
                <span className="mt-1 text-white/70">Años de experiencia</span>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl font-semibold">5</span>
                <span className="mt-1 text-white/70">Cabañas equipadas</span>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl font-semibold">50m</span>
                <span className="mt-1 text-white/70">De la playa</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="group bg-white px-8 text-foreground hover:bg-white/90"
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar disponibilidad
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent px-8 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#cabanas">Explorar cabañas</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-widest">Descubrir</span>
          <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
