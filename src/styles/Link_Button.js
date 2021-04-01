import styled from "styled-components";
import { Link } from "gatsby";

export const Main_Button = styled(Link)`
  padding: var(--btn-padding);
  font-family: var(--secondary-font);
  font-size: var(--btn-text);
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
  padding: var(--small-btn-padding);
  font-size: 14px;
  color: var(--light-text-color);
  text-decoration: none;
  text-transform: capitalize;
  /* font-size: var(--normal-text); */
  transition: opacity 300ms;
  opacity: 0.9;
  /* align-items: center; */
  border: 1px solid rgba(96, 96, 96, 0.6);
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
