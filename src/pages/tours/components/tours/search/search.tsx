import { Controller, useForm } from "react-hook-form";
import { SeachFilterValue, SearchProps } from "../../index.types";
import { useSearchParams } from "react-router";
import qs from "qs";
import { useEffect } from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";

const Search: React.FC<SearchProps> = ({ setSearched }) => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultFilterValues = qs.parse(searchParams.toString());

  const { control, watch } = useForm<SeachFilterValue>({
    defaultValues: defaultFilterValues,
  });

  const searched = watch("search");

  useEffect(() => {
    if (searched) {
      setSearchParams(
        qs.stringify(
          { search: searched },
          { skipNulls: true, filter: (_, value) => value || undefined },
        ),
      );
      setSearched(searched);
    } else {
      setSearchParams({}, { replace: true });
      setSearched("");
    }
  }, [searched, setSearchParams, setSearched]);

  return (
    <form className="max-w-sm">
      <Controller
        control={control}
        name="search"
        render={({ field }) => (
          <Input
            {...field}
            placeholder={t("tour.search")}
            value={field.value || ""}
          />
        )}
      />
    </form>
  );
};
export default Search;
