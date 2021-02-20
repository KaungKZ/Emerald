import styled from "styled-components";

export const Product_Detail_Wrapper = styled.section`
  /* width: 90%;
  margin: 0 auto 25px auto; */
  width: 100%;
  margin-bottom: 25px;
`;
export const TopSection = styled.div`
  width: 90%;
  display: flex;
  position: relative;
  margin: var(--large-item-margin) auto;
`;

export const ProductImages = styled.div`
  /* width: 100%; */
  margin-right: 7%;

  display: flex;
  flex-direction: column;

  .product-image {
    background: #f2f2f2;
    margin-bottom: 15px;
    padding: 20px;
    /* box-sizing: unset; */
  }
  /* .product-image {
  } */
`;

export const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -35px;
`;
export const ProductContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .detail-title {
    font-weight: 700;
    margin-right: 10px;
    color: var(--text-color);
    font-size: 14px;
  }

  > :not(:last-child) {
    margin-bottom: 30px;
  }
  /* justify-content: space-between; */
  /* > * {
  } */

  .product-price {
    font-weight: 700;
    color: var(--light-text-color);
    font-size: 1.5rem;
    font-family: var(--secondary-font);
  }

  .product-size .product-size-description {
    font-family: var(--secondary-font);
    color: var(--light-text-color);
  }

  .product-size,
  .product-quality {
    position: relative;
    display: flex;
    font-family: var(--secondary-font);
    display: flex;
    align-items: center;

    /* span {
      margin-right: 10px;
      color: var(--text-color);
      font-size: 14px;
    } */

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      color: var(--text-color);
      -moz-appearance: textfield;
      font-family: var(--secondary-font);
    }

    input {
      width: 90px;
      height: 25px;
      line-height: 1.65;
      padding: 0;
      margin: 0;
      padding-left: 40px;
      border: 1px solid #eee;
    }

    input:focus {
      outline: 0;
    }

    .quantity-nav {
      float: left;
      position: relative;
      height: 42px;
    }

    .quantity-button {
      position: relative;
      cursor: pointer;
      border-left: 1px solid #eee;
      width: 20px;
      text-align: center;
      color: #333;
      font-size: 13px;
      font-family: "Trebuchet MS", Helvetica, sans-serif !important;
      line-height: 1.7;
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
    }

    .quantity-button.quantity-up {
      outline: none;
      position: absolute;
      height: 25px;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      border-bottom: 1px solid #eee;
    }

    .quantity-button.quantity-down {
      outline: none;
      border-right: 1px solid #eee;
      height: 25px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border-bottom: 1px solid #eee;
      right: 70px;
    }
  }

  .product-gender {
    font-family: var(--secondary-font);
    display: flex;
    font-size: 12px;

    span {
      height: 35px;
      width: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      border: 1px solid var(--grey-color);
      /* border: 1px solid #eee; */
      transition: all 300ms;
      color: var(--text-color);
      cursor: pointer;

      &:hover {
        background: var(--general-color);
        color: #fff;
      }
    }

    .active {
      background: var(--general-color);
      color: #fff;
    }

    /* .disabled {
      cursor: not-allowed;
      background: rgba(0, 0, 0, 0.1);
      border: none;
      color: rgba(0, 0, 0, 0.22);

      &:hover {
        color: rgba(0, 0, 0, 0.22);
        background: rgba(0, 0, 0, 0.1);
      }
    } */
  }

  .product-description {
    max-width: 800px;
    font-family: var(--secondary-font);

    p {
      font-family: var(--secondary-font);
      margin-top: 25px;
      color: var(--light-text-color);
      font-size: 16px;
      line-height: 30px;
    }
  }

  .product-buttons {
    display: flex;

    .product-add-to-cart {
      margin-right: 20px;
    }
  }
`;

export const ProductOption = styled.button`
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  cursor: pointer;
  outline: none;
  background: transparent;
  border: none;
  transition: background 200ms;
  border-radius: 50px;

  &.active {
    background: #efefef;
  }

  &:hover {
    background: #efefef;
  }
`;

export const ProductHeader = styled.div`
  font-family: var(--small-title-font);
  color: var(--light-text-color);
  margin-bottom: 20px;

  .product-title {
    font-size: 2.2rem;
  }

  .product-by {
    font-size: 14px;
    color: var(--primary-color);
    margin: 15px 0 25px 0;

    span {
      font-weight: 700;
      color: var(--light-text-color);
      text-decoration: underline;
    }
  }
`;

export const OptionPopupStyles = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 10px;
  min-width: 130px;
  max-width: 200px;
  background: var(--general-color);

  border-radius: 4px;
  /* color: #fff; */
  opacity: 0;
  transition: opacity 200ms ease;
  /* display: none; */
  visibility: hidden;
  padding: 5px 0px;

  &.active {
    opacity: 1;
    visibility: visible;
    /* transition: opacity 200ms ease-in; */
    /* display: block; */
  }
  /* width: fit-content; */
  /* max-width: 150px; */

  ul {
    li {
      list-style-type: none;
      font-size: 12px;
      padding: 4px;
      font-family: var(--small-title-font);
      cursor: pointer;
      transition: all 250ms;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(255, 255, 255, 0.9);

      &:hover {
        color: rgba(255, 255, 255, 1);
        background: rgba(255, 255, 255, 0.095);
        /* border-radius: 4px; */
      }
    }
  }
`;

export const ProductOptionWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  /* cursor: pointer; */
  /* outline: none; */
  /* background: transparent; */
  /* border: none; */
  /* transition: background 200ms; */
  /* border-radius: 50px; */
`;

export const BottomSection = styled.div`
  width: 90%;
  margin: 0 auto;
`;
