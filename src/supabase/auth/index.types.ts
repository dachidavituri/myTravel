import { User } from "@supabase/supabase-js";

export interface AuthPayload {
  email: string;
  password: string;
}

export interface UpdatePasswordProps {
  currentPassword: string;
  newPassword: string;
}

export interface UpdatePasswordResponse {
  user: User | null;
}
