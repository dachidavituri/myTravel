import { useMutation, UseMutationResult } from "react-query";
import { FAVOURITE_MUTATION_KEYS } from "./enum";
import { addToFavourite, removeFromFavourite } from "@/supabase/favourite";
import { addFavoriteProps } from "@/supabase/favourite/index.types";

export const useAddToFavourite = (): UseMutationResult<
  unknown,
  Error,
  addFavoriteProps,
  unknown
> => {
  return useMutation<unknown, Error, addFavoriteProps, unknown>({
    mutationKey: [FAVOURITE_MUTATION_KEYS.ADD_FAVOURITE],
    mutationFn: addToFavourite,
  });
};

export const useRemoveFromFavourite = (): UseMutationResult<
  unknown,
  Error,
  addFavoriteProps,
  unknown
> => {
  return useMutation<unknown, Error, addFavoriteProps, unknown>({
    mutationKey: [FAVOURITE_MUTATION_KEYS.REMOVE_FAVOURITE],
    mutationFn: removeFromFavourite,
  });
};
