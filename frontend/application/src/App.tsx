import React from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { GlobalProvider } from "./contexts/global";
import RoutesWrapper from "./routes";
import "./translate/";

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <Sidebar />
      <RoutesWrapper />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
