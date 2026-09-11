"use client"

import * as React from "react"

/**
 * Island theme axis.
 *
 * This is deliberately SEPARATE from next-themes, which already owns the
 * light/dark axis via a `dark` class on <html>. Skin (professional | island)
 * and brightness (light | dark) are independent: all four combinations are
 * valid, so they cannot share one attribute.
 *
 * Mechanism: an `island` class on <html>. Every island style in globals.css is
 * scoped under `.island`, so with the class absent the professional design
 * renders byte-for-byte unchanged.
 */

export const ISLAND_STORAGE_KEY = "annie-portfolio-skin"

type IslandContextValue = {
  island: boolean
  setIsland: (value: boolean) => void
  toggle: () => void
  /** False until the client has read localStorage, so the toggle can avoid a wrong first paint. */
  ready: boolean
}

const IslandContext = React.createContext<IslandContextValue | null>(null)

export function IslandProvider({ children }: { children: React.ReactNode }) {
  // Start from whatever the pre-paint script in <head> already decided, so the
  // provider agrees with the DOM on the very first render instead of flipping it.
  const [island, setIslandState] = React.useState(false)
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    const active =
      document.documentElement.classList.contains("island") ||
      window.localStorage.getItem(ISLAND_STORAGE_KEY) === "island"
    setIslandState(active)
    document.documentElement.classList.toggle("island", active)
    setReady(true)
  }, [])

  const setIsland = React.useCallback((value: boolean) => {
    setIslandState(value)
    document.documentElement.classList.toggle("island", value)
    try {
      window.localStorage.setItem(ISLAND_STORAGE_KEY, value ? "island" : "professional")
    } catch {
      // Private-mode / blocked storage: the toggle still works for this page view.
    }
  }, [])

  const value = React.useMemo<IslandContextValue>(
    () => ({ island, setIsland, toggle: () => setIsland(!island), ready }),
    [island, setIsland, ready],
  )

  return <IslandContext.Provider value={value}>{children}</IslandContext.Provider>
}

/**
 * Safe outside the provider: server-rendered primitives can call this without
 * being wrapped, and get the professional default rather than throwing.
 */
export function useIsland(): IslandContextValue {
  const ctx = React.useContext(IslandContext)
  return ctx ?? { island: false, setIsland: () => {}, toggle: () => {}, ready: false }
}

/**
 * Runs before first paint to apply the stored skin, so a returning island
 * visitor never sees a flash of the professional theme. Mirrors the approach
 * next-themes uses for dark mode.
 */
export const islandNoFlashScript = `(function(){try{var v=localStorage.getItem("${ISLAND_STORAGE_KEY}");if(v==="island"){document.documentElement.classList.add("island")}}catch(e){}})();`
