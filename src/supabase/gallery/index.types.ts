import { StorageError } from "@supabase/storage-js";
export interface UploadImageResult {
  data: {
    id: string;
    path: string;
    fullPath: string;
  } | null;
  error: string | StorageError | null;
}
export interface GalleryResponse {
  id: number;
  image_url: string | null;
}
