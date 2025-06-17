
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Tattoo Enthusiast",
    content: "InkAI Studio transformed my vague idea into an absolutely stunning design. The AI understood exactly what I wanted!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b784?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Professional Artist",
    content: "As a tattoo artist, I was skeptical about AI. But this tool has become invaluable for inspiration and client consultations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "First-time Client",
    content: "The platform made getting my first tattoo so much less intimidating. I could visualize everything before committing.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <Star
            className={`w-5 h-5 ${
              i < rating ? "fill-[#ffd700] text-[#ffd700]" : "text-gray-600"
            }`}
          />
        </motion.div>
      ))}
    </div>
  )
}

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What Our <span className="bg-gradient-to-r from-[#00d4ff] to-[#39ff14] bg-clip-text text-transparent">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real stories from our satisfied customers
            </p>
          </div>

          <div
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                  <CardContent className="p-8 md:p-12">
                    <div className="space-y-6">
                      <StarRating rating={testimonials[currentIndex].rating} />
                      
                      <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                        "{testimonials[currentIndex].content}"
                      </blockquote>
                      
                      <div className="flex items-center gap-4">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-[#00d4ff]"
                        />
                        <div>
                          <div className="font-semibold text-white text-lg">
                            {testimonials[currentIndex].name}
                          </div>
                          <div className="text-[#00d4ff]">
                            {testimonials[currentIndex].role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#00d4ff] scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
