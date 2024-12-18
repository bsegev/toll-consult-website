"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 pt-52 overflow-hidden">
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build Your Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              with Confidence
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Strategic legal guidance for every stage of your journey. From foundational documents 
            to growth strategy, get the support you need to move forward with clarity.
          </motion.p>

          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button size="lg" variant="default">Start Your Journey</Button>
            <Button size="lg" variant="outline">Explore Resources</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 