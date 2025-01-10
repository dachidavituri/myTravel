import { httpCountriesClient } from "..";
import { Country } from "./index.types";

export const getCountry = async (name: string | null) => {
  return await httpCountriesClient
    .get<Country[]>(`/${name}`)
    .then((res) => res.data);
};
