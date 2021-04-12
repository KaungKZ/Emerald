import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

// import cart from "../../pages/cart";

const CartWrapper = styled.div`
  width: 100%;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CancelIcon = styled.div``;

const ItemDetailsWrapper = styled.div`
  display: flex;
  .item-image {
    .gatsby-image-wrapper {
      /* width: 145px !important;
        height: 145px !important;
        max-height: 145px !important; */

      picture img {
        object-fit: contain !important;
      }
    }
  }
`;

const ItemAmount = styled.div``;

const ItemQuantity = styled.div``;

export default function CartDetails({ selectedProducts }) {
  // console.log(JSON.parse(selectedProducts));
  const [cartItems, setCartItems] = useState(
    JSON.parse(selectedProducts).reduce((acc, cur) => {
      const obj = {};
      for (const value of [
        "id",
        "title",
        "price",
        "productQty",
        "size",
        "images",
      ]) {
        if (cur.hasOwnProperty(value)) {
          obj[value] = cur[value];
        }
      }
      return Object.keys(obj).length > 0 ? acc.concat(obj) : acc;
    }, [])
  );

  console.log(cartItems);

  // const valuesToFind = ["id", "title"];

  // console.log(cartItems);
  return (
    <>
      <CartWrapper>
        <CartItems>
          {cartItems.map(item => {
            return (
              <CartItem>
                <ItemDetailsWrapper>
                  <div className="item-image">
                    <Img
                      fixed={item.images[0].fixed}
                      style={{ maxHeight: "100px" }}
                      className="product-image"
                    />
                  </div>
                  <div className="item-details">
                    <div className="item-name">{item.title}</div>
                    <div className="item-size">{item.size}</div>
                  </div>
                </ItemDetailsWrapper>
                <ItemQuantity>
                  <div className="quantity">{item.productQty}</div>
                </ItemQuantity>
                <ItemAmount>
                  <div className="amount">{item.price}</div>
                </ItemAmount>
                <CancelIcon></CancelIcon>
              </CartItem>
            );
          })}
        </CartItems>
      </CartWrapper>
    </>
  );
}
