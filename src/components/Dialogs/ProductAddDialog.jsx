import React from "react";
import styled from "styled-components";

import { Button } from "../../styles/Link_Button";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-bi/arrow-right";
import InfoDialog from "../Layouts/InfoDialog";
import { DialogTitle, DialogContent } from "../Layouts/InfoDialog";

const WrapperDialogTitle = styled.div`
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
`;

const WrapperDialogContent = styled.div`
  width: 100%;
  margin-top: 10px;
  background: var(--primary-light);
  padding: 5px;
  color: var(--text-color);

  @media (max-width: 480px) {
    padding: 3px;
  }
`;

const ItemDialogButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

// const ItemDialogCloseBtn = styled.div`
//   position: absolute;
// `;

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
      <WrapperDialogTitle>
        <DialogTitle>You just add an item to the cart !</DialogTitle>
      </WrapperDialogTitle>
      <WrapperDialogContent>
        <DialogContent>
          <div className="item-name">
            {title.length > 10 ? title.substring(0, 13).concat(" ...") : title}
          </div>
          <div className="item-qty">{quantity}x</div>
          <div className="item-price">${price}</div>
        </DialogContent>
      </WrapperDialogContent>

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
      {/* <ItemDialogCloseBtn></ItemDialogCloseBtn> */}
    </InfoDialog>
  );
}
