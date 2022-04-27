// interface needed for the children, due to the upgrade to REACT v18
export interface GlobalProviderProps {
  children?: React.ReactNode;
}

// possible values for the state of the context
export type GlobalType = {
  isSidebarOpen: boolean;
  isMobile: boolean;
};

// Type for the createContext
export type PropsGlobalContext = {
  state: GlobalType;
  setState: React.Dispatch<React.SetStateAction<GlobalType>>;
  changeLanguage: () => void;
};
