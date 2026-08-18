# Naija Food Index - Implementation Plan

Generated from Stitch project analysis on Aug 18, 2026.
Project ID: `6124966254287322400`

---

## Screens Analyzed

| # | Screen | Title | Key Features |
|---|--------|-------|--------------|
| 1 | Landing Page | PriceNaija Homepage | Hero, live price ticker, data table, API code example, feature cards, footer |
| 2 | Price Explorer | Filterable Price Search | Multi-filter dropdowns, paginated data table, sort |
| 3 | Rice Price Details | Commodity Detail | Price history chart, regional comparison table, market listings |
| 4 | Dashboard Overview | Developer Dashboard | Stat cards, line chart (requests over time), recent requests table |
| 5 | API Keys | Dev Portal - Keys | Data table with actions, modal for creation, status badges |
| 6 | API Playground | Interactive API Tester | Form inputs (query params), method selector, response viewer, history panel |
| 7 | API Docs Intro | Documentation - Introduction | Sidebar nav, tabbed code examples, callout cards, base URL display |
| 8 | API Docs Prices | Documentation - Endpoint | Parameter table, request/response tabs, code snippets |
| 9 | Record Price (Admin) | Admin Form | Multi-select dropdowns, date picker, radio groups, text area |

---

## NPM Dependencies

Packages required based on detected UI patterns:

| Package | Purpose | Detected In |
|---------|---------|-------------|
| `recharts` | Line charts (price history, request analytics) | Dashboard, Landing Page, Rice Detail |
| `date-fns` | Date formatting & relative time ("2 mins ago") | All screens |
| `framer-motion` | Page transitions, hover animations, ticker scroll | Landing Page, Explorer |
| `@tanstack/react-table` | Sortable/paginated data tables | Explorer, API Keys, Dashboard, Landing |
| `lucide-react` | Icon library (Material icons in design use Lucide equivalents) | All screens |
| `react-hook-form` | Form state management | Admin form, Playground, API Key modal |
| `@hookform/resolvers` | Zod integration for form validation | Admin form, Playground |
| `zod` | Schema validation | Admin form, Playground, API Key creation |
| `react-syntax-highlighter` | Code block syntax highlighting (cURL, JSON, JS) | API Docs, Playground, Landing |
| `sonner` or `react-hot-toast` | Toast notifications | All screens |
| `cmdk` or `@radix-ui/react-dialog` | Command palette / modal dialogs | API Key creation, search |
| `@radix-ui/react-tabs` | Tabbed interfaces | API Docs, Playground |
| `@radix-ui/react-select` | Custom dropdown selects | Admin form, Explorer, Playground |
| `@radix-ui/react-popover` | Dropdown menus, date pickers | Explorer filters, nav |
| `@radix-ui/react-accordion` | Collapsible sections | API Docs sidebar, FAQ |
| `@radix-ui/react-tooltip` | Tooltip info on hover | Table actions, code copy buttons |
| `@radix-ui/react-progress` | Rate limit progress bar | Dashboard, API Keys |
| `class-variance-authority` | Component variant management | All shadcn components |
| `clsx` | Conditional class merging | All components |
| `tailwind-merge` | Tailwind class deduplication | All components |

---

## Shadcn Components Required

Every shadcn/ui component needed, mapped to screens:

| Component | Shadcn Package | Screens |
|-----------|---------------|---------|
| `button` | `@shadcn/button` | All screens |
| `card` | `@shadcn/card` | Dashboard (stat cards), Landing (feature cards), Rice Detail (market cards) |
| `table` | `@shadcn/table` | Explorer, API Keys, Dashboard, Landing, API Docs (param table) |
| `dialog` | `@shadcn/dialog` | API Key creation, Playground error details |
| `input` | `@shadcn/input` | Admin form, Playground (URL/params), API Key modal |
| `select` | `@shadcn/select` | Admin form (commodity, region, market, unit, data origin), Explorer (filters) |
| `tabs` | `@shadcn/tabs` | API Docs (Request/Response), Playground (Request/Response/Headers) |
| `badge` | `@shadcn/badge` | API Keys (status), Dashboard (method tags), Table status indicators |
| `dropdown-menu` | `@shadcn/dropdown-menu` | API Keys (actions column), Dashboard (time range), Explorer (filters) |
| `separator` | `@shadcn/separator` | Layout sections across all screens |
| `skeleton` | `@shadcn/skeleton` | Loading states for data tables, charts |
| `progress` | `@shadcn/progress` | Dashboard (rate limit), API Keys (usage) |
| `textarea` | `@shadcn/textarea` | Admin form (internal notes) |
| `switch` | `@shadcn/switch` | Playground (toggle headers) |
| `label` | `@shadcn/label` | Admin form, Playground, API Key modal |
| `radio-group` | `@shadcn/radio-group` | Admin form (review status), Playground (method selector GET/POST) |
| `alert` | `@shadcn/alert` | API Docs (warnings, tips), API Keys (security notice) |
| `alert-dialog` | `@shadcn/alert-dialog` | API Key deletion confirmation |
| `tooltip` | `@shadcn/tooltip` | Code copy buttons, table cell truncation |
| `scroll-area` | `@shadcn/scroll-area` | API Docs sidebar, Playground history panel |
| `avatar` | `@shadcn/avatar` | Dashboard (user greeting), Admin header |
| `breadcrumb` | `@shadcn/breadcrumb` | Rice Detail (Grains > Rice), Admin (Data Management > Add Observation) |
| `popover` | `@shadcn/popover` | Explorer filter dropdowns, Playground param editor |
| `navigation-menu` | `@shadcn/navigation-menu` | Landing page nav bar |
| `command` | `@shadcn/command` | Explorer search, global search |
| `collapsible` | `@shadcn/collapsible` | API Docs sidebar sections |
| `toggle` | `@shadcn/toggle` | Explorer view mode, Playground history toggle |

---

## Installation Commands

### Step 1: Install NPM Dependencies

```bash
# From apps/web directory
cd apps/web

# Core dependencies
pnpm add recharts date-fns framer-motion @tanstack/react-table lucide-react sonner

# Form management
pnpm add react-hook-form @hookform/resolvers zod

# Code highlighting
pnpm add react-syntax-highlighter
pnpm add -D @types/react-syntax-highlighter

# Radix UI primitives (shadcn components pull these, but install explicitly for custom components)
pnpm add @radix-ui/react-dialog @radix-ui/react-tabs @radix-ui/react-select \
  @radix-ui/react-popover @radix-ui/react-accordion @radix-ui/react-tooltip \
  @radix-ui/react-progress @radix-ui/react-dropdown-menu @radix-ui/react-alert-dialog \
  @radix-ui/react-scroll-area @radix-ui/react-avatar @radix-ui/react-breadcrumb \
  @radix-ui/react-collapsible @radix-ui/react-switch @radix-ui/react-radio-group \
  @radix-ui/react-label @radix-ui/react-separator @radix-ui/react-slot \
  @radix-ui/react-navigation-menu @radix-ui/react-command @radix-ui/react-toggle

# Utility packages (if not already installed via shadcn init)
pnpm add class-variance-authority clsx tailwind-merge
```

### Step 2: Initialize Shadcn (if not already done)

```bash
cd apps/web
pnpm dlx shadcn@latest init
```

### Step 3: Add Shadcn Components

```bash
cd apps/web

# Core UI
pnpm dlx shadcn@latest add button card table input textarea label select badge

# Feedback & Overlays
pnpm dlx shadcn@latest add dialog alert-dialog tooltip popover dropdown-menu
pnpm dlx shadcn@latest add progress skeleton sonner

# Navigation & Layout
pnpm dlx shadcn@latest add tabs separator breadcrumb scroll-area navigation-menu

# Forms
pnpm dlx shadcn@latest add radio-group switch collapsible toggle command

# Data Display
pnpm dlx shadcn@latest add avatar alert accordion
```

---

## File Structure

Suggested placement within `apps/web`:

```
apps/web/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout (providers, fonts)
│   │   ├── page.tsx                      # Landing Page (/)
│   │   ├── explorer/
│   │   │   └── page.tsx                  # Price Explorer (/explorer)
│   │   ├── commodity/
│   │   │   └── [slug]/
│   │   │       └── page.tsx              # Commodity Detail (/commodity/rice)
│   │   ├── developers/
│   │   │   ├── layout.tsx                # Dev Portal sidebar layout
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx              # Dashboard (/developers/dashboard)
│   │   │   ├── api-keys/
│   │   │   │   └── page.tsx              # API Keys (/developers/api-keys)
│   │   │   ├── playground/
│   │   │   │   └── page.tsx              # Playground (/developers/playground)
│   │   │   └── usage/
│   │   │       └── page.tsx              # Usage (/developers/usage)
│   │   ├── docs/
│   │   │   ├── layout.tsx                # Docs layout (sidebar + content)
│   │   │   ├── page.tsx                  # Docs Introduction (/docs)
│   │   │   └── [slug]/
│   │   │       └── page.tsx              # Docs pages (/docs/prices, etc.)
│   │   └── admin/
│   │       ├── layout.tsx                # Admin layout
│   │       └── observations/
│   │           └── new/
│   │               └── page.tsx          # Record Observation
│   ├── components/
│   │   ├── ui/                           # Auto-generated by shadcn CLI
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── table.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── label.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── command.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── accordion.tsx
│   │   │   └── index.ts                 # Barrel export
│   │   ├── layout/                       # Shared layout components
│   │   │   ├── Navbar.tsx                # Public nav (Explorer, Docs, etc.)
│   │   │   ├── Sidebar.tsx               # Dev portal sidebar
│   │   │   ├── DocsSidebar.tsx           # Documentation sidebar
│   │   │   ├── Footer.tsx                # Public footer
│   │   │   ├── PageHeader.tsx            # Reusable page header
│   │   │   └── MobileNav.tsx             # Mobile navigation drawer
│   │   ├── charts/                       # Chart components
│   │   │   ├── PriceHistoryChart.tsx     # Line chart for price trends
│   │   │   ├── RequestAnalyticsChart.tsx # Line chart for API usage
│   │   │   └── PriceChangeIndicator.tsx  # Green/red up/down arrow
│   │   ├── tables/                       # Data table wrappers
│   │   │   ├── PriceTable.tsx            # Live market prices table
│   │   │   ├── ApiKeyTable.tsx           # API keys management table
│   │   │   ├── RequestLogTable.tsx       # Recent API requests table
│   │   │   └── DataTable.tsx             # Generic reusable DataTable<T>
│   │   ├── forms/                        # Form components
│   │   │   ├── CreateApiKeyForm.tsx      # API key creation dialog form
│   │   │   ├── ObservationForm.tsx       # Admin price observation form
│   │   │   └── PlaygroundForm.tsx        # API playground request builder
│   │   ├── code/                         # Code display components
│   │   │   ├── CodeBlock.tsx             # Syntax highlighted code block
│   │   │   ├── CodeTabs.tsx              # Tabbed request/response viewer
│   │   │   └── CopyButton.tsx            # Copy-to-clipboard button
│   │   └── shared/                       # Reusable feature components
│   │       ├── PriceTicker.tsx           # Scrolling live price ticker
│   │       ├── SearchInput.tsx           # Search with command palette
│   │       ├── FilterDropdown.tsx        # Dropdown filter wrapper
│   │       ├── StatCard.tsx              # Dashboard stat card
│   │       └── StatusBadge.tsx           # Active/Revoked/Verified badge
│   ├── lib/
│   │   ├── utils.ts                      # cn() helper (shadcn default)
│   │   ├── api.ts                        # API client for PriceNaija backend
│   │   ├── constants.ts                  # Market names, commodity list, etc.
│   │   └── validators.ts                 # Zod schemas for forms
│   ├── hooks/
│   │   ├── usePrices.ts                  # SWR/React Query hook for price data
│   │   ├── useApiKey.ts                  # API key CRUD hook
│   │   └── useDebounce.ts               # Debounced search input
│   ├── types/
│   │   ├── price.ts                      # Price, Commodity, Market types
│   │   ├── api-key.ts                    # ApiKey type
│   │   └── user.ts                       # User type
│   └── styles/
│       └── globals.css                   # Tailwind + design tokens (green theme)
├── public/                               # Static assets
├── components.json                       # Shadcn configuration
├── next.config.ts
├── tailwind.config.ts                    # If using v3 config
└── tsconfig.json
```

---

## Implementation Order

| Phase | Priority | Components |
|-------|----------|------------|
| 1 | HIGH | `ui/` components, `lib/utils.ts`, layout shell (`Navbar`, `Sidebar`, `Footer`), `globals.css` with design tokens |
| 2 | HIGH | Landing Page (`page.tsx`), `DataTable`, `PriceTicker`, `CodeBlock`, `StatCard` |
| 3 | MEDIUM | Price Explorer (`Explorer page`, `FilterDropdown`, `SearchInput`), Commodity Detail page |
| 4 | MEDIUM | Developer Portal (Dashboard, API Keys, Playground pages) |
| 5 | MEDIUM | API Documentation pages (Docs layout, `CodeTabs`, sidebar) |
| 6 | LOW | Admin forms (`ObservationForm`, `CreateApiKeyForm`) |

---

## Design Token Mapping (Stitch -> Tailwind)

From the Stitch design system:

| Token | Tailwind Class | Hex |
|-------|---------------|-----|
| Primary | `bg-primary`, `text-primary` | `#008751` |
| Secondary | `bg-secondary`, `text-secondary` | `#0f172a` |
| Tertiary (Success) | `bg-emerald-500` | `#22c55e` |
| Background | `bg-[#f8fafc]` | `#f8fafc` |
| Surface | `bg-white` border `border-[#e2e8f0]` | `#ffffff` / `#e2e8f0` |
| Ink Primary | `text-[#1e293b]` | `#1e293b` |
| Ink Secondary | `text-slate-500` | `#64748b` |
| Error | `bg-red-500` | `#ef4444` |
| Border Radius | `rounded-lg` (0.5rem), `rounded-xl` (1rem) | — |
| Font Headings | `font-['Plus_Jakarta_Sans']` | — |
| Font Body | `font-['Inter']` | — |
| Font Data | `font-['Geist']` | — |
