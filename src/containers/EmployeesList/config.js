import React from "react";
import { Box, Button, Flex } from "../../components/styled";
import Tag from "../../components/styled/Tag";

const status = {
  ACTIVE: {
    active: true,
  },
  LEAVE_OF_ABSENCE: {
    absence: true,
  },
  TERMINATED: {
    terminated: true,
  },
};

export const employeeTableColumns = (onEdit, onRemove) => [
  {
    dataIndex: "jobTitle",
    title: "Job Title",
    render(value) {
      return <span>{value}</span>;
    },
  },
  {
    dataIndex: "firstName",
    title: "First name",
    render(value) {
      return <span>{value}</span>;
    },
  },
  {
    dataIndex: "surname",
    title: "surname",
    render(value) {
      return <span>{value}</span>;
    },
  },
  {
    dataIndex: "email",
    title: "Email",
    render(value) {
      return <span>{value}</span>;
    },
  },
  {
    dataIndex: "birthDate",
    title: "Birth date",
    render(value) {
      return <span>{value}</span>;
    },
  },
  {
    dataIndex: "status",
    title: "Status",
    render(value) {
      return <Tag {...status[value]}>{value}</Tag>;
    },
  },
  {
    dataIndex: "action",
    title: "",
    render(_, record) {
      return (
        <Flex>
          <Box>
            <Button minWidth="0" onClick={() => onEdit(record)}>
              Edit
            </Button>
          </Box>
          <Box marginLeft="1rem">
            <Button minWidth="0" danger onClick={() => onRemove(record.id)}>
              Delete
            </Button>
          </Box>
        </Flex>
      );
    },
  },
];
