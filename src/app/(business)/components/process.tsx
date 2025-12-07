"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Process() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6,  }
    }
  }

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We'll discuss your vision, goals, and immediate legal needs."
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "Develop a customized legal roadmap aligned with your business timeline."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Execute the plan with clear deliverables and regular check-ins."
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "Continuous legal guidance as your startup grows and evolves."
    }
  ]

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-purple-900/5 to-gray-900/30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent"
          >
            How We Work Together
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A streamlined process designed to get your startup's legal foundation right from day one.
          </motion.p>
        </motion.div>

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
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative bg-gray-800/40 backdrop-blur-sm rounded-lg p-6 border border-purple-500/10"
            >
              <span className="text-3xl font-bold text-purple-400/50 mb-4 block">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-300">
                {step.description}
              </p>
              {index < 3 && (
                <motion.div 
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden xl:block"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight className="h-8 w-8 text-purple-400/50" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 