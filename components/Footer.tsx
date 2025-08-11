import Link from "next/link";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Separator } from "./ui/separator";

export default function Page() {
  const WHATSAPP_NUMBER = "59898976924";
  const WHATSAPP_TEXT =
    "Hola, me gustaría consultar disponibilidad y precios de Cabañas Parada 8. ¿Me podrás informar? Gracias.";
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_TEXT,
  )}`;

  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto grid items-center gap-4 px-4 py-6 sm:grid-cols-2">
        <div className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Cabañas Parada 8. Todos los derechos
          reservados.
        </div>
        <div className="flex items-center justify-start gap-3 sm:justify-end">
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            aria-label="Facebook"
            className="hover:bg-muted rounded-md p-1"
          >
            <SiFacebook size={20} aria-hidden="true" />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            aria-label="Instagram"
            className="hover:bg-muted rounded-md p-1"
          >
            <SiInstagram size={20} aria-hidden="true" />
          </Link>
          <Separator orientation="vertical" className="h-5" />
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="text-sm hover:underline"
          >
            +598 98976924
          </a>
        </div>
      </div>
    </footer>
  );
}
