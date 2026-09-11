"use client"

import { useIsland } from "@/components/island-provider"
import { Leaf } from "@/components/acnh/decor"
import { Briefcase } from "lucide-react"

/**
 * Skin switch: professional <-> island.
 *
 * A two-option segmented control rather than a bare icon, because an unlabelled
 * icon gives no hint that a second design exists. Rendered as a radio group so
 * both destinations are announced, arrow keys move between them, and the current
 * skin is conveyed by state rather than by colour alone.
 */
export function IslandToggle({ className = "" }: { className?: string }) {
  const { island, setIsland } = useIsland()

  return (
    <div
      role="radiogroup"
      aria-label="Site design"
      className={`inline-flex items-center rounded-full border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 p-0.5 ${className}`}
    >
      <button
        type="button"
        role="radio"
        aria-checked={!island}
        onClick={() => setIsland(false)}
        title="Professional design"
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 ${
          !island
            ? "bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white"
            : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
        }`}
      >
        <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
        <span>Professional</span>
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={island}
        onClick={() => setIsland(true)}
        title="Animal Crossing inspired design"
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 ${
          island
            ? "bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white"
            : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
        }`}
      >
        <Leaf className="h-3.5 w-3.5" />
        <span>Island</span>
      </button>
    </div>
  )
}
