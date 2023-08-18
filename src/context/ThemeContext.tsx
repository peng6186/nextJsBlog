"use client";

import { createContext, useState } from "react";

type themeContext = {
  mode: string;
  toggle: () => void;
};

export const ThemeContext = createContext<themeContext>({
  mode: "",
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: any }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
