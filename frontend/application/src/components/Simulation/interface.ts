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
  call_time: number;
  choose_plan: string;
}

export const selectOptions = {
  ddd: ["011", "016", "017", "018"],
  plan: ["basic", "premium", "standard"],
};

export interface ResultProps {
  ddd_from: string;
  ddd_to: string;
  call_time: number;
  choose_plan: string;
  with_telzir: number | string;
  without_telzir: number | string;
  economy: number | string;
}

export const result = {
  ddd_from: "017",
  ddd_to: "018",
  call_time: 8,
  choose_plan: "premium",
  with_telzir: 0,
  without_telzir: 23.2,
  economy: 100,
};
