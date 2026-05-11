import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ReviewsMomentumWall } from "@/components/immersive-pages";
import { Reveal, RevealText } from "@/components/reveal";
import { testimonials } from "@/lib/pages";

export const metadata = {
  title: "Reviews | Leading Social",
  description: "Partner feedback and proof points from ecommerce brands working with Leading Social.",
};

export default function ReviewsPage() {
  const proof = ["120+ brand partners", "$420M+ tracked revenue", "22 month avg. engagement", "US · UK · EU operators"];
  const themes = ["Embedded team cadence", "Forecast-led decision making", "Creative velocity", "Lifecycle compounding"];

  return (
    <>
      <section className="pt-36 pb-20 lg:pt-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="kbd mb-8">[ Reviews: Partner proof ]</p>
          </Reveal>
          <h1 className="font-display max-w-[16ch] text-[13vw] leading-[0.9] tracking-[-0.03em] text-balance md:text-[8vw] lg:text-[7.5rem]">
            <RevealText text="Momentum from" />{" "}
            <RevealText text="the operators." className="italic text-[var(--muted)]" />
          </h1>
          <Reveal delay={0.18}>
            <p className="mt-10 max-w-2xl text-xl text-[var(--foreground)]/75">
              Testimonials are useful only when they connect back to outcomes. These are the patterns partners call out
              after the system is actually operating.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--foreground)] py-12 text-[#07070A]">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 md:grid-cols-4 lg:px-10">
          {proof.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <p className="font-display text-4xl tracking-tight md:text-5xl">{item.split(" ")[0]}</p>
              <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[#07070A]/55">
                {item.split(" ").slice(1).join(" ")}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <ReviewsMomentumWall testimonials={testimonials} />

      <section className="border-y border-[var(--border)] bg-[var(--surface)]/35 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="kbd mb-6">[ What partners notice ]</p>
              <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
                The praise is about the operating rhythm.
              </h2>
            </div>
          </Reveal>
          <div className="space-y-4 lg:col-span-7">
            {themes.map((theme, index) => (
              <Reveal key={theme} delay={index * 0.05} className="rounded-lg border border-[var(--border)] bg-[#07070A] p-7">
                <div className="flex items-center justify-between gap-8">
                  <div>
                    <p className="kbd text-[var(--accent)]">Pattern 0{index + 1}</p>
                    <h3 className="mt-5 font-display text-4xl tracking-tight">{theme}</h3>
                  </div>
                  <ArrowRight className="size-5 shrink-0 text-[var(--accent)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-12 lg:items-end lg:px-10">
          <Reveal className="lg:col-span-8">
            <h2 className="font-display max-w-[18ch] text-5xl leading-[0.95] tracking-tight md:text-7xl">
              See the work behind the words.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:justify-self-end" delay={0.12}>
            <Link href="/case-studies" className="btn-primary">
              View case studies <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
