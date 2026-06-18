# Hydro Mech Engineers — Corporate Homepage

A premium, responsive corporate homepage for **Hydro Mech Engineers** (ETHICS Metal Forming Machineries India), built with **Next.js 14+, Tailwind CSS, and Framer Motion**.

## Live Preview

> Run `npm run dev` and open [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 (App Router) | Framework, SSR/SSG, Image Optimization |
| Tailwind CSS v4 | Utility-first styling, design tokens |
| Framer Motion | Scroll animations, micro-interactions |
| Lucide React | SVG icon system |
| react-countup | Animated statistics counters |
| Inter (Google Fonts) | Typography |

---

## Features

### Sections
1. **Hero** — Asymmetric image grid, animated stats bar, diagonal section cut
2. **About Us** — Split layout with overlapping images, floating badge
3. **Products** — Tabbed interface with animated transitions (4 product lines)
4. **Why Choose Us** — Dark section with feature cards and hover effects
5. **CTA Banner** — Gradient background with diagonal edges
6. **Contact** — Split layout with validated form and contact info
7. **Footer** — 4-column layout with links and company info

### Design Details
- **Glass morphism** navbar with backdrop blur on scroll
- **Diagonal section cuts** using CSS clip-path
- **Asymmetric image compositions** inspired by Steelix corporate design
- **Animated scroll reveals** with Framer Motion
- **Responsive** — works on mobile (375px), tablet, and desktop (1440px+)
- **Accessible** — semantic HTML, focus states, contrast ratios, alt text
- **Performance** — lazy loading images, optimized fonts, minimal JS

### Brand Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#0D1B2A` | Primary dark, headers, footer |
| Orange | `#E8611A` | CTAs, accents, highlights |
| Warm White | `#F8F6F3` | Alternating section backgrounds |
| Cool Grey | `#F0F4F8` | Subtle backgrounds |

---

## Project Structure

```
hydro-mech-homepage/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens, utilities
│   │   ├── layout.tsx           # Root layout with Inter font
│   │   └── page.tsx             # Main homepage
│   └── components/
│       ├── Navbar.tsx           # Glass morphism navbar
│       ├── Hero.tsx             # Hero section with stats
│       ├── About.tsx            # About Us section
│       ├── Products.tsx         # Tabbed product showcase
│       ├── Features.tsx         # Why Choose Us section
│       ├── CtaBanner.tsx        # CTA banner
│       ├── Contact.tsx          # Contact form + info
│       └── Footer.tsx           # Footer
├── public/
│   ├── logo/
│   │   └── ethics-logo.png     # Company logo
│   └── products/
│       ├── busbar-machine.jpg   # Busbar Processing Machine
│       ├── clinching-machine.jpg # Clinching Machine
│       ├── section-bending.jpg  # Section Bending Machine
│       ├── plate-rolling.jpg    # Plate Rolling Machine
│       ├── bending-station.jpg  # Bending station detail
│       ├── punching-station.jpg # Punching station detail
│       ├── shearing-station.jpg # Shearing station detail
│       └── clinching-station.jpg # Clinching station detail
├── package.json
└── README.md
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Product Lines Featured

| Product | Description |
|---------|-------------|
| **Hydraulic Busbar Processing Machine (3-in-1)** | Multi-function machine with punching, bending, and shearing stations |
| **Hydraulic Clinching Machine** | Sheet metal joining without fasteners |
| **Hydraulic Section Bending Machine** | Precision profile bending for angles, channels, beams |
| **Hydro-Mechanical Plate Rolling Machine** | Heavy-duty plate rolling for cylinders and cones |

---

## AI Tools Used

- **Claude (Anthropic)** — Code generation, component architecture, design system planning
- **v0.dev** — UI pattern reference and component structure inspiration

---

## Design Inspiration

The design follows a **Steelix-style corporate aesthetic**:
- Asymmetric image grids with overlapping elements
- Diagonal section cuts (CSS clip-path)
- Layered depth with shadows and floating badges
- Bold typography (72-80px headlines)
- Generous whitespace
- Premium micro-interactions

---

## License

This project was created as part of a screening round task. All rights reserved to the candidate.
