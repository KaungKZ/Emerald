import React, { useEffect, useRef } from "react";
import { Portal } from "react-portal";
import styled from "styled-components";

const WrapperOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.15);
  z-index: 98;
  transition: all 300ms;
  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

const WrapperDialog = styled.div`
  /* position: fixed; */
  position: relative;
  z-index: 99;
  /* bottom: calc(0% + 20px); */
  /* left: 50%; */
  /* top: 50%; */
  max-width: 80%;
  /* transform: translate(-50%, -50%); */
  /* max-width: 40%; */
  min-height: 175px;
  /* background: #fcf9f2; */
  background: #fdfdfd;
  border-radius: 7px;
  border: 1px solid rgba(96, 96, 96, 0.35);
  padding: 20px;
  /* background: var(--primary-light); */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    min-height: 150px;
  }
  /* transform: translateY(150%); */
`;

export default function ActionsDialog({ children, dialogOpen, setDialogOpen }) {
  //   const { deleteAllDialogOpen, setDeleteAllDialogOpen } = props;
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideNav);

    return () => {
      document.removeEventListener("click", handleClickOutsideNav);
    };
  });

  useEffect(() => {
    if (dialogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [dialogOpen]);

  function handleClickOutsideNav(e) {
    if (
      dialogOpen &&
      wrapperRef.current &&
      !wrapperRef.current.contains(e.target)
    ) {
      setDialogOpen(false);
    }
  }

  //   function handleClickCancel() {
  //     setDeleteAllDialogOpen(false);
  //   }

  //   function handleClickConfirm() {
  //     setCartItems([]);
  //     localStorage.setItem("selectedProduct", JSON.stringify([]));
  //     setIsStorageChanged(() => !isStorageChanged);
  //     setDeleteAllDialogOpen(false);
  //   }

  // console.log(deleteAllDialogOpen);
  return (
    <Portal>
      <WrapperOverlay className={dialogOpen ? "active" : ""}>
        <WrapperDialog ref={wrapperRef}>{children}</WrapperDialog>
      </WrapperOverlay>
    </Portal>
  );
}
