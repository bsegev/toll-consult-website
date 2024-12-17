"use client"

import { Hero } from "./sections/home/hero"
import { About } from "./sections/home/about"
import { SocialProof } from "./sections/home/social-proof"
import { Contact } from "./sections/home/contact"

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-background via-primary/10 to-background pointer-events-none" />
      
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[30%] bg-purple-600/10 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[30%] bg-purple-600/10 blur-[100px] rounded-full animate-pulse delay-1000" />
        <div className="absolute top-[90%] left-[20%] w-[40%] h-[30%] bg-purple-600/10 blur-[100px] rounded-full animate-pulse delay-2000" />
        
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[20%] bg-gray-900/40 blur-[100px] rounded-full" />
        <div className="absolute top-[70%] left-[10%] w-[30%] h-[20%] bg-gray-900/40 blur-[100px] rounded-full" />
      </div>

      <div className="relative">
        <Hero />
        <div className="relative space-y-32">
          <About />
          <SocialProof />
          <Contact />
        </div>
      </div>
    </div>
  )
} 