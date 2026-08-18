import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem, RadioGroupLabel } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/popover" // Using popover as date picker wrapper

export type PriceObservationFormValues = {
  commodity: string
  market: string
  unit: string
  price: number
  quantity?: number
  date: string
  notes?: string
}

const observationSchema = z.object({
  commodity: z.enum(["Rice", "Beans", "Maize", "Yam", "Plantain", "Fish", "Goat", "Cow"]),
  market: z.enum(["Lagos", "Kano", "Kumasi", "Abuja", "Port Harcourt", "Ibadan", "Onitsha", "Abia"]),
  unit: z.enum(["kg", "tonne", "bag", "crrate"]),
  price: z.number().positive("Price must be positive"),
  quantity: z.number().optional(),
  date: z.string().optional(),
  notes: z.string().optional(),
})

export function ObservationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmit },
  } = useForm<PriceObservationFormValues>({
    resolver: {
      async: (data, cb) => {
        const result = observationSchema.safeParse(data)
        if (result.success) {
          cb(null, result.data)
        } else {
          cb(result.error.format())
        }
      },
    },
  })

  const onSubmit = (data: PriceObservationFormValues) => {
    // Submit observation logic
    console.log("Observation submitted:", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          {...register("commodity")}
          placeholder="Commodity"
          asChild
        >
          <Select onValueChange={(value: string) => {}}>
            <SelectTrigger>
              <SelectValue placeholder="Select commodity" />
            </SelectTrigger>
            <SelectContent>
              {["Rice", "Beans", "Maize", "Yam", "Plantain", "Fish", "Goat", "Cow"].map((commodity) => (
                <SelectItem key={commodity} value={commodity}>
                  {commodity}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Input>

        <Input
          {...register("market")}
          placeholder="Market"
          asChild
        >
          <Select onValueChange={(value: string) => {}}>
            <SelectTrigger>
              <SelectValue placeholder="Select market" />
            </SelectTrigger>
            <SelectContent>
              {["Lagos", "Kano", "Kumasi", "Abuja", "Port Harcourt", "Ibadan", "Onitsha", "Abia"].map((market) => (
                <SelectItem key={market} value={market}>
                  {market}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Input>

        <Input
          {...register("unit")}
          placeholder="Unit"
          asChild
        >
          <Select onValueChange={(value: string) => {}}>
            <SelectTrigger>
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              {["kg", "tonne", "bag", "crrate"].map((unit) => (
                <SelectItem key={unit} value={unit}>
                  {unit}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Input>

        <Input
          {...register("price")}
          placeholder="Price"
          type="number"
          className="grid-col-1"
        />

        <Input
          {...register("quantity")}
          placeholder="Quantity"
          type="number"
          className="grid-col-1"
        />
      </div>

      <Input
        {...register("date")}
        type="date"
        placeholder="Date"
        className="w-full"
      />

      <Textarea
        {...register("notes")}
        placeholder="Notes (optional)"
        rows={3}
        className="w-full"
      />

      <Button type="submit" disabled={isSubmit}
        className="w-full">
        {isSubmit ? "Saving..." : "Record Observation"}
      </Button>
    </form>
  )
}