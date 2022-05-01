export interface Simulate {
  ddd_from: string;
  ddd_to: string;
  call_time: number;
  choose_plan: string;
  with_telzir: number | string;
  without_telzir: number | string;
  economy: number | string;
}

// data that comes before the simulation
export interface GetSimulateProps {
  ddd_from: string;
  ddd_to: string;
  call_time: number;
  choose_plan: string;
}

// data that comes after the simulation
export interface GetSimulateResultProps {
  with_telzir: number | string;
  without_telzir: number | string;
  economy: number | string;
}
