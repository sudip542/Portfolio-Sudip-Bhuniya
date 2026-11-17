# Sudip Bhuniya — Personal Developer Portfolio

> **Java Backend Developer | Spring Boot • Microservices • Distributed Systems • Concurrency • PostgreSQL • Redis • Kafka**

A personal developer portfolio website designed for **Sudip Bhuniya**, built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Live Demo & Showcase
- **Home Portfolio**: `/` (Single-page portfolio with smooth navigation)
- **Component Showcase / Testbench**: `/showcase` (Design system tokens, atomic components, and theme verification)

---

## 🎨 Three-Theme System
The portfolio includes three selectable themes, persistent across sessions using `localStorage` with zero flickering on load:
1. **Custom Light Blue (Signature / Default Theme)**: Light blue background (`#F0F9FF`), sky-blue accent (`#38BDF8`), dark navy typography (`#0F172A`), white cards, and soft blue borders.
2. **Light Theme**: Minimalist white background (`#FFFFFF`), light gray surfaces, and dark text.
3. **Dark Theme**: Charcoal/near-black background (`#0B0F19`), dark gray cards (`#111827`), white text, and subtle luminous borders.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI component architecture |
| **Vite 8** | High-performance build tool and dev server |
| **Tailwind CSS 3** | Utility-first styling with CSS custom property design tokens |
| **Framer Motion 14**| Subtle spring animations, scroll-reveals, and modal transitions |
| **Lucide React** | Consistent, crisp icons |
| **React Hook Form + Zod** | Type-safe, accessible contact form validation |
| **React Router DOM 7** | Client-side routing between the main portfolio and component showcase |

---

## 📂 Project Structure

```
Portfolio/
├── docs/                             # Architecture docs, Design System & ADRs
│   ├── ARCHITECTURE.md
│   ├── DESIGN_SYSTEM.md
│   └── adr/
│       ├── 001-theme-architecture.md
│       ├── 002-centralized-config-pattern.md
│       └── 003-contact-service-abstraction.md
├── public/
│   ├── favicon.svg                   # Custom SB branded SVG favicon
│   └── resume/
│       └── Sudip-Bhuniya-Resume.pdf  # Expected location for PDF resume
├── src/
│   ├── assets/
│   │   ├── icons/BrandIcons.jsx      # GitHub, LinkedIn, Instagram, LeetCode SVG icons
│   │   └── images/profile.jpg        # Profile photo location (with graceful SVG fallback)
│   ├── animations/variants.js        # Centralized Framer Motion variants
│   ├── config/                       # Centralized configuration (Single Source of Truth)
│   │   ├── siteConfig.js             # Meta, SEO, and navigation links
│   │   ├── personalInfo.js           # Bio, roles, and highlight cards
│   │   ├── socialLinks.js            # Social profiles (GitHub, LinkedIn, etc.)
│   │   ├── experience.js             # Keross R&D timeline & achievements
│   │   ├── skills.js                 # 5 categorized skill groups
│   │   ├── projects.js               # Coinpath, ShowZen, and E-Commerce details
│   │   └── education.js              # Supreme Knowledge Foundation B.Tech details
│   ├── context/ThemeContext.jsx      # 3-theme provider with persistence
│   ├── hooks/                        # useTheme, useScrollSpy, usePrefersReducedMotion
│   ├── lib/                          # cn() utility and Zod contact schema
│   ├── services/contactService.js    # Contact form API abstraction
│   ├── components/
│   │   ├── ui/                       # Button, Badge, Card, Dialog, Input, Textarea...
│   │   ├── common/                   # ProfileImage, SectionHeading, ThemeSelector...
│   │   ├── layout/                   # Navbar, MobileNav, Footer, MainLayout
│   │   ├── portfolio/                # ProjectCard, ExperienceCard, Timeline, Dialog...
│   │   └── sections/                 # Hero, About, Experience, Skills, Projects, Contact...
│   ├── pages/
│   │   ├── HomePage.jsx              # Main portfolio single-page composition
│   │   └── ComponentShowcase.jsx     # Isolated component testbench
│   ├── styles/                       # globals.css and themes.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## ⚡ Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher (v24+ recommended)
- **npm**: v9.0.0 or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/sudip542/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 📄 Centralized Configuration
To update any content or links without touching UI code, modify the files in `src/config/`:
- **Personal Information**: `src/config/personalInfo.js`
- **Social & Profile URLs**: `src/config/socialLinks.js`
- **Projects & Engineering Details**: `src/config/projects.js`
- **Work Experience & Metrics**: `src/config/experience.js`
- **Technical Skills**: `src/config/skills.js`
- **Academic Background**: `src/config/education.js`

---

## 👤 Author
**Sudip Bhuniya**
- Role: Java Backend Developer
- Location: Kolkata, West Bengal, India
- GitHub: [@sudip542](https://github.com/sudip542)
- Email: [sudipbhuniya@gmail.com](mailto:sudipbhuniya@gmail.com)
