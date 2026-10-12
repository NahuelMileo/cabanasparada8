"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type Lenis from "lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Todas las animaciones viven dentro de esta media query: con movimiento reducido la página queda estática.
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const INTRO_DONE = "p8:intro-done";

let lenisInstance: Lenis | null = null;
export const setLenis = (l: Lenis | null) => {
  lenisInstance = l;
};
export const getLenis = () => lenisInstance;

/** Ejecuta `fn` cuando termina la intro (o enseguida si no hay intro). */
export function afterIntro(fn: () => void) {
  if (!document.documentElement.classList.contains("intro-on")) {
    fn();
    return () => {};
  }
  let done = false;
  const run = () => {
    if (done) return;
    done = true;
    fn();
  };
  window.addEventListener(INTRO_DONE, run, { once: true });
  const failsafe = window.setTimeout(run, 5000);
  return () => {
    window.removeEventListener(INTRO_DONE, run);
    window.clearTimeout(failsafe);
  };
}

export { gsap, ScrollTrigger, useGSAP };
