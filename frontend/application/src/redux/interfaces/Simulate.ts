export interface Simulate {
  ddd_from: string;
  ddd_to: string;
  call_time: number;
  choose_plan: string;
  with_telzir: number;
  without_telzir: number;
  economy: number;
}

// data that comes before the simulation
export interface GetSimulateProps {
  ddd_from: string;
  ddd_to: string;
  call_time: number;
  choose_plan: string;
}
