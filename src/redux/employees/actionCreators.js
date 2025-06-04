import * as actions from ".";

/** This function is redondant,
 * we already export the action
 * so we can directly call the action within our logic (Page)
 */
/* eslint-disable import/prefer-default-export */
export const saveNewEmployee = employee => dispatch => {
  dispatch(actions.saveNewEmployee(employee));
};
