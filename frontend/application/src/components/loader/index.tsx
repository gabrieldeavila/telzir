import React from "react";
import ReactLoading from "react-loading";
import { black } from "../../assets/base/colors";

const Loader = () => (
  <ReactLoading type="spin" color={black} height={"10%"} width={"10%"} />
);

export default Loader;
