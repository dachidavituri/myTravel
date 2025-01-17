import { supabase } from "..";
import {
  addFeedbackPayload,
  deleteFeedbackPayload,
  FeedbackData,
  FeedbackResponse,
} from "./index.types";

export const addFeedback = async ({
  userId,
  tourId,
  comment,
  stars,
}: addFeedbackPayload) => {
  const { data, error } = await supabase.from("feedback").insert([
    {
      user_id: userId,
      tour_id: tourId,
      comment: comment,
      stars: stars,
    },
  ]);

  if (error) {
    console.log(error);
  }
  return data;
};

export const getFeedbackByTour = async (
  tourId: number,
): Promise<FeedbackData> => {
  const { data, error } = await supabase
    .from("feedback")
    .select(
      `
      id,
      comment,
      stars,
      created_at,
      user_id,
      profiles(username, avatar_url)
    `,
    )
    .eq("tour_id", tourId)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
  }
  return data as FeedbackData;
};

export const getAllFeedBacks = async (): Promise<FeedbackResponse[] | null> => {
  const { data, error } = await supabase
    .from("feedback")
    .select("*, profiles(username, avatar_url)")
    .order("stars", { ascending: false })
    .limit(3)
    .throwOnError();
  if (error) {
    console.log(error);
  }
  return data;
};

export const deleteFeedback = async ({
  feedbackId,
  userId,
}: deleteFeedbackPayload) => {
  if (userId) {
    const { data, error } = await supabase
      .from("feedback")
      .delete()
      .eq("id", feedbackId)
      .eq("user_id", userId);

    if (error) {
      console.log(error);
    }
    return data;
  }
};
