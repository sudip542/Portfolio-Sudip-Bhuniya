# ADR 001: Three-Theme Architecture & Token Strategy

## Context
The portfolio requires three distinct themes:
1. Standard Light
2. Standard Dark
3. Custom Light Blue (Primary Theme)

The selected theme must be persistent across sessions, toggleable from the navigation bar, and render without flickering during initial page hydration.

## Decision
We implemented a CSS Custom Properties (Variables) architecture integrated with Tailwind CSS utility classes.
1. Design tokens are defined in `src/styles/themes.css` under `.theme-light-blue`, `.theme-light`, and `.theme-dark`.
2. `tailwind.config.js` maps semantic classes (`bg-background`, `text-foreground`, `bg-surface`, `text-primary`, etc.) directly to these CSS variables.
3. `ThemeContext` manages React state and persists changes to `localStorage.getItem('portfolio-theme')`.
4. A small inline synchronous `<script>` in `index.html` inspects `localStorage` and appends the theme class to `<html>` prior to stylesheet and DOM parsing, eliminating theme flash.

## Consequences
- Fast client-side theme switching without full-page re-renders.
- 100% theme consistency across all UI components without hardcoded hex values.
- Clean separation between theme tokens and component styles.
