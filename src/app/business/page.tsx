"use client";
import { Hero } from "@/app/(business)/components/hero";
import { Features } from "@/app/(business)/components/features";
import { Process } from "@/app/(business)/components/process";
import { Toolkit } from "@/app/(business)/components/toolkit";
import { CTA } from "@/app/(business)/components/cta";

export default function Business() {
  return (
    <main className="bg-gray-900/95">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/10 to-gray-900/50" />
      <div className="relative">
        <Hero />
        <Features />
        <Toolkit />
        <Process />
        <CTA />
      </div>
    </main>
  );
} 