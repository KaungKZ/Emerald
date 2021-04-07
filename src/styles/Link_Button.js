import styled from "styled-components";
import { Link } from "gatsby";

export const Main_Button = styled(Link)`
  padding: 10px 20px;
  font-family: var(--secondary-font);
  font-size: 16px;
  color: var(--text-color);
  background: #fff;
  border: 1px solid rgba(96, 96, 96, 0.6);
  text-decoration: none;
  display: flex;
  align-items: center;
  width: fit-content;
  text-transform: capitalize;
  transition: all 400ms;

  .arrow-right-icon {
    font-size: 0px !important;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 400ms;
  }

  &:hover {
    .arrow-right-icon {
      transform: translateX(0%);
      font-size: 25px !important;
      opacity: 1;
      margin-left: 10px;
    }
  }

  @media (max-width: 800px) {
    font-size: 14px;
    padding: 5px 15px;
  }

  @media (max-width: 600px) {
    .arrow-right-icon {
      font-size: 18px !important;
      opacity: 1;
      transform: translateX(0%);
      /* transition: all 0s; */
      margin-left: 10px;
      transition: all 400ms;

      &:hover {
        .arrow-right-icon {
          /* display: none; */
          transform: translateX(0%);
          font-size: 18px !important;
          opacity: 1;
          margin-left: 10px;
          /* font-size: 18px !important; */
          /* transition: all 400ms; */
        }
      }

      /* &:hover {
        font-size: 18px !important;
      } */
    }
  }

  @media (max-width: 320px) {
    font-size: 12px;
    padding: 5px 10px;
    .arrow-right-icon {
      margin-left: 5px;
    }
  }
`;

export const Button = styled(Link)`
  /* margin-left: 15px; */
  /* display: flex; */
  font-family: var(--secondary-font);
  /* padding: var(--small-btn-padding); */
  font-size: 14px;
  position: relative;
  /* color: var(--light-text-color); */
  text-decoration: none;
  text-transform: capitalize;
  /* font-size: var(--normal-text); */
  transition: opacity 300ms;
  display: flex;
  align-items: center;
  position: relative;
  opacity: 0.9;
  /* align-items: center; */
  /* border: 1px solid rgba(96, 96, 96, 0.6); */
  transition: all 300ms;
  color: var(--text-color);
  width: fit-content;
  margin: 0 auto;

  .arrow-right-icon {
    transform: translateX(0%);
    font-size: 20px !important;
    opacity: 1;
    margin-left: 10px;
  }

  &::after {
    content: "";
    position: absolute;
    background: #606060;
    width: 25%;
    height: 1px;
    border-radius: 9px;
    top: 100%;
    left: 0;
    transition: width 400ms;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;

    .arrow-right-icon {
      font-size: 18px !important;
      margin-left: 7px;
    }
  }

  @media (max-width: 480px) {
    .arrow-right-icon {
      /* font-size: 18px !important; */
      margin-left: 5px;
    }
  }

  @media (max-width: 480px) {
    font-size: 10px;

    .arrow-right-icon {
      font-size: 16px !important;
    }
  }
`;

export const Arrow_Button = styled(Link)`
  margin-left: 15px;
  display: flex;
  color: var(--light-text-color);
  text-decoration: none;
  text-transform: capitalize;
  font-size: var(--normal-text);
  transition: opacity 300ms;
  opacity: 0.9;
  align-items: center;

  .see-all-icon {
    margin-left: 10px;
  }

  &:hover {
    opacity: 1;
  }

  @media (max-width: 480px) {
    .see-all-icon {
      font-size: 18px !important;
      margin-left: 8px;
    }
  }

  @media (max-width: 360px) {
    margin-left: 10px;
    .see-all-link {
      margin-left: 7px;
    }

    .see-all-icon {
      /* font-size: 18px !important; */
      margin-left: 4px;
    }
  }
`;
