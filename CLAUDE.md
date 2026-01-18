# Claude Code Instructions for TeleHealth Van Network

## Project Overview

TeleHealth Van Network website - a Next.js 16 application with TypeScript and Tailwind CSS v4. The site promotes free, anonymous mental health therapy services delivered through the nation's largest 5G-enabled mobile telehealth fleet.

**Target Audience:** Major foundations, government agencies, universities, nonprofits, and individuals seeking mental health support.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Playfair Display (headings), Inter (body)

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Home page
│   ├── programs/page.tsx       # Programs page
│   ├── impact/page.tsx         # Impact & Recognition
│   ├── fleet/page.tsx          # Our Fleet
│   ├── partner/page.tsx        # Partner With Us
│   ├── support/page.tsx        # Get Support
│   ├── faq/page.tsx            # FAQ
│   ├── privacy/page.tsx        # Privacy Policy
│   ├── terms/page.tsx          # Terms of Service
│   └── accessibility/page.tsx  # Accessibility Statement
├── components/
│   ├── layout/                 # Header.tsx, Footer.tsx
│   ├── sections/               # Hero, Stats, ContactForm, etc.
│   └── ui/                     # Button, Card, Container, Section
├── lib/
│   └── data.ts                 # All content data (programs, partners, etc.)
└── globals.css                 # Tailwind imports and custom styles
```

---

## Key Files

### Data & Content
- **`src/lib/data.ts`** - Central content file containing:
  - `programs` - All 6 program details
  - `partners` - Partner logos and info
  - `awards` - Recognition and awards
  - `navigation` - Header navigation links
  - `footerLinks` - Footer link sections
  - Impact stats, testimonials, and more

### Layout Components
- **`src/components/layout/Header.tsx`** - Scroll-aware header with mobile menu
- **`src/components/layout/Footer.tsx`** - Multi-column footer with newsletter

---

## Design System

### Colors (Tailwind)
```
navy: #0c1f35 (primary dark)
navy-light: #163456 (secondary dark)
teal: #0d9488 (primary accent, CTAs)
teal-light: #14b8a6 (hover states)
teal-pale: #ccfbf1 (light backgrounds)
gold: #d4a853 (secondary accent)
```

### Typography
- **Headings:** `font-display` (Playfair Display)
- **Body:** Default Inter

### Common Patterns
```tsx
// Section with motion
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// CTA Button
<Link className="bg-teal hover:bg-teal-light text-white px-6 py-3 rounded-lg font-semibold transition-colors">
```

---

## Development Guidelines

### 1. Component Standards
- Use TypeScript interfaces for all props
- Make components responsive by default
- Use Framer Motion for animations
- Follow existing patterns in the codebase

### 2. Images
- Use Next.js `Image` component for optimization
- Images stored in `/public/images/`
- Partner logos in `/public/images/partners/`
- Always include proper alt text

### 3. Content Updates
- All content changes should go in `src/lib/data.ts`
- Programs, partners, stats are centralized there
- Navigation and footer links are configured there

### 4. Styling
- Use Tailwind CSS utility classes
- Follow the established color scheme
- Maintain responsive breakpoints (sm, md, lg, xl)

---

## Programs (6 Total)

1. **Mobile Telehealth Van** - Flagship 5G-enabled fleet
2. **Student Wellness Program** - University partnerships
3. **Hawthorne Cares** - First city-wide program (2022-2024)
4. **Wellness Helpline for Afghans** - USCRI partnership
5. **Pull Up Mental Health Concert** - Annual event with Grammy artists
6. **Jewish Student Mental Health** - Ruderman Foundation (Boston)

---

## Partners (7 Total)

1. LA County Department of Mental Health
2. City of Hawthorne
3. Ruderman Family Foundation
4. Behavioral Health Services (BHS)
5. USCRI
6. 4Hunnid Wayz Foundation
7. American Indian Changing Spirits (AICS)

---

## Commands

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

---

## Quality Checklist

Before completing work:
- [ ] TypeScript compiles without errors
- [ ] Mobile responsive (test 320px, 768px, 1024px+)
- [ ] Animations are smooth and performant
- [ ] Images use Next.js Image component
- [ ] Alt text on all images
- [ ] Links are accessible and working
- [ ] Content matches data.ts
