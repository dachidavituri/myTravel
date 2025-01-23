import { AuthError, AuthResponse } from "@supabase/supabase-js";
import { supabase } from "..";
import {
  AuthPayload,
  UpdatePasswordProps,
  UpdatePasswordResponse,
} from "./index.types";

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

export const logout = async (): Promise<{ error: AuthError | null }> => {
  return await supabase.auth.signOut();
};

export const updatePassword = async ({
  currentPassword,
  newPassword,
}: UpdatePasswordProps): Promise<UpdatePasswordResponse> => {
  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      throw new Error("Failed to retrieve current user.");
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: user?.email || "",
      password: currentPassword,
    });

    if (signInError) {
      throw new Error("Incorrect current password.");
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      throw error;
    }

    return { user };
  } catch (error) {
    throw new Error("Password update failed: " + error);
  }
};
