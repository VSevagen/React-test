import styled from "styled-components";
import theme from "./defaultTheme";

const AppWrapper = styled.div`
  padding-top: ${theme.spacings.md};
  padding-bottom: ${theme.spacings.md};
  display: block;
  background-color: #ffffff;
  border-radius: 10px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin-inline: 16px;
  padding-inline: 16px;
  @media (min-width: 992px) {
    max-width: 960px;
    margin-inline: auto;
  }
`;

export default AppWrapper;
