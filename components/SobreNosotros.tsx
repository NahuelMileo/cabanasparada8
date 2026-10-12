import Image from "next/image";
import { Heart, MapPin, Users } from "lucide-react";
import foto from "../public/hero.jpg";
import Words from "./motion/Words";

const features = [
  {
    icon: Heart,
    title: "Atención familiar",
    description: "Trato cercano y personalizado desde hace más de dos décadas.",
  },
  {
    icon: MapPin,
    title: "Ubicación privilegiada",
    description: "A media cuadra de la playa y cerca de todos los servicios.",
  },
  {
    icon: Users,
    title: "Para todos",
    description: "Espacios ideales para parejas, familias y grupos de amigos.",
  },
];

export default function SobreNosotros() {
  return (
    <section id="sobre" className="py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative">
          <div data-clip className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src={foto}
              alt="Casa bordó con chimenea blanca sobre el pasto"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-white px-6 py-4 shadow-xl md:left-10">
            <span className="font-display block text-5xl leading-none font-extrabold text-bordo">
              <span data-count="20">20</span>+
            </span>
            <span className="text-sm text-muted-foreground">años de experiencia</span>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-5">
            <span data-fade className="block text-sm font-semibold text-bordo">
              Nuestra historia
            </span>
            <h2
              data-words
              className="font-display text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.92] font-extrabold tracking-tight"
            >
              <Words text="Un refugio junto al mar" />
            </h2>
            <p data-fade className="text-lg leading-relaxed text-muted-foreground">
              Desde hace más de 20 años recibimos a parejas, familias y grupos en
              un ambiente cálido y familiar. Nuestra atención cercana hace que te
              sientas como en casa desde el primer día.
            </p>
            <p data-fade className="text-lg leading-relaxed text-muted-foreground">
              Estamos a media cuadra de la playa, a dos cuadras del centro con
              restaurantes y supermercados, y a tres cuadras del parque acuático.
            </p>
          </div>

          <div data-stagger className="grid gap-6 sm:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bordo text-white">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
