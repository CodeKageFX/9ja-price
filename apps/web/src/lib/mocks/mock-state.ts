// Dev-only switch for previewing data states while backend contracts are PENDING.
// Add ?mock=loading, ?mock=error or ?mock=empty to a page URL. Ignored in production.
export type MockState = "loading" | "error" | "empty" | null

export function getMockState(): MockState {
  // eslint-disable-next-line turbo/no-undeclared-env-vars -- set by Next.js itself, not a Turbo build input
  if (process.env.NODE_ENV === "production" || typeof window === "undefined") return null
  const value = new URLSearchParams(window.location.search).get("mock")
  return value === "loading" || value === "error" || value === "empty" ? value : null
}

export async function resolveMock<T>(data: T[], label: string): Promise<T[]> {
  const state = getMockState()
  if (state === "loading") return new Promise<T[]>(() => {})
  if (state === "error") throw new Error(`Mock error: ${label} failed to load`)
  if (state === "empty") return []
  return data
}
