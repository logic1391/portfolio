---
name: Aditya Raj Portfolio
description: A Swiss poster a recruiter can scan like a timetable — paper, ink, hairlines and one signal blue.
colors:
  paper: "#ffffff"
  ink: "#111111"
  graphite: "#4a4a4f"
  pinned-grey: "#8e8e93"
  hairline-soft: "#d9d9de"
  signal-blue: "#0071e3"
  on-signal: "#ffffff"
  live-green: "#1fae4b"
  paper-dark: "#0d0d0e"
  ink-dark: "#f2f2f2"
  graphite-dark: "#b4b4ba"
  pinned-grey-dark: "#86868b"
  hairline-soft-dark: "#2c2c30"
  signal-blue-dark: "#2997ff"
  signal-field-dark: "#0a5cc4"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 10.5vw, 9.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  hero:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.6vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  contact-heading:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.2rem)"
    fontWeight: 700
    letterSpacing: "-0.035em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.6vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  fact:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "tnum"
  lead:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.6vw, 1.22rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  none: "0px"
  circle: "50%"
spacing:
  gutter-sm: "16px"
  gutter: "20px"
  cell: "18px"
  row: "22px"
  column-gap: "24px"
  section: "clamp(64px, 9vw, 112px)"
  container: "1200px"
components:
  cta-field:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.on-signal}"
    rounded: "{rounded.none}"
    padding: "16px 18px 18px"
  cta-field-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-signal}"
  index-row:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "22px 0"
  index-row-hover:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.on-signal}"
  outline-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 18px"
  outline-button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  theme-toggle:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "36px"
  top-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "56px"
  avatar:
    rounded: "{rounded.circle}"
    size: "92px"
---

# Design System: Aditya Raj Portfolio

## Overview

**Creative North Star: "The Recruiter's Timetable"**

A Swiss International Style poster built to be read in thirty seconds. White paper, near-black ink, 1px ink hairlines that divide the page into a visible grid, and a single signal blue that never appears as a sprinkle: it arrives as whole fields (the "Email me" block, the "Builds it. Tests it." band, a project row filling on hover). Everything is flush-left and ragged-right, set on a 12-column logic inside a 1200px measure, so the eye runs down the page the way it runs down a departure board: label, value, rule, next.

Density is high but calm. Information sits in ruled cells (the four-cell fact strip, five skills columns, the project index) rather than in cards; structure is drawn with lines, not boxes. Heavy grotesk headings carry the voice; Hanken Grotesk carries the reading. The page refuses the glass-card developer portfolio it replaced: no glass, no backdrop blur, no rounded tiles, no drop shadows, no gradients as surfaces.

Light is the default and the authored state. Dark exists only behind the toggle and is a faithful inversion (ink paper, light ink, light hairlines, a deeper blue field), not a separate mood.

**Key Characteristics:**
- Paper ground, ink type, 1px ink hairlines as the primary structural device.
- One signal blue, used as solid fields and as the pinned rotating phrase; never as tints or accents scattered across text.
- Heavy grotesk display type with tight negative tracking; Hanken Grotesk body at 17px.
- Square corners everywhere except the avatar circle, the status dot and the medal discs.
- Motion is a left-to-right fill or draw: hover fills, hairlines that draw in, underlines that extend.

## Colors

A two-ink poster palette (paper and ink) with one saturated signal colour and a single functional green.

### Primary
- **Signal Blue** (`signal-blue`): the only colour with a voice. In light mode it is both the text accent (the pinned rotating hero phrase and its caret, the email address, nav underlines, focus rings) and the solid field (the "Email me" cell, the thesis band, project-row hover fills, text selection). In dark mode the two roles split: `signal-blue-dark` for text, underlines and focus; `signal-field-dark` for solid fields so white type on them stays legible.
- **On-Signal White** (`on-signal`): all type and icons that sit on a blue field.

### Neutral
- **Paper** (`paper` / `paper-dark`): page ground, the sticky top bar, the safe-area cap.
- **Ink** (`ink` / `ink-dark`): primary type, the structural hairline colour (`--rule` is ink), the theme-toggle and Copy button hover fill, the CTA hover sweep, list dashes.
- **Graphite** (`graphite` / `graphite-dark`): secondary type: lead paragraph, fact labels, experience bullets, project descriptions and stacks, certification issuers, footer.
- **Pinned Grey** (`pinned-grey` / `pinned-grey-dark`): reserved for the muted "Building" half of the hero heading (brand-pinned) and the scrollbar thumb.
- **Soft Hairline** (`hairline-soft` / `hairline-soft-dark`): internal dividers between rows inside a block (project rows, experience entries, skills columns, certification and medal lines); the silver medal disc.

### Functional
- **Live Green** (`live-green`): the 8px "Available for new roles" status dot only.

### Named Rules
**The Whole-Field Rule.** Signal blue appears as a solid field or as a single pinned text role, never as a tint, gradient, glow, badge or scattered highlight. If a new element wants blue, it gets the whole cell.

**The Two-Weight Hairline Rule.** Ink hairlines (1px `ink`) bound a block: top bar, fact strip, section titles, sub-titles, the last project row, contact and footer. Soft hairlines (1px `hairline-soft`) divide items within a block. Never invert the two.

## Typography

**Display Font:** system grotesk stack (-apple-system / SF Pro Display, with Inter loaded from Google Fonts at 700/800 as the fallback, then Segoe UI, system-ui)
**Body Font:** Hanken Grotesk (400/500/600/700), with the system stack as fallback

**Character:** Black-weight grotesk headings with tight negative tracking give the poster its punch; Hanken Grotesk is a slightly warmer, open grotesk that keeps long project descriptions readable. Body numerals are tabular throughout.

### Hierarchy
- **Display** (800, clamp(3.4rem, 10.5vw, 9.5rem), 0.9, -0.04em): the "Builds it. Tests it." thesis title, white on the blue band. The single largest type on the page.
- **Hero** (800, clamp(2.5rem, 6.6vw, 4.6rem), 1.05, -0.035em): the pinned hero heading, "Software Engineer." over a pinned-grey "Building" and the blue rotating phrase.
- **Headline** (800, clamp(2.2rem, 5vw, 3.6rem), 1, -0.035em): section titles (Experience, Projects, Skills), each sitting on a full-width ink hairline.
- **Contact Heading** (700, clamp(2rem, 5vw, 3.2rem), -0.035em): "Let's talk." in its pinned treatment. The contact email is set in the same stack at 800, clamp(1.5rem, 5vw, 3.4rem), line-height 1, in signal blue.
- **Title** (800, clamp(1.4rem, 2.6vw, 2rem), 1.05, -0.03em): project names in the index; experience role headings use 800 at clamp(1.35rem, 2.4vw, 1.75rem), 1.15, -0.025em; sub-titles (Certifications, Off the pitch) 800 at 22px, -0.02em.
- **Fact** (700, 18px, 1.25, -0.015em): values in the fact strip; the CTA label is the same family at 700/20px.
- **Body** (400, 17px, 1.55): running text. Measures are capped: 66ch for summaries, 72ch for bullet lists, 58ch for the lead.
- **Lead** (400, clamp(1.05rem, 1.6vw, 1.22rem), 1.5, graphite): the one-paragraph introduction under the hero.
- **Label** (400, 13px, graphite, sentence case): fact-strip terms (Role, Company, Based in, Education). Small text elsewhere sits at 14–15px (stacks, issuers, footer, nav at 15px/500).

### Named Rules
**The Pinned Grotesk Rule.** The hero heading and "Let's talk." keep the system grotesk stack at exactly their recorded size, weight and tracking. They are brand commitments, not tokens to tune.

**The Sentence-Case Rule.** No uppercase labels, no letter-spaced small caps. Labels are short sentence-case words in graphite, and hierarchy comes from weight and size.

## Layout

A single centred column, max 1200px, with a 20px side gutter (16px under 620px, both respecting safe-area insets). Inside it, blocks are laid on CSS grids that share a 24px column gap: a 12-column grid for the thesis band (title spans 7, text columns take 8 to the end), 3/9 for experience (dates left, content right), 3/5/3 plus a 40px arrow column for project rows, a 4 + 1.1 fraction strip for facts plus CTA, five equal columns for skills, and 7/5 for certifications beside medals.

Vertical rhythm is fluid: sections open with clamp(64px, 9vw, 112px); the thesis band uses clamp(56px, 9vw, 112px) top and bottom; the hero clamp(48px, 8vw, 96px) on top; the contact block starts clamp(80px, 11vw, 140px) below the last section. Ruled cells use 16–18px inner padding, with the first cell of a row flush to the gutter (no left padding) so text aligns to the column edge. Project rows breathe at 22px vertical.

Responsive: at 960px the fact strip folds to two columns with the CTA spanning full width (72px min height), the thesis stacks, project rows collapse to name + arrow with description and stack beneath, skills go to two columns and the extras stack. At 620px experience and skills go single-column, the Skills nav link hides, and the avatar shrinks to 78px. The sticky top bar is 56px; anchor scrolling offsets by 72px.

## Elevation & Depth

Flat. There are no drop shadows, no blur surfaces and no layered cards; depth is replaced by rules and by colour fields. Hierarchy comes from hairline weight (ink versus soft), solid blue fields, and type weight. The only `box-shadow` in the build is the avatar's double ring (`0 0 0 3px paper, 0 0 0 4px ink`), which reads as a printed keyline around the photo, not as elevation.

### Named Rules
**The Print Rule.** If it would not survive being printed in two inks on paper, it does not belong: no shadows, glows, glass, backdrop-filter or gradient surfaces. (The pinned hero motion's transient blur is animation, not material, and is exempt.)

## Shapes

Square. Every container, button, field and toggle has 0 radius. Circles are reserved for three things: the avatar (brand-pinned, with its 1px ink keyline ring), the 8px live status dot, and the medal discs. The hero caret's 2px rounding belongs to the pinned hero treatment. Arrows are drawn as square-capped 2.2px strokes pointing up-right. Borders are always 1px and solid; on the blue band they use `currentColor` so they stay white.

## Components

### Top Bar
- **Style:** sticky, paper background, 56px tall, closed by a 1px ink hairline. Name left in 800/16px display type; links right at 15px/500.
- **States:** a 2px signal-blue underline draws in from the left on hover and stays drawn on the active section's link (scroll-spied).
- **Theme toggle:** a 36px square with a 1px ink border and a 16px moon/sun glyph; hover fills ink with paper icon.

### Buttons
- **Primary ("Email me" CTA field):** not a pill but a cell. It is the fifth cell of the fact strip, solid signal blue, white 700/20px label bottom-left and an up-right arrow bottom-right, padding 16px 18px 18px. Hover/focus: an ink panel sweeps in from the left (0.5s spring) behind the label and the arrow nudges 3px up-right.
- **Outline (Copy):** transparent with a 1px ink border, 600/15px Hanken Grotesk, padding 10px 18px. Hover fills ink with paper text. Label changes to "Copied" for 1.8s.
- **Focus:** a global 2px signal-blue outline, 3px offset. Project rows replace the outline with the full blue fill.

### Fact Strip
- **Structure:** a definition list between two ink hairlines, cells divided by 1px ink verticals. Label in 13px graphite, value in 700/18px display type. The first cell has no left padding.

### Project Index (signature)
- **Structure:** a ruled list. Each row: project name (title type), a description with a bolded first sentence in ink and the rest in graphite, a stack line at 14px, and an up-right arrow. Rows divided by soft hairlines; the last row closes with an ink hairline.
- **Hover / Focus:** a signal-blue field sweeps left to right across the row (0.55s, `cubic-bezier(.22, 1, .36, 1)`, bleeding 14px past each side), all text turns white and the arrow nudges 3px up-right. A row with no link (hardware) has no fill and shows a 12px/600 "Hardware" label in place of the arrow.

### Section Title
- **Style:** headline type on a full-width 1px ink hairline that draws in from the left once (1.2s) when the section first enters the viewport. Content is visible without JavaScript.

### Thesis Band
- **Style:** a full-bleed signal-blue field carrying the display title left and two text columns right, each topped by a 1px white rule, with a 15px/700 heading and 18px/500 white body (max 46ch).

### Lists
- **Experience bullets:** 10×2px ink dashes, graphite text, 8px gap.
- **Certification links:** name left (500), issuer right (graphite, 15px), soft hairline between. Hover turns the text signal blue and slides it 8px right.
- **Skills:** five ruled columns, 700/16px heading over a 15.5px graphite list.

### Contact
- **Email link:** the address set huge in signal-blue display type; a 3px blue underline grows from 0 to full width on hover.
- **Secondary links:** GitHub and LinkedIn as plain 600-weight text with a 1px underline at 5px offset; hover turns blue.

### Medals
- Flat two-ink SVG medals (a blue and an ink ribbon over a soft-hairline or ink disc with a heavy initial) that sway ±6° on 3.2s and 3.6s offset loops.

### Hero (pinned)
- Avatar 92px circle with keyline ring, name at 700/20px, live dot with "Available for new roles". The heading, rotating phrase (blur out / blur in every 2.8s), blinking blue caret and the 70ms staggered entrance are brand-pinned and must not be altered.

## Do's and Don'ts

### Do:
- **Do** build structure with 1px hairlines: ink to bound a block, soft hairline to divide items inside it.
- **Do** use signal blue as a whole field (a cell, a band, a full-row sweep) or as the pinned text accent, with white type on fields.
- **Do** keep every corner square; reserve circles for the avatar, the status dot and medal discs.
- **Do** set headings in the display stack at 700–800 with negative tracking (-0.015em to -0.04em), and body in Hanken Grotesk at 17px/1.55.
- **Do** align the first cell of any ruled row flush to the gutter, flush-left and ragged-right.
- **Do** animate as a left-to-right fill or draw on `cubic-bezier(.22, 1, .36, 1)`, and drop all motion under `prefers-reduced-motion`.
- **Do** keep light as the default theme; dark only through the toggle, with the deeper `signal-field-dark` behind white text.
- **Do** leave the hero heading, rotating phrase, caret, staggered entrance and "Let's talk." exactly as recorded.

### Don't:
- **Don't** use glass, backdrop blur, drop shadows, glows or gradient surfaces.
- **Don't** put content in rounded cards or tiles; use ruled cells and rows.
- **Don't** tint blue into pale backgrounds, badges or scattered highlights.
- **Don't** add uppercase, letter-spaced eyebrows or kickers above headings.
- **Don't** centre-align blocks; the page reads flush-left.
- **Don't** introduce a second accent colour; green is the status dot only.

## Revision: depth layer (owner request)

The owner found the flat poster too plain. The grid, type and pinned hero stay as they are, and depth is added on top of them:
- **Grey ground:** the page is now cool grey (`#f3f4f7`). Content sits on raised white sheets with a 22px radius, a hairline border and a soft layered shadow; the shadow deepens on hover.
- **Hero backdrop:** a faint 12-column grid sits behind the hero, with a soft blue light behind the headline.
- **Blue panel:** the thesis block is now a rounded, lit blue gradient panel with grain and a slow light sweep.
- **Project rows:** the hover fill is now a blue gradient.
- **Medals:** they are metallic silver and bronze, with a shine and a sway.
- **Email:** "Email me" and the contact email open Gmail compose, addressed to the owner.

This supersedes the earlier "no shadows / no rounded cards / flat" rules.
