import React from "react";
import { Portal } from "react-portal";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const WrapperDialog = styled.div`
  position: fixed;
  bottom: calc(0% + 20px);
  right: 20px;
  min-width: 450px;
  max-width: 40%;
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
    transform: translateY(0%);
    opacity: 1;
  } */

  @media (max-width: 1024px) {
    min-width: 425px;
  }

  @media (max-width: 768px) {
    min-width: 400px;
  }

  @media (max-width: 600px) {
    min-width: 375px;
    height: 150px;
    padding: 17px 0;
  }

  @media (max-width: 480px) {
    min-width: 90%;
    left: 5%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border: 2px solid #e0cca7;
    height: 130px;
    padding: 13px 0;
  }

  @media (max-width: 360px) {
    height: 115px;
    bottom: calc(0% + 10px);
  }
`;

export default function InfoDialog({ children, dialogOpen, setDialogOpen }) {
  // const wrapperRef = useRef(null);

  return (
    <CSSTransition
      in={dialogOpen}
      timeout={300}
      classNames="dialog"
      unmountOnExit
    >
      <Portal>
        <WrapperDialog>{children}</WrapperDialog>
      </Portal>
    </CSSTransition>
  );
}
