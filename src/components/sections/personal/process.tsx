"use client"

import { motion } from "framer-motion"

export function PersonalProcess() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a thorough discussion of your legal needs and objectives, ensuring we understand your unique situation."
    },
    {
      number: "02",
      title: "Custom Strategy",
      description: "We develop a tailored approach that addresses your specific legal needs while considering your timeline and budget."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute the agreed-upon strategy, keeping you informed and involved throughout the entire process."
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "We provide continued guidance and updates, ensuring your legal matters stay current with changing circumstances."
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
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent"
          >
            Our Process
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A clear, structured approach to handling your legal matters with care and expertise
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
        </div>
      </div>
    </section>
  )
} 