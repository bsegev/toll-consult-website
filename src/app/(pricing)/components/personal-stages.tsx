"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Scale, FileText } from "lucide-react"
import Link from "next/link"

const stages = [
  {
    id: "basic",
    icon: FileText,
    title: "Personal Legal Support",
    subtitle: "Essential Legal Guidance",
    description: "Whether you're navigating contracts, agreements, or need general legal guidance, we provide clear, actionable support for your personal legal needs.",
    offerings: [
      "Review and drafting of personal contracts and agreements",
      "Legal documentation support and guidance",
      "Clear explanation of legal terms and implications",
      "Personal legal strategy sessions",
      "Regular check-ins to address ongoing needs"
    ],
    insight: "Personal legal matters require a balance of expertise and accessibility. We ensure you understand your options and can make informed decisions."
  },
  {
    id: "professional",
    icon: Scale,
    title: "Professional Services",
    subtitle: "Career & Business Support",
    description: "For professionals, consultants, and individuals with business interests, we offer comprehensive legal support to protect your professional endeavors.",
    offerings: [
      "Professional services agreements and contracts",
      "Independent contractor documentation",
      "Intellectual property protection",
      "Professional liability guidance",
      "Business structure advisory for solo ventures",
      "Negotiation support for professional agreements"
    ],
    insight: "As a professional, your personal and business interests often intersect. We help you navigate both while maintaining appropriate legal protections."
  },
  {
    id: "comprehensive",
    icon: Shield,
    title: "Comprehensive Coverage",
    subtitle: "Full-Spectrum Protection",
    description: "For complex personal legal needs or those requiring ongoing legal support across multiple areas, we provide comprehensive coverage and priority access.",
    offerings: [
      "Full personal legal portfolio management",
      "Priority access to legal counsel",
      "Complex legal matter handling",
      "Multi-jurisdiction support",
      "Estate and succession planning",
      "Regular legal health check-ups",
      "Access to specialist network for specific needs"
    ],
    insight: "Comprehensive legal support gives you peace of mind knowing that all your legal matters are being handled proactively and professionally."
  }
]

export function PersonalStages() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.2
  })

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-4">
            Your Legal Journey, Your Way
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Personalized Legal Support at Every Step
          </p>
        </motion.div>

        {/* Stages */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/20 to-purple-500/0 hidden lg:block" />

          {stages.map((stage, index) => {
            const Icon = stage.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={stage.id}
                className="mb-20 last:mb-0"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  {/* Image Column */}
                  <div className={!isEven ? '' : 'lg:order-2'}>
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-500/5 to-purple-500/20 backdrop-blur-sm border border-purple-500/10 p-8 flex items-center justify-center">
                        <Icon className="w-24 h-24 text-purple-400/50" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Text Column */}
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{stage.title}</h3>
                        <p className="text-purple-400">{stage.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{stage.description}</p>
                    <ul className="space-y-4 text-gray-300">
                      {stage.offerings.map((offering, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{offering}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg">
                      <p className="text-gray-400 italic">{stage.insight}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Each service level is customizable to your specific needs. We'll work together to ensure you have the right level of support for your personal legal requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" className="font-semibold">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 