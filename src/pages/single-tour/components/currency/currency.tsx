import { FaDollarSign, FaEuroSign } from "react-icons/fa";
import { BsCurrencyPound } from "react-icons/bs";
import { CurrencyType, TourProps } from "../index.types";
import { useEffect, useState } from "react";
import { useGetCurrency } from "@/react-query/query/tours";
import { bookBtnStyles, buttonStyles } from "./currency-cva";
import { useGetProfile } from "@/react-query/query/account";
import { loginAtom } from "@/store";
import { useAtomValue } from "jotai";
import { useTranslation } from "react-i18next";
import Form from "./form";

const Currency: React.FC<TourProps> = ({ detailTour }) => {
  const { t } = useTranslation();
  const user = useAtomValue(loginAtom);

  const { data } = useGetProfile({
    id: user?.user.id ?? "",
    queryOptions: { enabled: !!user?.user.id },
  });

  const [convertedPrice, setConvertedPrice] = useState<{
    usd: number | null;
    gel: number | null;
    eur: number | null;
  } | null>(null);

  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>("usd");
  const [isDiscounted, setIsDiscounted] = useState(false);

  const { data: exchangeRateData } = useGetCurrency();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const currencyIcons = {
    usd: <FaDollarSign className="text-green-500" />,
    gel: <BsCurrencyPound className="text-purple-500" />,
    eur: <FaEuroSign className="text-blue-500" />,
  };

  const displayPrice = convertedPrice
    ? convertedPrice[selectedCurrency]?.toFixed(2)
    : null;

  const discountedPrice = convertedPrice
    ? (convertedPrice[selectedCurrency] &&
        (convertedPrice[selectedCurrency] * 0.85).toFixed(2)) ||
      null
    : null;

  useEffect(() => {
    if (detailTour?.price && exchangeRateData?.conversion_rates) {
      const { conversion_rates: rates } = exchangeRateData;
      setConvertedPrice({
        usd: detailTour.price,
        gel: rates.GEL ? detailTour.price * rates.GEL : null,
        eur: rates.EUR ? detailTour.price * rates.EUR : null,
      });

      if (data?.[0]?.points === 750) {
        setIsDiscounted(true);
      } else {
        setIsDiscounted(false);
      }
    }
  }, [detailTour, exchangeRateData, data]);

  return (
    <div className="space-y-4 rounded-lg border bg-white p-6 shadow-lg">
      <div className="space-y-2 text-center">
        <span className="text-lg font-medium text-gray-600">Price:</span>
        <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-blue-600">
          {currencyIcons[selectedCurrency]}
          {isDiscounted && displayPrice ? (
            <>
              <span className="text-lg font-semibold text-gray-500 line-through">
                {displayPrice}
              </span>
              <span>{discountedPrice || "N/A"}</span>
            </>
          ) : (
            convertedPrice && (
              <p>{convertedPrice[selectedCurrency]?.toFixed(2)}</p>
            )
          )}
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
            <span className="font-semibold capitalize text-black">
              {currency.toUpperCase()}
            </span>
          </button>
        ))}
      </div>
      <button
        className={bookBtnStyles()}
        onClick={() => setIsModalVisible(true)}
      >
        {t("detail.book")}
      </button>
      <Form
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
};

export default Currency;
