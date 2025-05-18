"use client"

import { useState, useEffect } from "react"
import { FileText, ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Landing() {
  const [typedText, setTypedText] = useState("")
  const roles = ["Fullstack Developer", "UI/UX Enthusiast", "Problem Solver", "Mobile App Developer"]
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current role being typed
      const currentRole = roles[roleIndex]

      // If typing
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
        setTypingSpeed(100)
      }
      // If we've finished typing, pause before deleting
      else if (!isDeleting && charIndex === currentRole.length) {
        setIsDeleting(true)
        setTypingSpeed(1000) // Pause before deleting
      }
      // If deleting
      else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
        setTypingSpeed(50)
      }
      // If we've finished deleting, move to next role
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
        setTypingSpeed(300) // Pause before typing next word
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex, roles, typingSpeed])

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-sm md:text-base uppercase tracking-widest text-yellow-600 font-medium">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent"
        >
          Hi, I&apos;m{" "}
          <span className="relative text-yellow-500"> {/* <- added fallback color */}
            Samuel
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
          </span>
        </motion.h1>


        {/* Typed text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-xl md:text-2xl font-light mb-8 h-8"
        >
          I&apos;m a <span className="text-yellow-600 font-medium">{typedText}</span>
          <span className="animate-blink">| </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Passionate fullstack developer, coding enthusiast & problem solver. Always striving for elegant solutions and
          exceptional user experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="https://drive.google.com/uc?id=15uwpTOKJ-o_2H8S8Pue00bKSeaaKM9cJ" target="_blank">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">              <FileText className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </Link>

        </motion.div>

        {/* Social links */}

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-1 h-3 bg-yellow-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
