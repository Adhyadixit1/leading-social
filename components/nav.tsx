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

type Theme = "current" | "classic";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("current");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("leading-social-theme") === "classic" ? "classic" : "current";
    document.documentElement.dataset.theme = storedTheme;
    const frame = window.requestAnimationFrame(() => setTheme(storedTheme));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "classic" ? "current" : "classic";
    window.localStorage.setItem("leading-social-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--surface)]/70 backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="h-7 w-7 rounded-full bg-[var(--accent)] grid place-items-center text-[var(--palette-navy)] font-display text-lg leading-none">
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
          <button
            type="button"
            aria-pressed={theme === "classic"}
            aria-label="Toggle colour theme"
            onClick={toggleTheme}
            className="hidden items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-2 py-1.5 text-xs text-[var(--foreground)] backdrop-blur transition hover:border-[var(--accent)] md:inline-flex"
          >
            <span className="px-2">{theme === "classic" ? "Classic" : "Current"}</span>
            <span className="relative h-5 w-10 rounded-full bg-[var(--accent)]/35">
              <span
                className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[var(--accent)] transition ${
                  theme === "classic" ? "left-[1.35rem]" : "left-0.5"
                }`}
              />
            </span>
          </button>
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
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-xl">
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
            <button
              type="button"
              aria-pressed={theme === "classic"}
              onClick={toggleTheme}
              className="mt-3 inline-flex items-center justify-between rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-4 py-3 text-sm"
            >
              <span>{theme === "classic" ? "Classic colours" : "Current colours"}</span>
              <span className="relative ml-4 h-5 w-10 rounded-full bg-[var(--accent)]/35">
                <span
                  className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[var(--accent)] transition ${
                    theme === "classic" ? "left-[1.35rem]" : "left-0.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
