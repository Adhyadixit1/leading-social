import { InsightsEditorialRoom } from "@/components/immersive-pages";
import { PageSignalStack } from "@/components/page-motion";
import { Reveal, RevealText } from "@/components/reveal";
import { insights } from "@/lib/content";

export const metadata = {
  title: "Insights | Leading Social",
  description: "Operator playbooks on Shopify growth, paid acquisition, creative testing, retention and AI in ecommerce.",
};

const categories = ["All", "Paid Acquisition", "Creative Strategy", "Retention", "Financial Forecasting", "Shopify Growth", "AI & Data"];

export default function InsightsPage() {
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="kbd mb-8">[ Insights: Operator playbooks ]</p>
          </Reveal>
          <h1 className="font-display text-[12vw] md:text-[7.5vw] lg:text-[7rem] xl:text-[8rem] leading-[0.92] tracking-[-0.03em] text-balance max-w-[18ch]">
            <RevealText text="Field notes from" />{" "}
            <RevealText text="the growth floor." className="italic text-[var(--muted)]" />
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-12 max-w-2xl text-lg text-[var(--foreground)]/75">
              Long-form playbooks, frameworks and teardowns for serious ecommerce operators. No fluff. No top-of-funnel
              SEO bait. Just what we’re actually using to scale brands today.
            </p>
          </Reveal>
        </div>
      </section>

      <PageSignalStack
        eyebrow="[ Editorial system ]"
        title="Playbooks organized by operator problem."
        body="The content library is built around the decisions ecommerce teams face every week, from spend pacing to retention economics."
        items={[
          {
            label: "Finance",
            title: "Cash before scale",
            body: "Frameworks for modeling CAC, LTV, payback and contribution margin before increasing spend.",
            metric: "01",
          },
          {
            label: "Creative",
            title: "Velocity without drift",
            body: "Systems for shipping more tests while keeping brand, offer and audience logic coherent.",
            metric: "02",
          },
          {
            label: "Retention",
            title: "LTV engineering",
            body: "Lifecycle work that moves repeat rate, replenishment, subscription and VIP behavior.",
            metric: "03",
          },
          {
            label: "AI",
            title: "Useful automation",
            body: "Where AI can support modeling, ideation and analysis without replacing operator judgement.",
            metric: "04",
          },
        ]}
      />

      <section className="border-y border-[var(--border)]">
        <div className="mx-auto flex max-w-[1400px] items-center gap-3 overflow-x-auto px-6 py-5 lg:px-10">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                i === 0
                  ? "border-[var(--accent)] bg-[var(--accent)] text-[#07070A]"
                  : "border-[var(--border)] text-[var(--foreground)]/75 hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <InsightsEditorialRoom insights={insights} />

      <section className="py-24 border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-7">
            <p className="kbd mb-6">[ Newsletter ]</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight max-w-[18ch] text-balance">
              The growth memo, <em className="italic text-[var(--accent)]">weekly</em>.
            </h2>
            <p className="text-[var(--muted)] mt-6 max-w-lg">
              One operator-grade breakdown each week, what’s working, what isn’t, and the math behind it.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.15}>
            <form className="flex flex-col sm:flex-row gap-3 card p-3">
              <input
                type="email"
                required
                placeholder="founder@yourbrand.com"
                className="flex-1 bg-transparent px-4 py-3 outline-none text-sm placeholder:text-[var(--muted)]"
              />
              <button type="submit" className="btn-primary justify-center">Subscribe</button>
            </form>
            <p className="text-xs text-[var(--muted)] mt-3">Unsubscribe anytime. No fluff, ever.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
