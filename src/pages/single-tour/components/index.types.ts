import { bookSchema, feedbackShema } from "@/schema";
import { ToursResponse } from "@/supabase/tours/index.types";
import { z } from "zod";

export interface TourProps {
  detailTour: ToursResponse;
}

export type CurrencyType = "usd" | "gel" | "eur";

export type FeedbackTypes = z.infer<typeof feedbackShema>;
export type FormValues = z.infer<typeof bookSchema>;

export interface FormProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
