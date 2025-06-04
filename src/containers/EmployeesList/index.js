import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Table from "../../components/Table";
import { employeeTableColumns } from "./config";

/**
 * List of employees
 *
 * @returns
 */
const EmployeesList = () => {
  const history = useHistory();

  const { employeesRecords: data } = useSelector(({ employees }) => {
    return employees;
  });

  const handleEdit = employee => {
    history.push(`/edit/${employee.id}`);
  };
  const handleRemove = () => {};

  return (
    <Table
      columns={employeeTableColumns(handleEdit, handleRemove)}
      data={data}
    />
  );
};

export default EmployeesList;
