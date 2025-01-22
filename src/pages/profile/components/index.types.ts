import { Profile } from "@/supabase/account/index.types";
import { bookedTours } from "@/supabase/book/index.types";
import { TourData } from "@/supabase/favourite/index.types";

export interface InfoRowProps {
  label: string;
  value?: string | null;
}

export interface ItemsProps {
  tData: TourData[] | undefined;
  bData: bookedTours[] | undefined;
  data: Profile[] | undefined;
}

export interface FavouriteProps {
  tData: TourData[] | undefined;
  bData: bookedTours[] | undefined;
}

export interface InfoProps {
  data: Profile[] | undefined;
}
