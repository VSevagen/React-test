// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

export const addEmployee = data => {
  axios.post(`/employee`, data);
};

export const editEmployee = (id, data) => {
  axios.put(`/employee/${id}`, data);
};

export const deleteEmployee = id => {
  axios.delete(`/employee/${id}`);
};
