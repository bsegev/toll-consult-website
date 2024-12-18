"use client"

import { motion } from "framer-motion"
import { Rocket, Shield, DollarSign, Users, FileText, Scale } from "lucide-react"

export function Features() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const features = [
    {
      icon: Rocket,
      title: "Strategic Foundation",
      description: "Expert guidance on entity structure, founder agreements, and initial legal framework. Building your business on solid ground."
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Comprehensive legal support tailored to your growth stage. From basic contracts to complex regulatory compliance."
    },
    {
      icon: DollarSign,
      title: "Funding Support",
      description: "Strategic guidance through fundraising processes. From SAFE notes to Series A documentation and investor relations."
    },
    {
      icon: Users,
      title: "Growth Planning",
      description: "Strategic partnership development and team structuring. Navigating expansion with proper legal frameworks."
    },
    {
      icon: FileText,
      title: "Flexible Solutions",
      description: "Tailored legal services that match your needs. From single document reviews to comprehensive legal strategy."
    },
    {
      icon: Scale,
      title: "Market Experience",
      description: "Leverage deep industry knowledge and established networks. Supporting your journey from startup to market leader."
    }
  ]

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/10 to-gray-900/50 pointer-events-none" />
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
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative group h-[280px]"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-900 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
              <div className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-8 h-full flex flex-col">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/10 mb-6">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 