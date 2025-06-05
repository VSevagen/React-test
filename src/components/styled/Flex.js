import styled from "styled-components";
import { display, flex, height, margin, padding, state, width } from "./utils";

export default styled.div`
  ${display}
  ${padding}
  ${margin}
  ${flex}
  ${state}
  ${width}
  ${height}

  position: relative;
  display: flex;
  min-width: 0;
`;
