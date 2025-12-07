"use client"

import { motion } from "framer-motion"
import { Shield, Clock, DollarSign } from "lucide-react"

export function PricingIntro() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        
      }
    }
  }

  const features = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear, fixed-fee packages for individuals, startups, and growing businesses."
    },
    {
      icon: Clock,
      title: "Results-Focused",
      description: "Pay for outcomes, not hours. Get the legal support you need without surprise bills."
    },
    {
      icon: Shield,
      title: "Scalable Solutions",
      description: "From personal legal matters to business expansion, we grow with your needs."
    }
  ]

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent"
          >
            Legal Services for Everyone
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Whether you're an individual seeking legal guidance or a growing business, 
            our transparent pricing model ensures you get expert legal support without 
            the uncertainty of traditional billing.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-purple-500/10 mb-6 mx-auto ring-2 ring-purple-500/20">
                <feature.icon className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            All services are available on retainer, bundle, or à la carte basis—tailored to your needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 