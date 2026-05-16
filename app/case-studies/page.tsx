import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CaseStudyCinematicRail } from "@/components/immersive-pages";
import { PageSignalStack } from "@/components/page-motion";
import { Reveal, RevealText } from "@/components/reveal";
import { cases } from "@/lib/content";

export const metadata = {
  title: "Case Studies | Leading Social",
  description: "Selected work with 8 & 9-figure Shopify brands across beauty, apparel, supplements and consumer.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="kbd mb-8">[ Case Studies: Selected work ]</p>
          </Reveal>
          <h1 className="font-display text-[12vw] md:text-[7.5vw] lg:text-[7rem] xl:text-[8rem] leading-[0.92] tracking-[-0.03em] text-balance max-w-[18ch]">
            <RevealText text="Receipts," />{" "}
            <RevealText text="not promises." className="italic text-[var(--muted)]" />
          </h1>
        </div>
      </section>

      <PageSignalStack
        eyebrow="[ Proof engine ]"
        title="The method behind the outcomes."
        body="The case studies are not isolated wins. They come from the same operating system applied to different commercial constraints."
        items={[
          {
            label: "Beauty",
            title: "Margin-led acquisition",
            body: "Scale was unlocked only after payback windows, offer economics and creative tests were tied to one model.",
            metric: "+312%",
          },
          {
            label: "Apparel",
            title: "Creative velocity",
            body: "Testing volume increased without breaking brand standards because every concept had a defined role.",
            metric: "84",
          },
          {
            label: "Supplements",
            title: "Lifecycle economics",
            body: "Retention moved from broadcast calendar to segment-level revenue system with replenishment logic.",
            metric: "3.6x",
          },
          {
            label: "Home",
            title: "Forecast-led scale",
            body: "Inventory, demand and paid media were planned together so growth did not create cash pressure.",
            metric: "97%",
          },
        ]}
        light
      />

      <CaseStudyCinematicRail cases={cases} />

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-12 lg:items-end lg:px-10">
          <Reveal className="lg:col-span-8">
            <p className="kbd mb-6">[ Full archive ]</p>
            <h2 className="font-display max-w-[16ch] text-5xl leading-[0.95] tracking-tight text-balance md:text-7xl">
              Open the individual teardown.
            </h2>
          </Reveal>
          <Reveal className="grid gap-3 lg:col-span-4" delay={0.12}>
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="group flex items-center justify-between gap-5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:bg-[var(--palette-navy)]"
              >
                <span className="font-display text-2xl tracking-tight">{c.brand}</span>
                <ArrowUpRight className="size-5 text-[var(--muted)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
