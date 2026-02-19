"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    text: "We study your workflows, tools, and team dynamics to understand where intelligence creates the most value.",
  },
  {
    num: "02",
    title: "Architecture",
    text: "We design a system blueprint—scoped, pragmatic, and built around your real constraints.",
  },
  {
    num: "03",
    title: "Build",
    text: "Rapid, iterative development with continuous visibility. You see working systems from week one.",
  },
  {
    num: "04",
    title: "Refinement",
    text: "We integrate, monitor, and optimize. Documentation, training, and long-term support included.",
  },
];

export function Process() {
  return (
    <section id="process" className="px-6 py-32 lg:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600"
        >
          Process
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.12] tracking-tight text-white"
        >
          How We Work
        </motion.h2>

        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-white/[0.08] via-violet-500/20 to-white/[0.04]" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-violet-500/60" />
                  <div className="absolute h-6 w-6 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-violet-500/20" />
                </div>

                <p className="text-xs font-medium text-zinc-600">{step.num}</p>
                <h3 className="mt-1.5 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-zinc-500">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
