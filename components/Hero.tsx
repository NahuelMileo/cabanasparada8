"use client";

import { useRef } from "react";
import Image from "next/image";
import { MapPin, ArrowRight, ArrowDown } from "lucide-react";
import foto from "../public/calle/afuera.webp";
import Words from "./motion/Words";
import { gsap, useGSAP, MOTION_OK, afterIntro } from "@/lib/motion";
import { whatsappLink } from "@/lib/contact";

const stats = [
  { value: 20, suffix: "+", label: "Años recibiendo huéspedes" },
  { value: 5, suffix: "", label: "Alojamientos equipados" },
  { value: 50, suffix: " m", label: "Hasta la playa" },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } });
        tl.fromTo(".hero-bg", { scale: 1.2 }, { scale: 1.04, duration: 2.8, ease: "expo.out" })
          .from(".hero-title .wi", { yPercent: 115, duration: 1.15, stagger: 0.06 }, 0.15)
          .from(".hero-in", { y: 26, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.5)
          .from(".hero-stat", { y: 26, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.8);

        root.current?.querySelectorAll<HTMLElement>("[data-stat]").forEach((el, i) => {
          const s = stats[i];
          const obj = { v: 0 };
          tl.to(
            obj,
            {
              v: s.value,
              duration: 1.8,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = `${Math.round(obj.v)}${s.suffix}`;
              },
            },
            0.9,
          );
        });

        const cancel = afterIntro(() => tl.play());

        gsap.to(".hero-bg-wrap", {
          yPercent: 16,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".hero-content", {
          yPercent: -10,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        return cancel;
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="inicio"
      ref={root}
      className="relative flex min-h-svh items-end overflow-hidden bg-noche text-white"
    >
      <div className="hero-bg-wrap absolute inset-0">
        <div className="hero-bg absolute inset-0">
          <Image
            src={foto}
            alt="Cabaña gris con palmera y pasto verde bajo el cielo de Barra del Chuy"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[35%_center]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-noche/90 via-noche/35 to-noche/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-noche/60 to-transparent" />
      </div>

      <div className="hero-content relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-14 lg:px-8 lg:pb-20">
        <p className="hero-in mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
          <MapPin className="h-4 w-4" />
          Parada 8 · Barra del Chuy, Rocha
        </p>

        <h1 className="hero-title font-display max-w-4xl text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] font-extrabold tracking-tight">
          <Words text="Tu descanso" /> <em className="italic"><Words text="junto al mar" /></em>
        </h1>

        <p className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
          A media cuadra de la playa, con atención familiar y todo lo que
          necesitás para disfrutar tus vacaciones.
        </p>

        <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-bordo px-8 py-4 font-semibold text-white transition-colors hover:bg-noche"
          >
            Consultar disponibilidad
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#cabanas"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 font-semibold transition-colors hover:border-white hover:bg-white hover:text-noche"
          >
            Ver las cabañas
          </a>
        </div>

        <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/20 pt-7 md:gap-10">
          {stats.map((s, i) => (
            <div key={s.label} className="hero-stat">
              <span data-stat={i} className="font-display block text-4xl font-extrabold tabular-nums md:text-5xl">
                {s.value}
                {s.suffix}
              </span>
              <span className="mt-1 block text-xs text-white/70 md:text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Bajar a la siguiente sección"
        className="absolute right-6 bottom-8 z-10 hidden h-14 w-14 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-noche lg:flex"
      >
        <ArrowDown className="h-5 w-5 animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  );
}
