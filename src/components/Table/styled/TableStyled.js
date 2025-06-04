import styled from "styled-components";

const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    text-align: left;
  }
  td,
  th {
    padding: 10px;
    min-width: 150px;
    @media (min-width: 992px) {
      min-width: 0;
    }
  }
  tbody tr {
    &:nth-child(odd) {
      background-color: #f5f5f5;
    }
  }
`;

export default TableStyled;
