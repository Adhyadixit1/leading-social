"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  LineChart,
  Repeat,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Service = {
  id: string;
  slug: string;
  n: string;
  title: string;
  short: string;
  body: string;
  bullets: string[];
  promise: string;
  proof: string[];
};

type ProcessStep = {
  n: string;
  title: string;
  body: string;
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

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  metric: string;
};

type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
};

const serviceIcons = [Zap, Sparkles, Repeat, LineChart];

export function ServicesControlRoom({ services }: { services: Service[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [70, -70]);
  const rotate = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-4, 4]);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-[var(--border)] bg-[#09090C] py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:items-start lg:px-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="kbd mb-6">[ Services command room ]</p>
            <h2 className="font-display max-w-[13ch] text-5xl leading-[0.92] tracking-tight text-balance md:text-7xl">
              The levers move together.
            </h2>
            <p className="mt-8 max-w-md text-lg text-[var(--foreground)]/68">
              Each pillar has its own workflow, but the weekly decision is shared: what improves contribution profit
              without starving cash, brand, or customer value.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-[var(--border)]">
              {[
                ["Pacing", "Daily"],
                ["Creative", "Weekly"],
                ["Lifecycle", "Always-on"],
                ["Forecast", "Monthly"],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#07070A] p-5">
                  <p className="kbd text-[var(--accent)]">{label}</p>
                  <p className="mt-4 font-display text-2xl tracking-tight">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div style={{ y, rotate }} className="grid gap-5 lg:col-span-7">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[#0D0D11] p-7 transition hover:-translate-y-1 hover:bg-[#121216] md:p-9"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[var(--accent)] opacity-0 transition group-hover:opacity-100" />
                <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                  <div>
                    <div className="flex items-center justify-between gap-6">
                      <p className="font-display text-6xl leading-none text-[var(--accent)]">{service.n}</p>
                      <Icon className="size-6 text-[var(--accent)]" />
                    </div>
                    <p className="kbd mt-8">{service.short}</p>
                    <h3 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">{service.title}</h3>
                  </div>
                  <div>
                    <p className="text-lg leading-7 text-[var(--foreground)]/76">{service.promise}</p>
                    <div className="mt-8 grid gap-2 sm:grid-cols-2">
                      {service.proof.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-[var(--border)] bg-[#07070A] px-4 py-3 text-sm text-[var(--foreground)]/72"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-5 text-sm text-[var(--muted)]">
                      <span>Open pillar</span>
                      <ArrowUpRight className="size-5 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function ProcessOperatingTimeline({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.08, 0.88], reduced ? ["100%", "100%"] : ["0%", "100%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="kbd mb-6">[ Live operating cadence ]</p>
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-balance md:text-6xl">
              The handoff never goes cold.
            </h2>
            <p className="mt-8 text-[var(--foreground)]/68">
              The first pass finds the leaks. The operating cadence turns those leaks into a weekly scoreboard,
              owners, decisions, and repeatable standards.
            </p>
          </div>
        </div>

        <div className="relative lg:col-span-8">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-[var(--border)] md:block" />
          <motion.div className="absolute left-6 top-0 hidden w-px bg-[var(--accent)] md:block" style={{ height: lineHeight }} />
          <div className="space-y-5">
            {steps.map((step, index) => (
              <motion.article
                key={step.n}
                initial={reduced ? false : { opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.45, once: false }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-lg border border-[var(--border)] bg-[#0B0B0E] p-7 md:ml-16 md:p-9"
              >
                <span className="absolute -left-[52px] top-9 hidden h-3 w-3 rounded-full border border-[#07070A] bg-[var(--accent)] md:block" />
                <div className="grid gap-8 md:grid-cols-[120px_1fr]">
                  <p className="font-display text-7xl leading-none text-[var(--accent)]">{step.n}</p>
                  <div>
                    <h3 className="font-display text-4xl tracking-tight md:text-5xl">{step.title}</h3>
                    <p className="mt-5 max-w-2xl text-lg leading-7 text-[var(--foreground)]/70">{step.body}</p>
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {["Owner", "Signal", "Decision"].map((label) => (
                        <div key={label} className="rounded-md border border-[var(--border)] bg-[#07070A] p-4">
                          <p className="kbd text-[var(--accent)]">{label}</p>
                          <p className="mt-4 text-sm text-[var(--foreground)]/64">Defined before the next sprint.</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseStudyCinematicRail({ cases }: { cases: CaseStudy[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["0%", "-42%"]);

  return (
    <section ref={ref} className="relative border-y border-[var(--border)] lg:h-[250vh]">
      <div className="overflow-hidden bg-[#07070A] py-24 lg:sticky lg:top-0 lg:min-h-screen lg:py-28">
        <div className="mx-auto mb-12 grid max-w-[1400px] gap-8 px-6 lg:grid-cols-12 lg:items-end lg:px-10">
          <div className="lg:col-span-7">
            <p className="kbd mb-6">[ Case evidence ]</p>
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-balance md:text-7xl">
              Results should feel inspectable.
            </h2>
          </div>
          <p className="max-w-md text-lg text-[var(--foreground)]/68 lg:col-span-4 lg:col-start-9">
            Each story is framed by a constraint: margin, creative output, lifecycle revenue, or cash timing.
          </p>
        </div>

        <motion.div style={{ x }} className="flex flex-col gap-5 px-6 lg:w-[178vw] lg:flex-row lg:px-10">
          {cases.map((item, index) => (
            <Link
              key={item.slug}
              href={`/case-studies/${item.slug}`}
              className="group grid min-h-[640px] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] lg:min-w-[720px]"
            >
              <div className="relative min-h-[360px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-[1400ms] group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070A] via-[#07070A]/35 to-transparent" />
                <div className="absolute left-6 top-6 flex items-center gap-3">
                  <span className="kbd rounded-full border border-[var(--border)] bg-[#07070A]/75 px-3 py-1.5 backdrop-blur">
                    {item.sector}
                  </span>
                  <span className="h-3 w-3 rounded-full" style={{ background: item.accent }} />
                </div>
                <p className="absolute bottom-6 left-6 font-display text-8xl leading-none text-white/20">
                  0{index + 1}
                </p>
              </div>
              <div className="p-7 md:p-9">
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <p className="font-display text-4xl tracking-tight">{item.brand}</p>
                    <h3 className="mt-4 max-w-xl font-display text-3xl leading-tight tracking-tight text-[var(--foreground)]/84">
                      {item.headline}
                    </h3>
                  </div>
                  <ArrowUpRight className="mt-2 size-5 shrink-0 text-[var(--muted)] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
                </div>
                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--border)] pt-6">
                  {item.stats.map((stat) => (
                    <div key={stat.k}>
                      <p className="font-display text-3xl">{stat.v}</p>
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

export function ReviewsMomentumWall({ testimonials }: { testimonials: Testimonial[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-60, 70]);
  const yB = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [80, -70]);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-[var(--border)] bg-[#09090C] py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="kbd mb-6">[ Partner signal ]</p>
            <h2 className="font-display max-w-[13ch] text-5xl leading-[0.92] tracking-tight text-balance md:text-7xl">
              The useful praise is specific.
            </h2>
            <p className="mt-8 max-w-md text-lg text-[var(--foreground)]/68">
              The comments that matter are about cadence, clarity, decisions, and the commercial scoreboard.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-[var(--border)] sm:grid-cols-2">
              {[
                ["Avg engagement", "22 mo"],
                ["Portfolio", "120+"],
                ["Tracked revenue", "$420M+"],
                ["Regions", "US UK EU"],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#07070A] p-5">
                  <p className="kbd text-[var(--accent)]">{label}</p>
                  <p className="mt-4 font-display text-3xl tracking-tight">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid max-h-[920px] grid-cols-1 gap-5 overflow-hidden lg:col-span-7 md:grid-cols-2">
          <motion.div style={{ y: yA }} className="space-y-5">
            {doubled.map((item, index) => (
              <ReviewCard key={`${item.name}-${index}-a`} item={item} />
            ))}
          </motion.div>
          <motion.div style={{ y: yB }} className="hidden space-y-5 pt-16 md:block">
            {doubled.toReversed().map((item, index) => (
              <ReviewCard key={`${item.name}-${index}-b`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ item }: { item: Testimonial }) {
  return (
    <article className="rounded-lg border border-[var(--border)] bg-[#0D0D11] p-7">
      <p className="font-display text-5xl text-[var(--accent)]">{item.metric}</p>
      <blockquote className="mt-10 font-display text-2xl leading-tight tracking-tight text-balance">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <div className="mt-8 border-t border-[var(--border)] pt-5">
        <p>{item.name}</p>
        <p className="mt-1 text-sm text-[var(--muted)]">{item.role}</p>
      </div>
    </article>
  );
}

export function InsightsEditorialRoom({ insights }: { insights: Insight[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [64, -64]);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--foreground)] py-24 text-[#07070A] lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[#07070A]/55">
              [ Editorial desk ]
            </p>
            <h2 className="mt-6 max-w-[13ch] font-display text-5xl leading-[0.92] tracking-tight text-balance md:text-7xl">
              Useful ideas have a scoreboard.
            </h2>
            <p className="mt-8 max-w-md text-lg text-[#07070A]/68">
              Every memo is written around a decision an operator can make this week: spend, creative, retention,
              cash, or AI-assisted workflow.
            </p>
          </div>
        </div>

        <motion.div style={{ y }} className="lg:col-span-7">
          <Link
            href={`/insights/${insights[0].slug}`}
            className="group grid min-h-[520px] rounded-lg bg-[#07070A] p-7 text-[var(--foreground)] transition hover:-translate-y-1 md:p-10"
          >
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="kbd text-[var(--accent)]">{insights[0].category}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{insights[0].date} / {insights[0].read}</p>
              </div>
              <ArrowUpRight className="size-5 text-[var(--muted)] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
            </div>
            <div className="self-end">
              <h3 className="font-display text-5xl leading-[0.95] tracking-tight text-balance md:text-7xl">
                {insights[0].title}
              </h3>
              <p className="mt-8 max-w-2xl text-lg text-[var(--foreground)]/68">{insights[0].excerpt}</p>
            </div>
          </Link>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {insights.slice(1).map((post, index) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group rounded-lg border border-[#07070A]/12 bg-[#F7F4EE] p-7 transition hover:bg-white"
              >
                <div className="flex items-center justify-between gap-5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[#07070A]/50">
                    {post.category}
                  </p>
                  <span className="font-display text-4xl text-[#07070A]/18">0{index + 2}</span>
                </div>
                <h3 className="mt-16 font-display text-3xl leading-tight tracking-tight text-balance">
                  {post.title}
                </h3>
                <p className="mt-5 text-sm leading-6 text-[#07070A]/62">{post.excerpt}</p>
                <div className="mt-8 flex items-center justify-between border-t border-[#07070A]/10 pt-5 text-xs uppercase tracking-wider text-[#07070A]/46">
                  <span>{post.date}</span>
                  <span>{post.read}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function WeeklyCadenceConsole() {
  const days = [
    ["Mon", "Pacing", "Cash and contribution check"],
    ["Tue", "Creative", "Concept review and production unlocks"],
    ["Wed", "Readout", "Experiment signal and next actions"],
    ["Thu", "Lifecycle", "Offer, segment, and flow work"],
    ["Fri", "Forecast", "Plan, risks, and reallocation"],
  ];

  return (
    <section className="border-y border-[var(--border)] bg-[#0A0A0D] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="kbd mb-6">[ Weekly operating week ]</p>
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-balance md:text-7xl">
              There is always a next move.
            </h2>
          </div>
          <p className="max-w-md text-lg text-[var(--foreground)]/68 lg:col-span-4 lg:col-start-9">
            The rhythm gives the team enough structure to move quickly without turning growth into random activity.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-lg bg-[var(--border)] md:grid-cols-5">
          {days.map(([day, title, body], index) => (
            <motion.article
              key={day}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06, duration: 0.55, ease: "easeOut" }}
              className="min-h-[300px] bg-[#07070A] p-7"
            >
              <CalendarDays className="size-5 text-[var(--accent)]" />
              <p className="mt-8 font-display text-5xl tracking-tight">{day}</p>
              <h3 className="mt-10 font-display text-3xl tracking-tight">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-[var(--foreground)]/62">{body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DiagnosticArtifactWall() {
  const artifacts = [
    ["Margin leak map", "Where profit is disappearing across channel, offer, inventory, and cohort behavior."],
    ["Creative sprint board", "The hook, angle, format, and audience matrix that governs weekly production."],
    ["CAC:LTV model", "A shared forecast for payback, cash, contribution margin, and scale scenarios."],
    ["Lifecycle revenue map", "The owned-channel journey from first order to replenishment and VIP behavior."],
  ];

  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)]/35 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="kbd mb-6">[ Diagnostic artifacts ]</p>
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-balance md:text-6xl">
              The work leaves operating assets behind.
            </h2>
          </div>
        </div>
        <div className="grid gap-4 lg:col-span-7">
          {artifacts.map(([title, body], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0.4, y: 36, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.5, once: false }}
              transition={{ duration: 0.65, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-lg border border-[var(--border)] bg-[#07070A] p-7"
            >
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="kbd text-[var(--accent)]">Artifact 0{index + 1}</p>
                  <h3 className="mt-5 font-display text-4xl tracking-tight">{title}</h3>
                  <p className="mt-4 max-w-xl text-[var(--foreground)]/62">{body}</p>
                </div>
                <BarChart3 className="size-5 shrink-0 text-[var(--accent)]" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
