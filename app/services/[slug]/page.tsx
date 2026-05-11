import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, RevealText } from "@/components/reveal";
import { servicePages } from "@/lib/pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);
  return {
    title: service ? `${service.title} | Leading Social` : "Service | Leading Social",
    description: service?.promise,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);
  if (!service) notFound();
  const cadence = ["Scorecard", "Weekly sprint", "Experiment readout", "Forecast update"];
  const related = servicePages.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="pt-36 pb-20 lg:pt-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="kbd mb-8">[ Service: {service.short} ]</p>
          </Reveal>
          <h1 className="font-display max-w-[16ch] text-[13vw] leading-[0.9] tracking-[-0.03em] text-balance md:text-[8vw] lg:text-[7.5rem]">
            <RevealText text={service.title} />{" "}
            <RevealText text="that pays back." className="italic text-[var(--muted)]" />
          </h1>
          <Reveal delay={0.18}>
            <p className="mt-10 max-w-2xl text-xl text-[var(--foreground)]/75">{service.promise}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--border)]">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-[var(--border)] px-6 lg:grid-cols-4 lg:px-10">
          {service.proof.map((item, index) => (
            <Reveal key={item} delay={index * 0.06} className="bg-[#07070A] p-8 lg:p-10">
              <p className="font-display text-5xl text-[var(--accent)]">0{index + 1}</p>
              <p className="mt-10 text-lg text-[var(--foreground)]/82">{item}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--foreground)] py-12 text-[#07070A]">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 md:grid-cols-4 lg:px-10">
          {cadence.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <p className="font-display text-5xl tracking-tight">0{index + 1}</p>
              <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[#07070A]/55">{item}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="kbd mb-6">[ What we operate ]</p>
              <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-balance md:text-6xl">
                The system behind the service.
              </h2>
            </div>
          </Reveal>
          <div className="space-y-4 lg:col-span-7">
            {service.bullets.map((bullet, index) => (
              <Reveal key={bullet} delay={index * 0.05} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-7">
                <div className="flex items-start gap-5">
                  <span className="kbd mt-1 text-[var(--accent)]">{service.n}.{index + 1}</span>
                  <div>
                    <h3 className="font-display text-3xl tracking-tight">{bullet}</h3>
                    <p className="mt-3 text-[var(--foreground)]/62">
                      Built into the weekly operating cadence, measured against payback, margin, and incremental revenue.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)]/35 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="mb-14">
            <p className="kbd mb-6">[ Operating cadence ]</p>
            <h2 className="font-display max-w-[16ch] text-5xl leading-[0.95] tracking-tight md:text-7xl">
              What happens after this pillar launches.
            </h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-lg bg-[var(--border)] md:grid-cols-4">
            {["Plan", "Ship", "Measure", "Reallocate"].map((step, index) => (
              <Reveal key={step} delay={index * 0.05} className="bg-[#07070A] p-8">
                <p className="kbd text-[var(--accent)]">{step}</p>
                <p className="mt-16 text-[var(--foreground)]/70">
                  {step === "Plan"
                    ? "Turn the model into a sprint plan with clear owners."
                    : step === "Ship"
                      ? "Launch creative, flows, campaigns, or forecasts against the plan."
                      : step === "Measure"
                        ? "Read the signal against payback, margin, and customer value."
                        : "Move resources toward the work with the highest expected return."}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-5">
            <p className="kbd mb-6">[ Connected pillars ]</p>
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
              This works best as part of the full system.
            </h2>
          </Reveal>
          <div className="grid gap-4 lg:col-span-7">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.05}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex items-center justify-between gap-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-7"
                >
                  <div>
                    <p className="kbd text-[var(--accent)]">{item.short}</p>
                    <h3 className="mt-4 font-display text-4xl tracking-tight">{item.title}</h3>
                  </div>
                  <ArrowUpRight className="size-5 text-[var(--muted)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-12 lg:items-end lg:px-10">
          <Reveal className="lg:col-span-8">
            <h2 className="font-display max-w-[18ch] text-5xl leading-[0.95] tracking-tight text-balance md:text-6xl lg:text-7xl">
              Want this pillar inside your growth system?
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:justify-self-end" delay={0.12}>
            <div className="flex flex-wrap gap-3">
              <Link href="/growth-audit" className="btn-primary">
                Get audited <ArrowUpRight className="size-4" />
              </Link>
              <Link href="/services" className="btn-ghost">
                All services <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
