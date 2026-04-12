"use client";

import { MapPin, Phone, MessageCircle, CreditCard, Clock } from "lucide-react";
import { Button } from "./ui/button";
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

const WHATSAPP_NUMBER = "59898976924";
const WHATSAPP_TEXT =
  "Hola, me gustaría consultar disponibilidad y precios de Cabañas Parada 8. ¿Me podrás informar? Gracias.";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

const infoItems = [
  {
    icon: Clock,
    title: "Precios por temporada",
    description: "Las tarifas varían según la época del año",
  },
  {
    icon: CreditCard,
    title: "Formas de pago",
    description: "Efectivo y transferencia bancaria",
  },
  {
    icon: MessageCircle,
    title: "Seña para confirmar",
    description: "Se requiere seña para confirmar la reserva",
  },
];

export default function Reservas() {
  return (
    <motion.section
      id="reservas"
      className="w-full bg-muted/50 py-20 lg:py-28"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 text-center lg:mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Reservas
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Reservá tu estadía
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Consultá disponibilidad y precios directamente por WhatsApp o
              teléfono. Te respondemos a la brevedad.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            variants={staggerContainer}
            className="mb-12 grid gap-4 sm:grid-cols-3"
          >
            {infoItems.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:p-12"
          >
            <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
              ¿Listo para tu próxima escapada?
            </h3>
            <p className="mx-auto mt-3 max-w-md text-primary-foreground/90">
              Escribinos por WhatsApp y te enviamos toda la información que
              necesitás para planificar tu estadía.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white px-8 text-primary hover:bg-white/90"
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Escribir por WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent px-8 text-white hover:bg-white/10 hover:text-white"
              >
                <a href={`tel:+${WHATSAPP_NUMBER}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar ahora
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+598 98 976 924</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Parada 8, Barra del Chuy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
