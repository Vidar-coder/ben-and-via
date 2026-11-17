// Ivory & gold lace look shared by the welcome card, the couple video section (and the
// home hero / envelope, which use the same values in CSS): champagne gold, a faint gold
// lace field and a scalloped lace edging strip.

/** Champagne gold for hairlines, frames and small ornaments */
export const IVORY_GOLD = "#B8925A"

/** Faint all-over lace: tiny gold rosettes and seed pearls (44×44 tile) */
export const IVORY_LACE_FIELD = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'44\' height=\'44\'%3E %3Cg fill=\'%23B8925A\' fill-opacity=\'0.16\'%3E%3Ccircle cx=\'11\' cy=\'11\' r=\'1.2\'/%3E%3Ccircle cx=\'14.20\' cy=\'11.00\' r=\'1.1\'/%3E%3Ccircle cx=\'12.60\' cy=\'13.77\' r=\'1.1\'/%3E%3Ccircle cx=\'9.40\' cy=\'13.77\' r=\'1.1\'/%3E%3Ccircle cx=\'7.80\' cy=\'11.00\' r=\'1.1\'/%3E%3Ccircle cx=\'9.40\' cy=\'8.23\' r=\'1.1\'/%3E%3Ccircle cx=\'12.60\' cy=\'8.23\' r=\'1.1\'/%3E%3Ccircle cx=\'33\' cy=\'33\' r=\'1.2\'/%3E%3Ccircle cx=\'36.20\' cy=\'33.00\' r=\'1.1\'/%3E%3Ccircle cx=\'34.60\' cy=\'35.77\' r=\'1.1\'/%3E%3Ccircle cx=\'31.40\' cy=\'35.77\' r=\'1.1\'/%3E%3Ccircle cx=\'29.80\' cy=\'33.00\' r=\'1.1\'/%3E%3Ccircle cx=\'31.40\' cy=\'30.23\' r=\'1.1\'/%3E%3Ccircle cx=\'34.60\' cy=\'30.23\' r=\'1.1\'/%3E%3C/g%3E %3Cg fill=\'%23B8925A\' fill-opacity=\'0.12\'%3E%3Ccircle cx=\'33\' cy=\'11\' r=\'0.8\'/%3E%3Ccircle cx=\'11\' cy=\'33\' r=\'0.8\'/%3E%3Ccircle cx=\'22\' cy=\'22\' r=\'0.6\'/%3E%3Ccircle cx=\'0\' cy=\'22\' r=\'0.6\'/%3E%3Ccircle cx=\'44\' cy=\'22\' r=\'0.6\'/%3E%3Ccircle cx=\'22\' cy=\'0\' r=\'0.6\'/%3E%3Ccircle cx=\'22\' cy=\'44\' r=\'0.6\'/%3E%3C/g%3E %3C/svg%3E")'

/** Scalloped lace edging for a side strip (26×24 tile, repeat-y; mirror it for the right side) */
export const IVORY_LACE_EDGE = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'26\' height=\'24\'%3E %3Cg fill=\'none\' stroke=\'%23B8925A\' stroke-opacity=\'0.5\' stroke-width=\'0.7\'%3E %3Cpath d=\'M2 0 Q12 12 2 24\'/%3E %3Cpath d=\'M2 3 Q8.5 12 2 21\' stroke-opacity=\'0.3\'/%3E %3Cpath d=\'M20 0 V24\' stroke-dasharray=\'1.4 2\' stroke-opacity=\'0.4\'/%3E %3C/g%3E %3Ccircle cx=\'6.5\' cy=\'12\' r=\'1.6\' fill=\'none\' stroke=\'%23B8925A\' stroke-opacity=\'0.45\' stroke-width=\'0.6\'/%3E %3Cg fill=\'%23B8925A\' fill-opacity=\'0.45\'%3E%3Ccircle cx=\'12.5\' cy=\'12\' r=\'0.9\'/%3E%3Ccircle cx=\'15.5\' cy=\'6\' r=\'0.6\'/%3E%3Ccircle cx=\'15.5\' cy=\'18\' r=\'0.6\'/%3E%3Ccircle cx=\'2\' cy=\'0\' r=\'0.8\'/%3E%3Ccircle cx=\'2\' cy=\'24\' r=\'0.8\'/%3E%3C/g%3E %3C/svg%3E")'

/** Warm cream ground (top → bottom) */
export const IVORY_CREAM_GRADIENT = "linear-gradient(180deg, #FBF6EE 0%, #F6EEE2 55%, #F0E5D5 100%)"

/** Full section ground: soft light from the top, the faint gold lace field, warmth toward the
 *  foot, over the cream gradient (couple video + love story) */
export const IVORY_SECTION_BACKGROUND = [
  "radial-gradient(120% 55% at 50% 0%, rgb(255 253 248 / 85%) 0%, transparent 60%)",
  "radial-gradient(90% 40% at 50% 100%, rgb(214 190 150 / 20%) 0%, transparent 70%)",
  `${IVORY_LACE_FIELD} 0 0 / 44px 44px`,
  IVORY_CREAM_GRADIENT,
].join(", ")
