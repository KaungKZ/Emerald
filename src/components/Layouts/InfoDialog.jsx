import React from "react";
import { Portal } from "react-portal";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const WrapperDialog = styled.div`
  z-index: 3;
  position: fixed;
  bottom: calc(0% + 20px);
  right: 20px;
  min-width: 450px;
  max-width: 40%;
  min-height: 175px;
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
  @media (max-width: 1024px) {
    min-width: 425px;
  }

  @media (max-width: 768px) {
    min-width: 400px;
  }

  @media (max-width: 600px) {
    min-width: 375px;
    height: 150px;
    min-height: initial;
    /* min-height: 150px; */
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

export const DialogTitle = styled.h2`
  color: var(--text-color);
  font-family: var(--small-title-font);
  font-size: 1.2rem;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }

  @media (max-width: 320px) {
    font-size: 13px;
  }
`;

export const DialogContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  .item-name {
    font-family: var(--small-title-font);
    text-transform: capitalize;
    font-weight: 700;
  }

  .item-qty {
    font-family: var(--secondary-font);
    position: relative;
    font-weight: 700;

    z-index: 1;
    color: var(--text-color);
    display: flex;
    justify-content: center;
    font-size: 12px;
    align-items: center;
    min-width: 28px;
    min-height: 28px;

    &::before {
      content: "";
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50px;
      width: 100%;
      height: 100%;
      background: #fff;
    }
  }

  .item-price {
    font-family: var(--secondary-font);
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    .item-name {
      font-size: 14px;
    }

    .item-qty {
      min-width: 25px;
      min-height: 25px;
    }
  }

  @media (max-width: 600px) {
    .item-name {
      font-size: 12px;
      font-weight: 500;
    }

    .item-qty {
      font-size: 10px;
      font-weight: 500;
    }

    .item-price {
      font-size: 12px;
      font-weight: 500;
    }
  }

  @media (max-width: 480px) {
    .item-qty {
      min-width: 20px;
      min-height: 20px;
      color: var(--text-color);
      text-decoration: underline;
      font-size: 12px;

      &::before {
        display: none;
      }
    }
  }

  @media (max-width: 360px) {
    .item-name,
    .item-qty,
    .item-price {
      font-size: 10px;
    }
  }
`;

export default function InfoDialog({ children, dialogOpen, className }) {
  // const wrapperRef = useRef(null);

  return (
    <CSSTransition
      in={dialogOpen}
      timeout={300}
      classNames="dialog dialog"
      unmountOnExit
    >
      <Portal>
        <WrapperDialog className={className}>{children}</WrapperDialog>
      </Portal>
    </CSSTransition>
  );
}
