export const actionIds = {
  GET_NUMBER_REQUEST_START: "[0] GET_NUMBER_REQUEST_START",
  GET_NUMBER_REQUEST_COMPLETED: "[1] GET_NUMBER_REQUEST_COMPLETED"
};

export interface BaseAction {
  type: string;
  payload?;
}
