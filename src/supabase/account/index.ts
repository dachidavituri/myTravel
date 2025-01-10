import { supabase } from "..";
import { FillProfilePoints, Profile, ProfileForm } from "./index.types";

export const fillProfileInfo = async (payload: ProfileForm) => {
  const { data, error } = await supabase.from("profiles").upsert(payload);
  if (error) {
    if (error.code === "23505") {
      throw new Error(`Username is already taken`);
    }
    throw error;
  }
  return data;
};

// Updated function using the payload
export const fillProfilePoint = async (payload: FillProfilePoints) => {
  const { points, userId, quizCompleted } = payload;

  const { data, error } = await supabase
    .from("profiles")
    .update({ points, quiz_completed: quizCompleted })
    .eq("id", userId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getProfile = async (profileId: string) => {
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", profileId);

  return data as Profile[];
};
