"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/10 to-gray-900/50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Take the first step towards securing your legal future with expert guidance and support.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="default">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              View Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 