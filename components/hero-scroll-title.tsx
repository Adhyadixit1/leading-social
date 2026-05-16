"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

export function HeroScrollTitle({ children, className }: { children: ReactNode; className: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [progress, setProgress] = useState(0);
  const [startOffset, setStartOffset] = useState(300);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = ref.current?.closest("section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const travel = Math.max(rect.height - window.innerHeight, 1);
      setStartOffset(window.innerWidth < 768 ? 130 : 140);
      setProgress(clamp(Math.abs(rect.top) / travel, 0, 1));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const movement = clamp(progress / 0.36, 0, 1);
  const y = lerp(startOffset, 0, movement);
  const scale = lerp(0.7, 0.9, movement);

  return (
    <h1
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
        transformOrigin: "center top",
        willChange: "transform",
      }}
    >
      {children}
    </h1>
  );
}
