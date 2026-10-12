"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/motion";
import { PHONE_DISPLAY, whatsappLink } from "@/lib/contact";

const navLinks = [
  { href: "#sobre", label: "Nosotros" },
  { href: "#cabanas", label: "Cabañas" },
  { href: "#servicios", label: "Servicios" },
  { href: "#reservas", label: "Reservas" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Footer() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(".foot-eight", {
          yPercent: 60,
          rotate: -8,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom bottom", scrub: true },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <footer ref={root} className="relative overflow-hidden bg-noche text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div className="flex items-start gap-6">
          <div className="foot-eight font-display flex h-32 w-24 shrink-0 flex-col items-center justify-center rounded-xl bg-white text-bordo">
            <span className="text-[10px] font-bold">Parada</span>
            <span className="text-7xl leading-[0.85] font-extrabold">8</span>
          </div>
          <div>
            <p className="font-display text-2xl font-bold">Cabañas Parada 8</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/65">
              Tu refugio junto al mar en Barra del Chuy, Uruguay. Más de 20 años
              brindando descanso y atención familiar.
            </p>
          </div>
        </div>

        <nav aria-label="Pie de página">
          <h4 className="mb-4 text-xs font-semibold text-white/45">Navegación</h4>
          <ul className="grid grid-cols-2 gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/75 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="mb-4 text-xs font-semibold text-white/45">Contacto</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li>Parada 8, Barra del Chuy</li>
            <li>Rocha, Uruguay</li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto max-w-7xl border-t border-white/10 px-4 py-6 text-xs text-white/45 lg:px-8">
        © {new Date().getFullYear()} Cabañas Parada 8. Todos los derechos reservados.
      </p>
    </footer>
  );
}
