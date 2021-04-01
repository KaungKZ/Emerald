import React from "react";
import styled from "styled-components";
import ReactDom from "react-dom";
import { Portal } from "react-portal";
import { Button } from "../../styles/Link_Button";

const WrapperDialog = styled.div`
  position: fixed;
  /* top: 100%; */
  bottom: calc(0% + 20px);
  right: 20px;
  /* min-width: 40%; */
  min-width: 400px;
  max-width: 40%;
  height: 175px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid rgba(96, 96, 96, 0.6);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* position: relative; */
`;

const ItemDialogTitle = styled.div`
  font-family: var(--small-title-font);
  text-align: center;
  max-width: 90%;
  margin: 0 auto;

  h2 {
    font-size: 1.2rem;
  }
`;

const ItemDialogContent = styled.div`
  width: 100%;
  background: var(--grey-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;

  .item-name {
    font-family: var(--small-title-font);
    text-transform: capitalize;
  }

  .item-qty {
    font-family: var(--secondary-font);
  }

  .item-price {
    font-family: var(--secondary-font);
  }
`;

const ItemDialogButton = styled.div`
  width: 100%;
  text-align: center;
`;

const ItemDialogCloseBtn = styled.div`
  position: absolute;
`;

export default function ProductAddDialog({ title, quantity, price }) {
  // console.log(productValues);
  // console.log("yes");
  return (
    <Portal>
      <WrapperDialog
      // className={`${productAddDialogOpen ? "active" : ""}`}
      >
        <ItemDialogTitle>
          <h2>You just add an item to the cart !</h2>
        </ItemDialogTitle>
        <ItemDialogContent>
          <div className="item-name">{title}</div>
          <div className="item-qty">{quantity}x</div>
          <div className="item-price">${price}</div>
        </ItemDialogContent>
        <ItemDialogButton>
          <Button to="/cart">View Cart</Button>
        </ItemDialogButton>
        <ItemDialogCloseBtn></ItemDialogCloseBtn>
      </WrapperDialog>
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
