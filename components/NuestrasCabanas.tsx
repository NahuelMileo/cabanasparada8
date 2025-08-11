import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import foto from "../assets/hero.jpg";

type Cabin = {
  id: string;
  nombre: string;
  capacidad: string;
  portada: StaticImageData;
  imagenes: string[];
  comodidades: string[];
};

const cabanas: Cabin[] = [
  {
    id: "blanca",
    nombre: "Blanca",
    capacidad: "4 personas",
    portada: foto,
    imagenes: [
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
    ],
    comodidades: ["Sommier", "Aire acondicionado", "Smart TV", "Wifi"],
  },
  {
    id: "bordo",
    nombre: "Bordó",
    capacidad: "4 personas",
    portada: foto,
    imagenes: [
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
    ],
    comodidades: ["Sommier", "Aire acondicionado", "Parrillero", "Wifi"],
  },
  {
    id: "medio",
    nombre: "Medio",
    capacidad: "4-6 personas",
    portada: foto,
    imagenes: [
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
    ],
    comodidades: ["Hasta 6 huéspedes", "Smart TV", "Cocina equipada", "Wifi"],
  },
  {
    id: "calle",
    nombre: "Calle",
    capacidad: "4-6 personas",
    portada: foto,
    imagenes: [
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
      "/placeholder.svg?height=900&width=1200",
    ],
    comodidades: [
      "Hasta 6 huéspedes",
      "Aire acondicionado",
      "Parrillero",
      "Wifi",
    ],
  },
];

function CabanaCard({ cabana }: { cabana: Cabin }) {
  const { nombre, capacidad, portada, comodidades, imagenes } = cabana;

  return (
    <Card className="overflow-hidden">
      <div className="relative h-56 w-full sm:h-64">
        <Image
          src={portada || "/placeholder.svg"}
          alt={`Cabaña ${nombre} - exterior`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center justify-between">
          <span className="text-xl">Cabaña {nombre}</span>
          <span className="text-muted-foreground text-sm font-normal">
            {capacidad}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="text-muted-foreground grid grid-cols-2 gap-2 text-sm">
          {comodidades.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
              {item}
            </li>
          ))}
        </ul>
        <Button className="w-full">Ver fotos</Button>
      </CardContent>
    </Card>
  );
}

export default function Page() {
  return (
    <section id="cabanas" className="bg-muted/30 w-full py-16">
      <div className="container mx-auto space-y-8 px-4">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Nuestras cabañas
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Cabañas cómodas y equipadas para 4 a 6 personas, ideales para
            descansar y disfrutar del mar.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cabanas.map((cab) => (
            <CabanaCard key={cab.id} cabana={cab} />
          ))}
        </div>
      </div>
    </section>
  );
}
