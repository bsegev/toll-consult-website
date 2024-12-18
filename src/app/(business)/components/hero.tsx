"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 pt-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-purple-900/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
            Build Your Business with Confidence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Strategic legal guidance for every stage of your journey. From foundational documents to growth strategy, get the support you need to move forward with clarity.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="default">Start Your Journey</Button>
            <Button size="lg" variant="outline">Explore Resources</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 