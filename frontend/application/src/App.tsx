import React from "react";
import Navbar from "./components/navbar";
import { GlobalProvider } from "./contexts/global";
import RoutesWrapper from "./routes";

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <RoutesWrapper />
    </GlobalProvider>
  );
}

export default App;
