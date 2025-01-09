import { login, logout, register, updatePassword } from "@/supabase/auth";
import { PostgrestError, AuthError, AuthResponse } from "@supabase/supabase-js";
import { useMutation, UseMutationResult } from "react-query";
import { LoginResponse, RegisterProps } from "./index.types";
import { AUTH_MUTATION_KEYS } from "./enum";
import {
  UpdatePasswordResponse,
  UpdatePasswordProps,
} from "@/supabase/auth/index.types";

export const useRegister = (): UseMutationResult<
  AuthResponse,
  PostgrestError,
  RegisterProps
> => {
  return useMutation<AuthResponse, PostgrestError, RegisterProps>({
    mutationKey: [AUTH_MUTATION_KEYS.REGISTER],
    mutationFn: register,
  });
};

export const useLogin = (): UseMutationResult<
  LoginResponse,
  PostgrestError,
  RegisterProps
> => {
  return useMutation<LoginResponse, PostgrestError, RegisterProps>({
    mutationKey: [AUTH_MUTATION_KEYS.LOGIN],
    mutationFn: login,
  });
};

export const useLogOut = (): UseMutationResult<
  { error: AuthError | null },
  PostgrestError,
  void
> => {
  return useMutation<{ error: AuthError | null }, PostgrestError, void>({
    mutationKey: [AUTH_MUTATION_KEYS.LOGOUT],
    mutationFn: logout,
  });
};

export const useUpdatePassword = (): UseMutationResult<
  UpdatePasswordResponse,
  PostgrestError,
  UpdatePasswordProps
> => {
  return useMutation<
    UpdatePasswordResponse,
    PostgrestError,
    UpdatePasswordProps
  >({
    mutationKey: [AUTH_MUTATION_KEYS.UPDATE],
    mutationFn: updatePassword,
  });
};
