"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="cta" className="px-6 py-32 lg:py-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-14 text-center lg:p-20"
      >
        {/* Gradient border glow */}
        <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-violet-500/[0.12] via-transparent to-blue-500/[0.06] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.1] blur-[80px]" />

        <div className="relative">
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-white">
            Build Your AI Foundation
          </h2>
          <p className="mx-auto mt-5 max-w-sm text-[15px] leading-relaxed text-zinc-500">
            A 30-minute strategy conversation. No pitch. Just clarity on where
            AI creates real value for your business.
          </p>
          <a
            href="mailto:hello@oddysey.ai?subject=Strategy%20Call%20Request"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[#050507] transition-all duration-300 hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.25)]"
          >
            Book Your Strategy Call
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
