import React from "react";
import { createPortal } from "react-dom";
import { useModal } from "../../providers/modalProvider";
import Close from "../Icons/Close";
import ModalClose from "./styled/ModalClose";
import ModalContent from "./styled/ModalContent";
import ModalOverlay from "./styled/ModalOverlay";

/**
 * Modal to use for confirmation
 * @returns
 */
const Modal = ({ children, title }) => {
  const { open, setOpen } = useModal();

  return (
    open &&
    createPortal(
      <ModalOverlay>
        <ModalContent>
          <ModalClose
            type="button"
            onClick={() => setOpen(false)}
            style={{ cursor: "pointer" }}
          >
            <Close />
          </ModalClose>
          <h2>{title}</h2>
          {children}
        </ModalContent>
      </ModalOverlay>,
      document.body
    )
  );
};

export default Modal;
