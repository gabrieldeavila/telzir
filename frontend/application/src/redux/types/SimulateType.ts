import { Simulate } from "../interfaces/Simulate";

export const SET_SIMULATE = "SET_SIMULATE";

export interface SetSimulateStateType {
  simulate: Simulate;
}

interface SetSimulateActionType {
  type: typeof SET_SIMULATE;
  payload: Simulate;
}

export type SimulateActionTypes = SetSimulateActionType;
