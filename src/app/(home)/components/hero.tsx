"use client"

import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef } from 'react'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [])

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (!href) return
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32">
      {/* Video background */}
      <div className="absolute inset-0">
        <motion.video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </motion.video>
      </div>

      {/* Gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/90 to-gray-900/95"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-glow"
        animate={floatingAnimation}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-24 h-24 bg-purple-500/10 rounded-full blur-glow-sm"
        animate={floatingAnimation}
      />

      <div className="container-default relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <motion.div 
            className="col-span-8 pt-20 pb-4 sm:pt-24 sm:pb-6 lg:pt-32 lg:pb-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.div
              variants={titleVariants}
              className="relative"
            >
              <motion.h1 
                className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="block">Strategic Legal</span>{' '}
                <span className="block bg-gradient-text">
                  Solutions
                </span>
              </motion.h1>
            </motion.div>

            <motion.p 
              variants={titleVariants}
              className="mt-6 text-base text-gray-300 sm:text-lg sm:max-w-xl"
            >
              Build your vision with strategic counsel from someone who understands both the legal landscape and real-world challenges
            </motion.p>

            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={titleVariants}
            >
              <motion.a
                href="#contact"
                onClick={handleScrollClick}
                className="btn-primary"
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Strategy Session
              </motion.a>
              <motion.a
                href="#business"
                onClick={handleScrollClick}
                className="btn-secondary"
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.a 
          href="#business"
          onClick={handleScrollClick}
          className="flex flex-col items-center text-gray-400 hover:text-purple-400 transition-standard"
          whileHover={{ scale: 1.1 }}
          animate={floatingAnimation}
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="h-6 w-6" />
        </motion.a>
      </motion.div>
    </section>
  )
} 