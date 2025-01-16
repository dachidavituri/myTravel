import { supabase } from "..";
import { addFavoriteProps, TourData } from "./index.types";

export const addToFavourite = async ({ userId, tourId }: addFavoriteProps) => {
  return await supabase
    .from("favourite")
    .insert([{ tour_id: tourId, user_id: userId }]);
};

export const removeFromFavourite = async ({
  userId,
  tourId,
}: addFavoriteProps) => {
  return await supabase
    .from("favourite")
    .delete()
    .match({ tour_id: tourId, user_id: userId });
};

export const checkFavorited = async ({ userId, tourId }: addFavoriteProps) => {
  if (userId && tourId) {
    const { data, error } = await supabase
      .from("favourite")
      .select("*")
      .eq("user_id", userId)
      .eq("tour_id", tourId);

    if (error) {
      return { data: null };
    }
    return { data: data.length > 0 ? data[0] : null };
  }
};

export const getFavouriteTours = async ({
  userId,
}: {
  userId: string | null;
}): Promise<TourData[] | undefined> => {
  if (userId) {
    const { data, error } = await supabase
      .from("favourite")
      .select("tours(*)")
      .eq("user_id", userId);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      return data as TourData[];
    }
  }
};
