"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";

type Target = { x: number; y: number; rotate: number; scale: number; opacity: number };

const CARD_W = 138;
const CARD_H = 188;
const MOBILE_CARD_W = 104;
const MOBILE_CARD_H = 142;

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

function getMobileCompact(height: number) {
  return Math.min(Math.max((height - 660) / 190, 0), 1);
}

function getLineTarget(index: number, total: number, width: number, height: number): Target {
  const isMobile = width < 768;
  const spacing = isMobile ? 72 : 116;
  const lineX = index * spacing - ((total - 1) * spacing) / 2;
  return { x: lineX, y: height * (isMobile ? 0.08 : 0.02), rotate: 0, scale: isMobile ? 0.92 : 0.98, opacity: 1 };
}

function getCircleTarget(index: number, total: number, width: number, height: number): Target {
  const isMobile = width < 768;
  const compact = isMobile ? getMobileCompact(height) : 1;
  const mobileXRadius = lerp(134, 170, compact);
  const mobileYRadius = lerp(124, 160, compact);
  const xRadius = Math.min(width * (isMobile ? 0.34 : 0.38), isMobile ? mobileXRadius : 540);
  const yRadius = Math.min(height * (isMobile ? 0.18 : 0.28), isMobile ? mobileYRadius : 300);
  const yOffset = isMobile ? lerp(-24, -56, compact) : 0;
  const angle = (index / total) * 360 - 90;
  const rad = (angle * Math.PI) / 180;

  return {
    x: Math.cos(rad) * xRadius,
    y: Math.sin(rad) * yRadius + yOffset,
    rotate: angle + 90,
    scale: isMobile ? lerp(0.66, 0.82, compact) : 0.9,
    opacity: 1,
  };
}

function getArcTarget(index: number, total: number, width: number, height: number): Target {
  const isMobile = width < 768;
  const spread = isMobile ? 106 : 124;
  const startAngle = -90 - spread / 2;
  const step = spread / Math.max(total - 1, 1);
  const angle = startAngle + index * step;
  const rad = (angle * Math.PI) / 180;
  const radius = Math.min(width * (isMobile ? 1.05 : 0.78), height * (isMobile ? 0.82 : 0.88));
  const centerY = height * (isMobile ? 0.42 : 0.44) + radius;

  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius + centerY,
    rotate: angle + 90,
    scale: isMobile ? 1.08 : 1.36,
    opacity: 1,
  };
}

function getTarget(index: number, total: number, width: number, height: number, progress: number): Target {
  const circle = getCircleTarget(index, total, width, height);
  const line = getLineTarget(index, total, width, height);
  const arc = getArcTarget(index, total, width, height);
  const circleToLine = Math.min(Math.max(progress / 0.34, 0), 1);
  const lineToArc = Math.min(Math.max((progress - 0.34) / 0.52, 0), 1);
  const first = {
    x: lerp(circle.x, line.x, circleToLine),
    y: lerp(circle.y, line.y, circleToLine),
    rotate: lerp(circle.rotate, line.rotate, circleToLine),
    scale: lerp(circle.scale, line.scale, circleToLine),
    opacity: lerp(circle.opacity, line.opacity, circleToLine),
  };

  return {
    x: lerp(first.x, arc.x, lineToArc),
    y: lerp(first.y, arc.y, lineToArc),
    rotate: lerp(first.rotate, arc.rotate, lineToArc),
    scale: lerp(first.scale, arc.scale, lineToArc),
    opacity: lerp(first.opacity, arc.opacity, lineToArc),
  };
}

function FlipCard({ src, index, total, progress, width, height }: {
  src: string;
  index: number;
  total: number;
  progress: number;
  width: number;
  height: number;
}) {
  const isMobile = width < 768;
  const compact = isMobile ? getMobileCompact(height) : 1;
  const cardW = isMobile ? lerp(78, MOBILE_CARD_W, compact) : CARD_W;
  const cardH = isMobile ? lerp(106, MOBILE_CARD_H, compact) : CARD_H;
  const target = getTarget(index, total, width, height, progress);

  return (
    <div
      className="absolute left-1/2 top-1/2 overflow-hidden rounded-lg border border-[var(--palette-blue)]/24 bg-[var(--palette-navy)] shadow-[0_18px_48px_rgba(var(--palette-navy-rgb),0.28)]"
      style={{
        width: cardW,
        height: cardH,
        marginLeft: cardW / -2,
        marginTop: cardH / -2,
        opacity: target.opacity,
        transform: `translate3d(${target.x}px, ${target.y}px, 0) rotate(${target.rotate}deg) scale(${target.scale})`,
        willChange: "transform, opacity",
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="120px"
        className="object-cover"
        draggable={false}
        loading="eager"
      />
    </div>
  );
}

export function HeroCardField({ images }: { images: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({ width: 1200, height: 900 });
  const visibleImages = useMemo(() => images.slice(0, 12), [images]);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const resize = () => setSize({ width: node.offsetWidth, height: node.offsetHeight });
    resize();
    setMounted(true);
    const observer = new ResizeObserver(resize);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    visibleImages.forEach((src) => {
      const img = new window.Image();
      img.decoding = "async";
      img.src = src;
    });
  }, [visibleImages]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-[8]" aria-hidden>
      <div ref={viewportRef} className="sticky top-0 h-svh overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--palette-blue-rgb),0.18),transparent_54%)]" />
        {mounted && visibleImages.map((src, index) => (
          <FlipCard
            key={`${src}-${index}`}
            src={src}
            index={index}
            total={visibleImages.length}
            progress={progress}
            width={size.width}
            height={size.height}
          />
        ))}
      </div>
    </div>
  );
}
