"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function PersonalTestimonials() {
  const testimonials = [
    {
      content: "The team made my estate planning process smooth and stress-free. They explained everything clearly and ensured my family's future is secure.",
      author: "Sarah Johnson",
      role: "Estate Planning Client",
      rating: 5
    },
    {
      content: "During my divorce, they provided not just legal expertise but genuine emotional support. Their guidance helped me navigate a difficult time.",
      author: "Michael Chen",
      role: "Family Law Client",
      rating: 5
    },
    {
      content: "Their real estate expertise saved me from a problematic property purchase. Their attention to detail and proactive approach was invaluable.",
      author: "Emily Rodriguez",
      role: "Real Estate Client",
      rating: 5
    }
  ]

  return (
    <section className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real experiences from clients who trusted us with their legal matters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-primary/20"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="text-purple-300 font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 