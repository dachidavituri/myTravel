import { useMutation, UseMutationResult } from "react-query";
import { FEEDBACK_MUTATION_KEYS } from "./enum";
import { addFeedback, deleteFeedback } from "@/supabase/feedback";
import {
  addFeedbackPayload,
  deleteFeedbackPayload,
} from "@/supabase/feedback/index.types";

export const useAddFeedback = (): UseMutationResult<
  null,
  Error,
  addFeedbackPayload,
  unknown
> => {
  return useMutation<null, Error, addFeedbackPayload, unknown>({
    mutationKey: [FEEDBACK_MUTATION_KEYS.ADD_FEEDBACK],
    mutationFn: (payload: addFeedbackPayload) => addFeedback(payload),
  });
};

export const useDeleteFeedback = (): UseMutationResult<
  unknown,
  Error,
  deleteFeedbackPayload,
  unknown
> => {
  return useMutation<unknown, Error, deleteFeedbackPayload, unknown>({
    mutationKey: [FEEDBACK_MUTATION_KEYS.DELETE_FEEDBACK],
    mutationFn: (payload: deleteFeedbackPayload) => deleteFeedback(payload),
  });
};
