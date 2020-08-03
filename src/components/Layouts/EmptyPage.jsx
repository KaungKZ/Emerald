import React from "react";
import styled from "styled-components";
import { Icon, InlineIcon } from "@iconify/react";
import shoppingBag2Line from "@iconify/icons-ri/shopping-bag-2-line";
import alarmClockLine from "@iconify/icons-clarity/alarm-clock-line";
// import { Link } from "gatsby";

const EmptyPageStyles = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;
  font-family: var(--small-title-font);
  color: var(--text-color);
  min-height: 70vh;

  svg {
    transform: rotate(-20deg);
  }

  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const EmptyPageTitle = styled.h1`
  font-size: 2rem;
  position: relative;
  text-transform: capitalize;
  /* width: 50%; */

  &::after {
    content: "";
    position: absolute;
    top: calc(100% + 10px);
    left: -50%;
    width: 200%;
    height: 2px;
    background: rgba(96, 96, 96, 0.4);
    border-radius: 9px;
  }

  @media (max-width: 768px) {
    &::after {
      left: -25%;
      width: 150%;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
  @media (max-width: 400px) {
    &::after {
      left: 0%;
      width: 100%;
    }
  }
`;

const EmptySubtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;

  .github-repo {
    /* text-decoration: none; */
    display: block;
    /* font-weight: 700; */
    /* color: var(--primary-color); */
    color: #b19d7d;

    font-size: 14px;
    text-align: center;
    margin-top: calc(var(--small-margin) * 3);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export default function EmptyPage({ empty_cart, children }) {
  // console.log(props);
  return (
    <EmptyPageStyles>
      <EmptyPageTitle>{children}</EmptyPageTitle>
      {/* <div className="content"> */}
      {empty_cart ? (
        <>
          <Icon
            icon={shoppingBag2Line}
            style={{ color: "#606060", fontSize: "110.85014343261719px" }}
            className="empty-cart-icon"
          />
          <EmptySubtitle>There are no items in your cart</EmptySubtitle>
        </>
      ) : (
        <>
          <Icon
            icon={alarmClockLine}
            style={{ color: "#606060", fontSize: "110px" }}
            className="clock-icon"
          />
          <EmptySubtitle>
            Stay tuned, this page is coming soon !{" "}
            {
              <a
                href="https://github.com/KaungKZ/Emerald"
                className="github-repo"
                target="_blank"
              >
                Take a look at what we are doing
              </a>
            }
          </EmptySubtitle>
        </>
      )}
      {/* <Icon
        icon={alarmClockLine}
        style={{ color: "#606060", fontSize: "110px" }}
      /> */}

      {/* {empty_cart
          ? 
          : "Stay tuned, this page is coming soon ! Take a look at what we are doing  "} */}
    </EmptyPageStyles>
  );
}
