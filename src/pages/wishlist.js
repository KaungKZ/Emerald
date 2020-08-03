import React from "react";
import { Helmet } from "react-helmet";
import Global_styles from "../styles/Global_styles";
import Layout from "../components/Layouts/Layout";
import EmptyPage from "../components/Layouts/EmptyPage";

export default function wishlist() {
  return (
    <>
      <Global_styles />
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          ></meta>
          <title itemProp="name" lang="en">
            Wishlist
          </title>

          <meta
            name="description"
            content="A Front End E-commerce project using gatsby"
          />
          <meta
            name="keywords"
            content="e-commerce, front-end development, gatsby e-commerce"
          />
          <meta property="og:site_name" content="Emerald" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Emerald" />
          <meta
            property="og:description"
            content="A Front End E-commerce project using gatsby"
          />
          <meta property="og:url" content="" />
          <meta property="og:locale" content="en_US" />
          <link rel="canonical" href="" />
        </Helmet>
        <EmptyPage>Wishlist</EmptyPage>
      </Layout>

      {/* <Button>Click me</Button> */}
    </>
  );
}
