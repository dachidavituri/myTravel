import Loading from "@/components/loading";
import React from "react";
import { FaSun, FaCloud, FaCloudSun, FaSnowflake } from "react-icons/fa";
import { WeatherDisplayProps } from "../index.types";
import { useTranslation } from "react-i18next";

const WeatherDay: React.FC<WeatherDisplayProps> = ({
  isLoading,
  weatherData,
}) => {
  const { t } = useTranslation();

  const getWeatherIcon = (temp: number) => {
    if (temp < 0) return <FaSnowflake className="text-blue-200" />;
    if (temp <= 10) return <FaCloud className="text-gray-400" />;
    if (temp <= 20) return <FaCloudSun className="text-yellow-300" />;
    return <FaSun className="text-yellow-300" />;
  };

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!weatherData) {
    return <div>{t("weather.noData")}</div>;
  }

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            {weatherData.name}
          </h2>
          <p className="text-lg text-gray-500">{weatherData.sys.country}</p>
        </div>
        <div className="text-5xl">{getWeatherIcon(weatherData.main.temp)}</div>
      </div>

      <div className="mb-6">
        <h3 className="text-5xl font-bold text-gray-800">
          {weatherData.main.temp}°C
        </h3>
        <p className="text-lg text-gray-500">
          Feels like: {weatherData.main.feels_like}°C
        </p>
        <p className="text-lg text-gray-600">
          {weatherData.weather[0].description}
        </p>
      </div>

      <div className="mt-4 text-lg text-gray-600">
        <p>Wind: {weatherData.wind.speed} m/s</p>
        <p>Gusts: {weatherData.wind.gust} m/s</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
      </div>
    </>
  );
};

export default WeatherDay;
