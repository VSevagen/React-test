import { useMemo, useState } from "react";

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = useMemo(
    () => Math.ceil(data.length / itemsPerPage),
    [data, itemsPerPage]
  );

  // Check if next should be disabled
  const isDisabledNext = useMemo(
    () => currentPage === maxPage,
    [currentPage, maxPage]
  );

  // Check if previous should be disabled
  const isDisabledPrev = useMemo(() => currentPage === 1, [currentPage]);

  // Set current paginated data
  const paginatedData = useMemo(
    () =>
      data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [currentPage, data, itemsPerPage]
  );

  const onNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, maxPage));
  };

  const onPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  return {
    currentPage,
    paginatedData,
    maxPage,
    isDisabledPrev,
    isDisabledNext,
    onNextPage,
    onPrevPage,
  };
};

export default usePagination;
