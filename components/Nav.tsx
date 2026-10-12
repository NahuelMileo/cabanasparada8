"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap, getLenis } from "@/lib/motion";
import { whatsappLink } from "@/lib/contact";

const navLinks = [
  { href: "#sobre", label: "Nosotros" },
  { href: "#cabanas", label: "Cabañas" },
  { href: "#servicios", label: "Servicios" },
  { href: "#reservas", label: "Reservas" },
  { href: "#ubicacion", label: "Ubicación" },
];

function Logo({ light }: { light: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-2.5" aria-label="Cabañas Parada 8, inicio">
      <span
        className={`font-display flex h-10 w-9 flex-col items-center justify-center rounded-md leading-none transition-colors ${
          light ? "bg-white text-bordo" : "bg-bordo text-white"
        }`}
      >
        <span className="text-[8px] font-bold">Parada</span>
        <span className="text-2xl font-extrabold">8</span>
      </span>
      <span className="font-display text-xl font-bold tracking-wide">Cabañas Parada 8</span>
    </a>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let hidden = false;
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 60);
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      const shouldHide = y > lastY && y > 500;
      if (shouldHide !== hidden && headerRef.current) {
        hidden = shouldHide;
        gsap.to(headerRef.current, { yPercent: hidden ? -100 : 0, duration: 0.45, ease: "power3.out" });
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = getLenis();
    if (isOpen) lenis?.stop();
    else lenis?.start();
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const solid = scrolled;

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-noche text-white transition-[opacity,visibility] duration-500 lg:hidden ${
          isOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Logo light />
          <button onClick={() => setIsOpen(false)} className="rounded-md p-2" aria-label="Cerrar menú">
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-display border-b border-white/15 py-3 text-5xl font-bold transition-all duration-500 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 60 + 100}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-8 rounded-full bg-white px-6 py-4 text-center font-semibold text-bordo"
          >
            Reservar por WhatsApp
          </a>
        </nav>
      </div>

      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "bg-arena/95 text-noche shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur" : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          <Logo light={!solid} />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Secciones">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-semibold opacity-80 transition-opacity hover:opacity-100"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-bordo transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-bordo px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-noche lg:inline-flex"
          >
            Reservar
          </a>

          <button onClick={() => setIsOpen(true)} className="rounded-md p-2 lg:hidden" aria-label="Abrir menú">
            <Menu size={26} />
          </button>
        </div>
        <span
          ref={barRef}
          className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-bordo"
          style={{ transform: "scaleX(0)" }}
        />
      </header>
    </>
  );
}
