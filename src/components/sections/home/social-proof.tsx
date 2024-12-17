"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Users, DollarSign } from "lucide-react"

export function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.2
  })

  const animations = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          duration: 0.5
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      }
    }
  }

  const testimonials = [
    {
      content: "Jared's strategic guidance was instrumental in helping us navigate our Series A funding round. His unique perspective as both a founder and legal expert made all the difference.",
      author: "Sarah Chen",
      role: "CEO, TechStart Inc."
    },
    {
      content: "Working with Toll Legal transformed how we approach our practice. The systems and strategies implemented have doubled our efficiency.",
      author: "Michael Rodriguez",
      role: "Managing Partner, Rodriguez Law"
    },
    {
      content: "The depth of knowledge and practical approach to legal strategy sets Toll Legal apart. They truly understand the unique challenges founders face.",
      author: "David Park",
      role: "Founder, InnovateAI"
    }
  ]

  return (
    <motion.section
      ref={sectionRef}
      id="social-proof"
      className="relative py-32 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations.container}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/10 to-gray-900/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={animations.item} className="text-center">
          <h2 className="text-3xl font-bold text-purple-300 mb-2">Client Testimonials</h2>
          <p className="text-xl text-gray-300">What Our Clients Say</p>
        </motion.div>

        <motion.div variants={animations.item} className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20"
              >
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="text-purple-400 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 