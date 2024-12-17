"use client"

import { Building2, Users2, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef, useMemo, useCallback } from "react"
import Link from "next/link"

// Update the CARD_CONTENTS array
const CARD_CONTENTS = [
  {
    icon: Building2,
    title: "Businesses",
    description: "From idea to growth stage, we provide strategic legal support aligned with your business journey.",
    items: [
      "Entity formation and strategic structuring",
      "Growth-oriented legal frameworks",
      "Partnership development & negotiations",
      "Market expansion support",
      "Fundraising & investor relations"
    ],
    buttonText: "Start Your Journey",
    href: "/for-businesses"
  },
  {
    icon: User,
    title: "Individuals",
    description: "Professional legal guidance for personal and professional matters.",
    items: [
      "Personal contract review & creation",
      "Legal documentation support",
      "Strategic business consulting",
      "Professional agreements",
      "Dispute resolution guidance"
    ],
    buttonText: "Get Support",
    href: "/personal"
  }
] as const

export function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  })

  // Memoize animation variants
  const animations = useMemo(() => ({
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
      }
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
      }
    }
  }), [])

  // Memoize card render function
  const renderCard = useCallback(({ content, index }: { 
    content: typeof CARD_CONTENTS[number], 
    index: number 
  }) => {
    const Icon = content.icon
    return (
      <motion.div 
        key={index}
        variants={animations.item}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        <Card className="bg-gray-800 border-purple-500 h-full flex flex-col">
          <CardHeader className="flex-none">
            <Icon className="h-8 w-8 text-purple-400 mb-2" />
            <CardTitle className="text-purple-300">{content.title}</CardTitle>
            <CardDescription className="text-gray-400 min-h-[48px]">
              {content.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3 text-sm text-gray-300">
              {content.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-purple-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex-none pt-6">
            <Link href={content.href} className="w-full">
              <Button 
                size="lg" 
                className="w-full font-semibold"
              >
                {content.buttonText}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    )
  }, [animations.item])

  return (
    <motion.section 
      ref={sectionRef}
      id="business"
      className="relative py-24"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations.container}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={animations.item}
        >
          <h2 className="text-3xl font-bold text-purple-300 mb-2">Who We Serve</h2>
          <p className="text-xl text-gray-300">Strategic Legal Solutions for Your Journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CARD_CONTENTS.map((content, index) => (
            renderCard({ content, index })
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          variants={animations.item}
        >
          <Button variant="white" size="lg" className="font-semibold">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
} 