import React, { useEffect, useState, useContext } from "react";

// const defaultState = {
//   dark: false,
//   toggleDark: () => {},
// };

export const ContextValues = React.createContext("");

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
// const supportsDarkMode = () =>
//   window.matchMedia("(prefers-color-scheme: dark)").matches === true;

export default function ThemeProvider(props) {
  // const [isData, setIsData] = useState()
  const [isStorageChanged, setIsStorageChanged] = useState(false);
  //   state = {
  //     dark: false,
  //   };
  const { children } = props;

  //   const theme = useContext(ThemeContext);
  //   const { dark } = this.state;

  //   function toggleDark () {
  //     let dark = !this.state.dark;
  //     localStorage.setItem("dark", JSON.stringify(dark));
  //     this.setState({ dark });
  //   };

  // useEffect(() => {
  //     const lsDark = JSON.parse(localStorage.getItem("selectedProducts"));
  //     if (lsDark) {
  //       this.setState({ dark: lsDark });
  //     } else if (supportsDarkMode()) {
  //       this.setState({ dark: true });
  //     }
  // }, [])

  //   render() {

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
  //   }
}

// export default ThemeContext;

// export { ThemeProvider };
