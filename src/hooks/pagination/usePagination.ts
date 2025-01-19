import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { UsePaginationProps } from "./index.types";

const usePagination = <T>({
  data,
  pageSize,
  initialPage = 1,
}: UsePaginationProps<T>) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || initialPage,
  );

  useEffect(() => {
    if (currentPage === 1) {
      searchParams.delete("page");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ page: String(currentPage) }, { replace: true });
    }
  }, [currentPage, setSearchParams, searchParams]);

  const paginatedData = useMemo(() => {
    if (data) {
      const startIdx = (currentPage - 1) * pageSize;
      const endIdx = currentPage * pageSize;
      return data.slice(startIdx, endIdx);
    }
    return [];
  }, [data, currentPage, pageSize]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    paginatedData,
    handlePageChange,
  };
};

export default usePagination;
