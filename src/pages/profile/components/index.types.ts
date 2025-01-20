import { bookedTours } from "@/supabase/book/index.types";
import { TourData } from "@/supabase/favourite/index.types";

export interface InfoRowProps {
  label: string;
  value?: string | null;
}
export interface ProfileProps {
  tData: TourData[] | undefined;
  bData: bookedTours[] | undefined;
}
