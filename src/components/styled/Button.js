import styled from "styled-components";
import theme from "./defaultTheme";
import { margin, padding, state } from "./utils";

const Button = styled.button`
  ${margin};
  ${padding};
  ${state};

  text-align: center;
  height: 33px;
  background-color: ${({ backgroundColor = "background" }) =>
    theme.buttons[backgroundColor]};
  color: ${theme.buttons.text};
  border: none;
  border-radius: 30px;
  min-width: 70px;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;
  :hover:not(:disabled) {
    opacity: 0.7;
  }
  :disabled {
    cursor: not-allowed;
  }

  ${({ link }) =>
    link &&
    `
    background: transparent;
    color: ${theme.colors.primary};
    box-shadow: none;

    &:hover, &:active {
      text-decoration: underline;
    }
  `}

  ${({ linkSubtle }) =>
    linkSubtle &&
    `
    background: transparent;
    color: ${theme.colors.primary};
    min-width: auto!important;
    padding: 0;
    box-shadow: none;
    margin: 0;

    &:hover, &:active {
      text-decoration: underline;
    }
  `}

  ${({ linkWithIcon }) =>
    linkWithIcon &&
    `
    background: transparent;
    color: ${theme.colors.primary};
    min-width: auto!important;
    padding: 0;
    box-shadow: none;
    margin: 0;
    display: flex;
    height: auto;
    align-items: center;
  `}

  ${({ modal }) =>
    modal &&
    `
    margin-left: ${theme.spacings.lg};
    margin-right: 0;
  `}

  ${({ secondary }) =>
    secondary &&
    `
     background-color: ${theme.buttons.secondaryBackground};
     color: ${theme.buttons.secondaryText};
  `}
  
  ${({ danger }) =>
    danger &&
    `
     background-color: ${theme.buttons.danger};
     color: ${theme.buttons.dangerText};
  `}

  ${({ minWidth }) => minWidth && `min-width: ${minWidth}px;`}
  ${({ autoWidth }) => autoWidth && `min-width: auto!important;`}

  ${({ icon, danger }) =>
    icon &&
    `display: flex; background: transparent; color: ${
      danger ? theme.colors.danger : theme.colors.primary
    }; min-width: 0; padding: 0`}
`;

Button.displayName = "StyledButton";
export default Button;
