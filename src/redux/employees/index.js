/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const defaultEmployee = {
  id: 1,
  firstName: "Abe",
  surname: "Simpson",
  email: "abe.simpson@springfield.com",
  birthDate: "1907-05-25",
  jobTitle: "Work grouch",
  status: "ACTIVE",
};

const initialState = {
  employeesRecords: [defaultEmployee],
  employeeRecord: {},
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    /**
     * Add new employee
     */
    saveNewEmployee: (draftState, action) => {
      draftState.employeesRecords = [
        ...draftState.employeesRecords,
        {
          ...action.payload,
          id: draftState.employeesRecords.length + 1,
        },
      ];
    },
  },
});

export const { saveNewEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
