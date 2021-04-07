import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import shoppingBag2Line from "@iconify/icons-ri/shopping-bag-2-line";
import alarmClockLine from "@iconify/icons-clarity/alarm-clock-line";
import CartDetails from "../cart-pages/CartDetails";
import WishlistDetails from "../cart-pages/WishlistDetails";

const EmptyPageStyles = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;
  font-family: var(--small-title-font);
  color: var(--text-color);
  min-height: 70vh;

  svg {
    transform: rotate(-20deg);
  }

  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const EmptyPageTitle = styled.h1`
  font-size: 2rem;
  position: relative;
  text-transform: capitalize;

  &::after {
    content: "";
    position: absolute;
    top: calc(100% + 10px);
    left: -12.5%;
    width: 125%;
    height: 2px;
    background: rgba(96, 96, 96, 0.4);
    border-radius: 9px;
  }

  @media (max-width: 768px) {
    &::after {
      left: -25%;
      width: 150%;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
  @media (max-width: 400px) {
    &::after {
      left: 0%;
      width: 100%;
    }
  }
`;

const EmptySubtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;

  .github-repo {
    display: block;
    color: #b19d7d;
    font-size: 14px;
    text-align: center;
    margin-top: calc(var(--small-margin) * 3);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export default function IsEmptyCartPage({ children }) {
  // console.log(props);
  // const [isActive, setIsActive] = useState(false);
  const [showCartDetail, setShowCartDetail] = useState(null);
  const [showWishlistDetail, setShowWishlistDetail] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("selectedProduct")) {
      setShowCartDetail(true);
    } else {
      setShowCartDetail(false);
    }
  }, []);

  return (
    <EmptyPageStyles>
      <EmptyPageTitle>{children}</EmptyPageTitle>
      {children === "Shopping cart" ? (
        !showCartDetail ? (
          <>
            <Icon
              icon={shoppingBag2Line}
              style={{ color: "#606060", fontSize: "110.85014343261719px" }}
              className="empty-cart-icon"
            />
            <EmptySubtitle>There are no items in your cart</EmptySubtitle>
          </>
        ) : (
          <CartDetails></CartDetails>
        )
      ) : !showWishlistDetail ? (
        <>
          <Icon
            icon={shoppingBag2Line}
            style={{ color: "#606060", fontSize: "110.85014343261719px" }}
            className="empty-cart-icon"
          />
          <EmptySubtitle>There are no items in your wishlist</EmptySubtitle>
        </>
      ) : (
        <WishlistDetails></WishlistDetails>
      )}
      {/* {children === "Shopping cart" ? (
        <>
          <Icon
            icon={shoppingBag2Line}
            style={{ color: "#606060", fontSize: "110.85014343261719px" }}
            className="empty-cart-icon"
          />
          <EmptySubtitle>There are no items in your cart</EmptySubtitle>
        </>
      ) : !showWishlistDetail && !showWishlistDetail ? (
        <>
          <Icon
            icon={shoppingBag2Line}
            style={{ color: "#606060", fontSize: "110.85014343261719px" }}
            className="empty-cart-icon"
          />
          <EmptySubtitle>There are no items in your wishlist</EmptySubtitle>
        </>
      ) : (
        <>
          <CartDetails></CartDetails>
        </>
      )} */}
    </EmptyPageStyles>
  );
}
