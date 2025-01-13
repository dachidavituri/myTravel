import axios, { CreateAxiosDefaults } from "axios";

const axiosConfigCountry: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_COUNTRIES_URL,
};
const axiosConfigWeather: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_WEATHER_URL,
};

export const httpCountriesClient = axios.create(axiosConfigCountry);

export const httpWeatherClient = axios.create(axiosConfigWeather);
