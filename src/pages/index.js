import React from "react";
import Global_styles from "../styles/Global_styles";
import HomeMainContent from "../components/HomeMainContent.jsx";
import { Helmet } from "react-helmet";
import logo from "../images/home/logo.svg";

export default function index() {
  return (
    <>
      <Global_styles />

      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <title itemProp="name" lang="en">
          Emerald
        </title>
        <link rel="icon" href={logo}></link>

        <meta
          name="description"
          content="A Front End E-commerce project using gatsby"
        />
        <meta
          name="keywords"
          content="e-commerce, front-end development, gatsby e-commerce"
        />
        <meta property="og:image" content="https://i.imgur.com/E2Pzzot.jpg" />
        <meta property="og:site_name" content="Emerald" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Emerald" />
        <meta
          property="og:description"
          content="A Front End E-commerce project using gatsby"
        />
        <meta property="og:url" content="https://emeraldos.netlify.app/" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://emeraldos.netlify.app/" />
      </Helmet>
      <HomeMainContent></HomeMainContent>
    </>
  );
}
