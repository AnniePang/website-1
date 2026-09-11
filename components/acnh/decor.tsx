/**
 * ACNH-flavoured decorative primitives.
 *
 * Every path in this file was drawn by hand for this project. No game assets,
 * ripped sprites, or third-party artwork are used -- see ASSETS-LICENSE.md.
 * Nothing here reproduces a Nintendo logo or character; these are generic
 * island shapes (leaves, waves, clouds, palms, bells) in the island palette.
 */

/** Scalloped island shoreline -- replaces the stock wave divider. */
export function IslandEdge({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      {/* Back sand shelf */}
      <path
        d="M0 62c60 0 60 22 120 22s60-22 120-22 60 22 120 22 60-22 120-22 60 22 120 22 60-22 120-22 60 22 120 22 60-22 120-22 60 22 120 22 60-22 120-22v58H0z"
        fill="#f0dcae"
        opacity="0.85"
      />
      {/* Front cream shelf, offset half a period for a layered shore */}
      <path
        d="M0 84c60 0 60 20 120 20s60-20 120-20 60 20 120 20 60-20 120-20 60 20 120 20 60-20 120-20 60 20 120 20 60-20 120-20 60 20 120 20 60-20 120-20v36H0z"
        className="fill-cream dark:fill-slate-950"
      />
    </svg>
  )
}

/** Fluffy island cloud. */
export function Cloud({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 54" aria-hidden="true" className={className}>
      <g fill="currentColor">
        <circle cx="34" cy="32" r="20" />
        <circle cx="60" cy="24" r="24" />
        <circle cx="88" cy="34" r="18" />
        <rect x="14" y="34" width="92" height="18" rx="9" />
      </g>
    </svg>
  )
}

/** Simple leaf, used as a bullet / accent glyph. */
export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M12 2c5 2.6 7.5 6.4 7.5 10.2 0 4.3-3.4 7.6-7.5 7.6s-7.5-3.3-7.5-7.6C4.5 8.4 7 4.6 12 2z" fill="currentColor" />
      <path d="M12 4v15" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

/** Bell-bag style coin glyph for accent use. */
export function BellCoin({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" fill="#f7d74a" stroke="#e0ba25" strokeWidth="2" />
      <path d="M8.5 10.5h7M8.5 13.5h7M12 8v8" stroke="#a5850f" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

/** Palm-tree silhouette for hero corners. */
export function Palm({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 160" aria-hidden="true" className={className}>
      <path d="M58 158c-2-42 2-74 6-96l8 1c-5 22-9 53-6 95z" fill="#a97a48" />
      <g fill="#57a83a">
        <path d="M62 62C44 44 24 42 8 52c18-4 34 2 46 16z" />
        <path d="M64 60c14-22 34-30 52-24-18 2-32 12-40 28z" />
        <path d="M62 58C52 34 34 22 14 24c18 6 30 18 36 38z" />
        <path d="M66 58c16-16 38-18 54-6-18-4-34 0-46 12z" />
        <path d="M64 56c6-24 22-40 42-44-16 10-26 26-30 46z" />
      </g>
      <circle cx="60" cy="60" r="7" fill="#43852c" />
    </svg>
  )
}
