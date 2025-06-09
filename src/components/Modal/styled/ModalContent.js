import styled from "styled-components";

const ModalContent = styled.div`
  ${({ maxWidth }) => `max-width: ${maxWidth || 350}px;`}
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  position: relative;
  width: 100%;
  height: auto;
`;

ModalContent.displayName = "ModalContentStyled";
export default ModalContent;
