import styled from "styled-components";
import { Link } from "gatsby";

export const Table = styled.div`
  width: 100%;
  display: table;
  border-spacing: 0px 10px;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const ProductQuantity = styled.div`
  position: relative;
  display: flex;
  font-family: var(--secondary-font);
  justify-content: center;
  align-items: center;

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

  @media (max-width: 1024px) {
    input {
      width: 70px;
      padding-left: 32px;
    }

    input[type="number"] {
      font-size: 12px;
    }

    .quantity-button.quantity-down {
      right: 50px;
    }
  }

  @media (max-width: 600px) {
    input {
      width: 60px;
      padding-left: 27px;
      height: 20px;
    }

    input[type="number"] {
      font-size: 10px;
    }

    .quantity-nav {
      height: 40px;
    }

    .quantity-button.quantity-down,
    .quantity-button.quantity-up {
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .quantity-button.quantity-down {
      right: 40px;
    }
  }
`;

export const ItemLink = styled(Link)`
  text-decoration-color: var(--text-color);

  &:hover {
    text-decoration-color: var(--primary-color);

    .item-name {
      color: var(--primary-color) !important;
    }
  }
`;

export const TableHeader = styled.div`
  display: table-header-group;
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  opacity: 0.55;
  font-family: var(--small-title-font);
  color: var(--text-color);

  .table-header-cell {
    display: table-cell;
    padding: 15px 20px;
    text-align: center;

    &:first-child {
      padding: 15px 20px 15px 50px;
    }

    &:last-child {
      padding: 15px 50px 15px 20px;
    }
  }

  @media (max-width: 1280px) {
    &:last-child {
      padding: 15px 75px 15px 20px;
    }
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    &:first-child {
      padding: 15px 20px 15px 35px;
    }

    &:last-child {
      padding: 15px 35px 15px 20px;
    }
  }

  @media (max-width: 600px) {
    font-size: 12px;

    &:first-child {
      padding: 10px 15px 10px 25px;
    }

    &:last-child {
      padding: 10px 25px 10px 15px;
    }
  }

  @media (max-width: 320px) {
    .table-header-cell:nth-child(2) {
      display: none;
    }
  }
`;

export const TableBody = styled.div`
  display: table-row-group;
`;

export const RemoveAllWrapper = styled.div`
  width: 100%;
  padding: 20px 5% 20px 20px;
  text-align: right;

  @media (max-width: 1024px) {
    padding: 20px 35px 20px 20px;
  }

  @media (max-width: 600px) {
    padding: 15px 25px 15px 15px;
  }
`;

export const RemoveAllBtn = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: var(--content-font);
  text-decoration: underline;
`;

export const TableCell = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 20px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.045);
  border-top: 1px solid rgba(0, 0, 0, 0.045);

  .item-price {
    font-family: var(--secondary-font);
    color: var(--text-color);
    font-size: 14px;
  }

  &:not(:first-child) {
    text-align: center;
  }

  &:first-child {
    padding: 20px 10px 20px 50px;
  }

  &:last-child {
    padding: 20px 50px 20px 10px;
  }

  @media (max-width: 1280px) {
    &:last-child {
      padding: 20px 75px 20px 10px;
    }
  }

  @media (max-width: 1024px) {
    &:first-child {
      padding: 20px 10px 20px 35px;
    }

    &:last-child {
      padding: 20px 35px 20px 10px;
    }

    .item-price {
      font-size: 12px;
      font-weight: 500;
    }
  }

  @media (max-width: 600px) {
    &:first-child {
      padding: 15px 10px 15px 25px;
      max-width: 200px;
    }

    &:last-child {
      padding: 15px 25px 15px 10px;
    }
  }

  @media (max-width: 480px) {
    &:first-child {
      padding: 15px 10px 15px 15px;
      max-width: 150px;
    }

    &:last-child {
      padding: 15px 15px 15px 10px;
    }
  }

  @media (max-width: 420px) {
    &:first-child {
      padding: 15px 10px 15px 5px;
      max-width: 125px;
    }

    &:last-child {
      padding: 15px 20px 15px 10px;
    }
  }

  @media (max-width: 360px) {
    &:first-child {
      max-width: 115px;
    }
  }

  @media (max-width: 320px) {
    &:nth-child(2) {
      display: none;
    }
  }
`;

export const IconWrapper = styled.div`
  display: inline-block;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CancelIcon = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--text-color);
  font-family: var(--content-font);
  font-size: 1rem;
  text-decoration: underline;
  opacity: 0.75;
  transition: opacity 300ms;

  svg {
    color: rgba(202, 11, 0, 0.75) !important;
    transform: color 400ms;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    svg {
      margin-top: 2px;
    }
  }
`;

export const ItemDetailsWrapper = styled.div`
  display: flex;
  .item-image {
    .gatsby-image-wrapper {
      img {
        object-fit: contain !important;
      }
    }
  }

  .item-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;

    .item-name {
      font-size: 18px;
      font-weight: 700;
      text-transform: capitalize;
      color: var(--text-color);
      margin-bottom: 4px;
    }
    .item-size {
      font-family: var(--content-font);
      font-size: 14px;
      color: rgba(90, 90, 90, 0.75);
    }

    & > div:not(:last-child) {
      margin-bottom: 7px;
    }
  }

  @media (max-width: 1024px) {
    .item-image {
      .gatsby-image-wrapper {
        max-height: 70px !important;
        max-width: 100px !important;
      }
    }

    .item-details {
      .item-name {
        font-size: 16px;
      }
      .item-size {
        font-size: 14px;
      }

      .item-gender {
        svg {
          font-size: 18px !important;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .item-image {
      .gatsby-image-wrapper {
        max-height: 60px !important;
        max-width: 80px !important;
      }
    }
  }

  @media (max-width: 600px) {
    .item-image {
      .gatsby-image-wrapper {
        max-height: 55px !important;
        max-width: 70px !important;
      }
    }

    .item-details {
      margin-left: 7px;

      .item-name {
        font-size: 14px;
      }

      .item-size {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    .item-details {
      margin: 7px 0 0 10px;

      .item-name {
        margin-bottom: 7px;
      }
    }
  }

  @media (max-width: 420px) {
    .item-image {
      .gatsby-image-wrapper {
        max-height: 50px !important;
        max-width: 60px !important;
      }
    }
  }
`;

export const TableRow = styled.div`
  display: table-row;
  background: #f8f8f8;

  height: 135px;
  @media (max-width: 1024px) {
    height: 125px;
  }

  @media (max-width: 600px) {
    height: 110px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;
export const TotalPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 7px;
  min-height: 150px;
  align-items: center;

  @media (max-width: 480px) {
    margin-top: 15px;
  }
`;
export const AdditionalFees = styled.div`
  font-size: 14px;
  font-family: var(--secondary-font);
  color: rgba(90, 90, 90, 0.75);

  .shipping-price {
    font-weight: 500;
    color: rgba(90, 90, 90, 0.85);
  }

  @media (max-width: 1024px) {
    font-size: 12px;
    .shipping-price {
      font-size: 14px;
    }
  }

  @media (max-width: 420px) {
    .shipping-price {
      font-size: 12px;
    }
  }
`;

export const TotalPrice = styled.div`
  font-family: var(--secondary-font);
  color: rgba(90, 90, 90, 0.85);

  font-size: 1.15rem;
  .total-price {
    font-size: 1.35rem;
    font-weight: 700;
    color: rgba(53, 53, 53, 0.85);
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    .total-price {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;

    .total-price {
      font-size: 1.1rem;
    }
  }
`;

export const CheckoutBtn = styled.div``;
