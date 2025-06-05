import { useState } from "react";

const useSearch = data => {
  const [results, setResults] = useState(data);

  /**
   * Handle search
   *
   * Search on all fields of the object
   * Set the results state
   *
   * @param {string} keyword
   * @returns
   */
  const onSearch = keyword => {
    if (keyword === "") {
      setResults(data);
      return;
    }

    // Convert to regex
    const keywordRegex = new RegExp(keyword, "gmi");

    // Find data that matches the keyword in all fields
    const foundResults = data.filter(d => {
      const keys = Object.keys(d);
      return keys.find(k => keywordRegex.test(d[k]));
    });
    setResults(foundResults);
  };

  return {
    results,
    onSearch,
  };
};

export default useSearch;
