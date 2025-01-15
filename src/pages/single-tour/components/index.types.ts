import { ToursResponse } from "@/supabase/tours/index.types";

export interface TourProps {
  detailTour: ToursResponse;
}

export type CurrencyType = "usd" | "gel" | "eur";
