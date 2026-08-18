import { z } from "zod"

export const priceObservationSchema = z.object({
  commodity: z.enum(["Rice", "Beans", "Maize", "Yam", "Plantain", "Fish", "Goat", "Cow"]),
  market: z.enum(["Lagos", "Kano", "Kumasi", "Abuja", "Port Harcourt", "Ibadan", "Onitsha", "Abia"]),
  unit: z.enum(["kg", "tonne", "bag", "crrate"]),
  price: z.number().positive(),
  quantity: z.number().positive().optional(),
  date: z.date().optional(),
  notes: z.string().optional(),
})

export type PriceObservationFormValues = z.infer<typeof priceObservationSchema>

export const apiKeySchema = z.object({
  name: z.string().min(1, "Name is required"),
  key: z.string().min(1, "API key is required"),
  permissions: z.array(z.enum(["read", "write", "delete"])),
})

export type ApiKeyFormValues = z.infer<typeof apiKeySchema>