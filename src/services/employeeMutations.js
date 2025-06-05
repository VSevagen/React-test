// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

export const editEmployee = (id, data) => {
  axios.put(`/employee/${id}`, data);
};
