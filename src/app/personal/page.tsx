"use client";
import { Hero } from "@/app/(personal)/components/hero";
import { Features } from "@/app/(personal)/components/features";
import { Services } from "@/app/(personal)/components/services";
import { Process } from "@/app/(personal)/components/process";
import { CTA } from "@/app/(personal)/components/cta";

export default function Personal() {
  return (
    <main className="bg-gray-900/95">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/10 to-gray-900/50" />
      <div className="relative">
        <Hero />
        <Features />
        <Services />
        <Process />
        <CTA />
      </div>
    </main>
  );
} 