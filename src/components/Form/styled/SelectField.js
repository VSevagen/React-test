import styled from "styled-components";
import theme from "../../styled/defaultTheme";
import { detectValue, display, margin, padding } from "../../styled/utils";

const SelectField = styled.select`
  width: 100%;
  border: 1px solid #cccccc;
  background-color: #fff;
  color: ${theme.colors.primaryTextColor};
  max-width: ${({ width }) => detectValue(width)};
  padding: ${theme.spacings.xs};
  padding-left: 10px;
  min-height: 2rem;
  border-radius: 10px;
  transition: border-color 0.2s linear;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 35px;

  &::placeholder {
    color: ${theme.colors.placeholder};
  }

  &:focus {
    border-color: ${theme.colors.primary};
  }

  ${display};
  ${margin};
  ${padding};

  ${({ selected }) => !selected && `color: ${theme.colors.placeholder};`}

  ${({ error }) =>
    error &&
    `
      background-color: ${theme.colors.dangerBackground};
      color: ${theme.colors.danger};
      border-color: ${theme.colors.danger};
  `}
`;

export default SelectField;
