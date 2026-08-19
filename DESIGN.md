---
name: Agro-Data Intelligence
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3e4a41'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6e7a70'
  outline-variant: '#bdcabe'
  surface-tint: '#006d40'
  primary: '#006b3f'
  on-primary: '#ffffff'
  primary-container: '#008751'
  on-primary-container: '#fdfff9'
  inverse-primary: '#70db9d'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006c2e'
  on-tertiary: '#ffffff'
  tertiary-container: '#00883c'
  on-tertiary-container: '#fdfff8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#8df8b7'
  primary-fixed-dim: '#70db9d'
  on-primary-fixed: '#002110'
  on-primary-fixed-variant: '#00522f'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is engineered for a high-performance market intelligence platform. It merges the precision of a global financial terminal with the vibrant, forward-looking energy of the Nigerian technology sector. The aesthetic is "Techno-African Minimalism"—moving away from cliché patterns and instead focusing on the clarity, speed, and reliability required for data-heavy agricultural decision-making.

The visual direction follows a **Corporate / Modern** style with a focus on high-fidelity information density. It prioritizes readability and structural integrity, ensuring that complex price indices and logistical data are accessible to both institutional investors and local traders. The interface evokes trust through meticulous alignment, generous whitespace, and a sophisticated use of the national green as a surgical accent rather than a primary wash.

## Colors

The palette is anchored by "Nigeria Green" (#008751), utilized as a functional indicator of growth, stability, and primary action. 

- **Primary Green:** Reserved for primary CTAs, active states, and "upward" market trends.
- **Surface Neutrals:** The background utilizes #F8FAFC to reduce eye strain during long data-entry or analysis sessions, while #FFFFFF is used for cards and containers to create clear separation.
- **Typography & Ink:** We use a deep charcoal (#1E293B) for primary headings to ensure high contrast without the harshness of pure black. Secondary text utilizes a cooler slate grey to establish hierarchy.
- **Semantic Accents:** Success, warning, and error states follow standard fintech patterns but are tuned to harmonize with the primary green.

## Typography

This design system employs a multi-font strategy to balance character with utility. 

**Plus Jakarta Sans** is the voice of the brand, used for headings to provide a modern, friendly, yet professional tone. **Inter** is the workhorse for all body copy and descriptions, chosen for its exceptional legibility in dense interfaces. **Geist** is introduced specifically for data points, price figures, and labels; its monospaced-adjacent tracking ensures that numerical tables remain perfectly aligned and easy to scan.

For mobile, headlines scale aggressively to maintain a single-column focus, while data-mono sizes remain consistent to preserve legibility of critical price points.

## Layout & Spacing

The layout follows a **Fluid Grid** model built on an 8px base unit. 

- **Desktop:** A 12-column grid with 20px gutters and 32px side margins. Large data dashboards should utilize a maximum container width of 1440px to prevent excessive eye travel.
- **Tablet:** 8-column grid with 16px gutters.
- **Mobile:** 4-column grid with 16px margins. 

Spacing between unrelated sections should be `lg` (40px), while related content groups within cards should use `sm` (16px) or `xs` (8px). Use `md` (24px) for internal card padding to create the "Fintech" feel of breathability.

## Elevation & Depth

Visual hierarchy is primarily achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Level 0 (Background):** #F8FAFC. The foundation for the entire application.
- **Level 1 (Cards/Surface):** #FFFFFF with a 1px solid border of #E2E8F0. This is the primary container for data.
- **Level 2 (Interaction):** A very soft, diffused shadow (0px 4px 12px rgba(0, 0, 0, 0.05)) is applied only to floating elements like dropdowns, modals, or hovered cards.

The goal is a flat, "printed" feel that emphasizes the data itself, using depth only to signify temporary interface changes.

## Shapes

The shape language is "Approachable Geometric." We use a standard corner radius of **8px (0.5rem)** for small components like inputs and buttons to maintain a professional, sharp look. 

For high-level containers such as data cards and dashboard widgets, we use **16px (1rem)** to soften the overall interface and make the platform feel modern and accessible. Pill shapes are reserved exclusively for status badges (e.g., "Market Open", "Stable").

## Components

- **Buttons:** Primary buttons use the #008751 background with white text. Secondary buttons use a #F1F5F9 background with #1E293B text. All buttons have an 8px radius and a medium weight font.
- **Data Tables:** Headers are #F1F5F9 with `label-caps` typography. Rows use #FFFFFF with a bottom border of 1px #F1F5F9. For price changes, use green (#22C55E) or red (#EF4444) text in `data-mono`.
- **Price Chips:** Small, rounded containers with a light tint of the primary color (e.g., 10% opacity green) used to highlight specific commodity categories.
- **Input Fields:** Use 1px #E2E8F0 borders. On focus, the border transitions to #008751 with a soft green outer glow.
- **Cards:** 16px corner radius, white background, 1px #E2E8F0 border. Cards should include a "header" area with a clear title in `title-md`.
- **Status Indicators:** Small 8px circles with high-saturation colors to indicate real-time data connectivity or market status.