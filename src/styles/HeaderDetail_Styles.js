import styled from "styled-components";

export const HeaderDetailStyles = styled.section`
  width: 80%;
  margin: var(--small-section-margin) auto 94px auto;
  display: flex;
  justify-content: center;

  @media (max-width: 1280px) {
    width: 85%;
  }

  @media (max-width: 1130px) {
    width: 90%;
  }

  @media (max-width: 852px) {
    margin: var(--item-margin) auto 94px auto;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    margin: 32px auto 60px auto;
  }
`;

export const HeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  flex: 1;

  @media (min-width: 1520px) {
    flex: initial;
  }

  @media (max-width: 600px) {
    margin-right: 0;
    min-height: 240px;
    height: 240px;
  }
`;

export const HeaderTitle = styled.div`
  color: var(--light-text-color);
  text-align: right;
  font-family: var(--primary-font);
  font-weight: 700;
  text-transform: capitalize;
  position: relative;
  margin: 100px 0 20px 0;
  letter-spacing: 3px;

  h1 {
    font-size: 3rem;
  }

  .hidden-lg {
    display: none;
  }

  @media (max-width: 1310px) {
    h1 {
      font-size: 2.5rem;
    }
    letter-spacing: 1.5px;
  }

  @media (max-width: 1024px) {
    margin-top: 60px;
  }

  @media (max-width: 852px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 772px) {
    margin-top: 30px;
  }

  @media (max-width: 676px) {
    h1 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    .hidden-lg {
      display: inline;
      margin-left: var(--small-margin);
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 1.4rem;
      letter-spacing: 0;
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-bottom: 70px;
  align-items: center;
  font-family: var(--secondary-font);

  .sub-title {
    color: var(--light-text-color);
    text-transform: capitalize;
    font-size: var(--normal-text);
    text-align: center;
  }

  .header-btn-link {
    transition: padding 400ms;
    margin-top: auto;
    margin-bottom: var(--item-margin);
  }

  .special-offer {
    font-size: 14px;
    text-decoration: underline;
    color: var(--light-text-color);
    text-transform: capitalize;
  }

  @media (max-width: 904px) {
    margin-bottom: 30px;

    .header-btn-link {
      margin-bottom: auto;
    }
  }

  @media (max-width: 772px) {
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    .special-offer {
      font-size: 12px;
    }
    .header-btn-link {
      padding: 7px 17px;
    }
  }
`;

export const HeaderBannerWrapper = styled.div`
  width: 55%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  .gatsby-image-wrapper {
    width: 700px;
    position: relative;

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
    top: 83%;
    right: -30px;
  }

  @media (min-width: 1520px) {
    width: auto;
  }
  @media (max-width: 1310px) {
    .gatsby-image-wrapper::before {
      font-size: 2.3rem;
    }
  }

  @media (max-width: 1024px) {
    width: 50%;
    .stripe-background {
      width: 80px;
      right: -10px;
    }

    .gatsby-image-wrapper::before {
      top: 65px;
    }
  }

  @media (max-width: 852px) {
    .gatsby-image-wrapper::before {
      font-size: 1.9rem;
    }
  }

  @media (max-width: 772px) {
    .gatsby-image-wrapper::before {
      top: 33px;
    }
  }

  @media (max-width: 676px) {
    .gatsby-image-wrapper::before {
      font-size: 1.65rem;
    }
  }

  @media (max-width: 600px) {
    width: 90%;
    margin: 0 auto;

    .gatsby-image-wrapper::before {
      display: none;
    }

    .stripe-background {
      display: none;
    }
  }
`;
