import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { insights } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();
  const related = insights.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="pt-32 lg:pt-40">
        <div className="mx-auto max-w-[820px] px-6 lg:px-10">
          <Reveal>
            <Link href="/insights" className="kbd inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)]">
              <ArrowLeft className="size-3" /> All insights
            </Link>
          </Reveal>

          <Reveal className="mt-10">
            <div className="flex items-center gap-3 text-sm">
              <span className="kbd text-[var(--accent)]">{post.category}</span>
              <span className="text-[var(--muted)]">·</span>
              <span className="kbd">{post.date}</span>
              <span className="text-[var(--muted)]">·</span>
              <span className="kbd">{post.read} read</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl tracking-tight mt-6 leading-[1.02] text-balance">
              {post.title}
            </h1>
            <p className="text-xl text-[var(--foreground)]/75 mt-8">{post.excerpt}</p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 mt-16">
          <div className="aspect-[16/8] rounded-2xl bg-gradient-to-br from-[var(--accent)]/30 via-[var(--surface)] to-[var(--surface)] border border-[var(--border)]" />
        </div>

        <div className="mx-auto max-w-[720px] px-6 lg:px-10 py-20 prose-content">
          <Reveal>
            <p className="text-lg text-[var(--foreground)]/85 leading-relaxed">
              The brands that win the next decade of ecommerce will not be the ones with the cleverest hooks or the
              biggest media budgets. They’ll be the ones running the tightest <em className="italic">operating
              system</em> where every channel is accountable to one shared P&L, and where decisions compound week
              over week instead of resetting every quarter.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl tracking-tight mt-12">Why this matters now</h2>
            <p className="text-[var(--foreground)]/80 mt-4 leading-relaxed">
              CPMs aren’t coming back down. iOS attribution isn’t going to magically come back. The brands surviving
              the next 24 months are running cohort-based growth, modeling CAC, LTV and contribution margin together,
              and refusing to scale spend until the math works.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl tracking-tight mt-12">The framework</h2>
            <ol className="space-y-3 mt-4 text-[var(--foreground)]/80 list-decimal pl-6">
              <li>Model contribution margin per cohort, not per order.</li>
              <li>Define payback windows by channel and refuse to scale past them.</li>
              <li>Engineer LTV through retention before pushing acquisition.</li>
              <li>Forecast cash 90 days out, every Monday.</li>
              <li>Make every weekly creative test ladder to a contribution-margin hypothesis.</li>
            </ol>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote className="font-display text-3xl md:text-4xl leading-[1.15] my-16 border-l-2 border-[var(--accent)] pl-8 text-balance">
              <em className="italic text-[var(--muted)]">“</em>If your growth team can’t draw the line between this
              week’s ad spend and next quarter’s contribution profit, you don’t have a growth team. You have a
              media-buying vendor.<em className="italic text-[var(--muted)]">”</em>
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="font-display text-3xl tracking-tight">Putting it into practice</h2>
            <p className="text-[var(--foreground)]/80 mt-4 leading-relaxed">
              The operators who get this right share three traits: they obsess over the model, they invest in the
              creative engine, and they treat retention as a P&L lever, not an email tax. Build all three, run them as
              one system, and the rest takes care of itself.
            </p>
          </Reveal>
        </div>
      </article>

      <section className="py-24 border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">More reading</h2>
            <Link href="/insights" className="btn-ghost">All insights <ArrowUpRight className="size-4" /></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {related.map((p) => (
              <Link key={p.slug} href={`/insights/${p.slug}`} className="bg-[var(--surface)] p-8 lg:p-10 hover:bg-[var(--surface)] transition group flex flex-col">
                <span className="kbd text-[var(--accent)]">{p.category}</span>
                <h3 className="font-display text-2xl tracking-tight mt-10 flex-1 text-balance">{p.title}</h3>
                <div className="flex items-center justify-between mt-8 text-xs text-[var(--muted)]">
                  <span>{p.date}</span>
                  <ArrowUpRight className="size-4 group-hover:text-[var(--accent)] transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
