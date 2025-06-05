import React, { useEffect, useMemo, useState } from "react";
import { MAX_ITEMS_PER_PAGE } from "../../constants";
import usePagination from "../../hooks/usePagination";
import useSort from "../../hooks/useSort";
import { Box, Button, Flex } from "../styled";
import SortTable from "./SortTable";
import TableStyled from "./styled/TableStyled";
import TableWrap from "./styled/TableWrap";

/**
 * Table component
 *
 * columns: array of objects with properties title and dataIndex
 * E.g:
 * ```js
 * const columns = [
 *  {
 *    dataIndex: 'username',
 *    title: 'Username',
 *    render(value) {
 *      return (
 *        <p>
 *          {value}
 *        </p>
 *      );
 *    },
 *  }
 * ]
 * ```
 *
 * data: array of objects which contains data
 * E.g:
 * ```js
 * const data = [
 *  {
 *    id: new Date().getTime(),
 *    firstName: "Abe",
 *    surname: "Simpson",
 *    email: "abe.simpson@springfield.com",
 *    birthDate: "1907-05-25",
 *    jobTitle: "Work grouch",
 *  status: "ACTIVE",
 *  }
 * ]
 * ```
 *
 * In real application, we will use Tanstack Datatable for better performance and features
 *
 * Usage:
 * ```js
 * <Table columns={columns} data={data} />
 * ```
 *
 * @param {Array} columns
 * @param {Array} data
 * @returns
 */
const Table = ({ columns, data, pagination = true, defaultSort = "asc" }) => {
  const [sortDirection, setSortDirection] = useState(defaultSort);
  const [sortBy, setSortBy] = useState(columns[0].dataIndex);

  const { sortedData, onSort } = useSort(data);

  const {
    paginatedData,
    isDisabledNext,
    isDisabledPrev,
    onPrevPage,
    onNextPage,
  } = usePagination(sortedData, MAX_ITEMS_PER_PAGE);

  // set records
  const records = useMemo(
    () => (pagination ? paginatedData : data),
    [data, pagination, paginatedData]
  );

  const handleSort = column => {
    // Set sort direction
    // and call onSort
    setSortDirection(prev => {
      const direction = prev === "asc" ? "desc" : "asc";
      onSort(column.dataIndex, direction);
      return direction;
    });
    setSortBy(column.dataIndex);
  };

  useEffect(() => {
    // Apply default sort
    onSort(columns[0].dataIndex, defaultSort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <TableWrap>
      <TableStyled>
        <thead>
          <tr>
            {columns.map((c, index) => (
              <th
                key={`th-${index}`}
                onClick={
                  c.dataIndex !== "action" ? () => handleSort(c) : undefined
                }
                style={c.dataIndex !== "action" ? { cursor: "pointer" } : {}}
              >
                <Flex alignItems="center">
                  {c.title}
                  {sortBy === c.dataIndex && (
                    <SortTable direction={sortDirection} />
                  )}
                </Flex>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records?.length ? (
            records?.map((d, index) => (
              <tr key={`tr-${index}`}>
                {columns.map((c, cIndex) => (
                  <td key={`td-${cIndex}`}>
                    {c.render(d[c.dataIndex], d, index)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center" }}>
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </TableStyled>
      {pagination && data?.length > MAX_ITEMS_PER_PAGE && (
        <Flex justifyContent="flex-end" marginTop="2rem">
          <Box>
            <Button
              type="button"
              onClick={onPrevPage}
              disabled={isDisabledPrev}
            >
              &lt;&lt;
            </Button>
          </Box>
          <Box marginLeft="1rem">
            <Button
              type="button"
              onClick={onNextPage}
              disabled={isDisabledNext}
            >
              &gt;&gt;
            </Button>
          </Box>
        </Flex>
      )}
    </TableWrap>
  );
};

export default Table;
