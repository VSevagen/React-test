import { useState } from "react";

const useSearch = data => {
  const [results, setResults] = useState(data);

  const onSearch = keyword => {
    if (keyword === "") {
      setResults(data);
      return;
    }

    const keywordRegex = new RegExp(keyword, "gmi");
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
