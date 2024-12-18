"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PricingStages as BusinessPricing } from "./stages"
import { PersonalStages } from "./personal-stages"

export function PricingTabs() {
  const [activeTab, setActiveTab] = useState<'business' | 'personal'>('business')

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Buttons */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-gray-800 rounded-lg border border-purple-500/20">
            <button
              onClick={() => setActiveTab('business')}
              className={`px-8 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'business'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              For Business
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-8 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'personal'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              For Individuals
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'business' ? (
              <BusinessPricing />
            ) : (
              <PersonalStages />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
} 