import React from "react";
import arrowRight from "@iconify/icons-bi/arrow-right";
import { Icon } from "@iconify/react";
import styled from "styled-components";

export const Arrow_Button = styled.button`
  padding: ${props =>
    props.large ? "var(--large-btn-padding)" : "var(--btn-padding)"};
  font-family: var(--secondary-font);
  /* font-size: var(--normal-text); */
  font-size: 1rem;
  color: ${props => (props.dark ? "#fff" : "#353535")};
  background: ${props => (props.dark ? "#5a5a5a" : "#fff")};
  outline: none;
  cursor: pointer;
  border: 1px solid rgba(96, 96, 96, 0.6);
  text-decoration: none;
  display: flex;
  align-items: center;
  width: fit-content;
  text-transform: capitalize;
  transition: all 400ms;

  &.disabled {
    cursor: not-allowed;
    background: ${props => (props.dark ? "rgba(90, 90, 90, 0.55)" : "#fff")};
    border: none;

    &:hover {
      .arrow-right-icon {
        display: none;
        transform: translateX(-100%);
        font-size: 0px !important;
        opacity: 0;
      }
    }
  }

  .arrow-right-icon {
    font-size: 0px !important;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 400ms;
    color: ${props => (props.dark ? "#fff" : "rgb(96, 96, 96)")}!important;
  }

  &:hover {
    .arrow-right-icon {
      transform: translateX(0%);
      font-size: 20px !important;
      opacity: 1;
      margin-left: 10px;
    }
  }

  @media (max-width: 1024px) {
    &.disabled {
      &:hover {
        .arrow-right-icon {
          display: block;
          transform: translateX(0%);
          font-size: 18px !important;
          opacity: 1;
          margin-left: 10px;
        }
      }
    }
    .arrow-right-icon {
      font-size: 18px !important;
      opacity: 1;
      transform: translateX(0%);
      /* transition: all 0s; */
      margin-left: 10px;
      transition: all 400ms;
    }

    &:hover {
      .arrow-right-icon {
        transform: translateX(0%);
        font-size: 18px !important;
        opacity: 1;
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export default function ArrowButton(props) {
  const { children } = props;
  return (
    <Arrow_Button {...props}>
      {children}
      <Icon
        icon={arrowRight}
        style={{ color: "#606060", fontSize: "25px" }}
        className="see-all-icon arrow-right-icon"
      />
    </Arrow_Button>
  );
}
