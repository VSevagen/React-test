import styled from "styled-components";

const Tag = styled.span`
  display: inline-block;
  padding: 2px 5px;
  border-radius: 3px;
  color: #fff;
  background-color: #f5f5f5;
  ${({ active }) => active && `background-color:rgb(63, 131, 23);`}
  ${({ absence }) => absence && `background-color:rgb(223, 155, 10);`}
  ${({ terminated }) => terminated && `background-color:rgb(224, 60, 38);`}
`;

export default Tag;
