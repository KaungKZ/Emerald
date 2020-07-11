import React from "react";
import Layout from "../components/Layouts/Layout";
// import { Link } from "gatsby";
import Global_styles from "../styles/Global_styles";
// import { Button } from "../components/button";

import MainContent from "../components/home-page/MainContent.jsx";
//import styled from "styled-components";

export default function index() {
  // console.log(Example);

  return (
    <>
      <Global_styles />
      <Layout>
        <MainContent></MainContent>
      </Layout>

      {/* <Button>Click me</Button> */}
    </>
  );
}
