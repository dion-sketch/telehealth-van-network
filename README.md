# TeleHealth Van Network Website

A Next.js website for TeleHealth Van Network - the nation's largest 5G-enabled mobile telehealth fleet providing free, anonymous mental health therapy.

## Project Overview

**Organization:** TeleHealth Van Network
**Mission:** Free, anonymous mental health therapy for everyone. Licensed therapists. No insurance required. No one turned away.

### Target Audiences
1. Major Foundations (Ballmer, Gates, Parsons, Ruderman level)
2. Government Agencies (Departments of Mental Health, cities, counties)
3. Universities & Schools
4. Nonprofits
5. Individuals seeking support

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Playfair Display (headings), Inter (body)
- **Deployment:** Vercel-ready

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
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

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
telehealth-van/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── programs/           # Programs page
│   ├── impact/             # Impact & Recognition page
│   ├── fleet/              # Our Fleet page
│   ├── partner/            # Partner With Us page
│   └── support/            # Get Support page
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Header, Footer, Navigation
│   └── sections/           # Page section components
├── lib/
│   └── data.ts             # Content and data
├── public/
│   └── images/             # Logos, photos, assets
├── styles/
│   └── globals.css         # Global styles
├── CLAUDE.md               # AI assistant instructions
└── README.md               # This file
```

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, impact stats, programs overview, partners |
| `/programs` | Programs | All 6 programs with detailed descriptions |
| `/impact` | Impact | Metrics, awards, media coverage |
| `/fleet` | Fleet | Van information, locations, how it works |
| `/partner` | Partner | Partnership opportunities, contact form |
| `/support` | Support | Access care, crisis resources, contact form |

---

## Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Navy | `#0c1f35` | Primary dark, backgrounds |
| Navy Light | `#163456` | Secondary dark |
| Teal | `#0d9488` | Primary accent, CTAs |
| Teal Light | `#14b8a6` | Hover states |
| Teal Pale | `#ccfbf1` | Light backgrounds |
| Gold | `#d4a853` | Secondary accent |

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### Breakpoints
- Mobile: < 640px
- Tablet: 768px - 1023px
- Desktop: 1024px+

---

## Content Overview

### Programs (6)
1. **Mobile Telehealth Van** - Flagship 5G-enabled fleet
2. **Student Wellness Program** - University partnerships
3. **Jewish Student Mental Health** - Boston universities (Ruderman Foundation)
4. **Pull Up Mental Health Concert** - Annual event with Grammy artists
5. **Hawthorne Cares** - First city-wide program in the nation
6. **Wellness Helpline for Afghans** - USCRI partnership

### Key Stats
- 30,000+ therapy sessions delivered
- 9,000 students at Pull Up Concert
- $0 cost to clients
- #1 largest 5G telehealth fleet

### Partners
- LA County Department of Mental Health
- City of Hawthorne
- Ruderman Family Foundation
- Behavioral Health Services
- USCRI
- 4Hunnid Wayz Foundation
- American Indian Changing Spirits

---

## Brand Assets

**Note:** Copy all images from `Old files/images/` to `/public/images/` before starting development.

### Logos (copy from `Old files/images/` to `/public/images/`)
- `telehealth-van-logo.png` - Main logo
- `pull-up-logo.png` - Pull Up Concert
- `hawthorne-cares-logo.png` - Hawthorne program
- `student-wellness-logo.png` - Student program
- `wha-afghan-logo.png` - Afghan helpline
- Partner logos (la-dmh, hawthorne-city, ruderman, bhs, uscri, aics, 4hunnid)

### Photos
- `video-thumbnail.png` - Fleet of vans
- `van-southwest-college.jpg` - Van at college
- `van-military-base.jpg` - Van at military base
- `walk-up-session.png` - Session in progress
- `a-frame-sign.png` - Information sign

---

## Development Notes

### For AI Assistants
See `CLAUDE.md` for detailed instructions including:
- Always use `/frontend-design` skill for UI work
- Component reusability requirements
- Mobile responsiveness checklist
- Design system specifications

### Key Requirements
1. **Professional aesthetic** - Targeting major foundation funders
2. **Mobile responsive** - All pages must work on all devices
3. **Reusable components** - DRY principle for all UI elements
4. **Accessibility** - ARIA labels, semantic HTML, alt text

---

## Reference Documents

- **Plan File:** `C:\Users\User\.claude\plans\replicated-seeking-spark.md`
  - Contains all business information, content, and specifications
  - **Review before any development work**

- **Old Website:** `Old files/` folder
  - Reference for content and structure (not tech stack)
  - **DO NOT modify** - read-only reference material

---

## License

Private - TeleHealth Van Network
