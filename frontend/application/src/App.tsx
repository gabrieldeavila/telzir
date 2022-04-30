import React, { useEffect } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { GlobalProvider } from "./contexts/global";
import RoutesWrapper from "./routes";
import "./translate/";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    toast("Wow so easy!");
  }, []);

  return (
    <GlobalProvider>
      <Navbar />
      <Sidebar />
      <ToastContainer />
      <RoutesWrapper />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
