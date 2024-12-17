"use client"

import { ForFoundersHero as BusinessHero } from "@/components/sections/business/hero"
import { ForFoundersFeatures as BusinessFeatures } from "@/components/sections/business/features"
import { ForFoundersToolkit as BusinessToolkit } from "@/components/sections/business/toolkit"
import { ForFoundersProcess as BusinessProcess } from "@/components/sections/business/process"
import { ForFoundersCTA as BusinessCTA } from "@/components/sections/business/cta"

export default function BusinessPage() {
  return (
    <main className="bg-gray-900">
      <BusinessHero />
      <BusinessFeatures />
      <BusinessToolkit />
      <BusinessProcess />
      <BusinessCTA />
    </main>
  )
} 