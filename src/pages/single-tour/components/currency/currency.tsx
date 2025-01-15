import { FaDollarSign, FaEuroSign } from "react-icons/fa";
import { BsCurrencyPound } from "react-icons/bs";
import { CurrencyType, TourProps } from "../index.types";
import { useEffect, useState } from "react";
import { useGetCurrency } from "@/react-query/query/tours";
import { bookBtnStyles, buttonStyles } from "./currency-cva";

const Currency: React.FC<TourProps> = ({ detailTour }) => {
  const [convertedPrice, setConvertedPrice] = useState<{
    usd: number | null;
    gel: number | null;
    eur: number | null;
  } | null>(null);

  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>("usd");

  const { data: exchangeRateData } = useGetCurrency();

  const currencyIcons = {
    usd: <FaDollarSign className="text-green-500" />,
    gel: <BsCurrencyPound className="text-purple-500" />,
    eur: <FaEuroSign className="text-blue-500" />,
  };

  const displayPrice = convertedPrice
    ? convertedPrice[selectedCurrency]?.toFixed(2)
    : null;

  useEffect(() => {
    if (detailTour?.price && exchangeRateData?.conversion_rates) {
      const { conversion_rates: rates } = exchangeRateData;
      setConvertedPrice({
        usd: detailTour.price,
        gel: rates.GEL ? detailTour.price * rates.GEL : null,
        eur: rates.EUR ? detailTour.price * rates.EUR : null,
      });
    }
  }, [detailTour, exchangeRateData]);

  return (
    <div className="space-y-4 rounded-lg border bg-white p-6 shadow-lg">
      <div className="space-y-2 text-center">
        <span className="text-lg font-medium text-gray-600">Price:</span>
        <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-blue-600">
          {currencyIcons[selectedCurrency]}
          <span>{displayPrice || "N/A"}</span>
        </div>
      </div>

      <div className="flex justify-center space-x-4 p-2">
        {Object.keys(currencyIcons).map((currency) => (
          <button
            key={currency}
            className={buttonStyles({
              selected: selectedCurrency === currency,
            })}
            onClick={() => setSelectedCurrency(currency as CurrencyType)}
          >
            {currencyIcons[currency as CurrencyType]}
            <span className="capitalize">{currency.toUpperCase()}</span>
          </button>
        ))}
      </div>

      <button className={bookBtnStyles()}>Book Now</button>
    </div>
  );
};

export default Currency;
