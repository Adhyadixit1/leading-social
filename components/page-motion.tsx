"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type SignalItem = {
  label: string;
  title: string;
  body: string;
  metric?: string;
};

export function PageSignalStack({
  eyebrow,
  title,
  body,
  items,
  light = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  items: SignalItem[];
  light?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-5, 5]);
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [52, -52]);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden border-y border-[var(--border)] py-24 lg:py-32 ${
        light ? "bg-[var(--foreground)] text-[var(--palette-navy)]" : "bg-[var(--surface)]/35"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className={light ? "font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[var(--palette-navy)]/55" : "kbd"}>
              {eyebrow}
            </p>
            <h2 className="mt-6 max-w-[15ch] font-display text-5xl leading-[0.95] tracking-tight text-balance md:text-7xl">
              {title}
            </h2>
            <p className={light ? "mt-8 max-w-md text-[var(--palette-navy)]/68" : "mt-8 max-w-md text-[var(--foreground)]/68"}>
              {body}
            </p>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <motion.div style={{ y, rotate }} className="grid gap-4 md:grid-cols-2">
            {items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.55, ease: "easeOut" }}
                className={`min-h-[280px] rounded-lg border p-7 transition hover:-translate-y-1 ${
                  light
                    ? "border-[var(--palette-navy)]/12 bg-[var(--palette-orange)] text-[var(--palette-navy)] hover:bg-[var(--palette-orange)]"
                    : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--palette-navy)]"
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <p className={light ? "font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[var(--palette-navy)]/48" : "kbd text-[var(--accent)]"}>
                    {item.label}
                  </p>
                  {item.metric ? (
                    <p className={`font-display text-4xl leading-none ${light ? "text-[var(--palette-navy)]" : "text-[var(--accent)]"}`}>
                      {item.metric}
                    </p>
                  ) : null}
                </div>
                <h3 className="mt-16 font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
                  {item.title}
                </h3>
                <p className={light ? "mt-5 text-sm leading-6 text-[var(--palette-navy)]/65" : "mt-5 text-sm leading-6 text-[var(--foreground)]/64"}>
                  {item.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
