"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { PageSignalStack } from "@/components/page-motion";
import { Reveal, RevealText } from "@/components/reveal";

const revenue = ["< $3M", "$3M to $5M", "$5M to $10M", "$10M to $30M", "$30M+"];
const services = ["Paid Acquisition", "Creative Strategy", "Retention", "Financial Forecasting", "Full Growth System"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-36 lg:pt-44 pb-12">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="kbd mb-8">[ Apply: Selective intake ]</p>
          </Reveal>
          <h1 className="font-display text-[12vw] md:text-[7.5vw] lg:text-[7rem] xl:text-[8rem] leading-[0.92] tracking-[-0.03em] text-balance max-w-[18ch]">
            <RevealText text="Apply to" />{" "}
            <RevealText text="work together." className="italic text-[var(--muted)]" />
          </h1>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5">
            <p className="text-lg text-[var(--foreground)]/80 max-w-md text-pretty">
              We work with a small number of brands at a time. Tell us about your business. If it’s a fit, we’ll be
              in touch within 48 hours with a Growth Audit.
            </p>

            <div className="card p-6 mt-12">
              <p className="kbd mb-5">What happens next</p>
              <ol className="space-y-4 text-sm">
                {[
                  "We review your application within 48 hours.",
                  "30-minute fit call with a senior strategist.",
                  "Free Growth Audit with a 90-day plan.",
                  "Decide together if we move forward.",
                ].map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="kbd mt-0.5">0{i + 1}</span>
                    <span className="text-[var(--foreground)]/85">{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="card p-6 mt-6">
              <p className="kbd mb-3">Direct</p>
              <a href="mailto:hello@leadingsocial.com" className="font-display text-2xl hover:text-[var(--accent)]">
                hello@leadingsocial.com
              </a>
              <p className="text-[var(--muted)] text-sm mt-2">Mon to Fri · 9am to 6pm GMT</p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.15}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="card p-12 lg:p-16 text-center"
              >
                <CheckCircle2 className="size-12 text-[var(--accent)] mx-auto" />
                <h3 className="font-display text-4xl mt-8">Application received.</h3>
                <p className="text-[var(--muted)] mt-4 max-w-md mx-auto">
                  We’ll review and get back to you within 48 hours. In the meantime, check out our latest insights.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="card p-6 md:p-10 space-y-8"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="First name" name="firstName" required />
                  <Field label="Last name" name="lastName" required />
                </div>
                <Field label="Work email" name="email" type="email" required />
                <Field label="Brand / Company" name="company" required />
                <Field label="Website" name="website" type="url" placeholder="https://" />

                <div>
                  <p className="kbd mb-3">Annual revenue</p>
                  <div className="flex flex-wrap gap-2">
                    {revenue.map((r) => (
                      <Pill key={r} name="revenue" value={r} />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="kbd mb-3">What do you need?</p>
                  <div className="flex flex-wrap gap-2">
                    {services.map((r) => (
                      <Pill key={r} name="services" value={r} />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="kbd block mb-3">Tell us about your goals</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Where are you today, where do you want to be, and what’s in the way?"
                    className="w-full bg-transparent border border-[var(--border)] rounded-xl px-4 py-3 outline-none text-sm placeholder:text-[var(--muted)] focus:border-[var(--accent)]/60 transition"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Submit Application <ArrowUpRight className="size-4" />
                </button>
                <p className="text-xs text-[var(--muted)]">
                  By submitting you agree to our privacy policy. We reply to every qualified application personally.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <PageSignalStack
        eyebrow="[ Qualification ]"
        title="The call starts before the call."
        body="Qualified founders get a clearer sense of the intake path and what we inspect before recommending a growth plan."
        items={[
          {
            label: "Fit",
            title: "Revenue and margin context",
            body: "We look for enough traction to make forecasting, acquisition and lifecycle systems meaningful.",
            metric: "$3M+",
          },
          {
            label: "Signal",
            title: "Growth constraint map",
            body: "The first pass identifies whether the biggest limiter is acquisition, creative, retention, cash or stock.",
            metric: "48h",
          },
          {
            label: "Plan",
            title: "Audit path",
            body: "Qualified applications move into a focused growth audit with a 90-day action plan.",
            metric: "90d",
          },
          {
            label: "Decision",
            title: "Mutual operating fit",
            body: "Both sides decide whether the working rhythm, ambition and commercial model are right.",
            metric: "1:1",
          },
        ]}
      />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="kbd block mb-2">{label}{required && " *"}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border border-[var(--border)] rounded-xl px-4 py-3 outline-none text-sm placeholder:text-[var(--muted)] focus:border-[var(--accent)]/60 transition"
      />
    </label>
  );
}

function Pill({ name, value }: { name: string; value: string }) {
  return (
    <label className="cursor-pointer">
      <input type="radio" name={name} value={value} className="peer sr-only" />
      <span className="inline-block px-4 py-2 rounded-full text-sm border border-[var(--border)] text-[var(--foreground)]/80 peer-checked:bg-[var(--accent)] peer-checked:text-[#07070A] peer-checked:border-[var(--accent)] hover:border-[rgba(245,242,236,0.2)] transition">
        {value}
      </span>
    </label>
  );
}
