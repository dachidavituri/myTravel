import { supabase } from "..";
import { UploadImageResult } from "./index.types";

export const uploadImageToGallery = async (
  image_url: File | null,
): Promise<UploadImageResult> => {
  if (!image_url) {
    return { data: null, error: "No image file provided" };
  }
  const { data, error } = await supabase.storage
    .from("gallery")
    .upload(image_url.name, image_url);

  if (error) {
    console.error("Upload error:", error);
    return { data: null, error };
  }

  console.log("Upload successful:", data);
  return { data, error: null };
};
