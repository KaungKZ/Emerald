import React from "react";
import styled from "styled-components";

export const HeaderDetailStyles = styled.section`
  width: 80%;
  /* // margin: auto; */
  margin: var(--small-section-margin) auto var(--small-section-margin) auto;
  display: flex;
  justify-content: center;

  @media (max-width: 1280px) {
    width: 85%;
  }

  @media (max-width: 1130px) {
    width: 90%;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  /* width: 30%; */
  flex: 1;
  /* width: 100%; */

  .main-title {
    color: var(--light-text-color);
    text-align: right;
    font-family: var(--primary-font);
    font-weight: 700;
    text-transform: capitalize;
    font-size: 2rem;
    position: relative;
    margin: 100px 0 20px 0;
    letter-spacing: 3px;

    /* h1:first-child {
      letter-spacing: 5px;
      font-size: 2.8rem;
    } */

    /* h1:last-child {
      position: absolute;
      top: 0;
      right: -40px;
      transform: translateX(100%);
      color: #fff;
      z-index: 1;
      font-size: 2.2rem;
    } */
  }

  .sub-title {
    font-family: var(--secondary-font);
    color: var(--light-text-color);
    text-transform: capitalize;
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 1310px) {
    .main-title {
      letter-spacing: 1.5px;
    }
  }

  @media (max-width: 1280px) {
    .main-title {
      font-size: 1.8rem;
      /* letter-spacing: 1.5px; */
    }
  }

  @media (max-width: 1024px) {
    .main-title {
      margin-top: 60px;

      font-size: 1.6rem;
    }
  }
`;

// export const HeaderMainTitle = styled.h1``;

export const HeaderBannerWrapper = styled.div`
  width: 55%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  .gatsby-image-wrapper {
    width: 700px;
    position: relative;

    /* width: 700px;
    height: 600px; */

    &::before {
      content: "Needs.";
      position: absolute;
      font-family: var(--small-title-font);
      font-weight: 700;
      top: 105px;
      left: 10px;
      font-size: 2.8rem;
      color: #fff;
      z-index: 1;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0.25;
    }
  }

  .stripe-background {
    position: absolute;
    z-index: -1;
    top: calc(100% - 80px);
    right: -30px;
  }
  @media (max-width: 1280px) {
    .gatsby-image-wrapper::before {
      font-size: 2.5rem;
    }
  }

  /* @media (max-width: 1024px) {
    .main-title {
      margin-top: 60px;

      font-size: 1.6rem;
    }
  } */

  @media (max-width: 1024px) {
    width: 55%;
    .stripe-background {
      width: 80px;
      top: calc(100% - 50px);
      right: -10px;
    }

    .gatsby-image-wrapper::before {
      top: 62px;
      font-size: 2.3rem;
    }
  }
  /* width: 100%; */
  /* flex: 1; */
`;

// export default HeaderDetailStyles;
// export default HeaderContent;
