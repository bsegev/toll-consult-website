"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

export function PricingTiers() {
  const [isAnnual, setIsAnnual] = useState(false)
  
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

  const tiers = [
    {
      name: "Groundwork",
      subtitle: "Starting Out",
      description: "For individuals or businesses laying a strong foundation for future success.",
      monthlyPrice: "550",
      annualPrice: "440",
      features: [
        "Initial strategy consultation and tailored roadmap",
        "Quarterly 30-minute check-ins to guide early steps",
        "Support with foundational tasks and setup",
        "Access to curated resources for getting started",
        "Email support during business hours"
      ]
    },
    {
      name: "Build",
      subtitle: "Looking to Grow",
      description: "For those ready to strengthen their systems and scale with confidence.",
      monthlyPrice: "3,000",
      annualPrice: "2,400",
      features: [
        "All features of the Groundwork package",
        "Monthly 1-hour strategy sessions for progress tracking",
        "Workflow and process improvement",
        "Customized solutions for ongoing challenges",
        "Priority response and enhanced support"
      ]
    },
    {
      name: "Thrive",
      subtitle: "Ready to Scale",
      description: "For those with a bold vision, ready to elevate and maximize their impact.",
      monthlyPrice: "10,000",
      annualPrice: "8,000",
      features: [
        "All features of the Build package",
        "Unlimited advisory and support sessions",
        "Tailored strategies for advanced challenges",
        "Exclusive access to premium resources and tools",
        "24/7 fast-track support for urgent needs"
      ]
    }
  ]

  const formatPrice = (price: string) => {
    const numPrice = parseInt(price.replace(/,/g, ''))
    if (numPrice >= 1000) {
      return `${numPrice/1000}k`
    }
    return price
  }

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/10 to-gray-900/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Save up to 20% with annual billing.
          </p>
          
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm ${!isAnnual ? 'text-purple-300' : 'text-gray-400'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <span className={`text-sm ${isAnnual ? 'text-purple-300' : 'text-gray-400'}`}>
              Annually
              <span className="ml-1.5 text-xs text-purple-400">Save 20%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={`relative bg-gray-800/50 backdrop-blur-sm rounded-lg border 
                ${index === 1 ? 'border-purple-500 md:scale-105' : 'border-purple-500/20'} 
                overflow-hidden`}
            >
              {index === 1 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-500 text-white text-sm rounded-b-lg">
                  Popular Choice
                </div>
              )}
              
              <div className="p-8">
                <div className="text-purple-400 text-sm font-medium mb-1">
                  {tier.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-purple-300 mb-2">{tier.name}</h3>
                <p className="text-gray-300 mb-4 min-h-[60px]">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${formatPrice(isAnnual ? tier.annualPrice : tier.monthlyPrice)}
                  </span>
                  <span className="text-gray-400">/month</span>
                  {isAnnual && (
                    <div className="text-sm text-purple-400 mt-1">
                      Billed annually
                    </div>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300 gap-3">
                      <Check className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${index === 1 ? 'bg-purple-500 hover:bg-purple-600' : ''}`} 
                  variant={index === 1 ? 'default' : 'outline'}
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 relative rounded-lg p-[1px] bg-gradient-to-r from-purple-500/50 via-purple-500/10 to-purple-500/50"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between flex-col md:flex-row gap-8">
                <div>
                  <div className="text-purple-400 text-sm font-medium mb-1">
                    I'm Going to Need More Than That
                  </div>
                  <h3 className="text-2xl font-bold text-purple-300 mb-2">
                    Enterprise Solutions
                  </h3>
                  <p className="text-gray-300">
                    For large-scale businesses or individuals with complex, high-touch needs.
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-center text-gray-300 gap-3">
                      <Check className="h-5 w-5 text-purple-400" />
                      Fully customized solutions
                    </li>
                    <li className="flex items-center text-gray-300 gap-3">
                      <Check className="h-5 w-5 text-purple-400" />
                      Dedicated team support
                    </li>
                    <li className="flex items-center text-gray-300 gap-3">
                      <Check className="h-5 w-5 text-purple-400" />
                      Bespoke project-based offerings
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <Button variant="outline" size="lg" className="whitespace-nowrap">
                    Contact Us for Custom Pricing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 