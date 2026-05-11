import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealText } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { Marquee } from "@/components/marquee";
import { Globe } from "@/components/globe";
import {
  CameraCommandCenter,
  MediaProofWall,
  ResultsRail,
  SocialSignalWall,
  StickyGrowthSystem,
} from "@/components/home-sections";
import { brands, cases, insights, metrics, principles, services, socialAssets } from "@/lib/content";

const heroImageGrid = [
  socialAssets[0].image,
  cases[1].image,
  socialAssets[3].image,
  cases[0].image,
  socialAssets[2].image,
  cases[2].image,
  socialAssets[4].image,
  cases[3].image,
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0 gradient-radial pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-[58%] z-[4] grid w-[128vw] max-w-[1320px] -translate-x-1/2 -translate-y-1/2 grid-cols-2 gap-2 opacity-40 sm:grid-cols-4 sm:gap-3 sm:opacity-60 md:top-[60%]">
            {heroImageGrid.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-[#101014]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="absolute inset-0 bg-[#07070A]/38 sm:bg-[#07070A]/24" />
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-[43%] w-[112vw] max-w-[1120px] aspect-square pointer-events-auto opacity-100">
            <Globe />
          </div>
          <div className="absolute inset-0 z-[5] bg-[radial-gradient(ellipse_58%_44%_at_50%_55%,rgba(7,7,10,0.36)_0%,rgba(7,7,10,0.18)_48%,rgba(7,7,10,0.05)_72%,transparent_90%)]" />
          <div className="absolute inset-x-0 bottom-0 z-[12] h-48 bg-gradient-to-t from-[#07070A] via-[#07070A]/75 to-transparent" />
          <div className="absolute inset-x-0 top-0 z-[12] h-32 bg-gradient-to-b from-[#07070A] to-transparent" />
          <div className="absolute inset-y-0 left-0 z-[12] w-24 bg-gradient-to-r from-[#07070A] to-transparent" />
          <div className="absolute inset-y-0 right-0 z-[12] w-24 bg-gradient-to-l from-[#07070A] to-transparent" />
        </div>

        <div className="relative z-20 mx-auto max-w-[1400px] px-6 lg:px-10 w-full">
          <Reveal className="flex items-center justify-center gap-3 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
            </span>
            <p className="kbd">[ Scaling Shopify brands across US · UK · EU ]</p>
          </Reveal>

          <h1 className="font-display text-center text-[14vw] md:text-[10vw] lg:text-[8.5rem] xl:text-[10rem] leading-[0.9] tracking-[-0.035em] text-balance">
            <RevealText text="A growth" />{" "}
            <RevealText text="operating system" className="italic text-[var(--muted)]" delay={0.15} />
            <br />
            <RevealText text="for ecommerce." delay={0.3} />
          </h1>

          <Reveal className="mt-10 lg:mt-14 max-w-2xl mx-auto text-center" delay={0.5}>
            <p className="text-lg md:text-xl text-[var(--foreground)]/75 text-pretty">
              We help Shopify brands doing <span className="text-[var(--foreground)]">$5M to $30M</span> scale
              profitably by combining paid acquisition, creative strategy, retention and financial forecasting into one
              operator-led system.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <Link href="/contact" className="btn-primary">
                Apply to Work Together <ArrowUpRight className="size-4" />
              </Link>
              <Link href="/contact?audit=1" className="btn-ghost">
                Request a Growth Audit
              </Link>
            </div>
          </Reveal>

          {/* Floating live metric strip */}
          <Reveal delay={0.7} className="mt-14 lg:mt-20">
            <div className="card mx-auto max-w-3xl p-4 md:p-5 bg-[#07070A]/80">
              <div className="flex items-center justify-between gap-6 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]" />
                  </span>
                  <p className="kbd">Live · Q2 portfolio</p>
                </div>
                <div className="flex items-center gap-6 md:gap-10 text-sm">
                  <div>
                    <p className="font-display text-xl md:text-2xl leading-none">
                      <Counter to={3.8} decimals={1} suffix="x" />
                    </p>
                    <p className="text-[var(--muted)] text-[11px] mt-1 uppercase tracking-wider">Blended ROAS</p>
                  </div>
                  <div className="h-8 w-px bg-[var(--border)]" />
                  <div>
                    <p className="font-display text-xl md:text-2xl leading-none">
                      <Counter to={27} suffix="d" />
                    </p>
                    <p className="text-[var(--muted)] text-[11px] mt-1 uppercase tracking-wider">CAC payback</p>
                  </div>
                  <div className="h-8 w-px bg-[var(--border)] hidden sm:block" />
                  <div className="hidden sm:block">
                    <p className="font-display text-xl md:text-2xl leading-none">
                      <Counter to={62} suffix="%" />
                    </p>
                    <p className="text-[var(--muted)] text-[11px] mt-1 uppercase tracking-wider">LTV uplift</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
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
            <Reveal className="bg-[#0B0B0E] p-7 lg:p-9">
              <p className="font-display text-5xl tracking-tight md:text-6xl">
                $<Counter to={420} suffix="M+" />
              </p>
              <p className="kbd mt-4">{metrics[0].label}</p>
            </Reveal>
            <Reveal className="bg-[#0B0B0E] p-7 lg:p-9" delay={0.06}>
              <p className="font-display text-5xl tracking-tight md:text-6xl">
                $<Counter to={140} suffix="M+" />
              </p>
              <p className="kbd mt-4">{metrics[1].label}</p>
            </Reveal>
            <Reveal className="bg-[#0B0B0E] p-7 lg:p-9" delay={0.12}>
              <p className="font-display text-5xl tracking-tight md:text-6xl">
                <Counter to={120} suffix="+" />
              </p>
              <p className="kbd mt-4">{metrics[2].label}</p>
            </Reveal>
            <Reveal className="bg-[#0B0B0E] p-7 lg:p-9" delay={0.18}>
              <p className="font-display text-5xl tracking-tight md:text-6xl">
                <Counter to={3.4} decimals={1} suffix="x" />
              </p>
              <p className="kbd mt-4">{metrics[3].label}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BRAND BAND */}
      <section className="border-y border-[var(--border)] bg-[var(--foreground)] text-[#07070A]">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-10 lg:grid-cols-12 lg:items-center lg:px-10">
          <div className="lg:col-span-3">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[#07070A]/60">Trusted by 120+ brands</p>
          </div>
          <div className="overflow-hidden lg:col-span-9">
            <Marquee>
              {brands.map((brand) => (
                <span key={brand} className="font-display text-3xl tracking-tight text-[#07070A]/70 md:text-4xl">
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

      <MediaProofWall cases={cases} />

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
      <section className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--foreground)] py-24 text-[#07070A] lg:py-32">
        <div aria-hidden className="absolute -bottom-[5vw] left-0 right-0 font-display text-[18vw] leading-none tracking-tighter text-[#07070A]/5">
          MEMO
        </div>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[#07070A]/55">[ 06: The growth memo ]</p>
              <h2 className="mt-6 font-display max-w-[15ch] text-5xl leading-[0.92] tracking-tight text-balance md:text-7xl lg:text-8xl">
                Field notes from the operators scaling the floor.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.12}>
              <div className="rounded-lg border border-[#07070A]/12 bg-[#07070A] p-6 text-[var(--foreground)]">
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
                  <button className="rounded-full bg-[var(--accent)] px-5 text-sm font-medium text-[#07070A]">
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
                className="group flex min-h-[480px] flex-col justify-between rounded-lg border border-[#07070A]/12 bg-[#07070A] p-8 text-[var(--foreground)] transition hover:-translate-y-1 md:p-10"
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
                    className="group grid gap-8 rounded-lg border border-[#07070A]/12 bg-[#F7F4EE] p-6 transition hover:bg-white md:grid-cols-[1fr_auto] md:items-center"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[#07070A]/48">
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
