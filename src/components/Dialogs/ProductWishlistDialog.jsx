import React from "react";
import InfoDialog from "../Layouts/InfoDialog";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { DialogTitle, DialogContent } from "../Layouts/InfoDialog";
import { Button } from "../../styles/Link_Button";

const Dialog = styled(InfoDialog)`
  min-height: 155px;
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
  setWishlistDialogOpen,
  title,
  price,
}) {
  // if (!wishlishDialogOpen) return null;
  return (
    <Dialog
      dialogOpen={wishlishDialogOpen}
      setDialogOpen={setWishlistDialogOpen}
    >
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
      </WrapperDialogContent>
      <DialogContent></DialogContent>
      <ItemDialogButton>
        <Button to="/cart" $no_margin>
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
