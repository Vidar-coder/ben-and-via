// Soft dark screen over the sage silk backdrop, so white text on top of it reads clearly.
// Deep olive-black (same family as the silk's shadows), so it looks like shade, not a grey box.
// Absolutely positioned behind the section's content — the parent needs `position: relative`
// and the content should come after it in the markup (or sit at z-index ≥ 1).

const SHADE = "18 22 14" // rgb of the screen colour

type SilkScreenProps = {
  /** Opacity of the screen through the body of the section (0–1) */
  strength?: number
  /** "band": even screen that fades in/out at the top and bottom edges (tall sections).
   *  "spotlight": strongest through the middle, easing off toward the edges (short sections). */
  shape?: "band" | "spotlight"
  /** Light blur that calms the bright satin highlights — costs GPU over the moving silk, so
   *  keep it for short sections */
  blur?: boolean
}

export function SilkScreen({ strength = 0.42, shape = "band", blur = false }: SilkScreenProps) {
  const a = (k: number) => `rgb(${SHADE} / ${Math.round(strength * k * 100)}%)`
  const background =
    shape === "spotlight"
      ? [
          `radial-gradient(120% 70% at 50% 55%, ${a(1.3)} 0%, ${a(0.9)} 55%, ${a(0.43)} 100%)`,
          `linear-gradient(to bottom, ${a(0)} 0%, ${a(0.52)} 12%, ${a(0.52)} 88%, ${a(0)} 100%)`,
        ].join(", ")
      : `linear-gradient(to bottom, ${a(0)} 0, ${a(1)} 72px, ${a(1)} calc(100% - 72px), ${a(0)} 100%)`

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background,
        ...(blur && { WebkitBackdropFilter: "blur(2px)", backdropFilter: "blur(2px)" }),
      }}
    />
  )
}
