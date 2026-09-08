TASK BREAKDOWN — 9jaPrice

Prepared for:
- Frontend Developer 1 = Public Experience
- Frontend Developer 2 = Developer Experience
- Backend Owner = API and auth

PRIORITY SCALE: P0 = blocker, P1 = important before production, P2 = quality/improvement, P3 = future

---

## FRONTEND DEVELOPER 1 — PUBLIC EXPERIENCE
Primary ownership: Landing page, Price Explorer, Commodity Detail, Markets, Methodology, Developer/API landing, Public Navbar & Footer, Public mobile navigation, Shared Public components.

TASK ID: fe1-explorer-api
TITLE: Connect Price Explorer to backend API
DESCRIPTION: Replace hardcoded ExplorerContent INITIAL_RECORDS with live API calls to the confirmed /prices endpoint. Implement loading, error, and empty states; keep current UI and sorting/filtering. Use src/lib/api.ts as the place to call endpoints.
FILES/ROUTES: apps/web/src/components/shared/ExplorerContent.tsx, apps/web/src/lib/api.ts, apps/web/src/app/(marketing)/explorer/page.tsx
DEPENDENCIES: Backend: confirmed GET /prices contract (query params: commodity?, market?).
PRIORITY: P1
ACCEPTANCE CRITERIA:
- Explorer loads data from API_BASE (NEXT_PUBLIC_API_URL) using src/lib/api.ts
- Loading skeleton shown while fetching
- Errors show a readable message and retry button
- Empty results show a friendly message
- UI passes TypeScript and lint

---
TASK ID: fe1-commodity-detail
TITLE: Wire Commodity detail to backend + historical chart
DESCRIPTION: Replace static commodity values and mock CommodityPriceHistory with API calls to /commodities/:slug and /prices/:commodity (historical). Ensure server-side metadata updates for SEO where applicable.
FILES/ROUTES: apps/web/src/app/(marketing)/commodity/[slug]/page.tsx, apps/web/src/components/shared/CommodityPriceHistory.tsx, apps/web/src/lib/api.ts
DEPENDENCIES: Backend: confirmed GET /commodities/:slug and GET /prices/:commodity (history)
PRIORITY: P1
ACCEPTANCE CRITERIA:
- Commodity detail shows real data and historical chart
- Metadata reflects commodity name and summary
- Loading / error states implemented

---
TASK ID: fe1-markets-list
TITLE: Connect Markets page to API
DESCRIPTION: Replace MARKETS_DATA with API calls to /markets and implement search/filter using server-side query params where possible.
FILES/ROUTES: apps/web/src/app/(marketing)/markets/MarketsContent.tsx
DEPENDENCIES: Backend: confirmed GET /markets endpoint
PRIORITY: P1
ACCEPTANCE CRITERIA:
- Markets list fetches from API and paginates if needed
- Loading, error states implemented

---
TASK ID: fe1-navbar-footer
TITLE: Harden public navigation and remove placeholder links
DESCRIPTION: Ensure Navbar and Footer links point to real routes or are hidden when not applicable (e.g., Dashboard when logged out). Replace href="#" placeholders.
FILES/ROUTES: apps/web/src/components/layout/Navbar.tsx, apps/web/src/components/layout/Footer.tsx
DEPENDENCIES: None
PRIORITY: P1
ACCEPTANCE CRITERIA:
- No placeholder hrefs in nav
- Dashboard link is hidden when user isn't authenticated (UI-only gating until backend auth is ready)

---
TASK ID: fe1-seo-meta
TITLE: Improve SEO metadata for public pages
DESCRIPTION: Ensure pages like commodity detail update metadata when data is available. Add OpenGraph tags for key pages.
FILES: apps/web/src/app/(marketing)/commodity/[slug]/page.tsx and other pages
DEPENDENCIES: None (P2) — add server-rendered metadata once API integrated
PRIORITY: P2
ACCEPTANCE CRITERIA:
- Metadata updates with commodity name and description
- OpenGraph title and description present for major pages

---

## FRONTEND DEVELOPER 2 — DEVELOPER EXPERIENCE
Primary ownership: Login, Signup, Developer Dashboard, API Keys, Usage, Playground, Settings, Documentation, Developer navigation.

TASK ID: fe2-auth-ui
TITLE: Implement auth flows (frontend integration)
DESCRIPTION: Implement login/signup flow integration points. Build token handling (store tokens server-side via cookies or use secure storage) and redirect behavior on successful login.
FILES/ROUTES: apps/web/src/app/(marketing)/login, apps/web/src/app/(marketing)/signup, auth helpers in apps/web/src/lib/auth.ts
DEPENDENCIES: Backend: confirmed auth endpoints (e.g. /auth/token or OAuth). Backend-owner decision required for session vs JWT vs cookie strategy.
PRIORITY: P0 (auth strategy affects many features)
ACCEPTANCE CRITERIA:
- Login form POSTs to confirmed endpoint and handles success/failure
- Tokens stored appropriately (prefer HttpOnly cookies for production)
- Protected routes redirect to login when unauthenticated

---
TASK ID: fe2-protect-dev-portal
TITLE: Protect developer portal routes
DESCRIPTION: Add frontend route guards for /dashboard, /api-keys, /usage, /playground, /settings and ensure server-side checks are enforced in collaboration with backend owner.
FILES: apps/web/src/app/(dev-portal) pages and a simple auth provider or middleware
DEPENDENCIES: Backend: auth contract to validate tokens/sessions
PRIORITY: P0
ACCEPTANCE CRITERIA:
- Developer-only pages are not accessible when unauthenticated (client-side redirect)
- Server-side checks added after backend support is available

---
TASK ID: fe2-api-keys
TITLE: Connect API Keys UI to backend
DESCRIPTION: Replace ApiKeysContent mock with API calls for listing, creating, revoking API keys. Ensure create shows the one-time secret and does not store it anywhere persistent client-side.
FILES: apps/web/src/components/shared/ApiKeysContent.tsx, apps/web/src/components/forms/CreateApiKeyForm.tsx, src/lib/api.ts
DEPENDENCIES: Backend: endpoints to list/create/revoke API keys
PRIORITY: P1
ACCEPTANCE CRITERIA:
- API keys list from server
- Create shows one-time key and then only stores masked prefix
- Revoke/delete actions call backend and update UI

---
TASK ID: fe2-playground-integration
TITLE: Make playground execute requests against API
DESCRIPTION: Enable the playground to run authenticated requests against the backend in a safe manner (support tokens from the logged-in session)
FILES: apps/web/src/components/shared/PlaygroundContent.tsx
DEPENDENCIES: Backend: endpoints and CORS rules; auth integration
PRIORITY: P1
ACCEPTANCE CRITERIA:
- Playground can execute requests against confirmed endpoints in development
- Sensitive secrets are never exposed in the UI or logs

---

## BACKEND OWNER TASKS (Frontend dependencies only)
These tasks are backend responsibilities. Frontend developers should NOT implement server-side behavior.

- Authentication
  - Implement login/signup/token endpoints and document contract (request/response): endpoint URL, status codes, token lifecycle, refresh method, cookie vs bearer token.
  - P0

- API
  - Provide confirmed endpoints for: prices listing, price historical, commodities list/get, markets list, observations create, API keys (list/create/revoke), usage metrics.
  - For each endpoint: provide example request/response payloads (JSON) and error codes.
  - P1

- Foods
  - Endpoint(s) to return commodity definitions and slugs for pages.

- Prices
  - Endpoint(s) to return latest prices and historical timeseries for commodities by market and date range.

- Markets
  - Endpoint(s) to list markets with metadata (name, city, region, last update, foods tracked).

- API Keys
  - Server-side key creation (one-time secret visibility), listing (masked), revocation, and usage audit.

- Usage
  - Endpoint for per-key usage stats: per-day or per-hour usage for dashboard charts.

- Admin / Observations
  - Endpoints to create price observations, list/paginate pending observations, verify/reject observation.

For each backend task, provide a minimal contract document (preferably OpenAPI or JSON examples). Frontend will not implement until contract is confirmed.

---

## GITHUB TASK FORMAT (Suggested issue titles and branch names)
Examples for P0/P1 tasks (small, actionable):

- [P0] Add server-side authentication contract and implement login endpoint
  - branch: feat/api-auth-contract

- [P0] Protect admin and developer routes (client routing + server checks)
  - branch: feat/protect-dev-portal

- [P1] Connect Price Explorer to GET /prices
  - branch: feat/explorer-api-integration

- [P1] Connect Markets page to GET /markets
  - branch: feat/markets-api-integration

- [P1] Implement API key creation & listing via backend
  - branch: feat/api-keys-integration

- [P2] Add OpenGraph metadata for commodity pages
  - branch: feat/seo-commodity-og

Make each task small enough to complete in 1–3 days.

---

## TEAM WORKFLOW (how the three people should work together)

Project Owner / Backend
  |
  |--- API contracts
  |--- Authentication
  |--- Database
  |--- Backend endpoints
  |
  |---> Public Experience Developer (FE1)
  |---> Developer Experience Developer (FE2)

- Both frontend devs can work in parallel.
- Frontend developers should not wait for entire backend to be finished — use mocks and work on UI, routing, responsiveness, and error/loading states.
- For integration work, frontend devs need confirmed API contracts. Backend owner should publish a small contract (OpenAPI or JSON examples) for each endpoint the frontend will consume.
- When contracts are confirmed, frontend devs convert mock flows to API calls and add tests.

Communication rules:
- Backend owner publishes a contract before frontend integration begins.
- If a contract changes, update frontend tasks and communicate impacts.
- Use the PR description to document backend dependencies and required follow-ups.

---

End of TASK_BREAKDOWN
