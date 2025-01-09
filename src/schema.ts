import { z } from "zod";

const passwordSchema = z
  .string()
  .min(1, { message: "register.passwordRequired" })
  .min(8, { message: "register.passwordMinLength" })

  .regex(/[\W_]/, {
    message: "register.passwordSpecialChar",
  })
  .regex(/[A-Z]/, {
    message: "register.passwordUppercase",
  })
  .regex(/[0-9]/, { message: "register.passwordNumber" });

export const regiserFormSchema = z
  .object({
    email: z.string().email({ message: "register.emailInvalid" }),
    password: passwordSchema,
    confirmPassword: z
      .string()
      .min(1, { message: "register.confirmPasswordRequired" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "register.passwordsDoNotMatch",
    path: ["confirmPassword"],
  });

export const loginFormSchema = z.object({
  email: z.string().email({ message: "register.emailInvalid" }),
  password: passwordSchema,
});
