---
name: Aditya Raj Portfolio
description: A loud dark poster up top, calm cards of real work below; one acid-yellow signal, pills for every action.
colors:
  ground: "#121210"
  surface: "#1a1a17"
  surface-raised: "#24241f"
  line: "#33332d"
  ink: "#f4f4ec"
  ink-soft: "#c9c9be"
  ink-muted: "#a8a89d"
  acid: "#e6f43a"
  on-acid: "#121210"
  acid-text: "#e6f43a"
  violet: "#a98bff"
  live: "#4ade80"
  ground-light: "#f4f4ee"
  surface-light: "#ffffff"
  surface-raised-light: "#ebebe3"
  line-light: "#d6d6cb"
  ink-light: "#121210"
  ink-soft-light: "#3a3a33"
  ink-muted-light: "#55554b"
  acid-text-light: "#5b6300"
  violet-light: "#8f6bff"
  live-light: "#15803d"
typography:
  display:
    fontFamily: "Bungee, Arial Black, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 6.4vw, 5.4rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
  display-contact:
    fontFamily: "Bungee, Arial Black, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 1
  wordmark:
    fontFamily: "Bungee, Arial Black, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.2rem, 4.5vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  statement:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.2rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.25
  title-sm:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.25
  lead:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1rem, 1.6vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 500
rounded:
  focus: "8px"
  lg: "24px"
  xl: "32px"
  pill: "999px"
spacing:
  space-2: "8px"
  space-3: "12px"
  space-4: "16px"
  grid-gap: "20px"
  space-6: "24px"
  card-padding: "30px"
  space-8: "32px"
  title-gap: "44px"
  section-gap: "clamp(80px, 10vw, 120px)"
components:
  button-acid:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.on-acid}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "7px 7px 7px 20px"
  button-ghost:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "7px 7px 7px 20px"
  button-plain:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "11px 20px"
  arrow-disc:
    backgroundColor: "{colors.on-acid}"
    textColor: "{colors.acid}"
    rounded: "{rounded.pill}"
    size: "30px"
  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "5px 14px 5px 5px"
  tag:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  tag-acid:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.on-acid}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  card-contact:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "clamp(48px, 7vw, 80px) clamp(22px, 5vw, 56px)"
  theme-toggle:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "38px"
---

# Design System: Aditya Raj Portfolio

## Overview

**Creative North Star: "The Sketchbook Poster"**

A confident engineer's poster, pinned up at night. The first viewport is loud: an uppercase Bungee headline on a near-black ground, an acid-yellow phrase that keeps changing, and Aditya's own cut-out portrait standing on a jagged violet shape with hand-drawn acid strokes radiating from it. Below the portrait the voice drops: calm Poppins, centred section titles, and rounded cards with hairline borders that show real work plainly.

The system is dark by default, with a light theme one toggle away (remembered per visitor). Everything interactive is a pill; the primary and secondary buttons end in a round arrow disc that turns 45° on hover. One signal colour carries all emphasis. Density is relaxed: 1200px measure, generous section gaps, cards that breathe.

The visual reference is Modulify's "Brutalist" template, used as inspiration only (see Credits). The build keeps its spirit (dark poster hero, pill actions, arrow discs, sketch strokes) and rebuilds every piece for this portfolio.

**Key Characteristics:**
- Dark ground first; light theme as an equal, token-swapped alternative.
- One acid-yellow signal; violet appears once, behind the portrait.
- Bungee for the poster voice (hero, "LET'S TALK.", wordmark); Poppins for everything else.
- Pills for every action, chip and badge; 24px-radius cards with 1px line borders.
- Motion concentrated in the hero; elsewhere only hover lifts and quiet ambient loops.

## Colors

A warm near-black ground with olive-tinted neutrals, one electric acid yellow, and a single violet accent. All neutrals carry a slight yellow-olive tint so the acid reads as part of the same world.

### Primary
- **Acid Signal** (acid): the one accent. Fills the primary "Email me" button and the "Open" badge tag and dated experience tag; outlines the portrait's jagged shape; draws the sketch rays; marks list bullets and chip hover borders; is the focus ring on dark. The same fill is used in both themes.
- **On-Acid** (on-acid): text and the arrow disc on any acid fill.
- **Acid Text** (acid-text / acid-text-light): acid-coloured words: the rotating hero phrase, the caret, the contact email, certification link hover. Yellow on dark, deep olive on light.

### Secondary
- **Portrait Violet** (violet / violet-light): the jagged shape behind the portrait, and nothing else in the build.

### Tertiary
- **Live Green** (live / live-light): the 8px availability dot in the hero badge, always beside its words.

### Neutral
- **Night Ground** (ground / ground-light): page background; also the browser theme colour.
- **Card Surface** (surface / surface-light): cards, the hero badge, the portrait frame.
- **Raised Surface** (surface-raised / surface-raised-light): ghost and plain buttons, chips, tags, theme toggle, copy button.
- **Hairline** (line / line-light): every 1px border and the statement-row dividers. Decorative only, never meaning-bearing.
- **Ink** (ink / ink-light): headlines and primary text.
- **Soft Ink** (ink-soft / ink-soft-light): lead paragraph, nav links, project descriptions, experience bullets.
- **Muted Ink** (ink-muted / ink-muted-light): metadata, project stacks, section sub-labels, footer, the "Building" word in the hero.

### Named Rules
**The One Signal Rule.** Acid yellow is the only emphasis colour. Every action, outline, stroke, bullet and hover accent that needs to stand out uses it; no second accent is introduced for emphasis.

**The Acid-Text Rule.** Coloured words use acid-text, never acid. On the light ground acid text becomes deep olive (#5b6300); bright acid never sits as text on a light surface.

**The Violet-Once Rule.** Violet lives behind the portrait and nowhere else. It is a backdrop, never a button, link or text colour.

## Typography

**Display Font:** Bungee (with Arial Black, system-ui fallback)
**Body Font:** Poppins 400/500/600 (with system-ui, -apple-system, Segoe UI fallback)

**Character:** Bungee is a blocky signage face that does the shouting; Poppins is geometric, round and even, and does all the explaining. The contrast between the two is the whole poster-then-cards story.

### Hierarchy
- **Display** (Bungee 400, clamp(2.3rem, 6.4vw, 5.4rem), line-height 1, uppercase): the hero headline only, "SOFTWARE ENGINEER." plus the "Building ___" line. The "Building" word is muted; the rotating phrase is acid-text.
- **Display Contact** (Bungee 400, clamp(2.6rem, 6vw, 4.6rem), line-height 1, uppercase): "LET'S TALK." in the contact card.
- **Wordmark** (Bungee 400, 18px, 16px on phones, tracking 0.02em): "ADITYA RAJ" centred in the nav.
- **Headline** (Poppins 500, clamp(2.2rem, 4.5vw, 3.25rem), line-height 1.1, -0.02em): section titles, centred, sentence case.
- **Statement** (Poppins 400, clamp(2.2rem, 4vw, 3rem), line-height 1.1, -0.01em): the three words of the statement row.
- **Title** (Poppins 500, 24px, line-height 1.25): card and project names. **Title Small** (500, 18px) for skill, certification and "Off the pitch" card titles.
- **Lead** (Poppins 400, clamp(1rem, 1.6vw, 1.15rem), max 56ch, soft ink): the hero paragraph.
- **Body** (Poppins 400, 17px, line-height 1.6): running copy; contact copy max 46ch.
- **Small** (Poppins 400/500, 15px, line-height 1.55): project descriptions, experience bullets, nav links, button labels (500). Nav-size buttons drop to 14px.
- **Label** (Poppins 500, 13px): badge, tags, chips, project stacks, footer.

### Named Rules
**The Poster-Voice Rule.** Bungee is used only for the hero headline, "LET'S TALK." and the nav wordmark, always uppercase, always weight 400 with no negative tracking. Section titles, cards and buttons are never set in Bungee.

**The Two-Weight Rule.** Poppins runs at 400 for reading and 500 for anything that names or acts (headings, titles, buttons, labels). Headings are never bold.

## Layout

A single centred column with a 1200px max width and 32px side gutters (16px at 640px and below, respecting safe-area insets). The nav is a three-part grid: section links left, wordmark centred, GitHub, theme toggle and an Email pill right; on phones the links and GitHub hide and the grid becomes wordmark + actions.

The hero and section titles are centred; content grids inside sections are left-aligned. Sections sit section-gap apart (clamp(80px, 10vw, 120px)) with section titles title-gap (44px) above their content. Grids use a 20px gap: experience is 1.35fr / 1fr; projects and skills are three columns, with "wide" project cards spanning two. At 900px projects and skills go to two columns and experience stacks; at 640px everything is one column, the statement row stacks with horizontal dividers, and card padding drops to 22px.

Sections ease up 24px as they enter the viewport but are always visible (no opacity gating).

## Elevation & Depth

Mostly flat. Depth comes from tonal steps (ground, surface, surface-raised) and 1px hairline borders, not from shadow. One soft, long, negative-spread shadow exists and is used sparingly.

### Shadow Vocabulary
- **Card shadow** (`box-shadow: 0 24px 60px -28px rgba(0,0,0,.7)` dark; `0 24px 50px -28px rgba(18,18,16,.25)` light): the portrait frame at rest, and linked project cards on hover.
- **Button lift** (`box-shadow: 0 12px 28px -10px rgba(0,0,0,.55)`): the acid button on hover only.
- **Medal drop** (`filter: drop-shadow(0 6px 8px rgba(0,0,0,.3))`): the two swaying medal illustrations.

### Named Rules
**The Line-Before-Shadow Rule.** Cards rest flat with a 1px line border. Shadow is a state (hover) or reserved for the single hero object, the portrait frame.

## Shapes

Round and soft against a loud headline. Every action, badge, tag and chip is a full pill (999px). Cards use 24px corners; the contact card goes to 32px. Arrow discs, the theme toggle, bullets and the live dot are perfect circles. Focus rings take an 8px radius.

The one sharp shape is the portrait's jagged violet polygon: mitred corners, a thick acid outline, and short round-capped acid strokes radiating out like a sketchbook doodle. That jaggedness is reserved for the portrait.

## Components

### Buttons
Pills that end in a round arrow disc; tactile and springy.
- **Shape:** full pill (999px); padding 7px 7px 7px 20px so the 30px disc sits flush to the right edge (26px disc and 14px label in the nav).
- **Acid (primary):** acid fill, on-acid label, on-acid disc with an acid arrow. One per view: "Email me".
- **Ghost:** surface-raised fill, 1px line border, ink label, ink disc with a ground-coloured arrow. Pairs with the acid button ("View projects").
- **Plain:** ghost colours without a disc, 11px 20px padding, for secondary outbound links (LinkedIn, GitHub).
- **Hover / Focus:** lift 2px on a spring curve (cubic-bezier(.22,1,.36,1), .35s); the disc turns -45° (.45s); the acid button gains the button-lift shadow. Focus is a 2px acid outline offset 3px (ink on light).

### Badge
The availability pill above the hero headline: surface fill, 1px line border, 13px/500 label, an acid "Open" tag chip at its start, then the green live dot and "Available for new roles". Used once.

### Tags and Chips
- **Tag:** pill, surface-raised fill, 1px line border, label type; the acid variant (acid fill, no border) marks the current role's dates. A neutral tag replaces the arrow disc on a card with no link ("Hardware").
- **Chip:** the same pill used in skill lists, wrapping with an 8px gap; hover turns the border acid.

### Cards / Containers
- **Corner Style:** 24px (contact card 32px).
- **Background:** surface on ground.
- **Shadow Strategy:** flat at rest; see Elevation & Depth.
- **Border:** 1px line.
- **Internal Padding:** 30px (22px on phones).

### Project Card
A linked card: title and a 36px acid arrow disc on the top row, a description in soft ink whose first sentence is a medium-weight ink pitch, then the stack in 13px muted ink. Hover lifts 4px, mixes the border 55% toward acid, adds the card shadow and turns the disc -45°. Cards in a row share height; "wide" cards span two columns.

### Navigation
Three-part grid, 80px tall (68px on phones). Links are 15px soft ink, turning ink on hover. The theme toggle is a 38px circle (surface-raised, line border) with an inline sun or moon icon; hover rotates it 25°.

### Portrait Card (signature)
The hero object: a surface frame with 1px line, 24px corners and the card shadow, clamp(380px, 46vw, 560px) tall. Inside, an SVG jagged polygon in violet with a 12-unit acid mitred outline, seven acid rays (5-unit stroke, round caps) that draw in once with staggered delays then breathe (opacity to .55 over 3.2s), and the cut-out portrait anchored to the bottom edge, centred, at 96% of the frame height (92% on phones).

### Statement Row (signature)
Three centred columns ("Builds", "Tests", "Ships") in the statement style, each with a 15px muted line (max 26ch) below, split by 1px vertical line dividers; on phones they stack and the dividers turn horizontal.

### Contact Card
A 32px-radius card: "LET'S TALK." in Display Contact, a short body line, the email in acid-text Poppins 500 (clamp(1.25rem, 3vw, 1.8rem)) with an underline that fades in on hover and a pill Copy button, then Email me (acid) with LinkedIn and GitHub (plain).

### Hero Motion (pinned by the owner)
These behaviours are fixed and must not be changed:
- **Staggered entrance:** each hero item (badge, headline, lead, actions, portrait) rises 16px, scales from .985 and unblurs from 6px over .9s on the spring curve, each delayed 70ms × its index + 80ms.
- **Rotating phrase:** "Building ___" cycles "reliable backends", "clean interfaces", "AI agent benchmarks", "products people use" every 2.8s; the word blurs out upward (.38s) and blurs in from below (.55s, spring).
- **Blinking caret:** a thin acid-text bar after the phrase, blinking on a 1.05s step cycle.

Under prefers-reduced-motion all animation and transitions stop, the rays render fully drawn, and the phrase does not rotate.

## Do's and Don'ts

### Do:
- **Do** keep dark as the default theme and ship every colour as a dark/light token pair; the light theme is a token swap on `:root[data-theme="light"]`, remembered per visitor.
- **Do** use acid for the single primary action per view and pair it with one ghost button.
- **Do** end primary and ghost buttons in the round arrow disc that turns -45° on hover.
- **Do** use acid-text (#5b6300 on light) whenever acid colour is applied to words.
- **Do** keep cards flat at rest with a 1px line border and 24px corners; reserve the card shadow for the portrait frame and hover.
- **Do** keep the pinned hero motion exactly as recorded: 70ms staggered entrance, phrase swap every 2.8s with blur out/in, blinking caret.
- **Do** stop all motion under prefers-reduced-motion.

### Don't:
- **Don't** set section titles, card titles or buttons in Bungee, or use Bungee in lowercase.
- **Don't** introduce a second accent colour or use violet anywhere but behind the portrait.
- **Don't** put bright acid (#e6f43a) text on the light ground.
- **Don't** use square or small-radius buttons; every action is a pill.
- **Don't** add a second photo, stock imagery, or text inside the portrait frame.
- **Don't** gate content visibility on scroll; reveals only move content, never hide it.

## Credits

- **Reference design:** "Brutalist" template by **Modulify** (modulify.ai), used as visual inspiration only for layout, colour and component style. No template code or assets were copied. The site footer credits it.
- **Fonts:** **Bungee** by David Jonathan Ross and **Poppins** by Indian Type Foundry, both licensed under the SIL Open Font License 1.1 and served via Google Fonts.
- **Photography:** the portrait is Aditya Raj's own photo; its background was removed with the open-source **rembg** tool using the **BiRefNet** portrait model.

### Notes on the companion design system
The browsable design system shares these token names and values. Where it differs, this file follows style.css: the build adds `ink-soft`; tags are full pills (the companion lists a 10px `radius-sm` and a 16px `radius-md`, which the build does not use); hero and contact display sizes are fluid clamps (companion: 88px and 56px fixed); card padding is 30px/22px and section spacing is clamp(80px, 10vw, 120px) with a 44px title gap and 20px grid gap (companion: 32px/24px, 96px, 48px); the portrait outline and rays are 12 and 5 SVG units (companion: 10px and 4px); the nav wordmark also uses Bungee.
