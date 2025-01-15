import axios from "axios";
import { ExchangeRateAPIResponse } from "./index.types";

export const getCurrency = async () => {
  try {
    const response = await axios.get<ExchangeRateAPIResponse>(
      `https://v6.exchangerate-api.com/v6/ac3f7c68ee27ce2162e68520/latest/USD`,
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching Currency data:", error);
    throw new Error("Error fetching Currency data");
  }
};
