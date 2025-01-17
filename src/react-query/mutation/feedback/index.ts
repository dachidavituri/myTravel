import { useMutation, UseMutationResult } from "react-query";
import { FEEDBACK_MUTATION_KEYS } from "./enum";
import { addFeedback, deleteFeedback, editFeedback } from "@/supabase/feedback";
import {
  addFeedbackPayload,
  deleteFeedbackPayload,
  updateFeedBackPayload,
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

export const useUpdateFeedback = (): UseMutationResult<
  null,
  Error,
  updateFeedBackPayload,
  unknown
> => {
  return useMutation<null, Error, updateFeedBackPayload, unknown>({
    mutationKey: [FEEDBACK_MUTATION_KEYS.EDIT_FEEDBACK],
    mutationFn: (payload: updateFeedBackPayload) => editFeedback(payload),
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
