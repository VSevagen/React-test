/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const defaultEmployee = {
  id: new Date().getTime(),
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
    setEmployeeRecord: (state, action) => {
      state.employeeRecord = state.employeesRecords.find(employee => {
        return employee.id === action.payload;
      });
    },
    saveNewEmployee: {
      prepare: employee => ({
        payload: { ...employee, id: new Date().getTime() },
      }),
      reducer(draftState, action) {
        draftState.employeesRecords = [
          ...draftState.employeesRecords,
          action.payload,
        ];
      },
    },
    editEmployee(state, action) {
      const newEmployeeData = action.payload;
      state.employeesRecords = state.employeesRecords.map(employee => {
        if (newEmployeeData.id === employee.id) {
          return {
            ...employee,
            ...newEmployeeData,
          };
        }

        return employee;
      });
    },
  },
});

export const { saveNewEmployee, setEmployeeRecord, editEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
