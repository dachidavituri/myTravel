import { supabase } from "..";
import { AddTourTypes, ToursResponse } from "./index.types";

export const addTour = async ({
  payload,
}: {
  payload: AddTourTypes;
}): Promise<void> => {
  try {
    if (payload.img) {
      const res = await supabase.storage
        .from("tours")
        .upload(payload.img.name, payload.img);
      const insertRes = await supabase.from("tours").insert({
        tourName: payload.tourName,
        img: res.data?.fullPath,
        country: payload.country,
        description: payload.description,
        location: payload.location,
        price: payload.price,
        duration: payload.duration,
        type: payload.type,
        airport: payload.airport,
        hotel: payload.hotel,
      });
      if (insertRes.error) {
        throw new Error(insertRes.error.message);
      }
      console.log("Successfully created", insertRes);
    }
  } catch (error) {
    console.log("error creating tour", error);
  }
};

export const getTours = async (): Promise<ToursResponse[] | null> => {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .throwOnError();
  if (error) {
    console.log(error);
  }
  return data;
};

export const editTour = () => {};

export const deleteTour = async (
  tourId: number,
  imgPath?: string | null,
): Promise<void> => {
  try {
    if (imgPath) {
      const filename = imgPath.split("/").pop();
      if (filename) {
        const { error: imgError } = await supabase.storage
          .from("tours")
          .remove([filename]);

        console.log(`Attempting to delete image: ${filename}`);

        if (imgError) {
          throw new Error(`Error deleting image: ${imgError.message}`);
        } else {
          console.log(`Image deleted successfully: ${filename}`);
        }
      }
    }
    const { error: deleteError } = await supabase
      .from("tours")
      .delete()
      .eq("id", tourId);

    if (deleteError) {
      throw new Error(`Error deleting tour: ${deleteError.message}`);
    }

    console.log("Tour deleted successfully");
  } catch (error) {
    console.log("Error in deleteTour:", error);
  }
};
