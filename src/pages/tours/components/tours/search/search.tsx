import { Controller, useForm } from "react-hook-form";
import { SeachFilterValue } from "../../index.types";
import { useSearchParams } from "react-router";
import qs from "qs";
import { useEffect } from "react";
import { Input } from "antd";

interface SearchProps {
  setSearched: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ setSearched }) => {
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
      setSearched(searched); // Update the searched value in parent
    } else {
      setSearchParams({}, { replace: true });
      setSearched(""); // Clear the searched value if empty
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
            placeholder="Search Tour"
            value={field.value || ""}
          />
        )}
      />
    </form>
  );
};
export default Search;
