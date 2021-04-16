import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import shoppingBag2Line from "@iconify/icons-ri/shopping-bag-2-line";
import alarmClockLine from "@iconify/icons-clarity/alarm-clock-line";
import CartDetails from "../cart-pages/CartDetails";
import WishlistDetails from "../cart-pages/WishlistDetails";

const PageStyles = styled.div`
  width: 100%;
  /* margin: 0 auto; */
  margin: ${props =>
    props.showCartDetail || props.showWishlistDetail ? "50px auto" : "0 auto"};
  min-height: ${props =>
    props.showCartDetail || props.showWishlistDetail ? "initial" : "70vh"};
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;
  font-family: var(--small-title-font);
  color: var(--text-color);

  .empty-cart-icon {
    transform: rotate(-20deg);
  }
  /* min-height: 70vh; */

  svg {
  }

  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const PageTitle = styled.div`
  width: auto;
  margin: ${props => (props.showCartDetail ? "0 auto 65px auto" : "0 auto")};
  /* margin: 0 auto; */

  position: relative;
  .title {
    text-transform: capitalize;

    font-size: 2rem;
  }

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

const Subtitle = styled.h3`
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

const SubtitleWrapper = styled.div``;

export default function IsEmptyCartPage({ children }) {
  // console.log(props);
  // const [isActive, setIsActive] = useState(false);
  const [showCartDetail, setShowCartDetail] = useState(null);
  const [showWishlistDetail, setShowWishlistDetail] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState();

  console.log(showCartDetail, showWishlistDetail);

  useEffect(() => {
    if (children === "Shopping cart") {
      if (localStorage.getItem("selectedProduct")) {
        setShowCartDetail(true);
        setSelectedProducts(localStorage.getItem("selectedProduct"));
      } else {
        setShowCartDetail(false);
      }
    } else {
      if (localStorage.getItem("wishlistProducts")) {
        setShowWishlistDetail(true);
        setSelectedProducts(localStorage.getItem("wishlistProducts"));
      } else {
        setShowWishlistDetail(false);
      }
    }
  }, []);

  return (
    <PageStyles
      showCartDetail={showCartDetail ? true : false}
      showWishlistDetail={showWishlistDetail ? true : false}
    >
      <PageTitle
        showCartDetail={showCartDetail ? true : false}
        showWishlistDetail={showWishlistDetail ? true : false}
      >
        <h1 className="title">{children}</h1>
      </PageTitle>
      {children === "Shopping cart" ? (
        !showCartDetail ? (
          <>
            <Icon
              icon={shoppingBag2Line}
              style={{ color: "#606060", fontSize: "110.85014343261719px" }}
              className="empty-cart-icon"
            />
            <SubtitleWrapper>
              <Subtitle>There are no items in your cart</Subtitle>
            </SubtitleWrapper>
          </>
        ) : (
          <CartDetails selectedProducts={selectedProducts}></CartDetails>
        )
      ) : !showWishlistDetail ? (
        <>
          <Icon
            icon={shoppingBag2Line}
            style={{ color: "#606060", fontSize: "110.85014343261719px" }}
            className="empty-cart-icon"
          />
          <SubtitleWrapper>
            <Subtitle>There are no items in your wishlist</Subtitle>
          </SubtitleWrapper>
        </>
      ) : (
        <WishlistDetails></WishlistDetails>
      )}
    </PageStyles>
  );
}
