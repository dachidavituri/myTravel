import axios, { CreateAxiosDefaults } from "axios";

const axiosConfig: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_COUNTRIES_URL,
};

export const httpCountriesClient = axios.create(axiosConfig);
