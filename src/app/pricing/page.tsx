"use client";
import { PricingHero } from "@/app/(pricing)/components/hero";
import { PricingIntro } from "@/app/(pricing)/components/intro";
import { PricingTabs } from "@/app/(pricing)/components/pricing-tabs";
import { PricingProcess } from "@/app/(pricing)/components/process";
import { PricingCTA } from "@/app/(pricing)/components/cta";

export default function Pricing() {
  return (
    <main className="bg-gray-900/95">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/10 to-gray-900/50" />
      <div className="relative">
        <PricingHero />
        <PricingIntro />
        <PricingTabs />
        <PricingProcess />
        <PricingCTA />
      </div>
    </main>
  );
} 