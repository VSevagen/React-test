import styled from "styled-components";
import theme from "../../styled/defaultTheme";
import { detectValue, display, margin, padding } from "../../styled/utils";

const TextField = styled.input`
  width: 100%;
  border: 1px solid #cccccc;
  color: ${theme.colors.primaryTextColor};
  max-width: ${({ width }) => detectValue(width)};
  padding: ${theme.spacings.xs};
  padding-left: 10px;
  height: 35px;
  border-radius: 10px;
  transition: border-color 0.2s linear;

  &::placeholder {
    color: ${theme.colors.placeholder};
  }

  &:focus {
    border-color: ${theme.colors.primary};
  }

  ${display};
  ${margin};
  ${padding};

  ${({ error }) =>
    error &&
    `
      background-color: ${theme.colors.dangerBackground};
      color: ${theme.colors.danger};
      &::placeholder {
        color: ${theme.colors.danger};
      }
  `}

  ${({ error, hasIcon }) =>
    error &&
    !hasIcon &&
    `
      border-color: ${theme.colors.danger};
  `}
`;

export default TextField;
