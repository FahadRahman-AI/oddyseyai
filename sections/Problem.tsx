"use client";

import { motion } from "framer-motion";

const problems = [
  "Manual workflows that don't scale",
  "Disconnected tools creating information silos",
  "Repetitive processes draining your best people",
  "Operational leverage left on the table",
];

export function Problem() {
  return (
    <section className="relative px-6 py-32 lg:py-40">
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600"
        >
          The problem
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.12] tracking-tight text-white"
        >
          Most Companies Are Not
          <br className="hidden sm:block" />
          Built for AI.
        </motion.h2>

        <div className="mt-16 space-y-0">
          {problems.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="border-t border-white/[0.04] py-5"
            >
              <p className="text-lg text-zinc-400">{text}</p>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.04]" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-base leading-relaxed text-zinc-600"
        >
          These aren&apos;t technology problems. They&apos;re architecture problems.
          <br />
          And they require systems thinking—not more tools.
        </motion.p>
      </div>
    </section>
  );
}
