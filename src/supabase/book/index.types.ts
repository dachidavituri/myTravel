import { Tour } from "../favourite/index.types";

export interface addBookPayload {
  userId: string | undefined;
  tourId: number | undefined;
  bookingDate: string | null;
}

export interface bookedTours {
  tours: Tour;
  booking_date: string | null;
}
