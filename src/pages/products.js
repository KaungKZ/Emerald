import React from "react";
import { Helmet } from "react-helmet";
import Global_styles from "../styles/Global_styles";
import ProductsMainContent from "../components/all-products-page/ProductsMainContent";

export default function products() {
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
          Products
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
        <meta
          property="og:url"
          content="https://emeraldos.netlify.app/products"
        />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://emeraldos.netlify.app/products" />
      </Helmet>

      <ProductsMainContent></ProductsMainContent>
    </>
  );
}
