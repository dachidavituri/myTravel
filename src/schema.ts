import { z } from "zod";

const passwordSchema = z
  .string()
  .min(1, { message: "Password is required" })
  .min(8, { message: "Password must be at least 8 characters long." })

  .regex(/[\W_]/, {
    message: "Password  contain at least one special character.",
  })
  .regex(/[A-Z]/, {
    message: "Password  contain at least one uppercase letter.",
  })
  .regex(/[0-9]/, { message: "Password  contain at least one number." });

export const regiserFormSchema = z
  .object({
    email: z.string().email(),
    password: passwordSchema,
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});
