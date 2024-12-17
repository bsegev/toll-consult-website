"use client";

import { PricingHero } from "@/components/sections/pricing/hero";
import { PricingIntro } from "@/components/sections/pricing/intro";
import { PricingTabs } from "@/components/sections/pricing/pricing-tabs";
import { PricingProcess } from "@/components/sections/pricing/process";
import { PricingCTA } from "@/components/sections/pricing/cta";

export default function PricingPage() {
  return (
    <main className="bg-gray-900">
      <PricingHero />
      <PricingIntro />
      <PricingTabs />
      <PricingProcess />
      <PricingCTA />
    </main>
  );
} 