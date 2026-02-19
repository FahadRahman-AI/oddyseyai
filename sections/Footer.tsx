"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Oddysey AI"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-sm font-medium tracking-tight text-zinc-500">
            Oddysey AI
          </span>
        </Link>

        <nav className="flex gap-6">
          {["Capabilities", "Process", "Philosophy"].map((l) => (
            <Link
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
            >
              {l}
            </Link>
          ))}
        </nav>

        <a
          href="mailto:hello@oddysey.ai"
          className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
        >
          hello@oddysey.ai
        </a>
      </div>

      <div className="mx-auto mt-8 max-w-5xl">
        <p className="text-center text-[11px] text-zinc-700">
          © {new Date().getFullYear()} Oddysey AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
