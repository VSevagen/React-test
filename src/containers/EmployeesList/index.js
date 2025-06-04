import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Modal from "../../components/Modal";
import { Box, Button, Flex } from "../../components/styled";
import Table from "../../components/Table";
import { useModal } from "../../providers/modalProvider";
import { deleteEmployee } from "../../redux/employees";
import { employeeTableColumns } from "./config";

/**
 * List of employees
 *
 * @returns
 */
const EmployeesList = () => {
  const [employeeId, setEmployeeId] = useState();

  const history = useHistory();
  const { setOpen } = useModal();

  const dispatch = useDispatch();

  const { employeesRecords: data } = useSelector(({ employees }) => {
    return employees;
  });

  const handleEdit = employee => {
    history.push(`/edit/${employee.id}`);
  };

  const handleRemove = id => {
    setOpen(true);
    setEmployeeId(id);
  };

  const handleDelete = () => {
    dispatch(deleteEmployee(employeeId));
    setOpen(false);
  };

  return (
    <>
      <Table
        columns={employeeTableColumns(handleEdit, handleRemove)}
        data={data}
      />
      <Modal title="Confirmation">
        <p>Do you want to delete this employee?</p>
        <Flex justifyContent="flex-end">
          <Box>
            <Button onClick={() => setOpen(false)}>No</Button>
          </Box>
          <Box marginLeft="1rem">
            <Button danger onClick={handleDelete}>
              Yes
            </Button>
          </Box>
        </Flex>
      </Modal>
    </>
  );
};

export default EmployeesList;
