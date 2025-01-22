import { loginFormSchema } from "@/schema";
import { z } from "zod";

export type LoginForm = z.infer<typeof loginFormSchema>;
