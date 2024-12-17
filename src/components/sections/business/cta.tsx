"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ForFoundersCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/50 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Building Today
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of founders who've saved time and money with our startup-ready legal tools.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="default">
              Try For Free
            </Button>
            <Button size="lg" variant="outline">
              View Pricing
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 