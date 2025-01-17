import { getAllFeedBacks, getFeedbackByTour } from "@/supabase/feedback";
import { useQuery, UseQueryResult } from "react-query";
import { FEEDBACK_QUERY_KEYS } from "./enum";
import {
  FeedbackData,
  FeedbackResponse,
} from "@/supabase/feedback/index.types";

export const useGetFeedBacksByTour = (
  tourId: number,
): UseQueryResult<FeedbackData, Error> => {
  return useQuery<FeedbackData, Error>({
    queryKey: [FEEDBACK_QUERY_KEYS.FEEDBACKS_TOUR, tourId],
    queryFn: () => getFeedbackByTour(tourId),
  });
};

export const useGetFeedAllFeedbacks = (): UseQueryResult<
  FeedbackResponse[] | null,
  Error
> => {
  return useQuery<FeedbackResponse[] | null, Error>({
    queryKey: [FEEDBACK_QUERY_KEYS.ALL_FEEDBACK],
    queryFn: getAllFeedBacks,
  });
};
