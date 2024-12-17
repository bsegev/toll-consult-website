"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export function PersonalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/50 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-purple-500/20 text-center relative overflow-hidden"
        >
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discuss Your Legal Needs?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Schedule a free consultation to discuss your situation with our experienced legal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="font-semibold">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 