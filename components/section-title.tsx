"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animation"
import { useIsland } from "@/components/island-provider"
import { Leaf } from "@/components/acnh/decor"

interface SectionTitleProps {
  title: string
  subtitle: string
  className?: string
}

export function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  const { island } = useIsland()

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`mb-10 ${className}`}
    >
      {island ? (
        // Island: the heading becomes a wooden signpost plaque, the way each
        // area of the game is labelled at its edge. Plaque styling lives in the
        // .acnh-signpost component class (app/globals.css).
        <>
          <div className="flex items-center gap-3 mb-3">
            <span className="acnh-signpost text-2xl md:text-3xl font-bold">
              <h2 className="inline">{title}</h2>
            </span>
            <Leaf className="w-6 h-6 text-leaf-500 shrink-0" />
          </div>
          <p className="text-slate-600 dark:text-slate-300 font-medium">{subtitle}</p>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{title}</h2>
          <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>
        </>
      )}
    </motion.div>
  )
}

