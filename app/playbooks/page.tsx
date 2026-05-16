import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealText } from "@/components/reveal";
import { playbooks } from "@/lib/pages";

export const metadata = {
  title: "Playbooks | Leading Social",
  description: "Growth playbooks for ecommerce teams on acquisition, creative, retention, forecasting, and profitable scale.",
};

export default function PlaybooksPage() {
  const tracks = ["Acquisition", "Creative", "Retention", "Forecasting", "AI & Data"];

  return (
    <>
      <section className="pt-36 pb-20 lg:pt-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="kbd mb-8">[ Playbooks: Operator systems ]</p>
          </Reveal>
          <h1 className="font-display max-w-[16ch] text-[13vw] leading-[0.9] tracking-[-0.03em] text-balance md:text-[8vw] lg:text-[7.5rem]">
            <RevealText text="Systems you can" />{" "}
            <RevealText text="actually run." className="italic text-[var(--muted)]" />
          </h1>
          <Reveal delay={0.18}>
            <p className="mt-10 max-w-2xl text-xl text-[var(--foreground)]/75">
              A deeper resources hub for founders and growth leads who want operating frameworks, not generic advice.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--border)]">
        <div className="mx-auto flex max-w-[1400px] gap-3 overflow-x-auto px-6 py-5 lg:px-10">
          {tracks.map((track, index) => (
            <span
              key={track}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm ${
                index === 0
                  ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--palette-navy)]"
                  : "border-[var(--border)] text-[var(--foreground)]/72"
              }`}
            >
              {track}
            </span>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 lg:grid-cols-12 lg:items-end lg:px-10">
          <Reveal className="lg:col-span-7">
            <p className="kbd mb-6 text-[var(--accent)]">Featured system</p>
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              The 90-day contribution-margin sprint.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.12}>
            <p className="text-lg text-[var(--foreground)]/68">
              Diagnose margin leaks, reset the scorecard, rebuild the sprint cadence, and make every growth decision
              easier to defend.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-px overflow-hidden rounded-lg bg-[var(--border)] md:grid-cols-2">
            {playbooks.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="bg-[var(--surface)] p-8 transition hover:bg-[var(--surface)] lg:p-10">
                <p className="kbd text-[var(--accent)]">{item.category}</p>
                <h2 className="mt-16 font-display text-4xl leading-tight tracking-tight text-balance">{item.title}</h2>
                <p className="mt-5 max-w-xl text-[var(--foreground)]/65">{item.body}</p>
                <Link href="/insights" className="mt-10 inline-flex items-center gap-2 text-sm text-[var(--foreground)]/80 hover:text-[var(--accent)]">
                  Read related insights <ArrowUpRight className="size-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface)]/35 py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-12 lg:items-center lg:px-10">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display max-w-[16ch] text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Want the weekly operating memo?
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <form className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 sm:flex sm:gap-3">
              <input
                type="email"
                placeholder="founder@brand.com"
                className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[var(--muted)]"
              />
              <button className="btn-primary mt-3 w-full justify-center sm:mt-0 sm:w-auto">Subscribe</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
