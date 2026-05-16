import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealText } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { Marquee } from "@/components/marquee";
import { HeroCardField } from "@/components/hero-card-field";
import { HeroScrollActions } from "@/components/hero-scroll-actions";
import { HeroScrollTitle } from "@/components/hero-scroll-title";
import {
  CameraCommandCenter,
  CreativeAssetWall,
  MediaProofWall,
  ResultsRail,
  SocialSignalWall,
  StickyGrowthSystem,
} from "@/components/home-sections";
import { brands, cases, creativeAssets, insights, metrics, principles, services, socialAssets } from "@/lib/content";

const heroImageGrid = Array.from({ length: 20 }, (_, index) => {
  const id = String(index + 1).padStart(2, "0");
  return `/hero-cache/hero-${id}.jpg`;
});

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[170svh] items-start overflow-x-clip px-0 pb-0 pt-24 sm:min-h-[165vh] sm:pt-28 lg:min-h-[178vh] lg:pt-32">
        <div className="absolute inset-0 gradient-radial pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none">
          <HeroCardField images={heroImageGrid} />
          <div className="absolute inset-x-0 top-0 z-[12] h-28 bg-gradient-to-b from-[var(--surface)] to-transparent" />
        </div>

        <div className="sticky top-0 z-20 mx-auto flex h-svh w-full max-w-[1400px] flex-col justify-between px-5 pb-9 pt-24 sm:px-6 sm:pb-12 sm:pt-28 lg:px-10 lg:pb-16 lg:pt-32">
          <HeroScrollTitle className="mx-auto max-w-5xl text-center font-display text-[11.8vw] leading-[1.28] tracking-tight text-balance sm:text-[9.5vw] sm:leading-[0.86] md:text-[7.6vw] lg:text-[6.9rem] xl:text-[7.8rem]">
            <RevealText text="A growth" />{" "}
            <RevealText text="operating system" className="italic text-[var(--muted)]" delay={0.15} />
            <br />
            <RevealText text="for ecommerce." delay={0.3} />
          </HeroScrollTitle>

          <HeroScrollActions className="mx-auto w-full max-w-xl text-center">
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary justify-center px-5 py-3 text-sm sm:px-6">
                Apply to Work Together <ArrowUpRight className="size-4" />
              </Link>
              <Link
                href="/contact?audit=1"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white px-5 py-3 text-sm font-medium text-[var(--palette-navy)] transition hover:-translate-y-px hover:shadow-[0_10px_32px_-12px_rgba(255,255,255,0.7)] sm:px-6"
              >
                Request a Growth Audit
              </Link>
            </div>
          </HeroScrollActions>
        </div>
      </section>

      {/* PROOF BRIDGE */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <p className="kbd mb-6">[ 02: Profit proof ]</p>
              <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-balance md:text-7xl lg:text-8xl">
                Proven. Preferred. <em className="italic text-[var(--accent)]">Measured</em> in profit.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.12}>
              <p className="text-lg text-[var(--foreground)]/70">
                Every growth decision is tied to contribution margin, payback, and customer value so scale has a clear
                commercial signal.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-lg bg-[var(--border)] md:grid-cols-2 lg:grid-cols-4">
            <Reveal className="bg-[var(--palette-navy)] p-7 lg:p-9">
              <p className="font-display text-5xl tracking-tight md:text-6xl">
                $<Counter to={420} suffix="M+" />
              </p>
              <p className="kbd mt-4">{metrics[0].label}</p>
            </Reveal>
            <Reveal className="bg-[var(--palette-navy)] p-7 lg:p-9" delay={0.06}>
              <p className="font-display text-5xl tracking-tight md:text-6xl">
                $<Counter to={140} suffix="M+" />
              </p>
              <p className="kbd mt-4">{metrics[1].label}</p>
            </Reveal>
            <Reveal className="bg-[var(--palette-navy)] p-7 lg:p-9" delay={0.12}>
              <p className="font-display text-5xl tracking-tight md:text-6xl">
                <Counter to={120} suffix="+" />
              </p>
              <p className="kbd mt-4">{metrics[2].label}</p>
            </Reveal>
            <Reveal className="bg-[var(--palette-navy)] p-7 lg:p-9" delay={0.18}>
              <p className="font-display text-5xl tracking-tight md:text-6xl">
                <Counter to={3.4} decimals={1} suffix="x" />
              </p>
              <p className="kbd mt-4">{metrics[3].label}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BRAND BAND */}
      <section className="border-y border-[var(--border)] bg-[var(--foreground)] text-[var(--palette-navy)]">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-10 lg:grid-cols-12 lg:items-center lg:px-10">
          <div className="lg:col-span-3">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[var(--palette-navy)]/60">Trusted by 120+ brands</p>
          </div>
          <div className="overflow-hidden lg:col-span-9">
            <Marquee>
              {brands.map((brand) => (
                <span key={brand} className="font-display text-3xl tracking-tight text-[var(--palette-navy)]/70 md:text-4xl">
                  {brand}
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      <CameraCommandCenter cases={cases} />

      <StickyGrowthSystem services={services} />

      <ResultsRail cases={cases} />

      <MediaProofWall cases={cases} assets={creativeAssets} />

      <CreativeAssetWall assets={creativeAssets} />

      <SocialSignalWall assets={socialAssets} />

      {/* PRINCIPLES */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="kbd mb-6">[ 05: Operating principles ]</p>
              <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-balance md:text-6xl">
                The thesis behind the work.
              </h2>
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            {principles.map((principle, index) => (
              <Reveal key={principle.n} delay={index * 0.06} className="border-t border-[var(--border)] py-10 md:py-12">
                <div className="grid gap-6 md:grid-cols-[120px_1fr]">
                  <p className="font-display text-6xl leading-none text-[var(--accent)]/80">{principle.n}</p>
                  <div>
                    <h3 className="font-display text-4xl tracking-tight md:text-5xl">{principle.t}</h3>
                    <p className="mt-4 max-w-2xl text-lg text-[var(--foreground)]/68">{principle.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--foreground)] py-24 text-[var(--palette-navy)] lg:py-32">
        <div aria-hidden className="absolute -bottom-[5vw] left-0 right-0 font-display text-[18vw] leading-none tracking-tighter text-[var(--palette-navy)]/5">
          MEMO
        </div>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[var(--palette-navy)]/55">[ 06: The growth memo ]</p>
              <h2 className="mt-6 font-display max-w-[15ch] text-5xl leading-[0.92] tracking-tight text-balance md:text-7xl lg:text-8xl">
                Field notes from the operators scaling the floor.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.12}>
              <div className="rounded-lg border border-[var(--palette-navy)]/12 bg-[var(--surface)] p-6 text-[var(--foreground)]">
                <p className="kbd text-[var(--accent)]">Weekly operator readout</p>
                <p className="mt-5 text-sm text-[var(--foreground)]/68">
                  One useful teardown each week: spend decisions, creative patterns, retention moves, and the math
                  behind profitable scale.
                </p>
                <form className="mt-6 flex gap-2">
                  <input
                    type="email"
                    placeholder="founder@brand.com"
                    className="min-w-0 flex-1 rounded-full border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[var(--muted)]"
                  />
                  <button className="rounded-full bg-[var(--accent)] px-5 text-sm font-medium text-[var(--palette-navy)]">
                    Join
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

          <div className="relative mt-16 grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Link
                href={`/insights/${insights[0].slug}`}
                className="group flex min-h-[480px] flex-col justify-between rounded-lg border border-[var(--palette-navy)]/12 bg-[var(--surface)] p-8 text-[var(--foreground)] transition hover:-translate-y-1 md:p-10"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="kbd text-[var(--accent)]">{insights[0].category}</span>
                  <span className="kbd">{insights[0].read}</span>
                </div>
                <div>
                  <h3 className="font-display max-w-[14ch] text-5xl leading-[0.96] tracking-tight text-balance md:text-6xl">
                    {insights[0].title}
                  </h3>
                  <p className="mt-6 max-w-xl text-[var(--foreground)]/65">{insights[0].excerpt}</p>
                </div>
                <div className="flex items-center justify-between border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
                  <span>{insights[0].date}</span>
                  <ArrowUpRight className="size-5 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
                </div>
              </Link>
            </Reveal>

            <div className="grid gap-3 lg:col-span-5">
              {insights.slice(1, 5).map((post, index) => (
                <Reveal key={post.slug} delay={index * 0.08}>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="group grid gap-8 rounded-lg border border-[var(--palette-navy)]/12 bg-[var(--palette-orange)] p-6 transition hover:bg-[var(--palette-orange)] md:grid-cols-[1fr_auto] md:items-center"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[var(--palette-navy)]/48">
                        <span>{post.category}</span>
                        <span>{post.read}</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="mt-6 font-display text-3xl leading-tight tracking-tight text-balance">
                        {post.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="size-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
