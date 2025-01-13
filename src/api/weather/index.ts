import { httpWeatherClient } from "..";
import { WeatherData } from "./index.types";
export const GetWeather = async (
  lat: number,
  lon: number,
): Promise<WeatherData> => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const response = await httpWeatherClient.get<WeatherData>(
    `weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
  );
  return response.data;
};
