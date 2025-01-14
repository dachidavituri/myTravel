import { useQuery, UseQueryResult } from "react-query";
import { GALLERY_QUERY_KEYS } from "./enum";
import { getGalleryImages } from "@/supabase/gallery";
import { GalleryResponse } from "@/supabase/gallery/index.types";

export const useGetGalleryImages = (): UseQueryResult<
  GalleryResponse[] | null,
  Error
> => {
  return useQuery<GalleryResponse[] | null, Error>({
    queryKey: [GALLERY_QUERY_KEYS.GALLERY_IMAGES],
    queryFn: getGalleryImages,
  });
};
