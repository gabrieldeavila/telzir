import { GetSimulateResultProps } from "./../interfaces/Simulate";
import { Dispatch } from "react";
import { SimulateActionTypes } from "../types/SimulateType";
import { setSimulateAction } from "../actions/SimulateActions";
import { SubmitValues } from "./../../components/Simulation/interface";
import axios from "axios";

export const setSimulate = (simulateValues: SubmitValues) => {
  return async function(dispatch: Dispatch<SimulateActionTypes>) {
    const SIMULATE_URL = "http://127.0.0.1:5000/simulate";

    // default values
    let simulation: GetSimulateResultProps = {
      with_telzir: "-",
      without_telzir: "-",
      economy: "-",
    };

    await axios
      .post<GetSimulateResultProps>(SIMULATE_URL, simulateValues)
      .then((res) => {
        simulation = { ...simulation, ...res.data };
      })
      .catch(() => {});

    const newSimulation = {
      ...simulateValues,
      ...simulation,
    };

    dispatch(setSimulateAction(newSimulation));
  };
};
