import * as React from "react";
import { useState } from "react";
import { theDarkTheme, theLightTheme } from "../theme/theme";
import { ContextValuesTypes } from "../types";

const defaultValue: ContextValuesTypes = {
  theme: theDarkTheme,
  drawerOpen: false,
  setHandleDrawer: () => {},
  changeTheme: () => {},
  isDark: true,
};

export const ThemeContext =
  React.createContext<ContextValuesTypes>(defaultValue);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(theDarkTheme);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDark, setDark] = useState(true);

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const changeTheme = () => {
    if (isDark) {
      setTheme(theLightTheme);
      setDark(false);
    } else {
      setTheme(theDarkTheme);
      setDark(true);
    }
  };

  const value: ContextValuesTypes = {
    theme,
    drawerOpen,
    setHandleDrawer,
    changeTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
