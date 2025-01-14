import { useMutation, UseMutationResult } from "react-query";
import { GALLERY_MUTATION_KEYS } from "./enum";
import { uploadImageToGallery } from "@/supabase/gallery";
import { UploadImageResult } from "@/supabase/gallery/index.types";

export const useUploadImageToGallery = (): UseMutationResult<
  UploadImageResult,
  Error,
  File | null,
  unknown
> => {
  return useMutation<UploadImageResult, Error, File | null, unknown>({
    mutationKey: [GALLERY_MUTATION_KEYS.UPLOAD_IMAGE_GALLERY],
    mutationFn: uploadImageToGallery,
  });
};
