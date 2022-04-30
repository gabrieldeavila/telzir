import { Dispatch, SetStateAction } from "react";

export interface ModeProps {
  mode: "simulator" | "result";
  setMode: (mode: "simulator" | "result") => void;
}

export interface SimulationProps {
  use: "ddd" | "plan";
}

export interface SubmitValues {
  ddd_from: string;
  ddd_to: string;
  call_time: string;
  choose_plan: string;
}

export const selectOptions = {
  ddd: ["011", "016", "017", "018"],
  plan: ["basic", "premium", "standard"],
};
