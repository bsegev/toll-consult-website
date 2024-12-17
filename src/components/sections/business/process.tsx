"use client"

import { motion } from "framer-motion"

export function ForFoundersProcess() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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
    <section className="py-24">
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative"
            >
              <div className="text-5xl font-bold text-purple-500/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 