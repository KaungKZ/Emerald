import React from "react";
import InfoDialog from "../Layouts/InfoDialog";
import styled from "styled-components";

const DialogTitle = styled.div``;

export default function ProductWishlistDialog({
  wishlishDialogOpen,
  setWishlistDialogOpen,
}) {
  // if (!wishlishDialogOpen) return null;
  return (
    <InfoDialog
      dialogOpen={wishlishDialogOpen}
      setDialogOpen={setWishlistDialogOpen}
    >
      <DialogTitle>
        <h2>You just add an item to the wishlist !</h2>
      </DialogTitle>
    </InfoDialog>
  );
}
