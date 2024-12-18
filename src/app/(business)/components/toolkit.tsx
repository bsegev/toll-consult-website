"use client"

import { motion } from "framer-motion"
import { FileText, GitBranch, Calculator, FileCheck, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Toolkit() {
  const toolkitItems = [
    {
      icon: FileCheck,
      title: "Basic Founder Agreement Template",
      description: "Starter template for co-founder arrangements. Includes basic terms and structure for initial discussions.",
      tag: "Free"
    },
    {
      icon: Calculator,
      title: "Equity Split Calculator",
      description: "Simple calculator for basic equity splits between co-founders. Consider key factors like time, capital, and IP.",
      tag: "Free Tool"
    },
    {
      icon: FileText,
      title: "Basic NDA Template",
      description: "Standard non-disclosure agreement template for initial conversations with potential partners.",
      tag: "Free"
    },
    {
      icon: GitBranch,
      title: "Legal Checklist Generator",
      description: "Generate a basic checklist of legal considerations based on your business type and stage.",
      tag: "Free Tool"
    }
  ]

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/10 to-gray-900/50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
            Startup Legal Toolkit
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Essential templates and basic tools to get you started. Download and use today, then connect for strategic implementation guidance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {toolkitItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300">
                  {item.tag}
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-purple-300">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                {item.description}
              </p>
              <Button variant="outline" size="sm" className="group-hover:bg-purple-500/10">
                <Download className="w-4 h-4 mr-2" />
                Get Template
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button variant="link" className="text-purple-400 hover:text-purple-300">
            View All Templates →
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 