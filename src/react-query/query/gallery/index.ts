import { useQuery, UseQueryResult } from "react-query";
import { QUERY_GALLERY_IMAGES } from "./enum";
import { getGalleryImages } from "@/supabase/gallery";
import { GalleryResponse } from "@/supabase/gallery/index.types";

export const useGetGalleryImages = (): UseQueryResult<
  GalleryResponse[] | null,
  Error
> => {
  return useQuery<GalleryResponse[] | null, Error>({
    queryKey: [QUERY_GALLERY_IMAGES.GALLERY_IMAGES],
    queryFn: getGalleryImages,
  });
};
