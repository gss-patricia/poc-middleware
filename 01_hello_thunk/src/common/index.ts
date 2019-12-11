export const actionIds = {
  GET_NUMBER_REQUEST_SUCCESS: "[0] GET_NUMBER_REQUEST_SUCCESS",
  GET_NUMBER_REQUEST_ERROR: "[1] GET_NUMBER_REQUEST_ERROR"
};

export interface BaseAction {
  type: string;
  payload?;
}
