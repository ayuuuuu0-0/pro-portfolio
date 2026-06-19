# PORTFOLIO REDESIGN — KILL THE GENERIC, BUILD THE UNFORGETTABLE

> **Core Philosophy:** Most dev portfolios look like a Tailwind tutorial. Yours should look like it was built by someone who actually understands computers at a deeper level — like a terminal bled into a browser, or a GPU shader got loose on a webpage.

---

## THE VIBE: "SYSTEM ARCHITECT"

Think: dark background, monospace type, scan-lines, real-time data, controlled chaos. Not a designer's portfolio — a **builder's war room**. It should feel like the viewer just SSH'd into your brain.

The aesthetic reference points:
- Linear app's dark UI × a Bloomberg terminal × the Matrix (but make it tasteful)
- NOT: purple gradients, floating cards with box shadows, hero text saying "Hi, I'm a passionate developer 👋"

---

## 1. GLOBAL STYLES

### Color Palette
```
--bg:         #050A0E      /* near-black with a blue tinge */
--surface:    #0D1F2D      /* card backgrounds */
--border:     #1A3A4A      /* subtle borders */
--accent:     #00FFB2      /* neon mint — your primary spark */
--accent-2:   #0094FF      /* electric blue — secondary */
--warn:       #FF4D4D      /* red — for "danger/currently building" badges */
--text:       #C8D8E8      /* cool grey-white */
--muted:      #4A6070      /* secondary text */
--glow:       rgba(0,255,178,0.15)
```

### Typography
- **Display / Hero:** `'Berkeley Mono'` or `'TX-02'` — monospace with character. Fallback: `'Courier New'`
- **UI / Body:** `'Geist Mono'` — already in your Next.js setup, lean into it everywhere
- **Accent labels:** `'DM Mono'` for small caps and data labels
- **DO NOT use:** Inter, Roboto, Poppins, or any rounded sans-serif

### Fonts to install:
```bash
npm install @fontsource/dm-mono @fontsource/geist-mono
```
Or use Google Fonts:
```
https://fonts.google.com/specimen/DM+Mono
```

### Global CSS Variables to add to `globals.css`:
```css
:root {
  --bg: #050A0E;
  --surface: #0D1F2D;
  --border: #1A3A4A;
  --accent: #00FFB2;
  --accent-2: #0094FF;
  --text: #C8D8E8;
  --muted: #4A6070;
  --glow: rgba(0, 255, 178, 0.15);
  --font-mono: 'DM Mono', 'Geist Mono', monospace;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-mono);
  cursor: none; /* custom cursor below */
}

/* Grain overlay — add this pseudo on body */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.4;
}
```

---

## 2. CUSTOM CURSOR

Replace the default cursor with a custom crosshair that has a glow.

Create `components/Cursor.tsx`:
```tsx
'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={dot} style={{
        position: 'fixed', top: 0, left: 0, width: 8, height: 8,
        background: 'var(--accent)', borderRadius: '50%', zIndex: 99999,
        pointerEvents: 'none', transition: 'transform 0.05s linear'
      }} />
      <div ref={ring} style={{
        position: 'fixed', top: 0, left: 0, width: 32, height: 32,
        border: '1px solid var(--accent)', borderRadius: '50%', zIndex: 99998,
        pointerEvents: 'none', transition: 'transform 0.12s ease-out',
        opacity: 0.5
      }} />
    </>
  )
}
```
Add `<Cursor />` to `layout.tsx`.

---

## 3. NAVIGATION

**Remove:** horizontal nav bar with Home | About | Projects | Contact links in plain text.

**Replace with:** A minimal top bar that looks like a terminal window chrome.

```
┌─[ ayush@portfolio ]──────────────────────────── v2.0.6 ─┐
│  ~  /about  /projects  /contact          [status: open]  │
```

Implementation ideas:
- Left: `[ayush@dev ~]$` in accent color — monospace breadcrumb
- Right: a blinking green dot with `AVAILABLE FOR WORK` or `BUILDING SOMETHING`
- No hamburger menu. On mobile: slide-in terminal drawer from bottom

```tsx
// Blink animation
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.blink { animation: blink 1s step-end infinite; }
```

---

## 4. HERO SECTION

**Kill:** "Hi, I'm [Name], a Full Stack Developer" centered on screen with a profile picture

**Build:** A boot sequence / system init screen

```
> initializing portfolio.exe...
> loading profile...............[OK]
> mounting skills................[OK]
> connecting to internet.........[ ■■■■■■■░░░ 74% ]

AYUSH — FULL STACK ENGINEER
Build things that don't break. Ship things that matter.

[[ EXPLORE WORK ]]     [[ CONTACT ]]
```

**How to implement:**
- Use a typewriter effect library: `npm install react-type-animation`
- Each line appears with a delay, simulating a boot sequence
- The name appears large in `--accent` after the sequence finishes
- Background: animated grid of very faint dots (CSS `radial-gradient`) that slowly pulsates
- NO hero image / avatar. Let the code speak.

**Animated background grid:**
```css
.hero-bg {
  background-image: radial-gradient(var(--border) 1px, transparent 1px);
  background-size: 32px 32px;
  animation: grid-pulse 4s ease-in-out infinite alternate;
}
@keyframes grid-pulse {
  from { opacity: 0.3; }
  to { opacity: 0.6; }
}
```

---

## 5. ABOUT SECTION

**Kill:** A paragraph of text next to a photo saying "I'm passionate about creating seamless user experiences..."

**Build:** A split layout — left is a `cat README.md` style terminal output, right is a live "system info" panel.

**Left — Bio as markdown in terminal:**
```
$ cat about.md

NAME:     Ayush [your last name]
ROLE:     Full Stack Engineer
LOC:      [City], India
STATUS:   Building in public

STACK:    React · Next.js · Node · TypeScript
          PostgreSQL · Redis · Docker

CURRENTLY LEARNING:
  → WebAssembly
  → Distributed Systems

INTERESTS:
  → Open Source
  → Developer Tooling
  → [Your actual interests]
```

**Right — "System stats" panel:**
```
┌─ SYSTEM INFO ──────────────────┐
│  UPTIME       3 years coding   │
│  COMMITS      1,247            │
│  COFFEE       ∞ cups           │
│  BUGS FIXED   more than caused │
│  PROJECTS     12 shipped       │
└────────────────────────────────┘
```
(Pull real commit count from GitHub API if you want it live)

---

## 6. SKILLS SECTION

**Kill:** A grid of icons with labels (React logo, Node logo, etc.)

**Build Option A — Progress bars like CPU/Memory meters:**
```
React.js       [■■■■■■■■■░]  92%
TypeScript     [■■■■■■■■░░]  84%
Node.js        [■■■■■■■░░░]  76%
PostgreSQL     [■■■■■■░░░░]  68%
Docker         [■■■■░░░░░░]  52%
```

**Build Option B — Dependency tree:**
Display skills as a `npm install` output — nested, with version numbers you make up for fun:

```
ayush@3.0.0 /skills
├── react@18.2.0
├── typescript@5.0.1
├── node@20.0.0
│   └── express@4.18.0
├── databases
│   ├── postgresql@15.0
│   └── redis@7.0
└── devops
    ├── docker@24.0
    └── github-actions@2.0
```

Both are unique. Pick one or combine them.

---

## 7. PROJECTS SECTION

**Kill:** Cards with image thumbnail, title, description, and GitHub/Live links.

**Build:** A file-explorer or `ls -la` style list with expandable detail panels.

**Default view (collapsed):**
```
drwxr-xr-x  project-alpha/        [React, Node]     ★ FEATURED
-rw-r--r--  tool-xyz.ts           [TypeScript]      shipped
-rw-r--r--  automation-bot/       [Python]          shipped
drwxr-xr-x  work-in-progress/     [Next.js]         ⚡ ACTIVE
```

**On click / hover (expanded):**
```
▼ project-alpha/
   
   A platform that does [thing]. Built to solve [problem].
   
   TECH:    React · Node.js · PostgreSQL · Vercel
   STATUS:  Shipped — 400+ users
   
   [ VIEW LIVE ↗ ]   [ SOURCE CODE ↗ ]
```

**Implementation:**
- Each project row is a `<details>` / `<summary>` element OR a controlled expand with `useState`
- On expand, animate height with `grid-template-rows: 0fr → 1fr` trick (no JS height calc needed)
- Add a monochrome color-coded badge: green = shipped, yellow = WIP, red = archived

---

## 8. EXPERIENCE / TIMELINE

**Kill:** A vertical timeline with circles and lines.

**Build:** A `git log --oneline` style history:

```
$ git log --oneline --career

a3f8d2e  (HEAD → present)  [Company/Freelance] — Building X
72c1b9a  [Previous Role]   — Built Y, shipped Z
4e8d31c  [First Role]      — Learned everything the hard way
8ab120f  (origin)          Student — started with "Hello World"
```

Each commit is a `<li>`. Clicking expands into full commit detail (description, stack, impact).

---

## 9. CONTACT SECTION

**Kill:** A form with Name, Email, Message fields and a "Send Message" button.

**Build:** A fake terminal input that feels like sending a command:

```
$ connect --to=ayush

> What's your name?
  → [input cursor here]

> What's this about?
  → [input cursor]

> Drop your message:
  → [textarea]

$ send --message --urgent
  Sending............[■■■■■■■■■■] ✓ SENT
```

Or even simpler — skip the form entirely and just show:

```
$ whoami
  → You, probably a recruiter or a dev. Welcome.

$ contact ayush
  → Email:    your@email.com
  → LinkedIn: /in/yourhandle
  → GitHub:   /ayuuuuu0-0
  → Twitter:  @yourhandle

$ status
  → Available for full-time roles & interesting contracts
```

---

## 10. FOOTER

**Kill:** "© 2025 Ayush. Made with ❤️"

**Build:**
```
[ process exited with code 0 ]
built by ayush — © 2026 — no rights reserved, just vibes
```

---

## 11. MICRO-INTERACTIONS TO ADD

These are the small things that separate "someone followed a tutorial" from "this person knows what they're doing":

| Interaction | How |
|---|---|
| Hover on nav links | Underline draws from left using `scaleX` CSS transform |
| Hover on project rows | Entire row background glows with `--glow` color |
| Scroll into view | Elements fade+slide in using `IntersectionObserver` + CSS class |
| Cursor near buttons | Ring cursor grows slightly (`scale(1.5)`) |
| Page load | Entire page starts at `opacity: 0`, fades in after boot sequence completes |
| Text selection | Custom `::selection` color using `--accent` background |

```css
::selection {
  background: var(--accent);
  color: var(--bg);
}
```

---

## 12. PACKAGES TO INSTALL

```bash
npm install react-type-animation   # Boot sequence typing effect
npm install framer-motion          # Page transitions & scroll animations
npm install @fontsource/dm-mono    # Monospace font
```

Optional but 🔥:
```bash
npm install react-syntax-highlighter   # If you want code snippets anywhere
npm install canvas-confetti            # Subtle burst when contact is sent
```

---

## 13. COMPONENT FILE STRUCTURE (SUGGESTED)

```
src/
├── app/
│   ├── layout.tsx         ← Add Cursor, global font, metadata
│   └── page.tsx           ← Compose all sections
├── components/
│   ├── Cursor.tsx         ← Custom cursor
│   ├── Navbar.tsx         ← Terminal-style nav
│   ├── Hero.tsx           ← Boot sequence + intro
│   ├── About.tsx          ← cat README.md layout
│   ├── Skills.tsx         ← npm tree or progress bars
│   ├── Projects.tsx       ← ls -la expandable list
│   ├── Experience.tsx     ← git log timeline
│   ├── Contact.tsx        ← Terminal contact
│   └── Footer.tsx         ← Exit code footer
├── hooks/
│   └── useTypewriter.ts   ← Custom hook (or use react-type-animation)
└── styles/
    └── globals.css        ← All CSS variables + grain + selection
```

---

## 14. WHAT NOT TO DO (THE GENERIC TRAP LIST)

❌ No hero gradient backgrounds (especially purple-to-pink)  
❌ No floating card components with rounded corners and drop shadows  
❌ No skill percentage circles / donut charts  
❌ No stock images of laptops or code screenshots  
❌ No "I am a passionate developer" copy  
❌ No light mode (this aesthetic is built for dark)  
❌ No emoji in section headers  
❌ No "scroll down" arrow animation  
❌ No parallax hero image  

---

## THE ONE THING TO NAIL

> **Every element should feel like it belongs in a terminal, a code editor, or a server log.**

If you can look at any component and think "this could appear in VS Code or a Unix shell," you're on the right track.

The goal isn't to look like a hacker. The goal is to look like someone who is so deeply technical that their aesthetic *naturally* converged on this — because this is how engineers actually think about information.

---

*Build it. Ship it. Then watch other devs copy it.*