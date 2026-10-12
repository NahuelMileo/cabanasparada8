"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import {
  gsap,
  ScrollTrigger,
  useGSAP,
  MOTION_OK,
  setLenis,
} from "@/lib/motion";

/**
 * Scroll suave (Lenis) + revelaciones genéricas por atributos:
 * [data-words] títulos palabra por palabra · [data-fade] sube y aparece ·
 * [data-stagger] hijos en cascada · [data-clip] foto que se destapa ·
 * [data-parallax="n"] desplazamiento con el scroll · [data-count] contador.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });
    const motionOk = window.matchMedia(MOTION_OK).matches;
    let lenis: Lenis | null = null;
    let tick: ((time: number) => void) | null = null;

    if (motionOk) {
      lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.9 });
      lenis.on("scroll", ScrollTrigger.update);
      tick = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      setLenis(lenis);
      if (document.documentElement.classList.contains("intro-on")) lenis.stop();
    }

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!link) return;
      const hash = link.getAttribute("href") ?? "#";
      const target =
        hash === "#" || hash === "#inicio"
          ? 0
          : document.querySelector<HTMLElement>(hash);
      if (target === null) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, {
          duration: 1.5,
          easing: (t) => 1 - Math.pow(1 - t, 4),
          force: true,
        });
      } else if (target === 0) {
        window.scrollTo({ top: 0 });
      } else {
        target.scrollIntoView();
      }
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    // Con secciones fijas, el ancla llega antes de que se midan: re-ubicar al terminar de cargar
    const refresh = () => {
      ScrollTrigger.refresh();
      const target = location.hash ? document.querySelector(location.hash) : null;
      if (target instanceof HTMLElement) {
        if (lenis) lenis.scrollTo(target, { immediate: true, force: true });
        else target.scrollIntoView();
      }
    };
    window.addEventListener("load", refresh);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", refresh);
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
      setLenis(null);
    };
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>("[data-words]").forEach((el) => {
          gsap.from(el.querySelectorAll(".wi"), {
            yPercent: 115,
            duration: 1.05,
            stagger: 0.045,
            ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
          gsap.from(el, {
            y: 32,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
          gsap.from(el.children, {
            y: 48,
            opacity: 0,
            duration: 0.9,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
          const img = el.querySelector("img");
          const tl = gsap.timeline({
            scrollTrigger: { trigger: el, start: "top 82%", once: true },
          });
          tl.fromTo(
            el,
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.out" },
          );
          if (img)
            tl.from(img, { scale: 1.3, duration: 1.6, ease: "expo.out" }, 0);
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const amount = Number(el.dataset.parallax) || 10;
          gsap.fromTo(
            el,
            { yPercent: -amount },
            {
              yPercent: amount,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const end = Number(el.dataset.count);
          const obj = { v: 0 };
          gsap.to(obj, {
            v: end,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate: () => {
              el.textContent = Math.round(obj.v).toLocaleString("es-UY");
            },
          });
        });
      });

      ScrollTrigger.sort();
      ScrollTrigger.refresh();
      return () => mm.revert();
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
