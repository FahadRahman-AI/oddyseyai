"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "AI Workflow Architecture",
    description:
      "End-to-end design of intelligent workflows that connect your tools, data, and teams into a single coherent system.",
  },
  {
    title: "Intelligent Automation Systems",
    description:
      "Custom automation that handles repetitive operations with precision—freeing your team to focus on high-value work.",
  },
  {
    title: "Custom AI Integrations",
    description:
      "Purpose-built AI interfaces, assistants, and models integrated directly into your existing infrastructure.",
  },
  {
    title: "Operational Optimization",
    description:
      "Audit, streamline, and restructure your processes. We find the leverage points and engineer solutions that scale.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="px-6 py-32 lg:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600"
        >
          Capabilities
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.12] tracking-tight text-white"
        >
          What We Build
        </motion.h2>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 + i * 0.07 }}
              className="group relative rounded-2xl border border-white/[0.04] bg-white/[0.015] p-10 transition-all duration-500 hover:border-white/[0.08] hover:bg-white/[0.025]"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/[0.08] to-transparent" />
              </div>

              <div className="relative">
                <h3 className="text-lg font-semibold text-white">{cap.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
