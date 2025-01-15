import { useQuery, UseQueryResult } from "react-query";

import { getTours } from "@/supabase/tours";
import { TOURS_QUERY_KEYS } from "./enum";
import { ToursResponse } from "@/supabase/tours/index.types";

export const useGetTours = ({
  search,
}: {
  search: string;
}): UseQueryResult<ToursResponse[] | null, Error> => {
  return useQuery<ToursResponse[] | null, Error>({
    queryKey: [TOURS_QUERY_KEYS.TOURS, search],
    queryFn: () => getTours({ search }),
  });
};
