import React from "react";
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
const Table = ({ columns, data }) => {
  return (
    <TableWrap>
      <TableStyled>
        <thead>
          <tr>
            {columns.map((c, index) => (
              <th key={`th-${index}`}>{c.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length ? (
            data?.map((d, index) => (
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
              <td colSpan={columns.length}>No data found</td>
            </tr>
          )}
        </tbody>
      </TableStyled>
    </TableWrap>
  );
};

export default Table;
