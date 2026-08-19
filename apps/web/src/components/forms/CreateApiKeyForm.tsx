"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CreateApiKeyForm() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    setIsSubmitting(true)
    // API key creation logic
    await new Promise((r) => setTimeout(r, 1000))
    setIsSubmitting(false)
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="key-name">API Key Name</Label>
        <Input
          id="key-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Production Key"
          className="mt-1"
        />
      </div>
      <Button type="submit" disabled={isSubmitting || !name.trim()}>
        {isSubmitting ? "Creating..." : "Create API Key"}
      </Button>
    </form>
  )
}
