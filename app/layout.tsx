import type React from "react"
import { Baloo_2, Nunito } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { IslandProvider, islandNoFlashScript } from "@/components/island-provider"

/**
 * Type pairing for the island skin only. The professional design keeps the
 * browser default sans, so loading these does not change how it looks -- the
 * faces are applied under `.island` in globals.css, not on <body>.
 *
 * Animal Crossing: New Horizons sets its UI in FOT-Rodin / Seurat, licensed
 * commercial faces owned by Fontworks that cannot be redistributed. These are
 * the closest freely-licensed stand-ins, both SIL Open Font License 1.1:
 *
 *   Baloo 2  -- rounded chunky display face
 *   Nunito   -- rounded humanist sans for body copy
 *
 * next/font self-hosts both at build time; nothing is fetched from Google at
 * runtime.
 */
const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata = {
  title: "Annie Pang - Data Scientist & ML Engineer",
  description: "Portfolio website for Annie Pang, Data Scientist and Machine Learning Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${baloo.variable} ${nunito.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Applies the stored skin before first paint so a returning island
            visitor never sees a flash of the professional theme. */}
        <script dangerouslySetInnerHTML={{ __html: islandNoFlashScript }} />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <IslandProvider>{children}</IslandProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
