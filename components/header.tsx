"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { motion } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
            Annie Pang
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#experience"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#education"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Education
            </Link>
            <Link
              href="#blogs"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="#contact"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/annie-pang" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/AnniePang" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:anniepang@berkeley.edu" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-slate-900 shadow-lg"
        >
          <div className="px-4 py-5 space-y-4">
            <Link
              href="#experience"
              className="block text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="block text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="block text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#education"
              className="block text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Education
            </Link>
            <Link
              href="#blogs"
              className="block text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="#contact"
              className="block text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex space-x-4 pt-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/annie-pang" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/AnniePang" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:anniepang@berkeley.edu" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

