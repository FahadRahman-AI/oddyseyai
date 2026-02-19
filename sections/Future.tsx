"use client";

import { motion } from "framer-motion";

export function Future() {
  return (
    <section className="relative px-6 py-32 lg:py-40">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 translate-y-1/4 rounded-full bg-blue-600/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white"
        >
          The Companies That Win
          <br />
          Will Be Systemized.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-zinc-500"
        >
          The next era belongs to companies that treat intelligence as
          infrastructure—not an experiment. We help you build for that future,
          starting now.
        </motion.p>
      </div>
    </section>
  );
}
