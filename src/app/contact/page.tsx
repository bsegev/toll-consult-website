"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Contact() {
  return (
    <main className="bg-gray-900/95">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/10 to-gray-900/50" />
      <div className="relative">
        <section className="relative py-24 md:py-32 pt-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                Let's Work Together
              </h1>
              <p className="text-xl text-gray-300">
                Schedule a consultation or reach out with any questions. We're here to help you navigate your legal journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-lg bg-gray-900/50 border border-purple-500/20 text-gray-300 px-4 py-2 
                        focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500/30
                        placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-lg bg-gray-900/50 border border-purple-500/20 text-gray-300 px-4 py-2 
                        focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500/30
                        placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-lg bg-gray-900/50 border border-purple-500/20 text-gray-300 px-4 py-2 
                        focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500/30
                        placeholder-gray-500"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  <Button size="lg" className="w-full font-semibold">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
} 