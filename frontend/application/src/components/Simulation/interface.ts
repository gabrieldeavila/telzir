export interface SimulationProps {
  use: "ddd" | "plan";
}

export const selectOptions = {
  ddd: ["011", "016", "017", "018"],
  plan: ["basic", "premium", "standard"],
};
