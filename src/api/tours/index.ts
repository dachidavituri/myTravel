import { ExchangeRateAPIResponse } from "./index.types";
import { htttpCurrenyClinet } from "..";

export const getCurrency = async () => {
  try {
    const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;
    const response = await htttpCurrenyClinet.get<ExchangeRateAPIResponse>(
      `${apiKey}/latest/USD`,
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching Currency data:", error);
    throw new Error("Error fetching Currency data");
  }
};
