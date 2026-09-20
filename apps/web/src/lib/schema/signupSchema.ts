import * as z from "zod";

import { PasswordSchema } from "@/lib/schema/passwordSchema";

export const SignupSchema = z
  .object({
    full_name: z.string().min(2, "Enter your full name"),
    email: z.email(),
    password: PasswordSchema,
    confirm_password: z.string().min(1, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export type SignupFormData = z.infer<typeof SignupSchema>;
