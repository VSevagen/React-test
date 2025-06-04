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
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
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
          employee.firstName = newEmployeeData.firstName;
          employee.surname = newEmployeeData.surname;
          employee.email = newEmployeeData.email;
          employee.birthDate = newEmployeeData.birthDate;
          employee.jobTitle = newEmployeeData.jobTitle;
          employee.status = newEmployeeData.status;
        }

        return employee;
      });
    },
  },
});

export const { saveNewEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
