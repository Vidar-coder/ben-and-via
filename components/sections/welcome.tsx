"use client"

import localFont from "next/font/local"
import { motion } from "motion/react"
import { useSiteConfig } from "@/hooks/use-site-config"
import { sectionType, welcomeTitleSize } from "@/lib/section-typography"
import { cinzel } from "@/lib/fonts"
import {
  IVORY_GOLD as WELCOME_GOLD,
  IVORY_LACE_FIELD as WELCOME_LACE_FIELD,
  IVORY_LACE_EDGE as WELCOME_LACE_EDGE,
} from "@/lib/ivory-lace"
import { SilkScreen } from "@/components/silk-screen"


const theSeasons = localFont({
  src: "../../Font/Fontspring-DEMO-theseasons-reg.otf",
  display: "swap",
  variable: "--font-the-seasons",
})

const aboveTheBeyond = localFont({
  src: "../../Font/above-the-beyond-script.otf",
  display: "swap",
  variable: "--font-above-beyond",
})

// Ivory-and-gold card: warm cream panel, a faint gold lace field, lace edging down both sides,
// fine champagne-gold hairline frames and soft light from the top

function OrnamentalDivider({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center justify-center ${compact ? "gap-1.5" : "gap-2"}`}>
      <span
        className={`h-px ${compact ? "w-6 sm:w-10" : "w-8 sm:w-12"}`}
        style={{
          background:
            `linear-gradient(to right, transparent, color-mix(in srgb, ${WELCOME_GOLD} 70%, transparent))`,
        }}
      />
      <span className="h-1 w-1 rounded-full sm:h-1.5 sm:w-1.5" style={{ background: WELCOME_GOLD, boxShadow: "0 0 0 2px rgb(184 146 90 / 18%)" }} aria-hidden />
      <span
        className={`h-px ${compact ? "w-6 sm:w-10" : "w-8 sm:w-12"}`}
        style={{
          background:
            `linear-gradient(to left, transparent, color-mix(in srgb, ${WELCOME_GOLD} 70%, transparent))`,
        }}
      />
    </div>
  )
}

function LayeredWelcomeTitle() {
  return (
    <h2
      className="welcome-title-lockup relative mx-auto w-full max-w-full text-center"
      style={
        {
          "--welcome-size": welcomeTitleSize.main,
          "--script-size": welcomeTitleSize.script,
          "--script-overlap": welcomeTitleSize.overlap,
        } as React.CSSProperties
      }
    >
      <span
        className={`${theSeasons.className} block uppercase leading-[0.78] tracking-[0.08em] min-[400px]:tracking-[0.11em] sm:tracking-[0.13em] md:tracking-[0.14em]`}
        style={{
          fontSize: "var(--welcome-size)",
          color: "var(--color-welcome-navy)",
        }}
      >
        Welcome
      </span>

      <span
        aria-hidden
        className={`${aboveTheBeyond.className} relative z-10 mx-auto block w-fit max-w-full px-1 leading-[0.88] sm:leading-[0.9]`}
        style={{
          fontSize: "var(--script-size)",
          color: "var(--color-welcome-navy)",
        }}
      >
        to our love story
      </span>

      <span className="sr-only"> to our love story</span>
    </h2>
  )
}

export function Welcome() {
  const siteConfig = useSiteConfig()
  const brideName = siteConfig.couple.brideNickname || siteConfig.couple.bride
  const groomName = siteConfig.couple.groomNickname || siteConfig.couple.groom

  return (
    <section
      id="welcome"
      className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16`}
    >
      {/* Soft screen over the silk around the card */}
      <SilkScreen />
      <div className="relative mx-auto w-full max-w-3xl">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative @container/welcome overflow-visible rounded-xl border px-10 py-8 sm:rounded-2xl sm:px-12 sm:py-10 md:px-14 md:py-12"
          style={{
            borderColor: `color-mix(in srgb, ${WELCOME_GOLD} 55%, transparent)`,
            background: [
              // soft light falling from the top, a little shade toward the foot
              "radial-gradient(120% 70% at 50% 0%, rgb(255 253 248 / 85%) 0%, transparent 60%)",
              "radial-gradient(90% 50% at 50% 100%, rgb(214 190 150 / 18%) 0%, transparent 70%)",
              WELCOME_LACE_FIELD,
              "linear-gradient(180deg, #FBF6EE 0%, #F6EEE2 55%, #F0E5D5 100%)",
            ].join(", "),
            backgroundSize: "100% 100%, 100% 100%, 44px 44px, 100% 100%",
            boxShadow: [
              "inset 0 1px 0 rgb(255 255 255 / 80%)",
              "inset 0 0 40px rgb(214 190 150 / 18%)",
              "0 18px 40px -18px rgb(120 90 50 / 30%)",
              "0 4px 12px rgb(120 90 50 / 10%)",
            ].join(", "),
          }}
        >
          {/* Lace edging down both sides (mirrored on the right) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-3 left-1.5 w-[26px] sm:left-2.5"
            style={{ background: `${WELCOME_LACE_EDGE} 0 0 / 26px 24px repeat-y` }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-3 right-1.5 w-[26px] -scale-x-100 sm:right-2.5"
            style={{ background: `${WELCOME_LACE_EDGE} 0 0 / 26px 24px repeat-y` }}
          />

          {/* Inner hairline frame in champagne gold */}
          <div
            className="wedding-frame-inner hidden min-[400px]:block"
            style={{ borderColor: `color-mix(in srgb, ${WELCOME_GOLD} 45%, transparent)` }}
            aria-hidden
          />

          {/* Gilded rule along the top edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px sm:inset-x-10 md:inset-x-12"
            style={{
              background: `linear-gradient(to right, transparent, ${WELCOME_GOLD}, #E9D3A6, ${WELCOME_GOLD}, transparent)`,
            }}
          />

          <div className="relative flex flex-col gap-8 sm:gap-9 md:gap-10">
            <header className="space-y-3 pt-2 text-center sm:space-y-3.5 sm:pt-3 md:space-y-4 md:pt-4">
              <LayeredWelcomeTitle />
              <OrnamentalDivider compact />
            </header>

            <figure className="mx-auto max-w-[36rem] text-center">
              <blockquote>
                <p
                  className={`font-goudy-italic ${sectionType.textSnug}`}
                  style={{ color: "var(--color-welcome-navy)" }}
                >
                  &ldquo;Clothe yourselves with love, for it is a perfect bond of union.&rdquo;
                </p>
                <figcaption className="mt-2 sm:mt-2.5">
                  <cite
                    className={`${cinzel.className} ${sectionType.label} not-italic uppercase tracking-[0.2em] sm:tracking-[0.24em]`}
                    style={{ color: "var(--color-welcome-navy)" }}
                  >
                    Colossians 3:14
                  </cite>
                </figcaption>
              </blockquote>
            </figure>

            {/* Body: Crimson Text (upright book serif), same reading style as the love story */}
            <div
              className="mx-auto max-w-[36rem] space-y-3 text-center text-[clamp(0.875rem,1vw+0.6rem,0.96875rem)] leading-[1.7] sm:space-y-3.5 md:space-y-4"
              style={{
                color: "var(--color-welcome-navy)",
                fontFamily: '"Crimson Text", "Cormorant Garamond", Georgia, serif',
              }}
            >
              <p>
                Dear family and friends, we are overjoyed to begin this new chapter together and
                grateful to God for every step that led us here. What began as a simple story has
                grown into a love we cherish deeply — and we cannot imagine celebrating without you.
              </p>
              <p>
                This invitation holds everything you may need for our wedding day: the schedule,
                venue details, and a few gentle reminders along the way. Whether near or far, your
                presence, prayers, and warm wishes will mean more to us than words can say.
              </p>
              <p>
                Thank you for being part of our journey. We look forward to sharing this beautiful
                day with the people who have shaped our lives and our hearts.
              </p>
            </div>

            <footer className="space-y-2 border-t pt-8 text-center sm:space-y-2.5 sm:pt-9 md:pt-10"
              style={{
                borderColor: `color-mix(in srgb, ${WELCOME_GOLD} 40%, transparent)`,
              }}
            >
              <p
                className={`${aboveTheBeyond.className} ${sectionType.script}`}
                style={{ color: "var(--color-welcome-navy)" }}
              >
                With all our love,
              </p>
              <p
                className={`${cinzel.className} ${sectionType.subheader} font-semibold tracking-[0.12em] sm:tracking-[0.16em] md:tracking-[0.18em]`}
                style={{ color: "var(--color-welcome-navy)" }}
              >
                {groomName} &amp; {brideName}
              </p>
            </footer>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
