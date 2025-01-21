import { supabase } from "..";
import { addBookPayload, bookedTours } from "./index.types";

export const addBook = async ({
  userId,
  tourId,
  bookingDate,
}: addBookPayload) => {
  const { data, error } = await supabase.from("booking").insert([
    {
      user_id: userId,
      tour_id: tourId,
      booking_date: bookingDate,
    },
  ]);

  if (error) {
    console.log(error);
  }
  return data;
};

export const getBookedTours = async ({
  userId,
}: {
  userId: string | null;
}): Promise<bookedTours[] | undefined> => {
  if (userId) {
    const { data, error } = await supabase
      .from("booking")
      .select("booking_date, tours(*)")
      .eq("user_id", userId);
    if (error) {
      console.log(error);
    } else {
      return data as bookedTours[];
    }
  }
};
