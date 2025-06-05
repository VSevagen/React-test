/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const useEmployeeQueries = () => {
  const [search, setSearch] = useState("");

  /**
   * Get all employees with search params
   */
  const getAllEmployees = async () => {
    const response = await axios.get(`/employee`, {
      params: {
        search,
      },
    });
    return response.data;
  };

  const { data = [], isPending } = useQuery({
    queryKey: ["employee", search],
    queryFn: getAllEmployees,
    enabled: true,
  });

  return {
    data,
    isPending,
    setSearch,
  };
};

export default useEmployeeQueries;
