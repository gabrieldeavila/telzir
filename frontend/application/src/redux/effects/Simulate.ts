import {
  GetSimulateProps,
  GetSimulateResultProps,
  Simulate,
} from "./../interfaces/Simulate";
import { Dispatch } from "react";
import { SimulateActionTypes } from "../types/SimulateType";
import { setSimulateAction } from "../actions/SimulateActions";
import { SubmitValues } from "./../../components/simulation/interface";
import axios from "axios";

export const setSimulate = (simulateValues: SubmitValues) => {
  return async function(dispatch: Dispatch<SimulateActionTypes>) {
    const SIMULATE_URL = "http://127.0.0.1:5000/simulate";

    // default values
    let simulation = { with_telzir: 0, without_telzir: 0, economy: 0 };

    await axios
      .post<GetSimulateResultProps>(SIMULATE_URL, simulateValues)
      .then((res) => {
        simulation = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    const newSimulation = {
      ...simulateValues,
      ...simulation,
    };

    setTimeout(() => {
      dispatch(setSimulateAction(newSimulation));
    }, 1000);
  };
};
