import { useEffect, useState } from "react";

const useSort = data => {
  const [sortedData, setSortedData] = useState(data);

  /**
   * Sort by ascending or descending
   *
   * @param {string} column column to be sort
   * @param {string} direction direction of the sort (asc or desc)
   */
  const onSort = (column, direction) => {
    const dataCopy = [...data];

    // process sort
    dataCopy.sort((a, b) => {
      if (direction === "asc") {
        return a[column] > b[column] ? 1 : -1;
      }
      return a[column] < b[column] ? 1 : -1;
    });
    setSortedData(dataCopy);
  };

  // Run sort when the application is mounted
  useEffect(() => {
    setSortedData(data);
  }, [data]);

  return { onSort, sortedData };
};

export default useSort;
