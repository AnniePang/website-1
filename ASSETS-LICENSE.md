# Third-party assets and licensing

This site is an **Animal Crossing: New Horizons–inspired restyle** of Annie Pang's
portfolio. It deliberately contains **no Nintendo assets of any kind**.

## Summary

| Asset class | Source | License | Cleared for reuse? |
|---|---|---|---|
| Heading font — **Baloo 2** | Google Fonts, self-hosted by `next/font` | SIL Open Font License 1.1 | ✅ Yes |
| Body font — **Nunito** | Google Fonts, self-hosted by `next/font` | SIL Open Font License 1.1 | ✅ Yes |
| Technology logos (29 SVGs in `public/logos/`) | Simple Icons | CC0-1.0 (public domain) | ✅ Yes — carried over from the original site |
| Island decor: leaf, cloud, palm, bell, shoreline divider | Hand-authored for this project (`components/acnh/decor.tsx`, `public/acnh/leaf-favicon.svg`) | Same as this repository | ✅ Yes — original work |
| Colour palette (island greens, sand, sea, bell yellow) | Authored values keyed off the game's look | n/a — colour values are not copyrightable | ✅ Yes |
| Photography and written content | Annie Pang | Owner's own | ✅ Yes |

## Why no assets were taken from the ACNH open-source ecosystem

The GitHub `acnh` topic (<https://github.com/topics/acnh>, 74 repositories) was
surveyed for reusable design assets. **None are cleared for reuse:**

- **`Nookipedia/acnh.directory`** — MIT licensed, but MIT covers only the *code*.
  Its background image and item art are extracted game assets. Its CSS uses
  generic Lato, so there is no ACNH design system to inherit.
- **`eugeneration/HappyIslandDesigner`** — MIT licensed code; the icon set depicts
  in-game objects and is derived from the game.
- **`claudiabdm/acnh-character-maker`**, **`jameskokoska/ACNH-Pocket-Guide`**,
  **`maael/nook`** — **no license file at all**, and all three render
  ripped villager/item sprites. Unusable on both counts.
- **`skullface/awesome-acnh`** — a curated link list. No assets.
- **`acnhapi` / datamined APIs** — serve Nintendo's own image files.

The pattern holds across the topic: every recognisable ACNH visual in those
projects (villager sprites, item icons, the leaf logo, the FOT-Rodin / Seurat UI
typefaces owned by Fontworks) is a game asset that remains Nintendo's copyright
regardless of the repository's license.

## Approach taken instead

The theme reproduces the *visual language* rather than the assets:

- **Shapes** — pillowy corner radii, fat 2px borders, dashed inner "stitch"
  borders on dialogue panels, raised buttons with a pressed-down bottom edge.
- **Surfaces** — sand/cream section washes, a sky-to-sand hero gradient, a
  scalloped two-tone shoreline divider, dappled-light page grain in pure CSS.
- **Furniture** — wooden signpost plaques for section headings, leaf-pill tags,
  a floating rounded nav bar, a Nook-phone-style app grid for the mobile menu.
- **Type** — rounded gothic display + rounded humanist body, the closest
  OFL-licensed match to the game's lettering.

Nothing here reproduces a Nintendo logo, character, or trademark. "Animal
Crossing" and "New Horizons" are trademarks of Nintendo; this is an unaffiliated
fan-styled personal site and the name is used nowhere in the UI.

## Implementation note

The original portfolio styles every surface with Tailwind's `slate` scale (~550
usages). Rather than rewrite 1,851 lines of markup, `app/globals.css` remaps the
`slate` ramp itself to a warm sand/driftwood palette. **All page content is
byte-identical to the original** — only presentation changed.
