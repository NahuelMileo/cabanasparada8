"use client";

import { SiFacebook, SiInstagram } from "react-icons/si";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
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
          className="relative z-50 rounded-md p-2 text-foreground transition-transform duration-200 lg:hidden"
          aria-label="Menú"
        >
          <div className="relative h-6 w-6">
            <Menu 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Fullscreen Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 ease-out lg:hidden ${
          isOpen 
            ? "opacity-100 visible" 
            : "opacity-0 invisible"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`group relative overflow-hidden py-3 transition-all duration-500 ${
                isOpen 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 75 + 100}ms` : "0ms" }}
            >
              <span className="font-serif text-4xl font-medium text-foreground transition-colors group-hover:text-primary sm:text-5xl">
                {link.label}
              </span>
              <span className="absolute bottom-2 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* Social Links */}
          <div 
            className={`mt-8 flex items-center gap-4 transition-all duration-500 ${
              isOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}
          >
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <SiFacebook size={24} aria-hidden="true" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <SiInstagram size={24} aria-hidden="true" />
            </Link>
          </div>

          {/* CTA Button */}
          <div
            className={`mt-6 transition-all duration-500 ${
              isOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "475ms" : "0ms" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary px-10 py-6 text-lg font-medium hover:bg-primary/90"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reservar por WhatsApp"
                onClick={() => setIsOpen(false)}
              >
                Reservar por WhatsApp
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
