import React from "react";
import styled from "styled-components";

const WrapperDialog = styled.div`
  position: fixed;
  top: 30px;
  left: 50%;

  border-radius: 7px;
  border: 1px solid rgba(96, 96, 96, 0.35);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px 20px;
  min-width: 250px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  background: var(--general-color);
  align-items: center;
  transition: all 300ms;
  transform: translate(-50%, -150%);
  opacity: 0;

  &.dialog-enter {
    visibility: hidden;
    transform: translateY(100%);
  }
  &.dialog-enter-active {
    visibility: visible;
    transition: all 300ms;
    transform: translateY(0);
  }
  &.dialog-exit {
    visibility: visible;
    transform: translateY(0);
  }
  &.dialog-exit-active {
    visibility: hidden;
    transition: all 300ms;
    transform: translateY(100%);
  }
  /* &.active {
    transform: translate(-50%, 0%);
    opacity: 1;
  } */

  @media (max-width: 1024px) {
    min-height: 45px;
  }

  @media (max-width: 768px) {
    top: 20px;
    padding: 7px 18px;
    min-height: 40px;
  }

  @media (max-width: 600px) {
    min-width: 300px;
  }

  @media (max-width: 480px) {
    min-width: 80%;
    z-index: 100;
  }

  @media (max-width: 400px) {
    min-height: 35px;
    padding: 5px 15px;
  }

  @media (max-width: 360px) {
    min-width: 90%;
  }

  @media (max-width: 320px) {
    padding: 5px 10px;
    min-width: 95%;
  }
`;

const DialogTitle = styled.div`
  font-family: var(--small-title-font);
  font-size: 1rem;
  color: #fff;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    text-align: center;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export default function Snackbar({ children, dialogOpen }) {
  return (
    <CSSTransition
      in={dialogOpen}
      timeout={300}
      classNames="snackbar"
      unmountOnExit
    >
      <Portal>
        <WrapperDialog>
          {children}
          {/* <DialogTitle>{children}</DialogTitle> */}
        </WrapperDialog>
      </Portal>
    </CSSTransition>
  );
}
