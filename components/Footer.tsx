"use client";

import Link from "next/link";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "59898976924";
const WHATSAPP_TEXT =
  "Hola, me gustaría consultar disponibilidad y precios de Cabañas Parada 8. ¿Me podrás informar? Gracias.";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

const navLinks = [
  { href: "#sobre", label: "Sobre Nosotros" },
  { href: "#cabanas", label: "Cabañas" },
  { href: "#servicios", label: "Servicios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#reservas", label: "Reservas" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/",
    label: "Facebook",
    icon: SiFacebook,
  },
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: SiInstagram,
  },
  {
    href: whatsappHref,
    label: "WhatsApp",
    icon: SiWhatsapp,
  },
];

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-border bg-card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#" className="inline-block">
              <span className="font-serif text-2xl font-semibold text-foreground">
                Cabañas Parada 8
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tu refugio junto al mar en Barra del Chuy, Uruguay. Más de 20 años
              brindando descanso y atención familiar.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <social.icon size={18} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Parada 8, Barra del Chuy</p>
              <p>Rocha, Uruguay</p>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="block hover:text-foreground"
              >
                +598 98 976 924
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Cabañas Parada 8. Todos los derechos
              reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Barra del Chuy, Uruguay
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
