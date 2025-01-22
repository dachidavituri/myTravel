import { WeatherData } from "@/api/weather/index.types";
import { searchWeatherSchema } from "@/schema";
import { z } from "zod";

export interface WeatherDisplayProps {
  isLoading: boolean;
  weatherData: WeatherData | undefined;
}
export interface WeatherSearchProps {
  onSearch: (country: string) => void;
}
export type SearchWeather = z.infer<typeof searchWeatherSchema>;
