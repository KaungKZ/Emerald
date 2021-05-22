import React from "react";
import InfoDialog from "../Layouts/InfoDialog";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { DialogTitle, DialogContent } from "../Layouts/InfoDialog";
import { Button } from "../../styles/Link_Button";

const Dialog = styled(InfoDialog)`
  min-height: 155px;
  padding: 15px 0;

  @media (max-width: 768px) {
    min-height: 140px;
  }
  @media (max-width: 600px) {
    min-width: 350px;
    height: 135px;
    min-height: initial;
    padding: 15px 0;
  }

  @media (max-width: 480px) {
    min-width: 90%;
  }
`;

const WrapperDialogTitle = styled.div`
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
`;

const WrapperDialogContent = styled.div`
  width: 100%;
  margin-top: 13px;
  background: var(--primary-light);
  padding: 5px;
  color: var(--text-color);

  .item-name,
  .item-qty {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    margin-top: 10px;

    .item-name,
    .item-qty {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    padding: 3px;
  }
`;

const ItemDialogButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function ProductWishlistDialog({
  wishlishDialogOpen,
  title,
  price,
}) {
  // if (!wishlishDialogOpen) return null;
  return (
    <Dialog dialogOpen={wishlishDialogOpen}>
      <WrapperDialogTitle>
        <DialogTitle>You just add an item to the wishlist !</DialogTitle>
      </WrapperDialogTitle>
      <WrapperDialogContent>
        <DialogContent>
          <div className="item-name">
            {title.length > 20 ? title.substring(0, 20).concat(" ...") : title}
          </div>
          <div className="item-price">${price}</div>
        </DialogContent>
        {/* <DialogContent></DialogContent> */}
      </WrapperDialogContent>
      <ItemDialogButton>
        <Button to="/wishlist" $no_margin>
          View Wishlist{" "}
          <Icon
            icon={arrowRight}
            style={{ color: "#606060", fontSize: "25px" }}
            className="arrow-right-icon"
          />
        </Button>
      </ItemDialogButton>
    </Dialog>
  );
}
