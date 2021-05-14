import React, { useEffect, useRef } from "react";

import styled from "styled-components";
// import { TextButton } from "../../styles/Button";
import { BgButton } from "../../styles/Button";
import { Icon } from "@iconify/react";
import closeFill from "@iconify/icons-eva/close-fill";
import ActionsDialog from "./ActionsDialog";

const DialogTitle = styled.div`
  /* width: 80%; */
  /* margin: auto; */
  border-radius: 7px 7px 0 0;
  width: 100%;
  /* background: var(--primary-light); */
  padding: 10px 0 10px 0;
  /* margin-top: 20px; */

  .title {
    width: 80%;
    margin: 0 auto;
    font-family: var(--small-title-font);
    font-size: 1.25rem;
    color: var(--light-text-color);
    text-align: center;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    .title {
      width: 90%;
    }
  }

  @media (max-width: 420px) {
    .title {
      font-size: 1rem;
    }
  }
`;
const DialogContent = styled.div``;

const WrapperDialogCloseBtn = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--general-color);
  border-radius: 25px;
  transform: scale(0.9);

  transition: all 300ms;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  &:hover {
    transform: scale(1);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;

const DialogCloseBtn = styled.button`
  /* cursor: pointer; */
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  /* .icon {
    transform: rotate(0deg);
    transition: transform 250ms ease-in-out;
  }

  &:hover {
    .icon {
      transform: rotate(90deg);
    }
  } */
`;

const ActionButtons = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export default function ProductDeleteAllDialog(props) {
  const {
    setCartItems,
    setIsStorageChanged,
    isStorageChanged,
    deleteAllDialogOpen,
    setDeleteAllDialogOpen,
  } = props;
  // const wrapperRef = useRef(null);

  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutsideNav);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutsideNav);
  //   };
  // });

  useEffect(() => {
    if (deleteAllDialogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [deleteAllDialogOpen]);

  // function handleClickOutsideNav(e) {
  //   if (
  //     deleteAllDialogOpen &&
  //     wrapperRef.current &&
  //     !wrapperRef.current.contains(e.target)
  //   ) {
  //     setDeleteAllDialogOpen(false);
  //   }
  // }

  function handleClickCloseBtn() {
    setDeleteAllDialogOpen(false);
  }

  function handleClickCancel() {
    setDeleteAllDialogOpen(false);
  }

  function handleClickConfirm() {
    setCartItems([]);
    localStorage.setItem("selectedProduct", JSON.stringify([]));
    setIsStorageChanged(() => !isStorageChanged);
    setDeleteAllDialogOpen(false);
  }

  function handleClickCloseBtn() {
    setDeleteAllDialogOpen(false);
  }

  // console.log(deleteAllDialogOpen);
  return (
    <>
      <ActionsDialog
        dialogOpen={deleteAllDialogOpen}
        setDialogOpen={setDeleteAllDialogOpen}
      >
        <DialogTitle>
          <h2 className="title">
            Are you sure you want to remove all items from cart ?
          </h2>
        </DialogTitle>
        <DialogContent>
          <ActionButtons>
            <BgButton
              small
              // style={{ marginRight: "20px" }}
              onClick={handleClickConfirm}
            >
              Yes
            </BgButton>
            <BgButton small onClick={handleClickCancel}>
              No
            </BgButton>
          </ActionButtons>
        </DialogContent>
        <WrapperDialogCloseBtn>
          <DialogCloseBtn onClick={handleClickCloseBtn}>
            <Icon
              icon={closeFill}
              className="icon"
              style={{ color: "#fff", fontSize: "28px" }}
            />
          </DialogCloseBtn>
        </WrapperDialogCloseBtn>
      </ActionsDialog>
      {/* <Portal>
      <WrapperOverlay className={deleteAllDialogOpen ? "active" : ""}>
        <WrapperDialog ref={wrapperRef}>

        </WrapperDialog>
      </WrapperOverlay>
    </Portal> */}
    </>
  );
}
