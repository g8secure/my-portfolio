"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Init Lenis smooth scroll
    lenis.current = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // @ts-expect-error - smooth is valid in some Lenis versions
      smooth: true,
      lerp: 0.08,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.current.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.current?.raf(time);
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    // Integrate with GSAP ticker
    gsap.ticker.add((time) => {
      lenis.current?.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.current?.destroy();
      lenis.current = null;
      gsap.ticker.remove(() => {});
    };
  }, []);

  return <div className="min-h-screen flex flex-col">{children}</div>;
}
