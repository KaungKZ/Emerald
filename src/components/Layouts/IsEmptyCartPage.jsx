import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import shoppingBag2Line from "@iconify/icons-ri/shopping-bag-2-line";
// import alarmClockLine from "@iconify/icons-clarity/alarm-clock-line";
import CartDetails from "../cart-pages/CartDetails";
import WishlistDetails from "../cart-pages/WishlistDetails";
import { ContextValues } from "../context/ContextSetup";
import PurchaseDialog from "../Dialogs/PurchaseDialog";

const PageStyles = styled.div`
  width: 100%;
  margin: ${props =>
    props.$loading
      ? "50px auto"
      : props.showCartDetail || props.showWishlistDetail
      ? "50px auto"
      : "0 auto"};
  min-height: ${props =>
    props.$loading
      ? "initial"
      : props.showCartDetail || props.showWishlistDetail
      ? "initial"
      : "70vh"};
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;
  font-family: var(--small-title-font);
  color: var(--text-color);

  .empty-cart-icon {
    transform: rotate(-20deg);
  }

  svg {
  }

  @media (max-width: 768px) {
    justify-content: space-evenly;
  }

  @media (max-width: 480px) {
    margin: ${props =>
      props.$loading
        ? "30px auto"
        : props.showCartDetail || props.showWishlistDetail
        ? "30px auto"
        : "0 auto"};
  }
`;

const PageTitle = styled.div`
  width: auto;
  margin: ${props =>
    props.$loading
      ? "0 auto 65px auto"
      : props.showCartDetail || props.showWishlistDetail
      ? "0 auto 65px auto"
      : "0 auto"};

  position: relative;
  .title {
    text-transform: capitalize;
    font-weight: 500;
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
    .title {
      font-size: 1.8rem;
    }
    &::after {
      left: -25%;
      width: 150%;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 1.7rem;
    }
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

const LoadingText = styled.div`
  .title {
    font-family: var(--content-font);
    font-size: 1.3rem;
    color: var(--light-text-color);
    font-weight: 500;
  }
`;

export default function IsEmptyCartPage({ children }) {
  const [showCartDetail, setShowCartDetail] = useState(null);
  const [showWishlistDetail, setShowWishlistDetail] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState();
  const { isStorageChanged } = useContext(ContextValues);
  const [purchaseDialogOpen, setPurchaseDialogOpen] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (children === "Shopping cart") {
      const cartItems = JSON.parse(localStorage.getItem("selectedProduct"));

      if (!cartItems || cartItems.length === 0) {
        setShowCartDetail(false);
      } else {
        setShowCartDetail(true);
        setSelectedProducts(localStorage.getItem("selectedProduct"));
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    } else {
      if (localStorage.getItem("wishlistProducts")) {
        setShowWishlistDetail(true);
        setSelectedProducts(localStorage.getItem("wishlistProducts"));
      } else {
        setShowWishlistDetail(false);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    }
  }, [isStorageChanged, children]);

  return (
    <PageStyles
      showCartDetail={showCartDetail ? true : false}
      showWishlistDetail={showWishlistDetail ? true : false}
      $loading={isLoading}
    >
      <PageTitle
        showCartDetail={showCartDetail ? true : false}
        showWishlistDetail={showWishlistDetail ? true : false}
        $loading={isLoading}
      >
        <h1 className="title">{children}</h1>
      </PageTitle>
      {isLoading ? (
        <LoadingText>
          <h2 className="title">Loading ..</h2>
        </LoadingText>
      ) : children === "Shopping cart" ? (
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
          <CartDetails
            selectedProducts={selectedProducts}
            setPurchaseDialogOpen={setPurchaseDialogOpen}
          ></CartDetails>
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
      <PurchaseDialog
        purchaseDialogOpen={purchaseDialogOpen}
        setPurchaseDialogOpen={setPurchaseDialogOpen}
      ></PurchaseDialog>
    </PageStyles>
  );
}
