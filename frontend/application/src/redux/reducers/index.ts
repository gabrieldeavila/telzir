import { combineReducers } from "redux";
import { setSimulateReducer } from "./SimulateReducer";

const rootReducer = combineReducers({
  simulate: setSimulateReducer,
});

export default rootReducer;
