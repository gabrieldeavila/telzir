import {
  SimulateActionTypes,
  SetSimulateStateType,
} from "../types/SimulateType";
import { SET_SIMULATE } from "./../types/SimulateType";

const initialStateSetCreate = {
  simulate: {
    ddd_from: "",
    ddd_to: "",
    call_time: 0,
    choose_plan: "",
    with_telzir: 0,
    without_telzir: 0,
    economy: 0,
  },
};

export const setSimulateReducer = (
  state = initialStateSetCreate,
  action: SimulateActionTypes
): SetSimulateStateType => {
  switch (action.type) {
    case SET_SIMULATE:
      return {
        simulate: action.payload,
      };
    default:
      return state;
  }
};
