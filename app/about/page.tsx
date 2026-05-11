import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageSignalStack } from "@/components/page-motion";
import { Reveal, RevealText } from "@/components/reveal";
import { principles } from "@/lib/content";

export const metadata = {
  title: "About | Leading Social",
  description:
    "A founder-led growth partner for ecommerce operators. The story, the philosophy, the system.",
};

const timeline = [
  {
    year: "2016",
    title: "First brand at $0 → $1M",
    body: "Leighton starts running paid acquisition for an early Shopify brand out of Dublin. Learns the gap between agency theory and operator reality.",
  },
  {
    year: "2018",
    title: "In-house operator",
    body: "Joins a fast-scaling DTC brand as Head of Growth. Builds the internal media buying, creative, and lifecycle systems that take it past $20M.",
  },
  {
    year: "2020",
    title: "Leading Social founded",
    body: "Launches Leading Social to bring operator-grade growth systems to other ecommerce founders. Five clients in year one, all ex-operator referrals.",
  },
  {
    year: "2022",
    title: "Creative + retention pillars",
    body: "Adds in-house performance creative and lifecycle teams. The system becomes integrated, not channel-by-channel.",
  },
  {
    year: "2024",
    title: "Forecasting layer",
    body: "Codifies CAC : LTV and contribution-margin modeling as a standalone pillar. AI is woven into ideation, modeling and analysis.",
  },
  {
    year: "2026",
    title: "120+ brands, $420M+ tracked",
    body: "Today, Leading Social runs the growth operating system for 8 & 9-figure Shopify brands across the US, UK and EU.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="kbd mb-8">[ About: A founder story ]</p>
          </Reveal>
          <h1 className="font-display text-[12vw] md:text-[7.5vw] lg:text-[7rem] xl:text-[8rem] leading-[0.92] tracking-[-0.03em] text-balance max-w-[18ch]">
            <RevealText text="Built by operators" />{" "}
            <RevealText text="for operators." className="italic text-[var(--muted)]" />
          </h1>

          <div className="grid lg:grid-cols-12 gap-10 mt-16">
            <Reveal className="lg:col-span-7" delay={0.2}>
              <p className="text-xl text-[var(--foreground)]/80 max-w-2xl text-pretty">
                Leading Social isn’t a marketing agency. It’s a growth operating system, run by people who have
                actually built ecommerce P&Ls. We exist for serious founders who measure success in contribution
                margin and lifetime value, not in screenshots of last-click ROAS.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.3}>
              <div className="card p-6">
                <p className="kbd mb-4">By the numbers</p>
                <dl className="space-y-3 text-sm">
                  <Row k="Founded" v="2020 · Dublin" />
                  <Row k="Brands partnered" v="120+" />
                  <Row k="Tracked revenue" v="$420M+" />
                  <Row k="Avg. engagement" v="22 months" />
                  <Row k="Markets" v="US · UK · EU" />
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <p className="kbd mb-6">[ Founder ]</p>
            <p className="font-display text-3xl">Leighton, Founder &amp; CEO</p>
            <p className="text-[var(--muted)] mt-2 text-sm">Ex-Head of Growth · 9-figure operator</p>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.15}>
            <p className="font-display text-3xl md:text-4xl leading-[1.15] text-balance">
              <em className="italic text-[var(--muted)]">“</em>I’ve sat on both sides of the table, running growth
              inside a fast-scaling brand, and running an agency that serves them. The thing that separates the
              brands that actually make it from the ones that stall is whether marketing is run as an integrated
              system, or as four disconnected vendors.<em className="italic text-[var(--muted)]">”</em>
            </p>
            <p className="text-[var(--muted)] mt-8">
              We built Leading Social to be the integrated system. Acquisition, creative, retention and forecasting
              under one roof, run by operators, and accountable to one number: contribution profit.
            </p>
          </Reveal>
        </div>
      </section>

      <PageSignalStack
        eyebrow="[ Operator room ]"
        title="How the team actually works."
        body="Leading Social is built around operating habits, not agency theater. The same people who plan the work stay close to the numbers."
        items={[
          {
            label: "Cadence",
            title: "Monday model",
            body: "The week starts with cash, payback, stock position and contribution-margin targets before any channel work is approved.",
            metric: "M",
          },
          {
            label: "Creative",
            title: "Signal library",
            body: "Hooks, offers, objections and winning angles are saved as reusable memory across every partner account.",
            metric: "80+",
          },
          {
            label: "Decision",
            title: "One owner table",
            body: "Every sprint has a clear owner, a clear bet and a commercial reason for existing.",
            metric: "1",
          },
          {
            label: "Review",
            title: "Board-ready readouts",
            body: "Performance is translated into the language founders, finance leads and operators can all act on.",
            metric: "Q",
          },
        ]}
      />

      {/* Timeline */}
      <section className="py-28 lg:py-36 border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="mb-20">
            <p className="kbd mb-6">[ The Journey ]</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-balance max-w-[18ch]">
              A decade in the <em className="italic text-[var(--accent)]">trenches</em>.
            </h2>
          </Reveal>

          <ol className="relative">
            <span className="absolute left-[7.5rem] top-2 bottom-2 w-px bg-[var(--border)] hidden md:block" />
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <li className="grid md:grid-cols-[7rem_1fr] gap-6 md:gap-12 py-10 border-b border-[var(--border)] last:border-0">
                  <div className="font-display text-3xl text-[var(--accent)]">{t.year}</div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight">{t.title}</h3>
                    <p className="text-[var(--foreground)]/70 mt-3 max-w-2xl">{t.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="py-28 lg:py-36 border-t border-[var(--border)] bg-[var(--surface)]/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="mb-16">
            <p className="kbd mb-6">[ Operating Principles ]</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight max-w-[20ch]">
              How we think.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-x-24 lg:gap-y-16">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08} className="border-t border-[var(--border)] pt-8">
                <div className="flex items-start gap-6">
                  <span className="kbd mt-1">{p.n}</span>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl tracking-tight">{p.t}</h3>
                    <p className="text-[var(--foreground)]/70 mt-3 max-w-md">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-8">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-balance max-w-[18ch]">
              Think we’re a fit? <em className="italic text-[var(--accent)]">Let’s talk.</em>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:justify-self-end" delay={0.15}>
            <Link href="/contact" className="btn-primary">
              Apply to Work With Us <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-3 last:border-0 last:pb-0">
      <dt className="text-[var(--muted)]">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
