import { IVORY_GOLD, IVORY_LACE_EDGE, IVORY_SECTION_BACKGROUND } from "@/lib/ivory-lace"

/** Cream lace ground (same as the welcome card, couple video and love story) — put it on the
 *  section's own `style` so it paints behind everything */
export const ivorySectionStyle = { background: IVORY_SECTION_BACKGROUND } as const

/**
 * The decoration that goes with the cream lace ground: scalloped lace edging down both sides and
 * a gilded rule along the top. Absolutely positioned — the parent needs `position: relative`.
 */
export function IvoryBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1 z-[1] w-[26px] opacity-80 sm:left-3"
        style={{ background: `${IVORY_LACE_EDGE} 0 0 / 26px 24px repeat-y` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-1 z-[1] w-[26px] -scale-x-100 opacity-80 sm:right-3"
        style={{ background: `${IVORY_LACE_EDGE} 0 0 / 26px 24px repeat-y` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-10 top-0 z-[1] h-px"
        style={{ background: `linear-gradient(to right, transparent, ${IVORY_GOLD}, #E9D3A6, ${IVORY_GOLD}, transparent)` }}
      />
    </>
  )
}
