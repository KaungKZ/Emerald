import React, { useContext } from "react";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";

export default function Layout({ children }) {
  // console.log(theme);
  return (
    <>
      {/* <ThemeContext.Consumer> */}
      {/* {theme => (
          <div className={theme.dark ? 'dark' : 'light'}></div>)} */}
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
      {/* </ThemeContext.Consumer> */}
    </>
  );
}
