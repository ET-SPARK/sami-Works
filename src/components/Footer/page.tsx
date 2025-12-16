"use client";

import { motion } from "framer-motion";
import { Github, Mail, Send, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social links - same as in the menu bar for consistency
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ET-SPARK",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "Email",
      href: "mailto:samuelwoyesso2016@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
    {
      name: "Telegram",
      href: "http://t.me/rAsSpark",
      icon: <Send className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/samuel-woyesso-312266259/",
      icon: <Linkedin className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-950 mt-20">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About section */}

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-600">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-600 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="https://drive.google.com/uc?id=1nbtAghz8ABgEL9RReTWMiHHUTyGx6bCo"
                  className="hover:text-yellow-600 transition-colors"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-600">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full hover:text-yellow-600 hover:border-yellow-600 hover:bg-yellow-50"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Samuel Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
