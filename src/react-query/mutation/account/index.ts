import { fillProfileInfo, fillProfilePoint } from "@/supabase/account";
import { FillProfilePoints, ProfileForm } from "@/supabase/account/index.types";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { PROFILE_MUTATION_KEYS } from "./enum";

export const useFillProfileInfo = (
  options?: UseMutationOptions<null, Error, ProfileForm, unknown>,
): UseMutationResult<null, Error, ProfileForm, unknown> => {
  return useMutation<null, Error, ProfileForm, unknown>({
    mutationKey: [PROFILE_MUTATION_KEYS.FILLPROFILE],
    mutationFn: fillProfileInfo,
    ...options,
  });
};

export const useFillProfilePoint = () => {
  return useMutation({
    mutationKey: [PROFILE_MUTATION_KEYS.FILLPOINTS],
    mutationFn: (payload: FillProfilePoints) => fillProfilePoint(payload),
  });
};
