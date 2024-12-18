"use client"

import {
  useScroll,
  useTransform,
} from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import dynamic from 'next/dynamic'

const LazyMotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), {
  ssr: false
})

const TIMELINE_DATA = [
  {
    title: "Discovery",
    content: (
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-purple-900/20 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
        <div className="relative rounded-lg p-8 border border-purple-500/30">
          <h4 className="text-xl font-semibold text-purple-300 mb-3">Initial Consultation & Strategy</h4>
          <p className="text-gray-300 mb-4">
            We begin with a comprehensive discussion of your legal needs, business goals, and current challenges.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li>• Assessment of current legal structure</li>
            <li>• Identification of key challenges</li>
            <li>• Strategic planning session</li>
            <li>• Custom roadmap development</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Foundation",
    content: (
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-purple-900/20 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
        <div className="relative rounded-lg p-8 border border-purple-500/30">
          <h4 className="text-xl font-semibold text-purple-300 mb-3">Legal Framework Setup</h4>
          <p className="text-gray-300 mb-4">
            Establishing the core legal infrastructure needed for your success.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li>• Entity formation & structuring</li>
            <li>• Compliance framework implementation</li>
            <li>• Document automation setup</li>
            <li>• Initial protection measures</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Growth",
    content: (
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-purple-900/20 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
        <div className="relative rounded-lg p-8 border border-purple-500/30">
          <h4 className="text-xl font-semibold text-purple-300 mb-3">Scaling & Optimization</h4>
          <p className="text-gray-300 mb-4">
            Implementing advanced legal strategies to support your growth.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li>• Contract management systems</li>
            <li>• IP portfolio development</li>
            <li>• Risk management protocols</li>
            <li>• Stakeholder agreements</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Evolution",
    content: (
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-purple-900/20 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
        <div className="relative rounded-lg p-8 border border-purple-500/30">
          <h4 className="text-xl font-semibold text-purple-300 mb-3">Continuous Improvement</h4>
          <p className="text-gray-300 mb-4">
            Ongoing support and adaptation to meet your evolving needs.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li>• Regular legal health checks</li>
            <li>• Strategy refinement</li>
            <li>• Compliance updates</li>
            <li>• Growth opportunity analysis</li>
          </ul>
        </div>
      </div>
    ),
  },
] as const

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div
      className="w-full bg-background font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-foreground max-w-4xl font-bold">
          Your Journey to Legal Excellence
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-sm">
          A structured approach to transforming your legal foundation
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {TIMELINE_DATA.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-primary/20 border border-primary p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-primary/70">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-primary/70">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          )
        })}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-primary/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <LazyMotionDiv
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary/80 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  )
} 