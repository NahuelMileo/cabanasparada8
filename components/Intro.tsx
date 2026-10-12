"use client";

import { useRef } from "react";
import { gsap, useGSAP, getLenis, INTRO_DONE } from "@/lib/motion";

/** Intro: se levanta el poste, gira el cartel de la parada con el 8 y la cortina sube. Una vez por sesión. */
export default function Intro() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const html = document.documentElement;
      const el = root.current;
      if (!el || !html.classList.contains("intro-on")) return;

      const finish = () => {
        try {
          sessionStorage.setItem("p8-intro", "1");
        } catch {}
        html.classList.remove("intro-on");
        html.classList.add("no-intro");
        getLenis()?.start();
        window.dispatchEvent(new Event(INTRO_DONE));
      };

      const tl = gsap.timeline({ onComplete: finish });
      tl.from(".intro-pole", { scaleY: 0, duration: 0.6, ease: "power3.out" })
        .from(
          ".intro-sign",
          { rotateY: -90, opacity: 0, duration: 0.8, ease: "back.out(1.6)" },
          0.35,
        )
        .from(".intro-eight", { scale: 0.4, opacity: 0, duration: 0.7, ease: "back.out(2)" }, 0.75)
        .from(".intro-place", { y: 16, opacity: 0, duration: 0.5 }, 0.95)
        .to(".intro-stage", { y: -24, opacity: 0, duration: 0.45, ease: "power2.in" }, "+=0.45")
        .to(el, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.95, ease: "expo.inOut" }, "-=0.15");

      const skip = () => tl.progress(1);
      el.addEventListener("click", skip);
      return () => el.removeEventListener("click", skip);
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="intro fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center bg-noche text-white [clip-path:inset(0%_0%_0%_0%)]"
    >
      <div className="intro-stage flex flex-col items-center [perspective:800px]">
        <div className="intro-sign flex w-44 flex-col items-center rounded-2xl bg-white px-6 pt-4 pb-5 text-bordo shadow-2xl md:w-52">
          <span className="font-display text-sm font-bold">Parada</span>
          <span className="intro-eight font-display text-[7.5rem] leading-[0.85] font-extrabold md:text-[9rem]">
            8
          </span>
        </div>
        <div className="intro-pole h-28 w-2.5 origin-bottom rounded-b bg-white/90 md:h-36" />
        <p className="intro-place font-display mt-6 text-lg font-semibold">
          Barra del Chuy
        </p>
      </div>
      <p className="absolute bottom-6 text-[11px] font-semibold text-white/60">
        Tocá para entrar
      </p>
    </div>
  );
}
