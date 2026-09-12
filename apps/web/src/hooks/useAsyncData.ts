import { useCallback, useEffect, useState } from "react"

export type AsyncStatus = "loading" | "error" | "success"

// Runs an async loader on mount and tracks loading / error / success.
// `load` must be a stable function (e.g. a module-level service function).
export function useAsyncData<T>(load: () => Promise<T>) {
  const [status, setStatus] = useState<AsyncStatus>("loading")
  const [data, setData] = useState<T | undefined>(undefined)
  const [error, setError] = useState<Error | null>(null)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let cancelled = false
    load().then(
      (result) => {
        if (cancelled) return
        setData(result)
        setStatus("success")
      },
      (err: unknown) => {
        if (cancelled) return
        setError(err instanceof Error ? err : new Error(String(err)))
        setStatus("error")
      },
    )
    return () => {
      cancelled = true
    }
  }, [load, attempt])

  const retry = useCallback(() => {
    setError(null)
    setStatus("loading")
    setAttempt((n) => n + 1)
  }, [])

  return { status, data, error, retry }
}
