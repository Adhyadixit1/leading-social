import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-[2] border-t border-[var(--border)] mt-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <p className="kbd mb-6">[ The Growth System ]</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-balance">
              Build the next <em className="italic text-[var(--accent)]">decade</em> of your brand.
            </h2>
            <Link href="/contact" className="btn-primary mt-10">
              Apply to Work Together <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-10 lg:justify-self-end text-sm">
            <div>
              <p className="kbd mb-4">Sitemap</p>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-[var(--accent)]">Home</Link></li>
                <li><Link href="/about" className="hover:text-[var(--accent)]">About</Link></li>
                <li><Link href="/services" className="hover:text-[var(--accent)]">Services</Link></li>
                <li><Link href="/process" className="hover:text-[var(--accent)]">Process</Link></li>
                <li><Link href="/case-studies" className="hover:text-[var(--accent)]">Case Studies</Link></li>
                <li><Link href="/reviews" className="hover:text-[var(--accent)]">Reviews</Link></li>
                <li><Link href="/insights" className="hover:text-[var(--accent)]">Insights</Link></li>
                <li><Link href="/playbooks" className="hover:text-[var(--accent)]">Playbooks</Link></li>
                <li><Link href="/growth-audit" className="hover:text-[var(--accent)]">Growth Audit</Link></li>
                <li><Link href="/contact" className="hover:text-[var(--accent)]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="kbd mb-4">Services</p>
              <ul className="space-y-2 text-[var(--muted)]">
                <li><Link href="/services/paid-acquisition" className="hover:text-[var(--foreground)]">Paid Acquisition</Link></li>
                <li><Link href="/services/creative-strategy" className="hover:text-[var(--foreground)]">Creative Strategy</Link></li>
                <li><Link href="/services/retention" className="hover:text-[var(--foreground)]">Retention</Link></li>
                <li><Link href="/services/forecasting" className="hover:text-[var(--foreground)]">Forecasting</Link></li>
              </ul>
            </div>
            <div>
              <p className="kbd mb-4">Contact</p>
              <ul className="space-y-2 text-[var(--muted)]">
                <li><a href="mailto:hello@leadingsocial.com" className="hover:text-[var(--foreground)]">hello@leadingsocial.com</a></li>
                <li>New York · Dublin</li>
                <li>Mon to Fri, 9am to 6pm</li>
              </ul>
            </div>
            <div>
              <p className="kbd mb-4">Social</p>
              <ul className="space-y-2 text-[var(--muted)]">
                <li><a href="#" className="hover:text-[var(--foreground)]">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[var(--foreground)]">Instagram</a></li>
                <li><a href="#" className="hover:text-[var(--foreground)]">X / Twitter</a></li>
                <li><a href="#" className="hover:text-[var(--foreground)]">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider my-16" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <p>© {new Date().getFullYear()} Leading Social. A growth operating system for serious ecommerce brands.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[var(--foreground)]">Privacy</a>
            <a href="#" className="hover:text-[var(--foreground)]">Terms</a>
            <a href="#" className="hover:text-[var(--foreground)]">Cookies</a>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <div className="font-display tracking-tighter leading-none whitespace-nowrap text-[18vw] -mb-[3vw] text-[var(--surface)]">
          LEADING <em className="italic text-[var(--accent)]/30">SOCIAL</em>
        </div>
      </div>
    </footer>
  );
}
