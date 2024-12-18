"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Rocket, Building } from "lucide-react"
import Link from "next/link"

const stages = [
  {
    id: "idea",
    icon: Lightbulb,
    title: "Idea Stage Ventures",
    subtitle: "Laying the Foundation",
    description: "At this pivotal moment, you're laying the foundation for your future success. From my experience working with numerous founders at this stage, your primary needs typically center around:",
    offerings: [
      "Entity formation and structure optimization that aligns with your growth vision",
      "Initial agreements and documentation to protect your intellectual property",
      "Strategic guidance for market validation and early partnership discussions",
      "Regular strategic sessions to ensure your legal foundation supports your business goals",
      "Responsive legal support during business hours for time-sensitive questions"
    ],
    insight: "I've found that getting these elements right early on saves significant time and resources later, while giving you the flexibility to scale efficiently."
  },
  {
    id: "early",
    icon: Rocket,
    title: "Early Stage Companies",
    subtitle: "Scaling with Precision",
    description: "You've validated your concept and are gaining traction – this is when legal and strategic precision becomes crucial. Based on my work with companies at this stage, you're likely focusing on:",
    offerings: [
      "Comprehensive contract frameworks that scale with your business",
      "Fundraising documentation and investor relations support",
      "Strategic partnership structuring and negotiation",
      "Compliance reviews aligned with your growth trajectory",
      "More frequent strategic sessions to navigate rapid growth challenges",
      "Expanded legal support hours with faster response times"
    ],
    insight: "This stage requires balancing rapid growth with proper protection, and I help ensure you're moving fast while staying secure."
  },
  {
    id: "growth",
    icon: Building,
    title: "Growth Stage Businesses",
    subtitle: "Navigating Complexity",
    description: "At this stage, complexity increases significantly, and the stakes are higher. My experience with scaling companies shows these become critical:",
    offerings: [
      "Complex legal frameworks for new market entry",
      "Strategic M&A and partnership documentation",
      "Multi-jurisdiction compliance management",
      "Corporate governance optimization",
      "International expansion support",
      "On-demand strategic support for time-sensitive opportunities",
      "Priority access to my network of specialized legal experts"
    ],
    insight: "You need a partner who understands both the legal intricacies and business implications of your decisions – someone who can help you navigate this complexity while maintaining your growth momentum."
  }
]

export function PricingStages() {
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
            Your Stage, Your Needs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A Strategic Legal Approach
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
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-500/5 to-purple-500/20 backdrop-blur-sm border border-purple-500/10 p-8 flex items-center justify-center">
                        <Icon className="w-24 h-24 text-purple-400/50" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Text Column */}
                  <div className={isEven ? 'lg:order-2' : ''}>
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
                    <div className="mt-6 p-4 bg-purple-500/5 border border-purple-500/10 rounded-lg">
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
            Each engagement is tailored to your specific needs, and these frameworks serve as starting points for our discussion. Whether you need focused support in specific areas or comprehensive coverage, we'll structure our partnership to provide maximum value for your current stage while preparing you for what's ahead.
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