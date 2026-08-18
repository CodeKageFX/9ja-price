import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from "next/navigation"
import { cn } from "@/lib/utils"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export type ApiKeyFormValues = {
  name: string
  key: string
  permissions: string[]
}

const apiKeySchema = z.object({
  name: z.string().min(1, "Name is required"),
  key: z.string().min(1, "API key is required"),
  permissions: z.array(z.enum(["read", "write", "delete"])),
})

export function CreateApiKeyForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmit },
  } = useForm<ApiKeyFormValues>({
    resolver: {
      async: (data, cb) => {
        const result = apiKeySchema.safeParse(data)
        if (result.success) {
          cb(null, result.data)
        } else {
          cb(result.error.format())
        }
      },
    },
  })

  const onSubmit = (data: ApiKeyFormValues) => {
    // Create API key logic
    navigate("/developers/api-keys")
  }

  return (
    <Dialog>
      <DialogContent className="p-4 max-w-sm">
        <DialogHeader>
          <DialogTitle>Create API Key</DialogTitle>
          <DialogDescription>Generate a new API key for accessing the PriceNaija API</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <Input
            {...register("name")}
            placeholder="API key name"
            className="w-full"
            errorMessage={errors.name && errors.name.message}
          />

          <Input
            {...register("key")}
            placeholder="Enter API key"
            type="password"
            className="w-full"
            errorMessage={errors.key && errors.key.message}
          />

          <Select onValueChange={(value) => {}}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="read">Read only</SelectItem>
              <SelectItem value="write">Read & Write</SelectItem>
              <SelectItem value="delete">Full Access</SelectItem>
            </SelectContent>
          </Select>

          <Button type="submit" disabled={isSubmit}
            className="w-full">
            {isSubmit ? "Creating..." : "Create API Key"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}