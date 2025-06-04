import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import EmployeeForm from "../components/EmployeeForm";
import { Header } from "../components/styled";
import { editEmployee, setEmployeeRecord } from "../redux/employees";

const Edit = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const employeeRecord = useSelector(
    ({ employees }) => employees.employeeRecord
  );

  const params = useParams();

  const submitForm = useCallback(
    employee => {
      dispatch(
        editEmployee({
          id: +params.id,
          ...employee,
        })
      );
      history.push("/view");
    },
    [dispatch, history, params]
  );

  useEffect(() => {
    dispatch(setEmployeeRecord(+params.id));
  }, [params, dispatch]);

  return (
    <>
      <Header>Edit employee</Header>
      <EmployeeForm submit={submitForm} initialValues={employeeRecord} />
    </>
  );
};

export default Edit;
