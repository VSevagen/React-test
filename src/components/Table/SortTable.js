import React from "react";
import Asc from "../Icons/Asc";
import Desc from "../Icons/Desc";
import SortButton from "./styled/SortButton";

/**
 * Button sort on TH
 * @param {*} param0
 * @returns
 */
const SortTable = ({ direction, onSort }) => {
  return (
    <SortButton type="button" onClick={onSort}>
      {direction === "asc" ? <Asc /> : <Desc />}
    </SortButton>
  );
};

export default SortTable;
