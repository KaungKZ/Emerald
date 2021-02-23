import styled from "styled-components";

export const TextButton = styled.button`
  /* margin-top: 25px; */
  margin: 25px auto 0 auto;
  cursor: pointer;
  padding: var(--btn-padding);
  font-family: var(--secondary-font);
  font-size: var(--btn-text);
  color: var(--text-color);
  /* background: #fff; */
  background: transparent;
  border: none;
  /* border: 1px solid rgba(96, 96, 96, 0.6); */
  text-decoration: underline;
  /* text-decoration: none; */
  display: flex;
  align-items: center;
  width: fit-content;
  text-transform: capitalize;
  outline: none;
  transition: all 400ms;
`;

export const BgButton = styled.button`
  /* margin-top: 25px; */
  margin: 25px 0 0 0;
  cursor: pointer;
  padding: var(--btn-padding);
  font-family: var(--secondary-font);
  font-size: var(--normal-text);
  color: var(--text-color);
  background: #fff;
  border: 1px solid rgba(96, 96, 96, 0.6);
  text-decoration: none;
  display: flex;
  align-items: center;
  width: fit-content;
  text-transform: capitalize;
  outline: none;
  transition: all 400ms;

  &:hover {
    background: var(--general-color);
    color: #fff;
  }
`;

export const Arrow_Button = styled.button`
  padding: var(--btn-padding);
  font-family: var(--secondary-font);
  font-size: var(--normal-text);
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
      font-size: 23px !important;
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
`;
