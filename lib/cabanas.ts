export type Cabin = {
  id: string;
  nombre: string;
  capacidad: string;
  maxPersonas: number;
  portada: string;
  imagenes: string[];
  comodidades: string[];
};

const img = (cab: string, file: string) => `/${cab}/${file}`;

export const cabanas: Cabin[] = [
  {
    id: "apartamento",
    nombre: "Apartamento",
    capacidad: "2 personas",
    maxPersonas: 2,
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
    maxPersonas: 4,
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
    maxPersonas: 4,
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
    capacidad: "4 a 6 personas",
    maxPersonas: 6,
    portada: img("calle", "afuera.webp"),
    imagenes: [
      img("calle", "afuera.webp"),
      img("calle", "sala.webp"),
      img("calle", "sala_2.webp"),
      img("calle", "cocina.webp"),
      img("calle", "parrilla.webp"),
      img("calle", "dormitorio.webp"),
      img("calle", "dormitorio_2.webp"),
      img("calle", "cuarto.webp"),
      img("calle", "bano.webp"),
    ],
    comodidades: ["Hasta 6 huéspedes", "Aire acondicionado", "Parrillero", "Wifi"],
  },
  {
    id: "medio",
    nombre: "Medio",
    capacidad: "4 a 6 personas",
    maxPersonas: 6,
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
