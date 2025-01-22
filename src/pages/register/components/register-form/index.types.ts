import { regiserFormSchema } from "@/schema";
import { z } from "zod";

export type RegisterForm = z.infer<typeof regiserFormSchema>;
