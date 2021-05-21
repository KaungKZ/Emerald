import React, { useState } from "react";

export const ContextValues = React.createContext("");

export default function ThemeProvider(props) {
  const [isStorageChanged, setIsStorageChanged] = useState(false);

  const { children } = props;

  return (
    <ContextValues.Provider
      value={{
        isStorageChanged: isStorageChanged,
        setIsStorageChanged: setIsStorageChanged,
      }}
    >
      {children}
    </ContextValues.Provider>
  );
}
