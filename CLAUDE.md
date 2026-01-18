# Claude Code Instructions for TeleHealth Van Network Website

## Before Starting Any Work

**IMPORTANT:** Always review the project knowledge document before creating or modifying any files:
- Plan file: `C:\Users\User\.claude\plans\replicated-seeking-spark.md`
- This contains all business information, content, brand assets, and design specifications

**DO NOT modify the `Old files/` folder** - it is read-only reference material only. All new development goes in the root project directory.

---

## Required Skills

### Always Use Frontend-Design Skill
When building UI components or pages, **always** invoke the `frontend-design` skill:
```
/frontend-design
```

This skill creates:
- Distinctive, production-grade interfaces
- High design quality that avoids generic AI aesthetics
- Professional/foundation-ready aesthetic (targeting major funders like Gates, Ballmer)

---

## Development Guidelines

### 1. Reusable Components (Required)
Create all UI elements as reusable components in `/components/`:

```
components/
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Section.tsx
│   └── Container.tsx
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── ProgramCard.tsx
│   ├── Partners.tsx
│   └── ContactForm.tsx
```

**Component Requirements:**
- Props-based customization
- TypeScript interfaces for all props
- Responsive by default
- Follow design system colors/typography

### 2. Mobile Responsiveness (Required)
All components and pages MUST be mobile responsive:

**Breakpoints (Tailwind):**
- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)

**Testing Checklist:**
- [ ] Mobile (320px - 639px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)

**Responsive Patterns:**
```tsx
// Example: Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Example: Responsive text
<h1 className="text-2xl md:text-4xl lg:text-5xl">

// Example: Responsive padding
<section className="px-4 md:px-8 lg:px-16">
```

### 3. Design System
Follow these specifications exactly:

**Typography:**
- Headings: `font-playfair` (Playfair Display)
- Body: `font-inter` (Inter)

**Colors:**
```js
colors: {
  navy: {
    DEFAULT: '#0c1f35',
    light: '#163456',
  },
  teal: {
    DEFAULT: '#0d9488',
    light: '#14b8a6',
    pale: '#ccfbf1',
  },
  gold: '#d4a853',
}
```

### 4. Image Assets
**Copy images from `Old files/images/` to `/public/images/` before starting development.**

All logos and photos are available in `Old files/images/` - move them to the new project's `/public/images/`:
- Use Next.js `Image` component for optimization
- Include proper alt text for accessibility
- Use responsive image sizing

---

## Project Structure

```
telehealth-van/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home
│   ├── programs/page.tsx
│   ├── impact/page.tsx
│   ├── fleet/page.tsx
│   ├── partner/page.tsx
│   └── support/page.tsx
├── components/
│   ├── ui/                 # Base UI components
│   ├── layout/             # Header, Footer, Nav
│   └── sections/           # Page sections
├── lib/
│   └── data.ts             # Content data
├── public/
│   └── images/             # All assets
└── styles/
    └── globals.css         # Global styles
```

---

## Content Reference

All content should come from the plan file. Key sections:
- Organization info & mission
- 6 Programs (Mobile Van, Student Wellness, Jewish Student, Pull Up Concert, Hawthorne Cares, Afghan Helpline)
- Impact metrics (30,000+ sessions, 9,000 students, etc.)
- Partners & funders (8 logo partners)
- Awards (5 major awards)

---

## Quality Checklist

Before completing any page:
- [ ] Used frontend-design skill
- [ ] Components are reusable
- [ ] Mobile responsive (test all breakpoints)
- [ ] Follows design system (colors, typography)
- [ ] Content matches plan file
- [ ] Images optimized with Next.js Image
- [ ] Accessibility (alt text, semantic HTML, ARIA labels)
