"use client";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

import foto from "../public/hero.jpg"; // Adjust the path as necessary

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

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.0, ease: [0.6, -0.05, 0.01, 0.99] },
};

type Cabin = {
  id: string;
  nombre: string;
  capacidad: string;
  portada: StaticImageData;
  imagenes: StaticImageData[];
  comodidades: string[];
};

const cabanas: Cabin[] = [
  {
    id: "calle",
    nombre: "Calle",
    capacidad: "4-6 personas",
    portada: foto,
    imagenes: [foto, foto, foto],
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
    portada: foto,
    imagenes: [foto, foto, foto, foto],
    comodidades: ["Hasta 6 huéspedes", "Smart TV", "Cocina equipada", "Wifi"],
  },
  {
    id: "bordo",
    nombre: "Casa Bordó",
    capacidad: "4 personas",
    portada: foto,
    imagenes: [foto, foto],
    comodidades: ["Sommier", "Aire acondicionado", "Parrillero", "Wifi"],
  },
  {
    id: "blanca",
    nombre: "Casa Blanca",
    capacidad: "4 personas",
    portada: foto,
    imagenes: [foto, foto, foto],
    comodidades: ["Sommier", "Aire acondicionado", "Smart TV", "Wifi"],
  },
];

function CabanaCard({ cabana }: { cabana: Cabin }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -8, transition: { duration: 0.4 } }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden">
        <motion.div
          className="relative h-56 w-full sm:h-64"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={foto || "/placeholder.svg"}
            alt={`Cabaña ${cabana.nombre} - exterior`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </motion.div>
        <CardHeader className="space-y-1">
          <CardTitle className="flex items-center justify-between">
            <span className="text-xl">Cabaña {cabana.nombre}</span>
            <span className="text-muted-foreground text-sm font-normal">
              {cabana.capacidad}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="text-muted-foreground grid grid-cols-2 gap-2 text-sm">
            {cabana.comodidades.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                {item}
              </li>
            ))}
          </ul>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <GalleryDialog
              title={`Cabaña ${cabana.nombre}`}
              images={cabana.imagenes}
              trigger={<Button className="w-full">Ver fotos</Button>}
            />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Page() {
  return (
    <motion.section
      id="cabanas"
      className="bg-muted/30 w-full py-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="container mx-auto space-y-8 px-4">
        <motion.div variants={fadeInUp} className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Nuestras cabañas
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Cabañas cómodas y equipadas para 4 a 6 personas, ideales para
            descansar y disfrutar del mar.
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
  images: StaticImageData[];
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
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Image
              src={images[index] || "/placeholder.svg"}
              alt={`${title} - imagen ${index + 1}`}
              width={800}
              height={500}
              className="h-auto w-full rounded-lg object-cover"
            />
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={prev}
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={next}
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
          {images.length > 1 && (
            <div className="flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-3 w-3 cursor-pointer rounded-full border-none transition-colors ${
                    i === index
                      ? "bg-teal-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir a la imagen ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
