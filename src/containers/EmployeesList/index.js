import { debounce } from "lodash";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import TextField from "../../components/Form/styled/TextField";
import Modal from "../../components/Modal";
import { Box, Button, Flex } from "../../components/styled";
import Table from "../../components/Table";
import useSearch from "../../hooks/useSearch";
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

  const { employeesRecords } = useSelector(({ employees }) => {
    return employees;
  });

  const { results: employeesSearchResult, onSearch } =
    useSearch(employeesRecords);

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

  const handleSearch = e => {
    onSearch(e.target.value);
  };

  return (
    <>
      <TextField
        onChange={debounce(handleSearch, 500)}
        name="search"
        placeholder="Search"
      />
      <Table
        columns={employeeTableColumns(handleEdit, handleRemove)}
        data={employeesSearchResult}
        pagination
        defaultSort="desc"
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
