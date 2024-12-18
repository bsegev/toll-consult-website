"use client"

import { Building2, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef, useMemo, useCallback } from "react"
import Link from "next/link"

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
    href: "/business"
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

  const renderCard = useCallback(({ content, index }: { 
    content: typeof CARD_CONTENTS[number], 
    index: number 
  }) => {
    const Icon = content.icon
    return (
      <motion.div 
        key={index}
        variants={animations.item}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        <Card className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg border border-purple-500/40 h-full flex flex-col overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-500/30 pointer-events-none" />
          <CardHeader className="relative card-header">
            <Icon className="h-8 w-8 text-purple-400 mb-2" />
            <CardTitle className="text-card-title">{content.title}</CardTitle>
            <CardDescription className="text-card-description">
              {content.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative card-content">
            <ul className="list-bullets">
              {content.items.map((item, i) => (
                <li key={i} className="list-bullet-item">
                  <span className="list-bullet">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="relative card-footer">
            <Link href={content.href} className="w-full">
              <Button 
                className="w-full font-semibold bg-purple-600 hover:bg-purple-700 text-white"
                size="lg"
              >
                {content.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
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
      className="relative section-padding"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations.container}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-purple-900/30 to-gray-900/80 pointer-events-none" />
      
      <div className="container-default relative">
        <motion.div 
          className="text-center mb-12"
          variants={animations.item}
        >
          <h2 className="text-title mb-2">Who We Serve</h2>
          <p className="text-subtitle">Strategic Legal Solutions for Your Journey</p>
        </motion.div>

        <div className="grid-2-cols container-narrow">
          {CARD_CONTENTS.map((content, index) => (
            renderCard({ content, index })
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          variants={animations.item}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="font-semibold hover:bg-purple-500/10 border-purple-500/20"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
} 