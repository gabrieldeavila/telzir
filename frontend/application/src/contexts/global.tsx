import React from "react";
import { createContext, useState } from "react";

// interface needed for the children, due to the upgrade to REACT v18
interface GlobalProviderProps {
  children?: React.ReactNode;
}

// possible values for the state of the context
type GlobalType = {
  isSidebarOpen: boolean;
};

// Type for the createContext
type PropsGlobalContext = {
  state: GlobalType;
  setState: React.Dispatch<React.SetStateAction<GlobalType>>;
};

// initial value for the state
const DEFAULT_VALUE = {
  state: {
    isSidebarOpen: false,
  },
  setState: () => {},
};

// create the context
export const GlobalContext = createContext<PropsGlobalContext>(DEFAULT_VALUE);

// create the provider
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
