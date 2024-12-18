"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

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
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-primary/10 to-background/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={animations.item} className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-2">Client Testimonials</h2>
          <p className="text-xl text-foreground/80">What Our Clients Say</p>
        </motion.div>

        <motion.div variants={animations.item} className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group h-[320px]">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-purple-900/20 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
                <div className="relative rounded-lg p-8 border border-purple-500/30 h-full flex flex-col">
                  <p className="text-gray-300 mb-6 flex-grow">"{testimonial.content}"</p>
                  <div className="mt-auto">
                    <p className="text-purple-300 font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 