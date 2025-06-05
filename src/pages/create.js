/* eslint-disable import/no-extraneous-dependencies */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useCallback } from "react";
import { useHistory } from "react-router";
import EmployeeForm from "../components/EmployeeForm";
import { Header } from "../components/styled";
import { addEmployee } from "../services/employeeMutations";

const Create = () => {
  const history = useHistory();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: employee => addEmployee(employee),
    onSuccess: () => {
      queryClient.invalidateQueries(["employees", ""]);
      history.push("/view");
    },
  });

  const submitForm = useCallback(
    employee => {
      mutation.mutate(employee);
    },
    [mutation]
  );

  return (
    <>
      <Header>Create new employee</Header>
      <EmployeeForm submit={submitForm} />
    </>
  );
};

export default Create;
