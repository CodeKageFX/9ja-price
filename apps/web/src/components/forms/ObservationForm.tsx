"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ObservationForm() {
  const [commodity, setCommodity] = useState("")
  const [market, setMarket] = useState("")
  const [unit, setUnit] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [date, setDate] = useState("")
  const [notes, setNotes] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1000))
    setIsSubmitting(false)
    console.log({ commodity, market, unit, price, quantity, date, notes })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Commodity</Label>
          <select
            value={commodity}
            onChange={(e) => setCommodity(e.target.value)}
            className="mt-1 w-full h-9 rounded-lg border border-input bg-transparent px-3 text-sm"
          >
            <option value="">Select commodity</option>
            {["Rice", "Beans", "Maize", "Yam", "Plantain", "Fish", "Goat", "Cow"].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <Label>Market</Label>
          <select
            value={market}
            onChange={(e) => setMarket(e.target.value)}
            className="mt-1 w-full h-9 rounded-lg border border-input bg-transparent px-3 text-sm"
          >
            <option value="">Select market</option>
            {["Lagos", "Kano", "Abuja", "Ibadan", "Onitsha", "Port Harcourt"].map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div>
          <Label>Unit</Label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="mt-1 w-full h-9 rounded-lg border border-input bg-transparent px-3 text-sm"
          >
            <option value="">Select unit</option>
            {["kg", "tonne", "bag", "crate"].map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>

        <div>
          <Label>Price (NGN)</Label>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="e.g., 2200"
            className="mt-1"
          />
        </div>

        <div>
          <Label>Quantity</Label>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Optional"
            className="mt-1"
          />
        </div>

        <div>
          <Label>Date</Label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label>Notes (optional)</Label>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Additional notes about this observation"
          rows={3}
          className="mt-1"
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Record Observation"}
      </Button>
    </form>
  )
}
