import { useMemo, useState } from "react";
import { UsePaginationProps } from "./index.types";

const usePagination = <T>({ data, pageSize }: UsePaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

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
