import React, { useCallback, useEffect } from "react";
import { createContext, useState } from "react";
import { useMobile } from "../hooks/useMobile";
import { useTranslation } from "react-i18next";
import { GlobalProviderProps, PropsGlobalContext } from "./interfaces";

// initial value for the context
const DEFAULT_VALUE = {
  state: {
    isSidebarOpen: false,
    isMobile: false,
  },
  setState: () => {},
  changeLanguage: () => {},
};

// create the context
export const GlobalContext = createContext<PropsGlobalContext>(DEFAULT_VALUE);

// create the provider
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  const isMobile = useMobile();

  const { i18n } = useTranslation();

  // when isMobile changes, update the state
  useEffect(() => {
    setState({
      ...state,
      isMobile,
    });
  }, [isMobile]);

  // change language
  const changeLanguage = useCallback(() => {
    i18n.changeLanguage(i18n.language === "pt-BR" ? "en" : "pt-BR");
  }, []);

  return (
    <GlobalContext.Provider value={{ state, setState, changeLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
};
