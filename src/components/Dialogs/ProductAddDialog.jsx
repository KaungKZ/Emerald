import React from "react";
import styled from "styled-components";

import { Button } from "../../styles/Link_Button";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-bi/arrow-right";
import InfoDialog from "../Layouts/InfoDialog";

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
  margin-top: 10px;
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

    z-index: 1;
    color: var(--text-color);
    display: flex;
    justify-content: center;
    font-size: 12px;
    align-items: center;
    min-width: 28px;
    min-height: 28px;

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
  display: flex;
  justify-content: center;
`;

const ItemDialogCloseBtn = styled.div`
  position: absolute;
`;

export default function ProductAddDialog({
  title,
  quantity,
  price,
  productAddDialogOpen,
  setProductAddDialogOpen,
}) {
  // if (!productAddDialogOpen) return null;

  return (
    <InfoDialog
      dialogOpen={productAddDialogOpen}
      setDialogOpen={setProductAddDialogOpen}
    >
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
        <Button to="/cart" $no_margin>
          View Cart{" "}
          <Icon
            icon={arrowRight}
            style={{ color: "#606060", fontSize: "25px" }}
            className="arrow-right-icon"
          />
        </Button>
      </ItemDialogButton>
      <ItemDialogCloseBtn></ItemDialogCloseBtn>
    </InfoDialog>
  );
}
