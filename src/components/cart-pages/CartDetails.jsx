import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Icon, InlineIcon } from "@iconify/react";
import crossMarkButton from "@iconify/icons-emojione-monotone/cross-mark-button";
// import { Icon, InlineIcon } from '@iconify/react';
import femaleIcon from "@iconify/icons-fa-solid/female";
import maleIcon from "@iconify/icons-fa-solid/male";
import { Arrow_Button } from "../../styles/Button";
import arrowRight from "@iconify/icons-bi/arrow-right";

// import IconButton from "@material-ui/core/IconButton";

// import cart from "../../pages/cart";

const Table = styled.div`
  width: 100%;
  display: table;
  border-spacing: 0px 10px;

  /* #resp-table-header {
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
  } */

  /* #resp-table-body {
    display: table-row-group;

    .resp-table-row {
      display: table-row;

      .table-body-cell {
        display: table-cell;
      }
    }
  } */
`;

const TableHeader = styled.div`
  display: table-header-group;
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  opacity: 0.55;
  font-family: var(--small-title-font);
  color: var(--text-color);

  .table-header-cell {
    display: table-cell;
    padding: 15px 20px;
    text-align: center;

    &:first-child {
      padding: 15px 20px 15px 5%;
    }

    &:last-child {
      padding: 15px 5% 15px 20px;
    }

    /* &:not(:first-child) {
      text-align: center;
    } */
    /* border-bottom: 1px solid black; */
  }
`;

const TableBody = styled.div`
  display: table-row-group;
`;

const TableCell = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 20px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.035);
  border-top: 1px solid rgba(0, 0, 0, 0.035);

  .item-price {
    font-family: var(--secondary-font);
    color: var(--text-color);
    font-size: 14px;
  }

  &:not(:first-child) {
    text-align: center;
  }

  &:first-child {
    padding: 20px 10px 20px 5%;
  }

  &:last-child {
    padding: 20px 5% 20px 10px;
  }
`;

const CancelIcon = styled.div``;

const IconWrapper = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  svg {
    color: rgba(202, 11, 0, 0.45) !important;
    transform: color 400ms;
    &:hover {
      color: rgba(202, 11, 0, 1) !important;
    }
  }
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
    margin-left: 10px;

    .item-name {
      font-size: 18px;
      font-weight: 700;
      text-transform: capitalize;
      color: var(--text-color);
    }
    .item-size {
      font-family: var(--content-font);
      font-size: 14px;
      color: rgba(90, 90, 90, 0.75);
    }

    & > div:not(:last-child) {
      margin-bottom: 7px;
    }
  }
`;

const TableRow = styled.div`
  display: table-row;
  background: #f9f9f9;
  height: 150px;
`;
const TotalPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 7px;
  min-height: 150px;
  align-items: center;
`;
const AdditionalFees = styled.div`
  font-size: 14px;
  font-family: var(--secondary-font);
  color: rgba(90, 90, 90, 0.75);

  .shipping-price {
    font-weight: 500;
    color: rgba(90, 90, 90, 0.85);
  }
`;

const TotalPrice = styled.div`
  font-family: var(--secondary-font);
  color: rgba(53, 53, 53, 0.75);
  font-weight: 500;

  font-size: 1.35rem;
  .total-price {
    font-weight: 700;
    color: rgba(53, 53, 53, 0.85);
  }
`;

const CheckoutBtn = styled.div``;

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
        <TableHeader id="resp-table-header">
          <div class="table-header-cell">Items</div>
          <div class="table-header-cell">Amount</div>
          <div class="table-header-cell">Price</div>
          <div class="table-header-cell">Remove</div>
        </TableHeader>
        <TableBody id="resp-table-body">
          {cartItems.map(item => {
            return (
              <TableRow>
                <TableCell>
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
                </TableCell>
                <TableCell>
                  <div className="item-amount">{item.productQty}</div>
                </TableCell>
                <TableCell>
                  <div className="item-price">${item.price}</div>
                </TableCell>
                <TableCell>
                  <CancelIcon>
                    <IconWrapper>
                      <Icon
                        icon={crossMarkButton}
                        style={{ color: "#ca0b00", fontSize: "20px" }}
                      />
                    </IconWrapper>
                  </CancelIcon>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
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
      <TotalPriceWrapper>
        <AdditionalFees>
          Shipping: <span className="shipping-price">$7.99</span>
        </AdditionalFees>
        <TotalPrice>
          Total: $<span className="total-price"></span>
        </TotalPrice>
        <CheckoutBtn>
          <Arrow_Button
            dark
            large

            // onClick={handleAddProduct}
          >
            Check Out{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="arrow-right-icon"
            />
          </Arrow_Button>
        </CheckoutBtn>
      </TotalPriceWrapper>
    </>
  );
}
