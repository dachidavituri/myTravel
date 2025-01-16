import { supabase } from "..";
import {
  FillProfilePoints,
  FillProfileType,
  Profile,
  ProfileForm,
} from "./index.types";

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

export const fillProfileType = async (payload: FillProfileType) => {
  const { userId, tourType } = payload;

  const { data, error } = await supabase
    .from("profiles")
    .update({ type: tourType })
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

export const getAllProfile = async () => {
  const { data } = await supabase.from("profiles").select("*").throwOnError();
  return data as Profile[];
};
