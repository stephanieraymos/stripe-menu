import React, { useState, useContext } from "react";
import sublinks from "./data";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubMenu = () => {
    setIsSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubMenuOpen,
        isSidebarOpen,
        openSubMenu,
        closeSubMenu,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
