import React from "react";
import { Portal } from "react-portal";
import styled from "styled-components";
import { TextButton } from "../../styles/Button";

const WrapperDialog = styled.div`
  position: fixed;
  /* bottom: calc(0% + 20px); */
  left: 50%;
  top: 50%;
  min-width: 450px;
  transform: translate(-50%, -50%);
  /* max-width: 40%; */
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
  /* transform: translateY(150%); */
  transition: all 300ms;
  opacity: 0;

  &.active {
    opacity: 1;
  }
`;

const DialogTitle = styled.div``;
const DialogContent = styled.div``;

const ActionButtons = styled.div``;

export default function ProductDeleteAllDialog(props) {
  const {
    setCartItems,
    setIsStorageChanged,
    isStorageChanged,
    deleteAllDialogOpen,
    setDeleteAllDialogOpen,
  } = props;

  console.log(deleteAllDialogOpen);
  return (
    <Portal>
      <WrapperDialog className={deleteAllDialogOpen ? "active" : ""}>
        <DialogTitle>
          Are you sure you want to remove all items from cart ?
        </DialogTitle>
        <DialogContent>
          <ActionButtons>
            <TextButton>Yes</TextButton>
            <TextButton>No</TextButton>
          </ActionButtons>
        </DialogContent>
      </WrapperDialog>
    </Portal>
  );
}
