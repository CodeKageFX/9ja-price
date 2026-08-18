import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem, RadioGroupLabel } from "@/components/ui/radio-group"
import { Toggle } from "@/components/ui/toggle"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, } from "@/components/ui/dialog"

export type PlaygroundFormValues = {
  method: "GET" | "POST"
  url: string
  queryParams: string
  includeHeaders: boolean
  includeBody: boolean
}

const playgroundSchema = z.object({
  method: z.enum(["GET", "POST"]),
  url: z.string().min(1, "URL is required"),
  queryParams: z.string().optional(),
  includeHeaders: z.boolean(),
  includeBody: z.boolean(),
})

export function PlaygroundForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmit },
  } = useForm<PlaygroundFormValues>({
    resolver: {
      async: (data, cb) => {
        const result = playgroundSchema.safeParse(data)
        if (result.success) {
          cb(null, result.data)
        } else {
          cb(result.error.format())
        }
      },
    },
  })

  const onSubmit = (data: PlaygroundFormValues) => {
    // Test API request logic
    console.log("Playground form submitted:", data)
  }

  return (
    <Dialog>
      <DialogContent className="p-4 max-w-lg">
        <DialogHeader>
          <DialogTitle>API Playground</DialogTitle>
          <DialogDescription>Test API requests with query parameters and methods</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <Input
            {...register("url")}
            placeholder="https://api.example.com/endpoint"
            className="w-full"
            errorMessage={errors.url && errors.url.message}
          />

          <Select onValueChange={(value: string) => {}}>
            <SelectTrigger>
              <SelectValue placeholder="Method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="GET">GET</SelectItem>
              <SelectItem value="POST">POST</SelectItem>
            </SelectContent>
          </Select>

          <Input
            {...register("queryParams")}
            placeholder='e.g., ?commodity=Rice&market=Lagos'
            className="w-full"
            errorMessage={errors.queryParams && errors.queryParams.message}
          />

          <div className="flex items-center gap-2">
            <Toggle
              checked={register("includeHeaders").onChange}
              onCheckedChange={register("includeHeaders").onChange}
            />
            <span className="text-sm text-ink-secondary">Include headers</span>
          </div>

          <div className="flex items-center gap-2">
            <Toggle
              checked={register("includeBody").onChange}
              onCheckedChange={register("includeBody").onChange}
            />
            <span className="text-sm text-ink-secondary">Include body</span>
          </div>

          <Button type="submit" disabled={isSubmit}
            className="w-full">
            {isSubmit ? "Testing..." : "Test Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}