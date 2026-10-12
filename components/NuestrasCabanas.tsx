"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Users, Images, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import Words from "./motion/Words";
import { gsap, useGSAP, MOTION_OK, getLenis } from "@/lib/motion";
import { cabanas, type Cabin } from "@/lib/cabanas";
import { whatsappLink } from "@/lib/contact";

const consulta = (c: Cabin) =>
  whatsappLink(`Hola, me gustaría consultar disponibilidad y precios de ${c.nombre} (${c.capacidad}) en Cabañas Parada 8. Gracias.`);

// Fondo neutro para todas las cabañas: la foto es la protagonista
const panelBg = ["bg-noche"];

function Panel({ cabana, index }: { cabana: Cabin; index: number }) {
  return (
    <article
      data-panel={index}
      className={`cab-panel grid h-svh w-full grid-rows-[48svh_1fr] overflow-hidden lg:grid-cols-2 lg:grid-rows-1 ${panelBg[index % panelBg.length]} group-[.is-pinned]:absolute group-[.is-pinned]:inset-0`}
    >
      {/* Las fotos son verticales: van en una columna alta para no recortarlas */}
      <div className="relative overflow-hidden lg:order-last">
        <Image
          src={cabana.portada}
          alt={`${cabana.nombre}: vista principal`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="cab-img object-cover"
          priority={index === 0}
        />
      </div>

      <div className="cab-content flex flex-col justify-center px-5 py-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:py-20 lg:pr-16">
        <p className="font-display text-base font-semibold text-white/70 lg:text-lg">
          {String(index + 1).padStart(2, "0")} / {String(cabanas.length).padStart(2, "0")}
        </p>
        <h3 className="font-display mt-1 text-[clamp(2.8rem,8vw,7rem)] leading-[0.85] font-extrabold tracking-tight">
          {cabana.nombre}
        </h3>
        <p className="mt-3 flex items-center gap-2 text-lg text-white/90 lg:mt-5">
          <Users className="h-5 w-5" />
          {cabana.capacidad}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 lg:mt-6">
          {cabana.comodidades.map((c) => (
            <span key={c} className="rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-medium backdrop-blur">
              {c}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row lg:mt-9">
          <GalleryDialog
            title={cabana.nombre}
            images={cabana.imagenes}
            trigger={
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-noche transition-colors hover:bg-muted lg:py-3.5">
                <Images className="h-4 w-4" />
                Ver las {cabana.imagenes.length} fotos
              </button>
            }
          />
          <a
            href={consulta(cabana)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-noche lg:py-3.5"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar esta cabaña
          </a>
        </div>
      </div>
    </article>
  );
}

/** Vitrina: la sección queda fija y cada cabaña entra como un telón sobre la anterior. */
export default function NuestrasCabanas() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const el = stage.current;
        if (!el) return;
        el.classList.add("is-pinned");
        const panels = gsap.utils.toArray<HTMLElement>(".cab-panel", el);
        const dots = gsap.utils.toArray<HTMLElement>(".cab-dot", el);
        const steps = panels.length - 1;
        const setActive = (i: number) =>
          dots.forEach((d, j) => d.classList.toggle("is-active", i === j));
        setActive(0);

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => `+=${steps * window.innerHeight}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => setActive(Math.round(self.progress * steps)),
          },
        });

        panels.forEach((panel, i) => {
          if (i === 0) return;
          const prev = panels[i - 1];
          tl.fromTo(panel, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1 }, i - 1)
            .fromTo(panel.querySelector(".cab-img"), { scale: 1.3 }, { scale: 1, duration: 1 }, i - 1)
            .fromTo(prev.querySelector(".cab-img"), { scale: 1 }, { scale: 1.12, duration: 1, immediateRender: false }, i - 1)
            // El texto anterior sale al empezar el telón y el nuevo llega antes de que termine:
            // así en cada parada (progreso entero) el texto visible es siempre el de la cabaña actual.
            .fromTo(
              prev.querySelector(".cab-content"),
              { y: 0, opacity: 1 },
              { y: -50, opacity: 0, duration: 0.35, immediateRender: false },
              i - 1 + 0.05,
            )
            .fromTo(
              panel.querySelector(".cab-content"),
              { y: 60, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.45, immediateRender: false },
              i - 0.55,
            );
        });

        return () => el.classList.remove("is-pinned");
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="cabanas" ref={root} className="bg-noche text-white">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-14 lg:px-8 lg:pt-36 lg:pb-20">
        <span data-fade className="block text-sm font-semibold text-white/60">
          Alojamiento
        </span>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2
            data-words
            className="font-display max-w-3xl text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.92] font-extrabold tracking-tight"
          >
            <Words text="Cinco lugares para quedarte" />
          </h2>
          <p data-fade className="max-w-sm text-white/70">
            Cómodos y completamente equipados, para descansar y disfrutar del mar
            en pareja, en familia o con amigos.
          </p>
        </div>
      </div>

      <div ref={stage} className="group relative [&.is-pinned]:h-svh [&.is-pinned]:overflow-hidden">
        {cabanas.map((cab, i) => (
          <Panel key={cab.id} cabana={cab} index={i} />
        ))}

        <nav
          aria-label="Cabañas"
          className="pointer-events-none absolute top-1/2 right-8 z-10 hidden -translate-y-1/2 flex-col items-end gap-3 rounded-2xl bg-noche/45 px-4 py-3 backdrop-blur lg:group-[.is-pinned]:flex"
        >
          {cabanas.map((cab) => (
            <span
              key={cab.id}
              className="cab-dot font-display flex items-center gap-3 text-sm font-semibold tracking-wider text-white/45 transition-colors duration-300 [&.is-active]:text-white"
            >
              <span className="hidden md:inline">{cab.nombre}</span>
              <span className="h-2 w-2 rounded-full bg-current transition-transform duration-300" />
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}

function GalleryDialog({
  images,
  title,
  trigger,
}: {
  images: string[];
  title: string;
  trigger: React.ReactNode;
}) {
  const [index, setIndex] = React.useState(0);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <Dialog
      onOpenChange={(open) => {
        const lenis = getLenis();
        if (open) lenis?.stop();
        else lenis?.start();
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className="max-h-[92vh] w-[95vw] max-w-5xl overflow-hidden bg-card p-3 sm:p-5"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
      >
        <DialogHeader className="pb-1">
          <DialogTitle className="font-display text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
            <Image
              key={images[index]}
              src={images[index]}
              alt={`${title}, foto ${index + 1} de ${images.length}`}
              fill
              className="animate-in fade-in object-cover duration-300"
              sizes="(max-width: 768px) 95vw, 1000px"
            />
            {images.length > 1 && (
              <>
                <button
                  className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-noche shadow-lg hover:bg-white"
                  onClick={prev}
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-noche shadow-lg hover:bg-white"
                  onClick={next}
                  aria-label="Foto siguiente"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-sm text-white tabular-nums">
              {index + 1} / {images.length}
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setIndex(i)}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg transition-opacity ${
                  i === index ? "ring-2 ring-bordo ring-offset-2" : "opacity-60 hover:opacity-100"
                }`}
                aria-label={`Ver foto ${i + 1}`}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
