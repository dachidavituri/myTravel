import { bookedTours } from "@/supabase/book/index.types";
import { useQuery, UseQueryResult } from "react-query";
import { BOOK_QUERY_KEYS } from "./enum";
import { getBookedTours } from "@/supabase/book";

export const useGetBookedTours = ({
  userId,
}: {
  userId: string | null;
}): UseQueryResult<bookedTours[] | undefined, Error> => {
  return useQuery<bookedTours[] | undefined, Error>({
    queryKey: [BOOK_QUERY_KEYS.BOOKED_TOURS, userId],
    queryFn: () => getBookedTours({ userId }),
  });
};
