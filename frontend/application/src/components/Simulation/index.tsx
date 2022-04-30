import React from "react";
import { useState } from "react";
import { ModeProps } from "./interface";
import Result from "./Result";
import Simulator from "./Simulator";

export default function Simulation() {
  const [mode, setMode] = useState<"simulator" | "result">("simulator");

  const settings = { setMode, mode };

  return mode === "simulator" ? (
    <Simulator setMode={setMode} mode={mode} />
  ) : (
    <Result {...settings} />
  );
}
