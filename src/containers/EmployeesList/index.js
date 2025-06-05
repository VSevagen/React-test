/* eslint-disable import/no-extraneous-dependencies */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { debounce } from "lodash";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import TextField from "../../components/Form/styled/TextField";
import Modal from "../../components/Modal";
import { Box, Button, Flex } from "../../components/styled";
import Table from "../../components/Table";
import { useModal } from "../../providers/modalProvider";
import { deleteEmployee } from "../../services/employeeMutations";
import { getAllEmployees } from "../../services/employeeQueries";
import { employeeTableColumns } from "./config";

/**
 * List of employees
 *
 * @returns
 */
const EmployeesList = () => {
  const [employeeId, setEmployeeId] = useState();
  const [search, setSearch] = useState("");

  const history = useHistory();
  const { setOpen } = useModal();

  const queryClient = useQueryClient();

  // Run delete employee mutation
  // invalidate employees after delete
  const mutation = useMutation({
    mutationFn: id => deleteEmployee(id),
    onSettled: () => {
      queryClient.invalidateQueries({
        predicate: query => query.queryKey[0] === "employees",
        refetchType: "active",
      });
      setOpen(false);
    },
  });

  const handleEdit = employee => {
    history.push(`/edit/${employee.id}`);
  };

  const handleRemove = id => {
    setOpen(true);
    setEmployeeId(id);
  };

  const handleDelete = () => {
    mutation.mutate(employeeId);
  };

  const handleSearch = e => {
    setSearch(e.target.value ?? "");
  };

  const { data: employees = [], isPending } = useQuery({
    queryKey: ["employees", search],
    queryFn: () => getAllEmployees(search),
    enabled: true,
  });

  return (
    <>
      <TextField
        onChange={debounce(handleSearch, 500)}
        name="search"
        placeholder="Search by Job Title, Firstname, surname, Email, Birth date, Status"
      />
      {isPending ? (
        <Flex paddingTop="lg" paddingBottom="lg" justifyContent="center">
          Loading employees...
        </Flex>
      ) : (
        <Table
          columns={employeeTableColumns(handleEdit, handleRemove)}
          data={mutation.data || employees}
          pagination
          defaultSort="desc"
        />
      )}

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
