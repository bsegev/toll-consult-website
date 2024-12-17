"use client";
import { Hero } from "@/components/sections/home/hero";
import { ServicesOverview } from "@/components/sections/home/services-overview";
import { Timeline } from "@/components/sections/home/timeline";
import { About } from "@/components/sections/home/about";
import { SocialProof } from "@/components/sections/home/social-proof";
import { Contact } from "@/components/sections/home/contact";

export default function Home() {
  return (
    <main className="bg-gray-900">
      <Hero />
      <ServicesOverview />
      <Timeline />
      <About />
      <SocialProof />
      <Contact />
    </main>
  );
} 