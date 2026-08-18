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
2. Mutations:
import { mutation } from "stunk/query";
export const createPrice = mutation(
  async (newPrice: Price) => fetch("/api/prices", { method: "POST", body: JSON.stringify(newPrice) }),
  { onSuccess: () => pricesChunk.invalidate() }
);
// In Component: const { mutate } = useMutation(createPrice);
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
