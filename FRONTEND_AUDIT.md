FRONTEND AUDIT — 9jaPrice

Prepared by: Senior Software Engineer (audit of current frontend in repository)
Date: 2026-09-08

This audit inspects the apps/web frontend and reports status, gaps, and recommended work for the two frontend developers.

A. Executive summary

- Good:
  - Modern stack (Next.js App Router, Tailwind-like styles, TypeScript).
  - Clean component structure and consistent UI language.
  - TypeScript type checks and ESLint pass for the web app (`pnpm --filter web check-types` and `pnpm --filter web lint` both passed).
  - Shared UI primitives in packages/ui are present enabling reuse.

- Needs Work:
  - Many pages use hardcoded/mock data (Explorer, Markets, Commodity detail, Admin, Developer portal pages).
  - No route protection or authentication enforcement in front-end (admin & developer pages are accessible without auth).
  - Backend integration is incomplete and unconfirmed for most endpoints — frontend uses a small api wrapper but endpoints are assumptions.

- Missing:
  - Confirmed backend contracts for prices, commodities, markets, API key operations, usage, and observation creation.
  - Authentication flows (login/signup) integrated with backend.

- Broken / Security Concern:
  - Admin pages (/admin, /admin/observations/new) and admin UI exist without route protection — P0 security issue. This UI operates on mocked data but still should be protected.

- Backend Dependency:
  - Price explorer, commodity detail, markets, API keys, usage, playground, and admin management all require backend endpoints and contract confirmation.

- Recommendation:
  - Treat the current UI as "design-complete" but "integration-needed". Prioritize API contract confirmation, secure admin/developer routes, and migration from mock data to API calls.

B. Route inventory

The Next.js App Router pages discovered (file location → route). Status indicates observed implementation.

- / (apps/web/src/app/(marketing)/page.tsx)
  - Purpose: Marketing / landing page
  - Status: Implemented (static content)
  - Notes: Marketing landing present.

- /explorer (apps/web/src/app/(marketing)/explorer/page.tsx)
  - Purpose: Public price explorer
  - Status: Implemented but mocked
  - Notes: Uses ExplorerContent with hardcoded INITIAL_RECORDS. Needs API integration.

- /commodity/[slug] (apps/web/src/app/(marketing)/commodity/[slug]/page.tsx)
  - Purpose: Commodity detail
  - Status: Implemented but mostly mocked
  - Notes: Price history component uses mock SVG path; commodity values are static placeholders.

- /markets (apps/web/src/app/(marketing)/markets/page.tsx)
  - Purpose: Markets list
  - Status: Implemented but mocked
  - Notes: MARKETS_DATA is hardcoded; needs API integration.

- /developers (apps/web/src/app/(marketing)/developers/page.tsx)
  - Purpose: Developer landing
  - Status: Implemented (marketing content)
  - Notes: Marketing page explains API; docs link to docs pages.

- /methodology (apps/web/src/app/(marketing)/methodology/page.tsx)
  - Purpose: Methodology / explanation
  - Status: Implemented (static)

- /login (apps/web/src/app/(marketing)/login/page.tsx)
  - Purpose: Sign in
  - Status: Implemented (UI-only) — mocked behavior
  - Notes: No backend auth integration; form prevents default on submit.

- /signup (apps/web/src/app/(marketing)/signup/page.tsx)
  - Purpose: Signup / create account
  - Status: Implemented (UI-only)

Developer portal (dev-portal) — mostly implemented UI but mocked:

- /dashboard (apps/web/src/app/(dev-portal)/dashboard/page.tsx)
  - Purpose: Developer dashboard
  - Status: Implemented (UI), likely mocked content

- /api-keys (apps/web/src/app/(dev-portal)/api-keys/page.tsx)
  - Purpose: Manage API keys
  - Status: Implemented (UI-only; client-side mock of keys in components/shared/ApiKeysContent.tsx)

- /usage (apps/web/src/app/(dev-portal)/usage/page.tsx)
  - Purpose: API usage analytics
  - Status: Implemented (UI); content appears static/mocked

- /playground (apps/web/src/app/(dev-portal)/playground/page.tsx)
  - Purpose: API playground
  - Status: Implemented (UI-only; examples show masked Authorization)

- /settings (apps/web/src/app/(dev-portal)/settings/page.tsx)
  - Purpose: Account settings
  - Status: Implemented (UI-only)

Docs (under /docs)

- /docs (apps/web/src/app/docs/page.tsx)
- /docs/quickstart (apps/web/src/app/docs/quickstart/page.tsx)
- /docs/authentication (apps/web/src/app/docs/authentication/page.tsx)
- /docs/foods (apps/web/src/app/docs/foods/page.tsx)
- /docs/prices (apps/web/src/app/docs/prices/page.tsx)
- /docs/markets (apps/web/src/app/docs/markets/page.tsx)
  - Status: Implemented (static documentation pages and example snippets) — good coverage but example snippets mask Authorization as `******`.

Admin

- /admin (apps/web/src/app/admin/page.tsx)
- /admin/observations/new (apps/web/src/app/admin/observations/new/page.tsx)
  - Purpose: Admin price management and create observation
  - Status: Implemented (UI-only mocked data)
  - Notes: No backend auth or route protection — P0 security concern.

C. Navigation audit

Inspected: Navbar and Footer components.

Findings:
- CURRENT: Navbar links to /explorer, /developers, /docs, /markets, Sign In, Get API Key.
  - EXPECTED: Links match approved public routes.
  - SEVERITY: Low

- CURRENT: Footer contains links to /explorer, /markets, /methodology, /developers, /docs, /playground, /dashboard, /api-keys, /usage. Some links point to pages that exist but are mocked.
  - EXPECTED: Same, but ensure routes that require auth are not discoverable without auth (or visually hidden). Consider showing /dashboard only when signed in.
  - SEVERITY: Medium (discovery of protected pages without auth may confuse users)

- CURRENT: Several in-page links use href="#" or point to example anchors in docs. I observed one in LoginForm (Forgot password? → href="#").
  - EXPECTED: Replace placeholders with real routes or modal flows.
  - SEVERITY: Low

- CURRENT: Admin pages are discoverable (footer & nav do not link to admin), but direct URL access is possible.
  - EXPECTED: Admin routes must be protected server-side and hidden in public UI unless the user is an authenticated admin.
  - SEVERITY: P0 (security)

D. Public Experience audit

Pages reviewed: /, /explorer, /commodity/[slug], /markets, /developers, /methodology

General observations:
- UI completeness: High — styling, components and layout are well-designed.
- Responsive behavior: Most components use responsive utilities; manual spot checks show mobile-friendly layouts via CSS classes.
- Loading states: Missing in many data-driven components (Explorer, Markets) because they use hardcoded data. When integrating, add skeletons/placeholders.
- Error / empty states: Explorer has an empty-state row. Other pages often don't show explicit loading/error placeholders for API integration.
- Mock data: Explorer, Markets, Commodity detail, Market detail and Admin use hardcoded arrays.
- API integration: There is a small API module at src/lib/api.ts which assumes a base API URL and specific endpoints (/prices, /commodities, /markets). These expected endpoints are not confirmed by backend and must be validated before integration.

Recommend assigning the following to PUBLIC EXPERIENCE DEVELOPER:
- Connect Explorer to backend contract for price listing.
- Integrate Markets list with backend.
- Replace hardcoded CommodityDetail values with API calls and implement loading/error states.
- Ensure SEO metadata is validated on commodity pages (title is present but dynamic data should update meta tags when integrated).

E. Developer Experience audit

Pages reviewed: /login, /signup, /dashboard, /api-keys, /usage, /playground, /settings, /docs/*

Observations:
- Authentication UI exists but is UI-only. No server interaction currently.
- Protected-route behavior: Not enforced. Developer pages are accessible without auth.
- API key UI: Implemented in UI as client-side mock (ApiKeysContent). Key creation flow simulates key generation client-side and stores values only in component state.
- Usage UI: Static tables referencing sample endpoint strings such as `/v1/auth/token`.
- Playground: UI shows Authorization masked and example requests, no execution against API.
- Documentation: Good coverage of docs pages, but they mask Authorization examples as `******` and do not show real request/response shapes.

Recommend assigning the following to DEVELOPER EXPERIENCE DEVELOPER:
- Implement auth flows connecting to backend (login/signup/token handling).
- Add route guards and server-side checks to protect /dashboard /api-keys /usage /playground /settings.
- Wire API keys UI to backend endpoints once contract is confirmed.
- Enhance playground to support authenticated requests against confirmed endpoints (with caution in exposing secrets).

F. Backend integration audit

The frontend uses apps/web/src/lib/api.ts with a base URL controlled by NEXT_PUBLIC_API_URL. It references endpoints:
- GET /prices
- GET /prices/:commodity
- GET /commodities
- GET /commodities/:slug
- GET /markets

Status for each frontend feature:
- Price Explorer
  - Current: Uses hardcoded INITIAL_RECORDS in ExplorerContent.
  - Backend dependency: Needs /prices endpoint that accepts commodity/market query params and returns structured price list.
  - Endpoint confirmed: Not confirmed in repo. "api" app currently scaffolded but does not implement these endpoints.
  - Mocked now: yes

- Commodity detail
  - Current: Uses static values and CommodityPriceHistory mock.
  - Backend dependency: Needs /prices/:commodity and /commodities/:slug with markets list and historical data.
  - Endpoint confirmed: Not confirmed.

- Markets
  - Current: Uses MARKETS_DATA mock.
  - Backend dependency: /markets endpoint returning market metadata.
  - Endpoint confirmed: Not confirmed.

- API Keys & Usage
  - Current: UI-only mocked (client-side keys). No server calls.
  - Backend dependency: endpoints for creating/listing/revoking API keys and usage metrics.
  - Endpoint confirmed: Not confirmed.

- Admin Observations creation
  - Current: Admin UI and observation form exist but do not persist to backend. Admin page operates on local state.
  - Backend dependency: POST /observations (or equivalent) to create price observations, plus admin endpoints to verify/reject.
  - Endpoint confirmed: Not confirmed.

Important: Do not assume endpoint names; frontend's src/lib/api.ts is a helpful reference but must be confirmed with the backend owner.

G. Authentication / security audit

- Authentication (what exists): UI forms for login/signup; documentation pages show example requests with masked Authorization headers.
- Authorization (what should exist): Server-side protection for admin endpoints and any developer APIs (API key issuance, usage). Not present.

Findings:
- Admin pages are public and operable in the app without authentication — this is a P0 security issue.
- Developer pages (dashboard, api-keys, usage, playground, settings) are accessible without auth. While currently showing mock data, these routes must be protected when integrated with real backend data.
- API key handling: The UI currently generates keys on the client and displays them; real key creation must be done server-side and must not be stored in client-state beyond immediate display (one-time secret visibility).
- Local storage / secrets: No obvious usage of localStorage for tokens in inspected code, but since auth isn't implemented this needs design.

H. TypeScript / build / lint audit

Commands run and results:
- pnpm --filter web check-types
  - STATUS: success
  - NOTES: next typegen and tsc --noEmit succeeded

- pnpm --filter web lint
  - STATUS: success (no lint warnings/errors)

- pnpm --filter api lint
  - STATUS: success (1 ESLint warning in apps/api/src/main.ts about an un-awaited promise)
  - ERROR: none

- Build: Full monorepo build was not run as part of this audit. The web app builds via `next build` and typegen succeeded.

Recommendations based on results:
- Fix the lone ESLint warning in apps/api/src/main.ts (await or void the app.listen promise).
- Add CI steps to run: pnpm -w -r -s run check-types, pnpm -w -r -s lint (or use turbo) so pull requests catch regressions.

I. Component architecture audit

- Duplicated components / logic: Several data-list components use repeated table patterns; however they are fairly consistent. Consider extracting repeated table/empty/loading components to shared UI if they will be reused.
- Large components: Some page components are sizable but readable. Shared pieces are placed under components/ which is good.
- Unused components: No obvious dead files discovered in this audit, but a repo-wide search for unused exports would help.
- Tight coupling: Admin UI and Explorer are self-contained and use local state. When moving to API integration, keep API logic in src/lib/api.ts or a thin service layer, not inline in components.

J. UX / responsive / accessibility audit

- Responsive: CSS classes indicate mobile-first responsiveness; layouts appear to adapt. Manual inspection suggests no obvious horizontal overflow in main pages.
- Accessibility: Some inputs have labels; ensure all interactive elements provide aria-labels where icons are used as buttons (Navbar menu button has aria-label). Some buttons use only icons without aria-labels — add those.
- Keyboard navigation: Many interactive elements are buttons/links; ensure dropdowns are focusable and closable with keyboard.
- Contrast: Colors appear to follow a brand palette; run an automated contrast check as part of follow-up tasks.

K. SEO audit

- Pages set Metadata title and description in several routes.
- Commodity page sets metadata but currently uses static text; when integrating dynamic data, ensure metadata is updated server-side or via Next's metadata APIs.
- OpenGraph/Twitter tags: Not present in many pages — consider adding them for social sharing (P2).

L. Hardcoded / mock data audit

Groupings observed:
- Explorer: INITIAL_RECORDS array in ExplorerContent.tsx (hardcoded price rows)
- Commodity detail: static average prices and CommodityPriceHistory mock data
- Markets: MARKETS_DATA in MarketsContent.tsx
- Api Keys: ApiKeysContent.tsx uses INITIAL_KEYS and client-generated keys
- Admin: AdminPriceManagementContent.tsx uses INITIAL_RECORDS
- Docs: Authentication and Quickstart mask Authorization as `******` (intentional)

Action: All of the above should be replaced with API-backed data when backend contracts are confirmed. While integrating, keep mocks isolated and clearly marked.


END OF AUDIT
