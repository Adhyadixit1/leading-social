import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageSignalStack } from "@/components/page-motion";
import { Reveal, RevealText } from "@/components/reveal";
import { ServicesControlRoom, WeeklyCadenceConsole } from "@/components/immersive-pages";
import { ImageEvidenceBand, PageHeroImageGrid, showcaseImages } from "@/components/page-image-showcase";
import { servicePages } from "@/lib/pages";

export const metadata = {
  title: "Services | Leading Social",
  description:
    "An integrated growth operating system: paid acquisition, creative strategy, retention, and financial forecasting.",
};

const process = [
  { n: "01", t: "Diagnose", d: "Full P&L, channel, creative, lifecycle and cohort audit. We map where margin is leaking and where the next $1M lives." },
  { n: "02", t: "Model", d: "CAC : LTV cohort model and contribution-margin P&L become the single source of truth for every decision." },
  { n: "03", t: "Build", d: "Stand up the integrated system across acquisition, creative, retention and forecasting in a 60-day implementation." },
  { n: "04", t: "Compound", d: "Operate as your growth team. Weekly creative, daily pacing, monthly forecasting, quarterly board reviews." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:items-end lg:px-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="kbd mb-8">[ Services: One integrated system ]</p>
            </Reveal>
            <h1 className="font-display text-[12vw] md:text-[7.5vw] lg:text-[7rem] xl:text-[8rem] leading-[0.92] tracking-[-0.03em] text-balance max-w-[18ch]">
              <RevealText text="Not four services." />{" "}
              <RevealText text="One growth system." className="italic text-[var(--muted)]" />
            </h1>
            <Reveal delay={0.2}>
              <p className="mt-12 max-w-2xl text-lg text-[var(--foreground)]/75">
                Most agencies sell channels. We sell outcomes. The four pillars below run as one operating system,
                powered by AI tooling, operator judgement, and a forecasting layer that ties every decision to
                contribution profit.
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <PageHeroImageGrid images={[showcaseImages[0], showcaseImages[2], showcaseImages[6], showcaseImages[8]]} />
          </Reveal>
        </div>
      </section>

      <ImageEvidenceBand
        eyebrow="[ Creative inputs ]"
        title="The service mix is built from live market signal."
        images={showcaseImages.slice(0, 6)}
      />

      <PageSignalStack
        eyebrow="[ Operating room ]"
        title="Every pillar feeds one scoreboard."
        body="Services are only useful when the work moves as one system. This is the operating logic behind the individual pillars."
        items={[
          {
            label: "Input",
            title: "Channel signal",
            body: "Paid, creative, retention and forecast data are reviewed together so no team optimizes against a fake win.",
            metric: "01",
          },
          {
            label: "Motion",
            title: "Weekly reallocations",
            body: "Budget, creative volume and lifecycle work move toward the highest-confidence margin opportunity.",
            metric: "02",
          },
          {
            label: "Output",
            title: "Margin readout",
            body: "Every sprint ends with a contribution-profit readout that shows what changed and what compounds next.",
            metric: "03",
          },
          {
            label: "Scale",
            title: "Portfolio memory",
            body: "Winning patterns are saved into playbooks so the next launch starts from evidence instead of opinion.",
            metric: "04",
          },
        ]}
      />

      <ServicesControlRoom services={servicePages} />

      {/* Process */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="mb-16">
            <p className="kbd mb-6">[ Engagement ]</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight max-w-[18ch] text-balance">
              How we <em className="italic text-[var(--accent)]">work together</em>.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08} className="bg-[var(--surface)] p-8 lg:p-10 min-h-[280px] flex flex-col">
                <span className="kbd">{p.n}</span>
                <h3 className="font-display text-3xl tracking-tight mt-10">{p.t}</h3>
                <p className="text-[var(--foreground)]/70 mt-4 text-sm flex-1">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WeeklyCadenceConsole />

      <section className="py-24 border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-8">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-balance max-w-[20ch]">
              Doing <em className="italic">$3M+</em> in revenue? <em className="italic text-[var(--accent)]">Apply now.</em>
            </h2>
            <p className="text-[var(--muted)] mt-6 max-w-xl">
              We work with a small number of brands at a time so we can operate at the standard our partners deserve.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:justify-self-end" delay={0.15}>
            <Link href="/contact" className="btn-primary">
              Apply to Work Together <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
