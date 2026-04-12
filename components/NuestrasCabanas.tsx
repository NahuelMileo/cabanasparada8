"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ChevronLeft, ChevronRight, Users, Expand } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

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

type Cabin = {
  id: string;
  nombre: string;
  capacidad: string;
  portada: string;
  imagenes: string[];
  comodidades: string[];
};

const img = (cab: string, file: string) => `/${cab}/${file}`;

const cabanas: Cabin[] = [
  {
    id: "apartamento",
    nombre: "Apartamento",
    capacidad: "2 personas",
    portada: img("apartamento", "sala_2.webp"),
    imagenes: [
      img("apartamento", "sala.webp"),
      img("apartamento", "sala_2.webp"),
      img("apartamento", "cocina.webp"),
      img("apartamento", "dormitorio.webp"),
      img("apartamento", "bano.webp"),
    ],
    comodidades: ["Sommier", "Aire acondicionado", "Smart TV", "Wifi"],
  },
  {
    id: "bordo",
    nombre: "Casa Bordó",
    capacidad: "4 personas",
    portada: img("bordo", "sala.webp"),
    imagenes: [
      img("bordo", "sala.webp"),
      img("bordo", "sala_2.webp"),
      img("bordo", "sala_3.webp"),
      img("bordo", "cocina.webp"),
      img("bordo", "cocina_2.webp"),
      img("bordo", "dormitorio.webp"),
      img("bordo", "dormitorio_2.webp"),
      img("bordo", "bano.webp"),
      img("bordo", "bano_2.webp"),
    ],
    comodidades: ["Sommier", "Aire acondicionado", "Parrillero", "Wifi"],
  },
  {
    id: "blanca",
    nombre: "Casa Blanca",
    capacidad: "4 personas",
    portada: img("blanca", "parrilla.webp"),
    imagenes: [
      img("blanca", "sala.webp"),
      img("blanca", "cocina.webp"),
      img("blanca", "dormitorio.webp"),
      img("blanca", "cuarto.webp"),
      img("blanca", "bano.webp"),
      img("blanca", "parrilla.webp"),
      img("blanca", "estacionamiento.webp"),
    ],
    comodidades: ["Sommier", "Aire acondicionado", "Smart TV", "Wifi"],
  },
  {
    id: "calle",
    nombre: "Calle",
    capacidad: "4-6 personas",
    portada: img("calle", "afuera.webp"),
    imagenes: [
      img("calle", "sala.webp"),
      img("calle", "sala_2.webp"),
      img("calle", "cocina.webp"),
      img("calle", "parrilla.webp"),
      img("calle", "dormitorio.webp"),
      img("calle", "dormitorio_2.webp"),
      img("calle", "cuarto.webp"),
      img("calle", "bano.webp"),
    ],
    comodidades: [
      "Hasta 6 huéspedes",
      "Aire acondicionado",
      "Parrillero",
      "Wifi",
    ],
  },
  {
    id: "medio",
    nombre: "Medio",
    capacidad: "4-6 personas",
    portada: img("medio", "sala.webp"),
    imagenes: [
      img("medio", "sala.webp"),
      img("medio", "cocina.webp"),
      img("medio", "comedor.webp"),
      img("medio", "dormitorio.webp"),
      img("medio", "dormitorio_2.webp"),
      img("medio", "cuarto.webp"),
      img("medio", "bano.webp"),
    ],
    comodidades: ["Hasta 6 huéspedes", "Smart TV", "Cocina equipada", "Wifi"],
  },
];

function CabanaCard({ cabana }: { cabana: Cabin }) {
  return (
    <motion.div variants={fadeInUp} className="group">
      <div className="relative overflow-hidden rounded-2xl bg-card">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={cabana.portada}
            alt={`${cabana.nombre} - exterior`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

          {/* Gallery Button */}
          <GalleryDialog
            title={cabana.nombre}
            images={cabana.imagenes}
            trigger={
              <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white group-hover:opacity-100">
                <Expand className="h-4 w-4 text-foreground" />
              </button>
            }
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {cabana.nombre}
              </h3>
              <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{cabana.capacidad}</span>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2">
            {cabana.comodidades.map((item) => (
              <span
                key={item}
                className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>

          {/* View Photos Button */}
          <GalleryDialog
            title={cabana.nombre}
            images={cabana.imagenes}
            trigger={
              <Button
                variant="outline"
                className="mt-5 w-full border-primary/20 text-primary hover:bg-primary/5 hover:text-primary"
              >
                Ver galería de fotos
              </Button>
            }
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function NuestrasCabanas() {
  return (
    <motion.section
      id="cabanas"
      className="w-full bg-muted/50 py-20 lg:py-28"
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
            Alojamiento
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Nuestras cabañas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Cabañas cómodas y completamente equipadas, ideales para descansar y
            disfrutar del mar en familia o con amigos.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cabanas.map((cab) => (
            <CabanaCard key={cab.id} cabana={cab} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function GalleryDialog({
  images,
  title,
  trigger,
}: {
  images: string[];
  title: string;
  trigger: React.ReactNode;
}) {
  const [index, setIndex] = React.useState(0);

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  function goTo(i: number) {
    setIndex(i);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl bg-card">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={images[index] || "/placeholder.svg"}
              alt={`${title} - imagen ${index + 1}`}
              width={800}
              height={500}
              className="aspect-[4/3] h-auto w-full rounded-xl object-cover"
            />
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-lg backdrop-blur-sm hover:bg-white"
                  onClick={prev}
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-lg backdrop-blur-sm hover:bg-white"
                  onClick={next}
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur-sm">
              {index + 1} / {images.length}
            </div>
          </div>
          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 overflow-x-auto py-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg transition-all ${
                    i === index
                      ? "ring-2 ring-primary ring-offset-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Ir a la imagen ${i + 1}`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
