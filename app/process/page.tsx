import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DiagnosticArtifactWall, ProcessOperatingTimeline, WeeklyCadenceConsole } from "@/components/immersive-pages";
import { Reveal, RevealText } from "@/components/reveal";
import { processSteps } from "@/lib/pages";

export const metadata = {
  title: "Process | Leading Social",
  description: "How Leading Social diagnoses, models, builds, operates, and compounds profitable ecommerce growth.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="pt-36 pb-20 lg:pt-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="kbd mb-8">[ Process: How the system runs ]</p>
          </Reveal>
          <h1 className="font-display max-w-[17ch] text-[13vw] leading-[0.9] tracking-[-0.03em] text-balance md:text-[8vw] lg:text-[7.5rem]">
            <RevealText text="From audit to" />{" "}
            <RevealText text="operating rhythm." className="italic text-[var(--muted)]" />
          </h1>
          <Reveal delay={0.18}>
            <p className="mt-10 max-w-2xl text-xl text-[var(--foreground)]/75">
              The process is built to feel less like a vendor handoff and more like a growth room: diagnostics,
              models, weekly decisions, and compounding standards.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--foreground)] py-12 text-[#07070A]">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 md:grid-cols-4 lg:px-10">
          {["48h audit review", "30d model build", "60d system launch", "90d scale plan"].map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <p className="font-display text-5xl tracking-tight">{item.split(" ")[0]}</p>
              <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[#07070A]/55">
                {item.split(" ").slice(1).join(" ")}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessOperatingTimeline steps={processSteps} />

      <DiagnosticArtifactWall />

      <WeeklyCadenceConsole />

      <section className="border-t border-[var(--border)] py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-12 lg:items-end lg:px-10">
          <Reveal className="lg:col-span-8">
            <h2 className="font-display max-w-[18ch] text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Start with the diagnostic.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:justify-self-end" delay={0.12}>
            <Link href="/growth-audit" className="btn-primary">
              Request a Growth Audit <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
