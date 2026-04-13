"use client";

import Image from "next/image";
import foto from "../public/hero.jpg";
import { motion } from "framer-motion";
import { Heart, MapPin, Users } from "lucide-react";

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

const features = [
  {
    icon: Heart,
    title: "Atención familiar",
    description: "Trato cercano y personalizado desde hace más de dos décadas",
  },
  {
    icon: MapPin,
    title: "Ubicación privilegiada",
    description: "A media cuadra de la playa y cerca de todos los servicios",
  },
  {
    icon: Users,
    title: "Para todos",
    description: "Espacios ideales para parejas, familias y grupos de amigos",
  },
];

export default function SobreNosotros() {
  return (
    <motion.section
      id="sobre"
      className="w-full py-20 lg:py-28"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-2xl"
          >
            <Image
              src={foto}
              alt="Atención familiar en Cabañas Parada 8"
              width={700}
              height={500}
              className="h-auto w-full object-cover"
            />
            {/* Experience Badge */}
            <div className="absolute bottom-6 left-6 rounded-xl bg-white/95 px-6 py-4 shadow-lg backdrop-blur-sm">
              <span className="block font-serif text-3xl font-semibold text-primary">
                20+
              </span>
              <span className="text-sm text-muted-foreground">
                Años de experiencia
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={staggerContainer} className="space-y-8">
            <motion.div variants={fadeInUp} className="space-y-4">
              <span className="text-sm font-medium uppercase tracking-widest text-primary">
                Nuestra historia
              </span>
              <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Un refugio junto al mar
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                Desde hace más de 20 años recibimos a parejas, familias y grupos
                en un ambiente cálido y familiar. Nuestra atención cercana y
                personalizada hace que te sientas como en casa desde el primer
                día.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                Ubicadas en una zona privilegiada: a media cuadra de la playa, a
                dos cuadras del centro con restaurantes y supermercados, y a
                tres cuadras del parque acuático.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-3"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="space-y-3"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
