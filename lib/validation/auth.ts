import * as z from "zod"

export const userAuthSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email({
    message: "Invalid email address"
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long"
  }).max(12, {
    message: "Password must be at most 12 characters long"
  }),
})