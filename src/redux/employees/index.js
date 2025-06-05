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
     * Set current employee record
     *
     * Usefull for edit
     * @param {*} state
     * @param {*} action
     */
    setEmployeeRecord: (state, action) => {
      state.employeeRecord = state.employeesRecords.find(employee => {
        return employee.id === action.payload;
      });
    },
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
    /**
     * Edit employee,
     *
     * Find the current employee and replace with a new one
     * @param {*} state
     * @param {*} action
     */
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
    /**
     * Delete employee by id
     * @param {*} state
     * @param {*} action
     */
    deleteEmployee(state, action) {
      state.employeesRecords = state.employeesRecords.filter(
        employee => employee.id !== action.payload
      );
    },
  },
});

export const {
  saveNewEmployee,
  setEmployeeRecord,
  editEmployee,
  deleteEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;
