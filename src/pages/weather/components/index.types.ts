import { WeatherData } from "@/api/weather/index.types";

export interface WeatherDisplayProps {
  isLoading: boolean;
  weatherData: WeatherData | undefined;
}
export interface WeatherSearchProps {
  onSearch: (country: string) => void;
}
