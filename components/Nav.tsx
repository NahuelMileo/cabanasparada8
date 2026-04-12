"use client";

import { SiFacebook, SiInstagram } from "react-icons/si";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "59898976924";
const WHATSAPP_TEXT =
  "Hola, me gustaría consultar disponibilidad y precios de Cabañas Parada 8. ¿Me podrás informar? Gracias.";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="#" className="flex items-center gap-3">
          <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            Cabañas Parada 8
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="#sobre"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="#cabanas"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Cabañas
          </Link>
          <Link
            href="#servicios"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Servicios
          </Link>
          <Link
            href="#ubicacion"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Ubicación
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <SiFacebook size={18} aria-hidden="true" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <SiInstagram size={18} aria-hidden="true" />
            </Link>
          </div>
          <Button
            asChild
            className="bg-primary px-6 font-medium hover:bg-primary/90"
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservar por WhatsApp"
            >
              Reservar
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label="Menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 top-16 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          {/* Menu */}
          <div className="absolute left-0 right-0 top-16 z-50 border-b border-border bg-background shadow-lg lg:hidden">
            <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
              <Link
                href="#sobre"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-foreground"
              >
                Sobre Nosotros
              </Link>
              <Link
                href="#cabanas"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-foreground"
              >
                Cabañas
              </Link>
              <Link
                href="#servicios"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-foreground"
              >
                Servicios
              </Link>
              <Link
                href="#ubicacion"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-foreground"
              >
                Ubicación
              </Link>
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-full p-2 text-muted-foreground hover:bg-muted"
                >
                  <SiFacebook size={20} aria-hidden="true" />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-full p-2 text-muted-foreground hover:bg-muted"
                >
                  <SiInstagram size={20} aria-hidden="true" />
                </Link>
              </div>
              <Button
                asChild
                className="mt-2 w-full bg-primary font-medium hover:bg-primary/90"
              >
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
          </div>
        </>
      )}
    </header>
  );
}
