import React from "react";
import { Button } from "../components/button";
import Header from "../components/header";

export default function product(props) {
  console.log(props.location.state);

  return (
    <>
      <Header></Header>
      <Button primary>primary button homie</Button>
    </>
  );
}
