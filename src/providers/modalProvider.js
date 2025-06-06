import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext({
  open: false,
  setOpen: () => false,
});

/**
 * A simple context modal
 *
 * @param {*} props
 * @returns
 */
const ModalProvider = props => {
  const { children } = props;

  const [open, setOpen] = useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
export default ModalProvider;
