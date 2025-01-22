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

      if (res.error) {
        throw new Error(`Error uploading image: ${res.error.message}`);
      }
      const insertRes = await supabase.from("tours").insert({
        tourName: payload.tourName,
        img: res.data?.fullPath,
        country: payload.country,
        city: payload.city,
        description: payload.description,
        location: payload.location,
        price: payload.price,
        duration: payload.duration,
        type: payload.type,
        airport: payload.airport,
        hotel: payload.hotel,
      });

      if (insertRes.error) {
        throw new Error(`Error inserting tour: ${insertRes.error.message}`);
      }

      console.log("Successfully created", insertRes);
    }
  } catch (error) {
    console.error("Error creating tour:", error);
  }
};

export const getTours = async ({
  search,
}: {
  search: string;
}): Promise<ToursResponse[] | null> => {
  const query = supabase.from("tours").select("*");
  if (search && search.length > 2) {
    query.or(`country.ilike.%${search}%, city.ilike.%${search}%`);
  }
  const { data } = await query.throwOnError();
  return data as ToursResponse[];
};

export const getReccomendTour = async (
  type: string,
): Promise<ToursResponse[] | null> => {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .eq("type", type);
  if (error) {
    throw new Error(`Error fetching reccoment tours, ${error.message}`);
  }
  return data;
};

export const editTour = async (
  tour: Omit<AddTourTypes, "img">,
  id: number,
): Promise<void> => {
  try {
    const { data, error } = await supabase
      .from("tours")
      .update({
        tourName: tour.tourName,
        country: tour.country,
        city: tour.city,
        description: tour.description,
        location: tour.location,
        price: tour.price,
        duration: tour.duration,
        type: tour.type,
        airport: tour.airport,
        hotel: tour.hotel,
      })
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }
    console.log("Tour updated successfully", data);
  } catch (error) {
    console.error("Error editing tour", error);
  }
};

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

export const getToursById = async (id: number) => {
  return await supabase
    .from("tours")
    .select("*")
    .eq("id", id)
    .single()
    .throwOnError()
    .then((res) => res.data as ToursResponse);
};
