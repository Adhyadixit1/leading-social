import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cases } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <Link href="/case-studies" className="kbd inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)]">
              <ArrowLeft className="size-3" /> All case studies
            </Link>
          </Reveal>
          <Reveal className="mt-10">
            <p className="kbd">{c.sector}</p>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight mt-3 leading-[0.95] max-w-[16ch] text-balance">
              {c.brand}
            </h1>
            <p className="font-display text-3xl md:text-4xl mt-8 max-w-3xl text-[var(--foreground)]/85 text-balance">
              {c.headline}
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div
              className="aspect-[16/9] rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url('${c.image}')` }}
            />
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
          {c.stats.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.08} className="bg-[#07070A] p-8 lg:p-10">
              <p className="font-display text-5xl md:text-6xl tracking-tight" style={{ color: c.accent }}>{s.v}</p>
              <p className="text-[var(--muted)] mt-3 text-sm uppercase tracking-wider">{s.k}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <p className="kbd">[ The Challenge ]</p>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={0.1}>
            <p className="font-display text-3xl md:text-4xl leading-[1.2] text-balance">
              {c.brand} had hit a profitable plateau. Acquisition was capped, creative output had stalled, and
              retention wasn’t scaling LTV fast enough to justify pushing harder on paid.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <p className="kbd">[ The System ]</p>
          </Reveal>
          <Reveal className="lg:col-span-8 space-y-6 text-[var(--foreground)]/80 text-lg" delay={0.1}>
            <p>
              We rebuilt the growth stack around a contribution-margin P&L. Acquisition was rebuilt on incrementality,
              not last-click. The creative engine started shipping 80+ tests a month against a clear thesis matrix.
            </p>
            <p>
              Retention was rearchitected around RFM segments and replenishment journeys. Forecasting tied it all
              together so every weekly decision could be traced to its impact on cash and margin three months out.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <p className="kbd">[ The Outcome ]</p>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={0.1}>
            <p className="font-display text-3xl md:text-4xl leading-[1.15] text-balance">
              <em className="italic text-[var(--accent)]">{c.stats[0].v}</em> {c.stats[0].k.toLowerCase()}, with{" "}
              {c.stats[1].v} {c.stats[1].k.toLowerCase()} and {c.stats[2].v} {c.stats[2].k.toLowerCase()}, all while
              improving contribution margin.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <h2 className="font-display text-5xl md:text-6xl tracking-tight max-w-[18ch] text-balance">
            Want a teardown of <em className="italic text-[var(--accent)]">your</em> growth stack?
          </h2>
          <Link href="/contact" className="btn-primary">
            Request a Growth Audit <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
