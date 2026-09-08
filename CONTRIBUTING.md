# Contributing to 9jaPrice

You are an AI assistant using Copilot CLI runtime in VS Code.

This document describes how to work on the 9jaPrice monorepo. It is intended for frontend and backend contributors and maintains conventions to keep work predictable and safe.

---

## Project structure (important directories)
Only directories that exist in the repository are listed here.

- apps/
  - apps/web — Next.js frontend (App Router). Public site + developer portal + admin UI.
  - apps/api — NestJS backend (scaffolded). API server and Prisma schema live here.
- packages/
  - packages/ui — shared UI primitives used by frontend apps.
  - packages/eslint-config — repo eslint shareable config.
  - packages/typescript-config — shared tsconfig presets.
- README.md, IMPLEMENTATION_PLAN.md, DESIGN.md — project docs and plans.
- pnpm-workspace.yaml & turbo.json — monorepo tooling (pnpm + Turborepo).

When working on code, prefer to modify files in the app or package that logically own the feature.

---

## Branch strategy (simple workflow)
Use a straightforward feature-branch → PR workflow:

- main: production/mainline branch. Always protected.
- feature branches: create a branch per task using the form:
  - feat/<short-descriptor>
  - fix/<short-descriptor>
  - refactor/<short-descriptor>
  - docs/<short-descriptor>

Examples:
- feat/price-explorer-api-integration
- fix/navbar-mobile-link
- docs/add-env-examples

Rules:
- Never push directly to `main`.
- Every task must have its own branch and PR — keep branches focused.
- Pull/rebase main before merging or when long-lived branches diverge.
- Do not modify another developer's work without coordination.
- Keep PRs small and focused on a single change when possible.

---

## Commit conventions
Use short, imperative commit messages. Examples:

- feat: connect price explorer to API
- fix: correct mobile navbar links
- refactor: extract price table to component
- docs: add env.example and contributing

Do not require an elaborate commit message format. Keep messages meaningful and scoped.

---

## Pull Requests
Every meaningful change must go through a PR. A PR should include:

- Summary: What changed and why.
- Screenshots for UI changes (desktop and mobile where relevant).
- Testing performed (manual steps, browsers/devices used).
- Known limitations or follow-ups.
- Backend dependencies (list exact endpoints or state whether a contract is pending).

PR reviewers should check for: accessibility, responsive behavior, TypeScript errors, console errors, and any exposed secrets.

---

## Code quality expectations
- TypeScript: Prefer typed code — avoid `any` unless documented.
- Responsive UI: Verify layouts on desktop and narrow/mobile widths.
- Accessibility: Buttons and form inputs must have labels and reasonable keyboard access.
- Reusable components: Extract repeated UI into packages/ui when appropriate.
- Avoid duplicated logic and unnecessary dependencies.
- Handle loading, error, and empty states for all data-driven UI.
- No console errors or exposed secrets in committed code.

---

## Frontend/Backend coordination
- Frontend must NOT invent API contracts. If an endpoint/response shape is unconfirmed, mark it as `PENDING` and use an isolated mock.
- Document the expected contract clearly in the PR and in TASK_BREAKDOWN.md.
- When the backend owner confirms an API contract, update the frontend integration and tests.

Mocking guidance:
- Use small, well-isolated mocks for local development (components or services under `src/lib`), and clearly mark them with TODOs and a reference to the backend contract issue.

---

## Definition of Done
A task is considered done when:
- Implementation works and meets acceptance criteria.
- Desktop and mobile are checked.
- Loading/error/empty states handled.
- TypeScript checks pass.
- ESLint (where configured) passes.
- Build passes (when applicable).
- No obvious console errors in the browser.
- Routes and links work as expected.
- A PR is created with required documentation and reviewer feedback addressed.

---

## Local development (quick)
- Install dependencies: `pnpm install`
- Run all apps in dev mode: `pnpm dev` (uses turbo to start apps defined in the workspace)
- To run only web: `pnpm --filter web dev`
- To run only api: `pnpm --filter api dev`

---

## Environment & secrets
- Do NOT commit secrets to the repository.
- Use `.env` (local) and `.env.example` (committed) files to document required variables.
- See the repository `ENV` examples added alongside apps.

---

If something in this document becomes stale, update it in a follow-up PR and leave a note in the PR describing why the change was needed.
