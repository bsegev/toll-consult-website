"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-900 text-white">
      <Navigation />
      {children}
      <Footer />
    </div>
  )
} 