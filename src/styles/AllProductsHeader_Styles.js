import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.4;
  }

  @media (max-width: 600px) {
    .gatsby-image-wrapper {
      height: 280px;
    }
  }

  @media (max-width: 480px) {
    &::after {
      opacity: 0.5;
    }
  }
`;

export const HeaderQuoteWrapper = styled.div`
  position: absolute;
  top: 35%;
  right: 25%;
  transform: translate(25%, -35%);
  color: #fff;
  z-index: 2;
  font-family: var(--secondary-font);

  .allProducts-header-quote {
    width: 450px;
    font-size: 3.8rem;
    text-transform: capitalize;
  }
  .allProducts-header-subquote {
    font-weight: 400;
    opacity: 0.8;
    margin-top: var(--small-margin);
  }

  .header-btn-link {
    margin-top: var(--item-margin);
  }

  @media (max-width: 1280px) {
    .allProducts-header-quote {
      font-size: 3.3rem;
    }

    .allProducts-header-subquote {
      font-size: 1rem;
    }
  }

  @media (max-width: 1024px) {
    right: 5%;
    transform: translate(5%, -35%);
    .allProducts-header-quote {
      font-size: 2.8rem;
    }

    .allProducts-header-subquote {
      font-size: 1rem;
    }

    .header-btn-link {
      margin-top: calc(var(--item-margin) / 2);
    }
  }

  @media (max-width: 860px) {
    right: 20%;
    transform: translate(20%, -35%);
    .allProducts-header-quote {
      width: 400px;
      font-size: 2.2rem;
      text-align: right;
    }

    .allProducts-header-subquote {
      font-size: 12px;
      text-align: right;
    }

    .header-btn-link {
      font-size: 14px;
      margin-top: calc(var(--item-margin) / 2);
      margin-left: auto;
    }
  }

  @media (max-width: 768px) {
    .allProducts-header-quote {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 600px) {
    .allProducts-header-quote {
      /* font-size: 1.5rem; */
    }

    .header-btn-link {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    width: 80%;
    left: 50%;
    transform: translate(-50%, -35%);

    .allProducts-header-quote {
      width: auto;
      /* font-size: 1.8rem; */
    }
    .allProducts-header-subquote {
      font-size: 10px;
    }
  }

  @media (max-width: 380px) {
    .allProducts-header-subquote {
      width: 60%;
      margin-left: auto;
    }
    .header-btn-link {
      padding: 5px 7px;
    }
  }
`;

export const HeaderBgShape = styled.div`
  width: 100%;
  margin-top: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
  .header-bg-shape {
    width: 80%;
    /* text-align: center; */
  }

  @media (max-width: 380px) {
    display: none;
  }
`;
