import React, { useEffect, useRef } from "react";
import { Portal } from "react-portal";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

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
  /* transition: all 300ms; */

  &.dialog-enter {
    opacity: 0;
    visibility: hidden;
  }
  &.dialog-enter-active {
    transition: all 300ms;
    opacity: 1;
    visibility: visible;
    /* transform: translateY(0); */
  }
  &.dialog-exit {
    opacity: 1;
    visibility: visible;
  }
  &.dialog-exit-active {
    transition: all 300ms;
    opacity: 0;
    visibility: hidden;
  }

  /* &.active {
    opacity: 1;
    visibility: visible;
  } */
`;

const WrapperDialog = styled.div`
  position: relative;
  z-index: 99;
  max-width: 80%;
  min-height: 175px;
  background: #fdfdfd;
  border-radius: 7px;
  border: 1px solid rgba(96, 96, 96, 0.35);
  padding: 20px;
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

  @media (max-width: 360px) {
    max-width: 90%;
    width: 90%;
    padding: 10px 17px;
  }

  @media (max-width: 320px) {
    padding: 10px 14px;
  }
`;

export default function ActionsDialog({ children, dialogOpen, setDialogOpen }) {
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

  return (
    <CSSTransition
      in={dialogOpen}
      timeout={300}
      classNames="dialog"
      unmountOnExit
    >
      <Portal>
        <WrapperOverlay>
          <WrapperDialog ref={wrapperRef}>{children}</WrapperDialog>
        </WrapperOverlay>
      </Portal>
    </CSSTransition>
  );
}
