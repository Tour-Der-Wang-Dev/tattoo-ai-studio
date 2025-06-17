
"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface CounterProps {
  end: number
  label: string
  suffix?: string
  duration?: number
}

function Counter({ end, label, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ffd700] to-[#00d4ff] bg-clip-text text-transparent">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-300 text-lg mt-2">{label}</div>
    </motion.div>
  )
}

export function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { end: 5000, label: "Designs Created", suffix: "+" },
    { end: 500, label: "Happy Clients", suffix: "+" },
    { end: 10, label: "Master Artists", suffix: "+" },
    { end: 99, label: "Satisfaction Rate", suffix: "%" }
  ]

  return (
    <section className="py-24 bg-gradient-to-r from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/5 via-transparent to-[#39ff14]/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Trusted by <span className="bg-gradient-to-r from-[#00d4ff] to-[#39ff14] bg-clip-text text-transparent">Thousands</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our growing community of artists and tattoo enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Counter {...stat} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
