"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
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

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="relative py-32"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations.container}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/10 to-gray-900/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={animations.item} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-purple-300 mb-2">Get in Touch</h2>
          <p className="text-xl text-gray-300">Let's Discuss Your Legal Strategy</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={animations.item}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Schedule a Consultation</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md bg-gray-700/50 border border-gray-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-gray-700/50 border border-gray-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-700/50 border border-gray-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <Button size="lg" className="w-full font-semibold">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div variants={animations.item} className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-purple-400" />
                  <span className="ml-4 text-gray-300">contact@tolllegal.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-purple-400" />
                  <span className="ml-4 text-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <span className="ml-4 text-gray-300">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Office Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p>Saturday - Sunday: By appointment only</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 