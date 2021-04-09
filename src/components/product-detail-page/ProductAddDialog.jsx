import React from "react";
import styled from "styled-components";
import ReactDom from "react-dom";
import { Portal } from "react-portal";
import { Button } from "../../styles/Link_Button";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-bi/arrow-right";

const WrapperDialog = styled.div`
  position: fixed;
  bottom: calc(0% + 20px);
  right: 20px;
  min-width: 450px;
  max-width: 40%;
  height: 175px;
  background: #fff;
  border-radius: 7px;
  border: 1px solid rgba(96, 96, 96, 0.35);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  transform: translateY(150%);
  transition: all 300ms;
  opacity: 0;

  &.active {
    transform: translateY(0%);
    opacity: 1;
  }

  @media (max-width: 1024px) {
    min-width: 425px;
  }

  @media (max-width: 768px) {
    min-width: 400px;
  }

  @media (max-width: 600px) {
    min-width: 375px;
    height: 150px;
    padding: 17px 0;
  }

  @media (max-width: 480px) {
    min-width: 90%;
    left: 5%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border: 2px solid #e0cca7;
    height: 130px;
    padding: 13px 0;

    /* box-shadow: rgba(224, 204, 167, 0.3) 0px 0px 0px 3px; */
  }

  @media (max-width: 360px) {
    height: 115px;
    bottom: calc(0% + 10px);
  }

  /* position: relative; */
`;

const ItemDialogTitle = styled.div`
  font-family: var(--small-title-font);
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
  color: var(--text-color);
  h2 {
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1rem;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 14px;
    }
  }

  @media (max-width: 320px) {
    h2 {
      font-size: 13px;
    }
  }
`;

const ItemDialogContent = styled.div`
  width: 100%;
  background: var(--primary-light);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  color: var(--text-color);

  .item-name {
    font-family: var(--small-title-font);
    text-transform: capitalize;
    font-weight: 700;
  }

  .item-qty {
    font-family: var(--secondary-font);
    position: relative;
    font-weight: 700;
    /* z-index: 11; */
    /* color: var(--light-text-color); */
    z-index: 1;
    color: var(--text-color);
    display: flex;
    justify-content: center;
    font-size: 12px;
    align-items: center;
    min-width: 28px;
    min-height: 28px;
    /* max-width: 35px;
    max-height: 35px; */
    /* padding: 6px; */
    &::before {
      content: "";
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50px;
      width: 100%;
      height: 100%;
      background: #fff;
      /* background: #000; */
    }
  }

  .item-price {
    font-family: var(--secondary-font);
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    .item-name {
      font-size: 14px;
    }

    .item-qty {
      min-width: 25px;
      min-height: 25px;
    }
  }

  @media (max-width: 600px) {
    .item-name {
      font-size: 12px;
    }

    .item-qty {
      font-size: 10px;
    }

    .item-price {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    padding: 3px;
    .item-qty {
      min-width: 20px;
      min-height: 20px;
      color: var(--text-color);
      text-decoration: underline;
      font-size: 12px;

      &::before {
        display: none;
      }
    }
  }

  @media (max-width: 360px) {
    .item-name,
    .item-qty,
    .item-price {
      font-size: 10px;
    }
  }
`;

const ItemDialogButton = styled.div`
  width: 100%;
  text-align: center;
`;

const ItemDialogCloseBtn = styled.div`
  position: absolute;
`;

export default function ProductAddDialog({
  title,
  quantity,
  price,
  productAddDialogOpen,
}) {
  // console.log(productAddDialogOpen);
  return (
    <Portal>
      {/* <Wrapper> */}
      <WrapperDialog className={`${productAddDialogOpen ? "active" : ""}`}>
        <ItemDialogTitle>
          <h2>You just add an item to the cart !</h2>
        </ItemDialogTitle>
        <ItemDialogContent>
          <div className="item-name">
            {title.length > 10 ? title.substring(0, 13).concat(" ...") : title}
          </div>
          <div className="item-qty">{quantity}x</div>
          <div className="item-price">${price}</div>
        </ItemDialogContent>
        <ItemDialogButton>
          <Button to="/cart">
            View Cart{" "}
            <Icon
              icon={arrowRight}
              style={{ color: "#606060", fontSize: "25px" }}
              className="arrow-right-icon"
            />
          </Button>
        </ItemDialogButton>
        <ItemDialogCloseBtn></ItemDialogCloseBtn>
      </WrapperDialog>
      {/* </Wrapper> */}
    </Portal>
  );
  // if (!productAddDialogOpen) return null;
  // console.log(addDialogRef.current);
  // return addDialogRef.current
  //   ? ReactDom.createPortal(
  //       <>
  //         <WrapperDialog
  //           className={`${productAddDialogOpen ? "active" : ""}`}
  //         ></WrapperDialog>
  //       </>,
  //       document.getElementById("product-add-dialog")
  //     )
  //   : null;
  //   return (
  //     <WrapperDialog
  //       className={`${productAddDialogOpen ? "active" : ""}`}
  //     ></WrapperDialog>
  //   );
}
