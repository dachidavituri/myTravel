import { supabase } from "..";
import { GalleryResponse, UploadImageResult } from "./index.types";

export const uploadImageToGallery = async (
  image_url: File | null,
): Promise<UploadImageResult> => {
  if (!image_url) {
    return { data: null, error: "No image file provided" };
  }

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("gallery")
    .upload(image_url.name, image_url);

  if (uploadError) {
    console.error("Upload error:", uploadError);
    return { data: null, error: uploadError.message };
  }

  const { data: insertData, error: insertError } = await supabase
    .from("gallery")
    .insert({
      image_url: uploadData?.fullPath,
    })
    .single();

  if (insertError) {
    console.error("Insert error:", insertError);
    return { data: null, error: insertError.message };
  }

  console.log("Upload and insert successful:", insertData);
  return { data: insertData, error: null };
};

export const getGalleryImages = async (): Promise<GalleryResponse[] | null> => {
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .throwOnError();
  if (error) {
    console.log(error);
  }
  return data;
};
