import { Hero } from "@/sections/Hero";
import { Problem } from "@/sections/Problem";
import { Philosophy } from "@/sections/Philosophy";
import { Capabilities } from "@/sections/Capabilities";
import { Process } from "@/sections/Process";
import { Future } from "@/sections/Future";
import { CTA } from "@/sections/CTA";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Philosophy />
      <Capabilities />
      <Process />
      <Future />
      <CTA />
      <Footer />
    </main>
  );
}
