"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function PricingComparison() {
  const features = [
    {
      name: "Initial consultation and assessment",
      startup: true,
      growth: true,
      scale: true,
    },
    {
      name: "Regular calls to discuss business goals",
      startup: "Quarterly - 30 Min",
      growth: "Monthly - 1 Hour",
      scale: "Unlimited",
    },
    {
      name: "General legal support via email during business hours",
      startup: true,
      growth: true,
      scale: true,
    },
    {
      name: "Basic legal document review",
      startup: true,
      growth: true,
      scale: true,
    },
    {
      name: "Complete minute book management",
      startup: true,
      growth: true,
      scale: true,
    },
    {
      name: "Annual corporate maintenance and filing",
      startup: true,
      growth: true,
      scale: true,
    },
    {
      name: "Preferred pricing for additional services",
      startup: true,
      growth: true,
      scale: true,
    },
    {
      name: "Onboarding audit of corporation",
      startup: false,
      growth: true,
      scale: true,
    },
    {
      name: "Comprehensive legal document review and drafting",
      startup: false,
      growth: true,
      scale: true,
    },
    {
      name: "Legal compliance review",
      startup: false,
      growth: true,
      scale: true,
    },
    {
      name: "Legal support for corporate governance matters",
      startup: false,
      growth: true,
      scale: true,
    },
    {
      name: "Priority access to legal services",
      startup: false,
      growth: true,
      scale: true,
    },
    {
      name: "Customized legal strategies and solutions",
      startup: false,
      growth: false,
      scale: true,
    },
    {
      name: "Assistance with complex legal issues",
      startup: false,
      growth: false,
      scale: true,
    },
    {
      name: "Priority access to educational resources",
      startup: false,
      growth: false,
      scale: true,
    },
    {
      name: "Enhanced service levels including after-hours support",
      startup: false,
      growth: false,
      scale: true,
    },
  ]

  return (
    <section id="comparison" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-500/20">
                <th className="text-left py-4 px-6 text-gray-300 font-normal w-1/3">Features</th>
                <th className="text-center py-4 px-6 text-purple-300 font-bold">Startup</th>
                <th className="text-center py-4 px-6 text-purple-300 font-bold">Growth</th>
                <th className="text-center py-4 px-6 text-purple-300 font-bold">Scale</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index}
                  className="border-b border-purple-500/10 hover:bg-purple-500/5"
                >
                  <td className="py-4 px-6 text-gray-300">{feature.name}</td>
                  <td className="text-center py-4 px-6 text-gray-300">
                    {typeof feature.startup === 'boolean' ? (
                      feature.startup ? <Check className="h-5 w-5 text-purple-400 mx-auto" /> : "-"
                    ) : (
                      feature.startup
                    )}
                  </td>
                  <td className="text-center py-4 px-6 text-gray-300">
                    {typeof feature.growth === 'boolean' ? (
                      feature.growth ? <Check className="h-5 w-5 text-purple-400 mx-auto" /> : "-"
                    ) : (
                      feature.growth
                    )}
                  </td>
                  <td className="text-center py-4 px-6 text-gray-300">
                    {typeof feature.scale === 'boolean' ? (
                      feature.scale ? <Check className="h-5 w-5 text-purple-400 mx-auto" /> : "-"
                    ) : (
                      feature.scale
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
} 