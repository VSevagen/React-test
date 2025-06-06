/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

export const getAllEmployees = async (search = "") => {
  const response = await axios.get(`/employee`, {
    params: {
      search,
    },
  });
  return response.data;
};

export const getEmployee = async id => {
  const response = await axios.get(`/employee/${id}`);
  return response.data;
};
