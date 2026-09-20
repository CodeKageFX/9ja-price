import * as z from "zod";

import { PasswordSchema } from "@/lib/schema/passwordSchema";

export const LoginSchema = z.object({
  email: z.email(),
  password: PasswordSchema,
});

export type LoginFormData = z.infer<typeof LoginSchema>;
