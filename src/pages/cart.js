import React from "react";

import Layout from "../components/Layouts/Layout";
import CartItems from "../components/cart-page/CartItems";
import Global_styles from "../styles/Global_styles";
export default function cart() {
  return (
    <>
      <Global_styles />
      <Layout>
        <CartItems></CartItems>
      </Layout>
    </>
  );
}
