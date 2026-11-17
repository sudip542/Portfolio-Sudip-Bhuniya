# Design System & Token Specifications

## 1. Visual Philosophy
- **Style**: Modern Developer Portfolio + Premium SaaS Dashboard + Minimalist Editorial Design.
- **Goals**: Communicate backend engineering rigor, concurrency expertise, clean architecture, and practical production experience.
- **Typography**: Inter (primary sans-serif) + JetBrains Mono (monospaced code and technical tags).

---

## 2. Color Palette & Token Reference

### Theme 3 — Custom Light Blue (Primary Signature Theme)
| Token | Value | Purpose |
| :--- | :--- | :--- |
| `--background` | `#F0F9FF` | Soft sky-blue page background |
| `--surface` | `#FFFFFF` | Primary card background |
| `--surface-secondary` | `#E0F2FE` | Secondary card accents & chip backgrounds |
| `--surface-tertiary` | `#BAE6FD` | Interactive states |
| `--foreground` | `#0F172A` | Deep navy primary typography |
| `--muted` | `#64748B` | Slate secondary text |
| `--border` | `#BAE6FD` | Blue-tinted fine borders |
| `--primary` | `#38BDF8` | Sky-blue primary accent |
| `--primary-hover` | `#0EA5E9` | Deepened hover state |
| `--shadow-soft` | `0 4px 20px -2px rgba(186, 230, 253, 0.45)` | Soft blue elevation |

### Theme 1 — Light
| Token | Value | Purpose |
| :--- | :--- | :--- |
| `--background` | `#FFFFFF` | Crisp white page background |
| `--surface` | `#F8FAFC` | Light gray card backgrounds |
| `--foreground` | `#0F172A` | Slate 900 typography |
| `--primary` | `#2563EB` | Royal blue accent |
| `--border` | `#E2E8F0` | Subtle gray borders |

### Theme 2 — Dark
| Token | Value | Purpose |
| :--- | :--- | :--- |
| `--background` | `#0B0F19` | Deep charcoal / near-black background |
| `--surface` | `#111827` | Dark gray card surfaces |
| `--foreground` | `#F9FAFB` | White primary text |
| `--primary` | `#38BDF8` | Glowing sky-blue accent |
| `--border` | `#1F2937` | Subtle dark borders |

---

## 3. Spacing & Responsiveness
- **Breakpoints**:
  - `360px` - `390px`: Small mobile
  - `768px`: Tablet
  - `1024px`: Laptop
  - `1440px`: Desktop
  - `1920px`: Large desktop
- **Max Container Width**: `max-w-6xl` (`1152px`) for optimal readability without excessive horizontal spread.
