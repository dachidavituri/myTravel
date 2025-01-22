import axios, { CreateAxiosDefaults } from "axios";

const axiosConfigCountry: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_COUNTRIES_URL,
};
const axiosConfigWeather: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_WEATHER_URL,
};
const axiosConfigCurrency: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_CURRENCY_URL,
};

export const httpCountriesClient = axios.create(axiosConfigCountry);

export const httpWeatherClient = axios.create(axiosConfigWeather);

export const htttpCurrenyClinet = axios.create(axiosConfigCurrency);
