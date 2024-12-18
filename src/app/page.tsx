"use client";
import { Hero } from "@/app/(home)/components/hero";
import { ServicesOverview } from "@/app/(home)/components/services-overview";
import { Timeline } from "@/app/(home)/components/timeline";
import { About } from "@/app/(home)/components/about";
import { SocialProof } from "@/app/(home)/components/social-proof";
import { Contact } from "@/app/(home)/components/contact";

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