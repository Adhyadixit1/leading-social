"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, LineChart, Repeat, Sparkles, Zap } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Service = {
  id: string;
  n: string;
  title: string;
  short: string;
  body: string;
  bullets: string[];
};

type CaseStudy = {
  slug: string;
  brand: string;
  sector: string;
  headline: string;
  image: string;
  accent: string;
  stats: { k: string; v: string }[];
};

type CreativeAsset = {
  brand: string;
  title: string;
  image: string;
  description: string;
  category: string;
};

type SocialAsset = {
  id: string;
  title: string;
  instagramUrl: string;
  image: string;
  metadata: string;
  tag: string;
};

const icons = [Zap, Sparkles, Repeat, LineChart];

export function SocialSignalWall({ assets }: { assets: SocialAsset[] }) {
  const featured = assets.slice(0, 5);
  const grid = assets.slice(5);

  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[#09090C] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="kbd mb-6">[ Team signal ]</p>
            <h2 className="font-display max-w-[15ch] text-5xl leading-[0.95] tracking-tight text-balance md:text-7xl">
              The work moves through rooms, stages, summits, and client tables.
            </h2>
          </div>
          <p className="max-w-md text-lg text-[var(--foreground)]/68 lg:col-span-4 lg:col-start-9">
            A live record of the team in the eCommerce community: awards nights, strategy rooms, panels, partner
            events, and field work with operators.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          <div className="grid gap-5 lg:col-span-7">
            {featured.map((asset, index) => (
              <Link
                key={asset.id}
                href={asset.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group grid overflow-hidden rounded-lg border border-[var(--border)] bg-[#0D0D11] md:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="relative min-h-[300px] overflow-hidden">
                  <Image
                    src={asset.image}
                    alt={asset.metadata}
                    fill
                    unoptimized
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 38vw"
                    className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070A]/72 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-5 font-display text-7xl leading-none text-white/18">
                    0{index + 1}
                  </p>
                </div>
                <div className="flex min-h-[300px] flex-col justify-between p-7 md:p-8">
                  <div>
                    <div className="flex items-center justify-between gap-5">
                      <span className="kbd rounded-full border border-[var(--border)] px-3 py-1.5 text-[var(--accent)]">
                        {asset.tag}
                      </span>
                      <ArrowUpRight className="size-5 text-[var(--muted)] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
                    </div>
                    <h3 className="mt-8 font-display text-4xl leading-tight tracking-tight">{asset.title}</h3>
                  </div>
                  <p className="mt-8 text-sm leading-6 text-[var(--foreground)]/66">{asset.metadata}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid gap-5 self-start lg:sticky lg:top-24 lg:col-span-5">
            {grid.map((asset) => (
              <Link
                key={asset.id}
                href={asset.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group grid overflow-hidden rounded-lg border border-[var(--border)] bg-[#0D0D11] sm:grid-cols-[180px_1fr]"
              >
                <div className="relative min-h-[170px] overflow-hidden">
                  <Image
                    src={asset.image}
                    alt={asset.metadata}
                    fill
                    unoptimized
                    sizes="(max-width: 639px) 100vw, 180px"
                    className="absolute inset-0 h-full w-full object-cover transition duration-[900ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="kbd text-[var(--accent)]">{asset.tag}</span>
                    <ArrowUpRight className="size-4 text-[var(--muted)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight">{asset.title}</h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-[var(--foreground)]/62">{asset.metadata}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MediaProofWall({ cases, assets }: { cases: CaseStudy[]; assets?: CreativeAsset[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yLeft = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-80, 90]);
  const yRight = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [90, -80]);

  const tiles = [
    { label: "Creative tests", value: "84/mo", image: assets?.[33]?.image ?? cases[1]?.image },
    { label: "CAC payback", value: "27d", image: assets?.[35]?.image ?? cases[0]?.image },
    { label: "LTV uplift", value: "+62%", image: assets?.[18]?.image ?? cases[2]?.image },
    { label: "Forecast accuracy", value: "97%", image: assets?.[0]?.image ?? cases[3]?.image },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-[var(--border)] bg-[#09090C] py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5 lg:py-16">
          <p className="kbd mb-6">[ Proof in motion ]</p>
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-balance md:text-6xl lg:text-7xl">
            The work has to look sharp, but it has to <em className="italic text-[var(--accent)]">pay back</em>.
          </h2>
          <p className="mt-8 max-w-md text-lg text-[var(--foreground)]/68">
            Creative output, acquisition learnings, retention lifts, and forecasting discipline stay connected in one
            performance loop.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-7 lg:gap-5">
          <motion.div style={{ y: yLeft }} className="space-y-4 lg:space-y-5">
            {tiles.slice(0, 2).map((tile) => (
              <ProofTile key={tile.label} {...tile} />
            ))}
          </motion.div>
          <motion.div style={{ y: yRight }} className="mt-12 space-y-4 lg:mt-24 lg:space-y-5">
            {tiles.slice(2).map((tile) => (
              <ProofTile key={tile.label} {...tile} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function CreativeAssetWall({ assets }: { assets: CreativeAsset[] }) {
  const featured = assets.slice(0, 10);
  const library = assets.slice(10);

  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[#F7F4EE] py-24 text-[#07070A] lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[#07070A]/55">
              [ Creative library ]
            </p>
            <h2 className="mt-6 font-display max-w-[14ch] text-5xl leading-[0.95] tracking-tight text-balance md:text-7xl">
              The proof belongs to the brands.
            </h2>
          </div>
          <p className="max-w-md text-lg text-[#07070A]/66 lg:col-span-4 lg:col-start-9">
            A working library of product, lifestyle, offer, testimonial, and story assets across wellness, nutrition,
            apparel, beauty, beverage, and consumer brands.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          <div className="grid gap-5 md:grid-cols-2 lg:col-span-7">
            {featured.map((asset, index) => (
              <article
                key={`${asset.brand}-${asset.title}`}
                className={index === 0 ? "group overflow-hidden rounded-lg border border-[#07070A]/12 bg-white md:col-span-2" : "group overflow-hidden rounded-lg border border-[#07070A]/12 bg-white"}
              >
                <div className={index === 0 ? "relative aspect-[16/9] overflow-hidden" : "relative aspect-[4/5] overflow-hidden"}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-[1200ms] group-hover:scale-105"
                    style={{ backgroundImage: `url('${asset.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070A]/55 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#F7F4EE]/92 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[#07070A]/70">
                    {asset.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-display text-2xl tracking-tight">{asset.brand}</p>
                  <p className="mt-1 text-sm font-medium text-[#07070A]/64">{asset.title}</p>
                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-[#07070A]/62">{asset.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-3 self-start lg:sticky lg:top-24 lg:col-span-5">
            {library.map((asset) => (
              <article
                key={`${asset.brand}-${asset.title}`}
                className="grid overflow-hidden rounded-lg border border-[#07070A]/12 bg-white sm:grid-cols-[138px_1fr]"
              >
                <div className="relative min-h-[138px] overflow-hidden bg-[#E7E0D6]">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${asset.image}')` }} />
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[#07070A]/48">
                    <span>{asset.brand}</span>
                    <span>{asset.category}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl leading-tight tracking-tight">{asset.title}</h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-5 text-[#07070A]/58">{asset.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofTile({ label, value, image }: { label: string; value: string; image?: string }) {
  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
        style={{ backgroundImage: image ? `url('${image}')` : undefined }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07070A] via-[#07070A]/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="font-display text-4xl tracking-tight">{value}</p>
        <p className="kbd mt-2 text-[var(--foreground)]/55">{label}</p>
      </div>
    </div>
  );
}

export function StickyGrowthSystem({ services }: { services: Service[] }) {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="kbd mb-6">[ 03: The system ]</p>
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-balance md:text-6xl lg:text-7xl">
              Four growth levers, run as one operating rhythm.
            </h2>
            <p className="mt-8 max-w-md text-lg text-[var(--foreground)]/68">
              The team plans, ships, measures, and reallocates across the full customer journey every week.
            </p>
            <Link href="/services" className="btn-ghost mt-10">
              Explore the system <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="space-y-5 lg:col-span-7">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0.45, y: 56, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ amount: 0.45, once: false }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[#0B0B0E] p-7 md:p-9 lg:p-10"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-[var(--accent)] opacity-0 transition group-hover:opacity-100" />
                <div className="mb-12 flex items-start justify-between gap-8">
                  <div>
                    <p className="kbd">{service.n}</p>
                    <p className="kbd mt-2 text-[var(--accent)]">{service.short}</p>
                  </div>
                  <Icon className="size-6 text-[var(--accent)]" />
                </div>
                <h3 className="font-display text-4xl tracking-tight md:text-5xl">{service.title}</h3>
                <p className="mt-5 max-w-xl text-[var(--foreground)]/70">{service.body}</p>
                <div className="mt-8 grid gap-3 border-t border-[var(--border)] pt-6 sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <p key={bullet} className="text-sm text-[var(--foreground)]/66">
                      {bullet}
                    </p>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CameraCommandCenter({ cases }: { cases: CaseStudy[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [0, 0, 0] : [8, 0, -8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [1, 1, 1] : [0.92, 1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [90, -90]);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-[var(--border)] bg-[#0A0A0D] py-24 lg:py-36">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_45%,rgba(212,255,58,0.1),transparent_38%)]" />
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:items-center lg:px-10">
        <div className="lg:col-span-5">
          <p className="kbd mb-6">[ Command center ]</p>
          <h2 className="font-display text-5xl leading-[0.92] tracking-tight text-balance md:text-6xl lg:text-7xl">
            One operating room for spend, creative, cohorts, and cash.
          </h2>
          <p className="mt-8 max-w-md text-lg text-[var(--foreground)]/68">
            The signals that usually live in separate decks converge into one view: what changed, what it means, and
            where the next dollar should go.
          </p>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            style={{ rotateX: rotate, scale, y, transformPerspective: 1200 }}
            className="relative mx-auto max-w-3xl rounded-lg border border-[var(--border)] bg-[#101014] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.38)] md:p-5"
          >
            <div className="mb-4 flex items-center justify-between border-b border-[var(--border)] pb-4">
              <div>
                <p className="kbd text-[var(--accent)]">Portfolio OS</p>
                <p className="mt-1 text-sm text-[var(--foreground)]/58">Live pacing snapshot</p>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--foreground)]/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--foreground)]/12" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Spend today", "$184k", "+18% vs plan"],
                ["Margin signal", "31.4%", "healthy"],
                ["Creative tests", "84", "12 winners"],
              ].map(([label, value, meta]) => (
                <div key={label} className="rounded-md border border-[var(--border)] bg-[#07070A] p-4">
                  <p className="kbd">{label}</p>
                  <p className="mt-5 font-display text-4xl tracking-tight">{value}</p>
                  <p className="mt-2 text-xs text-[var(--accent)]">{meta}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-md border border-[var(--border)] bg-[#07070A] p-5">
                <div className="mb-8 flex items-center justify-between">
                  <p className="kbd">Revenue curve</p>
                  <p className="text-xs text-[var(--muted)]">90-day blended view</p>
                </div>
                <div className="flex h-44 items-end gap-2">
                  {[34, 46, 42, 58, 68, 62, 77, 72, 86, 91, 84, 96].map((height, index) => (
                    <span
                      key={index}
                      className="flex-1 rounded-t-sm bg-[var(--accent)]/80"
                      style={{ height: `${height}%`, opacity: 0.34 + index * 0.045 }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {cases.slice(0, 3).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/case-studies/${item.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-md border border-[var(--border)] bg-[#07070A] p-4"
                  >
                    <div>
                      <p className="font-display text-xl">{item.brand}</p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-[var(--muted)]">{item.stats[0].v} {item.stats[0].k}</p>
                    </div>
                    <ArrowUpRight className="size-4 text-[var(--muted)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ResultsRail({ cases }: { cases: CaseStudy[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], reduced || !isDesktop ? ["0%", "0%"] : ["0%", "-38%"]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <section ref={ref} id="work" className="relative border-y border-[var(--border)] lg:h-[260vh]">
      <div className="overflow-hidden bg-[#07070A] py-24 lg:sticky lg:top-0 lg:min-h-screen lg:py-28">
        <div className="mx-auto mb-14 flex max-w-[1400px] flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div>
            <p className="kbd mb-6">[ 04: Selected work ]</p>
            <h2 className="font-display max-w-[15ch] text-5xl leading-[0.95] tracking-tight text-balance md:text-6xl lg:text-7xl">
              Results should move across the page.
            </h2>
          </div>
          <Link href="/case-studies" className="btn-ghost self-start lg:self-auto">
            All case studies <ArrowRight className="size-4" />
          </Link>
        </div>

        <motion.div style={{ x }} className="flex flex-col gap-5 px-6 lg:w-[170vw] lg:flex-row lg:px-10">
          {cases.map((item) => (
            <Link
              key={item.slug}
              href={`/case-studies/${item.slug}`}
              className="group grid w-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] lg:min-w-[640px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-[1200ms] group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070A] via-[#07070A]/25 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-3">
                  <span className="kbd rounded-full border border-[var(--border)] bg-[#07070A]/70 px-3 py-1.5">
                    {item.sector}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: item.accent }} />
                </div>
              </div>
              <div className="p-7 md:p-9">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-display text-3xl tracking-tight">{item.brand}</p>
                    <h3 className="mt-3 max-w-md text-2xl leading-tight text-[var(--foreground)]/82 md:text-3xl">
                      {item.headline}
                    </h3>
                  </div>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-[var(--muted)] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
                </div>
                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--border)] pt-6">
                  {item.stats.map((stat) => (
                    <div key={stat.k}>
                      <p className="font-display text-2xl md:text-3xl">{stat.v}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-wider text-[var(--muted)]">{stat.k}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
