"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20, mass: 1 });
  const display = useTransform(spring, (v) =>
    v.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );
  const [val, setVal] = useState("0");

  useEffect(() => {
    const unsub = display.on("change", (v) => setVal(v));
    return () => unsub();
  }, [display]);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}
