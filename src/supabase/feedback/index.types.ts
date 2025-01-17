export interface addFeedbackPayload {
  userId: string | undefined;
  tourId: number | undefined;
  comment: string;
  stars: number;
}

export interface FeedbackResponse {
  comment: string | null;
  created_at: string;
  id: number;
  stars: number | null;
  tour_id: number | null;
  user_id: string | null;
  profiles?: Profile | null;
}

export interface deleteFeedbackPayload {
  feedbackId: number;
  userId: string | undefined;
}

interface Profile {
  username: string | null;
  avatar_url: string | null;
}

interface Feedback {
  id: number;
  comment: string | null;
  stars: number | null;
  user_id: string | undefined;
  created_at: string;
  profiles: Profile | null;
}

export type FeedbackData = Feedback[] | null;
