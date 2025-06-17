
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Users, Shield, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "AI Design Generation",
    description: "Revolutionary AI technology creates unique tattoo designs based on your vision and preferences.",
    color: "#00d4ff"
  },
  {
    icon: Users,
    title: "Master Artists",
    description: "Connect with world-class tattoo artists who bring decades of experience and artistic mastery.",
    color: "#39ff14"
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Professional studios with the highest safety standards and sterilization protocols.",
    color: "#ffd700"
  }
]

export function FeaturesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Choose <span className="bg-gradient-to-r from-[#00d4ff] to-[#39ff14] bg-clip-text text-transparent">InkAI Studio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the perfect fusion of artificial intelligence and artistic mastery
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm h-full hover:border-[#00d4ff]/50 transition-all duration-300 group">
                  <CardHeader className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <feature.icon
                        className="w-8 h-8"
                        style={{ color: feature.color }}
                      />
                    </motion.div>
                    <CardTitle className="text-2xl text-white group-hover:text-[#00d4ff] transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-300 text-lg leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    <Button
                      variant="ghost"
                      className="text-[#00d4ff] hover:text-white hover:bg-[#00d4ff]/10 p-0 h-auto font-semibold group"
                    >
                      Learn More
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
