<div align="center">

# Hydro Mech Engineers — Corporate Homepage

### Precision Hydraulic Metal Forming Machinery

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-06B6D4)](https://www.framer.com/motion)

**Live Demo** · [View Deployment](https://hydro-mech.vercel.app/)

</div>

---

## Project Overview

A high-performance, recruiter-level corporate homepage for **Hydro Mech Engineers** (ETHICS Metal Forming Machineries India) — a B2B industrial manufacturer of hydraulic metal forming machines based in Howrah, West Bengal.

Built as a single-page application with 8 purpose-built components, the site delivers a premium brand experience through scroll-triggered animations, a two-state morphing navigation bar, and a tabbed product showcase. The project demonstrates modern Next.js architecture with a strong emphasis on performance, accessibility, and responsive design.

---

## Assignment Objective

Build a professional corporate homepage for an industrial manufacturing company that:

- Presents the company's product lines (Busbar Processing, Clinching, Section Bending, Plate Rolling) in an engaging, interactive format
- Establishes brand credibility through visual storytelling and data-driven stat counters
- Provides clear conversion paths via strategically placed CTAs and a contact form
- Performs across all device sizes from mobile to ultrawide desktop

---

## Features Implemented

| Section | Details |
|---------|---------|
| **Navbar** | Two-state navigation — transparent on hero, floating glass pill on scroll. IntersectionObserver-based active section tracking. Animated mobile slide-in panel. |
| **Hero** | Full-viewport hero with asymmetric product image grid, animated stat counters (react-countup), diagonal bottom cut, gradient orbs, and pattern-dot background. |
| **About** | Split-layout company story with overlapping product images, floating "25+ Years" experience badge, and staggered scroll-triggered animations. |
| **Products** | Tabbed product showcase (4 products) with AnimatePresence content transitions, floating spec badges, and product images with hover zoom. |
| **Features** | 3x2 feature grid on dark navy background with hover accent lines and staggered entrance animations. |
| **CTA Banner** | Full-width gradient CTA with diagonal clip-path edges and dual action buttons. |
| **Contact** | Contact form with validation states, success animation, company info cards, and map placeholder. |
| **Footer** | Four-column footer with brand info, navigation, products, and contact details. |

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 (CSS-native `@theme inline` config) |
| Animation | Framer Motion 12 |
| Icons | lucide-react |
| Counters | react-countup |
| Font | Inter via `next/font/google` |
| Images | `next/image` with `fill` + explicit `sizes` |

---

## AI Tools Used During Development

This project was developed with AI assistance from the following tools:
- OpenCode — AI-assisted implementation, component development, UI refinement, debugging, and iterative frontend improvements.
- **AGENTS.md / CLAUDE.md** — Custom development context files providing project conventions, component responsibilities, and design tokens to AI assistants for consistent code generation

The AI workflow involved defining a detailed `AGENTS.md` specification upfront (component responsibilities, color tokens, animation timing, accessibility requirements, and code conventions) to ensure consistent, production-quality output across all 8 components.

---

## Development Process

1. **Research & Planning** — Extracted product information, brand identity, and company details from source materials (brochure, product images)
2. **Design System** — Defined color tokens (navy, orange, surface variants), typography scale, and animation easing in `globals.css` via Tailwind v4 `@theme inline`
3. **Component Architecture** — Built 8 isolated, single-responsibility components following PascalCase naming and `"use client"` directives
4. **Iterative Refinement** — Developed each component with scroll animations, responsive breakpoints, and micro-interactions, validating at each stage
5. **Accessibility & Polish** — Added ARIA labels, focus states, WCAG AA contrast ratios, `prefers-reduced-motion` support, and semantic HTML
6. **Performance Audit** — Lazy-loaded below-fold images, utilized `next/font` with `display: swap`, and ensured static pre-rendering

---

## Project Structure

```
hydro-mech-homepage/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens, custom utilities, clip-paths
│   │   ├── layout.tsx           # Root layout with Inter font + metadata
│   │   ├── page.tsx             # Homepage — composes all sections
│   │   └── favicon.ico
│   └── components/
│       ├── Navbar.tsx           # Two-state nav, mobile menu, active tracking
│       ├── Hero.tsx             # Full-viewport hero with stat counters
│       ├── About.tsx            # Company story with overlapping images
│       ├── Products.tsx         # Tabbed product showcase
│       ├── Features.tsx         # 3x2 feature grid on dark background
│       ├── CtaBanner.tsx        # Diagonal-edge CTA section
│       ├── Contact.tsx          # Contact form + company info
│       └── Footer.tsx           # Four-column footer
├── public/
│   ├── products/                # Product images (8 files)
│   ├── logo/ethics-logo.png     # Company logo
│   └── *.svg                    # Default Next.js assets
├── AGENTS.md                    # AI development context & conventions
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## Technical Highlights

### Two-State Morphing Navbar
The navbar transitions between two distinct visual states using a 600ms spring-eased animation (`cubic-bezier(0.22, 1, 0.36, 1)`):
- **Hero state**: Full-width, transparent background, integrated into the hero section
- **Scrolled state**: Floating glass pill with backdrop blur, rounded corners, and subtle shadow

Active section detection uses `IntersectionObserver` with carefully tuned root margins (`-40% 0px -55% 0px`) to highlight the correct nav link as the user scrolls.

### CSS-Native Tailwind v4 Configuration
Instead of the traditional `tailwind.config.ts`, this project uses Tailwind CSS v4's native CSS configuration via `@theme inline` in `globals.css`. Design tokens (colors, fonts) are defined as CSS custom properties and consumed through Tailwind utility classes — reducing configuration overhead and improving type safety.

### Animated Tabbed Product Showcase
The Products component uses Framer Motion's `AnimatePresence` with `mode="wait"` to animate between product tabs. Content fades and slides vertically on each tab switch, creating a polished, app-like browsing experience without page navigation.

### Clip-Path Section Transitions
Diagonal section boundaries are achieved via CSS `clip-path: polygon()` — used on the hero's bottom cut, CTA banner's top/bottom edges, and the about section's warm surface background. This eliminates the need for SVG dividers or decorative images.

### Scroll-Triggered Stagger Animations
All content sections use Framer Motion's `whileInView` with `viewport={{ once: true }}` for performant scroll-triggered animations. Children elements are staggered with 80-100ms delays for a cascading entrance effect.

---

## Responsive Design

| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Mobile | < 640px | Single-column layouts, slide-in mobile nav, stacked CTAs |
| Tablet | 640px – 1024px | Two-column grids, condensed spacing |
| Desktop | > 1024px | Full layouts, hover states, floating badges |
| Ultrawide | > 1280px | Max-width containers, increased padding |

- All images use `next/image` with responsive `sizes` attributes
- Navbar adapts height, padding, and font sizes per breakpoint
- Product tabs wrap gracefully on smaller screens
- Contact form switches from 2-column to single-column on mobile

---

## Performance Considerations

- **Static Pre-rendering** — Pages are pre-rendered at build time via Next.js SSG
- **Image Optimization** — All images use `next/image` with `fill`, explicit `sizes`, and lazy loading for below-fold content
- **Font Loading** — Inter loaded via `next/font/google` with `display: swap` to prevent FOIT
- **Minimal Bundle** — No heavy third-party scripts; only React, Framer Motion, and lucide-react as dependencies
- **Animation Performance** — Framer Motion animations use GPU-accelerated transforms; `prefers-reduced-motion` is respected where possible
- **Lazy Interactions** — `IntersectionObserver`-based nav tracking avoids continuous scroll listeners

---

## Setup Instructions

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/hydro-mech-homepage.git
cd hydro-mech-homepage

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Walkthrough Video

> Record a 60-90 second screen recording demonstrating:
> - Hero section with animated stat counters
> - Navbar scroll transition (transparent → glass pill)
> - Product tab switching with content transitions
> - Mobile responsive navigation
> - Contact form interaction
>
> **[Link to walkthrough video](#)**

---
