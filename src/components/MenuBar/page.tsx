"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Mail, Send, Moon, Sun, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
// No sheet imports needed

export default function MenuBar() {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Handle initial theme state after mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    setIsDark(theme === "dark")
  }, [theme])

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setTheme(newTheme)
    setIsDark(!isDark)
  }

  // Social links
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/ET-SPARK", icon: <Github className="h-5 w-5" /> },
    { name: "Email", href: "mailto:samuelwoyesso2016@gmail.com", icon: <Mail className="h-5 w-5" /> },
    { name: "Telegram", href: "http://t.me/rAsSpark", icon: <Send className="h-5 w-5" /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/samuel-woyesso-312266259/", icon: <Linkedin className="h-5 w-5" /> },

  ]

  if (!mounted) {
    // Prevent hydration issues
    return (
      <header className="h-16 md:h-20 w-full border-b flex items-center justify-between px-4 md:px-6">
        <div className="w-[120px]" />
        <div className="flex space-x-4" />
      </header>
    )
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`sticky top-0 z-50 w-full ${scrolled ? "bg-white/80 backdrop-blur-md dark:bg-gray-950/80 shadow-sm" : "bg-white dark:bg-gray-950"
        } transition-all duration-300`}
    >
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Image
              src="/logo.svg"
              width={120}
              height={40}
              alt="Samuel's Portfolio"
              className="transition-all duration-300"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {/* Social Links */}
          <div className="flex items-center space-x-1">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full hover:text-yellow-600 hover:bg-yellow-50"
                  aria-label={link.name}
                >
                  {link.icon}
                </Button>
              </Link>
            ))}
          </div>
          <div> | </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2 rounded-full hover:text-yellow-600 hover:bg-yellow-50"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? "dark" : "light"}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-1">
          {/* Social Links - Mobile */}
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:text-yellow-600 hover:bg-yellow-50 h-9 w-9"
                aria-label={link.name}
              >
                {link.icon}
              </Button>
            </Link>
          ))}

          <div> | </div>


          {/* Theme Toggle - Mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:text-yellow-600 hover:bg-yellow-50 h-9 w-9"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? "dark" : "light"}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
