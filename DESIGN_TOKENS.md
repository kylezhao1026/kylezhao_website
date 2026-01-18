# Design Tokens & Polish Guide

Last updated: 2025-01-16

This document explains where to tweak visual polish without changing the terminal aesthetic.

---

## Typography

**File:** `app/globals.css:22-30`

```css
body {
  font-size: 15px;      /* Base size - increase for more readability */
  line-height: 1.7;     /* Body rhythm - 1.6-1.8 range */
}
```

**Headings:** Configured in `components/terminal/TerminalHeading.tsx:11-23`
- Level 1: `text-2xl md:text-4xl`
- Level 2: `text-xl md:text-3xl`
- Level 3: `text-lg md:text-2xl`

---

## Spacing System

**Vertical Rhythm (16px base unit):**
- Page sections: `space-y-16` (large breathing room)
- Between elements: `space-y-10` (medium spacing)
- Within components: `space-y-4` or `space-y-5` (tight)

**Page Padding:**
- Mobile: `py-10`
- Desktop: `md:py-16`

**To adjust:**
- More compact: reduce `space-y-16` → `space-y-12`
- More spacious: increase `space-y-10` → `space-y-12`

---

## Colors

**File:** `app/globals.css:5-19`

```css
:root {
  --background: #0d1117;     /* Page background */
  --surface: #161b22;        /* Panel background */
  --surface-hover: #1c2128;  /* Panel hover state */
  --foreground: #c9d1d9;     /* Primary text */
  --muted: #8b949e;          /* Secondary text */
  --border: #30363d;         /* Default borders */
  --border-bright: #484f58;  /* Hover borders */
  --accent: #58a6ff;         /* Links, accents */
  --prompt: #7ee787;         /* Terminal prompts ($, #, >) */
  --comment: #6e7681;        /* Comment text (//) */
}
```

**To increase contrast:**
- Lighten `--foreground` to `#d1d9e0`
- Darken `--muted` to `#7a828a`

**To soften panels:**
- Use `--surface: #141922` for more subtle difference

---

## Components

### TerminalPanel
**File:** `components/terminal/TerminalPanel.tsx:13-18`
- Background: `bg-surface/80` (80% opacity for layering)
- Border: `border-border` → `border-border-bright` on hover
- Padding: `p-5 md:p-6`

**To make panels more prominent:**
- Change `bg-surface/80` → `bg-surface` (solid)
- Increase border thickness: `border-2`

### TechPill
**File:** `components/terminal/TechPill.tsx:6-8`
- Size: `text-xs`
- Padding: `px-2.5 py-1`
- Background: `bg-surface/50`

**To make pills more visible:**
- Change to `text-sm` and `px-3 py-1.5`

### Navigation
**File:** `components/Navigation.tsx:38-50`
- Link size: `text-base`
- Active state: `font-medium` + `underline decoration-2`
- Gap between links: `gap-6`

**To increase nav prominence:**
- Change `text-base` → `text-lg`
- Increase `gap-6` → `gap-8`

---

## Favicon Zoom

**Script:** `scripts/generate-favicons.py`

**Current crop:** 70% (tighter, larger star)

**To adjust:**
```bash
# Tighter crop (even larger star)
python3 scripts/generate-favicons.py 0.65

# Looser crop (smaller star, more padding)
python3 scripts/generate-favicons.py 0.75

# Default (balanced)
python3 scripts/generate-favicons.py 0.70
```

After adjusting, rebuild:
```bash
npm run build
```

---

## Quick Tweaks

**More spacious overall:**
1. Increase page padding: `py-16 md:py-20` (all pages)
2. Increase section spacing: `space-y-20` (home/projects)

**Tighter layout:**
1. Reduce base font: `font-size: 14px`
2. Reduce padding: `py-8 md:py-12`
3. Reduce section spacing: `space-y-12`

**Better readability:**
1. Increase line-height: `line-height: 1.8`
2. Max-width for text: Add `max-w-prose` to paragraphs
3. Lighten muted text: `--muted: #95a0ab`

---

## Files Changed (Polish Pass)

- `app/globals.css` - Base typography (15px, 1.7 line-height)
- `app/page.tsx` - Spacing consistency (space-y-16, space-y-10)
- `app/projects/page.tsx` - Improved rhythm
- `app/resume/page.tsx` - Consistent spacing
- `app/contact/page.tsx` - Better panel spacing
- `components/Navigation.tsx` - Larger links, clearer active state
- `components/terminal/TerminalPanel.tsx` - Better visual definition
- `components/terminal/TechPill.tsx` - Improved padding
- `scripts/generate-favicons.py` - Cropping tool for favicons

---

## Design Principles (from uiux_frontend.skills)

✓ Prefer simplicity over features
✓ Avoid visual clutter
✓ Choose neutral colors and readable fonts
✓ Motion should enhance UX, not distract
✓ Typography-first layouts
✓ Subtle interaction design

Keep these in mind when making further adjustments.
