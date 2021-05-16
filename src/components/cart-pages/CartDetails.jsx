import React, { useState, useContext, useEffect } from "react";
import Img from "gatsby-image";
import { Icon } from "@iconify/react";
import removeIcon from "@iconify/icons-dashicons/remove";
import femaleIcon from "@iconify/icons-fa-solid/female";
import maleIcon from "@iconify/icons-fa-solid/male";
import { Arrow_Button } from "../../styles/Button";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { ContextValues } from "../context/ContextSetup";
import ProductDeleteAllDialog from "../Dialogs/ProductDeleteAllDialog";
import {
  Table,
  ProductQuantity,
  ItemLink,
  TableHeader,
  TableBody,
  RemoveAllWrapper,
  RemoveAllBtn,
  TableCell,
  IconWrapper,
  CancelIcon,
  ItemDetailsWrapper,
  TableRow,
  TotalPriceWrapper,
  AdditionalFees,
  TotalPrice,
  CheckoutBtn,
} from "../../styles/CartDetail_Styles";

export default function CartDetails({
  selectedProducts,
  setPurchaseDialogOpen,
}) {
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
  const [isSmallSize, setIsSmallSize] = useState("");
  const [deleteAllDialogOpen, setDeleteAllDialogOpen] = useState();
  const { isStorageChanged, setIsStorageChanged } = useContext(ContextValues);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 601) {
        setIsSmallSize("s");
      } else if (window.innerWidth < 1025) {
        setIsSmallSize("m");
      } else {
        setIsSmallSize("l");
      }
      window.addEventListener("resize", handleWindowResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleWindowResize);
      }
    };
  }, []);

  function handleProductSizeDown(e, item) {
    const input = e.target.parentNode.parentNode.querySelector("input");

    let minValue = input.min;
    var oldValue = parseFloat(input.value);
    if (oldValue <= minValue) {
      var newVal = oldValue;
    } else {
      newVal = oldValue - 1;
    }

    let clone = [...cartItems];

    const selectedRow = clone.findIndex(v => v.id === item.id);

    clone[selectedRow].productQty = newVal;
    setCartItems(clone);
  }

  function handleCheckout() {
    setCartItems([]);
    localStorage.setItem("selectedProduct", JSON.stringify([]));
    setIsStorageChanged(() => !isStorageChanged);
    setPurchaseDialogOpen(true);
  }

  function handleWindowResize() {
    if (window.innerWidth < 601) {
      setIsSmallSize("s");
    } else if (window.innerWidth < 1025) {
      setIsSmallSize("m");
    } else {
      setIsSmallSize("l");
    }
  }

  function handleProductSizeUp(e, item) {
    const input = e.target.parentNode.parentNode.querySelector("input");

    let maxValue = input.max;
    var oldValue = parseFloat(input.value);
    if (oldValue >= maxValue) {
      var newVal = oldValue;
    } else {
      newVal = oldValue + 1;
    }

    let clone = [...cartItems];

    const selectedRow = clone.findIndex(v => v.id === item.id);

    clone[selectedRow].productQty = newVal;

    setCartItems(clone);
  }

  function calculateTotalPrice() {
    return cartItems
      .reduce(
        (acc, cur) => {
          return cur.price * cur.productQty + acc;
        },
        7.99 // // // shipping fees
      )
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
  }

  function handleRemoveItem(v) {
    const _cartItems = cartItems.filter(item => item.id !== v.id);
    setCartItems(_cartItems);
    localStorage.setItem("selectedProduct", JSON.stringify(_cartItems));
    setIsStorageChanged(() => !isStorageChanged);
  }

  function handleRemoveAllItems() {
    setDeleteAllDialogOpen(true);
  }

  return (
    <>
      <Table id="res-table">
        <TableHeader id="resp-table-header">
          <div className="table-header-cell">Items</div>
          <div className="table-header-cell">Amount</div>
          <div className="table-header-cell">Price</div>
          <div className="table-header-cell">
            {isSmallSize === "s" ? "" : "Remove"}
          </div>
        </TableHeader>
        <TableBody id="resp-table-body">
          {cartItems.map(item => {
            return (
              <TableRow key={item.id}>
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
                      <ItemLink to={`/product/${item.id}`}>
                        <div className="item-name">
                          {isSmallSize === "s"
                            ? item.title.length > 20
                              ? item.title.substring(0, 20).concat(" ...")
                              : item.title
                            : isSmallSize === "m"
                            ? item.title.length > 30
                              ? item.title.substring(0, 30).concat(" ...")
                              : item.title
                            : item.title.length > 50
                            ? item.title.substring(0, 50).concat(" ...")
                            : item.title}
                        </div>
                      </ItemLink>

                      <div className="item-size">
                        {isSmallSize === "s"
                          ? item.size.length > 20
                            ? item.size.substring(0, 20).concat(" ...")
                            : item.size
                          : isSmallSize === "m"
                          ? item.size.length > 30
                            ? item.size.substring(0, 30).concat(" ...")
                            : item.size
                          : item.size.length > 50
                          ? item.size.substring(0, 50).concat(" ...")
                          : item.size}
                      </div>
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
                      value={item.productQty}
                      onChange={e => handleOnChange(e, item)}
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
                </TableCell>
                <TableCell>
                  <div className="item-price">
                    ${(item.price * item.productQty).toFixed(2)}
                  </div>
                </TableCell>
                <TableCell>
                  <IconWrapper>
                    <CancelIcon onClick={() => handleRemoveItem(item)}>
                      {isSmallSize === "s" ? (
                        <Icon icon={removeIcon} style={{ fontSize: "16px" }} />
                      ) : (
                        "Remove"
                      )}
                    </CancelIcon>
                  </IconWrapper>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <RemoveAllWrapper className="remove-btn">
        <RemoveAllBtn onClick={handleRemoveAllItems}>
          Remove all items
        </RemoveAllBtn>
      </RemoveAllWrapper>
      <TotalPriceWrapper>
        <AdditionalFees>
          Shipping: <span className="shipping-price">$7.99</span>
        </AdditionalFees>
        <TotalPrice>
          Total: <span className="total-price">${calculateTotalPrice()}</span>
        </TotalPrice>
        <CheckoutBtn>
          <Arrow_Button dark large onClick={handleCheckout}>
            Check Out{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="arrow-right-icon"
            />
          </Arrow_Button>
        </CheckoutBtn>
      </TotalPriceWrapper>
      <ProductDeleteAllDialog
        setCartItems={setCartItems}
        setIsStorageChanged={setIsStorageChanged}
        isStorageChanged={isStorageChanged}
        deleteAllDialogOpen={deleteAllDialogOpen}
        setDeleteAllDialogOpen={setDeleteAllDialogOpen}
      ></ProductDeleteAllDialog>
    </>
  );
}
