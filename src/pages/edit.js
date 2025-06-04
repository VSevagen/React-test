import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../components/styled";
import EmployeeForm from "../components/EmployeeForm";
import { saveNewEmployee } from "../redux/employees";

const Edit = () => {
  const dispatch = useDispatch();
  const submitForm = useCallback(
    employee => {
      dispatch(saveNewEmployee(employee));
    },
    [dispatch]
  );

  return (
    <>
      <Header>Edit employee</Header>
      <EmployeeForm submit={submitForm} />
    </>
  );
};

export default Edit;
