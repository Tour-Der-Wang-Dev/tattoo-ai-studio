
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, signOut } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/studio", label: "Studio" },
    { href: "/gallery", label: "Gallery" },
    { href: "/artists", label: "Artists" },
    { href: "/pricing", label: "Pricing" }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1a1a1a]/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-10 h-10 bg-gradient-to-r from-[#00d4ff] to-[#39ff14] rounded-lg flex items-center justify-center"
            >
              <span className="text-black font-bold text-xl">I</span>
            </motion.div>
            <span className="text-white font-bold text-xl">InkAI Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-[#00d4ff] transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-[#00d4ff]"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">Welcome back!</span>
                <Button onClick={signOut} variant="outline" className="border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10">
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/auth">
                  <Button variant="ghost" className="text-gray-300 hover:text-[#00d4ff]">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth?mode=register">
                  <Button className="bg-gradient-to-r from-[#00d4ff] to-[#39ff14] hover:from-[#00a8cc] hover:to-[#2ecc11] text-black font-semibold">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#1a1a1a]/95 backdrop-blur-md border-t border-gray-800"
            >
              <div className="p-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-300 hover:text-[#00d4ff] transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="border-t border-gray-800 pt-4 space-y-4">
                  {user ? (
                    <Button
                      onClick={() => {
                        signOut()
                        setIsMobileMenuOpen(false)
                      }}
                      variant="outline"
                      className="w-full border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10"
                    >
                      Sign Out
                    </Button>
                  ) : (
                    <>
                      <Link href="/auth" className="block">
                        <Button
                          variant="ghost"
                          className="w-full text-gray-300 hover:text-[#00d4ff]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Sign In
                        </Button>
                      </Link>
                      <Link href="/auth?mode=register" className="block">
                        <Button
                          className="w-full bg-gradient-to-r from-[#00d4ff] to-[#39ff14] hover:from-[#00a8cc] hover:to-[#2ecc11] text-black font-semibold"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Get Started
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
