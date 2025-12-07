"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  })

  const animations = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          duration: 0.5,
          
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          
        }
      }
    }
  }

  return (
    <motion.section 
      id="about" 
      ref={sectionRef}
      className="relative py-32"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations.container}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/10 to-gray-900/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={animations.item}
        >
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">About Jared</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Meet Your Strategic Legal Partner
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            className="relative lg:row-start-1 lg:col-start-2 mb-12 lg:mb-0"
            variants={animations.item}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative block w-full rounded-lg overflow-hidden">
                <Image
                  src="/JT_Consult_IMG.png"
                  alt="Jared Toll"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative lg:row-start-1 lg:col-start-1"
            variants={animations.item}
          >
            <div className="text-lg text-gray-300 space-y-6">
              <p>
                With nearly a decade in the tech industry, I thrive at the intersection of growth, 
                legal strategy, and innovation. I bring a unique perspective that combines practical 
                business experience with legal expertise.
              </p>
              
              <div className="space-y-4 text-base">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mt-2" />
                  </div>
                  <p className="ml-4">
                    Built and scaled SaaS solutions, experiencing firsthand the challenges of growth and legal compliance
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mt-2" />
                  </div>
                  <p className="ml-4">
                    Provided strategic legal guidance to businesses at various stages of development
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mt-2" />
                  </div>
                  <p className="ml-4">
                    Passionate about leveraging AI tools to enhance legal and business strategies
                  </p>
                </div>
              </div>

              <p>
                My background in law and history enables me to contextualize current trends while 
                anticipating future opportunities. I focus on helping businesses and individuals 
                navigate the complex intersection of law and growth, providing strategic guidance 
                that goes beyond traditional legal advice.
              </p>

              <p>
                Through collaborative leadership and forward-thinking solutions, I'm dedicated to 
                creating lasting value for my clients. Whether you're launching a startup, scaling 
                your business, or need personal legal guidance, I bring both the legal knowledge 
                and practical business experience to help you achieve your goals.
              </p>

              <div className="pt-6">
                <Button size="lg" className="font-semibold">
                  Book a Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 