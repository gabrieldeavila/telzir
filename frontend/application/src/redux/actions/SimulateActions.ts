import { SimulateActionTypes, SET_SIMULATE } from "../types/SimulateType";
import { Simulate } from "../interfaces/Simulate";

export const setSimulateAction = (simulate: Simulate): SimulateActionTypes => {
  return {
    type: SET_SIMULATE,
    payload: simulate,
  };
};
