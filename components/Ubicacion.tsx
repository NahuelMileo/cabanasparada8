"use client";
import { MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] },
};

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
  const telefono = "+598 98 976 924";
  const WHATSAPP_NUMBER = "59898976924";
  const WHATSAPP_TEXT =
    "Hola, me gustaría consultar disponibilidad y precios de Cabañas Parada 8. ¿Me podrás informar? Gracias.";

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

  return (
    <motion.section
      id="ubicacion"
      className="bg-muted/30 w-full py-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="container mx-auto space-y-8 px-4">
        <motion.div variants={fadeInUp} className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ubicación y alrededores
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Estamos a media cuadra de la playa, a dos cuadras del centro con
            restaurantes y supermercados, y a tres cuadras del parque acuático.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            variants={slideInLeft}
            className="order-2 space-y-4 md:order-1"
          >
            <h3 className="text-lg font-semibold">Cómo llegar</h3>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-teal-700" />
                Parada 8, Barra del Chuy, Uruguay
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-teal-700" />
                <a href={`tel:+${telefono}`} className="hover:underline">
                  {telefono}
                </a>
              </li>
            </ul>
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Escribir por WhatsApp
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={slideInRight}
            className="order-1 overflow-hidden rounded-xl border md:order-2"
          >
            <div className="relative h-[320px] w-full sm:h-[420px]">
              <iframe
                title="Mapa - Cabañas Parada 8"
                src="https://www.google.com/maps?q=Parada+8,+Barra+del+Chuy,+Uruguay&output=embed"
                loading="lazy"
                className="h-full w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
