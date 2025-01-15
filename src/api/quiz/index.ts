import { httpCountriesClient } from "..";
import { Country } from "./index.types";

export const getCountry = async (name: string | null) => {
  try {
    const response = await httpCountriesClient.get<Country[]>(`/${name}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching country data:", error);
    throw new Error("Error fetching country data");
  }
};
