"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PricingCTA() {
  return (
    <section className="relative py-20">
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-purple-500/20 text-center relative overflow-hidden"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Book a free consultation to discuss your needs and find the perfect legal solution for your business.
          </p>
          <Button size="lg" className="font-semibold">
            Schedule Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 