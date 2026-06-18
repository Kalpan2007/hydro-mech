# AGENTS.md -- Development Context

## Project

Corporate homepage for Hydro Mech Engineers (ETHICS Metal Forming Machineries India). B2B industrial manufacturing company producing hydraulic metal forming machines.

Stack: Next.js 16, Tailwind CSS v4, Framer Motion, TypeScript.

---

## Next.js 16 Notes

This project uses Next.js 16 with Turbopack. Key differences from earlier versions:

- App Router with `src/app/` directory structure
- Tailwind CSS v4 uses CSS-native configuration (`@import "tailwindcss"` + `@theme inline`) instead of `tailwind.config.ts`
- Image optimization via `next/image` with `fill` and `sizes` attributes
- Font loading via `next/font/google` with CSS variable injection
- Server components by default; client components require `"use client"` directive
- Route types are auto-generated in `.next/types/`

Check `node_modules/next/dist/docs/` for version-specific API changes before writing new routes or layouts.

---

## Code Conventions

### Components

- One component per file. File name matches export name (PascalCase).
- All interactive components use `"use client"` at the top of the file.
- Framer Motion animations use `whileInView` with `viewport={{ once: true }}` for scroll triggers.
- Icon imports come from `lucide-react`. Use SVG icons, never emoji.

### Styling

- Use Tailwind utility classes exclusively. No inline styles except for dynamic values.
- Design tokens are defined in `globals.css` under `@theme inline` block.
- Custom classes (`.glass`, `.gradient-text`, `.pattern-dots`) are defined in `globals.css`.
- Responsive breakpoints follow Tailwind defaults: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`.
- Spacing uses Tailwind's 4px base grid (p-1 = 4px, p-2 = 8px, etc.).

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `navy` | #0D1B2A | Primary dark backgrounds, text |
| `orange` | #E8611A | CTAs, accents, interactive elements |
| `surface-warm` | #F8F6F3 | Alternating section backgrounds |
| `surface-cool` | #F0F4F8 | Subtle UI backgrounds |
| `text-body` | #4A5568 | Body text |
| `text-light` | #94A3B8 | Captions, secondary text |

### Animations

- Transition duration: 300-600ms for UI elements, 150-200ms for micro-interactions.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for spring-like motion (Apple-style).
- Scroll animations: stagger children by 80-100ms delay.
- Navbar shrink animation uses 600ms duration with the spring easing above.

### Images

- All images use `next/image` with `fill` and explicit `sizes` attribute.
- Product images are stored in `public/products/`.
- Logo is in `public/logo/ethics-logo.png`.
- Apply `[filter:brightness(1.4)_contrast(1.1)]` to the logo for visibility on dark backgrounds.

---

## Component Responsibilities

| File | Responsibility |
|------|---------------|
| `Navbar.tsx` | Two-state navigation. Hero state: transparent, full-width. Scrolled state: floating glass pill. Handles mobile menu, scroll offset, smooth anchor navigation. |
| `Hero.tsx` | Full-viewport hero with asymmetric image grid, stat counters (react-countup), diagonal bottom cut. |
| `About.tsx` | Company story with split layout, overlapping images, key milestones. |
| `Products.tsx` | Tabbed product showcase. State-driven content switching with AnimatePresence transitions. |
| `Features.tsx` | 3x2 feature grid on dark background. |
| `CtaBanner.tsx` | Full-width gradient CTA with diagonal edges via clip-path. |
| `Contact.tsx` | Contact form with validation states, company info cards. |
| `Footer.tsx` | Four-column footer with navigation, products, and contact details. |

---

## Performance Rules

- Below-fold images use `loading="lazy"`.
- Font is loaded via `next/font` with `display: swap` to prevent FOIT.
- Framer Motion animations respect `prefers-reduced-motion` when possible.
- No heavy third-party scripts beyond React and Framer Motion.
- Static pages are pre-rendered at build time.

---

## Accessibility Requirements

- All images have descriptive `alt` text.
- Form inputs use `<label>` with `htmlFor` attribute.
- Interactive elements have visible focus states.
- Color contrast meets WCAG AA (4.5:1 for body text, 3:1 for large text).
- Navigation links have `aria-label` where needed.
- Mobile menu uses `aria-label="Toggle navigation"`.

---

## Git Conventions

- Commit messages: imperative mood, lowercase, no period. Examples: "add product tab transitions", "fix navbar scroll offset".
- One logical change per commit.
- Never commit `node_modules/`, `.next/`, or environment files.

---

## Known Issues

- The ETHICS logo has dark navy text that blends into the dark hero background. The current solution uses a CSS brightness/contrast filter. A better long-term fix would be to obtain a light/white variant of the logo from the company.
- The brochure PDF could not be parsed programmatically. Content was extracted manually from the file structure and product images.
