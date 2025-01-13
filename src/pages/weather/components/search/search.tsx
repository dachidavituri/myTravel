import Error from "@/components/error-message";
import { searchWeatherSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "antd";
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import qs from "qs";
import { useSearchParams } from "react-router";
import { WeatherSearchProps } from "../index.types";
import { useTranslation } from "react-i18next";

const WeatherSearch: React.FC<WeatherSearchProps> = ({ onSearch }) => {
  type SearchWeather = z.infer<typeof searchWeatherSchema>;
  const [searchParams, setSearchParams] = useSearchParams();
  const searchWeatherDefaultValues = qs.parse(searchParams.toString());
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchWeather>({
    resolver: zodResolver(searchWeatherSchema),
    defaultValues: searchWeatherDefaultValues as SearchWeather,
  });

  const onSubmit: SubmitHandler<SearchWeather> = (data) => {
    if (data.country) {
      onSearch(data.country);
      setSearchParams(
        qs.stringify(data, {
          skipNulls: true,
          filter: (_, value) => value || undefined,
        }),
      );
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <Input {...field} placeholder="Enter Country Name" size="large" />
          )}
        />
        {errors.country && <Error message={t(`${errors?.country.message}`)} />}
      </div>

      <Button
        variant="solid"
        color="danger"
        className="mt-4 font-semibold"
        htmlType="submit"
      >
        {t("weather.search")}
      </Button>
    </form>
  );
};

export default WeatherSearch;
