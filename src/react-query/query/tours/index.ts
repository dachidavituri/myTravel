import { useQuery, UseQueryResult } from "react-query";
import { getReccomendTour, getTours, getToursById } from "@/supabase/tours";
import { TOURS_QUERY_KEYS } from "./enum";
import { ToursResponse } from "@/supabase/tours/index.types";
import { getCurrency } from "@/api/tours";
import { ExchangeRateAPIResponse } from "@/api/tours/index.types";

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

export const useGetTourById = (
  id: number,
): UseQueryResult<ToursResponse, Error> => {
  return useQuery<ToursResponse, Error>({
    queryKey: [TOURS_QUERY_KEYS.DETAILTOUR, id],
    queryFn: () => getToursById(id),
  });
};

export const useGetReccomendTour = (
  tour: string,
): UseQueryResult<ToursResponse[] | null, Error> => {
  return useQuery<ToursResponse[] | null, Error>({
    queryKey: [TOURS_QUERY_KEYS.RECCOMEND, tour],
    queryFn: () => getReccomendTour(tour),
  });
};

export const useGetCurrency = (): UseQueryResult<
  ExchangeRateAPIResponse,
  Error
> => {
  return useQuery<ExchangeRateAPIResponse, Error>({
    queryKey: [TOURS_QUERY_KEYS.CURRENCY],
    queryFn: getCurrency,
  });
};
