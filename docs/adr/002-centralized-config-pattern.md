# ADR 002: Centralized Configuration Pattern

## Context
A developer portfolio contains frequently updated data: biographical blurbs, social profile URLs, employment history, quantified achievements, technical skill lists, and deep project engineering specifications. Hardcoding this information inside React presentation components leads to tight coupling, difficulty in updating personal data, and regression risks.

## Decision
We isolated 100% of the portfolio's editable domain content into a dedicated `src/config/` directory:
- `personalInfo.js`: Bio, location, highlights, role, availability.
- `socialLinks.js`: URLs, usernames, official icons, and configuration status flags.
- `experience.js`: Companies, roles, timelines, and measurable achievements.
- `skills.js`: Structured categories and skill lists without arbitrary progress bars.
- `projects.js`: Project architectures, problem statements, real-world use cases, and engineering badges.
- `education.js`: Degree, institution, dates, and CGPA.
- `siteConfig.js`: SEO meta tags, site title, default theme, and resume paths.

## Consequences
- Clean separation of concerns between data and presentation.
- Zero copy-pasting of text across components.
- Updating links or adding new projects requires editing only the config file, without modifying JSX or styling.
