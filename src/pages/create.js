import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../components/styled";
import UserForm from "../components/UserForm";
import { saveNewEmployee } from "../redux/employees";

const Create = () => {
  const dispatch = useDispatch();
  const submitForm = useCallback(
    employee => {
      dispatch(saveNewEmployee(employee));
    },
    [dispatch]
  );

  return (
    <>
      <Header>Create new employee</Header>
      <UserForm submit={submitForm} />
    </>
  );
};

export default Create;
