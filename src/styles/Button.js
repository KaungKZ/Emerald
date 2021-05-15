import styled from "styled-components";

export const TextButton = styled.button`
  /* margin-top: 25px; */
  /* margin: 25px auto 0 auto; */
  cursor: pointer;
  margin: var(--btn-margin);
  padding: var(--sm-btn-padding);
  font-family: var(--secondary-font);
  font-size: ${props => (props.large ? "var(--btn-text)" : "16px")};
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
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 360px) {
    font-size: 12px;
  }
`;

export const BgButton = styled.button`
  /* margin-top: 25px; */
  /* margin: 25px 0 0 0; */
  margin: var(--btn-margin);
  cursor: pointer;
  padding: ${props => (props.small ? "3px 40px" : "var(--btn-padding)")};
  font-family: var(--secondary-font);
  font-size: var(--normal-text);
  /* color: var(--text-color); */
  background: ${props => (props.bg ? "var(--general-color)" : "#fff")};
  color: ${props => (props.bg ? "#fff" : "var(--text-color)")};
  border: ${props =>
    props.no_border ? "none" : "1px solid rgba(96, 96, 96, 0.6)"};
  text-decoration: none;
  display: flex;
  align-items: center;
  width: fit-content;
  text-transform: capitalize;
  outline: none;
  transition: all 400ms;
  height: ${props => (props.small ? "35px" : "unset")};

  &:hover {
    background: var(--general-color);
    color: #fff;
  }

  @media (max-width: 480px) {
    padding: ${props => (props.small ? "2px 30px" : "var(--btn-padding)")};
  }

  @media (max-width: 420px) {
    height: ${props => (props.small ? "30px" : "unset")};
  }
`;

// export const BgButton = styled.button`
//   /* margin-top: 25px; */
//   margin: 25px 0 0 0;
//   cursor: pointer;
//   padding: var(--btn-padding);
//   font-family: var(--secondary-font);
//   font-size: var(--normal-text);
//   color: var(--text-color);
//   background: #fff;
//   border: 1px solid rgba(96, 96, 96, 0.6);
//   text-decoration: none;
//   display: flex;
//   align-items: center;
//   width: fit-content;
//   text-transform: capitalize;
//   outline: none;
//   transition: all 400ms;

//   &:hover {
//     background: var(--general-color);
//     color: #fff;
//   }
// `;

export const Arrow_Button = styled.button`
  margin: var(--btn-margin);
  padding: ${props =>
    props.large ? "var(--large-btn-padding)" : "var(--btn-padding)"};
  font-family: var(--secondary-font);
  /* font-size: var(--normal-text); */
  font-size: 1rem;
  color: ${props => (props.dark ? "#fff" : "#353535")};
  background: ${props => (props.dark ? "#5a5a5a" : "#fff")};
  outline: none;
  cursor: pointer;
  border: ${props =>
    props.no_border ? "none" : "1px solid rgba(96, 96, 96, 0.6)"};
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
