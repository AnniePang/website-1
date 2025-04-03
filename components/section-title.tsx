"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animation"

interface SectionTitleProps {
  title: string
  subtitle: string
  className?: string
}

export function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`mb-10 ${className}`}
    >
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>
    </motion.div>
  )
}

