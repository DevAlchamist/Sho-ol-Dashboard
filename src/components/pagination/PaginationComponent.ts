import { useState } from "react";

interface PaginationResult<Item> {
  displayItems: Item[];
  totalPages: number;
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const usePagination = <T extends unknown>(data: T[], itemsPerPage: number): PaginationResult<T> => {
  const [page, setPage] = useState<number>(1);

  const displayItemsForPage = (pageNumber: number): T[] => {
    const startIndex: number = (pageNumber - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const getTotalPages = (): number => {
    return Math.ceil(data.length / itemsPerPage);
  };

  return {
    displayItems: displayItemsForPage(page),
    totalPages: getTotalPages(),
    currentPage: page,
    setPage,
    handleChange,
  };
};

export default usePagination;
