import { useState } from "react";

const useSort = data => {
  const [sortedData, setSortedData] = useState(data);

  const onSort = (column, direction) => {
    const dataCopy = [...data];
    dataCopy.sort((a, b) => {
      if (direction === "asc") {
        return a[column] > b[column] ? 1 : -1;
      }
      return a[column] < b[column] ? 1 : -1;
    });
    setSortedData(dataCopy);
  };

  return { onSort, sortedData };
};

export default useSort;
