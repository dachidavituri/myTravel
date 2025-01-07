import { AuthError, AuthResponse } from "@supabase/supabase-js";
import { supabase } from "..";
import { AuthPayload } from "./index.types";

export const register = ({
  email,
  password,
}: AuthPayload): Promise<AuthResponse> => {
  return supabase.auth.signUp({ email, password });
};

export const login = async ({ email, password }: AuthPayload) => {
  try {
    const res = await supabase.auth.signInWithPassword({ email, password });
    if (res.error) {
      throw res.error;
    }
    return res;
  } catch (error) {
    console.log("Unfortunately, login failed");
    throw error;
  }
};

export const logout = (): Promise<{ error: AuthError | null }> => {
  return supabase.auth.signOut();
};
