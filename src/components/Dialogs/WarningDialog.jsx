import React from "react";
import { Portal } from "react-portal";
import styled from "styled-components";

const DialogWrapper = styled.div`
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
  transform: translate(-50%, -150%);
  transition: all 300ms;
  opacity: 0;
  background: var(--general-color);
  &.active {
    transform: translate(-50%, 0%);
    opacity: 1;
  }

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

export default function WarningDialog({ showAlreadyExisted, title }) {
  return (
    <Portal>
      <DialogWrapper className={`${showAlreadyExisted ? "active" : ""}`}>
        <DialogTitle>{title}</DialogTitle>
      </DialogWrapper>
    </Portal>
  );
}
