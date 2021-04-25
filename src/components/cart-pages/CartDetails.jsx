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

const ProductQuantity = styled.div`
  position: relative;
  display: flex;
  font-family: var(--secondary-font);
  /* display: flex; */
  justify-content: center;
  align-items: center;

  /* span {
      margin-right: 10px;
      color: var(--text-color);
      font-size: 14px;
    } */

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    color: var(--text-color);
    -moz-appearance: textfield;
    font-family: var(--secondary-font);
  }

  input {
    width: 90px;
    height: 25px;
    line-height: 1.65;
    padding: 0;
    margin: 0;
    padding-left: 40px;
    border: 1px solid #eee;
  }

  input:focus {
    outline: 0;
  }

  .quantity-nav {
    float: left;
    position: relative;
    height: 42px;
  }

  .quantity-button {
    position: relative;
    cursor: pointer;
    border-left: 1px solid #eee;
    width: 20px;
    text-align: center;
    color: #333;
    font-size: 13px;
    font-family: "Trebuchet MS", Helvetica, sans-serif !important;
    line-height: 1.7;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .quantity-button.quantity-up {
    outline: none;
    position: absolute;
    height: 25px;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    border-bottom: 1px solid #eee;
  }

  .quantity-button.quantity-down {
    outline: none;
    border-right: 1px solid #eee;
    height: 25px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-bottom: 1px solid #eee;
    right: 70px;
  }
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.045);
  border-top: 1px solid rgba(0, 0, 0, 0.045);

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
      img {
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
  color: rgba(90, 90, 90, 0.85);
  /* color: rgba(53, 53, 53, 0.75); */
  /* font-weight: 500; */

  font-size: 1.15rem;
  .total-price {
    font-size: 1.35rem;
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
  // const [selectedQtyRowId, setSelectedQtyRowId] = useState();
  // const selectedQtyRow = cartItems.find(item => item.id === selectedQtyRowId)

  function handleProductSizeDown(e, item) {
    const elementName = e.target.parentNode.parentNode.getAttribute("name");

    const input = e.target.parentNode.parentNode.querySelector("input");

    let minValue = input.min;
    var oldValue = parseFloat(input.value);
    if (oldValue <= minValue) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }

    let clone = [...cartItems];

    const selectedRow = clone.findIndex(v => v.id === item.id);

    clone[selectedRow].productQty = newVal;
    setCartItems(clone);
  }

  function handleProductSizeUp(e, item) {
    // setSelectedQtyRowId(item.id);

    // console.log(item);

    const elementName = e.target.parentNode.parentNode.getAttribute("name");

    const input = e.target.parentNode.parentNode.querySelector("input");

    // console.log(e.target.parentNode.parentNode.querySelector("input").value);
    let maxValue = input.max;
    var oldValue = parseFloat(input.value);
    if (oldValue >= maxValue) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    // selectedRow.productQty = newVal

    let clone = [...cartItems];

    const selectedRow = clone.findIndex(v => v.id === item.id);

    clone[selectedRow].productQty = newVal;

    // console.log(numberRef.current.min);

    setCartItems(clone);
  }

  console.log(cartItems);

  function calculateTotalPrice() {
    // console.log(cartItems);
    return cartItems
      .reduce((acc, cur) => {
        return cur.price * cur.productQty + acc;
      }, 0)
      .toFixed(2);
  }

  function handleOnChange(e, item) {
    let input = parseInt(e.target.value);

    if (input <= 0 || isNaN(input)) {
      input = 1;
    }
    let clone = [...cartItems];

    const selectedRow = clone.findIndex(v => v.id === item.id);

    clone[selectedRow].productQty = input;

    setCartItems(clone);
    // console.log(e.target.value);
    // console.log(e.target.value);

    // setCartItems(prev => {
    //   return [
    //     ...cartItems,
    //     {
    //       ...prev,
    //       productQty: e.target.value,
    //     },
    //   ];
    // });
    // console.log("yes");
  }

  // console.log(calculateTotalPrice());

  // console.log(cartItems);

  // Math.round(total + one.value * cartItemFinalPrice);

  // const valuesToFind = ["id", "title"];

  // console.log(cartItems);
  return (
    <>
      <Table id="res-table">
        <TableHeader id="resp-table-header">
          <div className="table-header-cell">Items</div>
          <div className="table-header-cell">Amount</div>
          <div className="table-header-cell">Price</div>
          <div className="table-header-cell">Remove</div>
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
                  <ProductQuantity>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      step="1"
                      // value="1
                      value={item.productQty}
                      onChange={e => handleOnChange(e, item)}
                      // ref={numberRef}
                    />
                    <div className="quantity-nav">
                      <div
                        className="quantity-button quantity-up"
                        onClick={e => handleProductSizeUp(e, item)}
                        onKeyDown={e => handleProductSizeUp(e, item)}
                        role="button"
                        tabIndex="0"
                      >
                        +
                      </div>
                      <div
                        className="quantity-button quantity-down"
                        role="button"
                        onClick={e => handleProductSizeDown(e, item)}
                        onKeyDown={e => handleProductSizeDown(e, item)}
                        tabIndex="0"
                      >
                        -
                      </div>
                    </div>
                  </ProductQuantity>

                  {/* <div className="item-amount">{item.productQty}</div> */}
                </TableCell>
                <TableCell>
                  <div className="item-price">
                    ${(item.price * item.productQty).toFixed(2)}
                  </div>
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
      </Table>
      <TotalPriceWrapper>
        <AdditionalFees>
          Shipping: <span className="shipping-price">$7.99</span>
        </AdditionalFees>
        <TotalPrice>
          Total: $<span className="total-price">{calculateTotalPrice()}</span>
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
