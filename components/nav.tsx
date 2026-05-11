"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/reviews", label: "Reviews" },
  { href: "/insights", label: "Insights" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07070A]/70 backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="h-7 w-7 rounded-full bg-[var(--accent)] grid place-items-center text-[#07070A] font-display text-lg leading-none">
            L
          </span>
          <span className="font-display text-lg tracking-tight">
            Leading <span className="italic text-[var(--muted)]">Social</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-[var(--surface)]/60 border border-[var(--border)] rounded-full px-2 py-1.5 backdrop-blur">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)] hover:bg-[var(--surface)] rounded-full transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/growth-audit" className="hidden md:inline-flex btn-primary">
            Growth Audit
            <ArrowUpRight className="size-4" />
          </Link>
          <button
            aria-label="menu"
            className="md:hidden h-10 w-10 grid place-items-center rounded-full border border-[var(--border)]"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[#07070A]/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-display"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="py-3 text-lg font-display"
            >
              About
            </Link>
            <Link
              href="/playbooks"
              onClick={() => setOpen(false)}
              className="py-3 text-lg font-display"
            >
              Playbooks
            </Link>
            <Link
              href="/growth-audit"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 self-start"
            >
              Growth Audit
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
