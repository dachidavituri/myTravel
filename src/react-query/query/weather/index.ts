import { useQuery, UseQueryResult } from "react-query";
import { WeatherData } from "@/api/weather/index.types";
import { WEATHER_QUERY_KEYS } from "./enum";
import { GetWeather } from "@/api/weather";

export const useGetWeather = (
  lat: number,
  lon: number,
): UseQueryResult<WeatherData, Error> => {
  return useQuery<WeatherData, Error>({
    queryKey: [WEATHER_QUERY_KEYS.WEATHHER],
    queryFn: () => GetWeather(lat, lon),
    enabled: !!lat || !!lon,
    cacheTime: 0,
  });
};
