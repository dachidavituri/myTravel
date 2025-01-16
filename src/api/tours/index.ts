import axios from "axios";
import { ExchangeRateAPIResponse } from "./index.types";

export const getCurrency = async () => {
  try {
    const response = await axios.get<ExchangeRateAPIResponse>(
      `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_CURRENCY_API_KEY}/latest/USD`,
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching Currency data:", error);
    throw new Error("Error fetching Currency data");
  }
};
