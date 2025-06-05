/* eslint-disable import/no-extraneous-dependencies */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useCallback } from "react";
import { useHistory, useParams } from "react-router";
import EmployeeForm from "../components/EmployeeForm";
import { Header } from "../components/styled";
import { editEmployee } from "../services/employeeMutations";
import { getEmployee } from "../services/employeeQueries";

const Edit = () => {
  const history = useHistory();

  const params = useParams();

  const queryClient = useQueryClient();

  const { data: employee } = useQuery({
    queryKey: ["employee", params.id],
    queryFn: () => getEmployee(+params.id),
  });

  const mutation = useMutation({
    mutationFn: newEmployee => editEmployee(+params.id, newEmployee),
    onSuccess: () => {
      queryClient.invalidateQueries(["employees", ""]);
      history.push("/view");
    },
  });

  const submitForm = useCallback(
    newEmployee => {
      mutation.mutate(newEmployee);
    },
    [mutation]
  );

  return (
    <>
      <Header>Edit employee</Header>
      <EmployeeForm submit={submitForm} initialValues={employee} />
    </>
  );
};

export default Edit;
