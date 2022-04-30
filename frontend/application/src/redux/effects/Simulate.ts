import { GetSimulateProps, Simulate } from "./../interfaces/Simulate";
import { Dispatch } from "react";
import { SimulateActionTypes } from "../types/SimulateType";
import { setSimulateAction } from "../actions/SimulateActions";
import { SubmitValues } from "./../../components/simulation/interface";

export const setSimulate = (updateValues: SubmitValues) => {
  return function(dispatch: Dispatch<SimulateActionTypes>) {
    const SIMULATE_URL = "http://127.0.0.1:5000/simulate";

    const teste = {
      ...updateValues,
      with_telzir: 21.3,
      without_telzir: 21.3,
      economy: 21.3,
    };

    setTimeout(() => {
      dispatch(setSimulateAction(teste));
    }, 1000);
  };
};
