"use client";

import { useEffect, useRef } from "react";
import type { COBEOptions } from "cobe";

type Marker = { location: [number, number]; size: number };

const markers: Marker[] = [
  { location: [40.7128, -74.006], size: 0.035 }, // New York
  { location: [34.0522, -118.2437], size: 0.03 }, // Los Angeles
  { location: [41.8781, -87.6298], size: 0.026 }, // Chicago
  { location: [25.7617, -80.1918], size: 0.026 }, // Miami
  { location: [37.7749, -122.4194], size: 0.026 }, // SF
  { location: [53.3498, -6.2603], size: 0.034 }, // Dublin
  { location: [51.5074, -0.1278], size: 0.034 }, // London
  { location: [48.8566, 2.3522], size: 0.026 }, // Paris
  { location: [52.52, 13.405], size: 0.026 }, // Berlin
  { location: [43.6532, -79.3832], size: 0.024 }, // Toronto
  { location: [-33.8688, 151.2093], size: 0.024 }, // Sydney
  { location: [35.6762, 139.6503], size: 0.024 }, // Tokyo
];

export function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: 0, dx: 0 });
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cancelled = false;

    const onResize = () => {
      if (canvas) widthRef.current = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = 1;
    const renderSize = () => Math.max(280, Math.min(widthRef.current, 720));
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { rootMargin: "180px" }
    );
    observer.observe(canvas);

    const onVisibilityChange = () => {
      visibleRef.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    let rafId = 0;
    let destroyGlobe: (() => void) | undefined;
    let lastFrame = performance.now();
    const minFrameMs = reducedMotion ? 1000 : 1000 / 24;

    const start = async () => {
      const { default: createGlobe } = await import("cobe");
      if (cancelled) return;

      const options: COBEOptions = {
        devicePixelRatio: dpr,
        width: renderSize() * dpr,
        height: renderSize() * dpr,
        phi: 0,
        theta: 0.28,
        dark: 1,
        diffuse: 1.1,
        mapSamples: 3500,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: [212 / 255, 255 / 255, 58 / 255],
        glowColor: [0.85, 0.95, 0.55],
        markers,
      };
      // mapBaseBrightness is supported but not in this version's typings.
      (options as COBEOptions & { mapBaseBrightness: number }).mapBaseBrightness = 0.04;

      const globe = createGlobe(canvas, options);
      destroyGlobe = () => globe.destroy();

      const tick = (now: number) => {
        if (!visibleRef.current || now - lastFrame < minFrameMs) {
          rafId = requestAnimationFrame(tick);
          return;
        }

        lastFrame = now;
        phiRef.current += reducedMotion ? 0 : 0.01;
        const targetPhi = phiRef.current + pointer.current.dx / 100;
        globe.update({
          phi: targetPhi,
          width: renderSize() * dpr,
          height: renderSize() * dpr,
        });
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(() => void start(), { timeout: 700 });
    } else {
      timeoutId = setTimeout(() => void start(), 120);
    }

    // Pointer drag interaction
    const onPointerDown = (e: PointerEvent) => {
      pointer.current.x = e.clientX - pointer.current.dx;
      canvas.style.cursor = "grabbing";
    };
    const onPointerUp = () => {
      pointer.current.x = 0;
      canvas.style.cursor = "grab";
    };
    const onPointerMove = (e: PointerEvent) => {
      if (pointer.current.x !== 0) {
        pointer.current.dx = e.clientX - pointer.current.x;
      }
    };
    canvas.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Fade in
    canvas.style.opacity = "0";
    requestAnimationFrame(() => {
      canvas.style.transition = "opacity 1.4s ease";
      canvas.style.opacity = "1";
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
      observer.disconnect();
      destroyGlobe?.();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div className={`relative aspect-square w-full ${className}`}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", cursor: "grab", contain: "layout paint size" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(212,255,58,0.12) 0%, rgba(212,255,58,0.04) 34%, transparent 68%)",
        }}
      />
    </div>
  );
}
