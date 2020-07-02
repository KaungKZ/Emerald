import React from "react";

// import { Button } from "../components/button";
import Example from "../components/Example.jsx";
//import styled from "styled-components";
import Header from "../components/header";

export default function index() {
  // console.log(Example);

  return (
    <>
      <Header></Header>
      <Example></Example>
      {/* <Button>Click me</Button> */}
      {/* <Link to="/product/">Click here if you wanna buy this item homie</Link> */}
    </>
  );
}
