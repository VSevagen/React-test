import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import EmployeeForm from "../components/EmployeeForm";
import { Header } from "../components/styled";
import { saveNewEmployee } from "../redux/employees";

const Create = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const submitForm = useCallback(
    employee => {
      dispatch(saveNewEmployee(employee));
      history.push("/view");
    },
    [dispatch, history]
  );

  return (
    <>
      <Header>Create new employee</Header>
      <EmployeeForm submit={submitForm} />
    </>
  );
};

export default Create;
