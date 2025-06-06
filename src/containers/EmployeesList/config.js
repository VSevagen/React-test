import React from "react";
import Edit from "../../components/Icons/Edit";
import Trash from "../../components/Icons/Trash";
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
    // This id is used for default sort
    // If we use jobTitle as default sort (asc), and it seems that the sort is not
    // working in the first click if the user is already has desc sorting
    // In real world application, we will use createdAt returned by API to sort the table
    // but as we don't have API, we will use id
    dataIndex: "id",
    title: "#",
    render(value) {
      return <span>{value}</span>;
    },
  },
  {
    dataIndex: "jobTitle",
    title: "Job title",
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
    title: "Surname",
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
            <Button minWidth="0" onClick={() => onEdit(record)} icon>
              <Edit />
            </Button>
          </Box>
          <Box marginLeft="1rem">
            <Button
              minWidth="0"
              danger
              onClick={() => onRemove(record.id)}
              icon
            >
              <Trash />
            </Button>
          </Box>
        </Flex>
      );
    },
  },
];
