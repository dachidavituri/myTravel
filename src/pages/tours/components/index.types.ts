import { tourSchemaWithoutImg } from "@/schema";
import { ToursResponse } from "@/supabase/tours/index.types";
import { z } from "zod";

export interface TourFormValues {
  tourName: string;
  img: File | null;
  country: string;
  description: string;
  location: string;
  price: number;
  duration: number;
  type: string;
  airport: string;
  hotel: string;
  city: string;
}
export type EditTour = z.infer<typeof tourSchemaWithoutImg>;

export type TourCardProps = {
  tour: ToursResponse;
  onEdit: () => void;
  onDelete: (tourId: number, imgPath: string | null) => void;
};

export type EditTourFormProps = {
  defaultValues: z.infer<typeof tourSchemaWithoutImg>;
  onSubmit: (values: EditTour) => void;
};

export interface SeachFilterValue {
  search: string;
}

export interface SearchProps {
  setSearched: React.Dispatch<React.SetStateAction<string>>;
}

export type SelectedTour = ToursResponse | null;
