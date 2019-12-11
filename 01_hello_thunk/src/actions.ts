import { actionIds } from "./common";
import { generateNewNumber } from "../src/api";

function numberRequestSuccess(payload) {
  return { type: actionIds.GET_NUMBER_REQUEST_SUCCESS, payload };
}

export function numberRequestAction() {
  return dispatch => {
    return generateNewNumber()
      .then(payload => {
        dispatch(numberRequestSuccess(payload));
      })
      .catch(error => {
        //dispatch error
      });
  };
}
