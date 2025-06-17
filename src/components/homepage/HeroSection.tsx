
"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { TypewriterText } from "./TypewriterText"
import { ParticleBackground } from "./ParticleBackground"

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a]">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/10 via-transparent to-[#39ff14]/10 animate-pulse" />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Video Background Overlay */}
      {isVideoPlaying && (
        <div className="absolute inset-0 bg-black/50 z-10">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-30"
            poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop"
          >
            <source src="/placeholder-tattoo-video.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <div className="container mx-auto px-4 z-20 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#00d4ff]/20 to-[#39ff14]/20 rounded-full border border-[#00d4ff]/30"
              >
                <span className="text-[#00d4ff] text-sm font-medium">
                  ✨ AI-Powered Tattoo Design
                </span>
              </motion.div>
              
              <div className="space-y-2">
                <TypewriterText
                  text="Where Art Meets"
                  className="text-4xl md:text-6xl font-bold text-white"
                  delay={1000}
                />
                <TypewriterText
                  text="Artificial Intelligence"
                  className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#39ff14] bg-clip-text text-transparent"
                  delay={2500}
                />
              </div>
              
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-300 max-w-lg leading-relaxed"
              >
                Transform your tattoo vision into reality with our revolutionary AI design studio. 
                Collaborate with master artists and cutting-edge technology.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00d4ff] to-[#39ff14] hover:from-[#00a8cc] hover:to-[#2ecc11] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00d4ff]/30"
              >
                Start Creating
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10 px-8 py-4 rounded-full transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-8 border-t border-gray-800"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ffd700]">5000+</div>
                <div className="text-sm text-gray-400">Designs Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ffd700]">500+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ffd700]">10+</div>
                <div className="text-sm text-gray-400">Master Artists</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
              {/* AI Interface Mockup */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">AI Design Studio</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4 space-y-3">
                  <div className="h-2 bg-gradient-to-r from-[#00d4ff] to-[#39ff14] rounded-full w-3/4"></div>
                  <div className="h-2 bg-gray-600 rounded-full w-1/2"></div>
                  <div className="h-2 bg-gray-600 rounded-full w-2/3"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-700 rounded-lg h-20 flex items-center justify-center">
                    <span className="text-[#00d4ff] text-xs">Style: Traditional</span>
                  </div>
                  <div className="bg-gray-700 rounded-lg h-20 flex items-center justify-center">
                    <span className="text-[#39ff14] text-xs">Size: Medium</span>
                  </div>
                </div>
              </div>
              
              {/* Glowing Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff]/30 to-[#39ff14]/30 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
