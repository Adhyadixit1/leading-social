import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, RevealText } from "@/components/reveal";

export const metadata = {
  title: "Growth Audit | Leading Social",
  description: "A diagnostic for Shopify brands ready to find margin leaks, creative bottlenecks, and profitable scale opportunities.",
};

const audit = [
  "Channel and spend efficiency",
  "Creative testing velocity",
  "Lifecycle revenue and segmentation",
  "CAC, LTV, payback, and contribution margin",
  "Forecasting, cash, and inventory constraints",
  "90-day operating plan",
];

export default function GrowthAuditPage() {
  const scorecard = [
    ["Media", "Spend efficiency, incrementality, pacing, channel mix"],
    ["Creative", "Testing velocity, hook diversity, winner extraction"],
    ["Lifecycle", "Flow coverage, segmentation, retention economics"],
    ["Finance", "CAC, payback, margin, inventory, cash timing"],
  ];
  const faq = [
    ["Who is this for?", "Shopify brands doing roughly $3M+ with enough spend or customer data to diagnose profitably."],
    ["How long does it take?", "We review the application first, then run a focused audit and fit call within the same intake window."],
    ["Do we need to become a client?", "No. The audit is designed to be useful on its own and clear about whether ongoing work makes sense."],
  ];

  return (
    <>
      <section className="pt-36 pb-20 lg:pt-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="kbd mb-8">[ Growth Audit ]</p>
          </Reveal>
          <h1 className="font-display max-w-[16ch] text-[13vw] leading-[0.9] tracking-[-0.03em] text-balance md:text-[8vw] lg:text-[7.5rem]">
            <RevealText text="Find the next" />{" "}
            <RevealText text="$1M in margin." className="italic text-[var(--muted)]" />
          </h1>
          <Reveal delay={0.18}>
            <p className="mt-10 max-w-2xl text-xl text-[var(--foreground)]/75">
              A focused diagnostic for founders and growth teams who need to know what to fix before they scale spend.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--border)]">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-[var(--border)] px-6 lg:grid-cols-3 lg:px-10">
          {audit.map((item, index) => (
            <Reveal key={item} delay={index * 0.05} className="bg-[#07070A] p-8 lg:p-10">
              <p className="kbd text-[var(--accent)]">Audit lane 0{index + 1}</p>
              <h2 className="mt-10 font-display text-3xl tracking-tight">{item}</h2>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)]/35 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="kbd mb-6">[ Scorecard ]</p>
              <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
                We score the system, not just the ads account.
              </h2>
              <p className="mt-6 text-[var(--foreground)]/65">
                The audit is built to reveal where profit is leaking across the full customer journey.
              </p>
            </div>
          </Reveal>
          <div className="space-y-4 lg:col-span-7">
            {scorecard.map(([title, body], index) => (
              <Reveal key={title} delay={index * 0.05} className="rounded-lg border border-[var(--border)] bg-[#07070A] p-7">
                <div className="grid gap-5 md:grid-cols-[120px_1fr]">
                  <p className="font-display text-5xl text-[var(--accent)]">0{index + 1}</p>
                  <div>
                    <h3 className="font-display text-4xl tracking-tight">{title}</h3>
                    <p className="mt-3 text-[var(--foreground)]/65">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              What you get back.
            </h2>
          </Reveal>
          <Reveal className="space-y-6 lg:col-span-6" delay={0.1}>
            {["A prioritized margin-leak map", "A channel and creative scorecard", "A 90-day profitable scale plan", "A fit call with a senior strategist"].map((item) => (
              <div key={item} className="flex items-center justify-between border-b border-[var(--border)] pb-5">
                <p className="text-lg text-[var(--foreground)]/78">{item}</p>
                <ArrowRight className="size-4 text-[var(--accent)]" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="mb-14">
            <p className="kbd mb-6">[ Common questions ]</p>
            <h2 className="font-display max-w-[15ch] text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Specific answers before you apply.
            </h2>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-3">
            {faq.map(([question, answer], index) => (
              <Reveal key={question} delay={index * 0.06} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-8">
                <p className="kbd text-[var(--accent)]">0{index + 1}</p>
                <h3 className="mt-10 font-display text-3xl tracking-tight">{question}</h3>
                <p className="mt-4 text-[var(--foreground)]/65">{answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-12 lg:items-end lg:px-10">
          <Reveal className="lg:col-span-8">
            <h2 className="font-display max-w-[18ch] text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Ready for the diagnostic?
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:justify-self-end" delay={0.12}>
            <Link href="/contact?audit=1" className="btn-primary">
              Apply for audit <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
