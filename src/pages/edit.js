/* eslint-disable import/no-extraneous-dependencies */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useCallback, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import EmployeeForm from "../components/EmployeeForm";
import { Header } from "../components/styled";
import { editEmployee } from "../services/employeeMutations";
import { getEmployee } from "../services/employeeQueries";

const Edit = () => {
  const history = useHistory();

  const params = useParams();

  const queryClient = useQueryClient();

  // We need to fetch the employee
  // according to the id provided by the user
  const { data: employee, isPending } = useQuery({
    queryKey: ["employee", params.id],
    queryFn: () => getEmployee(+params.id),
  });

  // Mutation for editing employee
  const mutation = useMutation({
    mutationFn: newEmployee => editEmployee(+params.id, newEmployee),
    onSettled: () => {
      // Wait some ms to invaldiate tags
      setTimeout(() => {
        queryClient.invalidateQueries({
          predicate: query => query.queryKey[0] === "employees",
        });
        history.push("/view");
      }, 100);
    },
  });

  /**
   * Submit our employee data and run the mutation
   */
  const submitForm = useCallback(
    newEmployee => {
      mutation.mutate(newEmployee);
    },
    [mutation]
  );

  useEffect(() => {
    // If employee is not found && query is not pending
    // then we redirect to /view
    // because no employee to be edited
    if (!employee && !isPending) {
      history.push("/view");
    }
  }, [employee, history, isPending]);

  return (
    <>
      <Header>Edit employee</Header>
      <EmployeeForm submit={submitForm} initialValues={employee} />
    </>
  );
};

export default Edit;
