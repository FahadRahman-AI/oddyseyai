"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#philosophy", label: "Philosophy" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.04] bg-[#050507]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Oddysey AI"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="text-[15px] font-semibold tracking-tight text-white">
            Oddysey
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-zinc-500 transition-colors duration-200 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="#cta"
          className="hidden rounded-full border border-white/[0.08] px-5 py-2 text-[13px] font-medium text-zinc-300 transition-all duration-200 hover:border-white/20 hover:text-white md:inline-flex"
        >
          Start the Conversation
        </Link>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-[5px] md:hidden"
        >
          <span className={`block h-px w-5 bg-zinc-400 transition-all duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-zinc-400 transition-all duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/[0.04] bg-[#050507]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-[15px] text-zinc-400 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full border border-white/10 py-2.5 text-center text-[14px] font-medium text-white"
              >
                Start the Conversation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
