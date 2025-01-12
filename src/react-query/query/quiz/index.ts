import { useQuery, UseQueryResult } from "react-query";
import { COUNTRIES_QUERY_KEYS } from "./enum";
import { getCountry } from "@/api/quiz";
import { Country } from "@/api/quiz/index.types";

export const useGetCountry = (
  countryName: string | null,
): UseQueryResult<Country[], Error> => {
  return useQuery<Country[], Error>({
    queryKey: [COUNTRIES_QUERY_KEYS.COUNTRY_FLAG, countryName],
    queryFn: () => getCountry(countryName),
    enabled: !!countryName,
  });
};
