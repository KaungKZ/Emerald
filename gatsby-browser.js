import React from "react";
import ThemeProvider from "./src/components/context/ContextSetup";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
