import { useQuery } from "react-query";
import { COUNTRIES_QUERY_KEYS } from "./enum";
import { getCountry } from "@/api/quiz";

export const useGetCountry = (countryName: string | null) => {
  return useQuery({
    queryKey: [COUNTRIES_QUERY_KEYS.COUNTRY_FLAG, countryName],
    queryFn: () => getCountry(countryName),
    enabled: !!countryName,
  });
};
