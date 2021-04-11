import React, { useState } from "react";
import styled from "styled-components";
// import cart from "../../pages/cart";

const CartWrapper = styled.div``;

const CartItems = styled.div``;

const CartItem = styled.div``;

export default function CartDetails({ selectedProducts }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(selectedProducts).reduce((acc, cur) => {
      const obj = {};
      for (const value of ["id", "title", "price", "productQty", "size"]) {
        if (cur.hasOwnProperty(value)) {
          obj[value] = cur[value];
        }
      }
      return Object.keys(obj).length > 0 ? acc.concat(obj) : acc;
    }, [])
  );

  // const valuesToFind = ["id", "title"];

  // console.log(cartItems);
  return <div>{cartItems}</div>;
}
