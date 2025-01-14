import React, { useEffect, useState } from "react";
import { useGetWeather } from "@/react-query/query/weather";
import { useGetCountry } from "@/react-query/query/quiz";
import WeatherSearch from "#/weather/components/search";
import WeatherDay from "#/weather/components/dayweather";
import qs from "qs";
import { useSearchParams } from "react-router";
import Error from "@/components/error-message";
import { useTranslation } from "react-i18next";

const WeatherView: React.FC = () => {
  const { t } = useTranslation();

  const [searchParams] = useSearchParams();
  const [countryName, setCountryName] = useState<string>("");

  const { data: countryData, error } = useGetCountry(countryName || "");
  const latLng =
    countryData && countryData.length > 0 ? countryData[0].latlng : [0, 0];

  const { data: weatherData, isLoading } = useGetWeather(latLng[0], latLng[1]);

  useEffect(() => {
    const params = qs.parse(searchParams.toString());
    if (params.country) {
      setCountryName(params.country as string);
    }
  }, [searchParams]);

  const handleSearch = (country: string) => {
    setCountryName(country.trim());
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-8 py-12 dark:bg-black">
      <div className="w-full transform rounded-xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl md:w-96 lg:w-1/2">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-700">
          {t(`weather.prediction`)}
        </h1>
        <WeatherSearch onSearch={handleSearch} />
        {!error && (
          <WeatherDay isLoading={isLoading} weatherData={weatherData} />
        )}
        {error && <Error message={t(`${error.message}`)} />}
      </div>
    </div>
  );
};

export default WeatherView;
