# Miami World Cup 2026 Guide

A mobile-first, one-page travel guide for FIFA World Cup 2026 in Miami — **inspired by** the [Mexico City guide](https://worldcup-cdmx-guide.vercel.app/en), but not a clone. Steal the good UX ideas; reinvent anything that only makes sense in Mexico.

> **For Cursor:** `@README.md` at the start of any session. Say **"Step N"** (or **"Step 5, part 1"**) to go one file at a time. Ask for explanations — do not generate the whole project at once.

---

## Reference site (inspiration, not blueprint)

**Live CDMX app:** [worldcup-cdmx-guide.vercel.app/en](https://worldcup-cdmx-guide.vercel.app/en)

Use it for **layout ideas** (one-page scroll, card grids, section rhythm). Feel free to drop or redesign Mexico-specific pieces.

**Local screenshots:** `../assets/` in the parent repo.

### Keep (works for any host city)

- One-page layout with anchor nav
- Hero → Explore → Food → Survival flow
- Card-based content from JSON
- Insider tips on explore cards
- Commute info from the stadium
- Safety notes per area
- Floating assistant button
- Mobile-first responsive grid

### Reinvent for Miami (don't copy blindly)

| CDMX feature | Why it's Mexico-specific | Miami idea |
|--------------|--------------------------|------------|
| Zayu™ jaguar mascot + branded chat | CDMX custom character | FIFA mascot, simpler "Miami Guide" bubble, or no mascot name |
| White minimal hero | Their brand choice | ✅ Already different — teal gradient + coral CTA |
| Green + red palette | Mexico branding | ✅ Already different — ocean / teal / coral |
| Explore modal (Museums / Dining / Bars) | Nice but optional | Google Maps link, or categories like **Beaches**, **Nightlife**, **Art & Culture** |
| "Slang-o-pedia" (¿Qué onda?, ahorita) | Mexican Spanish slang | **Useful phrases** card (English ↔ Spanish) or Miami/Spanglish fun facts — skip "Mexican Time" |
| App CDMX promo | City government app | **Metromover**, Brightline, Uber, City of Miami visitor info |
| Didi + Santa Fe commute | Mexico ride-share + neighborhood | Uber/Lyft + **Hard Rock Stadium** / Miami Gardens; mention traffic on I-95 |
| Paragon / Novotel pin buttons | Their crew hotels | Miami fan-zone hotels, downtown, or "From Stadium" only |
| Weather on cards (24°C sun) | Generic but styled for them | **Heat index**, afternoon storms, hurricane-season note (Jun–Nov) |
| Mexican tipping / cash culture | Mexico norms | US tipping (18–20%), cards widely accepted, resort fees |
| "Internal crew portal" footer | HBS internal tool | Simple public footer — credits, emergency numbers (911), tourist helpline |
| Language toggle (en/es) | They ship bilingual | Optional later — Miami is bilingual-friendly |

**Bottom line:** If a feature feels forced for Miami, skip it or replace it with something locals would actually tell a tourist.

---

## Goal

Build a mobile-first one-page website where navbar links scroll to each section.

| # | Section | Anchor | Status |
|---|---------|--------|--------|
| 1 | Hero | — | ✅ Done |
| 2 | Explore Miami | `#explore` | 🔲 Step 5 |
| 3 | Food Guide | `#food` | 🔲 Step 6 |
| 4 | Survival Guide | `#survival` | 🔲 Step 7 |
| 5 | Floating Assistant Button | `#assistant` | 🔲 After Step 7 |
| — | Footer | — | 🔲 Optional polish |

---

## Tech stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Static JSON data** in `src/data/`
- **Vercel** deployment (Step 10)

---

## Run locally

```bash
cd miami-world-cup-guide
npm install          # first time only
npm run dev          # http://localhost:3000
```

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # HTML shell, fonts, metadata
│   ├── page.tsx            # Home page — stacks all sections
│   └── globals.css         # Tailwind, Miami colors, smooth scroll
│
├── components/
│   ├── Navbar.tsx          # ✅ Done
│   ├── Hero.tsx            # ✅ Done
│   ├── ExploreSection.tsx  # 🔲 Step 5
│   ├── ExploreCard.tsx     # 🔲 Step 5
│   ├── FoodSection.tsx     # 🔲 Step 6
│   ├── FoodCard.tsx        # 🔲 Step 6
│   ├── SurvivalSection.tsx # 🔲 Step 7
│   ├── AssistantButton.tsx # 🔲 After Step 7
│   └── Footer.tsx          # 🔲 Placeholder (fix export name)
│
├── data/
│   ├── explore.json        # 🔲 Step 5
│   ├── food.json           # 🔲 Step 6
│   └── survival.json       # 🔲 Step 7
│
public/
└── images/                 # logos, neighborhood photos, food pics
```

**Import alias:** `@/` → `src/` (e.g. `import Hero from "@/components/Hero"`)

---

## Design style

- Clean World Cup guide feel (like CDMX reference)
- **Miami colors:** teal, ocean blue, white, coral accents
- Large bold headings
- Rounded cards, soft shadows
- Mobile-first responsive layout

| Token | Hex | Tailwind class |
|-------|-----|----------------|
| Ocean | `#0369a1` | `text-miami-ocean` |
| Teal | `#0d9488` | `text-miami-teal` |
| Coral | `#f97316` | `bg-miami-coral` |
| Sand | `#f8fafc` | `bg-miami-sand` |

Defined in `src/app/globals.css`.

---

## Build plan (one step at a time)

**Rule:** One file/component per session. Explain syntax simply. You type the code.

### Step 1 — Next.js + TypeScript + Tailwind ✅

Create the project with App Router and Tailwind.

**Status:** Done (`create-next-app`, Tailwind v4 in `globals.css`).

**What you learned:** `src/app/` = routes; `page.tsx` = the home page; `layout.tsx` wraps every page.

---

### Step 2 — Folders and starter files ✅

Create `components/`, `data/`, `public/images/`, and empty component files.

**Status:** Done. Some scaffolds still have wrong export names — fix when you build each file.

---

### Step 3 — Navbar.tsx ✅

Sticky header with anchor links:

- Explore → `#explore`
- Food → `#food`
- Survival Guide → `#survival`
- Assistant → `#assistant`

**Status:** Done. **File:** `src/components/Navbar.tsx`

**Pattern:** `navLinks` array → `.map()` to render `<a href="...">` tags.

---

### Step 4 — Hero.tsx ✅

- "Miami 26" branding (in Navbar)
- Title: **"THE HEAT OF THE GAME. THE SOUL OF MIAMI."**
- Subtitle about football, beaches, culture, Miami energy
- Coral CTA button → scrolls to `#explore`
- Mascot image

**Status:** Done. **File:** `src/components/Hero.tsx`

**Note:** Add `fwc2026-logo.png` and `mascot-logo.png` to `public/images/` (currently 404).

---

### Step 5 — ExploreSection + ExploreCard 🔲 ← **you are here**

Use `src/data/explore.json` first, then build components.

**Miami explore cards (6):**

1. South Beach
2. Wynwood
3. Little Havana
4. Brickell
5. Bayside Marketplace
6. Bayfront Park (FIFA Fan Festival)

**Each card includes:**

- image
- title
- description
- insider tip
- commute from Hard Rock Stadium
- safety note
- Google Maps button

**JSON shape:**

```json
{
  "id": "wynwood",
  "name": "Wynwood",
  "description": "...",
  "insiderTip": "...",
  "commuteFromStadium": "...",
  "safety": "...",
  "image": "/images/explore/wynwood.jpg",
  "mapsUrl": "https://maps.google.com/?q=Wynwood+Miami"
}
```

**Tasks:**

1. Create `src/data/explore.json` with all 6 neighborhoods
2. Build `ExploreCard.tsx` — receives one neighborhood as props
3. Build `ExploreSection.tsx` — title, subtitle, grid of cards
4. Replace explore placeholder in `page.tsx` with `<ExploreSection />`

**Ask the chat:** *"Step 5, part 1 — help me write explore.json and explain the structure."*

---

### Step 6 — FoodSection + FoodCard 🔲

Use `src/data/food.json`.

**Food cards (8):**

1. Versailles
2. La Carreta
3. Joe's Stone Crab
4. Zak the Baker
5. Coyo Taco
6. Flanigan's
7. Sergio's
8. Palacio de los Jugos

**Each card includes:**

- image
- name
- area (neighborhood)
- category (e.g. Cuban, Seafood, Bakery)
- price (`$`, `$$`, `$$$`)
- description
- recommended item
- Google Maps button

**JSON shape:**

```json
{
  "id": "versailles",
  "name": "Versailles",
  "area": "Little Havana",
  "category": "Cuban",
  "price": "$$",
  "description": "...",
  "recommended": "Cuban sandwich + cafecito",
  "image": "/images/food/versailles.jpg",
  "mapsUrl": "https://maps.google.com/?q=Versailles+Restaurant+Miami"
}
```

---

### Step 7 — SurvivalSection 🔲

Use `src/data/survival.json`. **Miami-native topics** — not a copy of CDMX's "Slang-o-pedia" + App CDMX layout. Card grid for:

1. Miami heat and hydration
2. Rain and hurricane-season awareness (Jun–Nov)
3. Transportation (Uber, Metromover, Brightline, stadium parking)
4. Safety tips (beach, nightlife, petty theft)
5. Tipping and local customs (US norms, resort fees)
6. Useful Spanish phrases (practical, not slang dictionary)

**JSON shape:**

```json
{
  "id": "heat",
  "title": "Beat the Heat",
  "icon": "sun",
  "body": "..."
}
```

---

### Floating Assistant Button (after Step 7) 🔲

Fixed bottom-right chat bubble — inspired by CDMX's assistant, but **doesn't need Zayu or a jaguar**. Options:

- Static FAQ bubble ("Need directions? Tap Explore")
- Mascot image + short greeting
- Simple "Ask about Miami" placeholder for later

**File:** `src/components/AssistantButton.tsx` (needs `"use client"` for click state)

---

### Step 8 — Smooth scrolling 🔲

Add to `globals.css`:

```css
html {
  scroll-behavior: smooth;
}
```

Respect `prefers-reduced-motion` (hero animations already do).

---

### Step 9 — Responsive layout 🔲

- Mobile: single column cards, readable nav
- Tablet: 2-column explore grid
- Desktop: full layout like CDMX reference

Test at 375px, 768px, and 1280px widths.

---

### Step 10 — Deploy to Vercel 🔲

1. Push repo to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Framework preset: Next.js
4. Deploy — `npm run build` must pass first

---

## How `page.tsx` works

The home page stacks components top to bottom:

```tsx
<Navbar />
<main>
  <Hero />
  <ExploreSection />   {/* Step 5 */}
  <FoodSection />      {/* Step 6 */}
  <SurvivalSection />  {/* Step 7 */}
</main>
<AssistantButton />    {/* after Step 7 */}
<Footer />
```

Each section needs `id="explore"` (etc.) on its root `<section>` so navbar links scroll correctly.

---

## File cheat sheet (what each file does)

| File | Simple explanation |
|------|-------------------|
| `layout.tsx` | Wraps every page — sets `<html>`, fonts, page title in browser tab |
| `page.tsx` | The actual home page content — imports and orders components |
| `globals.css` | Site-wide styles, color variables, animations |
| `Navbar.tsx` | Top navigation bar |
| `Hero.tsx` | Big banner at the top |
| `ExploreSection.tsx` | "Discover Miami" section — loops over explore data |
| `ExploreCard.tsx` | One neighborhood card — reused per place in JSON |
| `FoodSection.tsx` | Restaurant section — loops over food data |
| `FoodCard.tsx` | One restaurant card |
| `SurvivalSection.tsx` | Tips section — loops over survival data |
| `AssistantButton.tsx` | Floating chat bubble (needs user clicks → client component) |
| `explore.json` | Static data — no code, just content the components read |
| `food.json` | Restaurant data |
| `survival.json` | Survival tips data |

**Server vs client:** Most components are server components (default). Use `"use client"` at the top only when you need `useState`, `onClick`, or browser-only APIs.

---

## Tips for learning with Cursor

1. **One step per session** — "Step 5, part 1: just explore.json"
2. **Ask why** — "Explain props before we build ExploreCard"
3. **Type it yourself** — ask for pseudocode first, then implement
4. **Compare live** — CDMX site for layout ideas only; Miami should feel its own
5. **Commit after each step** — `git commit -m "Add explore section"`

---

## Known issues

- `public/images/` missing logo and mascot files referenced in Navbar/Hero
- Placeholder `<section>` blocks still in `page.tsx` — remove as you complete each step
- `Footer.tsx` exports wrong function name — fix when you touch it
- Extra scaffolds (`LanguageSection.tsx`, `TransportSection.tsx`) — optional; can delete or use inside Survival

---

## CDMX → Miami content map (neighborhoods only)

Rough equivalents for explore cards — the *vibe*, not a 1:1 copy:

| CDMX vibe | Miami area |
|-----------|------------|
| Historic center + culture | Little Havana |
| Parks + museums | Wynwood / Vizcaya |
| Bohemian/colonial | Coconut Grove |
| Skyline boulevard | Brickell |
| Stadium / match day | Hard Rock Stadium (commute reference on cards) |
| Fan Festival | Bayfront Park |
| Waterfront shopping & marina | Bayside Marketplace |
| Beach + Art Deco | South Beach |

---

*Progress: Steps 1–4 complete. Next up: Step 5 (Explore). Reinvent freely where Mexico-specific features don't fit.*
