import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Icon, InlineIcon } from "@iconify/react";
import crossMarkButton from "@iconify/icons-emojione-monotone/cross-mark-button";
// import { Icon, InlineIcon } from '@iconify/react';
import femaleIcon from "@iconify/icons-fa-solid/female";
import maleIcon from "@iconify/icons-fa-solid/male";
// import IconButton from "@material-ui/core/IconButton";

// import cart from "../../pages/cart";

const Table = styled.div`
  width: 100%;
  display: table;

  #resp-table-header {
    display: table-header-group;
    background-color: gray;
    font-weight: bold;
    font-size: 25px;

    .table-header-cell {
      display: table-cell;
      padding: 10px;
      text-align: justify;
      border-bottom: 1px solid black;
    }
  }

  #resp-table-body {
    display: table-row-group;

    .resp-table-row {
      display: table-row;

      .table-body-cell {
        display: table-cell;
      }
    }
  }
`;

const CartNavigators = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

const CartWrapper = styled.div`
  width: 100%;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItemWrapper = styled.div`
  width: 100%;
  background: #f5f5f5;
  border-bottom: 1px solid rgba(96, 96, 96, 0.1);
  min-height: 150px;
  height: 1px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:first-child {
    border-top: 1px solid rgba(96, 96, 96, 0.1);
  }
`;

const CartItem = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CancelIcon = styled.div``;

const IconWrapper = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  /* svg {
    transform: rotate(0deg) !important;
  } */
`;

const ItemDetailsWrapper = styled.div`
  display: flex;
  .item-image {
    .gatsby-image-wrapper {
      picture img {
        object-fit: contain !important;
      }
    }
  }

  .item-details {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div:not(:last-child) {
      margin-bottom: 7px;
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
        "gender",
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
      <Table id="res-table">
        <div id="resp-table-header">
          <div class="table-header-cell">Items</div>
          <div class="table-header-cell">Items</div>
          <div class="table-header-cell">Items</div>
          <div class="table-header-cell">Items</div>
        </div>
        <div id="resp-table-body">
          {cartItems.map(item => {
            return (
              <div class="resp-table-row">
                <div class="table-body-cell">
                  <div className="item-detail-wrapper">
                    <div className="item-image">
                      <Img
                        fixed={item.images[0].fixed}
                        style={{ maxHeight: "90px" }}
                        className="product-image"
                      />
                    </div>
                    <div className="item-details">
                      <div className="item-name">{item.title}</div>
                      <div className="item-size">{item.size}</div>
                      {item.gender && (
                        <div className="item-gender">
                          {item.gender === "female" ? (
                            <Icon
                              icon={femaleIcon}
                              style={{ color: "#5a5a5a", fontSize: "21px" }}
                            />
                          ) : (
                            <Icon
                              icon={maleIcon}
                              style={{ color: "#5a5a5a", fontSize: "21px" }}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div class="table-body-cell">{item.productQty}</div>
                <div className="table-body-cell">{item.price}</div>
                <div className="table-body-cell">
                  <CancelIcon>
                    <IconWrapper>
                      <Icon
                        icon={crossMarkButton}
                        style={{ color: "#606060", fontSize: "25px" }}
                      />
                    </IconWrapper>
                  </CancelIcon>
                </div>
              </div>
            );
          })}
        </div>
        {/* <CartWrapper> */}
        {/* <CartNavigators>
            <span>Items</span>
            <span>Qty</span>
            <span>Amount</span>
            <span>Amount</span>
          </CartNavigators> */}

        {/* <CartItems>
            {cartItems.map(item => {
              return (
                <CartItemWrapper>
                  <CartItem>
                    <ItemDetailsWrapper>
                      <div className="item-image">
                        <Img
                          fixed={item.images[0].fixed}
                          style={{ maxHeight: "90px" }}
                          className="product-image"
                        />
                      </div>
                      <div className="item-details">
                        <div className="item-name">{item.title}</div>
                        <div className="item-size">{item.size}</div>
                        {item.gender && (
                          <div className="item-gender">
                            {item.gender === "female" ? (
                              <Icon
                                icon={femaleIcon}
                                style={{ color: "#5a5a5a", fontSize: "21px" }}
                              />
                            ) : (
                              <Icon
                                icon={maleIcon}
                                style={{ color: "#5a5a5a", fontSize: "21px" }}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </ItemDetailsWrapper>
                    <ItemQuantity>
                      <div className="quantity">{item.productQty}</div>
                    </ItemQuantity>
                    <ItemAmount>
                      <div className="amount">{item.price}</div>
                    </ItemAmount>
                    <CancelIcon>

                      <IconWrapper>
                        <Icon
                          icon={crossMarkButton}
                          style={{ color: "#606060", fontSize: "25px" }}
                        />
                      </IconWrapper>

                    </CancelIcon>
                  </CartItem>
                </CartItemWrapper>
              );
            })}
          </CartItems> */}
        {/* </CartWrapper> */}
      </Table>
    </>
  );
}
