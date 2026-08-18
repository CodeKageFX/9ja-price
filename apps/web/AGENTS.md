<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:stunk-agent-rules -->

# Stunk State Management Rules

**Library:** Stunk link:(https://stunk.dev) Github:(https://github.com/I-am-abdulazeez/stunk)
**Core Concept:** Uses "Chunks" for state and "AsyncChunks" for server data. No providers needed.

**Key Imports:**
- `chunk`, `computed` from "stunk"
- `useChunk`, `useAsyncChunk`, `useMutation` from "stunk/react"
- `asyncChunk`, `mutation`, `configureQuery` from "stunk/query"

**Standard Patterns to Use:**

1. **Fetching Data (AsyncChunk):**
   ```typescript
   import { asyncChunk } from "stunk/query";
   export const pricesChunk = asyncChunk(
     async () => fetch("/api/prices").then(res => res.json()),
     { key: "prices", staleTime: 30000 }
   );
   // In Component: const { data } = useAsyncChunk(pricesChunk);   

neccessary links:
 https://stunk.dev/docs/getting-started/quick-start
 https://stunk.dev/docs/async/configure-query
 https://stunk.dev/docs/async/async-chunk
 https://stunk.dev/docs/async/mutation
 https://stunk.dev/docs/async/infinite-async-chunk
 https://stunk.dev/docs/async/combine-async-chunks
 https://stunk.dev/docs/middleware/middleware
 https://stunk.dev/docs/middleware/history
 https://stunk.dev/docs/middleware/persistence
 https://stunk.dev/docs/integrations/react
 https://stunk.dev/docs/utilities

 <!-- END:stunk-agent-rules -->

 <!-- BEGIN:stitch-fidelity-rules -->
# UI Fidelity Rules (STRICT)

When implementing any screen from Stitch:

1. **Fetch BOTH**: Always call `get_screen_code` AND `get_screen_image` for the target screen. Use the image as visual ground truth and the HTML as structural reference.

2. **Preserve Structure Exactly**: Do NOT add, remove, or reorder sections/elements. The HTML structure from Stitch is the single source of truth.

3. **Preserve All Styling**: Keep exact colors, spacing, font sizes, border radii, shadows, and layout properties from the Stitch HTML. Do not "improve" or "clean up" values.

4. **Component Mapping Only**: When converting Stitch HTML to shadcn components, map 1:1. A `<div class="card">` becomes `<Card>`, a `<button>` becomes `<Button>`. Do NOT restructure the layout to fit component conventions.

5. **No Creative Liberty**: Do not add animations, transitions, hover states, or micro-interactions that are NOT present in the Stitch HTML. Do not add loading skeletons, empty states, or error states unless explicitly requested.

6. **Verify Against Image**: After generating code, compare the output against the `get_screen_image` screenshot. If any element is missing, misaligned, or restyled, fix it before marking the task complete.

7. **Placeholder Data**: Use the exact placeholder text/content from the Stitch design. Do not replace it with "Lorem ipsum" or generic data.
<!-- END:stitch-fidelity-rules -->   
