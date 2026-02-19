"use client";

import { motion } from "framer-motion";

const principles = [
  {
    label: "AI as Infrastructure",
    text: "Not a feature bolted on. A foundational layer woven into how your business operates, decides, and scales.",
  },
  {
    label: "Automation as Leverage",
    text: "Multiply what your team can accomplish without multiplying headcount. Focus humans on judgment, not repetition.",
  },
  {
    label: "Long-Term Architecture",
    text: "We build systems designed to evolve. No throwaway scripts. No brittle integrations. Structures that compound.",
  },
  {
    label: "Strategy Before Code",
    text: "Every system starts with clarity. We understand your context before we write a single line of code.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative px-6 py-32 lg:py-40">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600"
        >
          Our philosophy
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.12] tracking-tight text-white"
        >
          We Don&apos;t Add Tools.
          <br />
          We Build Systems.
        </motion.h2>

        <div className="mt-20 grid gap-x-16 gap-y-14 sm:grid-cols-2">
          {principles.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            >
              <h3 className="text-[15px] font-semibold text-white">{p.label}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
