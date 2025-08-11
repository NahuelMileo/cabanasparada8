import { SiFacebook, SiInstagram } from "react-icons/si";
import Link from "next/link";
import { Button } from "./ui/button";

const WHATSAPP_NUMBER = "59898976924";
const WHATSAPP_TEXT =
  "Hola, me gustaría consultar disponibilidad y precios de Cabañas Parada 8. ¿Me podrás informar? Gracias.";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT,
)}`;
export default function Page() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="container mx-auto flex h-14 items-center px-4">
        <Link href="#" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-teal-600 text-white">
            8
          </span>
          <span className="tracking-tight">Cabañas Parada 8</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-6 md:flex">
          <Link
            href="#sobre"
            className="text-sm underline-offset-4 hover:underline"
          >
            Sobre nosotros
          </Link>
          <Link
            href="#cabanas"
            className="text-sm underline-offset-4 hover:underline"
          >
            Cabañas
          </Link>
          <Link
            href="#ubicacion"
            className="text-sm underline-offset-4 hover:underline"
          >
            Ubicación
          </Link>
          <Link
            href="#reservas"
            className="text-sm underline-offset-4 hover:underline"
          >
            Reservas
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:bg-muted rounded-md p-1"
            >
              <SiFacebook size={20} aria-hidden="true" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:bg-muted rounded-md p-1"
            >
              <SiInstagram size={20} aria-hidden="true" />
            </Link>
          </div>
          <Button asChild className="bg-green-600 px-2 hover:bg-green-700">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservar por WhatsApp"
            >
              Reservar por WhatsApp
            </a>
          </Button>
        </nav>
        <div className="ml-auto md:hidden">
          <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
