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

  // Mutation for creating employee
  const mutation = useMutation({
    mutationFn: employee => addEmployee(employee),
    onSettled: () => {
      queryClient.invalidateQueries({
        predicate: query => query.queryKey[0] === "employees",
      });
      history.push("/view");
    },
  });

  /**
   * Submit our employee data and run the mutation
   */
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
