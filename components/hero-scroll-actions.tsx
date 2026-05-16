"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

function getMobileCompact(height: number) {
  return Math.min(Math.max((height - 660) / 190, 0), 1);
}

export function HeroScrollActions({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [startOffset, setStartOffset] = useState(-220);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = ref.current?.closest("section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const travel = Math.max(rect.height - window.innerHeight, 1);
      const isMobile = window.innerWidth < 768;
      const compact = getMobileCompact(window.innerHeight);
      setStartOffset(isMobile ? lerp(-120, -150, compact) : -100);
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

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(0, ${y}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
