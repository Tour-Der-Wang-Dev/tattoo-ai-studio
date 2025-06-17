
"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, Mail } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Mail, href: "#", label: "Email" }
  ]

  const footerLinks = [
    {
      title: "Studio",
      links: [
        { label: "Design Generator", href: "#" },
        { label: "Gallery", href: "#" },
        { label: "Artists", href: "#" },
        { label: "Pricing", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Safety", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "GDPR", href: "#" }
      ]
    }
  ]

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-[#00d4ff] to-[#39ff14] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">I</span>
              </div>
              <span className="text-white font-bold text-xl">InkAI Studio</span>
            </motion.div>
            
            <p className="text-gray-400 max-w-md">
              Where traditional artistry meets cutting-edge AI technology. 
              Create unique tattoo designs with the help of master artists and intelligent algorithms.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00d4ff] hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-white font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#00d4ff] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 InkAI Studio. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Crafted with ❤️ for tattoo enthusiasts worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
