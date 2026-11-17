# System Architecture & Component Model

## Overview
This document outlines the architecture for Sudip Bhuniya's Personal Developer Portfolio. The application is built using **React 19**, **Vite**, **Tailwind CSS**, and **Framer Motion**, following clean architecture, SOLID principles, and a stratified component hierarchy.

---

## Architectural Layers

```
┌─────────────────────────────────────────────────────────────┐
│                    Page Layer (/pages)                      │
│                 HomePage.jsx, ComponentShowcase.jsx         │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                  Section Layer (/components/sections)       │
│  HeroSection, AboutSection, ExperienceSection, Projects...  │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│            Portfolio Composite Layer (/components/portfolio)│
│  ExperienceCard, ProjectCard, ProjectDetailsDialog, Timeline│
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                 Primitive UI Layer (/components/ui)         │
│         Button, IconButton, Badge, Card, Dialog, Input      │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│               Design Tokens & Themes (/styles)              │
│       Light, Dark, Custom Light Blue (CSS Custom Properties)│
└─────────────────────────────────────────────────────────────┘
```

---

## Component Stratification

1. **Primitive UI Layer (`src/components/ui/`)**:
   - Atomic, headless-friendly design tokens and components (`Button`, `Badge`, `Card`, `Dialog`, `Input`, `Textarea`, `Tooltip`, `Divider`, `GradientText`).
   - Purely functional, highly reusable, driven by props and standard variant classes.

2. **Common Layout Layer (`src/components/common/` & `src/components/layout/`)**:
   - Structural wrappers (`ResponsiveContainer`, `SectionContainer`, `SectionHeading`, `MainLayout`, `Navbar`, `Footer`, `MobileNav`, `ScrollToTop`).
   - Enforce uniform padding, maximum content boundaries (`max-w-6xl`), and responsive navigation.

3. **Domain Portfolio Layer (`src/components/portfolio/`)**:
   - Encapsulates domain logic for software engineering representations (`ProjectCard`, `ProjectDetailsDialog`, `ExperienceCard`, `Timeline`, `SkillCategoryCard`, `EducationCard`, `SocialProfiles`, `ContactCard`).

4. **Configuration & Data Layer (`src/config/`)**:
   - Single source of truth. Decouples presentation components from data. All experiences, skills, projects, and personal information are centrally managed.

---

## Three-Theme System
- **Custom Light Blue (Primary/Default)**: Tailored palette with `#F0F9FF` background, `#38BDF8` primary, `#BAE6FD` borders, and `#0F172A` deep navy text.
- **Light Theme**: Standard clean white/slate palette.
- **Dark Theme**: Charcoal/near-black `#0B0F19` background with high-contrast text and dark surface cards.
- **Anti-flicker**: Synchronous inline head script checks `localStorage` prior to React DOM hydration.
