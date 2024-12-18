"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function PricingProcess() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We start with a free consultation to understand your business needs, goals, and challenges. This helps us recommend the most suitable package or create a custom solution.",
    },
    {
      number: "02",
      title: "Customized Solution",
      description: "Based on our discussion, we'll either recommend a standard package or create a tailored solution that perfectly matches your requirements and budget.",
    }
  ]

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Flexible Process, Tailored Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We understand that every business is unique. Our packages serve as starting points, 
            but we're always ready to customize our approach to meet your specific needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20"
            >
              <div className="flex items-start gap-6">
                <span className="text-4xl font-bold text-purple-400/50">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
              {index === 0 && (
                <motion.div 
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="h-8 w-8 text-purple-400/50" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 