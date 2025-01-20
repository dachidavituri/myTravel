import { addBookPayload } from "@/supabase/book/index.types";
import { UseMutationResult } from "react-query/types/react/types";
import { BOOK_MUTATION_KEYS } from "./enum";
import { addBook } from "@/supabase/book";
import { useMutation } from "react-query";

export const useAddBook = (): UseMutationResult<
  null,
  Error,
  addBookPayload,
  unknown
> => {
  return useMutation<null, Error, addBookPayload, unknown>({
    mutationKey: [BOOK_MUTATION_KEYS.ADD_BOOK],
    mutationFn: (payload: addBookPayload) => addBook(payload),
  });
};
