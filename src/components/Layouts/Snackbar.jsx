import React from "react";
import styled from "styled-components";
import { Portal } from "react-portal";
// import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

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
  align-items: center;
  /* transform: translate(-50%, -100%); */

  /* transition: all 300ms; */
  /* opacity: 0; */
  background: var(--general-color);

  &.snackbar-enter {
    /* visibility: hidden; */
    transform: translate(-50%, -100%);
  }
  &.snackbar-enter-active,
  &.snackbar-enter-done {
    transition: transform 300ms;

    transform: translate(-50%, calc(0% + 75px));
  }
  &.snackbar-exit {
    transform: translate(-50%, calc(0% + 75px));
  }
  &.snackbar-exit-active {
    /* visibility: hidden; */

    transition: transform 300ms;
    transform: translate(-50%, -100%);
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

    &.snackbar-enter-active,
    &.snackbar-enter-done {
      transform: translate(-50%, calc(0% + 60px));
    }
    &.snackbar-exit {
      transform: translate(-50%, calc(0% + 60px));
    }
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

export default function Snackbar({ title, dialogOpen }) {
  console.log(dialogOpen);
  return (
    <CSSTransition
      in={dialogOpen}
      timeout={300}
      classNames="snackbar"
      unmountOnExit
    >
      <Portal>
        <WrapperDialog>
          <DialogTitle>{title}</DialogTitle>
        </WrapperDialog>
      </Portal>
    </CSSTransition>
  );
}
