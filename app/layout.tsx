import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Oddysey AI — AI Infrastructure for Modern Companies",
  description:
    "We design and build intelligent systems that become the operational backbone of modern businesses. Strategy-first AI architecture, automation, and integration.",
  keywords: [
    "AI infrastructure",
    "AI systems",
    "business automation",
    "AI strategy",
    "intelligent automation",
    "AI consulting",
  ],
  openGraph: {
    title: "Oddysey AI — AI Infrastructure for Modern Companies",
    description:
      "We design and build intelligent systems that become the operational backbone of modern businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
