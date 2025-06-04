import React from "react";
import { useHistory } from "react-router";
import { Box, Button, Flex, Header } from "../components/styled";
import EmployeesList from "../containers/EmployeesList";

const View = () => {
  const history = useHistory();

  return (
    <>
      <Header data-cy="header">View Employees</Header>
      <EmployeesList />
      <Flex alignItems="center" justifyContent="center" marginTop="lg">
        <Box>
          <Button data-cy="backButton" onClick={() => history.push("/")}>
            Back
          </Button>
        </Box>
        <Box marginLeft="sm">
          <Button
            data-cy="newEmployeeButton"
            onClick={() => history.push("/create")}
          >
            Add new employees
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default View;
